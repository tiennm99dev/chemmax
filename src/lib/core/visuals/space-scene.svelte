<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import { focusRing } from '#lib/core/ui.js';
  import { facesViewer, viewPoint } from '#lib/geom-engine/solid.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { isHidden, orientFaces } from '#lib/geom-engine/space.js';

  /** @typedef {import('#lib/geom-engine/space.js').P3} P3 */
  /** @typedef {import('#lib/geom-engine/space.js').Spot} Spot */

  /**
   * A figure in space drawn the book's way (nét liền for what is seen, nét
   * đứt for what is hidden) in an orthographic view that turns by drag or
   * arrow keys. Props:
   * - `points`: named points of the figure;
   * - `faces`: faces of a convex solid by corner names, used to dash its
   *   hidden lines (a segment with `dash: 'auto'`);
   * - `segments`: lines to draw, between named points or given points;
   *   `dash` is `'auto'` (by the solid), `true` or `false` (default 'auto');
   * - `arrows`: vectors from `from` to `to`, with an arrowhead at `to`;
   * - `axes`: half-length of the axes Ox, Oy, Oz drawn through the origin
   *   with their names (0 draws none);
   * - `discs`: spheres, drawn first as their outline circle (the view is
   *   orthographic, so a sphere of radius r always shows as a circle of
   *   radius r);
   * - `polygons`: filled shapes (planes, faces, sections, angle fans);
   * - `dots`: points to mark with a dot;
   * - `labels`: names to write next to points (default: every named point);
   * - `centre`, `radius`: the part of space kept in the frame, fixed so the
   *   scale does not jump while the figure changes;
   * - `view`: `{ yaw, pitch }` in degrees (bindable);
   * - `look`: `'figure'` (default) for a solid of the grade 11 chapters, or
   *   `'coordinates'` for vectors on the axes of the grade 12 chapters: a
   *   taller frame, finer lines and labels, and a view that also turns to
   *   look from below the ground;
   * - `label`: what the drawing shows, for screen readers.
   * @type {{
   *   points?: Record<string, P3>;
   *   faces?: string[][];
   *   segments?: import('#lib/geom-engine/space.js').SceneSegment[];
   *   arrows?: import('#lib/geom-engine/space.js').SceneSegment[];
   *   axes?: number;
   *   discs?: import('#lib/geom-engine/space.js').SceneDisc[];
   *   polygons?: import('#lib/geom-engine/space.js').ScenePolygon[];
   *   dots?: import('#lib/geom-engine/space.js').SceneDot[];
   *   labels?: import('#lib/geom-engine/space.js').SceneLabel[];
   *   centre?: P3;
   *   radius?: number;
   *   view?: { yaw: number, pitch: number };
   *   look?: 'figure' | 'coordinates';
   *   label: string;
   * }}
   */
  let {
    points = {},
    faces = [],
    segments = [],
    arrows = [],
    axes = 0,
    discs = [],
    polygons = [],
    dots = [],
    labels,
    centre = { x: 0, y: 0, z: 0 },
    radius = 5,
    view = $bindable({ yaw: -25, pitch: 20 }),
    look = 'figure',
    label,
  } = $props();

  /** The two looks: frame, line widths, dash pattern and label size. */
  const LOOKS = {
    figure: { H: 300, PAD: 18, line: 2, hidden: 0.8, dash: '6 5', text: 15, push: 13 },
    coordinates: { H: 320, PAD: 20, line: 1.6, hidden: 1, dash: '5 4', text: 14, push: 14 },
  };
  const W = 360;
  const INK = '#1E293B';
  const AXIS = '#64748B';

  const style = $derived(LOOKS[look]);
  const H = $derived(style.H);
  const turnOptions = $derived(
    look === 'coordinates' ? { yawRate: 0.6, minPitch: -30 } : { yawRate: 0.6 },
  );
  const scale = $derived((Math.min(W, H) / 2 - style.PAD) / radius);
  const mid = $derived(viewPoint(centre, view));

  /** @param {Spot} s @returns {P3} */
  const where = (s) => (typeof s === 'string' ? points[s] : s);
  /** @param {Spot} s */
  const at = (s) => {
    const v = viewPoint(where(s), view);
    return { x: W / 2 + scale * (v.x - mid.x), y: H / 2 + scale * (v.y - mid.y) };
  };

  /**
   * The arrowhead at b of a line drawn from a, or null when the line is too
   * short on screen to carry one.
   * @param {{ x: number, y: number }} a @param {{ x: number, y: number }} b
   * @param {number} size
   */
  function head(a, b, size) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const l = Math.hypot(dx, dy);
    if (l < size * 0.8) return null;
    const ux = dx / l;
    const uy = dy / l;
    const base = { x: b.x - ux * size, y: b.y - uy * size };
    return pointsAttr([
      b,
      { x: base.x - uy * size * 0.45, y: base.y + ux * size * 0.45 },
      { x: base.x + uy * size * 0.45, y: base.y - ux * size * 0.45 },
    ]);
  }

  const solid = $derived(faces.length ? orientFaces(points, faces) : []);
  const front = $derived(solid.map((f) => facesViewer(f.pts, view)));

  const lines = $derived(
    segments.map((s) => {
      const dash = s.dash ?? 'auto';
      const hidden = dash === 'auto' ? isHidden(where(s.from), where(s.to), solid, front) : dash;
      return { ...s, a: at(s.from), b: at(s.to), hidden };
    }),
  );

  const axisLines = $derived.by(() => {
    if (!axes) return [];
    const o = { x: 0, y: 0, z: 0 };
    return /** @type {const} */ (['x', 'y', 'z']).map((k) => {
      const a = at({ ...o, [k]: -axes * 0.35 });
      const b = at({ ...o, [k]: axes });
      return { key: k, a, b, head: head(a, b, 10) };
    });
  });

  const drawnArrows = $derived(
    arrows.map((l) => {
      const a = at(l.from);
      const b = at(l.to);
      return { ...l, a, b, head: head(a, b, 9 + (l.width ?? 2.5)) };
    }),
  );

  const writes = $derived.by(() => {
    /** @type {import('#lib/geom-engine/space.js').SceneLabel[]} */
    const list = labels ?? Object.keys(points).map((k) => ({ text: k, at: k }));
    const c = { x: W / 2, y: H / 2 };
    return list.map((l) => {
      const p = at(l.at);
      const dx = p.x - c.x;
      const dy = p.y - c.y;
      const d = Math.hypot(dx, dy) || 1;
      return {
        ...l,
        x: p.x + (l.dx ?? (dx / d) * style.push),
        y: p.y + (l.dy ?? (dy / d) * style.push) + 5,
      };
    });
  });
