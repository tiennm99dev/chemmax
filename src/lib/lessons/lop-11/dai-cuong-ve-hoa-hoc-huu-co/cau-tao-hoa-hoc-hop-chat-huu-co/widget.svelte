<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import CondensedText from './condensed-text.svelte';
  import {
    COLS,
    KIND_NAMES,
    ROWS,
    TARGETS,
    bondsOf,
    canonical,
    cellKey,
    condensedFormula,
    isComplete,
    kindOf,
    placeAtom,
    removeAtom,
    subscriptText,
    treeOf,
  } from './engine.js';

  const CELL = 50;
  const OPTIONS = TARGETS.map((t) => ({ value: t.id, label: prettyFormula(t.formula) }));
  const TOOLS = [
    { value: 'C', label: 'Đặt C' },
    { value: 'O', label: 'Đặt O' },
  ];
  const CELLS = Array.from({ length: ROWS * COLS }, (_, i) => ({
    row: Math.floor(i / COLS),
    col: i % COLS,
  }));

  /** @typedef {{ code: string, text: string, kind: ReturnType<typeof kindOf> }} Found */

  let targetId = $state(TARGETS[0].id);
  let tool = $state('C');
  let board = $state(/** @type {import('./engine.js').Board} */ ({}));
  let found = $state(/** @type {Found[]} */ ([]));
  let message = $state(/** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */ (null));
  let focused = $state(cellKey(2, 1));
  /** @type {SVGSVGElement | undefined} */
  let svg = $state();

  const target = $derived(TARGETS.find((t) => t.id === targetId) ?? TARGETS[0]);
  const placed = $derived(Object.keys(board).length);
  const needed = $derived(target.carbons + target.oxygens);
  const bonds = $derived(bondsOf(board));
  const finished = $derived(found.length === target.total);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (message) return message;
      return {
        tone: 'info',
        text: `Bấm các ô để đặt nguyên tử thành mạch, đủ ${needed} nguyên tử thì mạch được kiểm tra. Hydrogen tự điền theo hoá trị.`,
      };
    },
  );

  /** @param {string} key */
  const place = (key) => {
    const [row, col] = key.split(',').map(Number);
    return { x: col * CELL + CELL / 2, y: row * CELL + CELL / 2 };
  };

  function clear() {
    board = {};
    tool = 'C';
  }

  function changeTarget() {
    clear();
    found = [];
    message = null;
  }

  function recordIfComplete() {
    if (!isComplete(board, target)) {
      message = { tone: 'info', text: `Đã đặt ${placed}/${needed} nguyên tử.` };
      return;
    }
    const tree = treeOf(board);
    const code = canonical(tree);
    const text = condensedFormula(tree);
    if (found.some((f) => f.code === code)) {
      message = {
        tone: 'warn',
        text: `Chất này đã có rồi: ${subscriptText(text)}. Uốn hay xoay mạch không tạo ra chất mới, vì thứ tự liên kết không đổi.`,
      };
      return;
    }
    found = [...found, { code, text, kind: kindOf(tree) }];
    message =
      found.length === target.total
        ? {
            tone: 'ok',
            text: `Đủ cả ${target.total} đồng phân cấu tạo của ${prettyFormula(target.formula)}. Hãy thử công thức khác.`,
          }
        : {
            tone: 'ok',
            text: `Đồng phân mới: ${subscriptText(text)}. Đã tìm được ${found.length} chất. Hãy gỡ bớt nguyên tử để dựng mạch khác.`,
          };
  }

  /** @param {string} key */
  function toggle(key) {
    focused = key;
    const result = board[key]
      ? removeAtom(board, key)
      : placeAtom(board, key, /** @type {'C' | 'O'} */ (tool), target);
    if ('reason' in result) {
      message = { tone: 'warn', text: result.reason };
      return;
    }
    board = result.board;
    recordIfComplete();
  }

  /** @param {string} key */
  async function moveFocus(key) {
    focused = key;
    await tick();
    /** @type {SVGGElement | null | undefined} */ (
      svg?.querySelector(`[data-cell="${key}"]`)
    )?.focus();
  }

  /**
   * @param {KeyboardEvent} event
   * @param {number} row
   * @param {number} col
   */
  function onKey(event, row, col) {
    /** @type {Record<string, [number, number]>} */
    const moves = {
      ArrowUp: [row - 1, col],
      ArrowDown: [row + 1, col],
      ArrowLeft: [row, col - 1],
      ArrowRight: [row, col + 1],
    };
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle(cellKey(row, col));
      return;
    }
    const to = moves[event.key];
    if (!to) return;
    event.preventDefault();
    if (to[0] >= 0 && to[0] < ROWS && to[1] >= 0 && to[1] < COLS) moveFocus(cellKey(to[0], to[1]));
  }

  /** @param {string} key @param {number} row @param {number} col */
  function cellLabel(key, row, col) {
    const atom = board[key];
    return `Hàng ${row + 1}, cột ${col + 1}: ${atom ? `nguyên tử ${atom}` : 'trống'}`;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Công thức phân tử"
    options={OPTIONS}
    bind:value={targetId}
    onchange={changeTarget}
  />

  {#if target.oxygens > 0}
    <SegmentedControl label="Nguyên tử sẽ đặt" options={TOOLS} bind:value={tool} />
  {/if}

  <svg
    bind:this={svg}
    viewBox="0 0 {COLS * CELL} {ROWS * CELL}"
    class="mx-auto block w-full max-w-md touch-manipulation rounded-lg bg-slate-50"
    role="group"
    aria-label="Bảng dựng mạch. Dùng phím mũi tên để di chuyển, Enter để đặt hoặc gỡ nguyên tử."
  >
    {#each bonds as [a, b] (`${a}-${b}`)}
      <line
        x1={place(a).x}
        y1={place(a).y}
        x2={place(b).x}
        y2={place(b).y}
        stroke="#475569"
        stroke-width="5"
      />
    {/each}
    {#each CELLS as { row, col } (cellKey(row, col))}
      {@const key = cellKey(row, col)}
      {@const atom = board[key]}
      {@const { x, y } = place(key)}
      <g
        role="button"
        tabindex={focused === key ? 0 : -1}
        class="cell cursor-pointer"
        data-cell={key}
        aria-label={cellLabel(key, row, col)}
        onclick={() => toggle(key)}
        onkeydown={(e) => onKey(e, row, col)}
      >
        <rect x={x - CELL / 2} y={y - CELL / 2} width={CELL} height={CELL} fill="transparent" />
        {#if atom}
          <circle
            class="knob"
            cx={x}
            cy={y}
            r="19"
            fill={atom === 'C' ? '#334155' : '#dc2626'}
            stroke="#fff"
            stroke-width="2"
          />
          <text {x} y={y + 6} text-anchor="middle" font-size="17" font-weight="700" fill="#fff"
            >{atom}</text
          >
        {:else}
          <circle class="knob" cx={x} cy={y} r="5" fill="#cbd5e1" />
        {/if}
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.quiet} onclick={clear}>Xoá mạch</button>
    <p class="text-sm font-semibold text-slate-700" aria-live="polite">
      Đã tìm được {found.length}/{finished ? target.total : '?'} đồng phân của {prettyFormula(
        target.formula,
      )}
    </p>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if found.length > 0}
    <ol class="space-y-1 rounded-lg bg-slate-50 p-3 text-sm">
      {#each found as f, i (f.code)}
        <li class="flex flex-wrap justify-between gap-x-3">
          <span>{i + 1}. <CondensedText text={f.text} /></span>
          {#if f.kind !== 'hydrocarbon'}
            <span class="text-slate-600">{KIND_NAMES[f.kind]}</span>
          {/if}
        </li>
      {/each}
    </ol>
  {/if}
</div>

<style>
  .cell:focus {
    outline: none;
  }
  .cell:focus-visible .knob {
    stroke: #4f46e5;
    stroke-width: 3;
  }
</style>
