<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { frameOf, graphPath, regionPath, tickText, ticksIn } from './plot.js';

  /**
   * A graph in a window of the plane, x and y scaled separately (so the
   * window can zoom in around a point): light grid with round ticks, the axes
   * when 0 is in range, and any of the layers below, drawn in this order.
   *
   * - `win`: the window { xMin, xMax, yMin, yMax }.
   * - `label`: accessible name of the drawing; say what it shows.
   * - `bands`: { lo, hi, color } horizontal strips (an ε band).
   * - `spans`: { from, to, color, axis? } shaded vertical strips (an interval
   *   [a; b], a solution set); `axis` also draws a thick stroke along the
   *   x-axis (the bottom edge when 0 is out of range).
   * - `marks`: x values with a dashed vertical line (x₀, an asymptote).
   * - `regions`: { f, g?, from, to, color, opacity? } filled between f and g
   *   (the x-axis when g is left out).
   * - `traps`: { x0, x1, y0, y1 } trapezoids with corners (x0; 0), (x1; 0),
   *   (x1; y1), (x0; y0): one piece of the trapezoid rule, red below the axis.
   * - `rects`: { x0, x1, y } rectangles from the x-axis up (or down) to y: a
   *   Riemann sum, red below the axis.
   * - `guides`: dashed segments { x1, y1, x2, y2, color? } in math units.
   * - `lines`: dashed straight lines y = a·x + b, or x = c when `vertical`.
   * - `curves`: { f, color, breaks?, refine?, from?, to?, width?, dashed? };
   *   the pen lifts across `breaks` (jumps, holes, asymptotes), and `refine`
   *   draws a branch right up to its asymptote (see `graphPath`).
   * - `points`: { x, y, color, hollow?, r?, name? }: filled dots, or hollow
   *   for a value the function does not take, clipped to the window. With
   *   `labelPoints` they are drawn above the clip instead, with a white rim
   *   and `name` written beside them.
   * - `children`: extra SVG given the frame (drag handles, labels), drawn
   *   last without clipping, or inside the clip with `clipChildren`.
   * - `height`, `left`: box height and the margin for the y labels;
   *   `squareHeight` in plot.js gives equal scales.
   * - `xTicks`, `yTicks`: about how many ticks each axis gets.
   * - `wide`: fill the container instead of a centred box at most max-w-xl.
   * - `interactive`: the drawing holds controls (role group, no touch
   *   scrolling); `svgEl` binds its `<svg>` for drag handles.
   * @type {{
   *   win: import('./plot.js').Window;
   *   label: string;
   *   bands?: Array<{ lo: number, hi: number, color: string }>;
   *   spans?: Array<{ from: number, to: number, color: string, axis?: boolean }>;
   *   marks?: number[];
   *   regions?: Array<{ f: (x: number) => number, g?: (x: number) => number, from: number, to: number, color: string, opacity?: number }>;
   *   traps?: Array<{ x0: number, x1: number, y0: number, y1: number }>;
   *   rects?: Array<{ x0: number, x1: number, y: number }>;
   *   guides?: Array<{ x1: number, y1: number, x2: number, y2: number, color?: string }>;
   *   lines?: Array<{ a?: number, b?: number, c?: number, vertical?: boolean, color: string }>;
   *   curves?: Array<{ f: (x: number) => number, color: string, breaks?: number[], refine?: boolean, from?: number, to?: number, width?: number, dashed?: boolean }>;
   *   points?: Array<{ x: number, y: number, color: string, hollow?: boolean, r?: number, name?: string }>;
   *   labelPoints?: boolean;
   *   height?: number;
   *   left?: number;
   *   xTicks?: number;
   *   yTicks?: number;
   *   wide?: boolean;
   *   interactive?: boolean;
   *   svgEl?: SVGSVGElement;
   *   clipChildren?: boolean;
   *   children?: import('svelte').Snippet<[import('./plot.js').Frame]>;
   * }}
   */
  let {
    win,
    label,
    bands = [],
    spans = [],
    marks = [],
    regions = [],
    traps = [],
    rects = [],
    guides = [],
    lines = [],
    curves = [],
    points = [],
    labelPoints = false,
    height = 280,
    left = 44,
    xTicks = 5,
    yTicks = 5,
    wide = false,
    interactive = false,
    svgEl = $bindable(),
    clipChildren = false,
    children,
  } = $props();

  const uid = $props.id();
  const clipId = `graph-box-${uid}`;
  const frame = $derived(frameOf(win, { height, left }));
  const xt = $derived(ticksIn(win.xMin, win.xMax, xTicks));
  const yt = $derived(ticksIn(win.yMin, win.yMax, yTicks));
  const paths = $derived(
    curves.map((c) =>
      graphPath(c.f, win, frame, { breaks: c.breaks, refine: c.refine, from: c.from, to: c.to }),
    ),
  );
  const fills = $derived(regions.map((r) => regionPath(r.f, r.g, r.from, r.to, frame)));
  /** @param {number} v @param {number} lo @param {number} hi */
  const inside = (v, lo, hi) => v >= lo && v <= hi;
  /** @param {{ x: number, y: number }} p */
  const shown = (p) => inside(p.x, win.xMin, win.xMax) && inside(p.y, win.yMin, win.yMax);
  /** @param {number} x */
  const clampX = (x) => Math.min(frame.right, Math.max(frame.left, frame.sx(x)));
  /** @param {number} y */
  const clampY = (y) => Math.min(frame.bottom, Math.max(frame.top, frame.sy(y)));
  const axisY = $derived(inside(0, win.yMin, win.yMax) ? frame.sy(0) : frame.bottom);
  /** @param {{ a?: number, b?: number, c?: number, vertical?: boolean }} l */
  function ends(l) {
    if (l.vertical) {
      const x = frame.sx(l.c ?? 0);
      return { x1: x, y1: frame.top, x2: x, y2: frame.bottom };
    }
    const a = l.a ?? 0;
    const b = l.b ?? 0;
    return {
      x1: frame.sx(win.xMin),
      y1: frame.sy(a * win.xMin + b),
      x2: frame.sx(win.xMax),
      y2: frame.sy(a * win.xMax + b),
    };
  }
