// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { describe, it, expect } from 'vitest';
import katex from 'katex';
import {
  approxText,
  groupValues,
  groupedIqr,
  groupedMean,
  groupedRange,
  groupedStd,
  groupedVariance,
  makeGroups,
  meanTex,
  quartileTex,
  stdTex,
  varianceShortTex,
  varianceTex,
  varianceWorkTex,
} from './grouped.js';

const heights = makeGroups(150, 5, [3, 7, 12, 10, 5, 3]);
const travel = makeGroups(0, 5, [6, 14, 10, 7, 3]);

describe('measures of spread of a grouped sample', () => {
  it('finds the range from the first to the last group with data', () => {
    expect(groupedRange(heights)).toEqual({ lo: 150, hi: 180, value: 30 });
    expect(groupedRange(makeGroups(0, 5, [0, 2, 3, 0]))).toEqual({ lo: 5, hi: 15, value: 10 });
    expect(() => groupedRange(makeGroups(0, 1, [0, 0]))).toThrow();
  });

  it('interpolates the quartiles and their difference', () => {
    const a = groupedIqr(heights);
    expect([a.q1.value, a.q3.value, a.value]).toEqual([160, 169, 9]);
    const b = groupedIqr(travel);
    expect(b.q1).toMatchObject({ index: 1, before: 6, count: 14 });
    expect(b.q1.value).toBeCloseTo(45 / 7, 9);
    expect(b.q3.value).toBe(15);
    expect(b.value).toBeCloseTo(60 / 7, 8);
  });

  it('computes the variance with the group midpoints and 1/n', () => {
    expect(groupedMean(heights)).toBe(164.5);
    expect(groupedVariance(heights)).toBe(43.5);
    expect(groupedStd(heights)).toBeCloseTo(Math.sqrt(43.5), 12);
    const a = makeGroups(-2, 2, [3, 4, 6, 4, 3]);
    const b = makeGroups(-2, 2, [1, 3, 12, 3, 1]);
    expect([groupedMean(a), groupedVariance(a)]).toEqual([3, 6.4]);
    expect([groupedMean(b), groupedVariance(b)]).toEqual([3, 2.8]);
    expect(groupedVariance(makeGroups(0, 10, [2, 6, 10, 9, 3]))).toBeCloseTo(1025 / 9, 8);
  });

  it('groups raw values, closing the last group on an exact end', () => {
    const g = groupValues([1, 2, 2, 3, 5], 0, 2);
    expect(g.map((x) => x.count)).toEqual([1, 3, 1]);
    const c = groupValues([0, 1, 4], 0, 2);
    expect(c.at(-1)).toMatchObject({ lo: 2, hi: 4, count: 1, closed: true });
  });

  it('writes the formulas the book way and they render in KaTeX', () => {
    expect(quartileTex(groupedIqr(travel).q1, 1)).toBe(
      'Q_1 = 5 + \\dfrac{10 - 6}{14} \\cdot 5 \\approx 6{,}43',
    );
    expect(varianceTex(makeGroups(-2, 2, [3, 4, 6, 4, 3]))).toBe(
      's^2 = \\dfrac{3 \\cdot (-4)^2 + 4 \\cdot (-2)^2 + 6 \\cdot 0^2 + 4 \\cdot 2^2 + 3 \\cdot 4^2}{20} = 6{,}4',
    );
    expect(stdTex(heights)).toBe('s = \\sqrt{43{,}5} \\approx 6{,}6');
    expect(approxText(8.571428)).toBe('≈ 8,57');
    const bad = [];
    for (const counts of [
      [3, 7, 12, 10, 5, 3],
      [2, 5, 9, 10, 3, 1],
      [1, 0, 4, 0, 2],
    ]) {
      const g = makeGroups(-10, 4, counts);
      const { q1, q3 } = groupedIqr(g);
      for (const t of [
        meanTex(g),
        varianceTex(g),
        varianceShortTex(g),
        varianceWorkTex(g),
        stdTex(g),
        quartileTex(q1, 1),
        quartileTex(q3, 3),
      ]) {
        try {
          katex.renderToString(t, { strict: 'error', throwOnError: true });
        } catch {
          bad.push(t);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});
