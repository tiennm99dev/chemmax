<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { DECK, card, score } from './engine.js';

  let round = $state(0);
  /** @type {Record<string, number>} */
  let picks = $state({});
  let turned = $state(false);
  let total = $state(0);
  let played = $state(0);

  const current = $derived(card(DECK[round]));
  const answered = $derived(current.questions.every((q) => picks[q.id] !== undefined));
  const points = $derived(score(current, picks));

  /** @param {import('./engine.js').Question} q */
  const options = (q) =>
    q.options.map((o, i) => ({ value: i, label: q.id === 'oxide' ? prettyFormula(o) : o }));

  function turn() {
    turned = true;
    total += points;
    played += 1;
  }

  function next() {
    round = (round + 1) % DECK.length;
    picks = {};
    turned = false;
  }

  const verdict = $derived(
    points === 4
      ? `Cả 4 dự đoán đều đúng! ${current.reveal}`
      : `Đúng ${points}/4 dự đoán. ${current.reveal}`,
  );
</script>

<div class="space-y-4">
  <div
    class="rounded-2xl border-2 p-5 text-center transition {turned
      ? 'border-emerald-500 bg-emerald-50'
      : 'border-indigo-500 bg-indigo-50'}"
  >
    <p class="text-sm text-slate-600">Thẻ {round + 1}/{DECK.length}: nguyên tố bí ẩn ở</p>
    <p class="text-2xl font-bold text-slate-900">{current.position}</p>
    {#if turned}
      <p class="mt-1 text-sm text-emerald-800">Thẻ đã lật: xem lời giải bên dưới.</p>
    {/if}
  </div>

  {#each current.questions as q (`${current.z}-${q.id}`)}
    <fieldset class="min-w-0 space-y-1" disabled={turned}>
      <SegmentedControl label={q.label} options={options(q)} bind:value={picks[q.id]} />
      {#if turned}
        <p
          class="text-sm font-semibold {picks[q.id] === q.answer
            ? 'text-emerald-700'
            : 'text-rose-700'}"
        >
          {picks[q.id] === q.answer ? 'Đúng' : 'Chưa đúng'}: {q.id === 'oxide'
            ? prettyFormula(q.options[q.answer])
            : q.options[q.answer]}
        </p>
      {/if}
    </fieldset>
  {/each}

  {#if turned}
    <FeedbackNote tone={points === 4 ? 'ok' : 'warn'} text={verdict} />
  {:else}
    <FeedbackNote
      tone="info"
      text={answered
        ? 'Đã đủ 4 dự đoán. Lật thẻ để kiểm tra.'
        : 'Từ vị trí, hãy suy ra cấu hình lớp ngoài cùng, loại nguyên tố, oxide cao nhất và tính chất của hydroxide.'}
    />
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    {#if turned}
      <button type="button" class={button.primary} onclick={next}>Thẻ tiếp theo</button>
    {:else}
      <button type="button" class={button.primary} disabled={!answered} onclick={turn}
        >Lật thẻ</button
      >
    {/if}
    <p class="text-sm text-slate-600" aria-live="polite">
      Điểm: <strong class="tabular-nums">{total}/{played * 4}</strong>
    </p>
  </div>
</div>
