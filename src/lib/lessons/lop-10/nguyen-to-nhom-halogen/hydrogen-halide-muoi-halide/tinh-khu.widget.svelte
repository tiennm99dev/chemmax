<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { MINUS } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { REDUCTIONS, SULFUR_STEPS } from './engine.js';

  const SALTS = REDUCTIONS.map((r) => ({ value: r.salt, label: r.salt }));

  let salt = $state('NaCl');
  /** @type {number | null} */
  let guess = $state(null);
  /** @type {string[]} */
  let seen = $state([]);

  const reaction = $derived(REDUCTIONS.find((r) => r.salt === salt) ?? REDUCTIONS[0]);
  const shown = $derived(guess !== null);
  const right = $derived(guess === reaction.sulfur);

  /** @param {number} sulfur */
  const oxText = (sulfur) => (sulfur < 0 ? `${MINUS}${-sulfur}` : `+${sulfur}`);

  /** @param {number} sulfur */
  function choose(sulfur) {
    if (shown) return;
    guess = sulfur;
    if (!seen.includes(salt)) seen = [...seen, salt];
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Muối rắn cho tác dụng với H₂SO₄ đặc"
    options={SALTS}
    value={salt}
    onchange={(choice) => {
      salt = String(choice);
      guess = null;
    }}
  />
  <p class="text-sm font-semibold text-slate-700">
    Dự đoán: nguyên tố S trong sản phẩm có số oxi hoá bao nhiêu?
  </p>
  <ul class="space-y-2">
    {#each SULFUR_STEPS as step (step.sulfur)}
      {@const isResult = shown && step.sulfur === reaction.sulfur}
      <li>
        <button
          type="button"
          class="{isResult
            ? button.primary
            : button.quiet} w-full !justify-start text-left {shown &&
          guess === step.sulfur &&
          !isResult
            ? '!border-amber-500 !bg-amber-50'
            : ''}"
          aria-pressed={guess === step.sulfur}
          onclick={() => choose(step.sulfur)}
        >
          <span class="w-8 font-bold tabular-nums">{oxText(step.sulfur)}</span>
          <ChemFormula formula={step.formula} />
          <span class="text-sm font-normal"><LiveRichText text={step.label} /></span>
        </button>
      </li>
    {/each}
  </ul>
  {#if shown}
    <FeedbackNote
      tone={right ? 'ok' : 'warn'}
      text="{right ? 'Dự đoán đúng.' : 'Chưa đúng.'} {reaction.text}"
    />
    <p class="rounded-xl bg-slate-50 p-3 text-center">
      <EquationLine text={reaction.equation} />
    </p>
  {/if}
  <p class="text-sm text-slate-700" aria-live="polite">
    {#if seen.length === REDUCTIONS.length}
      Ion càng dễ nhường electron thì càng khử được S xuống thấp: tính khử tăng dần theo thứ tự Cl⁻
      &lt; Br⁻ &lt; I⁻.
    {:else}
      Đã thử {seen.length}/{REDUCTIONS.length} muối.
    {/if}
  </p>
</div>
