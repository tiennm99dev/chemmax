import { describe, expect, it } from 'vitest';
import { parseFormula } from './formula.js';
import {
  MOLECULES,
  bondSegments,
  bondSummary,
  bondValences,
  composition,
  layout,
  molecule,
  moleculeMass,
} from './molecule.js';

/** Valences an element may show in these drawings. */
const VALENCE = /** @type {Record<string, number[]>} */ ({
  H: [1],
  C: [4],
  N: [3],
  O: [2],
  Cl: [1],
  S: [2, 4, 6],
});

describe('molecule library', () => {
  it('has unique ids and atoms matching each formula', () => {
    expect(new Set(MOLECULES.map((m) => m.id)).size).toBe(MOLECULES.length);
    for (const m of MOLECULES) {
      expect(composition(m), m.id).toEqual(parseFormula(m.formula).atoms);
    }
  });

  it('gives every atom its usual valence and keeps bonds within the molecule', () => {
    for (const m of MOLECULES) {
      bondValences(m).forEach((v, i) => {
        expect(VALENCE[m.atoms[i].el], `${m.id} atom ${i}`).toContain(v);
      });
      for (const b of m.bonds) {
        expect(b.a).not.toBe(b.b);
        expect(m.atoms[b.a]).toBeDefined();
        expect(m.atoms[b.b]).toBeDefined();
      }
    }
  });

  it('is connected', () => {
    for (const m of MOLECULES) {
      const seen = new Set([0]);
      let grew = true;
      while (grew) {
        grew = false;
        for (const b of m.bonds) {
          if (seen.has(b.a) !== seen.has(b.b)) {
            seen.add(b.a);
            seen.add(b.b);
            grew = true;
          }
        }
      }
      expect(seen.size, m.id).toBe(m.atoms.length);
    }
  });

  it('counts bonds by order and molar mass', () => {
    const co2 = /** @type {import('./molecule.js').Molecule} */ (molecule('co2'));
    expect(bondSummary(co2)).toEqual({ single: 0, double: 2, triple: 0 });
    expect(moleculeMass(co2)).toBeCloseTo(44.009, 3);
    const n2 = /** @type {import('./molecule.js').Molecule} */ (molecule('n2'));
    expect(bondSummary(n2).triple).toBe(1);
    const benzene = /** @type {import('./molecule.js').Molecule} */ (molecule('c6h6'));
    expect(bondSummary(benzene)).toEqual({ single: 9, double: 3, triple: 0 });
    expect(molecule('missing')).toBeUndefined();
  });
});

describe('molecule drawing', () => {
  const water = /** @type {import('./molecule.js').Molecule} */ (molecule('h2o'));

  it('fits the molecule into the box and centres it', () => {
    const { atoms } = layout(water, { width: 300, height: 200, pad: 20 });
    for (const a of atoms) {
      expect(a.px).toBeGreaterThanOrEqual(20 - 1e-9);
      expect(a.px).toBeLessThanOrEqual(280 + 1e-9);
      expect(a.py).toBeGreaterThanOrEqual(0);
      expect(a.py).toBeLessThanOrEqual(200);
    }
    const xs = atoms.map((a) => a.px);
    expect((Math.min(...xs) + Math.max(...xs)) / 2).toBeCloseTo(150, 9);
    expect(atoms[0].py).toBeLessThan(atoms[1].py);
    expect(atoms[0].r).toBeGreaterThan(atoms[1].r);
  });

  it('keeps bond lengths when rotated', () => {
    const d = (/** @type {number} */ deg) => {
      const { atoms } = layout(water, {
        width: 300,
        height: 300,
        pad: 20,
        degrees: deg,
        maxScale: 50,
      });
      return Math.hypot(atoms[0].px - atoms[1].px, atoms[0].py - atoms[1].py);
    };
    expect(d(90)).toBeCloseTo(d(0), 6);
    expect(d(37)).toBeCloseTo(d(0), 6);
  });

  it('draws one, two or three parallel sticks', () => {
    const p = { x: 0, y: 0 };
    const q = { x: 10, y: 0 };
    expect(bondSegments(p, q, 1, 4)).toEqual([{ x1: 0, y1: 0, x2: 10, y2: 0 }]);
    const two = bondSegments(p, q, 2, 4);
    expect(two.map((s) => s.y1)).toEqual([-2, 2]);
    expect(bondSegments(p, q, 3, 4).map((s) => s.y2)).toEqual([-4, 0, 4]);
  });
});
