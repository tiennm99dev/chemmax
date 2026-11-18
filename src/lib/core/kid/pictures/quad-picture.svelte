<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { labelSpot } from '#lib/geom-engine/plane.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { CORNERS, GRID, quadLabel } from './quad-shapes.js';

  /**
   * A still rectangle, parallelogram or rhombus on squared paper with its
   * vertex names. No right-angle marks or equal-length ticks are drawn, and
   * screen readers hear only "Hình tứ giác ABCD", so the picture never names
   * the shape a question asks about.
   * @type {{ shape: import('./quad-shapes.js').QuadShape, names: readonly string[] }}
   */
  let { shape, names } = $props();

  const U = 36;
  const pts = $derived(CORNERS[shape].map((p) => ({ x: p.x * U, y: p.y * U })));
  const centre = $derived({
    x: pts.reduce((s, p) => s + p.x, 0) / 4,
    y: pts.reduce((s, p) => s + p.y, 0) / 4,
  });
</script>

<svg
  viewBox="0 0 {GRID.w * U} {GRID.h * U}"
  class="mx-auto block w-full max-w-xs select-none rounded-xl border border-slate-200 bg-white"
  role="img"
  aria-label={quadLabel(names)}
>
  {#each { length: GRID.w + 1 } as _, i (i)}
    <line x1={i * U} y1="0" x2={i * U} y2={GRID.h * U} stroke="#E2E8F0" stroke-width="1" />
  {/each}
  {#each { length: GRID.h + 1 } as _, i (i)}
    <line x1="0" y1={i * U} x2={GRID.w * U} y2={i * U} stroke="#E2E8F0" stroke-width="1" />
  {/each}
  <polygon
    points={pointsAttr(pts)}
    fill="#E0E7FF"
    stroke="#4338CA"
    stroke-width="4"
    stroke-linejoin="round"
  />
  {#each pts as p, i (i)}
    {@const at = labelSpot(p, centre, 18, GRID.w * U, GRID.h * U, 12)}
    <circle cx={p.x} cy={p.y} r="4" fill="#312E81" />
    <text
      x={at.x}
      y={at.y}
      text-anchor="middle"
      dominant-baseline="central"
      font-size="22"
      font-weight="700"
      fill="#1E1B4B">{names[i]}</text
    >
  {/each}
</svg>
