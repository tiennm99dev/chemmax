<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationBalancer from '#lib/domain/equation-balancer.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import {
    STEP_REACTIONS,
    atomTokens,
    bookText,
    changeOf,
    compareElectrons,
    halfElectrons,
    halfTex,
    onText,
  } from '../_shared/redox.js';
  import { STEPS, electronCheck, roleResult, seedIsBalanced, tapResult } from './engine.js';

  /** @typedef {import('./engine.js').Stage} Stage */
  /** @typedef {import('../_shared/redox.js').Species} Species */

  const INTROS = /** @type {Record<Stage, string>} */ ({
    mark: 'Số trên mỗi nguyên tử là số oxi hoá của nó. Chạm vào hai nguyên tố có số oxi hoá thay đổi qua phản ứng.',
    roles: 'Chất nào là chất khử?',
    electrons: 'Chỉnh số electron của từng quá trình, rồi bấm Kiểm tra.',
    multipliers: 'Chọn hệ số nhỏ nhất của mỗi quá trình để electron nhường bằng electron nhận.',
    finish: 'Hệ số đã đặt vào sơ đồ. Chỉnh các hệ số còn lại cho đến khi hai vế khớp nhau.',
  });

  let id = $state(STEP_REACTIONS[0].id);
  let stage = $state(/** @type {Stage} */ ('mark'));
  let foundLose = $state(false);
  let foundGain = $state(false);
  let role = $state(/** @type {'reducer' | 'oxidant'} */ ('reducer'));
  let lose = $state(1);
  let gain = $state(1);
  let timesLose = $state(1);
  let timesGain = $state(1);
  let balanced = $state(false);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);

  const r = $derived(STEP_REACTIONS.find((x) => x.id === id) ?? STEP_REACTIONS[0]);
  const options = STEP_REACTIONS.map((x) => ({
    value: x.id,
    label: x.left.map((s) => prettyFormula(s.formula)).join(' + '),
  }));
  const compared = $derived(compareElectrons(r, timesLose, timesGain));
  const stepIndex = $derived(STEPS.findIndex((s) => s.stages.includes(stage)));
  const finished = $derived(stage === 'finish' && balanced);
  const shown = $derived.by(() => {
    if (finished) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: 'Hoàn thành: số nguyên tử mỗi nguyên tố ở hai vế bằng nhau, phương trình đã lập xong.',
      };
    }
    return note ?? { tone: /** @type {const} */ ('info'), text: INTROS[stage] };
  });

  function restart() {
    stage = 'mark';
    foundLose = false;
    foundGain = false;
    role = 'reducer';
    lose = 1;
    gain = 1;
    timesLose = 1;
    timesGain = 1;
    balanced = false;
    note = null;
  }

  /** @param {string} el @param {number} on @param {'left' | 'right'} side */
  function tap(el, on, side) {
    const result = tapResult(r, el, on, side);
    if (result.change === 'lose') foundLose = true;
    if (result.change === 'gain') foundGain = true;
    if (foundLose && foundGain) {
      stage = 'roles';
      note = { tone: 'ok', text: `${result.text} ${INTROS.roles}` };
    } else {
      note = { tone: result.change ? 'ok' : 'warn', text: result.text };
    }
  }

  /** @param {string} formula */
  function pickRole(formula) {
    const result = roleResult(r, role, formula);
    if (!result.ok) {
      note = { tone: 'warn', text: result.text };
    } else if (role === 'reducer') {
      role = 'oxidant';
      note = { tone: 'ok', text: `${result.text} Chất nào là chất oxi hoá?` };
    } else {
      stage = 'electrons';
      note = { tone: 'ok', text: `${result.text} ${INTROS.electrons}` };
    }
  }

  function checkElectrons() {
    const result = electronCheck(r, lose, gain);
    if (result.ok) {
      stage = 'multipliers';
      note = { tone: 'ok', text: `${result.text} ${INTROS.multipliers}` };
    } else {
      note = { tone: 'warn', text: result.text };
    }
  }

  function placeMultipliers() {
    stage = 'finish';
    note = null;
    balanced = seedIsBalanced(r);
  }

  /** @param {string} el @param {number | undefined} on @param {'left' | 'right'} side */
  function tone(el, on, side) {
    const change = changeOf(r, el, on ?? 0, side);
    if (change === 'lose' && foundLose) return 'bg-amber-100 text-amber-900 ring-2 ring-amber-500';
    if (change === 'gain' && foundGain) return 'bg-sky-100 text-sky-900 ring-2 ring-sky-500';
    return 'text-slate-800';
  }
