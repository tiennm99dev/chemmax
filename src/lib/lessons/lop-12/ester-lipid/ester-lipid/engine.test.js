import { describe, expect, it } from 'vitest';
import { K_HYDROLYSIS, acidExtent, baseExtent, hydrolysis } from './engine.js';

describe('ester hydrolysis', () => {
  it('solves the acid equilibrium from its quadratic', () => {
    // x² = (1 − x)(5 − x)/4  ⇔  3x² + 6x − 5 = 0
    expect(acidExtent(5)).toBeCloseTo((-6 + Math.sqrt(96)) / 6, 9);
    // x² = (1 − x)²/4  ⇔  x = 1/3
    expect(acidExtent(1)).toBeCloseTo(1 / 3, 9);
  });

  it('never completes in acid, however much water is added', () => {
    const bad = [];
    for (const w of [1, 2, 5, 10, 20]) {
      const x = acidExtent(w);
      const k = (x * x) / ((1 - x) * (w - x));
      if (!(x < 1) || Math.abs(k - K_HYDROLYSIS) > 1e-9) bad.push([w, x]);
    }
    expect(bad).toEqual([]);
    expect(acidExtent(10)).toBeGreaterThan(acidExtent(5));
  });

  it('completes in base when NaOH is enough, else stops with NaOH used up', () => {
    expect(baseExtent(1.5)).toBe(1);
    expect(baseExtent(0.5)).toBe(0.5);
    const done = hydrolysis('base', 1.2, 120);
    expect(done.settled).toBe(true);
    expect(done.ester).toBe(0);
    expect(done.reagentLeft).toBeCloseTo(0.2, 9);
  });

  it('starts from the pure ester and moves toward the end point', () => {
    expect(hydrolysis('acid', 5, 0).ester).toBe(1);
    const a = hydrolysis('acid', 5, 10);
    const b = hydrolysis('acid', 5, 30);
    expect(b.alcohol).toBeGreaterThan(a.alcohol);
    expect(hydrolysis('acid', 5, 200).alcohol).toBeCloseTo(acidExtent(5), 6);
  });
});
