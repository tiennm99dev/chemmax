<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import EquationLine from '../_shared/equation-line.svelte';
  import {
    ANIONS,
    CATIONS,
    SOLUTIONS,
    SWATCH,
    TABLE,
    formulaOf,
    mix,
    randomPair,
  } from './engine.js';

  let idA = $state('Ba-Cl');
  let idB = $state('Na-SO4');
  /** @type {'yes' | 'no' | null} */
  let guess = $state(null);
  let right = $state(0);
  let asked = $state(0);

  const a = $derived(SOLUTIONS.find((s) => s.id === idA) ?? SOLUTIONS[0]);
  const b = $derived(SOLUTIONS.find((s) => s.id === idB) ?? SOLUTIONS[1]);
  const result = $derived(mix(a, b));
  const revealed = $derived(guess !== null);
  const highlight = $derived(
    revealed ? new Set(result.products.map((p) => `${p.anion}|${p.cation}`)) : new Set(),
  );
  const solid = $derived(result.products.find((p) => p.solubility === 'K'));

  /** @param {'yes' | 'no'} g */
  function predict(g) {
    if (guess !== null) return;
    guess = g;
    if (result.outcome === 'precipitate' || result.outcome === 'none') {
      asked += 1;
      if ((g === 'yes') === (result.outcome === 'precipitate')) right += 1;
    }
  }

  function newPair() {
    const [x, y] = randomPair(Math.random);
    idA = x.id;
    idB = y.id;
    guess = null;
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (guess === null) {
        return {
          tone: 'info',
          text: 'Tra bảng tính tan các chất mới có thể tạo thành, rồi dự đoán: có kết tủa hay không?',
        };
      }
      if (result.outcome === 'slight' || result.outcome === 'unstable') {
        return { tone: 'info', text: result.text };
      }
      const correct = (guess === 'yes') === (result.outcome === 'precipitate');
      return {
        tone: correct ? 'ok' : 'warn',
        text: `${correct ? 'Đúng!' : 'Chưa đúng.'} ${result.text}`,
      };
    },
  );

  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
  const MARK_CLASS = /** @type {Record<string, string>} */ ({
    T: 'text-emerald-700',
    I: 'text-amber-700',
    K: 'text-rose-700 font-bold',
    '–': 'text-slate-400',
  });
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <label class="block text-sm font-semibold text-slate-700">
      Dung dịch thứ nhất
      <select class={select} bind:value={idA} onchange={() => (guess = null)}>
        {#each SOLUTIONS as s (s.id)}
          <option value={s.id}>{prettyFormula(formulaOf(s))}</option>
        {/each}
      </select>
    </label>
    <label class="block text-sm font-semibold text-slate-700">
      Dung dịch thứ hai
      <select class={select} bind:value={idB} onchange={() => (guess = null)}>
        {#each SOLUTIONS as s (s.id)}
          <option value={s.id}>{prettyFormula(formulaOf(s))}</option>
        {/each}
      </select>
    </label>
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[10rem_1fr]">
    <svg
      viewBox="0 0 120 140"
      class="mx-auto block h-auto w-full max-w-36"
      role="img"
      aria-label={revealed && solid
        ? `Cốc sau khi trộn có kết tủa ${prettyFormula(solid.formula)} màu ${solid.colour}`
        : 'Cốc trộn hai dung dịch'}
    >
      <rect x="20" y="50" width="80" height="80" fill="#e0f2fe" opacity="0.8" />
      {#if revealed && solid}
        {#each Array.from({ length: 22 }, (_, i) => i) as i (i)}
          <circle
            cx={26 + ((i * 29) % 68)}
            cy={120 - ((i * 7) % 14)}
            r="3"
            fill={SWATCH[solid.colour ?? 'trắng']}
            stroke="#475569"
            stroke-width="0.6"
          />
        {/each}
      {/if}
      <path
        d="M16 14 L20 18 L20 130 L100 130 L100 18 L104 14"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
    </svg>

    <div class="space-y-3">
      <p class="text-base">
        Trộn <ChemFormula formula={formulaOf(a)} /> với <ChemFormula formula={formulaOf(b)} />:
      </p>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={guess === 'yes' ? button.primary : button.secondary}
          disabled={guess !== null}
          onclick={() => predict('yes')}>Có kết tủa</button
        >
        <button
          type="button"
          class={guess === 'no' ? button.primary : button.secondary}
          disabled={guess !== null}
          onclick={() => predict('no')}>Không có kết tủa</button
        >
        <button type="button" class={button.quiet} onclick={newPair}>Cặp ngẫu nhiên</button>
      </div>
      {#if revealed && result.equation}
        <div class="rounded-xl bg-slate-50 p-3"><EquationLine text={result.equation} /></div>
      {/if}
      <p class="text-sm text-slate-600 tabular-nums">Dự đoán đúng: {right}/{asked}</p>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="overflow-x-auto">
    <table class="w-full min-w-80 border-collapse text-center text-xs sm:text-sm">
      <caption class="mb-1 text-left text-sm font-semibold text-slate-700">
        Bảng tính tan trong nước (T: tan, I: ít tan, K: không tan, –: không tồn tại hoặc bị nước
        phân huỷ)
      </caption>
      <thead>
        <tr>
          <th class="border border-slate-200 bg-slate-50 p-1"></th>
          {#each CATIONS as c (c.id)}
            <th scope="col" class="border border-slate-200 bg-slate-50 p-1 font-semibold">
              <ChemFormula formula={`${c.formula}^${c.charge > 1 ? c.charge : ''}+`} />
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each ANIONS as an (an.id)}
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1 font-semibold">
              <ChemFormula formula={`${an.formula}^${an.charge > 1 ? an.charge : ''}-`} />
            </th>
            {#each CATIONS as c (c.id)}
              {@const mark = TABLE[an.id][c.id]}
              <td
                class="border border-slate-200 p-1 {MARK_CLASS[mark]} {highlight.has(
                  `${an.id}|${c.id}`,
                )
                  ? 'bg-amber-100 ring-2 ring-amber-500 ring-inset'
                  : ''}"
              >
                {mark}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
