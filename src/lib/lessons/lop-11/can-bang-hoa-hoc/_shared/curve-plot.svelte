<script>
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { formatNumber, tidy } from '#lib/core/number-format.js';

  /**
   * A curve plot with a grid, used for concentration against time and pH
   * against added volume. Later series may be dashed so they differ by more
   * than colour; `band` shades a range of y values (an indicator's range).
   *
   * @type {{
   *   xMax: number;
   *   xStep: number;
   *   yMax: number;
   *   yStep: number;
   *   xName: string;
   *   yName: string;
   *   label: string;
   *   series?: Array<{ points: Array<[number, number]>, color: string, dashed?: boolean }>;
   *   band?: { from: number, to: number, color: string } | null;
   *   xStart?: number;
   * }}
   */
  let {
    xMax,
    xStep,
    yMax,
    yStep,
    xName,
    yName,
    label,
    series = [],
    band = null,
    xStart = 0,
  } = $props();

  const WIDTH = 360;
  const HEIGHT = 230;
  const LEFT = 44;
  const RIGHT = 14;
  const TOP = 24;
  const BOTTOM = 40;

  const x = $derived(linear(xStart, xStart + xMax, LEFT, WIDTH - RIGHT).map);
  const y = $derived(linear(0, yMax, HEIGHT - BOTTOM, TOP).map);

  /**
   * @param {number} max
   * @param {number} step
   */
  const ticks = (max, step) =>
    Array.from({ length: Math.round(max / step) + 1 }, (_, i) => tidy(i * step));
  const xTicks = $derived(ticks(xMax, xStep));
  const yTicks = $derived(ticks(yMax, yStep));

  /** @param {Array<[number, number]>} points */
  const pathOf = (points) =>
    points.map(([px, py]) => `${tidy(x(px), 2)},${tidy(y(py), 2)}`).join(' ');
</script>

<svg
  viewBox="0 0 {WIDTH} {HEIGHT}"
  class="mx-auto block w-full max-w-md rounded-lg border border-slate-200 bg-white"
  role="img"
  aria-label={label}
>
  {#if band}
    <rect
      x={LEFT}
      width={WIDTH - RIGHT - LEFT}
      y={y(band.to)}
      height={y(band.from) - y(band.to)}
      fill={band.color}
      opacity="0.25"
    />
  {/if}
  {#each xTicks as t (t)}
    <line
      x1={x(xStart + t)}
      x2={x(xStart + t)}
      y1={TOP}
      y2={HEIGHT - BOTTOM}
      stroke="#e2e8f0"
      stroke-width="1"
    />
    <text
      x={x(xStart + t)}
      y={HEIGHT - BOTTOM + 14}
      text-anchor="middle"
      font-size="11"
      fill="#475569">{formatNumber(t)}</text
    >
  {/each}
  {#each yTicks as v (v)}
    <line x1={LEFT} x2={WIDTH - RIGHT} y1={y(v)} y2={y(v)} stroke="#e2e8f0" stroke-width="1" />
    <text x={LEFT - 5} y={y(v) + 4} text-anchor="end" font-size="11" fill="#475569"
      >{formatNumber(v)}</text
    >
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
    fill="#334155">{xName}</text
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
</svg>
