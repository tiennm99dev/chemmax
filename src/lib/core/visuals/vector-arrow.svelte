<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  /**
   * A vector drawn inside an SVG: a shaft from `from` to `to` (SVG points)
   * with a filled head, and its name written with a small arrow above it, the
   * book's $\vec a$ or $\overrightarrow{AB}$. A zero vector is drawn as a dot.
   *
   * - `name`: the vector's name ('a', 'AB'); empty draws no label.
   * - `side`: 1 puts the name left of the direction of travel, -1 right.
   * - `dashed`: a dashed shaft, for helper vectors.
   *
   * @type {{
   *   from: { x: number, y: number };
   *   to: { x: number, y: number };
   *   color?: string;
   *   width?: number;
   *   name?: string;
   *   side?: 1 | -1;
   *   dashed?: boolean;
   *   opacity?: number;
   * }}
   */
  let {
    from,
    to,
    color = '#4f46e5',
    width = 2.5,
    name = '',
    side = 1,
    dashed = false,
    opacity = 1,
  } = $props();

  const HEAD = 11;
  const dx = $derived(to.x - from.x);
  const dy = $derived(to.y - from.y);
  const length = $derived(Math.hypot(dx, dy));
  const ux = $derived(length ? dx / length : 1);
  const uy = $derived(length ? dy / length : 0);
  const head = $derived(Math.min(HEAD, length * 0.6));
  // Where the shaft stops, so its square end hides under the head.
  const end = $derived({ x: to.x - ux * head * 0.7, y: to.y - uy * head * 0.7 });
  const headPoints = $derived(
    [
      [to.x, to.y],
      [to.x - ux * head - uy * head * 0.45, to.y - uy * head + ux * head * 0.45],
      [to.x - ux * head + uy * head * 0.45, to.y - uy * head - ux * head * 0.45],
    ]
      .map(([x, y]) => `${x},${y}`)
      .join(' '),
  );
  const labelAt = $derived({
    x: (from.x + to.x) / 2 + uy * 16 * side,
    y: (from.y + to.y) / 2 - ux * 16 * side + 5,
  });
  const nameWidth = $derived(name.length * 8 + 2);
</script>

<g style="pointer-events:none" {opacity}>
  {#if length < 0.5}
    <circle cx={from.x} cy={from.y} r="4.5" fill={color} />
  {:else}
    <line
      x1={from.x}
      y1={from.y}
      x2={end.x}
      y2={end.y}
      stroke={color}
      stroke-width={width}
      stroke-dasharray={dashed ? '6 4' : null}
    />
    <polygon points={headPoints} fill={color} />
  {/if}
  {#if name}
    <text
      x={labelAt.x}
      y={labelAt.y}
      font-size="14"
      font-style="italic"
      font-weight="700"
      text-anchor="middle"
      fill={color}
      stroke="#fff"
      stroke-width="3"
      paint-order="stroke">{name}</text
    >
    <path
      d="M {labelAt.x - nameWidth / 2} {labelAt.y - 14} H {labelAt.x +
        nameWidth / 2} m -4 -3 l 4 3 l -4 3"
      fill="none"
      stroke={color}
      stroke-width="1.4"
    />
  {/if}
</g>
