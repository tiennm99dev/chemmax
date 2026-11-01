<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { atom, valueOf } from '../_shared/main-group.js';
  import { roman } from '../_shared/compounds.js';
  import { GROUPS, PERIODS, PROPERTIES, atomAt, heat, trend, valueText } from './engine.js';

  /** @typedef {import('../_shared/main-group.js').Property} Property */
  /** @typedef {import('./engine.js').Direction} Direction */

  const PROPERTY_OPTIONS = [
    { value: 'radius', label: 'Bán kính' },
    { value: 'electronegativity', label: 'Độ âm điện' },
    { value: 'ionization', label: 'Năng lượng ion hoá' },
  ];
  const DIRECTION_OPTIONS = [
    { value: 'group', label: 'Trong một nhóm' },
    { value: 'period', label: 'Trong một chu kì' },
  ];

  /** @type {Property} */
  let property = $state('radius');
  /** @type {Direction} */
  let direction = $state('group');
  let selectedZ = $state(11);

  const selected = $derived(
    /** @type {import('../_shared/main-group.js').MainGroupAtom} */ (atom(selectedZ)),
  );
  const result = $derived(trend(selected, direction, property));
  const onLine = $derived(new Set(result.line.map((a) => a.z)));
  const info = $derived(PROPERTIES[property]);
  /** @type {Record<number, HTMLButtonElement>} */
  const buttons = {};

  /** @type {Record<string, [number, number]>} */
  const MOVES = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };

  /** @param {KeyboardEvent} e */
  function onkeydown(e) {
    const move = MOVES[e.key];
    if (!move) return;
    e.preventDefault();
    let period = selected.period;
    let group = selected.group;
    for (let i = 0; i < 6; i++) {
      period += move[0];
      group += move[1];
      if (period < 1 || period > 6 || group < 1 || group > 8) return;
      const next = atomAt(period, group);
      if (next) {
        selectedZ = next.z;
        buttons[next.z]?.focus();
        return;
      }
    }
  }

  // Bar chart of the selected line.
  const W = 340;
  const H = 180;
  const BASE = 150;
  const bars = $derived.by(() => {
    const values = result.line.map((a) => /** @type {number} */ (valueOf(a, property)));
    const top = Math.max(...values, 1);
    const slot = (W - 20) / Math.max(result.line.length, 1);
    return result.line.map((a, i) => ({
      a,
      x: 10 + slot * i + slot * 0.15,
      w: slot * 0.7,
      h: (values[i] / top) * 115,
    }));
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-4">
    <SegmentedControl label="Tính chất" options={PROPERTY_OPTIONS} bind:value={property} />
    <SegmentedControl label="Xem xu hướng" options={DIRECTION_OPTIONS} bind:value={direction} />
  </div>

  <div class="max-w-full overflow-x-auto pb-1">
    <div
      class="grid min-w-[20rem] gap-1"
      style:grid-template-columns="auto repeat(8, minmax(0, 1fr))"
      role="group"
      aria-label="Các nguyên tố nhóm A, tô màu theo {info.name}"
    >
      <span></span>
      {#each GROUPS as g (g)}
        <span class="text-center text-xs font-semibold text-slate-600">{roman(g)}A</span>
      {/each}
      {#each PERIODS as p (p)}
        <span class="self-center pr-1 text-xs font-semibold text-slate-600">{p}</span>
        {#each GROUPS as g (g)}
          {@const a = atomAt(p, g)}
          {#if a}
            <button
              bind:this={buttons[a.z]}
              type="button"
              class="flex min-h-11 flex-col items-center justify-center rounded border text-slate-900 transition {focusRing} {a.z ===
              selectedZ
                ? 'border-slate-900 ring-2 ring-slate-900'
                : onLine.has(a.z)
                  ? 'border-indigo-500'
                  : 'border-black/10 opacity-60'}"
              style:background-color={heat(a, property)}
              tabindex={a.z === selectedZ ? 0 : -1}
              aria-pressed={a.z === selectedZ}
              aria-label="{a.symbol}, chu kì {a.period}, nhóm {roman(a.group)}A: {valueText(
                a,
                property,
              )}"
              onclick={() => (selectedZ = a.z)}
              {onkeydown}
            >
              <span class="text-sm leading-tight font-bold">{a.symbol}</span>
              <span class="text-[0.6rem] leading-none tabular-nums"
                >{valueText(a, property).replace(/ (pm|kJ\/mol)$/, '')}</span
              >
            </button>
          {:else}
            <span></span>
          {/if}
        {/each}
      {/each}
    </div>
  </div>
  <p class="text-xs text-slate-600">
    Màu càng đậm, {info.name} càng lớn.{info.unit ? ` Đơn vị: ${info.unit}.` : ''} Bấm một ô (hoặc dùng
    phím mũi tên) để xem xu hướng theo {direction === 'group' ? 'cột' : 'hàng'} chứa nó.
  </p>

  {#if bars.length > 1}
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
      role="img"
      aria-label="Biểu đồ {info.name}: {result.line
        .map((a) => `${a.symbol} ${valueText(a, property)}`)
        .join(', ')}"
    >
      <line x1="6" y1={BASE} x2={W - 6} y2={BASE} stroke="#64748b" stroke-width="1.5" />
      {#each bars as b (b.a.z)}
        <rect
          x={b.x}
          y={BASE - b.h}
          width={b.w}
          height={b.h}
          rx="3"
          fill={b.a.z === selectedZ ? '#4f46e5' : '#a5b4fc'}
        />
        <text x={b.x + b.w / 2} y={BASE + 16} text-anchor="middle" font-size="12" fill="#334155"
          >{b.a.symbol}</text
        >
        <text
          x={b.x + b.w / 2}
          y={BASE - b.h - 5}
          text-anchor="middle"
          font-size="10"
          fill="#334155">{valueText(b.a, property).replace(/ (pm|kJ\/mol)$/, '')}</text
        >
      {/each}
    </svg>
  {/if}

  <FeedbackNote tone={result.line.length > 1 ? 'ok' : 'info'} text={result.sentence} />
  {#if result.line.length > 1}
    <p class="text-sm text-slate-700">{result.reason} {result.metal}</p>
  {/if}
</div>
