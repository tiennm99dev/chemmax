<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { ACID_PARTS, ALCOHOL_PARTS, ester } from '../_shared/ester.js';
  import { PUZZLES, judge, puzzleText } from './engine.js';

  let index = $state(0);
  let acidId = $state('formate');
  let alcoholId = $state('methyl');
  /** @type {boolean[]} first-try result of each finished puzzle */
  let firstTry = $state([]);
  let tried = $state(false);
  /** @type {HTMLButtonElement | undefined} */
  let checkButton = $state();
  let solved = $state(false);
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: 'Chọn gốc acid và gốc alcohol để tạo ester X, rồi bấm Kiểm tra.',
    }),
  );

  const puzzle = $derived(PUZZLES[index]);
  const built = $derived(ester(acidId, alcoholId));
  const finished = $derived(firstTry.length === PUZZLES.length);
  const score = $derived(firstTry.filter(Boolean).length);

  function check() {
    const r = judge(puzzle, acidId, alcoholId);
    if (!tried) {
      firstTry = [...firstTry.slice(0, index), r.ok];
      tried = true;
    }
    solved = r.ok;
    note = { tone: r.ok ? 'ok' : 'warn', text: r.text };
  }

  function next() {
    if (index + 1 >= PUZZLES.length) return;
    index += 1;
    tried = false;
    solved = false;
    note = { tone: 'info', text: 'Bài mới: chọn hai gốc rồi bấm Kiểm tra.' };
    tick().then(() => checkButton?.focus());
  }

  function restart() {
    index = 0;
    firstTry = [];
    tried = false;
    solved = false;
    note = { tone: 'info', text: 'Chọn gốc acid và gốc alcohol để tạo ester X, rồi bấm Kiểm tra.' };
    tick().then(() => checkButton?.focus());
  }
</script>

<div class="space-y-4">
  <p class="text-sm font-semibold text-slate-600">
    Bài {index + 1}/{PUZZLES.length} · Đúng ngay lần đầu: {score}
  </p>
  <div class="rounded-xl bg-indigo-50 p-3 leading-relaxed text-slate-800">
    <LiveRichText text={puzzleText(puzzle)} />
  </div>

  <div class="grid gap-3">
    <SegmentedControl
      label="Gốc acid RCOO–"
      options={ACID_PARTS.map((p) => ({ value: p.id, label: p.name }))}
      bind:value={acidId}
    />
    <SegmentedControl
      label="Gốc alcohol R′"
      options={ALCOHOL_PARTS.map((p) => ({ value: p.id, label: p.name }))}
      bind:value={alcoholId}
    />
  </div>

  <p class="rounded-xl bg-slate-50 p-3 text-center">
    X đang tạo: <span class="font-semibold">{built.name}</span>
    <ChemFormula formula={built.formula} /> (<ChemFormula formula={built.molecular} />, M = {built.molar})
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} bind:this={checkButton} onclick={check}
      >Kiểm tra</button
    >
    {#if solved && index + 1 < PUZZLES.length}
      <button type="button" class={button.secondary} onclick={next}>Bài tiếp theo</button>
    {/if}
    {#if finished && solved && index + 1 >= PUZZLES.length}
      <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
    {/if}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if finished && solved && index + 1 >= PUZZLES.length}
    <p class="text-sm font-semibold text-slate-700" aria-live="polite">
      Hoàn thành {PUZZLES.length} bài, đúng ngay lần đầu {score} bài.
    </p>
  {/if}
</div>
