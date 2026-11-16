<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import { finished, pick, startQuiz } from './step-quiz.js';

  /**
   * A procedure walked step by step: done steps stay listed with what they
   * achieved, the current step asks what to do. Wrong picks are explained and
   * disabled; the right one opens the next step.
   *
   * - `steps`: the procedure (see step-quiz.js).
   * - `label`: accessible name of the whole quiz.
   * - `onstep`: called with the new step index after each right pick and on
   *   restart (0), so a widget can draw the matching state of the sample.
   * - `doneText`: closing line once every step is done (rich text).
   *
   * @type {{
   *   steps: import('./step-quiz.js').Step[];
   *   label: string;
   *   doneText: string;
   *   onstep?: (index: number) => void;
   * }}
   */
  let { steps, label, doneText, onstep } = $props();

  let quiz = $state(startQuiz());
  const over = $derived(finished(steps, quiz));
  const current = $derived(steps[quiz.index]);

  /** @param {number} i */
  function choose(i) {
    const before = quiz.index;
    quiz = pick(steps, quiz, i);
    if (quiz.index !== before) onstep?.(quiz.index);
  }

  function restart() {
    quiz = startQuiz();
    onstep?.(0);
  }
</script>

<section class="space-y-3" aria-label={label}>
  <ol class="space-y-1 text-sm">
    {#each steps as s, i (s.title)}
      <li
        class="flex gap-2 rounded-lg px-3 py-2 {i < quiz.index
          ? 'bg-emerald-50 text-emerald-900'
          : i === quiz.index
            ? 'bg-indigo-50 font-semibold text-indigo-900'
            : 'text-slate-500'}"
      >
        <span class="tabular-nums" aria-hidden="true">{i < quiz.index ? '✓' : `${i + 1}.`}</span>
        <span>
          {s.title}{#if i < quiz.index}<span class="sr-only">: đã xong</span>{/if}
        </span>
      </li>
    {/each}
  </ol>

  {#if current}
    <div class="rounded-xl border border-slate-200 bg-white p-3">
      <p class="mb-2 text-sm font-semibold text-slate-800">
        Bước {quiz.index + 1}. <LiveRichText text={current.question} />
      </p>
      <div class="grid gap-2">
        {#each current.options as o, i (o.label)}
          <button
            type="button"
            class="{button.quiet} justify-start text-left text-sm font-medium {quiz.wrong.includes(
              i,
            )
              ? 'line-through'
              : ''}"
            disabled={quiz.wrong.includes(i)}
            onclick={() => choose(i)}
          >
            <LiveRichText text={o.label} />
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <FeedbackNote tone={quiz.tone} text={quiz.message} />

  {#if over}
    <FeedbackNote tone="ok" text="{doneText} Số lần chọn sai: {quiz.misses}." />
    <button type="button" class={button.secondary} onclick={restart}>Làm lại từ đầu</button>
  {/if}
</section>
