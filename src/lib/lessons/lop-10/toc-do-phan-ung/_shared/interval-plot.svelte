<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import { clamp } from '#lib/core/visuals/svg-math.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import RatePlot from './rate-plot.svelte';

  /**
   * A measured curve with two handles that choose a time interval on it, and
   * the chord between them: the steeper the chord, the larger the average rate.
   * Handles snap to the measured points and move with a pointer or the arrow
   * keys; the first stays left of the second.
   *
   * - `points`: `[t, value]` readings, in time order.
   * - `from`, `to` (bindable): indices of the chosen readings.
   * - `guides`: indices of readings to mark with dashed lines to both axes.
   * - The other props go to `rate-plot.svelte`.
   *
   * @type {{
   *   points: Array<[number, number]>;
   *   from?: number;
   *   to?: number;
   *   guides?: number[];
   *   tMax: number;
   *   tStep: number;
   *   yMax: number;
   *   yStep: number;
   *   yLabelEvery?: number;
   *   tName: string;
   *   yName: string;
   *   timeUnit: string;
   *   label: string;
   * }}
   */
  let {
    points,
    from = $bindable(0),
    to = $bindable(1),
    guides = [],
    tMax,
    tStep,
    yMax,
    yStep,
    yLabelEvery = 1,
    tName,
    yName,
    timeUnit,
    label,
  } = $props();

  const WIDTH = 360;
  const HEIGHT = 240;
  const COLOR = '#4F46E5';

  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  /**
   * The reading nearest to a time, kept on its own side of the other handle.
   * @param {number} t
   * @param {string} which 'from' or 'to'
   */
  function nearest(t, which) {
    let best = 0;
    points.forEach((p, i) => {
      if (Math.abs(p[0] - t) < Math.abs(points[best][0] - t)) best = i;
    });
    return which === 'from' ? clamp(best, 0, to - 1) : clamp(best, from + 1, points.length - 1);
  }

  /**
   * @param {string} which 'from' or 'to'
   * @param {number} index
   */
  function place(which, index) {
    if (which === 'from') from = index;
    else to = index;
  }

  /**
   * @param {{ toT: (px: number) => number }} scale
   * @param {string} which 'from' or 'to'
   * @returns {import('#lib/actions/draggable.svelte.js').DraggableParams}
   */
  function handleParams(scale, which) {
    const point = { x: 0, y: 0 };
    return {
      point,
      svg: () => svgEl ?? null,
      viewBox: { w: WIDTH, h: HEIGHT },
      pad: 0,
      onChange: () => place(which, nearest(scale.toT(point.x), which)),
      onKeyMove: (dx, dy) => {
        const index = which === 'from' ? from : to;
        const move = dx !== 0 ? dx : -dy;
        const low = which === 'from' ? 0 : from + 1;
        const high = which === 'from' ? to - 1 : points.length - 1;
        place(which, clamp(index + move, low, high));
      },
    };
  }

  /** @param {number} index */
  const timeText = (index) => `${formatNumber(points[index][0])} ${timeUnit}`;
</script>

<RatePlot
  {tMax}
  {tStep}
  {yMax}
  {yStep}
  {yLabelEvery}
  {tName}
  {yName}
  {label}
  series={[{ points, color: '#94a3b8' }]}
  interactive
  bind:svgEl
>
  {#snippet children(scale)}
    {#each points as p (p[0])}
      <circle cx={scale.x(p[0])} cy={scale.y(p[1])} r="3" fill="#64748b" />
    {/each}
    {#if guides.length > 0}
      {#each guides as index (index)}
        <polyline
          points="{scale.x(0)},{scale.y(points[index][1])} {scale.x(points[index][0])},{scale.y(
            points[index][1],
          )} {scale.x(points[index][0])},{scale.y(0)}"
          fill="none"
          stroke="#D7263D"
          stroke-width="1.5"
          stroke-dasharray="4 3"
        />
      {/each}
    {/if}
    <line
      x1={scale.x(points[from][0])}
      y1={scale.y(points[from][1])}
      x2={scale.x(points[to][0])}
      y2={scale.y(points[to][1])}
      stroke={COLOR}
      stroke-width="3"
    />
    {#each ['from', 'to'] as which (which)}
      {@const index = which === 'from' ? from : to}
      <g
        class="drag-handle cursor-grab outline-none"
        role="slider"
        tabindex="0"
        aria-label={which === 'from' ? 'Thời điểm đầu của khoảng' : 'Thời điểm cuối của khoảng'}
        aria-valuemin={0}
        aria-valuemax={points.length - 1}
        aria-valuenow={index}
        aria-valuetext={timeText(index)}
        use:draggable={handleParams(scale, which)}
      >
        <circle
          class="drag-knob"
          cx={scale.x(points[index][0])}
          cy={scale.y(points[index][1])}
          r="8"
          fill={which === 'from' ? COLOR : '#1B998B'}
          stroke="white"
          stroke-width="2"
        />
      </g>
    {/each}
  {/snippet}
</RatePlot>
