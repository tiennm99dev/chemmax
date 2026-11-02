<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { fmt, numTex } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { DF_CO2, DF_H2O, FUELS, combustionEnthalpy, heatOf } from './engine.js';

  const OPTIONS = FUELS.map((f) => ({ value: f.id, label: f.name }));
  const PER_KG = FUELS.map((f) => ({ id: f.id, name: f.name, value: heatOf(f, 1000) }));
  const TOP = Math.max(...PER_KG.map((f) => f.value));

  let fuelId = $state('methane');
  let grams = $state(1000);

  const fuel = $derived(FUELS.find((f) => f.id === fuelId) ?? FUELS[0]);
  const enthalpy = $derived(combustionEnthalpy(fuel));
  const moles = $derived(grams / fuel.molar);
  const heat = $derived(heatOf(fuel, grams));

  const enthalpyText = $derived.by(() => {
    const parts = [`${fuel.co2} \\cdot (${numTex(DF_CO2)})`];
    if (fuel.h2o > 0) parts.push(`${fuel.h2o} \\cdot (${numTex(DF_H2O)})`);
    const minus = fuel.df === 0 ? '' : ` - (${numTex(fuel.df)})`;
    return `$\\Delta_r H^\\circ_{298} = ${parts.join(' + ')}${minus} = ${numTex(enthalpy)}$ kJ cho $1$ mol.`;
  });
</script>

<div class="space-y-3 rounded-xl border border-slate-200 p-3">
  <SegmentedControl label="Nhiên liệu" options={OPTIONS} bind:value={fuelId} />
  <SliderField
    label="Khối lượng nhiên liệu"
    bind:value={grams}
    min={100}
    max={5000}
    step={100}
    unit="g"
  />
  <div class="space-y-1 text-sm text-slate-800" aria-live="polite">
    <p><LiveRichText text={`$${fuel.tex}$`} /></p>
    <p><LiveRichText text={enthalpyText} /></p>
    <p>
      <LiveRichText
        text={`$n = \\dfrac{${numTex(grams)}}{${numTex(fuel.molar)}} \\approx ${numTex(moles, 2)}$ mol, nên $Q \\approx ${numTex(Math.round(heat))}$ kJ.`}
      />
    </p>
  </div>
  <ul class="space-y-1.5">
    {#each PER_KG as row (row.id)}
      <li class="text-sm">
        <div class="flex justify-between gap-2">
          <span class={row.id === fuelId ? 'font-semibold text-slate-900' : 'text-slate-700'}>
            {row.name}
          </span>
          <span class="tabular-nums text-slate-700">{fmt(Math.round(row.value))} kJ/kg</span>
        </div>
        <div class="h-2 rounded bg-slate-200" aria-hidden="true">
          <div
            class="h-2 rounded {row.id === fuelId ? 'bg-orange-500' : 'bg-slate-400'}"
            style:width="{(row.value / TOP) * 100}%"
          ></div>
        </div>
      </li>
    {/each}
  </ul>
</div>
