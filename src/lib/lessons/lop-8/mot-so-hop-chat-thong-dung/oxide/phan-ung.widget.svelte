<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import EquationLine from '../_shared/equation-line.svelte';
  import { KINDS, OXIDES, REAGENTS, mixText, oxide } from './engine.js';

  let formula = $state('CaO');
  /** @type {import('./engine.js').Reagent} */
  let reagent = $state('acid');
  let revealKind = $state(false);

  const o = $derived(oxide(formula));
  const equation = $derived(o.reactions[reagent]);
  const reagentOptions = REAGENTS.map((r) => ({ value: r.id, label: r.label }));
  /** Which reagents the chosen oxide has been tried with. */
  let tried = $state(/** @type {Record<string, string[]>} */ ({ CaO: ['acid'] }));

  /** @param {string} f @param {string} r */
  function mark(f, r) {
    const list = tried[f] ?? [];
    if (!list.includes(r)) tried[f] = [...list, r];
  }

  const doneAll = $derived((tried[formula] ?? []).length === REAGENTS.length);
  const kindLabel = $derived(KINDS.find((k) => k.id === o.kind)?.label ?? '');
  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-[minmax(0,14rem)_1fr]">
    <label class="block text-sm font-semibold text-slate-700">
      Oxide
      <select
        class={select}
        bind:value={formula}
        onchange={() => {
          revealKind = false;
          mark(formula, reagent);
        }}
      >
        {#each OXIDES as x (x.formula)}
          <option value={x.formula}>{prettyFormula(x.formula)} – {x.name}</option>
        {/each}
      </select>
    </label>
    <SegmentedControl
      label="Cho oxide vào"
      options={reagentOptions}
      bind:value={reagent}
      onchange={(v) => mark(formula, String(v))}
    />
  </div>

  <div class="min-h-14 rounded-xl bg-slate-50 p-3 text-base">
    {#if equation}
      <EquationLine text={equation} />
    {:else}
      <p class="text-sm text-slate-600">Không xảy ra phản ứng.</p>
    {/if}
  </div>

  <FeedbackNote tone={equation ? 'ok' : 'info'} text={mixText(o, reagent)} />

  <div class="flex flex-wrap items-center gap-3 text-sm">
    <span class="text-slate-600 tabular-nums"
      >Đã thử {(tried[formula] ?? []).length}/{REAGENTS.length} chất với {prettyFormula(
        formula,
      )}.</span
    >
    {#if doneAll && !revealKind}
      <button
        type="button"
        class="min-h-11 rounded-lg border border-indigo-600 px-3 py-2 font-semibold text-indigo-700 {focusRing}"
        onclick={() => (revealKind = true)}
      >
        {prettyFormula(formula)} thuộc loại oxide nào?
      </button>
    {/if}
    <span class="font-semibold text-indigo-700" aria-live="polite"
      >{#if revealKind}{prettyFormula(formula)} là {kindLabel.toLowerCase()}.{/if}</span
    >
  </div>
</div>
