<script>
  import { tick } from 'svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { SCENARIOS, STEPS, checkOrder, moveItem, startOrder } from './engine.js';

  const OPTIONS = SCENARIOS.map((s, i) => ({ value: i, label: s.title }));
  const SHORT = [
    'Đề xuất vấn đề',
    'Đưa ra dự đoán khoa học',
    'Lập kế hoạch kiểm tra dự đoán',
    'Thực hiện kế hoạch kiểm tra',
    'Viết, trình bày báo cáo',
  ];

  const uid = $props.id();
  let pick = $state(0);
  /** @type {number[][]} */
  let orders = $state(SCENARIOS.map((_, i) => startOrder(i)));
  /** @type {boolean[]} */
  let checked = $state(SCENARIOS.map(() => false));
  /** @type {Array<number | null>} */
  let moves = $state(SCENARIOS.map(() => null));
  let status = $state('');

  const scenario = $derived(SCENARIOS[pick]);
  const order = $derived(orders[pick]);
  const result = $derived(checkOrder(order));
  const shown = $derived(checked[pick]);
  const solved = $derived(shown && result.solved);
  const moveIndex = $derived(moves[pick]);
  const move = $derived(moveIndex === null ? null : scenario.moves[moveIndex]);
  const loopOn = $derived(move?.ok === true);

  /** @type {HTMLOListElement | undefined} */
  let list = $state();

  /**
   * @param {number} from
   * @param {number} to
   * @param {string} [focusDir] which control of the moved card gets focus
   */
  async function place(from, to, focusDir) {
    const next = moveItem(order, from, to);
    if (next.every((c, i) => c === order[i])) return;
    const card = order[from];
    orders[pick] = next;
    checked[pick] = false;
    const pos = next.indexOf(card);
    status = `Đã chuyển thẻ "${scenario.cards[card]}" đến vị trí ${pos + 1}.`;
    if (!focusDir) return;
    await tick();
    const row = list?.querySelector(`[data-card="${card}"]`);
    const target =
      row?.querySelector(`[data-dir="${focusDir}"]:not(:disabled)`) ??
      row?.querySelector('[data-dir="grip"]');
    /** @type {HTMLElement | null | undefined} */ (target)?.focus();
  }

  function check() {
    checked[pick] = true;
    status = checkOrder(order).text;
  }

  function reset() {
    orders[pick] = startOrder(pick);
    checked[pick] = false;
    moves[pick] = null;
    status = 'Đã xáo lại các thẻ.';
  }

  /** @param {number} i */
  function chooseMove(i) {
    moves[pick] = i;
    status = scenario.moves[i].why;
  }

  // Pointer dragging by the grip: the card follows the pointer row by row.
  /** @type {{ card: number, id: number } | null} */
  let drag = $state(null);

  /**
   * @param {PointerEvent} e
   * @param {number} card
   */
  function gripDown(e, card) {
    if (e.button !== 0) return;
    e.preventDefault();
    /** @type {HTMLElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
    drag = { card, id: e.pointerId };
  }

  /** @param {PointerEvent} e */
  function gripMove(e) {
    if (!drag || e.pointerId !== drag.id || !list) return;
    const rows = [...list.querySelectorAll('[data-card]')];
    let target = rows.length - 1;
    for (let i = 0; i < rows.length; i++) {
      const box = rows[i].getBoundingClientRect();
      if (e.clientY < box.top + box.height / 2) {
        target = i;
        break;
      }
    }
    const from = order.indexOf(drag.card);
    if (target !== from) place(from, target);
  }

  /** @param {PointerEvent} e */
  function gripUp(e) {
    if (drag && e.pointerId === drag.id) drag = null;
  }

  /**
   * @param {KeyboardEvent} e
   * @param {number} pos
   */
  function gripKey(e, pos) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      place(pos, pos - 1, 'grip');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      place(pos, pos + 1, 'grip');
    }
  }

  const arrow = `flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;

  // Flow chart geometry (SVG units).
  const BOX = { x: 12, w: 262, h: 38, gap: 18, top: 8 };
  /** @param {number} i */
  const boxY = (i) => BOX.top + i * (BOX.h + BOX.gap);
  const mid = (/** @type {number} */ i) => boxY(i) + BOX.h / 2;
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn một cuộc tìm hiểu" options={OPTIONS} bind:value={pick} />

  <div class="space-y-2">
    <p id="{uid}-order" class="text-sm text-slate-700">
      Sắp xếp năm thẻ theo thứ tự các bước tìm hiểu
      <strong>{scenario.title.toLowerCase()}</strong>. Kéo thẻ bằng tay nắm ⠿, hoặc dùng nút ↑ ↓
      (phím mũi tên khi đang chọn tay nắm).
    </p>
    <ol bind:this={list} aria-labelledby="{uid}-order" class="space-y-2">
      {#each order as card, pos (card)}
        {@const slot = result.slots[pos]}
        <li
          data-card={card}
          class="rounded-xl border p-2 {shown
            ? slot.ok
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-amber-500 bg-amber-50'
            : 'border-slate-200 bg-white'} {drag?.card === card ? 'ring-2 ring-indigo-400' : ''}"
        >
          <div class="flex items-start gap-2">
            <button
              type="button"
              data-dir="grip"
              class="flex h-11 w-9 shrink-0 cursor-grab touch-none items-center justify-center rounded-lg text-xl text-slate-500 hover:bg-slate-100 active:cursor-grabbing {focusRing}"
              aria-label="Tay nắm thẻ ở vị trí {pos + 1}: dùng phím mũi tên lên, xuống để chuyển"
              aria-describedby="{uid}-card-{card}"
              onpointerdown={(e) => gripDown(e, card)}
              onpointermove={gripMove}
              onpointerup={gripUp}
              onpointercancel={gripUp}
              onkeydown={(e) => gripKey(e, pos)}><span aria-hidden="true">⠿</span></button
            >
            <span
              class="mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600"
              aria-hidden="true">{pos + 1}</span
            >
            <p id="{uid}-card-{card}" class="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed">
              {scenario.cards[card]}
            </p>
            <div class="flex shrink-0 flex-col gap-1 sm:flex-row">
              <button
                type="button"
                data-dir="up"
                class={arrow}
                aria-label="Chuyển thẻ lên"
                aria-describedby="{uid}-card-{card}"
                disabled={pos === 0}
                onclick={() => place(pos, pos - 1, 'up')}><span aria-hidden="true">↑</span></button
              >
              <button
                type="button"
                data-dir="down"
                class={arrow}
                aria-label="Chuyển thẻ xuống"
                aria-describedby="{uid}-card-{card}"
                disabled={pos === order.length - 1}
                onclick={() => place(pos, pos + 1, 'down')}
                ><span aria-hidden="true">↓</span></button
              >
            </div>
          </div>
          {#if shown}
            <p
              class="mt-1 pl-11 text-sm font-medium {slot.ok
                ? 'text-emerald-800'
                : 'text-amber-900'}"
            >
              {slot.ok ? '✓' : '•'}
              {slot.hint}
            </p>
          {/if}
        </li>
      {/each}
    </ol>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={check}>Kiểm tra thứ tự</button>
      <button type="button" class={button.quiet} onclick={reset}>Xáo lại</button>
    </div>
    {#if shown}
      <p
        class="rounded-lg px-3 py-2 text-sm font-semibold {result.solved
          ? 'bg-emerald-100 text-emerald-900'
          : 'bg-amber-100 text-amber-900'}"
      >
        {result.text}
      </p>
    {/if}
  </div>

  {#if solved}
    <div class="space-y-3 rounded-xl border border-indigo-200 bg-indigo-50/50 p-3">
      <h3 class="font-semibold text-slate-800">Nếu kết quả không như dự đoán?</h3>
      <p class="text-sm text-slate-700">{scenario.mismatch} Em làm gì tiếp theo?</p>
      <div class="grid gap-2 sm:grid-cols-3" role="group" aria-label="Việc làm tiếp theo">
        {#each scenario.moves as m, i (m.text)}
          {@const on = moves[pick] === i}
          <button
            type="button"
            aria-pressed={on}
            class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm {focusRing} {on
              ? m.ok
                ? 'border-emerald-600 bg-emerald-50 font-semibold text-emerald-900'
                : 'border-rose-500 bg-rose-50 font-semibold text-rose-900'
              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}"
            onclick={() => chooseMove(i)}>{m.text}</button
          >
        {/each}
      </div>
      {#if move}
        <p
          class="rounded-lg px-3 py-2 text-sm {move.ok
            ? 'bg-emerald-100 text-emerald-900'
            : 'bg-rose-100 text-rose-900'}"
        >
          {move.why}
        </p>
      {/if}

      <svg
        viewBox="0 0 340 {boxY(4) + BOX.h + 8}"
        class="mx-auto block w-full max-w-sm"
        role="img"
        aria-label={loopOn
          ? 'Sơ đồ năm bước; mũi tên từ bước 4 quay lại bước 2 đang được tô sáng: kết quả không phù hợp thì đưa ra dự đoán mới.'
          : 'Sơ đồ năm bước của phương pháp tìm hiểu tự nhiên, có mũi tên từ bước 4 quay lại bước 2.'}
      >
        <defs>
          <marker
            id="{uid}-flow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
          </marker>
          <marker
            id="{uid}-loop"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={loopOn ? '#059669' : '#94a3b8'} />
          </marker>
        </defs>
        {#each SHORT as label, i (label)}
          {@const hot = loopOn && (i === 1 || i === 3)}
          <rect
            x={BOX.x}
            y={boxY(i)}
            width={BOX.w}
            height={BOX.h}
            rx="8"
            fill={hot ? '#d1fae5' : '#ffffff'}
            stroke={hot ? '#059669' : '#6366f1'}
            stroke-width="1.5"
          />
          <text
            x={BOX.x + 12}
            y={mid(i) + 5}
            font-size="14"
            fill="#1e293b"
            font-weight={i === 1 && loopOn ? '700' : '500'}>{i + 1}. {label}</text
          >
          {#if i < 4}
            <line
              x1={BOX.x + BOX.w / 2}
              y1={boxY(i) + BOX.h}
              x2={BOX.x + BOX.w / 2}
              y2={boxY(i + 1) - 1}
              stroke="#64748b"
              stroke-width="1.5"
              marker-end="url(#{uid}-flow)"
            />
          {/if}
        {/each}
        <text x={BOX.x + BOX.w / 2 + 8} y={boxY(4) - 5} font-size="11" fill="#475569">phù hợp</text>
        <path
          d="M {BOX.x + BOX.w} {mid(3)} H 318 V {mid(1)} H {BOX.x + BOX.w + 2}"
          fill="none"
          stroke={loopOn ? '#059669' : '#94a3b8'}
          stroke-width={loopOn ? 3 : 1.5}
          stroke-dasharray={loopOn ? 'none' : '5 4'}
          marker-end="url(#{uid}-loop)"
        />
        <text
          x="330"
          y={(mid(1) + mid(3)) / 2}
          font-size="11"
          fill={loopOn ? '#047857' : '#64748b'}
          text-anchor="middle"
          transform="rotate(-90 330 {(mid(1) + mid(3)) / 2})">không phù hợp</text
        >
      </svg>
    </div>
  {/if}

  <p class="sr-only" aria-live="polite">{status}</p>
  <p class="text-xs text-slate-500">
    Gợi ý: {STEPS.length} bước luôn đi từ câu hỏi, qua dự đoán và kiểm tra, đến báo cáo.
  </p>
</div>
