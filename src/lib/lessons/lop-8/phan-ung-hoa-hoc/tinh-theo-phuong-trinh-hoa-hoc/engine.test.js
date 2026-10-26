import { describe, expect, it } from 'vitest';
import { isBalanced, parseEquation } from '#lib/domain/equation.js';
import { REACTIONS, actual, massOf, reaction, simulate, yieldPercent } from './engine.js';

describe.each(REACTIONS)('$id', (r) => {
  it('stores the coefficients of its balanced equation', () => {
    const eq = parseEquation(r.equation);
    const terms = [...r.reactants, ...r.products];
    expect([...eq.reactants, ...eq.products].map((s) => s.formula)).toEqual(
      terms.map((t) => t.formula),
    );
    expect(
      isBalanced(
        eq,
        terms.map((t) => t.coef),
      ),
    ).toBe(true);
  });
});

describe('simulate', () => {
  it('finds the reactant that runs out', () => {
    const s = simulate(reaction('nuoc'), [5, 3]);
    expect(s.limiting).toBe(0);
    expect(s.extent).toBe(2.5);
    expect(s.left).toEqual([0, 0.5]);
    expect(s.formed).toEqual([5]);
  });

  it('reports exact amounts', () => {
    const s = simulate(reaction('nuoc'), [4, 2]);
    expect(s.limiting).toBe('vua-du');
    expect(s.left).toEqual([0, 0]);
    expect(s.formed).toEqual([4]);
  });

  it('handles a coefficient on the second reactant', () => {
    const s = simulate(reaction('kem'), [1, 3]);
    expect(s.limiting).toBe(0);
    expect(s.left).toEqual([0, 1]);
    expect(s.formed).toEqual([1, 1]);
    const z = simulate(reaction('kem'), [0.2, 0.3]);
    expect(z.limiting).toBe(1);
    expect(z.left[0]).toBe(0.05);
    expect(z.formed).toEqual([0.15, 0.15]);
  });

  it('forms nothing when a reactant is missing', () => {
    const s = simulate(reaction('ammonia'), [0, 6]);
    expect(s.limiting).toBeNull();
    expect(s.formed).toEqual([0]);
  });
});

describe('yield', () => {
  it('scales the product and computes H', () => {
    expect(actual(28, 80)).toBe(22.4);
    expect(yieldPercent(4.48, 5.6)).toBe(80);
    expect(yieldPercent(0.05, 0.2)).toBe(25);
    expect(yieldPercent(1, 0)).toBe(0);
  });

  it('turns amounts into masses', () => {
    expect(massOf('H2O', 0.3)).toBe(5.4);
    expect(massOf('NH3', 2)).toBe(34);
  });
});
