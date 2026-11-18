<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { BALL_COLORS, boxText } from './chance.js';

  /**
   * A box of coloured balls for a "chắc chắn, có thể, không thể" question, one
   * ball per entry of `balls`, each with its colour's letter.
   * @type {{ balls: readonly import('./chance.js').BallColor[] }}
   */
  let { balls } = $props();
</script>

<div
  class="mx-auto flex max-w-xs flex-wrap justify-center gap-2 rounded-2xl border-4 border-amber-700 bg-amber-50 p-3"
  role="img"
  aria-label="{boxText(balls)}."
>
  {#each balls as color, i (i)}
    <span
      class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 text-lg font-bold"
      style:background={BALL_COLORS[color].fill}
      style:color={BALL_COLORS[color].ink}>{BALL_COLORS[color].mark}</span
    >
  {/each}
</div>
