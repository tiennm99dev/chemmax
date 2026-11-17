<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { FOREIGN, THRESHOLD, respond } from './engine.js';

  /** @typedef {import('./engine.js').Kind} Kind */

  const ROWS = 5;
  const COLS = 9;
  const GAP = 34;
  const PAD = 22;
  /** Rows 0 and 1 are above the slip plane and move. */
  const MOVING = 2;
  const kindOptions = [
    { value: 'pure', label: 'Kim loại nguyên chất' },
    { value: 'alloy', label: 'Hợp kim' },
  ];

  let kind = $state(/** @type {Kind} */ ('pure'));
  let force = $state(0);
  const still = reducedMotion();

  const r = $derived(respond(kind, force));
  const shift = $derived((r.slips + r.lean) * GAP);
  const isForeign = (/** @type {number} */ row, /** @type {number} */ col) =>
    kind === 'alloy' && FOREIGN.some(([a, b]) => a === row && b === col);

  const atoms = $derived(
    Array.from({ length: ROWS }, (_, row) =>
      Array.from({ length: COLS }, (_, col) => ({
        key: `${row}-${col}`,
        row,
        col,
        x: PAD + col * GAP + (row < MOVING ? shift : 0),
        y: PAD + row * GAP + (isForeign(row, col) ? (row % 2 ? 4 : -4) : 0),
        foreign: isForeign(row, col),
      })),
    ).flat(),
  );

  const note = $derived.by(() => {
    const name = kind === 'pure' ? 'kim loại nguyên chất' : 'hợp kim';
    if (r.slips > 0)
      return {
        tone: /** @type {const} */ ('warn'),
        text: `Lực ${formatNumber(force)} đã vượt ngưỡng ${THRESHOLD[kind]} của ${name}: hai lớp trên trượt đi ${r.slips} khoảng cách nguyên tử, khối kim loại bị biến dạng.${kind === 'pure' ? ' Các lớp nguyên tử đều đặn trượt lên nhau dễ dàng, nên kim loại nguyên chất mềm, dẻo.' : ''}`,
      };
    if (force === 0)
      return {
        tone: /** @type {const} */ ('info'),
        text: `Kéo thanh trượt để tác dụng lực ngang lên hai lớp nguyên tử trên cùng của ${name}.`,
      };
    return {
      tone: /** @type {const} */ ('ok'),
      text:
        kind === 'alloy'
          ? `Lực ${formatNumber(force)} chưa làm các lớp trượt: các nguyên tử lạ (màu cam) có kích thước khác làm các lớp không còn đều đặn, cản trở sự trượt. Vì vậy hợp kim thường cứng hơn kim loại thành phần.`
          : `Lực ${formatNumber(force)} chỉ làm các lớp hơi nghiêng; tăng lực lên ${THRESHOLD.pure} thì các lớp bắt đầu trượt.`,
    };
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Vật liệu"
    options={kindOptions}
    bind:value={kind}
    onchange={() => (force = 0)}
  />
  <SliderField label="Lực tác dụng (đơn vị quy ước)" bind:value={force} min={0} max={10} />

  <svg
    viewBox="0 0 {2 * PAD + (COLS - 1) * GAP + 3 * GAP} {2 * PAD + (ROWS - 1) * GAP}"
    class="w-full max-w-xl rounded-xl bg-slate-50"
    role="img"
    aria-label="Mô hình {kind === 'pure'
      ? 'kim loại nguyên chất: các nguyên tử giống nhau xếp thành lớp đều đặn'
      : 'hợp kim: xen giữa các nguyên tử kim loại cơ bản có các nguyên tử lạ kích thước khác'}. {r.slips >
    0
      ? `Hai lớp trên đã trượt ${r.slips} khoảng cách nguyên tử.`
      : 'Các lớp chưa trượt.'}"
  >
    <line
      x1="0"
      x2={2 * PAD + (COLS + 2) * GAP}
      y1={PAD + (MOVING - 0.5) * GAP}
      y2={PAD + (MOVING - 0.5) * GAP}
      stroke="#94a3b8"
      stroke-dasharray="5 4"
    />
    {#if force > 0}
      <path
        d="M 4 {PAD + 0.5 * GAP} l 14 0 m -5 -5 l 5 5 l -5 5"
        fill="none"
        stroke="#dc2626"
        stroke-width="3"
      />
    {/if}
    {#each atoms as a (a.key)}
      <g class={still ? '' : 'move'} style="transform: translate({a.x}px, {a.y}px)">
        <circle
          r={a.foreign ? 17 : 14}
          fill={a.foreign ? '#fb923c' : '#94a3b8'}
          stroke={a.foreign ? '#c2410c' : '#475569'}
        />
      </g>
    {/each}
  </svg>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .move {
    transition: transform 0.4s ease;
  }
</style>
