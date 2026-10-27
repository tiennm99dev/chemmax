<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { atomColor } from '#lib/domain/molecule.js';
  import ChemText from '../_shared/chem-text.svelte';
  import { chemUnicode } from '../_shared/chem-text.js';
  import {
    BOARD,
    ELEMENT_NAMES,
    NAMES,
    TARGETS,
    VALENCE,
    answerBonds,
    bondKey,
    checkStructure,
    condensed,
    cycleBond,
    placeAtoms,
    target,
  } from './engine.js';

  /** @typedef {import('./engine.js').Bond} Bond */

  let targetId = $state('c2h6o');
  /** @type {Bond[]} */
  let bonds = $state([]);
  /** @type {number | null} */
  let picked = $state(null);
  let answerShown = $state(0);
  /** @type {Set<string>} */
  let found = $state(new Set());

  const t = $derived(target(targetId));
  const atoms = $derived(placeAtoms(t));
  const used = $derived(
    atoms.map((_, i) => bonds.reduce((s, b) => s + (b.a === i || b.b === i ? b.order : 0), 0)),
  );
  const result = $derived(checkStructure(atoms, bonds));
  const text = $derived(result.status === 'ok' ? condensed(atoms, bonds) : null);
  const named = $derived(text ? NAMES[text] : undefined);

  const OPTIONS = TARGETS.map((x) => ({ value: x.id, label: chemUnicode(x.formula) }));

  /** @param {number} i */
  function atomLabel(i) {
    const a = atoms[i];
    const n = atoms.slice(0, i + 1).filter((x) => x.el === a.el).length;
    return `${a.el} số ${n}`;
  }

  /** @param {number} i */
  function tap(i) {
    if (picked === null) {
      picked = i;
      return;
    }
    if (picked !== i) {
      bonds = cycleBond(atoms, bonds, picked, i);
      remember();
    }
    picked = null;
  }

  function remember() {
    if (checkStructure(atoms, bonds).status !== 'ok') return;
    const c = condensed(atoms, bonds);
    if (c) found = new Set([...found, c]);
  }

  function clear() {
    bonds = [];
    picked = null;
  }

  function showAnswer() {
    const k = answerShown % t.answers.length;
    bonds = answerBonds(t, atoms, k);
    answerShown = k + 1;
    picked = null;
    remember();
  }

  function change() {
    clear();
    answerShown = 0;
    found = new Set();
  }

  const tone = $derived(
    result.status === 'ok'
      ? 'ok'
      : result.status === 'missing'
        ? 'info'
        : /** @type {const} */ ('warn'),
  );
  const note = $derived.by(() => {
    if (result.status === 'over') {
      const i = result.over[0];
      return `Nguyên tử ${atomLabel(i)} đã dùng ${used[i]} liên kết, vượt hoá trị ${VALENCE[atoms[i].el]} của ${ELEMENT_NAMES[atoms[i].el]}. Chạm lại hai nguyên tử để bỏ bớt liên kết.`;
    }
    if (result.status === 'split')
      return 'Mọi nguyên tử đều đủ hoá trị nhưng chúng tách thành hai phân tử riêng. Trong một phân tử, mọi nguyên tử phải nối với nhau.';
    if (result.status === 'missing') {
      const left = result.missing.length;
      return picked === null
        ? `Còn ${left} nguyên tử chưa đủ hoá trị (vòng tô cam). Chạm một nguyên tử rồi chạm nguyên tử thứ hai để nối.`
        : `Đã chọn ${atomLabel(picked)}. Chạm nguyên tử thứ hai để nối liên kết đơn; chạm lại cặp đó để thành liên kết đôi hoặc bỏ liên kết.`;
    }
    const name = named ? `: ${named.name}, một ${named.kind}` : '';
    const more =
      t.answers.length > 1 && found.size < t.answers.length
        ? ` Công thức ${chemUnicode(t.formula)} còn một cách sắp xếp khác, hãy thử tìm!`
        : '';
    return `Hợp lệ! Mỗi nguyên tử dùng đúng hoá trị. Công thức cấu tạo thu gọn ${chemUnicode(text ?? '')}${name}.${more}`;
  });

  /** @param {number} i */
  function ring(i) {
    if (picked === i) return '#4f46e5';
    if (used[i] > VALENCE[atoms[i].el]) return '#dc2626';
    if (used[i] < VALENCE[atoms[i].el]) return '#f59e0b';
    return '#059669';
  }

  /**
   * Offsets of the lines drawing a single or double bond.
   * @param {Bond} b
   */
  function lines(b) {
    const p = atoms[b.a];
    const q = atoms[b.b];
    const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
    const nx = (-(q.y - p.y) / len) * 4;
    const ny = ((q.x - p.x) / len) * 4;
    const ks = b.order === 2 ? [-1, 1] : [0];
    return ks.map((k) => ({
      x1: p.x + nx * k,
      y1: p.y + ny * k,
      x2: q.x + nx * k,
      y2: q.y + ny * k,
    }));
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Công thức phân tử"
    options={OPTIONS}
    bind:value={targetId}
    onchange={change}
  />

  <svg
    viewBox="0 0 {BOARD.width} {BOARD.height}"
    class="mx-auto block w-full max-w-[28rem] select-none rounded-xl bg-slate-50"
    role="group"
    aria-label="Bảng dựng công thức cấu tạo của {chemUnicode(
      t.formula,
    )}: {atoms.length} nguyên tử, {bonds.length} liên kết đã nối."
  >
    {#each bonds as b (bondKey(b.a, b.b))}
      {#each lines(b) as s, k (k)}
        <line {...s} stroke="#475569" stroke-width="3" stroke-linecap="round" />
      {/each}
    {/each}
    {#each atoms as a, i (i)}
      {@const r = a.el === 'H' ? 15 : 20}
      <g
        role="button"
        tabindex="0"
        class="atom cursor-pointer outline-none"
        aria-pressed={picked === i}
        aria-label="Nguyên tử {atomLabel(i)}, đã dùng {used[i]} trên {VALENCE[a.el]} liên kết"
        onclick={() => tap(i)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tap(i);
          }
        }}
      >
        <circle
          cx={a.x}
          cy={a.y}
          r={r + 5}
          fill="none"
          stroke={ring(i)}
          stroke-width="3"
          class="ring"
        />
        <circle cx={a.x} cy={a.y} {r} fill={atomColor(a.el)} stroke="#0f172a" stroke-width="1.5" />
        <text
          x={a.x}
          y={a.y + 5}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill={a.el === 'H' ? '#0f172a' : '#fff'}
          pointer-events="none">{a.el}</text
        >
        <text x={a.x + r + 2} y={a.y - r + 2} font-size="11" fill="#334155" pointer-events="none"
          >{used[i]}/{VALENCE[a.el]}</text
        >
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={clear}>Xoá các liên kết</button>
    <button type="button" class={button.secondary} onclick={showAnswer}>
      {t.answers.length > 1 ? 'Xem một đáp án (bấm lại để xem cách khác)' : 'Xem đáp án'}
    </button>
  </div>

  <div class="rounded-xl bg-slate-50 p-3 text-base">
    <p class="text-sm font-semibold text-slate-600">Công thức cấu tạo thu gọn</p>
    {#if text}
      <p class="text-lg font-semibold"><ChemText {text} /></p>
    {:else}
      <p class="text-sm text-slate-500">Sẽ hiện khi cấu tạo hợp lệ.</p>
    {/if}
  </div>

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .atom:focus-visible .ring {
    stroke: #4f46e5;
    stroke-width: 4;
  }
</style>
