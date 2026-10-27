<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { intText } from '#lib/core/number-format.js';
  import MoleculeViewer from '#lib/domain/molecule-viewer.svelte';
  import ChemText from '../_shared/chem-text.svelte';
  import { chemUnicode } from '../_shared/chem-text.js';
  import {
    ALKANES,
    alkaneFormula,
    alkaneMolecule,
    equationText,
    isBalanced,
    isSimplest,
    tally,
  } from './engine.js';

  /** @typedef {import('./engine.js').Coefficients} Coefficients */

  let n = $state(3);
  let rotation = $state(0);
  let a = $state(1);
  let o2 = $state(1);
  let co2 = $state(1);
  let h2o = $state(1);
  let burned = $state(false);

  const info = $derived(ALKANES[n - 1]);
  const molecule = $derived(alkaneMolecule(n));
  const formula = $derived(alkaneFormula(n));
  /** @type {Coefficients} */
  const k = $derived([a, o2, co2, h2o]);
  const counts = $derived(tally(n, k));
  const balanced = $derived(isBalanced(n, k));
  const simplest = $derived(balanced && isSimplest(k));

  const OPTIONS = ALKANES.map((x) => ({ value: x.n, label: x.name }));

  function reset() {
    a = 1;
    o2 = 1;
    co2 = 1;
    h2o = 1;
    burned = false;
    rotation = 0;
  }

  function touched() {
    burned = false;
  }

  const ROWS = /** @type {const} */ ([
    ['C', 'carbon'],
    ['H', 'hydrogen'],
    ['O', 'oxygen'],
  ]);

  const tone = $derived(simplest ? 'ok' : balanced ? 'info' : /** @type {const} */ ('warn'));
  const note = $derived.by(() => {
    if (burned)
      return `${info.name} cháy với ngọn lửa xanh nhạt, toả nhiều nhiệt. Sản phẩm là khí carbon dioxide (làm vẩn đục nước vôi trong) và hơi nước (đọng thành giọt trên thành cốc úp ngược).`;
    if (simplest) return 'Phương trình đã cân bằng với hệ số nhỏ nhất. Bấm “Đốt cháy” để quan sát.';
    if (balanced)
      return 'Số nguyên tử mỗi nguyên tố đã bằng nhau, nhưng các hệ số còn chia hết cho một số chung. Hãy rút gọn về hệ số nhỏ nhất.';
    const off = ROWS.filter(([el]) => counts[el][0] !== counts[el][1]).map(([el]) => el);
    return `Chưa cân bằng: số nguyên tử ${off.join(', ')} ở hai vế còn khác nhau. Gợi ý: cân bằng C trước, rồi H, cuối cùng là O.`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn alkane" options={OPTIONS} bind:value={n} onchange={reset} />

  <div class="grid items-start gap-4 md:grid-cols-2">
    <div class="space-y-2">
      <MoleculeViewer {molecule} bind:rotation size={340} />
      <p class="text-center text-sm text-slate-700">
        Công thức cấu tạo thu gọn: <ChemText text={info.condensed} class="font-semibold" /> · nhiệt độ
        sôi khoảng {intText(info.boils)} °C, ở điều kiện thường là chất khí.
      </p>
    </div>

    <div class="space-y-3">
      <p class="text-sm font-semibold text-slate-700">
        Cân bằng phản ứng cháy của {info.name.toLowerCase()} ({chemUnicode(`${formula}`)})
      </p>
      <div class="grid grid-cols-2 gap-2">
        <Stepper label={chemUnicode(formula)} bind:value={a} min={1} max={4} onchange={touched} />
        <Stepper label="O₂" bind:value={o2} min={1} max={30} onchange={touched} />
        <Stepper label="CO₂" bind:value={co2} min={1} max={20} onchange={touched} />
        <Stepper label="H₂O" bind:value={h2o} min={1} max={24} onchange={touched} />
      </div>
      <p class="rounded-xl bg-slate-50 p-3 text-lg font-medium">
        <ChemText text={equationText(n, k)} />
      </p>
      <table class="w-full border-collapse text-center text-sm">
        <caption class="sr-only">Số nguyên tử mỗi nguyên tố ở hai vế</caption>
        <thead>
          <tr>
            <th scope="col" class="border border-slate-200 bg-slate-50 p-1">Nguyên tố</th>
            <th scope="col" class="border border-slate-200 bg-slate-50 p-1">Vế trái</th>
            <th scope="col" class="border border-slate-200 bg-slate-50 p-1">Vế phải</th>
          </tr>
        </thead>
        <tbody>
          {#each ROWS as [el, name] (el)}
            {@const [l, r] = counts[el]}
            <tr class={l === r ? 'text-emerald-700' : 'text-amber-700'}>
              <th scope="row" class="border border-slate-200 p-1">{el} ({name})</th>
              <td class="border border-slate-200 p-1 tabular-nums">{l}</td>
              <td class="border border-slate-200 p-1 tabular-nums"
                >{r} <span class="sr-only">{l === r ? 'bằng nhau' : 'chưa bằng'}</span><span
                  aria-hidden="true">{l === r ? '✓' : '✗'}</span
                ></td
              >
            </tr>
          {/each}
        </tbody>
      </table>
      <div class="flex flex-wrap items-center gap-3">
        <button
          type="button"
          class={button.primary}
          disabled={!simplest || burned}
          onclick={() => (burned = true)}>Đốt cháy</button
        >
        <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
        {#if burned}
          <svg viewBox="0 0 60 70" class="h-16 w-14" role="img" aria-label="Ngọn lửa xanh nhạt">
            <path
              d="M30 4 C14 28 10 46 30 66 C50 46 46 28 30 4 Z"
              fill="#93c5fd"
              stroke="#3b82f6"
              stroke-width="2"
              class="flame"
            />
            <path d="M30 30 C24 42 24 52 30 60 C36 52 36 42 30 30 Z" fill="#fde68a" class="flame" />
          </svg>
        {/if}
      </div>
    </div>
  </div>

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .flame {
    transform-origin: 30px 66px;
    animation: flicker 0.5s ease-in-out infinite alternate;
  }
  @keyframes flicker {
    from {
      transform: scaleY(0.92);
    }
    to {
      transform: scaleY(1.08);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .flame {
      animation: none;
    }
  }
</style>
