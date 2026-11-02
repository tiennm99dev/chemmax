<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { rng, shuffle } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { allCases, roundFrom } from './engine.js';

  const CHOICES = /** @type {const} */ ([
    { value: 'thuan', label: 'Chiều thuận' },
    { value: 'nghich', label: 'Chiều nghịch' },
    { value: 'khong', label: 'Không chuyển dịch' },
  ]);
  const CASES = allCases();

  let seed = $state(1);
  const round = $derived(roundFrom(shuffle(rng(seed), CASES)));
  let index = $state(0);
  let score = $state(0);
  let answered = $state(/** @type {'thuan' | 'nghich' | 'khong' | null} */ (null));
  /** @type {HTMLButtonElement | undefined} */
  let nextButton = $state();

  const current = $derived(round[index]);
  const finished = $derived(index >= round.length);

  /** @param {'thuan' | 'nghich' | 'khong'} choice */
  async function choose(choice) {
    if (answered) return;
    answered = choice;
    if (choice === current.shift) score += 1;
    await tick();
    nextButton?.focus();
  }

  function next() {
    answered = null;
    index += 1;
  }

  function restart() {
    seed += 1;
    index = 0;
    score = 0;
    answered = null;
  }
</script>

<div class="space-y-4">
  {#if finished}
    <FeedbackNote
      tone={score >= round.length - 1 ? 'ok' : 'info'}
      text="Em đúng {score}/{round.length} câu. {score >= round.length - 1
        ? 'Em đã nắm chắc nguyên lí Le Chatelier.'
        : 'Hãy xem lại bảng các yếu tố và làm thêm một lượt.'}"
    />
    <button type="button" class={button.primary} onclick={restart}>Làm lượt khác</button>
  {:else}
    <p class="text-sm font-semibold text-slate-600">
      Câu {index + 1}/{round.length} · Đúng {score}
    </p>
    <div class="rounded-xl bg-slate-50 p-4">
      <p class="text-lg"><LiveRichText text={`$${current.reaction.tex}$`} /></p>
      <p class="text-sm text-slate-600">
        Chiều thuận {current.reaction.exothermic ? 'toả nhiệt' : 'thu nhiệt'}.
      </p>
      <p class="mt-2 font-semibold"><LiveRichText text={current.text} /></p>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each CHOICES as c (c.value)}
        <button
          type="button"
          class={button.secondary}
          disabled={answered !== null}
          onclick={() => choose(c.value)}
        >
          {c.label}
        </button>
      {/each}
    </div>
    {#if answered}
      <FeedbackNote
        tone={answered === current.shift ? 'ok' : 'warn'}
        text="{answered === current.shift ? 'Đúng.' : 'Chưa đúng.'} {current.why}"
      />
      <button bind:this={nextButton} type="button" class={button.primary} onclick={next}>
        Câu tiếp theo
      </button>
    {/if}
  {/if}
</div>
