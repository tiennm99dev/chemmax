<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { polar, sectorPath } from '#lib/core/visuals/svg-math.js';
  import { ELEMENTS, slices, sumPercent } from './engine.js';

  /** Tasks: pick the elements that answer the question. */
  const TASKS = [
    { id: 'free', label: 'Tự do', ask: '', answer: /** @type {string[]} */ ([]) },
    {
      id: 'top2',
      label: 'Câu 1',
      ask: 'Chọn hai nguyên tố phổ biến nhất trong vỏ Trái Đất.',
      answer: ['O', 'Si'],
    },
    {
      id: 'metal',
      label: 'Câu 2',
      ask: 'Chọn tất cả các kim loại có trong biểu đồ.',
      answer: ['Al', 'Fe', 'Ca', 'Na', 'Mg', 'K'],
    },
    {
      id: 'over80',
      label: 'Câu 3',
      ask: 'Chọn ít nguyên tố nhất mà tổng hàm lượng vượt quá 80%.',
      answer: ['O', 'Si', 'Al'],
    },
  ];

  let task = $state('free');
  /** @type {string[]} */
  let picked = $state(['O', 'Si']);
  /** @type {string} */
  let focus = $state('O');

  const current = $derived(TASKS.find((t) => t.id === task) ?? TASKS[0]);
  const total = $derived(sumPercent(picked));
  const arcs = slices();
  const C = 110;
  const R = 96;
  const info = $derived(ELEMENTS.find((e) => e.symbol === focus) ?? ELEMENTS[0]);

  /** @param {string} symbol */
  function toggle(symbol) {
    focus = symbol;
    picked = picked.includes(symbol) ? picked.filter((s) => s !== symbol) : [...picked, symbol];
  }

  /** @param {string | number} value */
  function chooseTask(value) {
    task = String(value);
    picked = [];
  }

  const sameSet = (/** @type {string[]} */ a, /** @type {string[]} */ b) =>
    a.length === b.length && a.every((x) => b.includes(x));

  const names = $derived(
    ELEMENTS.filter((e) => picked.includes(e.symbol))
      .map((e) => e.name.toLowerCase())
      .join(', '),
  );

  const feedback = $derived.by(() => {
    const sumText = `${formatNumber(total, 1)}%`;
    if (current.id === 'free') {
      if (picked.length === 0)
        return { tone: /** @type {const} */ ('info'), text: 'Bấm vào tên nguyên tố để chọn.' };
      return {
        tone: /** @type {const} */ ('info'),
        text: `Đã chọn ${names}: chiếm ${sumText} khối lượng vỏ Trái Đất.`,
      };
    }
    if (picked.length === 0) return { tone: /** @type {const} */ ('info'), text: current.ask };
    if (sameSet(picked, current.answer))
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đúng rồi! ${names.charAt(0).toUpperCase()}${names.slice(1)} chiếm ${sumText} khối lượng vỏ Trái Đất.`,
      };
    if (picked.every((x) => current.answer.includes(x)))
      return {
        tone: /** @type {const} */ ('info'),
        text: `Đúng hướng: ${names} (${sumText}). Chọn tiếp.`,
      };
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Chưa đúng: ${names} (${sumText}). ${
        current.id === 'over80'
          ? 'Hãy chọn từ nguyên tố nhiều nhất trở xuống cho đến khi vượt 80%.'
          : current.id === 'metal'
            ? 'Oxygen và silicon là phi kim; nhóm "khác" không phải một nguyên tố.'
            : 'Xem hai miếng quạt lớn nhất.'
      }`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    options={TASKS.map((t) => ({ value: t.id, label: t.label }))}
    value={task}
    onchange={chooseTask}
  />
  {#if current.ask}
    <p class="font-semibold text-slate-800">{current.ask}</p>
  {/if}

  <div class="grid items-center gap-4 sm:grid-cols-[220px_1fr]">
    <svg
      viewBox="0 0 220 220"
      class="mx-auto block w-full max-w-[16rem]"
      role="img"
      aria-label="Biểu đồ hình quạt tròn: tỉ lệ phần trăm khối lượng các nguyên tố trong vỏ Trái Đất. Các nguyên tố đang chọn chiếm {formatNumber(
        total,
        1,
      )}%."
    >
      {#each arcs as a, i (a.symbol)}
        {@const el = ELEMENTS[i]}
        {@const on = picked.includes(a.symbol)}
        {@const mid = polar(C, C, on ? 8 : 0, (a.start + a.end) / 2)}
        <path
          d={sectorPath(mid.x, mid.y, R, a.start, a.end)}
          fill={el.colour}
          opacity={on || picked.length === 0 ? 1 : 0.35}
          stroke="#fff"
          stroke-width="1.5"
        />
        {#if el.percent >= 4}
          {@const p = polar(mid.x, mid.y, R * 0.66, (a.start + a.end) / 2)}
          <text
            x={p.x}
            y={p.y + 4}
            text-anchor="middle"
            font-size="12"
            font-weight="700"
            fill="#fff">{el.symbol}</text
          >
        {/if}
      {/each}
    </svg>

    <ul class="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {#each ELEMENTS as el (el.symbol)}
        {@const on = picked.includes(el.symbol)}
        <li>
          <button
            type="button"
            class="flex min-h-11 w-full items-center gap-2 rounded-lg border px-2 py-1 text-left text-sm {on
              ? 'border-indigo-500 bg-indigo-50 font-semibold'
              : 'border-slate-200 bg-white'} {focusRing}"
            aria-pressed={on}
            onclick={() => toggle(el.symbol)}
          >
            <span class="h-3 w-3 shrink-0 rounded-sm" style:background={el.colour}></span>
            <span class="min-w-0">
              <span class="block">{el.name}</span>
              <span class="block tabular-nums text-slate-600">{formatFixed(el.percent, 1)}%</span>
            </span>
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <p class="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
    <span class="font-semibold">{info.name}{info.symbol === '…' ? '' : ` (${info.symbol})`}:</span>
    {info.found}.
  </p>

  <div class="flex items-center gap-3">
    <span class="text-sm font-semibold text-slate-700">Tổng đã chọn</span>
    <div class="h-4 flex-1 overflow-hidden rounded-full bg-slate-200">
      <div class="h-full bg-indigo-600" style:width="{total}%"></div>
    </div>
    <span class="w-14 text-right font-semibold tabular-nums text-indigo-700"
      >{formatNumber(total, 1)}%</span
    >
  </div>

  <FeedbackNote tone={feedback.tone} text={feedback.text} />
</div>
