<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { MODES, PAIRS, judgePair, makeDeck } from './engine.js';

  const START =
    'Lật hai thẻ. Hai thẻ cùng một nguyên tố thì ở lại; không khớp thì bấm thẻ tiếp theo để úp lại.';

  /** @type {string | number} */
  let mode = $state(MODES[0].value);
  let round = $state(0);
  /** @type {string[]} */
  let up = $state([]);
  /** @type {number[]} */
  let matched = $state([]);
  let moves = $state(0);
  let message = $state(START);

  const deck = $derived(makeDeck(String(mode), round));
  const done = $derived(matched.length === PAIRS);
  const missShown = $derived(up.length === 2);

  function reset() {
    up = [];
    matched = [];
    moves = 0;
    message = START;
  }

  function newRound() {
    round += 1;
    reset();
  }

  /** @param {import('./engine.js').MemoryCard} card */
  function flip(card) {
    if (matched.includes(card.z)) return;
    const open = missShown ? [] : up;
    if (open.includes(card.id)) return;
    const next = [...open, card.id];
    if (next.length < 2) {
      up = next;
      message = `Đã lật "${card.text}". Chọn thẻ thứ hai.`;
      return;
    }
    const first = /** @type {import('./engine.js').MemoryCard} */ (
      deck.find((c) => c.id === next[0])
    );
    const result = judgePair(first, card);
    moves += 1;
    if (result.match) {
      matched = [...matched, card.z];
      up = [];
      message =
        matched.length === PAIRS
          ? `${result.text} Hoàn thành ván sau ${moves} lượt lật!`
          : result.text;
    } else {
      up = next;
      message = result.text;
    }
  }

  /** @param {import('./engine.js').MemoryCard} card @param {number} i */
  function cardLabel(card, i) {
    if (matched.includes(card.z)) return `Thẻ ${i + 1}: ${card.text}, đã ghép`;
    if (up.includes(card.id)) return `Thẻ ${i + 1}: ${card.text}`;
    return `Thẻ ${i + 1}, đang úp`;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Ghép theo"
    options={MODES.map((m) => ({ value: m.value, label: m.label }))}
    bind:value={mode}
    onchange={reset}
  />

  <div class="grid grid-cols-3 gap-2 sm:grid-cols-4" role="group" aria-label="Các thẻ nhớ">
    {#each deck as card, i (card.id)}
      {@const isMatched = matched.includes(card.z)}
      {@const isUp = up.includes(card.id)}
      <button
        type="button"
        class="flex min-h-16 items-center justify-center rounded-xl border-2 px-2 py-3 text-center font-semibold transition {focusRing} {isMatched
          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
          : isUp
            ? missShown
              ? 'border-amber-500 bg-amber-50 text-amber-900'
              : 'border-indigo-500 bg-white text-indigo-900'
            : 'border-indigo-200 bg-indigo-600 text-indigo-100 hover:bg-indigo-700'}"
        aria-label={cardLabel(card, i)}
        disabled={isMatched}
        onclick={() => flip(card)}
      >
        {#if isMatched || isUp}
          <span class={card.face === 'symbol' ? 'text-2xl' : 'text-base capitalize'}
            >{card.text}</span
          >
        {:else}
          <span aria-hidden="true" class="text-xl">?</span>
        {/if}
      </button>
    {/each}
  </div>

  <div class="space-y-2 rounded-xl bg-slate-50 p-4 text-sm">
    <p class="font-semibold text-slate-700 tabular-nums">
      Đã ghép {matched.length}/{PAIRS} cặp · {moves} lượt lật
    </p>
    <p
      class={done ? 'font-semibold text-emerald-800' : missShown ? 'text-amber-900' : ''}
      aria-live="polite"
    >
      {message}
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.secondary} onclick={newRound}>Ván mới</button>
      <button type="button" class={button.quiet} onclick={reset}>Chơi lại ván này</button>
    </div>
  </div>
</div>
