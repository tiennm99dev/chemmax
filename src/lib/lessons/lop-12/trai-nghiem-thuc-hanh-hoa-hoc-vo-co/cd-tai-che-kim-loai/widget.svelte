<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { CAN_MASS, PRIMARY_KWH, RECYCLED_KWH, STAGES, canBudget, rateVerdict } from './engine.js';

  /** Box corner of each stage in the diagram. */
  const BOX = {
    'khai-thac': { x: 10, y: 10 },
    alumina: { x: 10, y: 85 },
    'dien-phan': { x: 10, y: 160 },
    'can-dap': { x: 130, y: 160 },
    'su-dung': { x: 250, y: 160 },
    'thu-gom': { x: 250, y: 85 },
    'nau-chay': { x: 130, y: 85 },
  };
  const W = 104;
  const H = 30;
  const uid = $props.id();

  let cans = $state(1000);
  let rate = $state(30);
  let stageId = $state('dien-phan');

  const budget = $derived(canBudget({ cans, rate }));
  const verdict = $derived(rateVerdict(rate));
  const stage = $derived(STAGES.find((s) => s.id === stageId) ?? STAGES[0]);
  /** Stroke width of the ore route and of the recycling loop. */
  const wOre = $derived(rate >= 100 ? 0 : 2 + (10 * (100 - rate)) / 100);
  const wLoop = $derived(rate <= 0 ? 0 : 2 + (10 * rate) / 100);
  const usedShare = $derived(budget.allPrimary > 0 ? budget.energy / budget.allPrimary : 1);

  const label = $derived(
    `Vòng đời lon nhôm. Đường từ quặng: khai thác bauxite, tinh chế alumina, điện phân nóng chảy, rồi cán, dập lon và sử dụng. ` +
      `Sau khi dùng, ${rate}% lon được thu gom, nấu chảy, đúc thỏi và quay lại cán, dập lon; ${100 - rate}% thành rác, phần nhôm đó phải làm mới từ quặng.`,
  );

  /** @param {'primary' | 'recycled' | 'both'} path */
  function fillOf(path) {
    if (path === 'primary') return '#ffedd5';
    if (path === 'recycled') return '#d1fae5';
    return '#e0e7ff';
  }
</script>

<div class="space-y-3">
  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    <SliderField label="Số lon cần sản xuất" bind:value={cans} min={100} max={5000} step={100} />
    <SliderField
      label="Tỉ lệ lon cũ được tái chế"
      bind:value={rate}
      min={0}
      max={100}
      step={5}
      unit="%"
    />
  </div>

  <svg viewBox="0 0 370 250" class="mx-auto w-full max-w-lg" role="img" aria-label={label}>
    <defs>
      <marker
        id="{uid}-ore"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="9"
        markerHeight="9"
        markerUnits="userSpaceOnUse"
        orient="auto"
      >
        <path d="M0 0 L10 5 L0 10 z" fill="#ea580c" />
      </marker>
      <marker
        id="{uid}-loop"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="9"
        markerHeight="9"
        markerUnits="userSpaceOnUse"
        orient="auto"
      >
        <path d="M0 0 L10 5 L0 10 z" fill="#059669" />
      </marker>
    </defs>
    {#if wOre > 0}
      <g stroke="#fb923c" stroke-width={wOre} stroke-linecap="butt" fill="none">
        <line x1="62" y1="40" x2="62" y2="80" marker-end="url(#{uid}-ore)" />
        <line x1="62" y1="115" x2="62" y2="155" marker-end="url(#{uid}-ore)" />
        <line x1="114" y1="175" x2="126" y2="175" marker-end="url(#{uid}-ore)" />
        <line x1="302" y1="190" x2="302" y2="216" marker-end="url(#{uid}-ore)" />
      </g>
    {/if}
    {#if wLoop > 0}
      <g stroke="#34d399" stroke-width={wLoop} fill="none">
        <line x1="302" y1="160" x2="302" y2="120" marker-end="url(#{uid}-loop)" />
        <line x1="250" y1="100" x2="238" y2="100" marker-end="url(#{uid}-loop)" />
        <line x1="182" y1="115" x2="182" y2="155" marker-end="url(#{uid}-loop)" />
      </g>
    {/if}
    <line x1="234" y1="175" x2="246" y2="175" stroke="#6366f1" stroke-width="6" />
    {#each STAGES as s (s.id)}
      {@const b = BOX[/** @type {keyof typeof BOX} */ (s.id)]}
      <rect
        x={b.x}
        y={b.y}
        width={W}
        height={H}
        rx="6"
        fill={fillOf(s.path)}
        stroke={s.id === stageId ? '#1e293b' : '#94a3b8'}
        stroke-width={s.id === stageId ? 2.5 : 1}
      />
      <text
        x={b.x + W / 2}
        y={b.y + H / 2 + 3.5}
        text-anchor="middle"
        font-size="9.5"
        fill="#1e293b">{s.name}</text
      >
    {/each}
    <rect x="254" y="220" width="96" height="24" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
    <text x="302" y="236" text-anchor="middle" font-size="9.5" fill="#475569"
      >Bãi rác ({100 - rate}%)</text
    >
    <text x="310" y="142" font-size="9.5" fill="#047857">{rate}%</text>
  </svg>

  <div role="group" aria-label="Xem từng công đoạn" class="flex flex-wrap gap-1.5">
    {#each STAGES as s (s.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 py-1.5 text-sm font-semibold {focusRing} {s.id ===
        stageId
          ? 'border-slate-800 bg-slate-800 text-white'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
        aria-pressed={s.id === stageId}
        onclick={() => (stageId = s.id)}>{s.name}</button
      >
    {/each}
  </div>
  <p
    class="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700"
    aria-live="polite"
  >
    <span class="font-semibold text-slate-900"
      >{stage.name} ({stage.path === 'primary'
        ? 'chỉ có ở đường từ quặng'
        : stage.path === 'recycled'
          ? 'chỉ có ở vòng tái chế'
          : 'chung cho cả hai đường'}):</span
    >
    <LiveRichText text={stage.detail} />
  </p>

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="text-slate-700">
      {formatNumber(cans)} lon × {CAN_MASS} g = {formatNumber(budget.mass, 2)} kg nhôm: {formatNumber(
        budget.recycled,
        2,
      )} kg từ lon tái chế ({formatNumber(RECYCLED_KWH, 2)} kWh/kg), {formatNumber(
        budget.primary,
        2,
      )} kg từ quặng ({PRIMARY_KWH} kWh/kg, cần khai thác khoảng {formatNumber(budget.bauxite, 1)} kg
      bauxite).
    </p>
    <div class="mt-2 space-y-1.5">
      <div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Nếu làm hết từ quặng</span><span>{formatNumber(budget.allPrimary, 1)} kWh</span>
        </div>
        <div class="h-3 rounded bg-orange-400"></div>
      </div>
      <div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Có {rate}% tái chế</span><span>{formatNumber(budget.energy, 1)} kWh</span>
        </div>
        <div class="h-3 rounded bg-slate-100">
          <div class="h-3 rounded bg-emerald-500" style="width: {usedShare * 100}%"></div>
        </div>
      </div>
    </div>
    <p class="mt-2 font-semibold text-emerald-800">
      Tiết kiệm được {formatNumber(budget.saved, 1)} kWh ({formatNumber(
        (1 - usedShare) * 100,
        1,
      )}%).
    </p>
  </div>

  <FeedbackNote tone={verdict.tone} text={verdict.text} />
</div>
