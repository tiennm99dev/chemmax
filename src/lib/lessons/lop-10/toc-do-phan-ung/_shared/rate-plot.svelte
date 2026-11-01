<script>
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { formatNumber, tidy } from '#lib/core/number-format.js';

  /**
   * A value-against-time plot with a grid: concentration or gas volume against
   * time. Series are polylines, later ones dashed so they differ by more than
   * colour. The `children` snippet draws on top and receives the scale.
   *
   * @type {{
   *   tMax: number;
   *   tStep: number;
   *   yMax: number;
   *   yStep: number;
   *   yLabelEvery?: number;
   *   tName: string;
   *   yName: string;
   *   label: string;
   *   series?: Array<{ points: Array<[number, number]>, color: string, dashed?: boolean }>;
   *   interactive?: boolean;
   *   svgEl?: SVGSVGElement;
   *   children?: import('svelte').Snippet<[{ x: (t: number) => number, y: (v: number) => number, toT: (px: number) => number }]>;
   * }}
   */
  let {
    tMax,
    tStep,
    yMax,
    yStep,
    yLabelEvery = 1,
    tName,
    yName,
    label,
    series = [],
    interactive = false,
    svgEl = $bindable(),
    children,
  } = $props();

  const WIDTH = 360;
  const HEIGHT = 240;
  const LEFT = 44;
  const RIGHT = 14;
  const TOP = 24;
  const BOTTOM = 40;

  const scale = $derived.by(() => {
    const time = linear(0, tMax, LEFT, WIDTH - RIGHT);
    const value = linear(0, yMax, HEIGHT - BOTTOM, TOP);
    return { x: time.map, y: value.map, toT: time.invert };
  });

  /**
   * @param {number} max
   * @param {number} step
   */
  const ticks = (max, step) =>
    Array.from({ length: Math.round(max / step) + 1 }, (_, i) => tidy(i * step));
  const tTicks = $derived(ticks(tMax, tStep));
  const yTicks = $derived(ticks(yMax, yStep));

  /** @param {Array<[number, number]>} points */
  const pathOf = (points) =>
    points.map(([t, v]) => `${tidy(scale.x(t), 2)},${tidy(scale.y(v), 2)}`).join(' ');
</script>

<svg
  bind:this={svgEl}
  viewBox="0 0 {WIDTH} {HEIGHT}"
  class="mx-auto block w-full max-w-md select-none rounded-lg border border-slate-200 bg-white"
  style:touch-action={interactive ? 'none' : null}
  role={interactive ? 'group' : 'img'}
  aria-label={label}
>
  {#each tTicks as t (t)}
    <line
      x1={scale.x(t)}
      x2={scale.x(t)}
      y1={TOP}
      y2={HEIGHT - BOTTOM}
      stroke="#e2e8f0"
      stroke-width="1"
    />
    <text x={scale.x(t)} y={HEIGHT - BOTTOM + 14} text-anchor="middle" font-size="11" fill="#475569"
      >{formatNumber(t)}</text
    >
  {/each}
  {#each yTicks as v, i (v)}
    <line
      x1={LEFT}
      x2={WIDTH - RIGHT}
      y1={scale.y(v)}
      y2={scale.y(v)}
      stroke={i % yLabelEvery === 0 ? '#cbd5e1' : '#e2e8f0'}
      stroke-width="1"
    />
    {#if i % yLabelEvery === 0}
      <text x={LEFT - 5} y={scale.y(v) + 4} text-anchor="end" font-size="11" fill="#475569"
        >{formatNumber(v)}</text
      >
    {/if}
  {/each}
  <line x1={LEFT} x2={LEFT} y1={TOP} y2={HEIGHT - BOTTOM} stroke="#334155" stroke-width="1.5" />
  <line
    x1={LEFT}
    x2={WIDTH - RIGHT}
    y1={HEIGHT - BOTTOM}
    y2={HEIGHT - BOTTOM}
    stroke="#334155"
    stroke-width="1.5"
  />
  <text x="6" y={TOP - 9} font-size="11" font-weight="600" fill="#334155">{yName}</text>
  <text
    x={WIDTH - RIGHT}
    y={HEIGHT - 8}
    text-anchor="end"
    font-size="11"
    font-weight="600"
    fill="#334155">{tName}</text
  >
  {#each series as s, i (i)}
    <polyline
      points={pathOf(s.points)}
      fill="none"
      stroke={s.color}
      stroke-width="2.5"
      stroke-linejoin="round"
      stroke-dasharray={s.dashed ? '6 4' : null}
    />
  {/each}
  {@render children?.(scale)}
</svg>
