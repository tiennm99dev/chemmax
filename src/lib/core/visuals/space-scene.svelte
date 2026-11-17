<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import { focusRing } from '#lib/core/ui.js';
  import { facesViewer, viewPoint } from '#lib/geom-engine/solid.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { isHidden, orientFaces } from '#lib/geom-engine/space.js';

  /**
   * A figure in space drawn the book's way (nét liền for what is seen, nét
   * đứt for what is hidden) in an orthographic view that turns by drag or
   * arrow keys. Props:
   * - `points`: named points of the figure;
   * - `faces`: faces of a convex solid by corner names, used to dash its
   *   hidden lines (a segment with `dash: 'auto'`);
   * - `segments`: lines to draw, between named points or given points;
   *   `dash` is `'auto'` (by the solid), `true` or `false` (default 'auto');
   * - `polygons`: filled shapes (planes, faces, sections), drawn first;
   * - `dots`: points to mark with a dot;
   * - `labels`: names to write next to points (default: every named point);
   * - `centre`, `radius`: the part of space kept in the frame, fixed so the
   *   scale does not jump while the figure changes;
   * - `view`: `{ yaw, pitch }` in degrees (bindable);
   * - `label`: what the drawing shows, for screen readers.
   * @type {{
   *   points: Record<string, import('#lib/geom-engine/space.js').P3>;
   *   faces?: string[][];
   *   segments?: import('#lib/geom-engine/space.js').SceneSegment[];
   *   polygons?: import('#lib/geom-engine/space.js').ScenePolygon[];
   *   dots?: Array<{ at: import('#lib/geom-engine/space.js').Spot, color?: string }>;
   *   labels?: import('#lib/geom-engine/space.js').SceneLabel[];
   *   centre?: import('#lib/geom-engine/space.js').P3;
   *   radius?: number;
   *   view?: { yaw: number, pitch: number };
   *   label: string;
   * }}
   */
  let {
    points,
    faces = [],
    segments = [],
    polygons = [],
    dots = [],
    labels,
    centre = { x: 0, y: 0, z: 0 },
    radius = 5,
    view = $bindable({ yaw: -25, pitch: 20 }),
    label,
  } = $props();

  const W = 360;
  const H = 300;
  const PAD = 18;
  const INK = '#1E293B';

  const scale = $derived((Math.min(W, H) / 2 - PAD) / radius);
  const mid = $derived(viewPoint(centre, view));

  /** @param {import('#lib/geom-engine/space.js').Spot} s @returns {import('#lib/geom-engine/space.js').P3} */
  const where = (s) => (typeof s === 'string' ? points[s] : s);
  /** @param {import('#lib/geom-engine/space.js').Spot} s */
  const at = (s) => {
    const v = viewPoint(where(s), view);
    return { x: W / 2 + scale * (v.x - mid.x), y: H / 2 + scale * (v.y - mid.y) };
  };

  const solid = $derived(faces.length ? orientFaces(points, faces) : []);
  const front = $derived(solid.map((f) => facesViewer(f.pts, view)));

  const lines = $derived(
    segments.map((s) => {
      const dash = s.dash ?? 'auto';
      const hidden = dash === 'auto' ? isHidden(where(s.from), where(s.to), solid, front) : dash;
      return { ...s, a: at(s.from), b: at(s.to), hidden };
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
        x: p.x + (l.dx ?? (dx / d) * 13),
        y: p.y + (l.dy ?? (dy / d) * 13) + 5,
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
  use:turnSolid={{ view: () => view, onturn: (v) => (view = v), options: { yawRate: 0.6 } }}
>
  <svg viewBox="0 0 {W} {H}" class="block h-auto w-full select-none" aria-hidden="true">
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
    {#each lines.filter((l) => l.hidden) as l (l.key)}
      <line
        x1={l.a.x}
        y1={l.a.y}
        x2={l.b.x}
        y2={l.b.y}
        stroke={l.color ?? INK}
        stroke-width={(l.width ?? 2) * 0.8}
        stroke-dasharray="6 5"
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
        stroke-width={l.width ?? 2}
        stroke-linecap="round"
      />
    {/each}
    {#each dots as d, i (i)}
      {@const p = at(d.at)}
      <circle cx={p.x} cy={p.y} r="4" fill={d.color ?? INK} stroke="#FFFFFF" stroke-width="1.5" />
    {/each}
    {#each writes as w, i (i)}
      <text
        x={w.x}
        y={w.y}
        text-anchor="middle"
        font-size="15"
        font-weight="700"
        fill={w.color ?? '#0F172A'}
        paint-order="stroke"
        stroke="#FFFFFF"
        stroke-width="3">{w.text}</text
      >
    {/each}
  </svg>
</div>
