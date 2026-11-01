<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { BOND_LABELS, chi } from '../_shared/bonds.js';
  import { ITEMS, QUESTIONS, deltaLine, itemType, nextStep, rightAnswer } from './engine.js';

  /** @typedef {import('./engine.js').BondType} BondType */

  let round = $state(0);
  /** @type {number | BondType} */
  let at = $state(0);
  /** @type {boolean | null} */
  let lastRight = $state(null);
  let missed = $state(false);
  let clean = $state(0);
  let finished = $state(0);

  const item = $derived(ITEMS[round]);
  const done = $derived(typeof at === 'string');

  /** @param {boolean} yes */
  function answer(yes) {
    if (typeof at !== 'number') return;
    const ok = yes === rightAnswer(item, at);
    lastRight = ok;
    if (!ok) {
      missed = true;
      return;
    }
    at = nextStep(at, yes);
    if (typeof at === 'string') {
      finished += 1;
      if (!missed) clean += 1;
    }
  }

  function next() {
    round = (round + 1) % ITEMS.length;
    at = 0;
    lastRight = null;
    missed = false;
  }

  const TONE = /** @type {Record<BondType, string>} */ ({
    ion: 'bg-rose-100 text-rose-900',
    polar: 'bg-violet-100 text-violet-900',
    nonpolar: 'bg-sky-100 text-sky-900',
  });
  const LEAVES = /** @type {BondType[]} */ (['ion', 'polar', 'nonpolar']);
  /** @param {string} leaf */
  const reached = (leaf) => at === leaf;
</script>

<div class="space-y-4">
  <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
    <p class="text-sm text-indigo-800">Chất {round + 1}/{ITEMS.length}</p>
    <p class="text-2xl font-bold text-indigo-950"><ChemFormula formula={item.compound} /></p>
    <p class="mt-1 text-sm text-indigo-900">
      Xét liên kết {item.a}–{item.b}: độ âm điện χ({item.a}) = {formatNumber(chi(item.a))}, χ({item.b})
      = {formatNumber(chi(item.b))}.
    </p>
  </div>

  <ol class="space-y-2" aria-label="Sơ đồ quyết định loại liên kết">
    {#each QUESTIONS as q, i (i)}
      {@const active = at === i}
      {@const passed = done ? (at === 'ion' ? i === 0 : true) : typeof at === 'number' && at > i}
      <li
        class="rounded-xl border p-3 {active
          ? 'border-indigo-600 bg-white ring-2 ring-indigo-600'
          : passed
            ? 'border-emerald-300 bg-emerald-50'
            : 'border-slate-200 bg-slate-50 text-slate-500'}"
      >
        <p class="font-semibold">Bước {i + 1}: <LiveRichText text={q.text} /></p>
        {#if active}
          <div class="mt-2 flex flex-wrap gap-2">
            <button type="button" class={button.secondary} onclick={() => answer(true)}>Có</button>
            <button type="button" class={button.secondary} onclick={() => answer(false)}
              >Không</button
            >
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  <ul class="grid gap-2 sm:grid-cols-3" aria-label="Các kết quả">
    {#each LEAVES as leaf (leaf)}
      <li
        class="rounded-xl p-3 text-center text-sm font-semibold {reached(leaf)
          ? `${TONE[leaf]} ring-2 ring-slate-900`
          : 'bg-slate-100 text-slate-500'}"
      >
        {BOND_LABELS[leaf]}
      </li>
    {/each}
  </ul>

  {#if done}
    <FeedbackNote
      tone="ok"
      text={`${deltaLine(item)}. Liên kết ${item.a}–${item.b}: ${BOND_LABELS[itemType(item)].toLowerCase()}.${item.note ? ` ${item.note}` : ''}`}
    />
  {:else if lastRight === false}
    <FeedbackNote tone="warn" text="Chưa đúng. Tính lại hiệu độ âm điện rồi so sánh với ngưỡng." />
  {:else}
    <FeedbackNote tone="info" text="Tính hiệu độ âm điện, rồi trả lời từng câu hỏi trên sơ đồ." />
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    {#if done}
      <button type="button" class={button.primary} onclick={next}>Chất tiếp theo</button>
    {/if}
    <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
      Đã xong {finished} chất, đúng ngay từ đầu {clean}.
    </p>
  </div>
</div>
