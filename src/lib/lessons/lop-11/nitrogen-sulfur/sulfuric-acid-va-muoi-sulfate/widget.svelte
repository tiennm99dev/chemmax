<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { STAGES, acidTonnes } from './engine.js';

  /** @typedef {import('./engine.js').ContactOption} ContactOption */
  /** @typedef {import('./engine.js').Source} Source */

  /** The right option picked for each finished stage, in order. */
  let picks = $state.raw(/** @type {ContactOption[]} */ ([]));
  let wrong = $state.raw(/** @type {ContactOption | null} */ (null));
  let tonnes = $state(1);
  let yieldPercent = $state(90);

  const done = $derived(picks.length === STAGES.length);
  const current = $derived(STAGES[Math.min(picks.length, STAGES.length - 1)]);
  const source = $derived(/** @type {Source} */ (picks[0]?.id ?? 's'));
  const acid = $derived(acidTonnes(source, tonnes, yieldPercent));
  const last = $derived(picks[picks.length - 1]);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (wrong) return { tone: 'warn', text: `Chưa được: ${wrong.why}` };
      if (last) return { tone: 'ok', text: last.why };
      return { tone: 'info', text: 'Chọn nguyên liệu để bắt đầu dây chuyền.' };
    },
  );

  /** @param {ContactOption} option */
  function choose(option) {
    if (option.right) {
      picks = [...picks, option];
      wrong = null;
    } else {
      wrong = option;
    }
  }

  function reset() {
    picks = [];
    wrong = null;
  }
</script>

<div class="space-y-4">
  <ol class="grid gap-2 md:grid-cols-3">
    {#each STAGES as s, i (s.id)}
      <li
        class="rounded-xl border p-3 text-center {i < picks.length
          ? 'border-emerald-500 bg-emerald-50'
          : i === picks.length
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-slate-200 bg-slate-50'}"
      >
        <div class="font-bold">{s.plant}</div>
        <div class="text-sm text-slate-600">
          {#if i < picks.length}
            Tạo ra <ChemFormula formula={s.made} />
          {:else}
            Chưa chạy
          {/if}
        </div>
      </li>
    {/each}
  </ol>

  {#if done}
    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-3">
        <SliderField
          label="Khối lượng nguyên liệu"
          bind:value={tonnes}
          min={1}
          max={10}
          step={1}
          unit="tấn"
        />
        <SliderField
          label="Hiệu suất toàn quá trình"
          bind:value={yieldPercent}
          min={50}
          max={100}
          step={5}
          unit="%"
        />
      </div>
      <p class="rounded-lg bg-slate-50 p-3">
        Từ {formatNumber(tonnes)} tấn <ChemFormula formula={picks[0].formula} /> với hiệu suất {formatNumber(
          yieldPercent,
        )} % thu được
        <span class="font-bold text-indigo-700"
          >{formatFixed(acid, 2)} tấn <ChemFormula formula="H2SO4" /></span
        >. Mỗi nguyên tử S trong nguyên liệu trở thành một phân tử acid.
      </p>
    </div>
  {:else}
    <div class="space-y-2">
      <h3 class="font-bold">{current.title}</h3>
      <p class="text-sm"><LiveRichText text={current.question} /></p>
      <div class="flex flex-wrap gap-2">
        {#each current.options as o (o.id)}
          <button type="button" class={button.secondary} onclick={() => choose(o)}>
            <span>{o.name}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  {#if last?.equation}
    <p class="overflow-x-auto rounded-lg bg-slate-50 p-3 text-center text-lg">
      <EquationLine text={last.equation} />
    </p>
  {/if}
  <FeedbackNote tone={note.tone} text={note.text} />
  <button type="button" class={button.quiet} onclick={reset}>Chạy lại từ đầu</button>
</div>
