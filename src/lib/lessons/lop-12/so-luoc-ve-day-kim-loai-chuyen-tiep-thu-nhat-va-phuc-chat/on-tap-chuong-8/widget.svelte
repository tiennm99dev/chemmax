<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { buildQuiz, judgePick } from './engine.js';

  /** @typedef {import('./engine.js').Item} Item */

  const QUIZ = buildQuiz();

  let at = $state(0);
  /** Items already picked wrong on this question. @type {Item[]} */
  let misses = $state([]);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let firstTry = $state(0);
  let answered = $state(0);

  const q = $derived(QUIZ[at]);
  const settled = $derived.by(() => verdict?.ok === true || misses.length >= 2);
  const finished = $derived(answered === QUIZ.length);

  /** @param {Item} item */
  function choose(item) {
    if (settled || misses.includes(item)) return;
    const v = judgePick(q, item, misses.length >= 1);
    verdict = v;
    if (v.ok) {
      if (misses.length === 0) firstTry += 1;
      answered += 1;
    } else {
      misses = [...misses, item];
      if (misses.length >= 2) answered += 1;
    }
  }

  function next() {
    if (at === QUIZ.length - 1) {
      at = 0;
      firstTry = 0;
      answered = 0;
    } else at += 1;
    misses = [];
    verdict = null;
  }
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-600" aria-live="polite">
    Câu {at + 1}/{QUIZ.length} · Đúng ngay lần đầu {firstTry}/{answered}
  </p>

  <div class="grid gap-4 sm:grid-cols-[7rem_1fr] sm:items-start">
    {#if q.kind === 'colour'}
      <TestTube liquid={q.item.hex} label={`Ống nghiệm chứa dung dịch màu ${q.item.colour}`} />
    {:else}
      <div class="flex items-center justify-center rounded-xl bg-slate-50 p-4">
        <ChemFormula formula={q.item.formula} class="text-xl font-bold" />
      </div>
    {/if}

    <div class="space-y-3">
      {#if q.kind === 'colour'}
        <p class="text-base">
          <LiveRichText text={q.item.made} /> Dung dịch thu được có màu
          <strong>{q.item.colour}</strong>. Phức chất nào tạo nên màu đó?
        </p>
      {:else}
        <p class="text-base">Phức chất này có màu gì trong dung dịch?</p>
      {/if}

      <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Các lựa chọn">
        {#each q.options as o (o.formula)}
          {@const wrong = misses.includes(o)}
          {@const right = settled && o === q.item}
          <button
            type="button"
            class="flex min-h-12 items-center gap-2 rounded-lg border-2 px-3 py-2 text-left text-sm font-semibold transition {focusRing} {right
              ? 'border-emerald-500 bg-emerald-50'
              : wrong
                ? 'border-rose-300 bg-rose-50 text-rose-400 line-through'
                : 'border-slate-300 bg-white hover:bg-slate-100'}"
            aria-disabled={settled || wrong}
            aria-label={q.kind === 'colour' ? undefined : `màu ${o.colour}`}
            onclick={() => choose(o)}
          >
            {#if q.kind === 'colour'}
              <ChemFormula formula={o.formula} />
            {:else}
              <span
                class="inline-block h-5 w-5 shrink-0 rounded-full border border-slate-300"
                style="background: {o.hex}"
                aria-hidden="true"
              ></span>
              <span aria-hidden="true">{o.colour}</span>
            {/if}
          </button>
        {/each}
      </div>

      {#if settled}
        <button type="button" class={button.primary} onclick={next}>
          {at === QUIZ.length - 1 ? 'Làm lại từ đầu' : 'Câu tiếp theo'}
        </button>
      {/if}
    </div>
  </div>

  <FeedbackNote
    tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
    text={finished && settled
      ? `${verdict?.text ?? ''} Hoàn thành: đúng ngay lần đầu ${firstTry}/${QUIZ.length} câu.`
      : (verdict?.text ??
        (q.kind === 'colour'
          ? 'Dựa vào cách pha và màu dung dịch, chọn công thức phức chất. Mỗi câu có hai lần chọn.'
          : 'Chọn màu của phức chất trong dung dịch. Mỗi câu có hai lần chọn.'))}
  />
</div>
