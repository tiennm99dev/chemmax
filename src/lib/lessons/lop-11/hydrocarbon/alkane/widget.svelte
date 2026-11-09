<script>
  import { rng } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import {
    MAX_LENGTH,
    MIN_LENGTH,
    branchKey,
    buildSkeleton,
    judgeName,
    nameAlkane,
    randomBench,
  } from './engine.js';

  /** @typedef {import('./engine.js').Side} Side */
  /** @typedef {import('./engine.js').BranchSize} BranchSize */

  const COL = 56;
  const ROW = 42;
  const W = MAX_LENGTH * COL;
  const H = 5 * ROW + 8;
  const BRANCH_NAMES = ['trống', 'nhánh CH₃', 'nhánh C₂H₅'];

  let length = $state(5);
  let branches = $state(/** @type {import('./engine.js').Branches} */ ({ '1:up': 1, '2:down': 2 }));
  let typed = $state('');
  let shown = $state(false);
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: 'Bấm ô dấu cộng trên hoặc dưới một carbon để gắn nhánh $\\mathrm{CH_3}$, bấm lần nữa để đổi thành $\\mathrm{C_2H_5}$. Gõ tên chất rồi bấm Kiểm tra.',
    }),
  );
  let seed = 1;

  const skeleton = $derived(buildSkeleton(length, branches));
  const result = $derived(nameAlkane(skeleton));
  const carbons = $derived(skeleton.spots.length);
  const formula = $derived(`C${carbons > 1 ? carbons : ''}H${2 * carbons + 2}`);
  const left = $derived((W - length * COL) / 2);
  const locantOf = $derived(
    new Map(
      (result?.chain ?? []).map((node, i) => /** @type {[number, number]} */ ([node, i + 1])),
    ),
  );
  const bonds = $derived(
    skeleton.adj.flatMap((links, a) => links.filter((b) => b > a).map((b) => [a, b])),
  );
  const slots = $derived(
    Array.from({ length: Math.max(0, length - 2) }, (_, k) => k + 1).flatMap((index) =>
      /** @type {Side[]} */ (['up', 'down']).map((side) => ({
        index,
        side,
        size: /** @type {BranchSize} */ (branches[branchKey(index, side)] ?? 0),
      })),
    ),
  );

  /** @param {{ col: number, row: number }} s */
  const at = (s) => ({ x: left + s.col * COL + COL / 2, y: H / 2 + s.row * ROW });

  function changed() {
    shown = false;
    note = { tone: 'info', text: 'Mạch đã đổi. Gõ tên chất mới rồi bấm Kiểm tra.' };
  }

  /** @param {number} index @param {Side} side */
  function cycle(index, side) {
    const key = branchKey(index, side);
    const next = /** @type {BranchSize} */ (((branches[key] ?? 0) + 1) % 3);
    branches = { ...branches, [key]: next };
    changed();
  }

  /** @param {number} v */
  function resize(v) {
    branches = Object.fromEntries(
      Object.entries(branches).filter(([key]) => Number(key.split(':')[0]) < v - 1),
    );
    length = v;
    changed();
  }

  function fresh() {
    const bench = randomBench(rng(seed++ * 7919));
    length = bench.length;
    branches = bench.branches;
    typed = '';
    changed();
  }

  function check() {
    if (!result) return;
    if (!typed.trim()) {
      note = { tone: 'warn', text: 'Hãy gõ tên chất trước khi kiểm tra.' };
      return;
    }
    const n = result.chain.length;
    const verdict = judgeName(typed, result);
    /** @type {Record<typeof verdict, string>} */
    const messages = {
      right: `Đúng: ${result.name}. Mạch chính có ${n} nguyên tử C, đánh số như trên hình.`,
      parent: `Tên mạch chính chưa đúng. Mạch carbon dài nhất có ${n} nguyên tử C. Hãy thử cả những mạch đi qua nhánh, không chỉ mạch nằm ngang.`,
      branches:
        'Tên hoặc số nhánh chưa đúng. Đếm lại các nhánh gắn vào mạch chính: methyl có 1 C, ethyl có 2 C; nhánh lặp lại dùng di, tri, tetra.',
      numbering:
        'Số chỉ vị trí nhánh chưa đúng. Đánh số mạch chính từ đầu gần nhánh hơn; nếu hai phía như nhau, nhánh đứng trước theo chữ cái nhận số nhỏ hơn.',
      order: 'Các nhánh phải được gọi theo thứ tự chữ cái: ethyl đứng trước methyl.',
      format:
        'Gần đúng rồi. Kiểm tra cách viết: số và chữ nối bằng dấu "-", các số cách nhau bằng dấu ",".',
    };
    if (verdict === 'right') shown = true;
    note = { tone: verdict === 'right' ? 'ok' : 'warn', text: messages[verdict] };
  }

  function reveal() {
    if (!result) return;
    shown = true;
    note = {
      tone: 'info',
      text: `Tên đúng: ${result.name}. Mạch chính (tô xanh) có ${result.chain.length} nguyên tử C, đánh số từ đầu gần nhánh hơn.`,
    };
  }

  /** @param {KeyboardEvent} e @param {number} index @param {Side} side */
  function onKey(e, index, side) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    cycle(index, side);
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap items-center gap-3">
    <Stepper
      label="Số C mạch ngang"
      value={length}
      min={MIN_LENGTH}
      max={MAX_LENGTH}
      onchange={resize}
    />
    <button type="button" class={button.quiet} onclick={fresh}>Đề mới</button>
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-lg touch-manipulation rounded-lg bg-slate-50"
    role="group"
    aria-label="Bàn dựng mạch carbon. Dùng Tab để tới các ô nhánh, Enter để đổi nhánh."
  >
    {#each bonds as [a, b] (`${a}-${b}`)}
      {@const p = at(skeleton.spots[a])}
      {@const q = at(skeleton.spots[b])}
      <line
        x1={p.x}
        y1={p.y}
        x2={q.x}
        y2={q.y}
        stroke={shown && locantOf.has(a) && locantOf.has(b) ? '#4f46e5' : '#94a3b8'}
        stroke-width={shown && locantOf.has(a) && locantOf.has(b) ? 5 : 3}
      />
    {/each}
    {#each slots as slot (`${slot.index}:${slot.side}`)}
      {#if slot.size === 0}
        {@const p = at({ col: slot.index, row: slot.side === 'up' ? -1 : 1 })}
        <circle
          cx={p.x}
          cy={p.y}
          r="11"
          fill="#fff"
          stroke="#94a3b8"
          stroke-dasharray="3 3"
          pointer-events="none"
        />
        <text
          x={p.x}
          y={p.y + 5}
          text-anchor="middle"
          font-size="16"
          fill="#64748b"
          pointer-events="none">+</text
        >
      {/if}
    {/each}
    {#each skeleton.spots as spot, i (i)}
      {@const p = at(spot)}
      {@const h = 4 - skeleton.adj[i].length}
      {@const inChain = shown && locantOf.has(i)}
      <rect
        x={p.x - 21}
        y={p.y - 13}
        width="42"
        height="26"
        rx="8"
        fill={inChain ? '#e0e7ff' : '#fff'}
        stroke={inChain ? '#4f46e5' : '#475569'}
        stroke-width={inChain ? 2.5 : 1.5}
      />
      <text
        x={p.x}
        y={p.y + 5}
        text-anchor="middle"
        font-size="14"
        font-weight="600"
        fill="#0f172a"
        aria-hidden="true"
        >{h === 0 ? 'C' : 'CH'}{#if h >= 2}<tspan font-size="10" dy="4">{h}</tspan>{/if}</text
      >
      {#if inChain}
        <text
          x={p.x + 17}
          y={p.y - 15}
          font-size="12"
          font-weight="700"
          fill="#4338ca"
          aria-hidden="true">{locantOf.get(i)}</text
        >
      {/if}
    {/each}
    {#each slots as slot (`hit-${slot.index}:${slot.side}`)}
      {@const top = slot.side === 'up' ? -2.5 : 0.5}
      <g
        role="button"
        tabindex="0"
        class="slot cursor-pointer"
        aria-label="Nhánh {slot.side === 'up' ? 'phía trên' : 'phía dưới'} carbon thứ {slot.index +
          1} của mạch ngang: {BRANCH_NAMES[slot.size]}. Bấm để đổi."
        onclick={() => cycle(slot.index, slot.side)}
        onkeydown={(e) => onKey(e, slot.index, slot.side)}
      >
        <rect
          class="slot-box"
          x={left + slot.index * COL + 4}
          y={H / 2 + top * ROW}
          width={COL - 8}
          height={ROW * 2}
          rx="8"
          fill="transparent"
          stroke="transparent"
        />
      </g>
    {/each}
  </svg>

  <p class="text-sm text-slate-700">
    Công thức phân tử: <ChemFormula {formula} />. Mạch dựng có {carbons} nguyên tử C.
  </p>

  <form
    class="flex flex-wrap items-end gap-2"
    onsubmit={(e) => {
      e.preventDefault();
      check();
    }}
  >
    <label class="min-w-0 flex-1 basis-56 text-sm font-semibold text-slate-700">
      Tên thay thế của chất
      <input
        class="{textInput} mt-1"
        bind:value={typed}
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="ví dụ 2-methylbutane"
      />
    </label>
    <button type="submit" class={button.primary}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={reveal}>Xem đáp án</button>
  </form>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .slot:focus {
    outline: none;
  }
  .slot:focus-visible .slot-box {
    stroke: #4f46e5;
    stroke-width: 3;
  }
</style>
