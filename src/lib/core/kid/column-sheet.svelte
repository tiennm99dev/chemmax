<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { fmt } from '#lib/core/number-format.js';
  import { OP_SIGNS, OP_WORDS, onesDigits } from './column-steps.js';
  import { PLACE_NAMES, placeTitle } from './whole-numbers.js';

  /**
   * A calculation set out in `columns` columns as the book prints it: the
   * place names on top, the two numbers ones under ones, the sign on the left,
   * a line and the result digits written so far. Static: the parent changes
   * `sheet` (`sheetAt` in `column-steps.js`).
   *
   * For + and × a carry shows small and red above the column it goes to. For −
   * a top digit that borrowed shows a red 1 before it (2 becomes 12), and the
   * carried 1 shows beside the second number's digit in the next column.
   * @type {{
   *   a: number;
   *   b: number;
   *   op: import('./column-steps.js').Op;
   *   sheet: import('./column-steps.js').Sheet;
   *   columns: number;
   * }}
   */
  let { a, b, op, sheet, columns } = $props();

  /** Columns from the left, as indices from the ones. */
  const ORDER = $derived(Array.from({ length: columns }, (_, i) => columns - 1 - i));
  const grid = $derived(
    `grid-template-columns: ${columns > 4 ? 1.75 : 2}rem repeat(${columns}, 3.25rem)`,
  );

  const top = $derived(onesDigits(a));
  const bottom = $derived(onesDigits(b));

  const label = $derived.by(() => {
    const result = ORDER.map((c) => sheet.written[c])
      .filter((d) => d !== '')
      .join(' ');
    return `Đặt tính ${fmt(a)} ${OP_WORDS[op]} ${fmt(b)}. Kết quả đã viết: ${result || 'chưa có'}.${
      sheet.active === null ? '' : ` Đang tính hàng ${PLACE_NAMES[sheet.active]}.`
    }`;
  });

  /** @param {number} col */
  const tint = (col) => (sheet.active === col ? 'bg-amber-100' : 'bg-white');
  const cell = 'relative flex h-12 items-center justify-center';
</script>

<div
  class="inline-grid overflow-hidden rounded-2xl border-4 border-slate-300 bg-white text-center text-3xl font-bold tabular-nums"
  style={grid}
  role="img"
  aria-label={label}
>
  <span></span>
  {#each ORDER as col (col)}
    <span
      class="flex items-end justify-center py-1 text-xs font-semibold leading-tight text-slate-600 {tint(
        col,
      )}">{placeTitle(col)}</span
    >
  {/each}

  <span></span>
  {#each ORDER as col (col)}
    <span class="{cell} text-slate-800 {tint(col)}">
      {#if op !== '-' && sheet.carries[col] > 0}
        <span class="pop absolute right-0.5 top-0 text-base leading-5 text-rose-600"
          >{sheet.carries[col]}</span
        >
      {/if}
      {#if sheet.borrowed[col]}
        <span
          class="pop absolute left-0 top-0 rounded-full bg-rose-100 px-1 text-lg leading-6 text-rose-700"
          >1</span
        >
      {/if}
      {top[col] ?? ''}
    </span>
  {/each}

  <span class="self-start pt-1 text-2xl text-slate-600">{OP_SIGNS[op]}</span>
  {#each ORDER as col (col)}
    <span class="{cell} text-slate-800 {tint(col)}">
      {#if op === '-' && sheet.carries[col] > 0}
        <span class="pop absolute left-0.5 top-0 text-base leading-5 text-rose-600">+1</span>
      {/if}
      {bottom[col] ?? ''}
    </span>
  {/each}

  <span class="mx-2 h-1 rounded bg-slate-700" style="grid-column: 1 / -1"></span>

  <span></span>
  {#each ORDER as col (col)}
    <span class="{cell} text-indigo-700 {tint(col)}">{sheet.written[col]}</span>
  {/each}
</div>

<style>
  .pop {
    display: inline-block;
  }

  @media (prefers-reduced-motion: no-preference) {
    .pop {
      animation: pop-in 500ms ease-out both;
    }
  }

  @keyframes pop-in {
    from {
      opacity: 0;
      transform: translateX(-1.5rem) scale(1.4);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
</style>