</script>

<div
  role="slider"
  tabindex="0"
  aria-label="{label}. Kéo hoặc dùng phím mũi tên để xoay hình"
  aria-valuemin={-180}
  aria-valuemax={180}
  aria-valuenow={Math.round(view.yaw)}
  aria-valuetext="Xoay {Math.round(view.yaw)} độ, nhìn từ trên xuống {Math.round(view.pitch)} độ"
  class="cursor-grab touch-none rounded-xl border border-slate-200 bg-white active:cursor-grabbing {focusRing}"
  use:turnSolid={{ view: () => view, onturn: (v) => (view = v), options: turnOptions }}
>
  <svg viewBox="0 0 {W} {H}" class="block h-auto w-full select-none" aria-hidden="true">
    {#each discs as d (d.key)}
      {@const p = at(d.at)}
      <circle
        cx={p.x}
        cy={p.y}
        r={d.r * scale}
        fill={d.fill}
        fill-opacity={d.opacity ?? 0.15}
        stroke={d.stroke ?? 'none'}
        stroke-width="1.4"
      />
    {/each}
    {#each polygons as g (g.key)}
      <polygon
        points={pointsAttr(g.pts.map(at))}
        fill={g.fill}
        fill-opacity={g.opacity ?? 0.2}
        stroke={g.stroke ?? 'none'}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    {/each}
    {#each axisLines as l (l.key)}
      <line x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y} stroke={AXIS} stroke-width="1.4" />
      {#if l.head}<polygon points={l.head} fill={AXIS} />{/if}
      <text
        x={l.b.x + 8}
        y={l.b.y - 6}
        font-size="15"
        font-style="italic"
        font-weight="600"
        fill={AXIS}>{l.key}</text
      >
    {/each}
    {#each lines.filter((l) => l.hidden) as l (l.key)}
      <line
        x1={l.a.x}
        y1={l.a.y}
        x2={l.b.x}
        y2={l.b.y}
        stroke={l.color ?? INK}
        stroke-width={(l.width ?? style.line) * style.hidden}
        stroke-dasharray={style.dash}
        stroke-linecap="round"
      />
    {/each}
    {#each lines.filter((l) => !l.hidden) as l (l.key)}
      <line
        x1={l.a.x}
        y1={l.a.y}
        x2={l.b.x}
        y2={l.b.y}
        stroke={l.color ?? INK}
        stroke-width={l.width ?? style.line}
        stroke-linecap="round"
      />
    {/each}
    {#each drawnArrows as l (l.key)}
      <line
        x1={l.a.x}
        y1={l.a.y}
        x2={l.b.x}
        y2={l.b.y}
        stroke={l.color ?? INK}
        stroke-width={l.width ?? 2.5}
        stroke-dasharray={l.dash === true ? '6 5' : undefined}
        stroke-linecap="round"
      />
      {#if l.head}<polygon points={l.head} fill={l.color ?? INK} />{/if}
    {/each}
    {#each dots as d, i (d.key ?? i)}
      {@const p = at(d.at)}
      <circle
        cx={p.x}
        cy={p.y}
        r={d.r ?? 4}
        fill={d.color ?? INK}
        stroke="#FFFFFF"
        stroke-width="1.5"
      />
    {/each}
    {#each writes as w, i (w.key ?? i)}
      <text
        x={w.x}
        y={w.y}
        text-anchor="middle"
        font-size={style.text}
        font-weight="700"
        fill={w.color ?? '#0F172A'}
        paint-order="stroke"
        stroke="#FFFFFF"
        stroke-width="3">{w.text}</text
      >
    {/each}
  </svg>
</div>
