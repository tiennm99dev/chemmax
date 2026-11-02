import { describe, expect, it } from 'vitest';
import { REACTIONS } from './reactions.js';
import { balanceTemperature, gibbs, gibbsAxis, signCase, spontaneousSpans } from './engine.js';

/** Table 4.1 of the book: [S°298 in J/(mol·K), ΔfH°298 in kJ/mol]. */
const TABLE = /** @type {Record<string, [number, number]>} */ ({
  'C(graphite)': [5.7, 0],
  CO: [197.5, -110.5],
  CO2: [213.7, -393.5],
  CaO: [38.2, -635.1],
  CaCO3: [92.9, -1206.9],
  Fe: [27.3, 0],
  Fe2O3: [87.4, -825.5],
  KCl: [82.6, -436.7],
  KClO3: [143.1, -397.7],
  H2: [130.6, 0],
  H2Og: [188.7, -241.8],
  NO: [210.7, 90.3],
  NO2: [239.9, 33.2],
  N2O4: [304.3, 9.2],
  O2: [205.0, 0],
  SO2: [248.1, -296.8],
  SO3: [256.7, -396.0],
});

/**
 * @param {Array<[number, string]>} side
 * @param {0 | 1} col
 */
const total = (side, col) => side.reduce((s, [n, x]) => s + n * TABLE[x][col], 0);

describe('stored reactions', () => {
  it('match what Table 4.1 gives', () => {
    const wrong = REACTIONS.filter((r) => {
      const dS = total(r.right, 0) - total(r.left, 0);
      const dH = total(r.right, 1) - total(r.left, 1);
      return Math.abs(dS - r.dS) > 0.05 || Math.abs(dH - r.dH) > 0.05;
    });
    expect(wrong.map((r) => r.id)).toEqual([]);
  });
});

describe('Gibbs', () => {
  it('reproduces the book examples', () => {
    expect(gibbs(178.3, 159, 298)).toBeCloseTo(130.9, 1);
    expect(gibbs(-39, 247, 298)).toBeCloseTo(-112.6, 1);
    expect(gibbs(470.5, 558.4, 298)).toBeCloseTo(304.1, 1);
  });

  it('crosses zero at the balance temperature', () => {
    const t = balanceTemperature(178.3, 159) ?? 0;
    expect(t).toBeCloseTo(1121.4, 0);
    expect(gibbs(178.3, 159, t)).toBeCloseTo(0, 9);
    expect(balanceTemperature(10, 0)).toBeNull();
  });

  it('finds where a reaction goes by itself', () => {
    expect(spontaneousSpans(-39, 247, 2000)).toEqual([[0, 2000]]);
    expect(spontaneousSpans(110.5, -89.3, 2000)).toEqual([]);
    expect(spontaneousSpans(100, 100, 2000)).toEqual([[1000, 2000]]);
    expect(spontaneousSpans(-100, -100, 2000)).toEqual([[0, 1000]]);
    expect(spontaneousSpans(-10, 0, 2000)).toEqual([[0, 2000]]);
    expect(spontaneousSpans(10, 0, 2000)).toEqual([]);
    expect(spontaneousSpans(500, 100, 2000)).toEqual([]);
  });

  it('names the four sign cases', () => {
    expect(signCase(-1, 1)).toBe('always');
    expect(signCase(-1, -1)).toBe('cold');
    expect(signCase(1, 1)).toBe('hot');
    expect(signCase(1, -1)).toBe('never');
    expect(signCase(0, 1)).toBeNull();
  });

  it('builds an axis that holds the whole line and zero', () => {
    const axis = gibbsAxis(178.3, 159, 2000);
    expect(axis.min).toBeLessThanOrEqual(gibbs(178.3, 159, 2000));
    expect(axis.max).toBeGreaterThanOrEqual(178.3);
    expect(axis.ticks).toContain(0);
    expect(axis.ticks.length).toBeLessThanOrEqual(8);
  });

  it('keeps the axis tall when the line lies flat on zero', () => {
    const axis = gibbsAxis(0, 0, 2000);
    expect(axis.max).toBeGreaterThan(axis.min);
    expect(axis.ticks).toContain(0);
  });
});
