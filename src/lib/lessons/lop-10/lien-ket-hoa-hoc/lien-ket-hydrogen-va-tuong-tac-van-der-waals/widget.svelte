<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { atomColor } from '#lib/domain/molecule.js';
  import {
    BOARD,
    START,
    SUBSTANCES,
    boardText,
    hydrogenBonds,
    hydrogenSpots,
    orient,
    pushOut,
  } from './engine.js';

  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  let id = $state('H2O');
  let points = $state(START.map((p) => ({ ...p })));
  let angles = $state(START.map(() => 0));

  const substance = $derived(SUBSTANCES.find((s) => s.id === id) ?? SUBSTANCES[0]);
  const mols = $derived(points.map((p, i) => ({ x: p.x, y: p.y, angle: angles[i] })));
  const bonds = $derived(hydrogenBonds(mols, substance));
  const options = SUBSTANCES.map((s) => ({ value: s.id, label: prettyFormula(s.id) }));

  /** @param {number} i */
  function moved(i) {
    const others = points.filter((_, k) => k !== i);
    const place = pushOut(points[i], others);
    points[i].x = place.x;
    points[i].y = place.y;
    angles = orient(mols, substance).map((m) => m.angle);
  }

  function reset() {
    points = START.map((p) => ({ ...p }));
    angles = START.map(() => 0);
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
    aria-label="Các phân tử {prettyFormula(id)}; đang có {bonds.length} liên kết hydrogen."
  >
    {#each bonds as b (`${b.donor}-${b.hydrogen}`)}
      {@const h = hydrogenSpots(mols[b.donor], substance)[b.hydrogen]}
      <line
        x1={h.x}
        y1={h.y}
        x2={mols[b.acceptor].x}
        y2={mols[b.acceptor].y}
        stroke="#d97706"
        stroke-width="3"
        stroke-dasharray="3 5"
        stroke-linecap="round"
      />
    {/each}

    {#each mols as m, i (i)}
      {#each hydrogenSpots(m, substance) as h, k (k)}
        <line x1={m.x} y1={m.y} x2={h.x} y2={h.y} stroke="#64748b" stroke-width="4" />
        <circle cx={h.x} cy={h.y} r="9" fill={atomColor('H')} stroke="#475569" stroke-width="1.5" />
        <text
          x={h.x}
          y={h.y + 4}
          text-anchor="middle"
          font-size="10"
          font-weight="700"
          fill="#0f172a"
          style="pointer-events:none">H</text
        >
      {/each}
      <circle
        class="drag-handle"
        cx={points[i].x}
        cy={points[i].y}
        r="15"
        fill={atomColor(substance.center)}
        stroke="#0f172a"
        stroke-width="1.5"
        role="button"
        tabindex="0"
        aria-label="Phân tử {i + 1}. Kéo hoặc dùng phím mũi tên để di chuyển."
        style="cursor:grab; outline:none"
        use:draggable={{
          point: points[i],
          svg: () => svgEl ?? null,
          viewBox: { w: BOARD.w, h: BOARD.h },
          pad: 34,
          keyStep: 10,
          keyShiftStep: 30,
          onChange: () => moved(i),
        }}
      />
      <text
        x={m.x}
        y={m.y + 5}
        text-anchor="middle"
        font-size="14"
        font-weight="700"
        fill="#fff"
        style="pointer-events:none">{substance.center}</text
      >
    {/each}
  </svg>

  <FeedbackNote tone={bonds.length > 0 ? 'ok' : 'info'} text={boardText(substance, bonds.length)} />

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.quiet} onclick={reset}>Xếp lại</button>
    <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
      Số liên kết hydrogen: <strong>{bonds.length}</strong>
    </p>
  </div>
  <p class="text-xs text-slate-600">
    Hình vẽ phẳng để dễ quan sát; trong thực tế các phân tử sắp xếp trong không gian. Đường chấm màu
    cam là liên kết hydrogen.
  </p>
</div>
