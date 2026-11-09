<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { ALKENES, REAGENTS, addAcross, markovnikovCarbon } from './engine.js';

  /** @typedef {ReturnType<typeof addAcross>} Product */

  const ALKENE_OPTIONS = ALKENES.map((a) => ({ value: a.id, label: a.name }));
  const REAGENT_OPTIONS = REAGENTS.map((r) => ({ value: r.id, label: prettyFormula(r.formula) }));
  const KIND_TEXT = { main: 'Sản phẩm chính', minor: 'Sản phẩm phụ', only: 'Sản phẩm duy nhất' };

  let alkeneId = $state(ALKENES[0].id);
  let reagentId = $state(REAGENTS[0].id);
  let hAt = $state(/** @type {number | null} */ (null));
  let found = $state(/** @type {Product[]} */ ([]));

  const alkene = $derived(ALKENES.find((a) => a.id === alkeneId) ?? ALKENES[0]);
  const reagent = $derived(REAGENTS.find((r) => r.id === reagentId) ?? REAGENTS[0]);
  const product = $derived(hAt === null ? null : addAcross(alkene, reagent, hAt));
  const xAt = $derived(
    hAt === null ? null : hAt === alkene.double ? alkene.double + 1 : alkene.double,
  );

  /** @param {import('./engine.js').Carbon} c */
  const carbonText = (c) =>
    `C${c.h === 0 ? '' : c.h === 1 ? 'H' : `H${c.h}`}${c.branch ? `(${c.branch})` : ''}`;

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!product || hAt === null || xAt === null) {
        return {
          tone: 'info',
          text: `Phân tử ${prettyFormula(reagent.formula)} tách thành H và ${reagent.x}. Bấm vào một carbon của liên kết đôi để gắn H vào đó; nhóm ${reagent.x} sẽ gắn vào carbon còn lại.`,
        };
      }
      const hH = alkene.chain[hAt].h;
      const hX = alkene.chain[xAt].h;
      if (product.kind === 'only') {
        return {
          tone: 'ok',
          text: `Hai carbon của liên kết đôi đều có ${hH} H, phân tử đối xứng nên gắn H vào bên nào cũng được cùng một chất: ${product.name}.`,
        };
      }
      if (product.kind === 'main') {
        return {
          tone: 'ok',
          text: `H gắn vào carbon có ${hH} H (nhiều H hơn), ${reagent.x} gắn vào carbon có ${hX} H. Đây là sản phẩm chính theo quy tắc Markovnikov: ${product.name}.`,
        };
      }
      return {
        tone: 'warn',
        text: `H gắn vào carbon chỉ có ${hH} H (ít H hơn), nên ${product.name} chỉ là sản phẩm phụ. Thử gắn H vào carbon còn lại.`,
      };
    },
  );

  function reset() {
    hAt = null;
    found = [];
  }

  /** @param {number} i */
  function pick(i) {
    hAt = i;
    const p = addAcross(alkene, reagent, i);
    if (!found.some((f) => f.name === p.name)) found = [...found, p];
  }

  /** @param {number} i */
  const isDouble = (i) => i === alkene.double || i === alkene.double + 1;
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Alkene"
    options={ALKENE_OPTIONS}
    bind:value={alkeneId}
    onchange={reset}
  />
  <SegmentedControl
    label="Tác nhân cộng"
    options={REAGENT_OPTIONS}
    bind:value={reagentId}
    onchange={reset}
  />

  <div class="rounded-xl bg-slate-50 px-2 py-4">
    <div class="flex flex-wrap items-end justify-center gap-y-3 text-lg">
      {#each alkene.chain as c, i (i)}
        {#if i > 0}
          <span
            class="mb-3 px-1 font-bold {i - 1 === alkene.double
              ? hAt === null
                ? 'text-indigo-700'
                : 'text-emerald-700'
              : 'text-slate-500'}"
            aria-hidden="true">{i - 1 === alkene.double && hAt === null ? '=' : '–'}</span
          >
        {/if}
        <div class="flex flex-col items-center gap-1">
          <span class="h-7 text-base font-bold" aria-hidden="true">
            {#if hAt === i}
              <span class="drop inline-block rounded bg-sky-100 px-2 text-sky-800">+H</span>
            {:else if xAt === i}
              <span class="drop inline-block rounded bg-rose-100 px-2 text-rose-800"
                >+{reagent.x}</span
              >
            {/if}
          </span>
          {#if isDouble(i)}
            <button
              type="button"
              class="min-h-12 min-w-14 rounded-lg border-2 px-2 py-1 font-semibold {hAt === i
                ? 'border-sky-600 bg-sky-50'
                : 'border-indigo-400 bg-white hover:bg-indigo-50'} {focusRing}"
              aria-pressed={hAt === i}
              aria-label="Gắn H vào carbon số {i + 1}, {prettyFormula(
                carbonText(c),
              )}, có {c.h} nguyên tử H"
              onclick={() => pick(i)}
            >
              <ChemFormula formula={carbonText(c)} />
            </button>
            <span class="text-xs text-slate-600" aria-hidden="true">có {c.h} H</span>
          {:else}
            <span class="min-h-12 px-2 py-2 font-semibold text-slate-700">
              <ChemFormula formula={carbonText(c)} />
            </span>
            <span class="text-xs text-transparent" aria-hidden="true">.</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  {#if product}
    <div class="space-y-1 rounded-xl border border-slate-200 p-3">
      <p class="text-sm font-semibold text-slate-600">
        {KIND_TEXT[product.kind]}{reagent.condition ? ` (${reagent.condition})` : ''}
      </p>
      <p class="text-lg"><EquationLine text={product.equation} /></p>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if found.length > 0}
    <div class="flex flex-wrap items-center gap-2">
      <ul class="flex-1 space-y-1 text-sm" aria-label="Các sản phẩm đã tạo">
        {#each found as f (f.name)}
          <li>
            <ChemFormula formula={f.text} />: {f.name}
            <span class="font-semibold {f.kind === 'minor' ? 'text-amber-700' : 'text-emerald-700'}"
              >({KIND_TEXT[f.kind].toLowerCase()})</span
            >
          </li>
        {/each}
      </ul>
      <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
    </div>
    {#if markovnikovCarbon(alkene) !== -1 && found.length === 2}
      <p class="text-sm text-slate-700">
        Cả hai sản phẩm đều tạo thành, nhưng sản phẩm có H gắn vào carbon nhiều H hơn chiếm phần
        lớn.
      </p>
    {/if}
  {/if}
</div>

<style>
  .drop {
    animation: drop 0.45s ease-out;
  }
  @keyframes drop {
    from {
      opacity: 0;
      transform: translateY(-12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .drop {
      animation: none;
    }
  }
</style>
