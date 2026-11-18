// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, it, expect } from 'vitest';
import {
  P,
  angleDeg,
  angleFan,
  circle3,
  dist3,
  footOnEquation,
  parallel3,
  planeD,
  planePatch,
  planeValue,
} from './space.js';
import {
  affineTex,
  canonTex,
  coordTex,
  coordText,
  degreeTex,
  ijkTex,
  opTex,
  overSqrtTex,
  paramTex,
  planeTex,
  pointNormalTex,
  sphereExpandedTex,
  sphereTex,
  sqrtTex,
  sumTex,
} from './space-tex.js';

describe('coordinates in space', () => {
  it('writes coordinates the book way', () => {
    expect(coordTex(P(1, -2, 0.5))).toBe('(1; -2; 0{,}5)');
    expect(coordText(P(1, -2, 0.5))).toBe('(1; −2; 0,5)');
    expect(coordTex(P(0 * -2, 1, 2))).toBe('(0; 1; 2)');
    expect(opTex(-2)).toBe('(-2)');
    expect(opTex(3)).toBe('3');
    expect(ijkTex(P(2, -1, 3))).toBe('2\\vec{i} - \\vec{j} + 3\\vec{k}');
    expect(ijkTex(P(0, 0, -1))).toBe('-\\vec{k}');
    expect(ijkTex(P())).toBe('\\vec{0}');
  });

  it('simplifies square roots and rationalises d/√m', () => {
    expect(sqrtTex(12)).toBe('2\\sqrt{3}');
    expect(sqrtTex(9)).toBe('3');
    expect(sqrtTex(2)).toBe('\\sqrt{2}');
    expect(sqrtTex(0)).toBe('0');
    expect(overSqrtTex(1, 3)).toBe('\\dfrac{\\sqrt{3}}{3}');
    expect(overSqrtTex(-1, 4)).toBe('-\\dfrac{1}{2}');
    expect(overSqrtTex(2, 4)).toBe('1');
    expect(overSqrtTex(6, 9)).toBe('2');
    expect(overSqrtTex(2, 6)).toBe('\\dfrac{\\sqrt{6}}{3}');
    expect(overSqrtTex(0, 6)).toBe('0');
  });

  it('measures angles and writes them', () => {
    expect(angleDeg(P(1, 0, 0), P(0, 1, 0))).toBeCloseTo(90);
    expect(angleDeg(P(1, 0, 0), P(0, 0, 0))).toBeNull();
    expect(degreeTex(45.0000001)).toBe('= 45^\\circ');
    expect(degreeTex(54.7356)).toBe('\\approx 54{,}7^\\circ');
  });

  it('gives exact angles for equal and opposite vectors of irrational length', () => {
    expect(degreeTex(/** @type {number} */ (angleDeg(P(2, 0, 1), P(2, 0, 1))))).toBe('= 0^\\circ');
    expect(degreeTex(/** @type {number} */ (angleDeg(P(1, 2, 3), P(-2, -4, -6))))).toBe(
      '= 180^\\circ',
    );
  });

  it('draws a straight angle as a half disc only when given a side', () => {
    expect(angleFan(P(), P(1, 0, 0), P(1, 0, 0), 1)).toEqual([]);
    expect(angleFan(P(), P(1, 0, 0), P(-1, 0, 0), 1)).toEqual([]);
    const half = angleFan(P(), P(1, 0, 0), P(-1, 0, 0), 1, { across: P(0, 0, 1) });
    expect(half.length).toBeGreaterThan(2);
    expect(half[Math.floor(half.length / 2) + 1].z).toBeGreaterThan(0.9);
  });

  it('tells parallel vectors', () => {
    expect(parallel3(P(1, 2, 3), P(-2, -4, -6))).toBe(true);
    expect(parallel3(P(1, 2, 3), P())).toBe(true);
    expect(parallel3(P(1, 0, 0), P(0, 1, 0))).toBe(false);
  });
});

describe('planes, lines and spheres by equation', () => {
  it('writes the equations of a plane', () => {
    const n = P(2, -1, 3);
    const m0 = P(1, -2, 0);
    const D = planeD(n, m0);
    expect(D).toBe(-4);
    expect(pointNormalTex(n, m0)).toBe('2(x - 1) - (y + 2) + 3z = 0');
    expect(planeTex(n, D)).toBe('2x - y + 3z - 4 = 0');
    expect(planeTex(P(0, 0, 1), 0)).toBe('z = 0');
    expect(planeValue(n, D, m0)).toBe(0);
    expect(sumTex([0, 0, 0])).toBe('0');
  });

  it('drops the perpendicular onto a plane given by its equation', () => {
    const foot = footOnEquation(P(0, 0, 2), -4, P(1, 2, 7));
    expect(dist3(foot, P(1, 2, 2))).toBeCloseTo(0);
  });

  it('writes the equations of a line', () => {
    expect(paramTex(P(1, -2, 0), P(2, 0, -1))).toBe(
      '\\begin{cases} x = 1 + 2t \\\\ y = -2 \\\\ z = -t \\end{cases}',
    );
    expect(affineTex(0, 3)).toBe('3t');
    expect(canonTex(P(1, -2, 0), P(2, -1, 3))).toBe(
      '\\dfrac{x - 1}{2} = \\dfrac{y + 2}{-1} = \\dfrac{z}{3}',
    );
    expect(canonTex(P(1, -2, 0), P(2, 0, 3))).toBeNull();
  });

  it('writes the equations of a sphere', () => {
    expect(sphereTex(P(1, 0, -2), 9)).toBe('(x - 1)^2 + y^2 + (z + 2)^2 = 9');
    expect(sphereExpandedTex(P(1, 0, -2), 9)).toBe('x^2 + y^2 + z^2 - 2x + 4z - 4 = 0');
    expect(sphereExpandedTex(P(), 4)).toBe('x^2 + y^2 + z^2 - 4 = 0');
  });

  it('draws a patch of a plane and a circle in it', () => {
    const n = P(1, 2, 2);
    const c = P(1, 1, 1);
    for (const p of planePatch(n, c, 2)) expect(planeValue(n, -5, p)).toBeCloseTo(0);
    const ring = circle3(c, 2, n, 12);
    expect(ring).toHaveLength(12);
    for (const p of ring) expect(dist3(p, c)).toBeCloseTo(2);
  });
});
