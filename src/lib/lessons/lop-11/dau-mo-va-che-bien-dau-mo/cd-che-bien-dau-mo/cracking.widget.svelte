<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { MAX_CARBON, alkane, crack, crackText } from './engine.js';

  const STEP = 11;
  const ROW_Y = 22;

  let carbons = $state(16);
  let cut = $state(8);

  const result = $derived(crack(carbons, cut));
  const text = $derived(crackText(carbons, cut));
  const width = $derived((carbons - 1) * STEP + 20);
  const xs = $derived(Array.from({ length: carbons }, (_, i) => 10 + i * STEP));
  const label = $derived(
    `Mạch ${carbons} nguyên tử carbon bị bẻ gãy sau carbon thứ ${cut}: ${prettyFormula(alkane(carbons))} tạo ${prettyFormula(alkane(result.alkane))} và ${prettyFormula(`C${result.alkene}H${2 * result.alkene}`)}, liên kết đôi ở chỗ gãy.`,
  );

  function clampCut() {
    cut = Math.min(cut, carbons - 2);
  }
</script>

<div class="space-y-3">
  <SliderField
    label="Phân tử alkane đem cracking"
    bind:value={carbons}
    min={10}
    max={MAX_CARBON}
    step={1}
    format={(v) => prettyFormula(alkane(Math.round(v)))}
    oninput={clampCut}
  />
  <SliderField
    label="Bẻ gãy liên kết C–C sau nguyên tử carbon thứ"
    bind:value={cut}
    min={1}
    max={carbons - 2}
    step={1}
  />

  <div class="rounded-xl border border-slate-200 bg-white p-2">
    <svg viewBox="0 0 {width} 44" class="max-h-24 w-full" role="img" aria-label={label}>
      {#each xs.slice(1) as x, i (x)}
        {@const bond = i + 1}
        {#if bond !== cut}
          <line
            x1={x - STEP}
            x2={x}
            y1={ROW_Y}
            y2={ROW_Y}
            stroke={bond < cut ? '#2563eb' : '#ea580c'}
            stroke-width="2"
          />
          {#if bond === cut + 1}
            <line
              x1={x - STEP}
              x2={x}
              y1={ROW_Y + 4}
              y2={ROW_Y + 4}
              stroke="#ea580c"
              stroke-width="2"
            />
          {/if}
        {/if}
      {/each}
      <line
        x1={xs[cut - 1] + STEP / 2}
        x2={xs[cut - 1] + STEP / 2}
        y1="6"
        y2="38"
        stroke="#dc2626"
        stroke-dasharray="3 2"
        stroke-width="1.5"
      />
      {#each xs as x, i (x)}
        <circle cx={x} cy={ROW_Y} r="4" fill={i < cut ? '#2563eb' : '#ea580c'} />
      {/each}
    </svg>
  </div>
  <p class="flex flex-wrap gap-x-3 text-xs text-slate-600" aria-hidden="true">
    <span class="text-blue-700">● phần alkane (nhận thêm H)</span>
    <span class="text-orange-700">● phần alkene (có liên kết đôi)</span>
  </p>

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-base">
    <EquationLine text={result.equation} />
    <p class="mt-1 text-xs text-slate-500">
      Cracking xúc tác: khoảng 450 – 500 °C, xúc tác aluminosilicate (zeolite).
    </p>
  </div>

  <FeedbackNote tone="info" {text} />
</div>
