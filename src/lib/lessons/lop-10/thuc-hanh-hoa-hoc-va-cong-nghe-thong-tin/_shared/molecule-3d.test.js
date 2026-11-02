import { describe, expect, it } from 'vitest';
import {
  GEOMETRY,
  MODELS,
  angleAt,
  bondBetween,
  distance,
  fitScale,
  measure,
  nearestAtom,
  togglePick,
} from './molecule-3d.js';

/** @param {string} id */
const get = (id) =>
  /** @type {import('./molecule-3d.js').Model3d} */ (MODELS.find((m) => m.id === id));

describe('molecule geometry', () => {
  it('gives each model as many 3D atoms as its drawing, with bonds in range', () => {
    const wrong = MODELS.filter(
      (m) =>
        m.solid.length !== m.els.length ||
        m.flat.length !== m.els.length ||
        m.bonds.some((b) => b.a >= m.els.length || b.b >= m.els.length),
    );
    expect(wrong.map((m) => m.id)).toEqual([]);
  });

  it('places bonded atoms at a chemically sensible distance', () => {
    const wrong = [];
    for (const m of MODELS) {
      for (const b of m.bonds) {
        const d = distance(m.solid[b.a], m.solid[b.b]);
        if (d < 0.9 || d > 1.6) wrong.push(`${m.id} ${b.a}-${b.b} ${d}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('reproduces the lengths and angles of water, ammonia and methane', () => {
    const w = get('h2o').solid;
    expect(distance(w[0], w[1])).toBeCloseTo(GEOMETRY.h2o.oh, 6);
    expect(angleAt(w[1], w[0], w[2])).toBeCloseTo(104.5, 6);
    const n = get('nh3').solid;
    expect(distance(n[0], n[3])).toBeCloseTo(1.012, 6);
    expect(angleAt(n[1], n[0], n[2])).toBeCloseTo(106.7, 6);
    expect(angleAt(n[2], n[0], n[3])).toBeCloseTo(106.7, 6);
    const c = get('ch4').solid;
    expect(angleAt(c[1], c[0], c[2])).toBeCloseTo(109.47, 6);
    expect(angleAt(c[2], c[0], c[3])).toBeCloseTo(109.47, 1);
    expect(distance(c[1], c[2])).toBeCloseTo(1.775, 3);
  });

  it('keeps ethene flat and ethyne straight', () => {
    const e = get('c2h4').solid;
    expect(e.every((p) => Math.abs(p.y) < 1e-9)).toBe(true);
    const y = get('c2h2').solid;
    expect(angleAt(y[2], y[0], y[1])).toBeCloseTo(180, 6);
  });

  it('shortens the carbon-carbon bond as its order grows', () => {
    const length = (/** @type {string} */ id) => distance(get(id).solid[0], get(id).solid[1]);
    expect(length('c2h6')).toBeGreaterThan(length('c2h4'));
    expect(length('c2h4')).toBeGreaterThan(length('c2h2'));
  });

  it('builds sulfuric acid with its measured lengths and two equal O-H arms', () => {
    const s = get('h2so4').solid;
    expect(distance(s[0], s[1])).toBeCloseTo(1.422, 6);
    expect(distance(s[0], s[3])).toBeCloseTo(1.574, 6);
    expect(distance(s[3], s[5])).toBeCloseTo(0.97, 6);
    expect(distance(s[4], s[6])).toBeCloseTo(0.97, 6);
    expect(angleAt(s[0], s[3], s[5])).toBeCloseTo(108.5, 6);
    expect(angleAt(s[1], s[0], s[2])).toBeCloseTo(123.3, 6);
    expect(distance(s[1], s[5])).toBeGreaterThan(1.5);
  });
});

describe('measuring', () => {
  it('names a bond with its order and reads an angle at the middle atom', () => {
    const m = get('c2h4');
    expect(measure(m, '3d', [0, 1])).toMatchObject({ kind: 'length', name: 'C=C', bonded: true });
    const a = measure(m, '3d', [2, 0, 1]);
    expect(a).toMatchObject({ kind: 'angle', name: 'H–C=C', bonded: true });
    expect(a.value).toBeCloseTo(121.3, 6);
  });

  it('shows the structural formula disagreeing with the real angle', () => {
    const m = get('ch4');
    expect(measure(m, '2d', [1, 0, 2]).value).toBeCloseTo(90, 6);
    expect(measure(m, '2d', [1, 0, 3]).value).toBeCloseTo(180, 6);
    expect(measure(m, '3d', [1, 0, 3]).value).toBeCloseTo(109.47, 1);
  });

  it('marks atoms with no bond between them', () => {
    const m = get('ch4');
    expect(bondBetween(m, 1, 2)).toBeUndefined();
    expect(measure(m, '3d', [1, 2]).bonded).toBe(false);
    expect(measure(m, '3d', [1]).kind).toBe('none');
  });

  it('picks, takes back and restarts', () => {
    expect(togglePick([], 1)).toEqual([1]);
    expect(togglePick([1], 0)).toEqual([1, 0]);
    expect(togglePick([1, 0], 0)).toEqual([1]);
    expect(togglePick([1, 0, 2], 3)).toEqual([3]);
    expect(togglePick([1, 0], 1)).toEqual([1]);
  });

  it('finds the atom under a tap and fits any molecule on the board', () => {
    const pts = [
      { x: 0, y: 0 },
      { x: 30, y: 0 },
    ];
    expect(nearestAtom(pts, 25, 0, 20)).toBe(1);
    expect(nearestAtom(pts, 100, 100, 20)).toBe(-1);
    expect(fitScale(get('h2so4').solid, 140)).toBeLessThanOrEqual(110);
  });
});