</script>

{#snippet atoms(/** @type {Species} */ species, /** @type {'left' | 'right'} */ side)}
  <span class="inline-flex items-end whitespace-nowrap">
    {#each atomTokens(species) as t, i (i)}
      {#if t.el}
        {@const face = `flex min-h-11 min-w-7 flex-col items-center justify-end rounded-md px-0.5 ${tone(t.el, t.on, side)}`}
        {#if stage === 'mark'}
          <button
            type="button"
            class="{face} hover:bg-slate-100 {focusRing}"
            aria-label="{t.el}, số oxi hoá {onText(t.on ?? 0)}, {side === 'left'
              ? 'vế trái'
              : 'vế phải'}"
            onclick={() => tap(t.el ?? '', t.on ?? 0, side)}
          >
            <span class="text-xs font-bold tabular-nums">{onText(t.on ?? 0)}</span>
            <span class="text-lg font-semibold">{t.text}<sub>{t.sub}</sub></span>
          </button>
        {:else}
          <span class={face}>
            <span class="text-xs font-bold tabular-nums">{onText(t.on ?? 0)}</span>
            <span class="text-lg font-semibold">{t.text}<sub>{t.sub}</sub></span>
          </span>
        {/if}
      {:else}
        <span class="pb-1 text-lg font-semibold text-slate-800">{t.text}<sub>{t.sub}</sub></span>
      {/if}
    {/each}
  </span>
{/snippet}

{#snippet side(/** @type {Species[]} */ list, /** @type {'left' | 'right'} */ where)}
  {#each list as species, i (i)}
    {#if i > 0}<span class="pb-1 text-slate-500">+</span>{/if}
    {@render atoms(species, where)}
  {/each}
{/snippet}

<div class="space-y-4">
  <SegmentedControl label="Chọn phản ứng" {options} bind:value={id} onchange={restart} />

  <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
    <div
      class="flex flex-wrap items-end justify-center gap-x-2 gap-y-2"
      role="group"
      aria-label="Sơ đồ phản ứng với số oxi hoá trên từng nguyên tử"
    >
      {@render side(r.left, 'left')}
      <span class="px-1 pb-1 text-xl text-slate-500" aria-hidden="true">→</span>
      {@render side(r.right, 'right')}
    </div>
    {#if r.condition}
      <p class="mt-2 text-center text-xs text-slate-600">Điều kiện: {r.condition}.</p>
    {/if}
    {#if foundLose || foundGain}
      <ul class="mt-2 flex flex-wrap justify-center gap-2 text-xs font-semibold">
        {#if foundLose}
          <li class="rounded-full bg-amber-100 px-3 py-1 text-amber-900">
            {r.lose.el}: số oxi hoá tăng, nhường electron
          </li>
        {/if}
        {#if foundGain}
          <li class="rounded-full bg-sky-100 px-3 py-1 text-sky-900">
            {r.gain.el}: số oxi hoá giảm, nhận electron
          </li>
        {/if}
      </ul>
    {/if}
  </div>

  <ol class="grid gap-1 text-sm sm:grid-cols-2" aria-label="Bốn bước lập phương trình">
    {#each STEPS as step, i (i)}
      <li
        class="rounded-lg px-3 py-2 {i === stepIndex
          ? 'bg-indigo-100 font-semibold text-indigo-950'
          : i < stepIndex
            ? 'bg-emerald-50 text-emerald-800'
            : 'bg-slate-100 text-slate-600'}"
        aria-current={i === stepIndex ? 'step' : undefined}
      >
        Bước {i + 1}. {step.title}
      </li>
    {/each}
  </ol>

  {#if stage === 'roles'}
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm font-semibold text-slate-700">
        {role === 'reducer' ? 'Chất khử là:' : 'Chất oxi hoá là:'}
      </span>
      {#each r.left as s (s.formula)}
        <button type="button" class={button.secondary} onclick={() => pickRole(s.formula)}>
          <ChemFormula formula={s.formula} />
        </button>
      {/each}
    </div>
  {:else if stage === 'electrons'}
    <div class="space-y-3 rounded-xl bg-slate-50 p-3">
      <div>
        <p class="text-sm font-semibold text-amber-900">Quá trình oxi hoá</p>
        <p class="py-1"><LiveRichText text={`$${halfTex(r.lose, 'lose')}$`} /></p>
        <Stepper label="Số electron nhường" bind:value={lose} min={1} max={12} />
      </div>
      <div>
        <p class="text-sm font-semibold text-sky-900">Quá trình khử</p>
        <p class="py-1"><LiveRichText text={`$${halfTex(r.gain, 'gain')}$`} /></p>
        <Stepper label="Số electron nhận" bind:value={gain} min={1} max={12} />
      </div>
      <button type="button" class={button.primary} onclick={checkElectrons}>Kiểm tra</button>
    </div>
  {:else if stage === 'multipliers' || stage === 'finish'}
    <ul class="space-y-1 rounded-xl bg-slate-50 p-3">
      <li>
        <LiveRichText text={`$${halfTex(r.lose, 'lose', halfElectrons(r.lose))}$`} />
        <span class="ml-2 font-bold text-amber-900">× {timesLose}</span>
      </li>
      <li>
        <LiveRichText text={`$${halfTex(r.gain, 'gain', halfElectrons(r.gain))}$`} />
        <span class="ml-2 font-bold text-sky-900">× {timesGain}</span>
      </li>
    </ul>
    {#if stage === 'multipliers'}
      <div class="flex flex-wrap gap-4">
        <Stepper label="Hệ số quá trình oxi hoá" bind:value={timesLose} min={1} max={12} />
        <Stepper label="Hệ số quá trình khử" bind:value={timesGain} min={1} max={12} />
      </div>
      <p
        class="rounded-xl px-4 py-3 text-sm font-semibold tabular-nums {compared.equal
          ? 'bg-emerald-50 text-emerald-800'
          : 'bg-slate-100 text-slate-700'}"
        aria-live="polite"
      >
        Nhường {timesLose} × {halfElectrons(r.lose)} = {compared.given} electron; nhận {timesGain} ×
        {halfElectrons(r.gain)} = {compared.taken} electron.
        {#if compared.equal && compared.lowest}
          Bằng nhau, với hệ số nhỏ nhất.
        {:else if compared.equal}
          Đã bằng nhau, nhưng còn rút gọn được cả hai hệ số.
        {:else}
          Chưa bằng nhau.
        {/if}
      </p>
      {#if compared.equal && compared.lowest}
        <button type="button" class={button.primary} onclick={placeMultipliers}
          >Đặt hệ số vào sơ đồ</button
        >
      {/if}
    {:else if !finished}
      {#key r.id}
        <EquationBalancer
          equation={r.seed}
          solver={false}
          label="Cân bằng các nguyên tố còn lại"
          onbalanced={() => (balanced = true)}
        />
      {/key}
    {/if}
  {/if}

  {#if finished}
    <p class="rounded-xl bg-emerald-50 p-3 text-center text-lg">
      <EquationLine text={bookText(r)} />
    </p>
  {/if}

  <FeedbackNote tone={shown.tone} text={shown.text} />

  <button type="button" class={button.quiet} onclick={restart}>Làm lại phản ứng này</button>
</div>
