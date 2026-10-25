<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { clearWrong, moveFeedback, place, tally } from './sort.js';

  /**
   * Sort cards into labelled bins. Tap (or press Enter on) a card to pick it,
   * then tap a bin; on a pointer device a card can also be dragged onto a bin.
   * Each move is checked at once and explained in a live region.
   *
   * - `cards`: the cards, each with its right `bin` and a one-line `why`.
   * - `bins`: the bins, in display order.
   * - `label`: what the learner is sorting, read by screen readers.
   *
   * @type {{
   *   cards: import('./sort.js').SortCard[];
   *   bins: import('./sort.js').SortBin[];
   *   label: string;
   * }}
   */
  let { cards, bins, label } = $props();

  /** @type {import('./sort.js').Placements} */
  let placed = $state({});
  /** @type {string | null} */
  let picked = $state(null);
  let message = $state('Chọn một thẻ, rồi chọn ô phù hợp.');

  const score = $derived(tally(cards, placed));
  const waiting = $derived(cards.filter((c) => placed[c.id] === undefined));

  /** @param {string} cardId @param {string} binId */
  function drop(cardId, binId) {
    const card = cards.find((c) => c.id === cardId);
    if (!card) return;
    placed = place(placed, cardId, binId);
    picked = null;
    message = moveFeedback(card, binId, bins);
    if (tally(cards, placed).done) message += ' Em đã xếp đúng tất cả các thẻ!';
  }

  /** @param {string} binId */
  function chooseBin(binId) {
    if (picked) drop(picked, binId);
    else message = 'Hãy chọn một thẻ trước.';
  }

  function retry() {
    placed = clearWrong(cards, placed);
    message = 'Các thẻ xếp sai đã trở về hàng chờ. Thử lại nhé.';
  }

  function reset() {
    placed = {};
    picked = null;
    message = 'Chọn một thẻ, rồi chọn ô phù hợp.';
  }

  /** @param {DragEvent} e @param {string} id */
  function dragStart(e, id) {
    picked = id;
    e.dataTransfer?.setData('text/plain', id);
  }

  /** @param {DragEvent} e @param {string} binId */
  function dropOn(e, binId) {
    e.preventDefault();
    const id = e.dataTransfer?.getData('text/plain') || picked;
    if (id) drop(id, binId);
  }
</script>

<div class="space-y-4" role="group" aria-label={label}>
  <div>
    <p class="mb-2 text-sm font-semibold text-slate-700">Thẻ chờ xếp ({waiting.length})</p>
    <div class="flex min-h-12 flex-wrap gap-2">
      {#each waiting as card (card.id)}
        <button
          type="button"
          draggable="true"
          class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm transition {picked ===
          card.id
            ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-800'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'} {focusRing}"
          aria-pressed={picked === card.id}
          onclick={() => (picked = picked === card.id ? null : card.id)}
          ondragstart={(e) => dragStart(e, card.id)}
        >
          {card.text}
        </button>
      {:else}
        <p class="text-sm text-slate-500">Không còn thẻ nào.</p>
      {/each}
    </div>
  </div>

  <div class="grid gap-2 sm:grid-cols-2">
    {#each bins as bin (bin.id)}
      <div
        class="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-2"
        role="group"
        aria-label="Ô {bin.label}"
        ondragover={(e) => e.preventDefault()}
        ondrop={(e) => dropOn(e, bin.id)}
      >
        <button
          type="button"
          class="w-full rounded-lg bg-white px-3 py-2 text-left text-sm font-bold text-slate-800 shadow-sm hover:bg-indigo-50 min-h-11 {focusRing}"
          aria-label="Đặt thẻ đang chọn vào ô {bin.label}"
          onclick={() => chooseBin(bin.id)}
        >
          {bin.label}
        </button>
        <ul class="mt-2 flex flex-wrap gap-1">
          {#each cards.filter((c) => placed[c.id] === bin.id) as card (card.id)}
            <li
              class="rounded-md px-2 py-1 text-xs {card.bin === bin.id
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-rose-100 text-rose-800'}"
            >
              <span aria-hidden="true">{card.bin === bin.id ? '✓' : '✗'}</span>
              <span class="sr-only">{card.bin === bin.id ? 'Đúng:' : 'Sai:'}</span>
              {card.text}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    {message}
  </p>

  <div class="flex flex-wrap items-center gap-2">
    <span class="text-sm font-semibold text-slate-700 tabular-nums">
      Đúng {score.right}/{cards.length}
    </span>
    <button type="button" class={button.quiet} disabled={score.wrong === 0} onclick={retry}>
      Gỡ thẻ sai
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
</div>
