<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { POLYOLS, dissolvesCopperHydroxide } from './engine.js';

  const CLEAR = '#f1f5f9';
  const PALE_BLUE = '#7dd3fc';
  const DEEP_BLUE = '#1d4ed8';
  const OPTIONS = POLYOLS.map((p) => ({ value: p.id, label: p.name }));

  let polyolId = $state(POLYOLS[0].id);
  let added = $state(false);
  let drip = $state(0);
  let results = $state(/** @type {Record<string, boolean>} */ ({}));

  const polyol = $derived(POLYOLS.find((p) => p.id === polyolId) ?? POLYOLS[0]);
  const dissolves = $derived(dissolvesCopperHydroxide(polyol));

  function pour() {
    added = true;
    drip += 1;
    results = { ...results, [polyol.id]: dissolves };
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!added) {
        return {
          tone: 'info',
          text: 'Ống nghiệm chứa kết tủa $\\mathrm{Cu(OH)_2}$ màu xanh nhạt (tạo từ $\\mathrm{CuSO_4}$ và NaOH). Chọn một alcohol rồi bấm "Nhỏ alcohol vào".',
        };
      }
      const where = polyol.oh.join(', ');
      return dissolves
        ? {
            tone: 'ok',
            text: `Kết tủa tan, dung dịch chuyển sang màu xanh lam đậm. ${polyol.name} có nhóm OH ở các carbon ${where}, trong đó có hai nhóm OH liền kề.`,
          }
        : {
            tone: 'warn',
            text: `Kết tủa không tan. ${polyol.name} có nhóm OH ở carbon ${where}: không có hai nhóm OH nào ở hai carbon liền kề.`,
          };
    },
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Alcohol nhỏ vào"
    options={OPTIONS}
    bind:value={polyolId}
    onchange={() => (added = false)}
  />

  <div class="flex items-center gap-4">
    <div class="w-20 shrink-0">
      <TestTube
        liquid={added && dissolves ? DEEP_BLUE : CLEAR}
        precipitate={added && dissolves ? null : PALE_BLUE}
        amount={added && dissolves ? 0 : 0.5}
        {drip}
        label={added
          ? `Ống nghiệm sau khi nhỏ ${polyol.name}: ${dissolves ? 'dung dịch xanh lam, không còn kết tủa' : 'vẫn còn kết tủa xanh nhạt'}`
          : 'Ống nghiệm chứa kết tủa đồng(II) hydroxide màu xanh nhạt'}
      />
    </div>
    <div class="space-y-2">
      <p class="text-base"><ChemFormula formula={polyol.text} /></p>
      <button type="button" class={button.primary} onclick={pour}>Nhỏ alcohol vào</button>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if added && polyol.equation}
    <p class="text-lg"><EquationLine text={polyol.equation} /></p>
  {/if}

  {#if Object.keys(results).length > 0}
    <ul class="space-y-1 text-sm" aria-label="Kết quả đã thử">
      {#each POLYOLS.filter((p) => p.id in results) as p (p.id)}
        <li>
          {p.name}:
          <span class="font-semibold {results[p.id] ? 'text-blue-700' : 'text-slate-600'}"
            >{results[p.id] ? 'tan, dung dịch xanh lam' : 'không tan'}</span
          >
        </li>
      {/each}
    </ul>
  {/if}
</div>
