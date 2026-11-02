<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { RAIN_STAGES, SOILS, isAcidRain, lakePh, lakeState, rainPh } from './engine.js';

  /** @typedef {keyof typeof SOILS} Soil */

  const DROPS = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: 170 + ((i * 53) % 170),
    delay: ((i * 7) % 16) / 10,
  }));

  let stage = $state(1);
  let level = $state(40);
  let years = $state(0);
  let soil = $state(/** @type {Soil} */ ('granite'));
  let limed = $state(false);

  const step = $derived(RAIN_STAGES[stage - 1]);
  const rain = $derived(rainPh(level));
  const lake = $derived(lakePh(years, level, soil, limed));
  const lakeNow = $derived(lakeState(lake));
  const rainNote = $derived(
    isAcidRain(rain)
      ? `Mưa có pH ${formatFixed(rain, 1)}, nhỏ hơn 5,6: đây là mưa acid.`
      : 'Mưa có pH 5,6 chỉ do CO₂ hoà tan: chưa phải mưa acid.',
  );
  const drops = $derived(stage >= 3 ? DROPS.slice(0, Math.ceil(level / 6.25)) : []);
  const smoke = $derived(stage === 1 ? '#94a3b8' : '#92400e');
  const cloud = $derived(
    stage >= 2 && level > 0 ? `rgb(${140 - level},${140 - level},${150 - level})` : '#cbd5e1',
  );
  const water = $derived(lake >= 6 ? '#38bdf8' : lake >= 5 ? '#7dd3c0' : '#a3b18a');
  /** @type {Array<{ value: string, label: string }>} */
  const soilOptions = Object.entries(SOILS).map(([value, s]) => ({ value, label: s.label }));
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Giai đoạn"
    bind:value={stage}
    options={RAIN_STAGES.map((s) => ({ value: s.id, label: s.label }))}
  />

  <div class="rounded-lg bg-slate-50 p-3">
    <p class="overflow-x-auto text-lg"><EquationLine text={step.equation} /></p>
    <p class="mt-1 text-sm">{step.text}</p>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <svg
      viewBox="0 0 360 230"
      class="mx-auto block w-full max-w-md"
      role="img"
      aria-label="Nhà máy thải NOₓ, mây và hồ nước. Mưa có pH {formatFixed(
        rain,
        1,
      )}, hồ có pH {formatFixed(lake, 1)}, còn {lakeNow.fish} đàn cá."
    >
      <rect width="360" height="230" fill="#e0f2fe" />
      <rect x="20" y="130" width="70" height="60" fill="#64748b" />
      <rect x="62" y="80" width="16" height="50" fill="#475569" />
      {#if level > 0}
        <g fill={smoke} opacity={0.3 + level / 170}>
          <circle cx="72" cy="66" r="9" />
          <circle cx="92" cy="52" r="12" />
          <circle cx="118" cy="42" r="14" />
          <circle cx="146" cy="34" r="15" />
        </g>
      {/if}
      <g fill={cloud}>
        <ellipse cx="250" cy="42" rx="90" ry="26" />
        <ellipse cx="200" cy="50" rx="44" ry="20" />
        <ellipse cx="300" cy="50" rx="44" ry="20" />
      </g>
      {#each drops as d (d.id)}
        <line
          class="drop"
          style:animation-delay="{d.delay}s"
          x1={d.x}
          y1="72"
          x2={d.x - 2}
          y2="82"
          stroke="#0369a1"
          stroke-width="2"
          stroke-linecap="round"
        />
      {/each}
      <rect y="190" width="360" height="40" fill="#a8a29e" />
      <path d="M 120 190 L 360 190 L 360 230 L 150 230 Z" fill={water} />
      {#each Array.from({ length: lakeNow.fish }, (_, i) => i) as i (i)}
        <g transform="translate({185 + i * 34} {i % 2 === 0 ? 205 : 218})">
          <ellipse rx="10" ry="5" fill="#f97316" />
          <path d="M -9 0 L -16 -5 L -16 5 Z" fill="#f97316" />
        </g>
      {/each}
    </svg>

    <div class="space-y-3">
      <SliderField
        label="Lượng NOₓ thải ra"
        bind:value={level}
        min={0}
        max={100}
        step={5}
        unit="%"
      />
      <SliderField
        label="Số năm mưa như vậy"
        bind:value={years}
        min={0}
        max={30}
        step={1}
        unit="năm"
      />
      <SegmentedControl label="Đáy hồ" bind:value={soil} options={soilOptions} />
      <button
        type="button"
        class={button.secondary}
        aria-pressed={limed}
        onclick={() => (limed = !limed)}
      >
        {limed ? 'Dừng rải vôi' : 'Rải vôi xuống hồ'}
      </button>
      <dl class="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-slate-50 p-3 text-sm tabular-nums">
        <dt class="text-slate-600">pH nước mưa</dt>
        <dd class="text-right font-semibold">{formatFixed(rain, 1)}</dd>
        <dt class="text-slate-600">pH nước hồ</dt>
        <dd class="text-right font-semibold">{formatFixed(lake, 1)}</dd>
        <dt class="text-slate-600">Sau</dt>
        <dd class="text-right font-semibold">{formatNumber(years)} năm</dd>
      </dl>
    </div>
  </div>

  <FeedbackNote tone={isAcidRain(rain) ? 'warn' : 'info'} text={rainNote} />
  <FeedbackNote tone={lakeNow.tone} text={lakeNow.text} />
</div>

<style>
  .drop {
    animation: fall 1.6s linear infinite;
  }
  @keyframes fall {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(105px);
      opacity: 0.4;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .drop {
      animation: none;
      transform: translateY(50px);
    }
  }
</style>
