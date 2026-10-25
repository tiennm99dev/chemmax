<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { parseNumber } from '#lib/units-engine/format.js';
  import {
    AIR,
    KELVIN_OFFSET,
    LEFT_OVER,
    SHAKEN,
    TARGETS,
    THERMOMETERS,
    column,
    isStill,
    judge,
    marks,
    settle,
    tempText,
  } from './engine.js';

  // The rising column shows why one must wait before reading, so it moves
  // even under prefers-reduced-motion; it only moves after a learner action.

  /** Simulated seconds per real second. */
  const SPEED = 10;

  const TH_OPTIONS = THERMOMETERS.map((t) => ({ value: t.id, label: t.name }));
  const TARGET_OPTIONS = TARGETS.map((t) => ({ value: t.id, label: t.name }));

  let thId = $state(THERMOMETERS[0].id);
  let targetId = $state(TARGETS[0].id);
  let inContact = $state(false);
  let simNow = $state(0);
  let phase = $state({ from: AIR, to: AIR, since: 0 });
  let peak = $state(LEFT_OVER);
  let typedC = $state('');
  let typedK = $state('');
  /** @type {{ ok: boolean, messages: string[] } | null} */
  let result = $state(null);

  const th = $derived(THERMOMETERS.find((t) => t.id === thId) ?? THERMOMETERS[0]);
  const target = $derived(TARGETS.find((t) => t.id === targetId) ?? TARGETS[0]);
  const bulb = $derived(settle(phase.from, phase.to, th.tau, simNow - phase.since));
  const col = $derived(column(th, bulb, peak));
  const still = $derived(inContact && isStill(th, bulb, target.temp));
  const waited = $derived(inContact ? Math.max(0, simNow - phase.since) : 0);

  const clock = () => (performance.now() / 1000) * SPEED;

  $effect(() => {
    const moving = Math.abs(bulb - phase.to) > 0.005;
    if (!moving) return;
    let frame = 0;
    const tick = () => {
      simNow = clock();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });

  // The narrow neck of the medical thermometer holds the highest level.
  $effect(() => {
    if (th.keepsMax && bulb > peak) peak = bulb;
  });

  /** @param {number} to */
  function moveTo(to) {
    simNow = clock();
    phase = { from: bulb, to, since: simNow };
    result = null;
  }
  function toggleContact() {
    inContact = !inContact;
    moveTo(inContact ? target.temp : AIR);
  }
  /** @param {string | number} id */
  function chooseTarget(id) {
    targetId = String(id);
    if (inContact) moveTo(target.temp);
    result = null;
  }
  /** @param {string | number} id */
  function chooseTh(id) {
    thId = String(id);
    inContact = false;
    simNow = clock();
    phase = { from: AIR, to: AIR, since: simNow };
    peak = th.keepsMax ? LEFT_OVER : AIR;
    typedC = '';
    typedK = '';
    result = null;
  }
  function shake() {
    peak = SHAKEN;
    result = null;
  }
  function record() {
    result = judge({
      th,
      target,
      inContact,
      still,
      peak,
      celsius: parseNumber(typedC),
      kelvin: parseNumber(typedK),
    });
  }

  // ---- drawing ----
  const TX = 150;
  const TOP = 24;
  const BOTTOM = 236;
  /** @param {number} v */
  const yOf = (v) => BOTTOM - ((v - th.min) / (th.max - th.min)) * (BOTTOM - TOP);
  const scaleMarks = $derived(marks(th, th.min, th.max));
  const colTop = $derived(col.under ? BOTTOM + 14 : yOf(col.level));
  const liquidColor = $derived(th.liquid === 'rượu' ? '#dc2626' : '#64748b');
  const water = $derived(
    target.temp >= 60
      ? '#fecaca'
      : target.temp >= 30
        ? '#fed7aa'
        : target.temp <= 2
          ? '#e0f2fe'
          : '#bfdbfe',
  );

  const INSET_K = 340 / 12;
  const insetMarks = $derived(marks(th, col.level - 6 * th.dcnn, col.level + 6 * th.dcnn));

  const status = $derived(
    col.over
      ? `Chất lỏng dâng quá vạch cuối (${formatNumber(th.max)} °C)!`
      : col.under
        ? `Chất lỏng ở dưới vạch đầu tiên (${formatNumber(th.min)} °C).`
        : inContact
          ? still
            ? 'Mực chất lỏng đã đứng yên: có thể đọc.'
            : 'Mực chất lỏng đang thay đổi: chờ thêm.'
          : 'Bầu nhiệt kế đang ở ngoài không khí.',
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn nhiệt kế" options={TH_OPTIONS} value={thId} onchange={chooseTh} />
  <p class="text-sm text-slate-600">
    {th.name} ({th.liquid}): đo từ <strong>{formatNumber(th.min)} °C</strong> đến
    <strong>{formatNumber(th.max)} °C</strong>, ĐCNN <strong>{formatNumber(th.dcnn)} °C</strong>.
  </p>
  <SegmentedControl
    label="Vật cần đo nhiệt độ"
    options={TARGET_OPTIONS}
    value={targetId}
    onchange={chooseTarget}
  />

  <svg
    viewBox="0 0 360 300"
    class="block w-full"
    role="img"
    aria-label="{th.name} với thang độ C bên trái và thang kelvin bên phải. {status}"
  >
    <text x="112" y="14" font-size="11" text-anchor="end" fill="#334155">°C</text>
    <text x="188" y="14" font-size="11" fill="#334155">K</text>
    {#if inContact}
      <rect
        x="104"
        y="214"
        width="92"
        height="80"
        rx="6"
        fill={water}
        stroke="#0369a1"
        opacity="0.9"
      />
      <text x="200" y="290" font-size="11" fill="#0f172a">{target.name}</text>
    {:else}
      <rect x="262" y="214" width="80" height="80" rx="6" fill={water} stroke="#0369a1" />
      <text x="302" y="208" font-size="11" text-anchor="middle" fill="#0f172a">{target.name}</text>
    {/if}
    <!-- tube and bulb -->
    <rect
      x={TX - 7}
      y={TOP - 10}
      width="14"
      height={BOTTOM - TOP + 30}
      rx="7"
      fill="#f8fafc"
      stroke="#475569"
    />
    <circle cx={TX} cy={BOTTOM + 30} r="13" fill={liquidColor} stroke="#475569" />
    <rect x={TX - 3} y={colTop} width="6" height={BOTTOM + 30 - colTop} fill={liquidColor} />
    {#each scaleMarks as m (m.value)}
      {@const y = yOf(m.value)}
      <line
        x1={TX - 8}
        x2={TX - 8 - (m.kind === 'label' ? 12 : m.kind === 'half' ? 8 : 4)}
        y1={y}
        y2={y}
        stroke="#0f172a"
        stroke-width={m.kind === 'label' ? 1.2 : 0.6}
      />
      {#if m.kind === 'label'}
        <text x={TX - 24} y={y + 3.5} font-size="10" text-anchor="end" fill="#0f172a"
          >{formatNumber(m.value)}</text
        >
        <line x1={TX + 8} x2={TX + 16} y1={y} y2={y} stroke="#0f172a" stroke-width="1" />
        <text x={TX + 20} y={y + 3.5} font-size="10" fill="#0f172a"
          >{formatNumber(m.value + KELVIN_OFFSET)}</text
        >
      {/if}
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={toggleContact}>
      {inContact
        ? 'Lấy nhiệt kế ra'
        : target.id === 'nach'
          ? 'Kẹp nhiệt kế vào nách'
          : 'Nhúng bầu nhiệt kế vào'}
    </button>
    {#if th.keepsMax}
      <button type="button" class={button.quiet} onclick={shake} disabled={inContact}>
        Vẩy nhiệt kế
      </button>
    {/if}
  </div>
  <p class="text-sm text-slate-600">
    {status}
    {#if inContact}
      Đã đặt {formatNumber(Math.floor(waited))} giây.
    {/if}
  </p>

  <div class="rounded-xl border border-slate-200 bg-white p-2">
    <p class="px-2 text-xs font-semibold text-slate-600">Phóng to chỗ mực chất lỏng (thang °C)</p>
    <svg
      viewBox="0 0 360 80"
      class="block w-full"
      role="img"
      aria-label="Hình phóng to mực chất lỏng trên thang độ C"
    >
      <rect x="0" y="10" width="360" height="62" fill="#f8fafc" />
      {#if !col.under}
        <rect x="0" y="40" width="180" height="10" fill={liquidColor} />
      {/if}
      {#each insetMarks as m (m.value)}
        {@const x = 180 + ((m.value - col.level) / th.dcnn) * INSET_K}
        <line
          x1={x}
          x2={x}
          y1="10"
          y2={10 + (m.kind === 'label' ? 26 : m.kind === 'half' ? 18 : 11)}
          stroke="#0f172a"
          stroke-width={m.kind === 'label' ? 1.6 : 1}
        />
        {#if m.kind === 'label'}
          <text {x} y="66" font-size="13" text-anchor="middle" fill="#0f172a"
            >{formatNumber(m.value)}</text
          >
        {/if}
      {/each}
      {#if col.under}
        <text x="180" y="66" font-size="12" text-anchor="middle" fill="#b91c1c"
          >chất lỏng dưới vạch đầu tiên</text
        >
      {:else if col.over}
        <text x="356" y="66" font-size="12" text-anchor="end" fill="#b91c1c">quá vạch cuối!</text>
      {/if}
    </svg>
  </div>

  <form
    class="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
    onsubmit={(e) => {
      e.preventDefault();
      record();
    }}
  >
    <label class="min-w-0">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Nhiệt độ (°C)</span>
      <input
        class={textInput}
        inputmode="decimal"
        bind:value={typedC}
        placeholder="ví dụ {tempText(th.min + 1, th)}"
      />
    </label>
    <label class="min-w-0">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Đổi ra kelvin (K)</span>
      <input class={textInput} inputmode="decimal" bind:value={typedK} placeholder="T = t + 273" />
    </label>
    <button type="submit" class={button.primary}>Ghi kết quả</button>
  </form>

  <div
    class="rounded-xl px-4 py-3 text-sm {result?.ok
      ? 'bg-emerald-50 text-emerald-900'
      : result
        ? 'bg-amber-50 text-amber-900'
        : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    {#if result}
      <ul class="list-disc space-y-1 pl-5">
        {#each result.messages as msg, i (i)}
          <li>{msg}</li>
        {/each}
      </ul>
    {:else}
      Chọn nhiệt kế đo được nhiệt độ của vật, đặt bầu nhiệt kế vào, chờ mực chất lỏng đứng yên, đọc
      vạch chia gần nhất rồi đổi ra kelvin.
    {/if}
  </div>
</div>
