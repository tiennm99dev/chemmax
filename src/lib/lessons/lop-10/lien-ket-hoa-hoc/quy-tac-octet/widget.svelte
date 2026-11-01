<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { chargeLabel } from '#lib/domain/atom.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import {
    BOARD,
    PRESETS,
    canMove,
    dropEdge,
    dropPoint,
    freeSpots,
    judge,
    lewisState,
    sharedSpots,
  } from './engine.js';

  const OWNER = ['#2563eb', '#dc2626', '#059669', '#d97706', '#7c3aed'];

  let id = $state('h2o');
  /** @type {import('./engine.js').Move[]} */
  let moves = $state([]);
  /** @type {Record<string, boolean>} */
  let solved = $state({});
  /** @type {number | null} */
  let dragging = $state(null);
  let ghost = $state({ x: 0, y: 0 });
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  const preset = $derived(PRESETS.find((p) => p.id === id) ?? PRESETS[0]);
  const board = $derived(lewisState(preset, moves));
  const verdict = $derived(judge(preset, moves));
  const options = PRESETS.map((p) => ({ value: p.id, label: prettyFormula(p.formula) }));
  const usable = $derived(
    preset.atoms.map((_, i) => preset.edges.some((__, j) => canMove(preset, moves, i, j))),
  );

  /** @param {number} i atom index, numbered when the element repeats */
  function nameOf(i) {
    const el = preset.atoms[i].el;
    const same = preset.atoms.flatMap((a, k) => (a.el === el ? [k] : []));
    return same.length > 1 ? `${el}${same.indexOf(i) + 1}` : el;
  }

  const actions = $derived(
    preset.edges.flatMap((e, edge) =>
      [e.a, e.b]
        .filter((atom) => canMove(preset, moves, atom, edge))
        .map((atom) => ({
          atom,
          edge,
          label:
            e.kind === 'give'
              ? `${nameOf(atom)} nhường 1 electron cho ${nameOf(e.b)}`
              : `${nameOf(atom)} góp 1 electron vào ${nameOf(e.a)}–${nameOf(e.b)}`,
        })),
    ),
  );

  /** @param {number} atom @param {number} edge */
  function move(atom, edge) {
    moves = [...moves, { atom, edge }];
    if (judge(preset, moves).solved) solved = { ...solved, [preset.id]: true };
  }

  /** @param {number} atom */
  function drop(atom) {
    if (dragging !== atom) return;
    dragging = null;
    const edge = dropEdge(preset, moves, atom, ghost);
    if (edge >= 0) move(atom, edge);
  }

  function reset() {
    moves = [];
    dragging = null;
  }

  /**
   * Free electrons of an atom: its own first, then the ones it received.
   * @param {number} i
   */
  function freeDots(i) {
    const at = preset.atoms[i];
    const n = board.atoms[i].free;
    const giver = preset.edges.find((e) => e.kind === 'give' && e.b === i)?.a ?? i;
    return freeSpots(preset, i, n).map((p, k) => ({
      ...p,
      owner: k < at.valence ? i : giver,
    }));
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn chất" {options} bind:value={id} onchange={reset} />

  <svg
    bind:this={svgEl}
    viewBox="0 0 {BOARD.w} {BOARD.h}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50 select-none"
    style:touch-action="none"
    role="group"
    aria-label="Sơ đồ Lewis của {prettyFormula(preset.formula)}: {preset.atoms
      .map((a, i) => `${nameOf(i)} có ${board.atoms[i].count} electron`)
      .join(', ')}."
  >
    {#each preset.edges as e, j (j)}
      {@const p = preset.atoms[e.a]}
      {@const q = preset.atoms[e.b]}
      {@const mid = dropPoint(preset, e)}
      <line
        x1={p.x}
        y1={p.y}
        x2={q.x}
        y2={q.y}
        stroke={e.kind === 'give' ? '#94a3b8' : '#e2e8f0'}
        stroke-width="2"
        stroke-dasharray={e.kind === 'give' ? '6 5' : undefined}
      />
      {#if dragging !== null && canMove(preset, moves, dragging, j)}
        <circle
          cx={mid.x}
          cy={mid.y}
          r="26"
          fill="#eef2ff"
          stroke="#6366f1"
          stroke-width="2"
          stroke-dasharray="4 4"
        />
      {/if}
      {#each sharedSpots(preset, j, board.edges[j].a * Number(e.kind === 'share'), board.edges[j].b) as s, k (k)}
        <circle cx={s.x} cy={s.y} r="4.5" fill={OWNER[s.owner]} />
      {/each}
    {/each}

    {#each preset.atoms as a, i (i)}
      {@const dots = freeDots(i)}
      <circle cx={a.x} cy={a.y} r="20" fill="#fff" stroke={OWNER[i]} stroke-width="2.5" />
      <text x={a.x} y={a.y + 6} text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a"
        >{a.el}</text
      >
      {#if board.atoms[i].charge !== 0}
        <text
          x={a.x + 22}
          y={a.y - 22}
          text-anchor="middle"
          font-size="15"
          font-weight="700"
          fill="#0f172a">{chargeLabel(board.atoms[i].charge)}</text
        >
      {/if}
      {#each dots as d, k (k)}
        {#if !(usable[i] && k === dots.length - 1)}
          <circle cx={d.x} cy={d.y} r="4.5" fill={OWNER[d.owner]} />
        {/if}
      {/each}
    {/each}

    {#each preset.atoms as _, i (i)}
      {#if usable[i] && freeDots(i).length > 0}
        {@const dots = freeDots(i)}
        {@const home = dots[dots.length - 1]}
        <circle
          class="drag-handle"
          cx={dragging === i ? ghost.x : home.x}
          cy={dragging === i ? ghost.y : home.y}
          r="6.5"
          fill={OWNER[i]}
          stroke="#0f172a"
          stroke-width="2"
          style="cursor:grab"
          use:draggable={{
            point: ghost,
            svg: () => svgEl ?? null,
            viewBox: { w: BOARD.w, h: BOARD.h },
            pad: 8,
            onChange: () => (dragging = i),
            onEnd: () => drop(i),
          }}
        />
      {/if}
    {/each}
  </svg>

  <ul class="flex flex-wrap justify-center gap-2 text-sm font-semibold">
    {#each preset.atoms as a, i (i)}
      <li
        class="rounded-full px-3 py-1 tabular-nums {board.atoms[i].ok
          ? 'bg-emerald-100 text-emerald-900'
          : 'bg-slate-100 text-slate-700'}"
      >
        {nameOf(i)}: {board.atoms[i].count}/{a.goal} electron
      </li>
    {/each}
  </ul>

  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  <div class="flex flex-wrap gap-2" role="group" aria-label="Di chuyển electron bằng nút bấm">
    {#each actions as act (`${act.atom}-${act.edge}`)}
      <button type="button" class={button.secondary} onclick={() => move(act.atom, act.edge)}
        >{act.label}</button
      >
    {/each}
  </div>

  <div class="flex flex-wrap items-center gap-3">
    <button
      type="button"
      class={button.quiet}
      disabled={moves.length === 0}
      onclick={() => (moves = moves.slice(0, -1))}>Hoàn tác</button
    >
    <button type="button" class={button.quiet} disabled={moves.length === 0} onclick={reset}
      >Làm lại</button
    >
    <p class="text-sm text-slate-600" aria-live="polite">
      Đã hoàn thành {Object.keys(solved).length}/{PRESETS.length} chất.
    </p>
  </div>
</div>
