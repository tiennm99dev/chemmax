<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import { signOf, signWord } from './column.js';
  import { PLACE_NAMES, placeTitle } from './whole-numbers.js';

  /**
   * A calculation of numbers with any count of digits set out in columns as
   * the book prints it: ones under ones, the sign on the left, a line and the
   * result digits written so far. Static: the parent changes the props. The
   * small carried 1 ("nhớ 1") shows in the column that receives it. Places are
   * counted by power of ten: 0 is the ones, 1 the tens, 2 the hundreds. The
   * two-digit board with bigger cells is `column-board.svelte`.
   *
   * - `written`: result digits by place, ones first; null while still empty.
   * - `width`: how many columns to draw; by default enough for both numbers
   *   and the written result.
   * - `carried`: the place holding the carried 1, or null.
   * - `active`: the place being worked on, tinted, or null.
   * @type {{
   *   a: number;
   *   b: number;
   *   op: import('./column.js').Op;
   *   written: ReadonlyArray<number | null>;
   *   width?: number;
   *   carried?: number | null;
   *   active?: number | null;
   * }}
   */
  let { a, b, op, written, width = 0, carried = null, active = null } = $props();

  const count = $derived(
    width || Math.max(String(a).length, String(b).length, digitsWritten(written)),
  );
  const columns = $derived(Array.from({ length: count }, (_, i) => count - 1 - i));
  const label = $derived.by(() => {
    const parts = columns.map((i) => `hàng ${PLACE_NAMES[i]} ${written[i] ?? 'chưa viết'}`);
    const carry = carried !== null ? ` Đã nhớ 1 sang hàng ${PLACE_NAMES[carried]}.` : '';
    return `Đặt tính: ${a} ${signWord(op)} ${b}.${carry} Kết quả: ${parts.join(', ')}.`;
  });

  /**
   * How many places hold a written digit, counting from the ones.
   * @param {ReadonlyArray<number | null>} digits
   */
  function digitsWritten(digits) {
    let last = 0;
    digits.forEach((d, i) => {
      if (d !== null) last = i + 1;
    });
    return last;
  }

  /** @param {number} i */
  const tint = (i) => (active === i ? 'bg-indigo-100' : 'bg-white');
  /**
   * The digit of `n` at a place, empty when `n` is too short to have one.
   * @param {number} n
   * @param {number} i
   */
  const digit = (n, i) => (i > 0 && n < 10 ** i ? '' : Math.floor(n / 10 ** i) % 10);
</script>

<div
  class="inline-grid overflow-hidden rounded-2xl border-4 border-slate-300 bg-white text-center text-3xl font-bold tabular-nums"
  style="grid-template-columns: 2rem repeat({count}, 3.25rem)"
  role="img"
  aria-label={label}
>
  <span></span>
  {#each columns as i (i)}
    <span class="py-1 text-xs font-semibold text-slate-600 {tint(i)}">{placeTitle(i)}</span>
  {/each}

  <span></span>
  {#each columns as i (i)}
    <span class="py-1 text-slate-800 {tint(i)}">{digit(a, i)}</span>
  {/each}

  <span class="self-start text-2xl text-slate-600">{signOf(op)}</span>
  {#each columns as i (i)}
    <span class="relative min-h-11 py-1 text-slate-800 {tint(i)}">
      {digit(b, i)}
      {#if carried === i}
        <span
          class="absolute left-0.5 top-0 rounded-full bg-rose-100 px-1 text-base leading-5 text-rose-700"
          >1</span
        >
      {/if}
    </span>
  {/each}

  <span class="mx-2 h-1 rounded bg-slate-700" style="grid-column: 1 / -1"></span>

  <span></span>
  {#each columns as i (i)}
    <span class="min-h-12 py-1 text-indigo-700 {tint(i)}">{written[i] ?? ''}</span>
  {/each}
</div>
