<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { niceAxis } from '#lib/stats-engine/ticks.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { groupText } from '#lib/stats-engine/grouped.js';

  /**
   * The frequency chart of a grouped sample: one column per group, standing
   * side by side over its interval on a number axis, so a value inside a
   * group has a place along the bottom, with the centre or the spread drawn
   * over it.
   *
   * - `groups`: the groups and their frequencies.
   * - `title`: what the chart shows, the start of its accessible name.
   * - `unit`: the unit of the values, written after the axis ('cm'); left
   *   out under a `band`, whose caption takes its place.
   * - `highlight`: indices of groups drawn in the accent colour.
   * - `shades`: `{ index, fraction, opacity? }` darkens the left `fraction` of
   *   a column, the part of the group's values that lies below a quartile.
   * - `markers`: `{ x, label, color }` dashed vertical lines at estimated
   *   values; `label` is the whole caption, such as 'Mₑ ≈ 53,44'.
   * - `modeIndex`: draws the two crossing lines inside that column whose
   *   meeting point is the mode.
   * - `band`: `{ from, to, label, color }` a tinted strip across the plot
   *   between two values, with a double arrow and its caption under the axis
   *   (the interquartile range, or x̄ − s to x̄ + s).
   * - `span`: `{ from, to, label }` a double arrow above the columns from the
   *   first to the last group end (the range R).
   * - `midpoints`: a dot at the middle of each column bottom (giá trị đại diện).
   * - `layout`: 'fit' (the default) keeps the plot 170 tall and grows the box
   *   to make room for the markers, the span and the band; 'fixed' keeps the
   *   box 240 tall and shortens the plot as markers are added. `band` and
   *   `span` need 'fit'.
   * @type {{
   *   groups: import('#lib/stats-engine/grouped.js').Group[];
   *   title: string;
   *   unit?: string;
   *   highlight?: number[];
   *   shades?: Array<{ index: number, fraction: number, opacity?: number }>;
   *   markers?: Array<{ x: number, label: string, color: string }>;
   *   modeIndex?: number | null;
   *   band?: { from: number, to: number, label: string, color: string } | null;
   *   span?: { from: number, to: number, label: string } | null;
   *   midpoints?: boolean;
   *   layout?: 'fit' | 'fixed';
   * }}
   */
  let {
    groups,
    title,
    unit = '',
    highlight = [],
    shades = [],
    markers = [],
    modeIndex = null,
    band = null,
    span = null,
    midpoints = false,
    layout = 'fit',
  } = $props();

  const W = 360;
  const LEFT = 34;
  const RIGHT = 14;
  const fixed = $derived(layout === 'fixed');
  const SPAN_ROOM = $derived(span ? 18 : 0);
  const TOP = $derived(
    20 + SPAN_ROOM + (markers.length && !fixed ? 10 : 0) + 14 * Math.max(0, markers.length - 1),
  );
  const AXIS_Y = $derived(fixed ? 200 : TOP + 170);
  const H = $derived(fixed ? 240 : AXIS_Y + (band ? 46 : 26));

  const lo = $derived(groups[0]?.lo ?? 0);
  const hi = $derived(groups.at(-1)?.hi ?? 1);
  const axis = $derived(niceAxis(0, Math.max(4, ...groups.map((g) => g.count)), 4));
  const sx = $derived(linear(lo, hi, LEFT, W - RIGHT));
  const sy = $derived(linear(0, axis.max, AXIS_Y, TOP));
  /** @param {number} v */
  const x = (v) => sx.map(v);
  /** @param {number} v */
  const y = (v) => sy.map(v);
  const every = $derived(groups.length > 12 ? 3 : groups.length > 7 ? 2 : 1);

  const label = $derived(
    `${title}. ` +
      groups.map((g) => `Nhóm ${groupText(g)}: tần số ${g.count}`).join('; ') +
      (span ? `. ${span.label}` : '') +
      (band ? `. ${band.label}` : '') +
      (markers.length ? `. ${markers.map((m) => m.label).join('; ')}` : ''),
  );

  const mode = $derived.by(() => {
    if (modeIndex === null || !groups[modeIndex]) return null;
    const g = groups[modeIndex];
    const prev = groups[modeIndex - 1]?.count ?? 0;
    const next = groups[modeIndex + 1]?.count ?? 0;
    return [
      { x1: x(g.hi), y1: y(g.count), x2: x(g.lo), y2: y(prev) },
      { x1: x(g.lo), y1: y(g.count), x2: x(g.hi), y2: y(next) },
    ];
  });

  /** @param {number} x1 @param {number} x2 @param {number} yy */
  const arrow = (x1, x2, yy) =>
    `M${x1},${yy} L${x2},${yy} M${x1 + 6},${yy - 4} L${x1},${yy} L${x1 + 6},${yy + 4} M${x2 - 6},${yy - 4} L${x2},${yy} L${x2 - 6},${yy + 4}`;
