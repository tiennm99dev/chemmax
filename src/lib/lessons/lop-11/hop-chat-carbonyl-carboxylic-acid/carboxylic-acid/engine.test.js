import { describe, expect, it } from 'vitest';
import { K_ESTER, equilibrium, esterAtEquilibrium } from './engine.js';

describe('esterification equilibrium', () => {
  it('gives two thirds of the ester from equal amounts', () => {
    expect(esterAtEquilibrium(1, 1)).toBeCloseTo(2 / 3, 9);
  });

  it('matches the quadratic roots for an excess of alcohol and for added water', () => {
    expect(esterAtEquilibrium(1, 2)).toBeCloseTo((12 - Math.sqrt(48)) / 6, 9);
    expect(esterAtEquilibrium(1, 3)).toBeCloseTo((16 - Math.sqrt(112)) / 6, 9);
    expect(esterAtEquilibrium(1, 1, 1)).toBeCloseTo((9 - Math.sqrt(33)) / 6, 9);
  });

  it('satisfies the equilibrium constant', () => {
    const bad = [];
    for (const [a, b, w] of [
      [1, 0.5, 0],
      [1, 4, 0],
      [2, 1, 0.5],
      [1, 5, 2],
    ]) {
      const e = equilibrium(a, b, w);
      const k = (e.ester * e.water) / (e.acid * e.alcohol);
      if (Math.abs(k - K_ESTER) > 1e-6) bad.push([a, b, w, k]);
    }
    expect(bad).toEqual([]);
  });

  it('raises the yield with excess alcohol and lowers it with water', () => {
    const y = [1, 2, 3, 5].map((b) => equilibrium(1, b).yield);
    expect(y.every((v, i) => i === 0 || v > y[i - 1])).toBe(true);
    expect(equilibrium(1, 1, 1).yield).toBeLessThan(equilibrium(1, 1).yield);
    expect(equilibrium(1, 0).yield).toBe(0);
    // An excess of acid raises the yield counted on the alcohol as well.
    expect(equilibrium(1, 0.5).yield).toBeGreaterThan(equilibrium(1, 1).yield);
  });
});
