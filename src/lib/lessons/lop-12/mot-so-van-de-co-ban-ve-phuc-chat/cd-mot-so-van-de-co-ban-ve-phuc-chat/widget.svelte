<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { CENTRES, LIGANDS } from '../_shared/complex-data.js';
  import { MAX_CN, TARGETS, describe, judge, targetName } from './engine.js';

  const MODES = [
    { value: 'dat-ten', label: 'Tự đặt tên' },
    { value: 'doc-ten', label: 'Dựng theo tên' },
  ];

  /** @returns {Record<string, number>} */
  const empty = () => Object.fromEntries(LIGANDS.map((l) => [l.id, 0]));

  let mode = $state('dat-ten');
  let centreId = $state('Cu2');
  let counts = $state(/** @type {Record<string, number>} */ ({ ...empty(), NH3: 4 }));

  let round = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let right = $state(0);
  let tries = $state(0);
  const target = $derived(TARGETS[round % TARGETS.length]);

  const report = $derived(describe(centreId, counts));

  function changed() {
    verdict = null;
  }

  /** @param {string | number} next */
  function switchMode(next) {
    mode = String(next);
    verdict = null;
    if (mode === 'doc-ten') counts = empty();
  }

  function check() {
    verdict = judge(target, centreId, counts);
    tries += 1;
    if (verdict.ok) right += 1;
  }

  function next() {
    round += 1;
    verdict = null;
    counts = empty();
  }

  /** @param {number} q */
  const ionLabel = (q) => (q === 0 ? '' : 'ion ');

  const note = $derived.by(() => {
    if (mode === 'doc-ten' && verdict)
      return {
        tone: verdict.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
        text: verdict.text,
      };
    if (mode === 'doc-ten')
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Đọc tên từ trái sang phải: tiền tố cho số phối tử, tên phối tử, rồi kim loại và số oxi hoá. Chọn nguyên tử trung tâm, đặt số phối tử rồi bấm Kiểm tra.',
      };
    return {
      tone: report.ok ? /** @type {const} */ ('info') : /** @type {const} */ ('warn'),
      text: report.text,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={switchMode} />

  {#if mode === 'doc-ten'}
    <div
      class="flex flex-wrap items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/50 p-3"
    >
      <span class="text-sm text-slate-600">Hãy dựng phức chất:</span>
      <span class="font-mono text-base font-bold break-all text-indigo-900"
        >{targetName(target)}</span
      >
      <span class="ml-auto text-sm text-slate-600">Đúng {right}/{tries} lần kiểm tra</span>
    </div>
  {/if}

  <div role="group" aria-label="Nguyên tử trung tâm" class="space-y-1">
    <p class="text-sm font-semibold text-slate-700">Nguyên tử trung tâm</p>
    <div class="flex flex-wrap gap-2">
      {#each CENTRES as ce (ce.id)}
        <button
          type="button"
          class={centreId === ce.id ? button.primary : button.quiet}
          aria-pressed={centreId === ce.id}
          onclick={() => {
            centreId = ce.id;
            changed();
          }}><ChemFormula formula={`${ce.symbol}^${ce.charge === 1 ? '' : ce.charge}+`} /></button
        >
      {/each}
    </div>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-semibold text-slate-700">
      Số phối tử mỗi loại (số phối trí tối đa {MAX_CN})
    </p>
    <div class="grid gap-2 sm:grid-cols-2">
      {#each LIGANDS as l (l.id)}
        <div
          class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-1"
        >
          <span class="text-sm text-slate-700">
            <ChemFormula formula={l.ion} class="font-semibold" />
            <span class="text-slate-500">· {l.name} · {l.dentate === 1 ? '1 càng' : '2 càng'}</span>
          </span>
          <Stepper
            label="số {l.name}"
            bind:value={counts[l.id]}
            min={0}
            max={MAX_CN / l.dentate}
            onchange={changed}
          />
        </div>
      {/each}
    </div>
  </div>

  {#if report.naming}
    <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3" aria-live="polite">
      <p class="text-base">
        Công thức: <ChemFormula formula={report.naming.formula} class="font-bold" />
        <span class="text-slate-500">({report.naming.kind})</span>
      </p>
      {#if report.ok && mode === 'dat-ten'}
        <p class="text-base">
          Tên: {ionLabel(report.naming.charge)}<span
            class="font-mono font-bold break-all text-indigo-800">{report.naming.name}</span
          >
        </p>
        <ol class="list-decimal space-y-1 pl-5 text-sm text-slate-700">
          {#each report.steps ?? [] as s, i (i)}
            <li><LiveRichText text={s} /></li>
          {/each}
        </ol>
      {/if}
    </div>
  {/if}

  {#if mode === 'doc-ten'}
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
      {#if verdict?.ok}
        <button type="button" class={button.secondary} onclick={next}>Tên khác</button>
      {/if}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
