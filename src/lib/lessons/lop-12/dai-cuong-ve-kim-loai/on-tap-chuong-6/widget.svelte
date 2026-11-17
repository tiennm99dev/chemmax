<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing, button } from '#lib/core/ui.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { METALS, potentialText } from '../_shared/metals.js';
  import { QUESTIONS, card } from './engine.js';

  /** The series strip: the book's metals with 2H⁺/H₂ in place, E° rising to the right. */
  const STRIP = [
    ...METALS.filter((m) => m.E < 0).map((m) => ({ id: m.id, E: m.E })),
    { id: 'H', E: 0 },
    ...METALS.filter((m) => m.E > 0).map((m) => ({ id: m.id, E: m.E })),
  ];

  let index = $state(0);
  /** @type {string | null} */
  let pick = $state(null);
  let right = $state(0);
  let answered = $state(0);
  /** @type {HTMLElement | undefined} */
  let promptEl = $state();

  const q = $derived(QUESTIONS[index]);
  const c = $derived(card(q));
  const done = $derived(pick !== null);
  const ok = $derived(pick === c.answer);

  /** @param {string} value */
  function choose(value) {
    if (pick !== null) return;
    pick = value;
    answered += 1;
    if (value === c.answer) right += 1;
  }

  const last = $derived(index === QUESTIONS.length - 1);

  async function next() {
    if (last) {
      right = 0;
      answered = 0;
    }
    index = (index + 1) % QUESTIONS.length;
    pick = null;
    await tick();
    promptEl?.focus();
  }

  const note = $derived.by(() => {
    if (!done)
      return {
        tone: /** @type {const} */ ('info'),
        text:
          q.kind === 'react'
            ? 'Tìm hai cặp trên dãy điện hoá rồi áp dụng quy tắc α.'
            : 'Kiểm tra đủ ba điều kiện ăn mòn điện hoá, rồi so sánh $E^\\circ$ của hai kim loại.',
      };
    return {
      tone: ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
      text: `${ok ? 'Đúng!' : 'Chưa đúng.'} ${c.why}`,
    };
  });

  const CHOICE = `inline-flex min-h-11 items-center justify-center rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${focusRing}`;

  /** @param {string} value */
  function tone(value) {
    if (pick === null) return `${CHOICE} border-slate-300 bg-white hover:bg-slate-100`;
    if (value === c.answer) return `${CHOICE} border-emerald-500 bg-emerald-50 text-emerald-900`;
    if (value === pick) return `${CHOICE} border-rose-500 bg-rose-50 text-rose-900`;
    return `${CHOICE} border-slate-200 bg-white text-slate-400`;
  }
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-600">
    Câu {index + 1}/{QUESTIONS.length} · {q.kind === 'react' ? 'Dãy điện hoá' : 'Ăn mòn điện hoá'} · Đúng
    {right}/{answered}
  </p>

  <ol
    class="grid grid-cols-4 gap-1 text-center text-xs sm:grid-cols-6"
    aria-label="Dãy điện hoá, thế điện cực chuẩn tăng dần"
  >
    {#each STRIP as s (s.id)}
      {@const marked = c.metals.includes(s.id)}
      <li
        class="rounded-lg border px-1 py-1 {marked
          ? 'border-indigo-500 bg-indigo-50 font-semibold text-indigo-900'
          : 'border-slate-200 bg-white text-slate-600'}"
        aria-label={`${s.id === 'H' ? 'hydrogen' : s.id}${done || !marked ? `, ${potentialText(s.E)}` : ''}${marked ? ', đang xét' : ''}`}
      >
        <span class="block text-sm">{s.id === 'H' ? 'H₂' : s.id}</span>
        <span class="block tabular-nums {marked && !done ? 'invisible' : ''}"
          >{potentialText(s.E).replace(' V', '')}</span
        >
      </li>
    {/each}
  </ol>
  <p class="text-xs text-slate-500">
    Thế điện cực chuẩn (V) tăng dần từ trái sang phải; ô viền xanh là các chất đang xét, E° của
    chúng hiện ra sau khi trả lời.
  </p>

  <div class="rounded-xl bg-slate-50 p-3" tabindex="-1" bind:this={promptEl}>
    <p class="font-semibold"><LiveRichText text={c.prompt} /></p>
  </div>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn câu trả lời">
    {#each c.options as o (o.value)}
      <button
        type="button"
        class={tone(o.value)}
        aria-pressed={pick === o.value}
        aria-disabled={done}
        onclick={() => choose(o.value)}
      >
        {o.label}
      </button>
    {/each}
  </div>

  {#if done && (c.equations.length || c.note)}
    <div class="space-y-2 rounded-xl border border-slate-200 p-3 text-sm">
      {#if c.equations.length}
        <div class="space-y-1 overflow-x-auto">
          {#each c.equations as eq (eq)}
            <EquationLine text={eq} />
          {/each}
        </div>
      {/if}
      {#if c.note}
        <p class="text-slate-600"><LiveRichText text={c.note} /></p>
      {/if}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if done && last}
    <p class="text-sm font-semibold text-slate-700" role="status">
      Hoàn thành: đúng {right}/{answered} câu.
    </p>
  {/if}

  <button type="button" class={button.primary} disabled={!done} onclick={next}>
    {last ? 'Làm lại từ đầu' : 'Câu tiếp theo'}
  </button>
</div>
