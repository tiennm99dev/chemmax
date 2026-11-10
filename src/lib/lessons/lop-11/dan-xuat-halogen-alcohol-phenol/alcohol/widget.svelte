<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { ALCOHOLS, alcoholOrder, carbonOrder, oxidation } from './engine.js';

  const ORDERS = [
    { value: 1, label: 'Bậc I' },
    { value: 2, label: 'Bậc II' },
    { value: 3, label: 'Bậc III' },
  ];
  const ROMAN = ['0', 'I', 'II', 'III', 'IV'];

  let index = $state(0);
  let guess = $state(/** @type {number | null} */ (null));
  let solved = $state(/** @type {string[]} */ ([]));

  const alcohol = $derived(ALCOHOLS[index]);
  const order = $derived(alcoholOrder(alcohol));
  const ohAt = $derived(alcohol.chain.findIndex((c) => c.oh));
  const neighbours = $derived(carbonOrder(alcohol.chain, ohAt));
  const right = $derived(guess === order);
  const equation = $derived(oxidation(alcohol));

  /** @param {import('./engine.js').Carbon} c */
  const carbonText = (c) => `C${c.h === 0 ? '' : c.h === 1 ? 'H' : `H${c.h}`}`;

  /** @param {number} value */
  function choose(value) {
    guess = value;
    if (value === order && !solved.includes(alcohol.id)) solved = [...solved, alcohol.id];
  }

  /** @param {number} step */
  function go(step) {
    index = (index + step + ALCOHOLS.length) % ALCOHOLS.length;
    guess = null;
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (guess === null) {
        return {
          tone: 'info',
          text: 'Tìm nguyên tử carbon mang nhóm OH, đếm số carbon liên kết trực tiếp với nó, rồi chọn bậc của alcohol.',
        };
      }
      const count =
        neighbours === 0
          ? 'Carbon mang OH không liên kết với carbon nào; methanol được xếp vào alcohol bậc I.'
          : `Carbon mang OH liên kết trực tiếp với ${neighbours} nguyên tử carbon, nên đó là carbon bậc ${ROMAN[neighbours]}.`;
      return right
        ? { tone: 'ok', text: `Đúng. ${count} ${alcohol.name} là alcohol bậc ${ROMAN[order]}.` }
        : { tone: 'warn', text: `Chưa đúng. ${count} Bậc của alcohol bằng bậc của carbon đó.` };
    },
  );
</script>

<div class="space-y-4">
  <div class="flex items-center justify-between gap-2">
    <button type="button" class={button.quiet} onclick={() => go(-1)} aria-label="Chất trước"
      >←</button
    >
    <p class="text-center font-semibold" aria-live="polite">
      {alcohol.name} ({index + 1}/{ALCOHOLS.length})
    </p>
    <button type="button" class={button.quiet} onclick={() => go(1)} aria-label="Chất tiếp theo"
      >→</button
    >
  </div>

  <div
    class="rounded-xl bg-slate-50 px-2 py-4"
    role="img"
    aria-label="Công thức cấu tạo {alcohol.text}"
  >
    <div class="flex flex-wrap items-start justify-center text-lg" aria-hidden="true">
      {#each alcohol.chain as c, i (i)}
        {@const lit = guess !== null && (i === ohAt || Math.abs(i - ohAt) === 1)}
        {#if i > 0}
          <span class="mt-8 px-1 font-bold text-slate-500">–</span>
        {/if}
        <div class="flex flex-col items-center">
          <span
            class="h-6 rounded px-1 text-base font-semibold {guess !== null && i === ohAt
              ? 'bg-sky-100 text-sky-900'
              : 'text-slate-600'}"
          >
            {#if c.branches}<ChemFormula formula="CH3" />{/if}
          </span>
          <span class="h-3 text-slate-500">{c.branches ? '|' : ''}</span>
          <span
            class="rounded-lg px-2 py-1 font-semibold {guess !== null && i === ohAt
              ? 'bg-rose-100 text-rose-900'
              : lit
                ? 'bg-sky-100 text-sky-900'
                : 'text-slate-800'}"
          >
            <ChemFormula formula={carbonText(c)} />
          </span>
          <span class="h-3 text-slate-500">{c.oh ? '|' : ''}</span>
          <span class="h-6 text-base font-bold text-rose-700">{c.oh ? 'OH' : ''}</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="grid grid-cols-3 gap-2" role="group" aria-label="Chọn bậc của alcohol">
    {#each ORDERS as o (o.value)}
      <button
        type="button"
        class="min-h-12 rounded-lg border-2 font-semibold {guess === o.value
          ? right
            ? 'border-emerald-600 bg-emerald-50'
            : 'border-amber-600 bg-amber-50'
          : 'border-slate-300 bg-white hover:bg-slate-50'} {focusRing}"
        aria-pressed={guess === o.value}
        onclick={() => choose(o.value)}>{o.label}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if right}
    <div class="space-y-1 rounded-xl border border-slate-200 p-3">
      <p class="text-sm font-semibold text-slate-600">Oxi hoá bởi CuO, đun nóng</p>
      {#if equation}
        <p class="text-lg"><EquationLine text={equation} /></p>
        <p class="text-sm text-slate-700">Sản phẩm: {alcohol.oxidisedName}.</p>
      {:else}
        <p class="text-sm text-slate-700">
          Alcohol bậc III: carbon mang OH không còn nguyên tử H nên không bị CuO oxi hoá, chất rắn
          màu đen vẫn giữ nguyên.
        </p>
      {/if}
    </div>
  {/if}

  <p class="text-sm text-slate-600">
    Đã phân loại đúng {solved.length}/{ALCOHOLS.length} alcohol.
  </p>
</div>
