<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { richText } from '#lib/core/tex-text.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { SCENARIOS, scenario, tubeAfter } from './engine.js';

  const options = SCENARIOS.map((s) => ({ value: s.id, label: s.name }));

  let id = $state('cu-nh3');
  let drops = $state(0);

  const s = $derived(scenario(id));
  const tube = $derived(tubeAfter(s, drops));
  /** Observations so far, one per change of what is seen. */
  const log = $derived.by(() => {
    /** @type {string[]} */
    const out = [];
    for (let d = 0; d <= drops; d++) {
      const seen = tubeAfter(s, d).seen;
      if (out.at(-1) !== seen) out.push(seen);
    }
    return out;
  });

  /** @param {string | number} next */
  function choose(next) {
    id = String(next);
    drops = 0;
  }

  function drip() {
    if (drops < s.drops + 2) drops += 1;
  }

  const note = $derived(
    drops === 0
      ? `Bấm "Nhỏ 1 giọt" để thêm ${s.reagentName} vào ống nghiệm và quan sát.`
      : tube.finished
        ? `${tube.seen} Phối tử mới tạo phức chất bền hơn nên đã thay thế phối tử cũ. Nhỏ thêm cũng không thay đổi nữa.`
        : `Đã nhỏ ${drops} giọt. ${tube.seen}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Thí nghiệm" {options} bind:value={id} onchange={choose} />

  <div class="grid gap-4 sm:grid-cols-[8rem_1fr] sm:items-start">
    <div class="flex flex-col items-center gap-1">
      <TestTube
        liquid={tube.liquid}
        precipitate={tube.precipitate}
        amount={tube.amount}
        drip={drops}
        label={`Ống nghiệm: ${richText(tube.seen)}`}
      />
      <span class="text-xs text-slate-500">
        <ChemFormula formula={s.start} /> + {drops} giọt <ChemFormula formula={s.reagent} />
      </span>
    </div>

    <div class="space-y-3 text-sm">
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={drip} disabled={drops >= s.drops + 2}>
          Nhỏ 1 giọt <ChemFormula formula={s.reagent} />
        </button>
        <button
          type="button"
          class={button.quiet}
          onclick={() => (drops = 0)}
          disabled={drops === 0}
        >
          Làm lại
        </button>
      </div>
      <p>Tiểu phân chứa kim loại: <LiveRichText text={tube.species} /></p>
      {#if tube.equation}
        <div class="overflow-x-auto rounded-lg bg-slate-50 p-2">
          <EquationLine text={tube.equation} />
        </div>
      {/if}
      <ol
        class="list-decimal space-y-1 pl-5 text-slate-700"
        aria-label="Các hiện tượng đã quan sát"
      >
        {#each log as line, i (i)}
          <li><LiveRichText text={line} /></li>
        {/each}
      </ol>
    </div>
  </div>

  <FeedbackNote tone={tube.finished ? 'ok' : 'info'} text={note} />
</div>
