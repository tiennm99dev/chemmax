<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing, textInput } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { readNumber } from '#lib/core/decimal.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { MOLAR_VOLUME, sciText } from '../_shared/molar.js';
  import { MAX_DOTS, MOL_PER_DOT, SUBSTANCES, convert, dotCount, substance } from './engine.js';

  /** @typedef {import('./engine.js').Quantity} Quantity */

  let formula = $state('CO2');
  /** @type {Quantity} */
  let kind = $state('n');
  let typed = $state('0,5');

  const s = $derived(substance(formula));
  const KINDS = [
    { value: 'n', label: 'Số mol n' },
    { value: 'm', label: 'Khối lượng m' },
    { value: 'N', label: 'Số hạt' },
    { value: 'V', label: 'Thể tích V' },
  ];
  const kinds = $derived(s.gas ? KINDS : KINDS.filter((k) => k.value !== 'V'));
  const UNIT = /** @type {Record<Quantity, string>} */ ({
    n: 'mol',
    m: 'g',
    N: '× 10²³ hạt',
    V: 'L (ở 25 °C, 1 bar)',
  });

  const value = $derived.by(() => {
    const v = readNumber(typed);
    if (v === null) return null;
    return kind === 'N' ? v * 1e23 : v;
  });
  const result = $derived(value === null ? null : convert(formula, kind, value));
  const dots = $derived(result ? dotCount(result.n) : 0);
  const balloonR = $derived(result?.V ? Math.min(70, 12 * Math.cbrt(result.V)) : 0);

  /** Dot positions in a pile, bottom row first. */
  const pile = $derived.by(() => {
    /** @type {Array<[number, number]>} */
    const out = [];
    let row = 0;
    let left = dots;
    while (left > 0) {
      const inRow = Math.min(left, 12 - row);
      for (let i = 0; i < inRow; i++) out.push([30 + row * 6 + i * 12, 148 - row * 11]);
      left -= inRow;
      row += 1;
    }
    return out;
  });

  const steps = $derived.by(() => {
    if (!result) return [];
    const M = formatNumber(result.M);
    const n = formatNumber(result.n, 4);
    /** @type {string[]} */
    const out = [];
    if (kind === 'm') out.push(`n = m : M = ${formatNumber(value ?? 0, 4)} : ${M} = ${n} mol`);
    if (kind === 'N') out.push(`n = N : N_A = ${sciText(value ?? 0)} : (6,022 × 10²³) = ${n} mol`);
    if (kind === 'V') out.push(`n = V : 24,79 = ${formatNumber(value ?? 0, 4)} : 24,79 = ${n} mol`);
    if (kind !== 'm') out.push(`m = n × M = ${n} × ${M} = ${formatNumber(result.m, 4)} g`);
    if (kind !== 'N') out.push(`Số hạt = n × N_A = ${n} × 6,022 × 10²³ = ${sciText(result.N)}`);
    if (result.V !== null && kind !== 'V')
      out.push(`V = 24,79 × n = 24,79 × ${n} = ${formatNumber(result.V, 4)} L`);
    return out;
  });

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (value === null) return { tone: 'warn', text: 'Nhập một số, ví dụ 0,5 hoặc 11,2.' };
      if (!result) return { tone: 'warn', text: 'Hãy nhập một số không âm.' };
      if (!s.gas)
        return {
          tone: 'info',
          text: `${s.name} không phải chất khí ở điều kiện thường nên không dùng V = 24,79 × n.`,
        };
      return {
        tone: 'ok',
        text: `${formatNumber(result.n, 4)} mol khí bất kì ở 25 °C, 1 bar đều chiếm ${formatNumber(result.V ?? 0, 4)} L.`,
      };
    },
  );

  function onSubstance() {
    if (!substance(formula).gas && kind === 'V') {
      kind = 'n';
      typed = '0,5';
    }
  }

  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <label class="block text-sm font-semibold text-slate-700">
      Chất
      <select class={select} bind:value={formula} onchange={onSubstance}>
        {#each SUBSTANCES as sub (sub.formula)}
          <option value={sub.formula}>{prettyFormula(sub.formula)} – {sub.name}</option>
        {/each}
      </select>
    </label>
    <label class="block text-sm font-semibold text-slate-700">
      Giá trị đã biết ({UNIT[kind]})
      <input class={textInput} inputmode="decimal" bind:value={typed} />
    </label>
  </div>
  <SegmentedControl label="Đại lượng đã biết" options={kinds} bind:value={kind} />

  <div class="grid gap-3 sm:grid-cols-2">
    <figure class="rounded-xl bg-slate-50 p-2">
      <svg
        viewBox="0 0 200 160"
        class="block h-auto w-full"
        role="img"
        aria-label="Đống hạt: {dots} chấm, mỗi chấm là 0,1 mol"
      >
        <line x1="16" y1="156" x2="184" y2="156" stroke="#94a3b8" stroke-width="2" />
        {#each pile as [x, y], i (i)}
          <circle cx={x} cy={y} r="5" fill="#6366f1" />
        {/each}
      </svg>
      <figcaption class="text-center text-xs text-slate-600">
        Mỗi chấm là {formatNumber(MOL_PER_DOT)} mol ({sciText(MOL_PER_DOT * 6.022e23)} hạt){#if result && Math.round(result.n / MOL_PER_DOT) > MAX_DOTS};
          chỉ vẽ {MAX_DOTS} chấm đầu{/if}.
      </figcaption>
    </figure>
    <figure class="rounded-xl bg-sky-50 p-2">
      <svg
        viewBox="0 0 200 160"
        class="block h-auto w-full"
        role="img"
        aria-label={result?.V
          ? `Bóng khí thể tích ${formatNumber(result.V, 2)} lít`
          : 'Không có bóng khí'}
      >
        {#if balloonR > 0}
          <line x1="100" y1={80 + balloonR} x2="100" y2="156" stroke="#64748b" />
          <circle cx="100" cy="80" r={balloonR} fill="#7dd3fc" stroke="#0284c7" stroke-width="2" />
          <text x="100" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#0c4a6e"
            >{formatNumber(result?.V ?? 0, 2)} L</text
          >
        {:else}
          <text x="100" y="84" text-anchor="middle" font-size="11" fill="#64748b"
            >Không phải chất khí</text
          >
        {/if}
      </svg>
      <figcaption class="text-center text-xs text-slate-600">
        Bóng khí ở 25 °C, 1 bar ({formatNumber(MOLAR_VOLUME)} L/mol)
      </figcaption>
    </figure>
  </div>

  {#if result}
    <div class="rounded-xl border border-slate-200 p-3 text-sm">
      <p class="mb-2 font-semibold">
        <ChemFormula {formula} />: M = {formatNumber(result.M)} g/mol
      </p>
      <ol class="list-decimal space-y-1 pl-5 tabular-nums">
        {#each steps as line, i (i)}
          <li>{line}</li>
        {/each}
      </ol>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
