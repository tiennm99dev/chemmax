<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { scrollFocus } from '#lib/actions/scroll-focus.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { FUELS, co2For } from './engine.js';

  let heat = $state(5000);
  let picked = $state('octane');

  const rows = $derived(FUELS.map((f) => ({ fuel: f, ...co2For(f, heat) })));
  const most = $derived(Math.max(...rows.map((r) => r.grams)));
  const row = $derived(rows.find((r) => r.fuel.id === picked) ?? rows[0]);
  const methane = $derived(rows[0]);
  const math = $derived(
    `n = \\dfrac{${numTex(heat)}}{${numTex(row.fuel.heat)}} \\approx ${numTex(row.moles, 3)}\\ \\text{mol};\\quad m_{\\mathrm{CO_2}} = ${numTex(row.moles, 3)} \\cdot ${row.fuel.carbons === 1 ? '' : `${row.fuel.carbons} \\cdot `}44 \\approx ${numTex(row.grams, 0)}\\ \\text{g}`,
  );
  const note = $derived(
    row.fuel.id === 'methane'
      ? `Khí thiên nhiên thải ít $\\mathrm{CO_2}$ nhất cho cùng lượng nhiệt, vì phân tử methane có nhiều H so với C: phần lớn nhiệt sinh ra từ việc tạo nước.`
      : `Để có ${formatNumber(heat)} kJ, ${row.fuel.name.toLowerCase()} thải ${formatNumber(row.grams, 0)} g $\\mathrm{CO_2}$, nhiều hơn khí thiên nhiên ${formatNumber(((row.grams - methane.grams) / methane.grams) * 100, 0)}%.`,
  );
</script>

<div class="space-y-3">
  <SliderField
    label="Lượng nhiệt cần dùng"
    bind:value={heat}
    min={1000}
    max={20000}
    step={500}
    unit="kJ"
  />

  <div class="space-y-1.5" role="group" aria-label="Chọn nhiên liệu để xem cách tính">
    {#each rows as r (r.fuel.id)}
      <button
        type="button"
        class="block w-full rounded-lg border px-2 py-1.5 text-left text-sm {r.fuel.id === picked
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-slate-200 bg-white'} {focusRing}"
        aria-pressed={r.fuel.id === picked}
        aria-label="{r.fuel.name}: {formatNumber(r.grams, 0)} gam CO2"
        onclick={() => (picked = r.fuel.id)}
      >
        <span class="flex justify-between gap-2">
          <span>{r.fuel.name} · <ChemFormula formula={r.fuel.formula} /></span>
          <span class="tabular-nums">{formatNumber(r.grams, 0)} g</span>
        </span>
        <span class="mt-1 block h-2.5 rounded bg-slate-100">
          <span
            class="block h-full rounded {r.fuel.id === 'methane'
              ? 'bg-emerald-500'
              : 'bg-slate-500'}"
            style:width="{(r.grams / most) * 100}%"
          ></span>
        </span>
      </button>
    {/each}
  </div>

  <div
    class="overflow-x-auto rounded-xl border border-slate-200 bg-white p-3 {focusRing}"
    use:scrollFocus
  >
    <Tex {math} display />
  </div>
  <FeedbackNote tone="info" text={note} />
</div>