</script>

<svg
  viewBox="0 0 {W} {H}"
  class="block w-full select-none rounded-lg border border-slate-200 bg-white"
  role="img"
  aria-label={label}
>
  {#each axis.ticks as t (t)}
    <line x1={LEFT} y1={y(t)} x2={W - RIGHT} y2={y(t)} stroke="#e2e8f0" />
    <text x={LEFT - 5} y={y(t) + 4} font-size="12" text-anchor="end" fill="#475569">{t}</text>
  {/each}

  {#if band}
    <rect
      x={x(band.from)}
      y={TOP}
      width={Math.max(0, x(band.to) - x(band.from))}
      height={AXIS_Y - TOP}
      fill={band.color}
      opacity="0.12"
    />
  {/if}

  {#each groups as g, i (i)}
    {@const on = highlight.includes(i)}
    <rect
      x={x(g.lo)}
      y={y(g.count)}
      width={Math.max(0, x(g.hi) - x(g.lo))}
      height={Math.max(0, y(0) - y(g.count))}
      fill={on ? '#fde68a' : '#c7d2fe'}
      stroke={on ? '#b45309' : '#4f46e5'}
      stroke-width={on ? 2 : 1}
    />
    {#each shades.filter((s) => s.index === i && g.count > 0) as s, j (j)}
      <rect
        x={x(g.lo)}
        y={y(g.count)}
        width={Math.max(0, (x(g.hi) - x(g.lo)) * s.fraction)}
        height={Math.max(0, y(0) - y(g.count))}
        fill="#f59e0b"
        opacity={s.opacity ?? 0.45}
      />
    {/each}
    {#if g.count > 0}
      <text
        x={(x(g.lo) + x(g.hi)) / 2}
        y={y(g.count) - 4}
        font-size="12"
        text-anchor="middle"
        fill="#1e293b">{g.count}</text
      >
    {/if}
    {#if midpoints && g.count > 0}
      <circle cx={(x(g.lo) + x(g.hi)) / 2} cy={y(0)} r="4" fill="#0f766e" />
    {/if}
  {/each}

  {#if mode}
    {#each mode as l, i (i)}
      <line {...l} stroke="#be123c" stroke-width="1.6" />
    {/each}
  {/if}

  <line x1={LEFT} y1={y(0)} x2={W - RIGHT} y2={y(0)} stroke="#475569" stroke-width="1.5" />
  {#each groups as g, i (i)}
    {#if i % every === 0}
      <text x={x(g.lo)} y={y(0) + 15} font-size="12" text-anchor="middle" fill="#475569"
        >{formatNumber(g.lo)}</text
      >
    {/if}
  {/each}
  {#if groups.length % every === 0}
    <text x={x(hi)} y={y(0) + 15} font-size="12" text-anchor="middle" fill="#475569"
      >{formatNumber(hi)}</text
    >
  {/if}
  {#if unit && !band}
    <text
      x={W - RIGHT}
      y={H - (fixed ? 6 : 4)}
      font-size={fixed ? 12 : 11}
      text-anchor="end"
      fill="#64748b">({unit})</text
    >
  {/if}

  {#if span}
    <path d={arrow(x(span.from), x(span.to), 14)} stroke="#334155" stroke-width="1.5" fill="none" />
    <rect x={(x(span.from) + x(span.to)) / 2 - 42} y="5" width="84" height="16" fill="white" />
    <text
      x={(x(span.from) + x(span.to)) / 2}
      y="18"
      font-size="12"
      font-weight="600"
      text-anchor="middle"
      fill="#334155">{span.label}</text
    >
  {/if}

  {#if band}
    <path
      d={arrow(x(band.from), x(band.to), AXIS_Y + 26)}
      stroke={band.color}
      stroke-width="1.5"
      fill="none"
    />
    <text
      x={(x(band.from) + x(band.to)) / 2}
      y={AXIS_Y + 42}
      font-size="12"
      font-weight="600"
      text-anchor="middle"
      fill={band.color}>{band.label}</text
    >
  {/if}

  {#each markers as m, i (i)}
    {@const flip = x(m.x) > W / 2}
    <line
      x1={x(m.x)}
      y1={y(0)}
      x2={x(m.x)}
      y2={SPAN_ROOM + 10 + 14 * i}
      stroke={m.color}
      stroke-width="2"
      stroke-dasharray="5 3"
    />
    <text
      x={x(m.x) + (flip ? -4 : 4)}
      y={SPAN_ROOM + 12 + 14 * i}
      font-size="12"
      font-weight="600"
      text-anchor={flip ? 'end' : 'start'}
      fill={m.color}>{m.label}</text
    >
  {/each}
</svg>
