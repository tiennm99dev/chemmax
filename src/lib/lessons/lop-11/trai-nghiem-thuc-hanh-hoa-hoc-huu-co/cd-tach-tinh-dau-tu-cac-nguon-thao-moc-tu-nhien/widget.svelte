<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    COOLANT,
    CUTS,
    LOAD,
    MATERIALS,
    PARTS,
    boilingTogether,
    placePart,
    runAdvice,
    runDistillation,
  } from './engine.js';

  /** The parts offered in a fixed mixed order, so the flow has to be thought out. */
  const OFFER = ['sinh-han', 'binh-hung', 'cap-hoi', 'nguyen-lieu'].map(
    (id) => /** @type {import('./engine.js').Part} */ (PARTS.find((p) => p.id === id)),
  );

  /** @type {string[]} */
  let placed = $state([]);
  let note = $state(
    'Chọn lần lượt các bộ phận theo đường đi của hơi nước, bắt đầu từ chỗ tạo ra hơi nước.',
  );
  /** @type {'ok' | 'warn' | 'info'} */
  let tone = $state('info');

  let materialId = $state('sa');
  /** @type {import('./engine.js').Cut} */
  let cut = $state('cat-nho');
  /** @type {import('./engine.js').Coolant} */
  let coolant = $state('duoi-len');
  let minutes = $state(0);

  const ready = $derived(placed.length === PARTS.length);
  const material = $derived(MATERIALS.find((m) => m.id === materialId) ?? MATERIALS[0]);
  const setup = $derived({ material, cut, coolant, minutes });
  const run = $derived(runDistillation(setup));
  const tip = $derived(runAdvice(setup));
  const running = $derived(ready && minutes > 0);
  const together = $derived(boilingTogether(material));

  /** Receiver: up to 480 mL drawn in 50 px; the thin oil layer is magnified. */
  const waterH = $derived(Math.min(50, (run.waterMl / 480) * 50));
  const oilH = $derived(run.oilMl > 0 ? Math.max(2, Math.min(10, run.oilMl * 6)) : 0);

  /** @param {string} id */
  function choose(id) {
    const r = placePart(placed, id);
    if (r.message) {
      placed = r.placed;
      note = r.message;
      tone = r.ok ? 'ok' : 'warn';
    }
  }

  function reset() {
    placed = [];
    minutes = 0;
    note = 'Chọn lần lượt các bộ phận theo đường đi của hơi nước, bắt đầu từ chỗ tạo ra hơi nước.';
    tone = 'info';
  }

  const has = $derived((/** @type {string} */ id) => placed.includes(id));

  const picture = $derived(
    ready
      ? `Bộ chưng cất lôi cuốn hơi nước đã lắp đủ: bình cấp hơi nước, bình cất chứa ${material.name.toLowerCase()}, ống sinh hàn với nước làm lạnh ${COOLANT[coolant].label.toLowerCase()}, bình hứng có ${formatNumber(run.waterMl, 0)} mL nước và ${formatNumber(run.oilMl, 2)} mL tinh dầu nổi ở trên.`
      : `Bộ chưng cất đang lắp: đã có ${placed.length} trên ${PARTS.length} bộ phận.`,
  );
</script>

