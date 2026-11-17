<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { CHAINS, answerOf, chain, choicesOf, fromOf } from './engine.js';

  const chainOptions = CHAINS.map((c) => ({ value: c.id, label: c.name }));

  let chainId = $state('na');
  /** Steps filled in so far. */
  let filled = $state(0);
  /** Steps filled right on the first try. */
  let firstTry = $state(0);
  /** Wrong picks on the current step. @type {string[]} */
  let misses = $state([]);
  /** @type {{ ok: boolean, text: string } | null} */
  let last = $state(null);

  const c = $derived(chain(chainId));
  const finished = $derived(filled === c.links.length);
  const link = $derived(finished ? null : c.links[filled]);
  const choices = $derived(link ? choicesOf(link, filled) : []);

  /** @param {string | number} id */
  function chooseChain(id) {
    chainId = String(id);
    restart();
  }

  function restart() {
    filled = 0;
    firstTry = 0;
    misses = [];
    last = null;
  }

  /** @param {string} value */
  function pick(value) {
    if (!link || misses.includes(value)) return;
    if (value === answerOf(link)) {
      if (misses.length === 0) firstTry += 1;
      last = { ok: true, text: `Đúng! ${link.why}` };
      filled += 1;
      misses = [];
    } else {
      misses = [...misses, value];
      last = {
        ok: false,
        text:
          link.blank === 'to'
            ? 'Chưa đúng. Nghĩ xem chất đầu tác dụng với chất thêm vào thì tạo ra sản phẩm nào, rồi chọn lại.'
            : 'Chưa đúng. Cần thêm chất gì, hay cần điều kiện gì, để chuyển chất đầu thành chất sau? Chọn lại.',
      };
    }
  }

  const note = $derived.by(() => {
    if (finished)
      return {
        tone: /** @type {const} */ ('ok'),
        text: `${last?.text ?? ''} Hoàn thành sơ đồ ${c.name.toLowerCase()}: đúng ngay lần đầu ${firstTry}/${c.links.length} chỗ trống.`,
      };
    if (last)
      return {
        tone: last.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
        text: last.text,
      };
    return {
      tone: /** @type {const} */ ('info'),
      text: 'Điền chỗ trống có dấu ? ở bước đang sáng: chọn sản phẩm hoặc chất phản ứng, điều kiện phù hợp.',
    };
  });
</script>

{#snippet substance(/** @type {string} */ f)}
  <span class="rounded-md border border-slate-300 bg-white px-2 py-0.5 font-semibold"
    ><ChemFormula formula={f} /></span
  >
{/snippet}

{#snippet hole()}
  <span
    class="rounded-md border-2 border-dashed border-indigo-400 bg-indigo-50 px-3 py-0.5 font-bold text-indigo-700"
    ><span aria-hidden="true">?</span><span class="sr-only">chỗ trống</span></span
  >
{/snippet}

<div class="space-y-4">
  <div class="flex flex-wrap items-end gap-3">
    <SegmentedControl
      label="Sơ đồ chuyển hoá"
      options={chainOptions}
      bind:value={chainId}
      onchange={chooseChain}
    />
    <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
  </div>

  <ol class="space-y-2" aria-label="Các bước của sơ đồ">
    {#each c.links as l, i (i)}
      {@const open = i === filled}
      {@const shown = i < filled}
      <li
        class="rounded-xl border p-2 text-sm {open
          ? 'border-indigo-400 bg-indigo-50/40'
          : 'border-slate-200'} {i > filled ? 'opacity-50' : ''}"
        aria-current={open ? 'step' : undefined}
      >
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold text-slate-500">({i + 1})</span>
          {@render substance(fromOf(c, i))}
          <span class="text-slate-500">→</span>
          {#if l.blank === 'reagent' && !shown}
            {@render hole()}
          {:else}
            <span class="text-slate-700"><LiveRichText text={l.reagent} /></span>
          {/if}
          <span class="text-slate-500">→</span>
          {#if l.blank === 'to' && !shown}
            {@render hole()}
          {:else}
            {@render substance(l.to)}
          {/if}
        </div>
        {#if shown}
          <div class="mt-1 overflow-x-auto pl-6 text-slate-700">
            <EquationLine text={l.equation} />
            {#if l.condition}<span class="ml-1 text-xs text-slate-500">({l.condition})</span>{/if}
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  {#if link}
    <div
      class="flex flex-wrap gap-2"
      role="group"
      aria-label={`Chọn đáp án cho chỗ trống ở bước ${filled + 1}`}
    >
      {#each choices as o (o)}
        <button
          type="button"
          class="inline-flex min-h-11 items-center justify-center rounded-lg border-2 px-4 py-2 text-sm font-semibold transition {focusRing} {misses.includes(
            o,
          )
            ? 'border-rose-300 bg-rose-50 text-rose-400 line-through'
            : 'border-slate-300 bg-white hover:bg-slate-100'}"
          aria-disabled={misses.includes(o)}
          onclick={() => pick(o)}
        >
          {#if link.blank === 'to'}<ChemFormula formula={o} />{:else}<LiveRichText text={o} />{/if}
        </button>
      {/each}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
