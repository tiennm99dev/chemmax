<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import {
    ELEMENTS,
    CATEGORY_LABELS,
    STATE_LABELS,
    electronConfiguration,
    element,
    formatConfiguration,
    formatMass,
    groupLabel,
    shellCounts,
    tablePosition,
  } from './elements.js';
  import { cellColor, legend, neighbor } from './periodic-table.js';

  /**
   * The 118-element periodic table in the 18-column layout, with the
   * lanthanide and actinide rows below. Tap an element, or Tab into the table
   * and move with the arrow keys (Home/End jump to the ends of a row), to see
   * its card: atomic weight, configuration, shells, group in A/B notation and
   * electronegativity. Cells are at least 2 rem square, so the whole table
   * fits a lesson column from about 36 rem wide; on a phone it scrolls
   * sideways inside its own box and the page never does.
   *
   * - `selected` (bindable): atomic number of the chosen element, or null.
   * - `colorBy` (bindable): `'category'`, `'block'`, `'metal'` (kim loại /
   *   phi kim / khí hiếm) or `'electronegativity'`.
   * - `controls`: show the colour-mode switch.
   * - `highlight`: when set, elements it rejects are dimmed (a group, a period).
   * - `details`: show the card of the selected element.
   *
   * @type {{
   *   selected?: number | null;
   *   colorBy?: import('./periodic-table.js').ColorMode;
   *   controls?: boolean;
   *   highlight?: ((el: import('./elements.js').Element) => boolean) | null;
   *   details?: boolean;
   *   label?: string;
   *   onselect?: (z: number) => void;
   * }}
   */
  let {
    selected = $bindable(null),
    colorBy = $bindable('category'),
    controls = true,
    highlight = null,
    details = true,
    label = 'Bảng tuần hoàn các nguyên tố hoá học',
    onselect,
  } = $props();

  const MODES = [
    { value: 'category', label: 'Loại nguyên tố' },
    { value: 'metal', label: 'Kim loại / phi kim' },
    { value: 'block', label: 'Khối s, p, d, f' },
    { value: 'electronegativity', label: 'Độ âm điện' },
  ];

  const cells = ELEMENTS.map((el) => ({ el, ...tablePosition(el) }));
  /** Keyboard focus target: the selected element, else hydrogen. */
  const focusZ = $derived(selected ?? 1);
  const current = $derived(selected === null ? undefined : element(selected));
  const items = $derived(legend(colorBy));
  /** @type {Record<number, HTMLButtonElement>} */
  const buttons = {};

  /** @param {number} z */
  function choose(z) {
    selected = z;
    onselect?.(z);
  }

  /** @type {Record<string, import('./periodic-table.js').Direction>} */
  const ARROWS = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };

  /** @param {KeyboardEvent} e @param {number} z */
  function onkeydown(e, z) {
    let next;
    if (e.key in ARROWS) next = neighbor(z, ARROWS[e.key]);
    else if (e.key === 'Home' || e.key === 'End') {
      const row = tablePosition(ELEMENTS[z - 1]).row;
      const inRow = cells.filter((c) => c.row === row);
      next = (e.key === 'Home' ? inRow[0] : inRow[inRow.length - 1]).el.z;
    } else return;
    e.preventDefault();
    choose(next);
    buttons[next]?.focus();
  }

  const shells = $derived(current ? shellCounts(electronConfiguration(current.z)) : []);
  const position = $derived.by(() => {
    if (!current) return '';
    const place =
      current.group === null
        ? `nhóm IIIB (${CATEGORY_LABELS[current.category].toLowerCase()})`
        : `nhóm ${groupLabel(current)} (cột ${current.group})`;
    return `Chu kì ${current.period}, ${place}, khối ${current.block}`;
  });
  const fmt = (/** @type {number} */ v) => String(v).replace('.', ',');
</script>