<div class="space-y-3">
  <svg viewBox="0 0 360 190" class="w-full max-w-xl" role="img" aria-label={picture}>
    <!-- 1. steam generator -->
    {#if has('cap-hoi')}
      <circle cx="45" cy="125" r="28" fill="#f8fafc" stroke="#475569" stroke-width="2" />
      <path d="M 19 132 A 28 28 0 0 0 71 132 Z" fill="#7dd3fc" />
      <rect x="39" y="70" width="12" height="30" fill="#f8fafc" stroke="#475569" stroke-width="2" />
      {#if running}
        <path d="M 32 175 Q 38 158 45 172 Q 52 158 58 175 Z" fill="#f97316" />
      {/if}
    {:else}
      <rect
        x="15"
        y="80"
        width="60"
        height="80"
        rx="8"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="4 3"
      />
      <text x="45" y="125" text-anchor="middle" font-size="16" fill="#94a3b8">1</text>
    {/if}

    <!-- 2. still with the plant material -->
    {#if has('nguyen-lieu')}
      <path d="M 45 70 L 45 58 L 120 58 L 120 128" fill="none" stroke="#475569" stroke-width="3" />
      <circle cx="135" cy="125" r="30" fill="#f8fafc" stroke="#475569" stroke-width="2" />
      <path d="M 107 133 A 30 30 0 0 0 163 133 Z" fill="#bae6fd" />
      {#each [[122, 128], [134, 136], [146, 126], [128, 145], [143, 143], [138, 118]] as [x, y], i (i)}
        <rect
          {x}
          {y}
          width="9"
          height="3"
          rx="1"
          fill={material.id === 'sa' ? '#65a30d' : '#facc15'}
        />
      {/each}
      <rect
        x="129"
        y="70"
        width="12"
        height="27"
        fill="#f8fafc"
        stroke="#475569"
        stroke-width="2"
      />
      {#if running}
        <path d="M 122 175 Q 128 158 135 172 Q 142 158 148 175 Z" fill="#fb923c" opacity="0.8" />
        <text x="145" y="86" font-size="10" fill="#b45309">
          {formatNumber(run.temp, 1)} °C
        </text>
      {/if}
    {:else}
      <rect
        x="103"
        y="80"
        width="64"
        height="80"
        rx="8"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="4 3"
      />
      <text x="135" y="125" text-anchor="middle" font-size="16" fill="#94a3b8">2</text>
    {/if}

    <!-- 3. condenser -->
    {#if has('sinh-han')}
      <path d="M 135 70 L 135 50 L 175 50" fill="none" stroke="#475569" stroke-width="3" />
      <g transform="rotate(22 175 50)">
        <rect
          x="175"
          y="40"
          width="115"
          height="20"
          rx="6"
          fill="#e0f2fe"
          stroke="#0369a1"
          stroke-width="2"
        />
        <line x1="170" y1="50" x2="300" y2="50" stroke="#475569" stroke-width="3" />
        <line x1="190" y1="40" x2="190" y2="30" stroke="#0369a1" stroke-width="3" />
        <line x1="275" y1="60" x2="275" y2="70" stroke="#0369a1" stroke-width="3" />
      </g>
      <text x="196" y="22" font-size="9" fill="#0369a1">
        {coolant === 'duoi-len' ? 'nước ra' : 'nước vào'}
      </text>
      <text x="255" y="114" text-anchor="end" font-size="9" fill="#0369a1">
        {coolant === 'duoi-len' ? 'nước vào' : 'nước ra'}
      </text>
    {:else}
      <rect
        x="180"
        y="40"
        width="110"
        height="60"
        rx="8"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="4 3"
      />
      <text x="235" y="76" text-anchor="middle" font-size="16" fill="#94a3b8">3</text>
    {/if}

    <!-- 4. receiver -->
    {#if has('binh-hung')}
      <path
        d="M 285 100 L 285 116 L 265 172 L 325 172 L 305 116 L 305 100"
        fill="#f8fafc"
        stroke="#475569"
        stroke-width="2"
      />
      {#if waterH > 0}
        <rect
          x="267"
          y={172 - waterH}
          width="56"
          height={waterH}
          fill="#7dd3fc"
          clip-path="url(#receiver)"
        />
      {/if}
      {#if oilH > 0}
        <rect
          x="267"
          y={172 - waterH - oilH}
          width="56"
          height={oilH}
          fill="#facc15"
          clip-path="url(#receiver)"
        />
      {/if}
      <defs>
        <clipPath id="receiver">
          <path d="M 285 116 L 265 172 L 325 172 L 305 116 Z" />
        </clipPath>
      </defs>
    {:else}
      <rect
        x="262"
        y="100"
        width="66"
        height="74"
        rx="8"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="4 3"
      />
      <text x="295" y="142" text-anchor="middle" font-size="16" fill="#94a3b8">4</text>
    {/if}
  </svg>

  {#if !ready}
    <div class="grid grid-cols-2 gap-2">
      {#each OFFER as p (p.id)}
        <button
          type="button"
          class="{button.quiet} text-sm {placed.includes(p.id) ? 'opacity-50' : ''}"
          aria-disabled={placed.includes(p.id)}
          onclick={() => choose(p.id)}
        >
          {p.name}
        </button>
      {/each}
    </div>
    <FeedbackNote {tone} text={note} />
  {:else}
    <div class="grid gap-x-4 gap-y-2 sm:grid-cols-2">
      <SegmentedControl
        label="Nguyên liệu ({LOAD} g)"
        options={MATERIALS.map((m) => ({ value: m.id, label: m.name }))}
        bind:value={materialId}
      />
      <SegmentedControl
        label="Xử lí nguyên liệu"
        options={Object.entries(CUTS).map(([value, c]) => ({ value, label: c.label }))}
        bind:value={cut}
      />
      <SegmentedControl
        label="Nước làm lạnh ống sinh hàn"
        options={Object.entries(COOLANT).map(([value, c]) => ({ value, label: c.label }))}
        bind:value={coolant}
      />
      <SliderField
        label="Thời gian chưng cất"
        bind:value={minutes}
        min={0}
        max={120}
        step={5}
        unit="phút"
      />
    </div>

    <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
      <p class="font-semibold text-slate-800">
        Nhiệt độ hơi: {formatNumber(run.temp, 1)} °C · Bình hứng: {formatNumber(run.waterMl, 0)} mL nước,
        {formatNumber(run.oilMl, 2)} mL {material.oil}
      </p>
      <p class="mt-1 text-slate-700">
        Sau khi tách bằng phễu chiết: {formatNumber(run.oilG, 2)} g tinh dầu, hiệu suất {formatNumber(
          run.yieldPct,
          2,
        )}% so với khối lượng nguyên liệu. Hỗn hợp nước và {material.main} sôi ở khoảng {formatNumber(
          together,
          1,
        )} °C, dù {material.main} sôi ở {material.boil} °C.
      </p>
    </div>
    <FeedbackNote tone={tip.ok ? 'ok' : minutes === 0 ? 'info' : 'warn'} text={tip.text} />
    <button type="button" class={button.secondary} onclick={reset}>Tháo ra, lắp lại</button>
  {/if}
</div>
