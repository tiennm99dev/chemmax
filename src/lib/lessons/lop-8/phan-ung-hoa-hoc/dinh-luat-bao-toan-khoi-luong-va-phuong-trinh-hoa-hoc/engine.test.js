import { describe, expect, it } from 'vitest';
import { isBalanced, parseEquation } from '#lib/domain/equation.js';
import { molarMass } from '../_shared/molar.js';
import { EXPERIMENTS, GAME, judge, panMasses, solution, tilt, total } from './engine.js';

describe.each(EXPERIMENTS)('$id', (e) => {
  it('conserves mass', () => {
    expect(total(e.reactants)).toBe(total(e.products));
  });

  it('uses masses in the mole ratio of its balanced equation', () => {
    const eq = parseEquation(e.equation);
    const species = [...eq.reactants, ...eq.products];
    const coefficients = species.map((s) => s.coefficient ?? 1);
    expect(isBalanced(eq, coefficients)).toBe(true);
    const parts = [...e.reactants, ...e.products];
    expect(parts.map((p) => p.formula)).toEqual(species.map((s) => s.formula));
    const extent = parts[0].mass / molarMass(parts[0].formula) / coefficients[0];
    parts.forEach((p, i) => {
      expect(p.mass).toBeCloseTo(extent * coefficients[i] * molarMass(p.formula), 9);
    });
  });

  it('keeps the pan level in a closed vessel', () => {
    expect(panMasses(e, true).change).toBe(0);
  });
});

describe('open vessels', () => {
  it('get lighter when a gas escapes and heavier when a gas comes in', () => {
    expect(panMasses(EXPERIMENTS[0], false).change).toBe(0);
    expect(panMasses(EXPERIMENTS[1], false)).toEqual({ before: 17.3, after: 12.9, change: -4.4 });
    expect(panMasses(EXPERIMENTS[2], false)).toEqual({ before: 4.8, after: 8, change: 3.2 });
  });

  it('tilts the beam towards the heavier pan', () => {
    expect(tilt(10, 10)).toBe(0);
    expect(tilt(12.9, 17.3)).toBeGreaterThan(0);
    expect(tilt(8, 4.8)).toBeLessThan(0);
    expect(Math.abs(tilt(0, 100))).toBe(14);
  });
});

describe('balancing game', () => {
  it('has the book coefficients', () => {
    expect(GAME.map(solution)).toEqual([
      [4, 3, 2],
      [2, 3, 2],
      [2, 2, 2, 1],
      [4, 5, 2],
      [2, 6, 2, 3],
      [2, 1, 1, 2],
      [1, 3, 2, 3],
      [1, 2, 1, 2],
    ]);
  });

  it('asks for lowest coefficients', () => {
    expect(judge('Al + O2 -> Al2O3', [4, 3, 2])).toBe('dung');
    expect(judge('Al + O2 -> Al2O3', [8, 6, 4])).toBe('chua-toi-gian');
    expect(judge('Al + O2 -> Al2O3', [2, 3, 1])).toBe('chua-can-bang');
  });
});
