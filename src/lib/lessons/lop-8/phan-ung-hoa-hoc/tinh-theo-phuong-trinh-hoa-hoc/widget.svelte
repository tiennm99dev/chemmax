<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { molarMass } from '../_shared/molar.js';
  import { REACTIONS, actual, massOf, reaction, simulate } from './engine.js';

  const COLORS = ['bg-sky-500', 'bg-rose-500', 'bg-emerald-500', 'bg-amber-500'];

  let id = $state('nuoc');
  let a = $state(5);
  let b = $state(3);
  let percent = $state(100);

  const r = $derived(reaction(id));
  const sim = $derived(simulate(r, [a, b]));
  /** @param {import('./engine.js').Term[]} terms */
  const side = (terms) =>
    terms.map((t) => `${t.coef > 1 ? t.coef : ''}${prettyFormula(t.formula)}`).join(' + ');
  const OPTIONS = REACTIONS.map((x) => ({
    value: x.id,
    label: `${side(x.reactants)} → ${side(x.products)}`,
  }));

  /**
   * Chips for an amount: one full chip per mol and a faded chip for the
   * fraction left over.
   * @param {number} n
   */
  function chips(n) {
    const whole = Math.floor(n + 1e-9);
    const frac = n - whole;
    const out = Array.from({ length: whole }, () => 1);
    if (frac > 1e-6) out.push(frac);
    return out;
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const [A, B] = r.reactants;
      const ratioText = `Tỉ số n : hệ số: ${prettyFormula(A.formula)} ${formatNumber(a)} : ${A.coef} = ${formatNumber(sim.ratios[0], 3)}; ${prettyFormula(B.formula)} ${formatNumber(b)} : ${B.coef} = ${formatNumber(sim.ratios[1], 3)}.`;
      if (sim.limiting === null)
        return { tone: 'info', text: 'Cần có đủ cả hai chất phản ứng thì phản ứng mới xảy ra.' };
      if (sim.limiting === 'vua-du')
        return {
          tone: 'ok',
          text: `${ratioText} Hai tỉ số bằng nhau: hai chất phản ứng vừa đủ, không có chất dư.`,
        };
      const out = r.reactants[sim.limiting];
      const extra = r.reactants[1 - sim.limiting];
      return {
        tone: 'ok',
        text: `${ratioText} Tỉ số của ${prettyFormula(out.formula)} nhỏ hơn nên ${prettyFormula(out.formula)} phản ứng hết, ${prettyFormula(extra.formula)} còn dư ${formatNumber(sim.left[1 - sim.limiting], 3)} mol. Lượng sản phẩm tính theo ${prettyFormula(out.formula)}.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Phản ứng" options={OPTIONS} bind:value={id} />

  <div class="flex flex-wrap gap-4">
    <Stepper
      label="Số mol {prettyFormula(r.reactants[0].formula)} ban đầu"
      bind:value={a}
      min={0}
      max={10}
    />
    <Stepper
      label="Số mol {prettyFormula(r.reactants[1].formula)} ban đầu"
      bind:value={b}
      min={0}
      max={10}
    />
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-2 text-sm font-semibold text-slate-700">Trước phản ứng</p>
      {#each r.reactants as t, i (t.formula)}
        <div
          class="mb-2 flex flex-wrap items-center gap-1"
          role="group"
          aria-label="{formatNumber([a, b][i])} mol {prettyFormula(t.formula)}"
        >
          <span class="w-14 text-sm"><ChemFormula formula={t.formula} /></span>
          {#each chips([a, b][i]) as f, k (k)}
            <span class="size-5 rounded-full {COLORS[i]}" style:opacity={f} aria-hidden="true"
            ></span>
          {/each}
        </div>
      {/each}
    </div>
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-2 text-sm font-semibold text-slate-700">Sau phản ứng</p>
      {#each r.reactants as t, i (t.formula)}
        <div
          class="mb-2 flex flex-wrap items-center gap-1"
          role="group"
          aria-label="Còn {formatNumber(sim.left[i], 3)} mol {prettyFormula(t.formula)}"
        >
          <span class="w-14 text-sm"><ChemFormula formula={t.formula} /></span>
          {#each chips(sim.left[i]) as f, k (k)}
            <span class="size-5 rounded-full {COLORS[i]}" style:opacity={f} aria-hidden="true"
            ></span>
          {/each}
          {#if sim.left[i] === 0}<span class="text-xs text-slate-500">hết</span>{/if}
        </div>
      {/each}
      {#each r.products as t, j (t.formula)}
        <div
          class="mb-2 flex flex-wrap items-center gap-1"
          role="group"
          aria-label="Tạo ra {formatNumber(sim.formed[j], 3)} mol {prettyFormula(t.formula)}"
        >
          <span class="w-14 text-sm"><ChemFormula formula={t.formula} /></span>
          {#each chips(sim.formed[j]) as f, k (k)}
            <span class="size-5 rounded-md {COLORS[2 + j]}" style:opacity={f} aria-hidden="true"
            ></span>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <p class="text-xs text-slate-600">Mỗi chấm là 1 mol; chấm mờ là phần lẻ của 1 mol.</p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <SliderField
    label="Hiệu suất phản ứng H"
    bind:value={percent}
    min={10}
    max={100}
    step={5}
    unit="%"
  />

  <div class="overflow-x-auto">
    <table class="w-full min-w-72 text-left text-sm tabular-nums">
      <caption class="mb-1 text-left font-semibold text-slate-700"
        >Sản phẩm theo lí thuyết và thực tế</caption
      >
      <thead>
        <tr class="border-b border-slate-300 text-slate-600">
          <th scope="col" class="py-1 pr-3">Chất</th>
          <th scope="col" class="py-1 pr-3">Lí thuyết</th>
          <th scope="col" class="py-1">Thực tế (H = {percent}%)</th>
        </tr>
      </thead>
      <tbody>
        {#each r.products as t, j (t.formula)}
          {@const n = sim.formed[j]}
          <tr class="border-b border-slate-100">
            <th scope="row" class="py-1 pr-3 font-semibold"
              ><ChemFormula formula={t.formula} /> (M = {formatNumber(molarMass(t.formula))})</th
            >
            <td class="py-1 pr-3"
              >{formatNumber(n, 3)} mol = {formatNumber(massOf(t.formula, n), 3)} g</td
            >
            <td class="py-1"
              >{formatNumber(actual(n, percent), 3)} mol = {formatNumber(
                massOf(t.formula, actual(n, percent)),
                3,
              )} g</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
