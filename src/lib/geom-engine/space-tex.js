// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { formatNumber, numTex } from '#lib/core/number-format.js';
import { gcd } from '#lib/numtheory-engine/index.js';
import { dot3 } from '#lib/geom-engine/solid.js';
import { coords } from '#lib/geom-engine/space.js';

/**
 * Coordinates in space written the way the grade 12 book prints them: points
 * and vectors (`(1; −2; 3)`, `2\vec{i} - \vec{j} + 3\vec{k}`), exact square
 * roots and quotients such as $\dfrac{\sqrt{3}}{3}$, angles, and the equations
 * of planes, lines and spheres with whole coefficients
 * (`2x - y + 3z - 5 = 0`). The geometry itself is in
 * `#lib/geom-engine/space.js`. Pure and DOM-free.
 */

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */

/**
 * Coordinates as TeX, the book's way: `(1; -2; 0{,}5)`.
 * @param {P3} a
 */
export const coordTex = (a) =>
  `(${coords(a)
    .map((v) => numTex(v))
    .join('; ')})`;

/**
 * Coordinates as plain text for screen readers and labels: `(1; −2; 0,5)`.
 * @param {P3} a
 */
export const coordText = (a) =>
  `(${coords(a)
    .map((v) => formatNumber(v))
    .join('; ')})`;

/**
 * A number as a TeX operand, bracketed when negative: `3`, `(-2)`.
 * @param {number} n
 */
export const opTex = (n) => (n < 0 ? `(${numTex(n)})` : numTex(n));

/**
 * √n = out·√rest with rest free of square factors, for a whole n > 0:
 * 12 → { out: 2, rest: 3 }.
 * @param {number} n
 */
export function splitSquare(n) {
  let out = 1;
  let rest = n;
  for (let k = 2; k * k <= rest; k++) {
    while (rest % (k * k) === 0) {
      out *= k;
      rest /= k * k;
    }
  }
  return { out, rest };
}

/**
 * Exact √n for a whole n ≥ 0, simplified: 12 → '2\\sqrt{3}', 9 → '3',
 * 1 → '1', 0 → '0'.
 * @param {number} n
 */
export function sqrtTex(n) {
  if (n === 0) return '0';
  const { out, rest } = splitSquare(n);
  if (rest === 1) return `${out}`;
  return out === 1 ? `\\sqrt{${rest}}` : `${out}\\sqrt{${rest}}`;
}

/**
 * The exact value of d / √m for whole d and m > 0, as TeX with a rational
 * denominator: (1, 3) → '\\dfrac{\\sqrt{3}}{3}', (−1, 4) → '-\\dfrac{1}{2}',
 * (2, 4) → '1', (0, 6) → '0'.
 * @param {number} d @param {number} m
 */
export function overSqrtTex(d, m) {
  if (d === 0) return '0';
  const { out, rest } = splitSquare(m);
  // d / (out·√rest) = d·√rest / (out·rest)
  let p = Math.abs(d);
  let q = out * rest;
  const g = gcd(p, q);
  p /= g;
  q /= g;
  const sign = d < 0 ? '-' : '';
  const root = `\\sqrt{${rest}}`;
  const top = rest === 1 ? `${p}` : p === 1 ? root : `${p}${root}`;
  return q === 1 ? `${sign}${top}` : `${sign}\\dfrac{${top}}{${q}}`;
}

/**
 * The degrees of an angle written the book's way with a decimal comma,
 * rounded to tenths: 54.7356 → '54,7°'; whole angles stay whole: '90°'.
 * @param {number} deg
 */
export const degreeText = (deg) => `${formatNumber(deg, 1)}°`;

/**
 * "= 45^\\circ" for a whole angle, "\\approx 54{,}7^\\circ" otherwise: the
 * relation and the angle in TeX, rounded to tenths.
 * @param {number} deg
 */
export function degreeTex(deg) {
  const exact = Math.abs(deg - Math.round(deg)) < 1e-6;
  return `${exact ? '=' : '\\approx'} ${numTex(exact ? Math.round(deg) : deg, 1)}^\\circ`;
}

/**
 * A vector as a combination of the unit vectors, in TeX:
 * (2, −1, 3) → '2\vec{i} - \vec{j} + 3\vec{k}', (0, 0, 0) → '\vec{0}'.
 * @param {P3} a
 */
export function ijkTex(a) {
  const parts = /** @type {[number, string][]} */ ([
    [a.x, '\\vec{i}'],
    [a.y, '\\vec{j}'],
    [a.z, '\\vec{k}'],
  ]).filter(([c]) => c !== 0);
  if (!parts.length) return '\\vec{0}';
  return parts
    .map(([c, e], i) => {
      const mag = Math.abs(c) === 1 ? '' : numTex(Math.abs(c));
      const sign = c < 0 ? (i ? ' - ' : '-') : i ? ' + ' : '';
      return `${sign}${mag}${e}`;
    })
    .join('');
}

/**
 * One term `k·name` of a sum, with its sign: first term '2x', '-x'; later
 * terms ' + 2x', ' - x'; '' for k = 0. A constant term has name ''.
 * @param {number} k @param {string} name @param {boolean} first
 */
