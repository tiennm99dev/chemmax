// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { add3, cross3, dot3, mul3, sub3 } from '#lib/geom-engine/solid.js';

/**
 * Points, lines and planes in space for the grade 11 chapters on parallel and
 * perpendicular relations: planes through three points, where a line meets a
 * plane, how two lines lie (cắt nhau, song song, trùng nhau, chéo nhau),
 * parallel projection onto a plane, the angle between two lines and between a
 * line and a plane, the foot of a perpendicular on a plane or a line, the
 * common perpendicular of two skew lines and the hidden (dashed) lines of a
 * convex solid, drawn by `#lib/core/visuals/space-scene.svelte`. Also the
 * coordinate helpers of the grade 12 chapters: vectors given by coordinates,
 * planes by their general equation Ax + By + Cz + D = 0 (`planeValue`,
 * `planeD`, `footOnEquation`), plane patches and circles to draw;
 * `#lib/geom-engine/space-tex.js` writes them the book's way.
 *
 * Model space as in `#lib/geom-engine/solid.js`: z points up.
 */

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */
/** @typedef {{ n: P3, d: number }} Plane the points p with n · p = d */
/** @typedef {'cat' | 'song-song' | 'trung' | 'cheo'} LineRelation */
/** @typedef {string | P3} Spot a named point of a scene, or a point */
/**
 * @typedef {{ key: string, from: Spot, to: Spot, color?: string, width?: number, dash?: 'auto' | boolean }} SceneSegment
 * @typedef {{ key: string, pts: Spot[], fill: string, opacity?: number, stroke?: string }} ScenePolygon
 * @typedef {{ text: string, at: Spot, color?: string, dx?: number, dy?: number, key?: string }} SceneLabel
 * @typedef {{ at: Spot, color?: string, r?: number, key?: string }} SceneDot
 * @typedef {{ key: string, at: P3, r: number, fill: string, opacity?: number, stroke?: string }} SceneDisc
 */

export const EPS = 1e-7;

/** @param {number} x @param {number} y @param {number} z @returns {P3} */
export const P = (x = 0, y = 0, z = 0) => ({ x, y, z });

/** @param {P3} a */
export const len3 = (a) => Math.hypot(a.x, a.y, a.z);

/** @param {P3} a @param {P3} b */
export const dist3 = (a, b) => len3(sub3(a, b));

/** @param {P3} a @param {P3} b @param {number} t */
export const lerp3 = (a, b, t) => add3(a, mul3(sub3(b, a), t));

/** @param {P3} a @param {P3} b */
export const mid3 = (a, b) => lerp3(a, b, 0.5);

/** @param {P3} a */
export const unit3 = (a) => mul3(a, 1 / len3(a));

const DEG = 180 / Math.PI;

/**
 * The centroid of some points.
 * @param {P3[]} pts
 */
export function centroid3(pts) {
  const s = pts.reduce((acc, p) => add3(acc, p), P());
  return mul3(s, 1 / pts.length);
}

/**
 * The plane through three points, with a unit normal, or null when they are
 * on one line.
 * @param {P3} a @param {P3} b @param {P3} c
 * @returns {Plane | null}
 */
export function planeThrough(a, b, c) {
  const n = cross3(sub3(b, a), sub3(c, a));
  const l = len3(n);
  if (l < EPS) return null;
  const u = mul3(n, 1 / l);
  return { n: u, d: dot3(u, a) };
}

/**
 * Signed distance from a plane (positive on the side its normal points to).
 * @param {P3} p @param {Plane} plane
 */
export const side = (p, plane) => dot3(plane.n, p) - plane.d;

/**
 * True when a point lies on a plane.
 * @param {P3} p @param {Plane} plane
 */
export const onPlane = (p, plane, eps = 1e-6) => Math.abs(side(p, plane)) < eps;

/**
 * The foot of the perpendicular from a point to a plane: its orthogonal
 * projection (hình chiếu vuông góc).
 * @param {P3} p @param {Plane} plane
 */
export const footOnPlane = (p, plane) => sub3(p, mul3(plane.n, side(p, plane)));

/**
 * The foot of the perpendicular from a point to the line ab.
 * @param {P3} p @param {P3} a @param {P3} b
 */
export function footOnLine(p, a, b) {
  const u = sub3(b, a);
  return lerp3(a, b, dot3(sub3(p, a), u) / dot3(u, u));
}

/**
 * How the line a1a2 lies against the line b1b2.
 * @param {P3} a1 @param {P3} a2 @param {P3} b1 @param {P3} b2
 * @returns {LineRelation}
 */
