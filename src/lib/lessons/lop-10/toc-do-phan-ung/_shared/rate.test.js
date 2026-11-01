import { describe, expect, it } from 'vitest';
import { averageRate, rateLaw, vantHoff } from './rate.js';

describe('reaction rate formulas', () => {
  it('gives the same average rate from a reactant and from a product', () => {
    const fromReactant = averageRate(0.02, 0.0169, 0, 100, 2);
    const fromProduct = averageRate(0, 0.0062, 0, 100, 4);
    expect(fromReactant).toBe(0.0000155);
    expect(fromProduct).toBe(0.0000155);
  });

  it('applies the rate law with its orders', () => {
    expect(
      rateLaw(2.5e-4, [
        [0.02, 1],
        [0.03, 1],
      ]),
    ).toBe(1.5e-7);
    expect(
      rateLaw(1, [
        [0.2, 2],
        [0.1, 1],
      ]),
    ).toBe(0.004);
  });

  it('multiplies by gamma for every ten degrees', () => {
    expect(vantHoff(3, 10)).toBe(3);
    expect(vantHoff(2, 30)).toBe(8);
    expect(vantHoff(4, -10)).toBe(0.25);
  });
});