function term(k, name, first) {
  if (k === 0) return '';
  const mag = Math.abs(k) === 1 && name ? '' : numTex(Math.abs(k));
  const sign = k < 0 ? (first ? '-' : ' - ') : first ? '' : ' + ';
  return `${sign}${mag}${name}`;
}

/**
 * A linear sum written the book's way: ([2, -1, 0], 3) → '2x - y + 3'.
 * @param {number[]} ks coefficients of x, y, z
 * @param {number} [c] the constant term
 * @param {string[]} [names]
 */
export function sumTex(ks, c = 0, names = ['x', 'y', 'z']) {
  let out = '';
  [...ks, c].forEach((k, i) => {
    out += term(k, names[i] ?? '', out === '');
  });
  return out || '0';
}

/**
 * The general equation of the plane Ax + By + Cz + D = 0 in TeX:
 * ((2; -1; 0), 3) → '2x - y + 3 = 0'.
 * @param {P3} n the normal vector (A; B; C)
 * @param {number} D
 */
export const planeTex = (n, D) => `${sumTex(coords(n), D)} = 0`;

/**
 * A(x − x0) + B(y − y0) + C(z − z0) = 0 in TeX, terms with A = 0 left out:
 * '2(x - 1) - (y + 2) + 3z = 0'.
 * @param {P3} n @param {P3} m0
 */
export function pointNormalTex(n, m0) {
  /** @type {string[]} */
  const parts = [];
  const names = ['x', 'y', 'z'];
  const ns = coords(n);
  const ms = coords(m0);
  for (let i = 0; i < 3; i++) {
    const k = ns[i];
    if (k === 0) continue;
    const inner =
      ms[i] === 0 ? names[i] : `(${names[i]} ${ms[i] < 0 ? '+' : '-'} ${numTex(Math.abs(ms[i]))})`;
    const first = parts.length === 0;
    const mag = Math.abs(k) === 1 ? '' : numTex(Math.abs(k));
    const sign = k < 0 ? (first ? '-' : ' - ') : first ? '' : ' + ';
    parts.push(`${sign}${mag}${inner}`);
  }
  return `${parts.join('') || '0'} = 0`;
}

/**
 * x − x0 written in TeX: 'x', 'x - 2', 'x + 3'.
 * @param {string} name @param {number} x0
 */
const shiftTex = (name, x0) =>
  x0 === 0 ? name : `${name} ${x0 < 0 ? '+' : '-'} ${numTex(Math.abs(x0))}`;

/**
 * x0 + a·t written the book's way, the constant first: '1 + 2t', '-t',
 * '3', '2 - t'.
 * @param {number} x0 @param {number} a @param {string} [t]
 */
export function affineTex(x0, a, t = 't') {
  if (x0 === 0) return sumTex([a], 0, [t]);
  return `${numTex(x0)}${term(a, t, false)}`;
}

/**
 * The parametric equations of the line through M with direction u, as a
 * TeX `cases`: x = x0 + at, y = y0 + bt, z = z0 + ct.
 * @param {P3} m @param {P3} u @param {string} [t] the parameter's name
 */
export function paramTex(m, u, t = 't') {
  const ms = coords(m);
  const us = coords(u);
  const rows = ['x', 'y', 'z'].map((name, i) => `${name} = ${affineTex(ms[i], us[i], t)}`);
  return `\\begin{cases} ${rows.join(' \\\\ ')} \\end{cases}`;
}

/**
 * The canonical equations of the line through M with direction u (every
 * coordinate of u non-zero), or null when one coordinate of u is 0:
 * '\\dfrac{x - 1}{2} = \\dfrac{y + 2}{-1} = \\dfrac{z}{3}'.
 * @param {P3} m @param {P3} u
 */
export function canonTex(m, u) {
  const us = coords(u);
  if (us.some((v) => v === 0)) return null;
  const ms = coords(m);
  return ['x', 'y', 'z']
    .map((name, i) => `\\dfrac{${shiftTex(name, ms[i])}}{${numTex(us[i])}}`)
    .join(' = ');
}

/**
 * (x − a)² + (y − b)² + (z − c)² = R² in TeX, with R² given.
 * @param {P3} centre @param {number} r2
 */
export function sphereTex(centre, r2) {
  const cs = coords(centre);
  const parts = ['x', 'y', 'z'].map((name, i) =>
    cs[i] === 0 ? `${name}^2` : `(${shiftTex(name, cs[i])})^2`,
  );
  return `${parts.join(' + ')} = ${numTex(r2)}`;
}

/**
 * The expanded form x² + y² + z² − 2ax − 2by − 2cz + d = 0 in TeX, with
 * d = a² + b² + c² − R².
 * @param {P3} centre @param {number} r2
 */
export function sphereExpandedTex(centre, r2) {
  const d = dot3(centre, centre) - r2;
  const lin = coords(centre).map((v) => -2 * v);
  const rest = sumTex(lin, d);
  return `x^2 + y^2 + z^2${rest === '0' ? '' : rest.startsWith('-') ? ` - ${rest.slice(1)}` : ` + ${rest}`} = 0`;
}