export function lineRelation(a1, a2, b1, b2) {
  const u = sub3(a2, a1);
  const v = sub3(b2, b1);
  const w = sub3(b1, a1);
  const scale = len3(u) * len3(v);
  const c = cross3(u, v);
  if (len3(c) < 1e-9 * scale) {
    return len3(cross3(u, w)) < 1e-9 * len3(u) * Math.max(1, len3(w)) ? 'trung' : 'song-song';
  }
  return Math.abs(dot3(c, w)) < 1e-9 * scale * Math.max(1, len3(w)) ? 'cat' : 'cheo';
}

/**
 * The common point of two lines that cut each other, or null otherwise.
 * @param {P3} a1 @param {P3} a2 @param {P3} b1 @param {P3} b2
 * @returns {P3 | null}
 */
export function meetLines(a1, a2, b1, b2) {
  if (lineRelation(a1, a2, b1, b2) !== 'cat') return null;
  const u = sub3(a2, a1);
  const v = sub3(b2, b1);
  const c = cross3(u, v);
  const t = dot3(cross3(sub3(b1, a1), v), c) / dot3(c, c);
  return lerp3(a1, a2, t);
}

/**
 * The angle between two lines with directions u and v, in degrees, from 0°
 * to 90° as the book defines it.
 * @param {P3} u @param {P3} v
 */
export function lineAngle(u, v) {
  const cos = Math.abs(dot3(u, v)) / (len3(u) * len3(v));
  return Math.acos(Math.min(1, cos)) * DEG;
}

/**
 * The angle between a line with direction u and a plane, in degrees: 90°
 * when the line is perpendicular to the plane, else the angle between the
 * line and its projection.
 * @param {P3} u @param {Plane} plane
 */
export function linePlaneAngle(u, plane) {
  const sin = Math.abs(dot3(u, plane.n)) / len3(u);
  return Math.asin(Math.min(1, sin)) * DEG;
}

/**
 * Where the line through p and q meets a plane: the parameter t of
 * p + t (q − p) and the point, or null when the line is parallel to the plane
 * or lies in it.
 * @param {P3} p @param {P3} q @param {Plane} plane
 * @returns {{ t: number, point: P3 } | null}
 */
export function meetPlane(p, q, plane) {
  const dir = sub3(q, p);
  const den = dot3(plane.n, dir);
  if (Math.abs(den) < EPS * Math.max(1, len3(dir))) return null;
  const t = (plane.d - dot3(plane.n, p)) / den;
  return { t, point: lerp3(p, q, t) };
}

/**
 * The parallel projection of a point onto a plane along a direction, or null
 * when the direction is parallel to the plane.
 * @param {P3} p @param {P3} dir @param {Plane} plane
 * @returns {P3 | null}
 */
export function projectAlong(p, dir, plane) {
  const hit = meetPlane(p, add3(p, dir), plane);
  return hit ? hit.point : null;
}

/**
 * The direction with turn `azimuth` (from the x axis, degrees) and rise
 * `elevation` above the ground (degrees), pointing downwards: a light ray
 * coming down at that angle.
 * @param {number} azimuth @param {number} elevation
 * @returns {P3}
 */
export function rayDirection(azimuth, elevation) {
  const a = (azimuth * Math.PI) / 180;
  const e = (elevation * Math.PI) / 180;
  return { x: Math.cos(a) * Math.cos(e), y: Math.sin(a) * Math.cos(e), z: -Math.sin(e) };
}

/**
 * The angle at `b` of the triangle abc, in degrees.
 * @param {P3} a @param {P3} b @param {P3} c
 */
export function angle3(a, b, c) {
  const u = sub3(a, b);
  const v = sub3(c, b);
  const cos = dot3(u, v) / (len3(u) * len3(v));
  return Math.acos(Math.max(-1, Math.min(1, cos))) * DEG;
}

/**
 * The common perpendicular of the lines a1a2 and b1b2 that are not
 * parallel: its ends I on a1a2 and J on b1b2, their parameters s and t along
 * each line (a1 + s (a2 − a1)) and the distance IJ.
 * @param {P3} a1 @param {P3} a2 @param {P3} b1 @param {P3} b2
 * @returns {{ I: P3, J: P3, s: number, t: number, d: number } | null}
 */
