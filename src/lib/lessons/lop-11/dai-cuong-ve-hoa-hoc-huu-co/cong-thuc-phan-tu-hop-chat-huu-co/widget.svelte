<script>
  import { readNumber } from '#lib/core/decimal.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import {
    SAMPLES,
    formulaText,
    molecularFrom,
    molecularIon,
    oxygenLeft,
    ratioRows,
    simplestCounts,
  } from './engine.js';

  const BOX = { left: 34, right: 350, top: 14, bottom: 150 };
  const OPTIONS = [
    ...SAMPLES.map((s) => ({ value: s.id, label: s.name })),
    { value: 'tu-nhap', label: 'Tự nhập' },
  ];

  let mode = $state(SAMPLES[0].id);
  let pickedMz = $state(/** @type {number | null} */ (null));
  let cText = $state('60');
  let hText = $state('13,33');
  let nText = $state('0');
  let massText = $state('60');

  const sample = $derived(SAMPLES.find((s) => s.id === mode) ?? null);
  const custom = $derived(sample === null);

  const typed = $derived.by(() => {
    const c = readNumber(cText);
    const h = readNumber(hText);
    const n = readNumber(nText);
    if (c === null || h === null || n === null) return null;
    const o = oxygenLeft(c, h, n);
    return o === null ? null : { C: c, H: h, N: n, O: o };
  });

  const percent = $derived(sample ? sample.percent : typed);
  const rows = $derived(percent ? ratioRows(percent) : []);
  const simple = $derived(percent ? simplestCounts(percent) : null);
  const typedMass = $derived(readNumber(massText));
  const mass = $derived(custom ? typedMass : pickedMz);
  const result = $derived(simple && mass ? molecularFrom(simple.counts, mass) : null);
  const ion = $derived(sample ? molecularIon(sample.peaks) : null);

  const axisMax = $derived(sample ? Math.ceil((molecularIon(sample.peaks) + 10) / 20) * 20 : 100);
  /** @param {number} mz */
  const sx = (mz) => BOX.left + (mz / axisMax) * (BOX.right - BOX.left);
  /** @param {number} h */
  const sy = (h) => BOX.bottom - (h / 100) * (BOX.bottom - BOX.top);
  const ticks = $derived(Array.from({ length: axisMax / 20 + 1 }, (_, i) => i * 20));

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (custom && !percent) {
        return {
          tone: 'warn',
          text: 'Hãy nhập các số hợp lệ, tổng phần trăm C, H, N không được vượt quá $100$.',
        };
      }
      if (!simple) {
        return {
          tone: 'warn',
          text: 'Tỉ lệ này không đưa được về các số nguyên nhỏ. Hãy kiểm tra lại số liệu phần trăm.',
        };
      }
      if (custom) {
        if (!mass) return { tone: 'info', text: 'Nhập phân tử khối để tìm n.' };
        if (result?.formula) {
          return {
            tone: 'ok',
            text: `n = ${result.n}, vậy công thức phân tử có ${result.n} lần công thức đơn giản nhất.`,
          };
        }
        return {
          tone: 'warn',
          text: `Phân tử khối ${formatNumber(mass)} không phải bội nguyên của công thức đơn giản nhất. Hãy kiểm tra lại.`,
        };
      }
      if (pickedMz === null) {
        return { tone: 'info', text: 'Bấm vào peak mà em cho là ion phân tử trên phổ MS.' };
      }
      if (pickedMz !== ion) {
        const fragment = result?.formula
          ? `Tuy n = ${result.n} là số nguyên, nhưng công thức thu được là sai.`
          : 'n không phải số nguyên.';
        return {
          tone: 'warn',
          text: `m/z = ${pickedMz} chỉ là một mảnh ion. ${fragment} Ion phân tử $[\\mathrm{M}^+]$ của hợp chất đơn giản là peak có m/z lớn nhất.`,
        };
      }
      return {
        tone: 'ok',
        text: `Đúng: $[\\mathrm{M}^+]$ có m/z = ${pickedMz} nên phân tử khối là ${pickedMz}, n = ${result?.n}. Đó là công thức phân tử của ${sample?.name.toLowerCase()}.`,
      };
    },
  );

  function changeMode() {
    pickedMz = null;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn chất cần lập công thức"
    options={OPTIONS}
    bind:value={mode}
    onchange={changeMode}
  />

  {#if custom}
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <label class="text-sm font-semibold text-slate-700">
        %C
        <input class={textInput} inputmode="decimal" bind:value={cText} />
      </label>
      <label class="text-sm font-semibold text-slate-700">
        %H
        <input class={textInput} inputmode="decimal" bind:value={hText} />
      </label>
      <label class="text-sm font-semibold text-slate-700">
        %N
        <input class={textInput} inputmode="decimal" bind:value={nText} />
      </label>
      <label class="text-sm font-semibold text-slate-700">
        Phân tử khối
        <input class={textInput} inputmode="decimal" bind:value={massText} />
      </label>
    </div>
    <p class="text-sm text-slate-600">Phần còn lại đến 100 % được tính là oxygen.</p>
  {:else if sample}
    <svg
      viewBox="0 0 360 186"
      class="mx-auto block w-full max-w-xl"
      role="img"
      aria-label="Phổ khối lượng của {sample.name}, các peak tại m/z {sample.peaks
        .map((p) => p[0])
        .join(', ')}."
    >
      {#each [0, 50, 100] as h (h)}
        <line x1={BOX.left} x2={BOX.right} y1={sy(h)} y2={sy(h)} stroke="#e2e8f0" />
        <text x={BOX.left - 5} y={sy(h) + 4} text-anchor="end" font-size="11" fill="#475569"
          >{h}</text
        >
      {/each}
      {#each ticks as t (t)}
        <text x={sx(t)} y={BOX.bottom + 15} text-anchor="middle" font-size="11" fill="#475569"
          >{t}</text
        >
      {/each}
      <text x={BOX.right} y={BOX.bottom + 31} text-anchor="end" font-size="11" fill="#475569"
        >m/z</text
      >
      <text x={BOX.left} y={BOX.bottom + 31} font-size="11" fill="#475569"
        >Cường độ tương đối (%)</text
      >
      <line x1={BOX.left} x2={BOX.left} y1={BOX.top} y2={BOX.bottom} stroke="#475569" />
      <line x1={BOX.left} x2={BOX.right} y1={BOX.bottom} y2={BOX.bottom} stroke="#475569" />
      {#each sample.peaks as [mz, h] (mz)}
        <line
          x1={sx(mz)}
          x2={sx(mz)}
          y1={BOX.bottom}
          y2={sy(h)}
          stroke={pickedMz === mz ? '#4338ca' : '#64748b'}
          stroke-width={pickedMz === mz ? 4 : 3}
        />
      {/each}
    </svg>

    <div class="flex flex-wrap gap-2" role="group" aria-label="Các peak trên phổ khối lượng">
      {#each sample.peaks as [mz] (mz)}
        <button
          type="button"
          class={pickedMz === mz ? button.primary : button.quiet}
          aria-pressed={pickedMz === mz}
          onclick={() => (pickedMz = mz)}
        >
          m/z {mz}
        </button>
      {/each}
    </div>
  {/if}

  {#if rows.length > 0}
    <div class="overflow-x-auto">
      <table class="w-full min-w-72 text-right text-sm tabular-nums">
        <caption class="mb-1 text-left font-semibold text-slate-700">Tỉ lệ số nguyên tử</caption>
        <thead>
          <tr class="border-b border-slate-300 text-slate-600">
            <th class="py-1 text-left font-semibold" scope="col">Nguyên tố</th>
            <th class="py-1 font-semibold" scope="col">% khối lượng</th>
            <th class="py-1 font-semibold" scope="col">% ÷ nguyên tử khối</th>
            <th class="py-1 font-semibold" scope="col">Chia cho số nhỏ nhất</th>
          </tr>
        </thead>
        <tbody>
          {#each rows as r (r.el)}
            <tr class="border-b border-slate-100">
              <th class="py-1 text-left font-semibold" scope="row">{r.el}</th>
              <td class="py-1">{formatNumber(r.percent, 2)}</td>
              <td class="py-1">{formatNumber(r.share, 3)}</td>
              <td class="py-1">{formatNumber(r.relative, 2)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  <dl class="grid gap-2 rounded-lg bg-slate-50 p-3 text-sm sm:grid-cols-3">
    <div>
      <dt class="text-slate-600">Công thức đơn giản nhất</dt>
      <dd class="text-base font-semibold">
        {#if simple}<ChemFormula formula={formulaText(simple.counts)} />{:else}–{/if}
      </dd>
    </div>
    <div>
      <dt class="text-slate-600">Phân tử khối đang xét</dt>
      <dd class="text-base font-semibold">{mass ? formatNumber(mass) : '–'}</dd>
    </div>
    <div>
      <dt class="text-slate-600">Công thức phân tử</dt>
      <dd class="text-base font-semibold">
        {#if result?.formula && (custom || pickedMz === ion)}
          <ChemFormula formula={result.formula} />
        {:else}–{/if}
      </dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