</script>

<svg
  bind:this={svgEl}
  viewBox="0 0 {frame.width} {frame.height}"
  class="block w-full select-none rounded-lg border border-slate-200 bg-white {wide
    ? ''
    : 'mx-auto max-w-xl'} {interactive ? 'touch-none' : ''}"
  role={interactive ? 'group' : 'img'}
  aria-label={label}
>
  <defs>
    <clipPath id={clipId}>
      <rect
        x={frame.left}
        y={frame.top}
        width={frame.right - frame.left}
        height={frame.bottom - frame.top}
      />
    </clipPath>
  </defs>
  {#each bands as b, i (i)}
    <rect
      x={frame.left}
      y={clampY(b.hi)}
      width={frame.right - frame.left}
      height={Math.max(0, clampY(b.lo) - clampY(b.hi))}
      fill={b.color}
      opacity="0.18"
    />
  {/each}
  {#each spans as s, i (i)}
    <rect
      x={clampX(s.from)}
      y={frame.top}
      width={Math.max(0, clampX(s.to) - clampX(s.from))}
      height={frame.bottom - frame.top}
      fill={s.color}
      opacity="0.14"
    />
  {/each}
  {#each xt as t (t)}
    <line
      x1={frame.sx(t)}
      y1={frame.top}
      x2={frame.sx(t)}
      y2={frame.bottom}
      stroke={t === 0 ? '#64748b' : '#e2e8f0'}
      stroke-width={t === 0 ? 1.5 : 1}
    />
    <text x={frame.sx(t)} y={frame.height - 8} font-size="12" text-anchor="middle" fill="#475569"
      >{tickText(t)}</text
    >
  {/each}
  {#each yt as t (t)}
    <line
      x1={frame.left}
      y1={frame.sy(t)}
      x2={frame.right}
      y2={frame.sy(t)}
      stroke={t === 0 ? '#64748b' : '#e2e8f0'}
      stroke-width={t === 0 ? 1.5 : 1}
    />
    <text x={frame.left - 5} y={frame.sy(t) + 4} font-size="12" text-anchor="end" fill="#475569"
      >{tickText(t)}</text
    >
  {/each}
  {#each marks as m (m)}
    {#if inside(m, win.xMin, win.xMax)}
      <line
        x1={frame.sx(m)}
        y1={frame.top}
        x2={frame.sx(m)}
        y2={frame.bottom}
        stroke="#94a3b8"
        stroke-dasharray="5 4"
      />
    {/if}
  {/each}
  {#each spans as s, i (i)}
    {#if s.axis}
      <line
        x1={clampX(s.from)}
        y1={axisY}
        x2={clampX(s.to)}
        y2={axisY}
        stroke={s.color}
        stroke-width="6"
        stroke-linecap="round"
      />
    {/if}
  {/each}
  <g clip-path="url(#{clipId})">
    {#each regions as r, i (i)}
      <path d={fills[i]} fill={r.color} fill-opacity={r.opacity ?? 0.25} stroke="none" />
    {/each}
    {#each traps as t, i (i)}
      {@const below = t.y0 + t.y1 < 0}
      <polygon
        points="{frame.sx(t.x0)},{frame.sy(0)} {frame.sx(t.x1)},{frame.sy(0)} {frame.sx(
          t.x1,
        )},{frame.sy(t.y1)} {frame.sx(t.x0)},{frame.sy(t.y0)}"
        fill={below ? '#fb7185' : '#38bdf8'}
        fill-opacity="0.4"
        stroke={below ? '#be123c' : '#0369a1'}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    {/each}
    {#each rects as r, i (i)}
      <rect
        x={frame.sx(r.x0)}
        y={frame.sy(Math.max(0, r.y))}
        width={Math.max(0, frame.sx(r.x1) - frame.sx(r.x0))}
        height={Math.abs(frame.sy(0) - frame.sy(r.y))}
        fill={r.y >= 0 ? '#38bdf8' : '#fb7185'}
        fill-opacity="0.45"
        stroke={r.y >= 0 ? '#0369a1' : '#be123c'}
        stroke-width="1"
      />
    {/each}
    {#each guides as g, i (i)}
      <line
        x1={frame.sx(g.x1)}
        y1={frame.sy(g.y1)}
        x2={frame.sx(g.x2)}
        y2={frame.sy(g.y2)}
        stroke={g.color ?? '#94a3b8'}
        stroke-width="1.5"
        stroke-dasharray="5 4"
      />
    {/each}
    {#each lines as l, i (i)}
      {@const e = ends(l)}
      <line {...e} stroke={l.color} stroke-width="1.5" stroke-dasharray="6 4" />
    {/each}
    {#each curves as c, i (i)}
      <path
        d={paths[i]}
        fill="none"
        stroke={c.color}
        stroke-width={c.width ?? 2.5}
        stroke-dasharray={c.dashed ? '6 4' : null}
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    {/each}
    {#if !labelPoints}
      {#each points as p, i (i)}
        {#if shown(p)}
          <circle
            cx={frame.sx(p.x)}
            cy={frame.sy(p.y)}
            r={p.r ?? 5}
            fill={p.hollow ? 'white' : p.color}
            stroke={p.color}
            stroke-width="2"
          />
        {/if}
      {/each}
    {/if}
    {#if clipChildren}
      {@render children?.(frame)}
    {/if}
  </g>
  {#if labelPoints}
    {#each points as p, i (i)}
      {#if shown(p)}
        <circle
          cx={frame.sx(p.x)}
          cy={frame.sy(p.y)}
          r={p.r ?? 5}
          fill={p.color}
          stroke="#fff"
          stroke-width="1.5"
        />
        {#if p.name}
          <text
            x={frame.sx(p.x) + 8}
            y={frame.sy(p.y) - 8}
            font-size="14"
            font-weight="700"
            fill="#0f172a"
            paint-order="stroke"
            stroke="#fff"
            stroke-width="3">{p.name}</text
          >
        {/if}
      {/if}
    {/each}
  {/if}
  {#if !clipChildren}
    {@render children?.(frame)}
  {/if}
</svg>