<div class="space-y-3">
  {#if controls}
    <SegmentedControl label="Tô màu theo" options={MODES} bind:value={colorBy} />
  {/if}

  <div class="max-w-full overflow-x-auto overscroll-x-contain pb-2">
    <div
      class="grid min-w-[36rem] gap-0.5"
      style:grid-template-columns="repeat(18, minmax(0, 1fr))"
      style:grid-template-rows="repeat(7, auto) 0.5rem repeat(2, auto)"
      role="group"
      aria-label={label}
    >
      {#each cells as c (c.el.z)}
        {@const dim = highlight ? !highlight(c.el) : false}
        <button
          bind:this={buttons[c.el.z]}
          type="button"
          class="flex aspect-square min-h-8 flex-col items-center justify-center rounded border text-slate-900 transition {focusRing} {selected ===
          c.el.z
            ? 'border-slate-900 ring-2 ring-slate-900'
            : 'border-black/10'} {dim ? 'opacity-30' : ''}"
          style:grid-row={c.row}
          style:grid-column={c.col}
          style:background-color={cellColor(c.el, colorBy)}
          tabindex={c.el.z === focusZ ? 0 : -1}
          aria-pressed={selected === c.el.z}
          aria-label="{c.el.z}. {c.el.name} ({c.el.symbol})"
          onclick={() => choose(c.el.z)}
          onkeydown={(e) => onkeydown(e, c.el.z)}
        >
          <span class="text-[0.6rem] leading-none tabular-nums">{c.el.z}</span>
          <span class="text-sm leading-tight font-bold">{c.el.symbol}</span>
        </button>
      {/each}
      <span
        class="self-center text-right text-[0.65rem] leading-tight text-slate-600"
        style:grid-row="9"
        style:grid-column="1 / 4"
        aria-hidden="true">Họ lanthanide</span
      >
      <span
        class="self-center text-right text-[0.65rem] leading-tight text-slate-600"
        style:grid-row="10"
        style:grid-column="1 / 4"
        aria-hidden="true">Họ actinide</span
      >
    </div>
  </div>

  <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
    {#each items as item (item.label)}
      <li class="flex items-center gap-1.5">
        <span
          class="inline-block size-3 rounded-sm border border-black/10"
          style:background-color={item.color}
        ></span>
        {item.label}
      </li>
    {/each}
  </ul>

  {#if details}
    <div class="rounded-xl bg-slate-50 p-4" aria-live="polite">
      {#if current}
        <div class="flex flex-wrap items-start gap-4">
          <div
            class="flex size-20 shrink-0 flex-col items-center justify-center rounded-lg border border-black/10"
            style:background-color={cellColor(current, colorBy)}
          >
            <span class="text-xs tabular-nums">{current.z}</span>
            <span class="text-2xl font-bold">{current.symbol}</span>
            <span class="text-xs tabular-nums">{formatMass(current)}</span>
          </div>
          <dl class="grid min-w-0 flex-1 grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
            <dt class="text-slate-500">Tên</dt>
            <dd class="font-semibold capitalize">
              {current.name}{#if current.viName}<span class="font-normal normal-case">
                  ({current.viName})</span
                >{/if}
            </dd>
            <dt class="text-slate-500">Vị trí</dt>
            <dd>{position}</dd>
            <dt class="text-slate-500">Loại</dt>
            <dd>{CATEGORY_LABELS[current.category]} · {STATE_LABELS[current.state]} ở 25 °C</dd>
            <dt class="text-slate-500">Nguyên tử khối</dt>
            <dd class="tabular-nums">
              {formatMass(current)}{#if current.massNumberOnly}
                (số khối của đồng vị bền nhất){/if}
            </dd>
            <dt class="text-slate-500">Cấu hình e</dt>
            <dd class="tabular-nums">
              {formatConfiguration(electronConfiguration(current.z), { core: current.z > 18 })}
            </dd>
            <dt class="text-slate-500">Số e mỗi lớp</dt>
            <dd class="tabular-nums">{shells.join(', ')}</dd>
            <dt class="text-slate-500">Độ âm điện</dt>
            <dd class="tabular-nums">
              {current.electronegativity === null
                ? 'chưa xác định'
                : fmt(current.electronegativity)}
            </dd>
          </dl>
        </div>
      {:else}
        <p class="text-sm text-slate-600">Chọn một nguyên tố để xem thông tin.</p>
      {/if}
    </div>
  {/if}
</div>
