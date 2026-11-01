<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import PeriodicTable from '#lib/domain/periodic-table.svelte';
  import { RIDDLES, clueText, judgeGuess, points } from './engine.js';

  let round = $state(0);
  let shown = $state(1);
  /** @type {number | null} */
  let selected = $state(null);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let total = $state(0);
  let solved = $state(0);

  const riddle = $derived(RIDDLES[round]);
  const best = $derived(riddle.clues.length);

  /** @param {number} z */
  function onselect(z) {
    if (verdict?.ok) return;
    verdict = judgeGuess(riddle, shown, z);
    if (verdict.ok) {
      total += points(riddle, shown);
      solved += 1;
    }
  }

  function more() {
    shown = Math.min(riddle.clues.length, shown + 1);
    verdict = null;
  }

  function next() {
    round = (round + 1) % RIDDLES.length;
    shown = 1;
    selected = null;
    verdict = null;
  }
</script>

<div class="space-y-4">
  <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
    <p class="text-sm text-indigo-800">
      Câu đố {round + 1}/{RIDDLES.length}: tìm nguyên tố (Z từ 1 đến 36)
    </p>
    <ol class="mt-2 list-decimal space-y-1 pl-5 font-semibold text-indigo-950" aria-live="polite">
      {#each riddle.clues.slice(0, shown) as clue, i (i)}
        <li>{clueText(clue)}</li>
      {/each}
    </ol>
    <p class="mt-2 text-xs text-indigo-800">
      Đã mở {shown}/{best} gợi ý. Giải với càng ít gợi ý, điểm càng cao.
    </p>
  </div>

  <PeriodicTable
    bind:selected
    colorBy="category"
    controls={false}
    details={Boolean(verdict?.ok)}
    {onselect}
    label="Bảng tuần hoàn: chọn nguyên tố em đoán"
  />

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {:else}
    <FeedbackNote tone="info" text="Bấm vào ô của nguyên tố em đoán." />
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    {#if verdict?.ok}
      <button type="button" class={button.primary} onclick={next}>Câu đố tiếp theo</button>
    {:else}
      <button type="button" class={button.secondary} disabled={shown >= best} onclick={more}
        >Mở thêm gợi ý</button
      >
      <button type="button" class={button.quiet} onclick={next}>Bỏ qua</button>
    {/if}
    <p class="text-sm text-slate-600" aria-live="polite">
      Đã giải {solved} câu, <strong class="tabular-nums">{total}</strong> điểm.
    </p>
  </div>
</div>
