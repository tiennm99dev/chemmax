import { describe, expect, it } from 'vitest';
import { MODELS, angleBetween, arcBetween, DONOR_CASES, modelFor, vseprTex } from './engine.js';

describe('VSEPR models', () => {
  it('uses one hybrid orbital per electron domain', () => {
    const domains = { sp: 2, 'sp^2': 3, 'sp^3': 4 };
    const wrong = MODELS.filter((x) => domains[x.hybrid] !== x.n + x.m);
    expect(wrong).toEqual([]);
  });

  it('draws the measured angle between every pair of bonds', () => {
    const wrong = [];
    for (const x of MODELS) {
      for (let i = 0; i < x.bonds.length; i++) {
        for (let j = i + 1; j < x.bonds.length; j++) {
          const seen = angleBetween(x.bonds[i], x.bonds[j]);
          if (Math.abs(seen - x.angle) > 0.1) wrong.push([x.formula, seen]);
        }
      }
    }
    expect(wrong).toEqual([]);
  });

  it('keeps every direction a unit vector', () => {
    const lengths = MODELS.flatMap((x) => [...x.bonds, ...x.lones]).map((p) =>
      Math.hypot(p.x, p.y, p.z),
    );
    expect(lengths.filter((l) => Math.abs(l - 1) > 1e-9)).toEqual([]);
  });

  it('finds models by n and m and rejects the ones outside the lesson', () => {
    expect(modelFor(3, 1)?.formula).toContain('NH_3');
    expect(modelFor(4, 1)).toBeNull();
  });

  it('writes the book formula', () => {
    expect(vseprTex(3, 0)).toBe('\\mathrm{AX_3}');
    expect(vseprTex(3, 1)).toBe('\\mathrm{AX_3}\\mathrm{E}');
    expect(vseprTex(2, 2)).toBe('\\mathrm{AX_2}\\mathrm{E_2}');
  });
});

describe('arcBetween', () => {
  it('runs from one direction to the other at the same distance', () => {
    const a = { x: 1, y: 0, z: 0 };
    const b = { x: 0, y: 1, z: 0 };
    const arc = arcBetween(a, b, 2);
    expect(arc[0]).toEqual({ x: 2, y: 0, z: 0 });
    expect(arc.at(-1)?.y).toBeCloseTo(2);
    expect(arc.filter((p) => Math.abs(Math.hypot(p.x, p.y, p.z) - 2) > 1e-9)).toEqual([]);
  });

  it('bows out sideways for opposite directions', () => {
    const arc = arcBetween({ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }, 1, 2);
    expect(arc[1].z).toBeCloseTo(1);
    expect(arc[2].x).toBeCloseTo(-1);
  });
});

describe('donor cases', () => {
  it('names a real partner as donor', () => {
    const wrong = DONOR_CASES.filter((c) => !c.partners.some((p) => p.id === c.donor));
    expect(wrong).toEqual([]);
  });
});
