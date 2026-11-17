<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import Tex from '#lib/components/tex.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import {
    HARDNESS_NAMES,
    ION_FORMULA,
    ION_ORDER,
    METHODS,
    SAMPLES,
    TRAP_NAMES,
    apply,
    hardness,
    start,
  } from './engine.js';

  /** @typedef {import('./engine.js').Method} Method */
  /** @typedef {import('./engine.js').Trap} Trap */

  const sampleOptions = SAMPLES.map((s) => ({ value: s.id, label: s.name }));
  /** Chip colours per ion. */
  const TONE = {
    Ca: 'bg-amber-200 text-amber-900',
    Mg: 'bg-lime-200 text-lime-900',
    Na: 'bg-slate-200 text-slate-800',
    HCO3: 'bg-sky-100 text-sky-900',
    Cl: 'bg-emerald-100 text-emerald-900',
    SO4: 'bg-violet-100 text-violet-900',
  };

  let sampleId = $state('tam-thoi');
  let water = $state(start('tam-thoi'));
  /** @type {Method[]} */
  let used = $state([]);
  /** @type {import('./engine.js').Step | null} */
  let last = $state(null);

  const h = $derived(hardness(water.ions));
  const start0 = $derived(hardness(start(sampleId).ions));
  const traps = $derived(
    /** @type {Array<[Trap, number]>} */ (Object.entries(water.traps)).filter(([, n]) => n > 0),
  );

  /** @param {string | number} id */
  function chooseSample(id) {
    sampleId = String(id);
    reset();
  }

  function reset() {
    water = start(sampleId);
    used = [];
    last = null;
  }

  /** @param {Method} m */
  function run(m) {
    const step = apply(water, m);
    water = step.water;
    last = step;
    used = [...used, m];
  }

  const note = $derived.by(() => {
    if (!last)
      return {
        tone: /** @type {const} */ ('info'),
        text: `Cốc nước chứa ${water.ions.Ca} ion $\\mathrm{Ca^{2+}}$ và ${water.ions.Mg} ion $\\mathrm{Mg^{2+}}$: đây là ${HARDNESS_NAMES[h.kind]}. Chọn một cách làm mềm.`,
      };
    if (h.kind === 'mem')
      return {
        tone: /** @type {const} */ ('ok'),
        text: `${last.text} Đã làm mềm sau ${used.length} bước.`,
      };
    return {
      tone: last.removed > 0 ? /** @type {const} */ ('info') : /** @type {const} */ ('warn'),
      text: `${last.text} Hiện tại: ${HARDNESS_NAMES[h.kind]}.`,
    };
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap items-end gap-3">
    <SegmentedControl
      label="Mẫu nước"
      options={sampleOptions}
      bind:value={sampleId}
      onchange={chooseSample}
    />
    <button type="button" class={button.quiet} onclick={reset}>Lấy lại mẫu</button>
  </div>
  <p class="text-sm text-slate-600">
    Ban đầu: {HARDNESS_NAMES[start0.kind]} ({start0.temporary} ion gây cứng tạm thời, {start0.permanent}
    ion gây cứng vĩnh cửu).
  </p>

  <div
    class="relative overflow-hidden rounded-b-3xl border-4 border-t-0 border-slate-400 bg-sky-50"
    role="group"
    aria-label="Cốc nước"
  >
    <ul class="flex min-h-28 flex-wrap content-start gap-1.5 p-3" aria-label="Ion trong nước">
      {#each ION_ORDER as ion (ion)}
        {#each { length: water.ions[ion] }, k (k)}
          <li class="rounded-full px-2 py-0.5 text-sm font-semibold {TONE[ion]}">
            <ChemFormula formula={ION_FORMULA[ion]} />
          </li>
        {/each}
      {/each}
    </ul>
    <div class="min-h-10 border-t border-dashed border-slate-300 bg-white/80 px-3 py-2 text-sm">
      {#if traps.length === 0}
        <span class="text-slate-500">Chưa có kết tủa.</span>
      {:else}
        <ul class="flex flex-wrap gap-2" aria-label="Chất đã tách khỏi nước">
          {#each traps as [t, n] (t)}
            <li class="rounded-md border border-slate-300 bg-white px-2 py-0.5">
              {#if t === 'resin'}
                giữ trên {TRAP_NAMES[t]}: {n} ion
              {:else}
                <ChemFormula formula={TRAP_NAMES[t]} />↓ giữ {n} ion kim loại
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>

  <p class="text-sm font-semibold" aria-live="polite">
    Còn {water.ions.Ca + water.ions.Mg} ion gây cứng · {HARDNESS_NAMES[h.kind]}
  </p>

  <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Cách làm mềm nước">
    {#each METHODS as m (m.id)}
      <button type="button" class={button.quiet} onclick={() => run(m.id)}>
        {#if m.id === 'voi'}
          Thêm <ChemFormula formula="Ca(OH)2" /> vừa đủ
        {:else if m.id === 'soda'}
          Thêm <ChemFormula formula="Na2CO3" />
        {:else if m.id === 'phosphate'}
          Thêm <ChemFormula formula="Na3PO4" />
        {:else}
          {m.name}
        {/if}
      </button>
    {/each}
  </div>

  {#if last && last.equations.length}
    <div class="space-y-1 overflow-x-auto rounded-xl border border-slate-200 p-3 text-sm">
      {#each last.equations as eq (eq)}
        <div><Tex math={eq} /></div>
      {/each}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
