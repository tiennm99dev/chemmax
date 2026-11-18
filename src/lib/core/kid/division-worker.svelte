<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { tick, untrack } from 'svelte';
  import { fmt } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import DigitPad from './digit-pad.svelte';
  import DivisionSheet from './division-sheet.svelte';
  import KidNote from './kid-note.svelte';
  import {
    quotientText,
    roundLines,
    sheetRows,
    stageMessage,
    stepsOf,
    wrongMessage,
  } from './division-steps.js';

  /**
   * The learner divides in columns, from the left: taps each quotient digit
   * and what is left, and brings the next digit down with a button. The sheet
   * grows as the book prints it, each finished round is read by its place
   * ("13 chục : 4 = 3 chục, còn 1 chục"), a wrong number gets a nudge and a
   * second one the working.
   *
   * - `kinds`: the cases to choose from, each with its first task.
   * - `draw(kind, previous)`: a new task of a kind, not the previous one.
   * - `compact`: narrower columns, for a dividend of five digits or more.
   * @type {{
   *   kinds: Array<{ value: string, label: string, first: import('./division-steps.js').Task }>;
   *   draw: (kind: any, previous: import('./division-steps.js').Task) => import('./division-steps.js').Task;
   *   compact?: boolean;
   *   switchLabel?: string;
   *   nextLabel?: string;
   * }}
   */
  let {
    kinds,
    draw,
    compact = false,
    switchLabel = 'Chọn loại phép chia',
    nextLabel = 'Phép chia khác',
  } = $props();

  let kind = $state(untrack(() => kinds[0].value));
  let task = $state(untrack(() => kinds[0].first));
  let stage = $state(0);
  let tries = $state(0);
  let slip = $state('');
  /** @type {HTMLDivElement | undefined} */
  let controls = $state();
  /** @type {HTMLButtonElement | undefined} */
  let nextButton = $state();

  const steps = $derived(stepsOf(task));
  const done = $derived(stage === steps.length);
  const step = $derived(done ? null : steps[stage]);
  const quotient = $derived(quotientText(task, stage));
  const lines = $derived(roundLines(task, stage));
  const message = $derived(slip || stageMessage(task, stage));
  const tone = $derived(done ? 'ok' : slip ? 'warn' : 'info');

  /** @param {import('./division-steps.js').Task} next */
  function start(next) {
    task = next;
    stage = 0;
    tries = 0;
    slip = '';
  }

  /** @param {string | number} next */
  function chooseKind(next) {
    const found = kinds.find((k) => k.value === next);
    if (found) start(found.first);
  }

  /** The control just pressed may be gone, so focus moves to what replaced it. */
  async function advance() {
    const before = step?.kind === 'down';
    stage += 1;
    tries = 0;
    slip = '';
    const after = step?.kind === 'down';
    if (done || before !== after) {
      await tick();
      (done ? nextButton : controls?.querySelector('button'))?.focus();
    }
  }

  /** @param {number} digit */
  function write(digit) {
    if (!step) return;
    if (digit !== step.answer) {
      tries += 1;
      slip = wrongMessage(task, stage, digit, tries);
      return;
    }
    advance();
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label={switchLabel}
    hideLabel
    bind:value={kind}
    options={kinds.map(({ value, label }) => ({ value, label }))}
    onchange={chooseKind}
  />

  <div class="flex justify-center">
    <DivisionSheet
      rows={sheetRows(task, stage)}
      divisor={task.d}
      {quotient}
      {compact}
      label="Đặt tính {fmt(task.n)} chia {task.d}. Thương đã viết: {quotient || 'chưa có'}."
    />
  </div>

  {#if lines.length > 0}
    <ul class="space-y-2 text-lg font-semibold tabular-nums">
      {#each lines as line, i (i)}
        <li class="rounded-xl bg-indigo-50 px-3 py-2 text-indigo-950">{line}</li>
      {/each}
    </ul>
  {/if}

  <KidNote {tone} text={message} />

  <div bind:this={controls}>
    {#if step?.kind === 'down'}
      <button type="button" class="min-h-14 w-full text-xl {button.primary}" onclick={advance}
        >Hạ {step.answer} xuống</button
      >
    {:else if step}
      <DigitPad label="Chọn chữ số" onpick={write} />
    {/if}
  </div>

  <button
    type="button"
    class="min-h-12 text-lg {done ? button.primary : button.secondary}"
    bind:this={nextButton}
    onclick={() => start(draw(kind, task))}>{nextLabel}</button
  >
</div>