export function commonPerpendicular(a1, a2, b1, b2) {
  const u = sub3(a2, a1);
  const v = sub3(b2, b1);
  const w = sub3(a1, b1);
  const a = dot3(u, u);
  const b = dot3(u, v);
  const c = dot3(v, v);
  const den = a * c - b * b;
  if (den < EPS * a * c) return null;
  const d = dot3(u, w);
  const e = dot3(v, w);
  const s = (b * e - c * d) / den;
  const t = (a * e - b * d) / den;
  const I = lerp3(a1, a2, s);
  const J = lerp3(b1, b2, t);
  return { I, J, s, t, d: dist3(I, J) };
}

/**
 * The faces of a convex solid with their corners ordered counter-clockwise
 * seen from outside, so `facesViewer` can tell front from back. Each face is
 * given by the names of its corners in order around it.
 * @param {Record<string, P3>} points
 * @param {string[][]} faces
 * @returns {{ names: string[], pts: P3[], plane: Plane }[]}
 */
export function orientFaces(points, faces) {
  const all = [...new Set(faces.flat())].map((k) => points[k]);
  const inside = centroid3(all);
  return faces.map((names) => {
    const pts = names.map((k) => points[k]);
    const plane = /** @type {Plane} */ (planeThrough(pts[0], pts[1], pts[2]));
    if (side(inside, plane) > 0) {
      return {
        names: [...names].reverse(),
        pts: [...pts].reverse(),
        plane: { n: mul3(plane.n, -1), d: -plane.d },
      };
    }
    return { names, pts, plane };
  });
}

/**
 * Whether a segment of a drawing is hidden behind a convex solid, the book's
 * rule for dashed lines: a segment lying in the faces' planes is hidden when
 * every face whose plane holds it is turned away; a segment through the inside
 * of the solid is hidden; any other segment is seen.
 * @param {P3} p @param {P3} q
 * @param {{ plane: Plane }[]} faces oriented by `orientFaces`
 * @param {boolean[]} front whether each face is turned towards the viewer
 */
export function isHidden(p, q, faces, front) {
  const holding = faces
    .map((f, i) => i)
    .filter((i) => onPlane(p, faces[i].plane, 1e-6) && onPlane(q, faces[i].plane, 1e-6));
  if (holding.length) return holding.every((i) => !front[i]);
  const m = mid3(p, q);
  return faces.length > 0 && faces.every((f) => side(m, f.plane) < -1e-6);
}

/**
 * The cube ABCD.A'B'C'D' of edge `a` standing on the ground, its six faces
 * and its twelve edges.
 * @param {number} a
 */
export function cube(a) {
  /** @type {Record<string, P3>} */
  const points = {
    A: P(0, 0, 0),
    B: P(a, 0, 0),
    C: P(a, a, 0),
    D: P(0, a, 0),
    "A'": P(0, 0, a),
    "B'": P(a, 0, a),
    "C'": P(a, a, a),
    "D'": P(0, a, a),
  };
  const faces = [
    ['A', 'B', 'C', 'D'],
    ["A'", "B'", "C'", "D'"],
    ['A', 'B', "B'", "A'"],
    ['B', 'C', "C'", "B'"],
    ['C', 'D', "D'", "C'"],
    ['D', 'A', "A'", "D'"],
  ];
  /** @type {[string, string][]} */
  const edges = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'A'],
    ["A'", "B'"],
    ["B'", "C'"],
    ["C'", "D'"],
    ["D'", "A'"],
    ['A', "A'"],
    ['B', "B'"],
    ['C', "C'"],
    ['D', "D'"],
  ];
  return { points, faces, edges };
}

/**
 * A square of the ground plane z = 0 centred at a point, for drawing a plane.
 * @param {P3} c @param {number} half
 */
export function groundSquare(c, half) {
  return [
    P(c.x - half, c.y - half, 0),
    P(c.x + half, c.y - half, 0),
    P(c.x + half, c.y + half, 0),
    P(c.x - half, c.y + half, 0),
  ];
}

/**
 * The direction with turn `azimuth` (from the x axis) and rise `elevation`
 * above the ground, both in degrees.
 * @param {number} azimuth @param {number} elevation
 */
export function direction(azimuth, elevation) {
  const a = azimuth / DEG;
  const e = elevation / DEG;
  return P(Math.cos(a) * Math.cos(e), Math.sin(a) * Math.cos(e), Math.sin(e));
}

/**
 * A fan marking the angle from direction u to direction v at the point o, as
 * a polygon of radius r: empty when the angle is next to 0°. A straight angle
 * (180°) has no plane to be drawn in, so it is empty too unless `across`
 * gives a direction off the line: then it is the half disc on that side.
 * @param {P3} o @param {P3} u @param {P3} v @param {number} r
 * @param {{ steps?: number, across?: P3 }} [options]
 * @returns {P3[]}
 */
