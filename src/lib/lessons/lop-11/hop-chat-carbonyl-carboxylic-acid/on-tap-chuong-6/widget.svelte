<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { CHALLENGES, REAGENTS, compound, react, route } from './engine.js';

  /** @typedef {import('./engine.js').CompoundId} CompoundId */
  /** @typedef {import('./engine.js').ReagentId} ReagentId */
  /** @typedef {import('./engine.js').Reaction} Reaction */

  const CHALLENGE_OPTIONS = CHALLENGES.map((c, i) => ({ value: i, label: `Nhiệm vụ ${i + 1}` }));

  let challengeIndex = $state(0);
  let here = $state(/** @type {CompoundId} */ (CHALLENGES[0].from));
  let steps = $state(/** @type {Reaction[]} */ ([]));
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: 'Bắt đầu từ acetylene, cần điều chế ethyl acetate. Chọn thuốc thử và điều kiện để biến chất đang có thành chất khác.',
    }),
  );

  const challenge = $derived(CHALLENGES[challengeIndex]);
  const target = $derived(compound(challenge.to));
  const current = $derived(compound(here));
  const done = $derived(here === challenge.to);
  const shortest = $derived(route(challenge.from, challenge.to)?.length ?? 0);

  /** @param {string | number} [value] */
  function restart(value) {
    const c = CHALLENGES[typeof value === 'number' ? value : challengeIndex];
    here = c.from;
    steps = [];
    note = {
      tone: 'info',
      text: `Bắt đầu từ ${compound(c.from).name}. Cần điều chế ${compound(c.to).name}.`,
    };
  }

  /** @param {ReagentId} id */
  const reagentLabel = (id) => REAGENTS.find((r) => r.id === id)?.label ?? id;

  /** @param {ReagentId} reagent */
  function apply(reagent) {
    if (done) return;
    const label = reagentLabel(reagent);
    const r = react(here, reagent);
    if (!r) {
      note = {
        tone: 'warn',
        text: `Sơ đồ không có phản ứng nào biến ${current.name} (${current.family}) thành một chất khác của sơ đồ bằng ${label}. Thử thuốc thử khác.`,
      };
      return;
    }
    steps = [...steps, r];
    here = r.to;
    const product = compound(r.to);
    if (r.to === challenge.to) {
      note = {
        tone: 'ok',
        text:
          steps.length === shortest
            ? `Đã điều chế được ${product.name} sau ${steps.length} bước, cách ngắn nhất.`
            : `Đã điều chế được ${product.name} sau ${steps.length} bước. Có cách chỉ cần ${shortest} bước, thử lại xem.`,
      };
    } else {
      note = {
        tone: 'info',
        text: `Phản ứng ${r.kind}: ${compound(r.from).name} thành ${product.name}. Tiếp tục từ ${product.name}.`,
      };
    }
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nhiệm vụ"
    options={CHALLENGE_OPTIONS}
    bind:value={challengeIndex}
    onchange={restart}
  />

  <div class="grid grid-cols-2 gap-2 text-center">
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="text-xs text-slate-600">Chất đang có</p>
      <p class="text-lg font-semibold"><ChemFormula formula={current.formula} /></p>
      <p class="text-sm text-slate-700">{current.name} ({current.family})</p>
    </div>
    <div class="rounded-xl p-3 {done ? 'bg-emerald-50' : 'bg-indigo-50'}">
      <p class="text-xs text-slate-600">Cần điều chế</p>
      <p class="text-lg font-semibold"><ChemFormula formula={target.formula} /></p>
      <p class="text-sm text-slate-700">{target.name}</p>
    </div>
  </div>

  <div
    class="grid grid-cols-2 gap-2 sm:grid-cols-3"
    role="group"
    aria-label="Thuốc thử và điều kiện"
  >
    {#each REAGENTS as r (r.id)}
      <button
        type="button"
        class="min-h-12 rounded-lg border-2 border-slate-300 bg-white px-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50 {focusRing}"
        disabled={done}
        onclick={() => apply(r.id)}>{r.label}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if steps.length > 0}
    <ol class="list-decimal space-y-2 pl-6" aria-label="Các phản ứng đã thực hiện">
      {#each steps as s, i (i)}
        <li>
          <span class="block overflow-x-auto"><EquationLine text={s.equation} /></span>
          <span class="block text-xs text-slate-600"
            >{reagentLabel(s.reagent)}{s.condition ? ` (${s.condition})` : ''}: {s.kind}</span
          >
        </li>
      {/each}
    </ol>
  {/if}

  <button type="button" class={button.quiet} onclick={() => restart()}>Làm lại nhiệm vụ</button>
</div>
