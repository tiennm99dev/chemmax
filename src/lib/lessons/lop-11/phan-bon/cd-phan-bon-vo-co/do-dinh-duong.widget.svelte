<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import Tex from '#lib/components/tex.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { moleculeMassAmu } from '#lib/domain/book-mass.js';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import { COMPOUNDS, NUTRIENT_TEX, nutrientGrams, theoreticalGrade } from './engine.js';

  let picked = $state('urea');

  const compound = $derived(COMPOUNDS.find((c) => c.id === picked) ?? COMPOUNDS[0]);
  const mass = $derived(moleculeMassAmu(compound.formula));
  const lines = $derived(
    compound.counts.map(
      (k) =>
        `\\%${NUTRIENT_TEX[k]} = \\dfrac{${nutrientGrams(compound.formula, k).tex}}{${numTex(mass)}} \\cdot 100\\% \\approx ${numTex(theoreticalGrade(compound.formula, k), 2)}\\%`,
    ),
  );
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-1.5" role="group" aria-label="Chọn chất">
    {#each COMPOUNDS as c (c.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-2.5 text-sm {c.id === picked
          ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-800'
          : 'border-slate-300 bg-white text-slate-700'} {focusRing}"
        aria-pressed={c.id === picked}
        aria-label="{c.name}, {c.kind.toLowerCase()}"
        onclick={() => (picked = c.id)}><ChemFormula formula={c.formula} /></button
      >
    {/each}
  </div>

  <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-800">
      {compound.name} · {compound.kind}
    </p>
    <p>
      <Tex math={`M = ${numTex(mass)}`} /> g/mol
    </p>
    {#each lines as line (line)}
      <div class="overflow-x-auto"><Tex math={line} display /></div>
    {/each}
    <p class="text-slate-600">
      Phân bán trên thị trường: <LiveRichText text={compound.market} />. Phân thương phẩm có lẫn
      nước, tạp chất và chất độn nên độ dinh dưỡng thấp hơn chất nguyên chất.
    </p>
    {#if compound.id === 'super1'}
      <p class="text-slate-600">
        Superphosphate đơn là hỗn hợp 1 mol <ChemFormula formula="Ca(H2PO4)2" /> với 2 mol
        <ChemFormula formula="CaSO4" /> sinh ra cùng lúc, nên khối lượng mol tính chung là {formatNumber(
          mass,
        )} g.
      </p>
    {/if}
  </div>
</div>