export function angleFan(o, u, v, r, { steps = 16, across } = {}) {
  const a = unit3(u);
  const b = unit3(v);
  const cos = Math.max(-1, Math.min(1, dot3(a, b)));
  const theta = Math.acos(cos);
  if (theta < 1e-3) return [];
  let side = sub3(b, mul3(a, cos));
  if (len3(side) < 1e-9 && across) side = sub3(across, mul3(a, dot3(across, a)));
  if (len3(side) < 1e-9) return [];
  const w = unit3(side);
  const out = [o];
  for (let i = 0; i <= steps; i++) {
    const k = (theta * i) / steps;
    out.push(add3(o, mul3(add3(mul3(a, Math.cos(k)), mul3(w, Math.sin(k))), r)));
  }
  return out;
}

/** @param {P3} a */
export const isZero3 = (a) => a.x === 0 && a.y === 0 && a.z === 0;

/** @param {P3} a @param {P3} b */
export const same3 = (a, b) => a.x === b.x && a.y === b.y && a.z === b.z;

/**
 * The three coordinates, with −0 (from a product such as 0 · (−2)) written
 * as 0.
 * @param {P3} a @returns {[number, number, number]}
 */
export const coords = (a) => [a.x + 0, a.y + 0, a.z + 0];

/**
 * True when u and v are parallel (the zero vector counts as parallel).
 * @param {P3} u @param {P3} v
 */
export const parallel3 = (u, v) => isZero3(cross3(u, v));

/**
 * The angle between two non-zero vectors in degrees, from 0° to 180°, or
 * null when one of them is the zero vector.
 * @param {P3} u @param {P3} v
 */
export function angleDeg(u, v) {
  // One square root of the product keeps |u|·|v| exact when it is whole
  // (√5 · √5 would give 5.000000000000001 and a false 0.000001°).
  const l = Math.sqrt(dot3(u, u) * dot3(v, v));
  if (l === 0) return null;
  const cos = Math.max(-1, Math.min(1, dot3(u, v) / l));
  return Math.acos(cos) * DEG;
}

/**
 * The value of Ax + By + Cz + D at a point, for the plane with normal
 * n = (A; B; C) and general equation Ax + By + Cz + D = 0.
 * @param {P3} n @param {number} D @param {P3} p
 */
export const planeValue = (n, D, p) => dot3(n, p) + D;

/**
 * D of the plane through M0 with normal n: A(x − x0) + B(y − y0) + C(z − z0) = 0
 * gives D = −(Ax0 + By0 + Cz0).
 * @param {P3} n @param {P3} m0
 */
export const planeD = (n, m0) => -dot3(n, m0) + 0;

/**
 * The foot of the perpendicular from p to the plane with general equation
 * n · X + D = 0 (n need not be a unit vector).
 * @param {P3} n @param {number} D @param {P3} p
 */
export function footOnEquation(n, D, p) {
  const k = planeValue(n, D, p) / dot3(n, n);
  return sub3(p, mul3(n, k));
}

/**
 * Two unit vectors that, with n, make a right-handed orthonormal frame: a
 * basis of the plane with normal n, used to draw a square patch of it.
 * @param {P3} n a non-zero vector
 * @returns {[P3, P3]}
 */
export function planeBasis(n) {
  const k = mul3(n, 1 / len3(n));
  const helper = Math.abs(k.z) < 0.9 ? P(0, 0, 1) : P(1, 0, 0);
  let a = cross3(helper, k);
  a = mul3(a, 1 / len3(a));
  const b = cross3(k, a);
  return [a, b];
}

/**
 * The corners of a square patch of the plane with normal n through c, of
 * half side h.
 * @param {P3} n @param {P3} c @param {number} h
 */
export function planePatch(n, c, h) {
  const [a, b] = planeBasis(n);
  return [
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ].map(([s, t]) => add3(c, add3(mul3(a, s * h), mul3(b, t * h))));
}

/**
 * The circle of centre c and radius r in the plane with normal n, as a
 * closed list of points (a sphere's equator, a cut of a sphere).
 * @param {P3} c @param {number} r @param {P3} [n]
 */
export function circle3(c, r, n = P(0, 0, 1), steps = 48) {
  const [a, b] = planeBasis(n);
  return Array.from({ length: steps }, (_, i) => {
    const t = (2 * Math.PI * i) / steps;
    return add3(c, add3(mul3(a, r * Math.cos(t)), mul3(b, r * Math.sin(t))));
  });
}
