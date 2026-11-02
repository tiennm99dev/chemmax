import { describe, expect, it } from 'vitest';
import {
  ACID_V,
  BASE_C,
  INDICATORS,
  SAMPLES,
  acidFromVolume,
  equivalenceVolume,
  idealCurve,
  indicatorColor,
  judgeResult,
  overshot,
  phAfter,
  reachedEnd,
} from './engine.js';

const [PHENOL, , ORANGE] = INDICATORS;

describe('titration of HCl with NaOH', () => {
  it('gives the known pH values of 0,1 M acid against 0,1 M base', () => {
    expect(phAfter(0.1, 10, 0.1, 0)).toBeCloseTo(1, 6);
    expect(phAfter(0.1, 10, 0.1, 10)).toBe(7);
    // 1 mL past the end: 0,1 mmol of OH⁻ in 21 mL.
    expect(phAfter(0.1, 10, 0.1, 11)).toBeCloseTo(14 + Math.log10(0.1 / 21), 6);
  });

  it('rises steadily and jumps around the equivalence point', () => {
    const curve = idealCurve(0.1, 20);
    const falls = curve.filter((p, i) => i > 0 && p[1] < curve[i - 1][1] - 1e-9);
    expect(falls).toEqual([]);
    const jump = phAfter(0.1, 10, 0.1, 10.1) - phAfter(0.1, 10, 0.1, 9.9);
    expect(jump).toBeGreaterThan(5);
  });

  it('keeps every sample end point on the burette', () => {
    const bad = SAMPLES.filter((c) => equivalenceVolume(c) < 5 || equivalenceVolume(c) > 20);
    expect(bad).toEqual([]);
  });

  it('turns phenolphthalein pink within one drop of the equivalence point', () => {
    for (const ca of SAMPLES) {
      const eq = equivalenceVolume(ca);
      expect(reachedEnd(PHENOL, phAfter(ca, ACID_V, BASE_C, eq - 0.05))).toBe(false);
      expect(reachedEnd(PHENOL, phAfter(ca, ACID_V, BASE_C, eq + 0.05))).toBe(true);
    }
  });

  it('has every indicator change inside the jump, so each gives the same volume', () => {
    const bad = [];
    for (const ind of INDICATORS) {
      if (reachedEnd(ind, phAfter(0.1, 10, 0.1, 9.9))) bad.push(ind.id);
      if (!reachedEnd(ind, phAfter(0.1, 10, 0.1, 10.1))) bad.push(ind.id);
    }
    expect(bad).toEqual([]);
  });

  it('colours each indicator by its pH range', () => {
    expect(indicatorColor(PHENOL, 3)).toBe('rgb(248 250 252)');
    expect(indicatorColor(PHENOL, 12)).toBe('rgb(219 39 119)');
    expect(indicatorColor(ORANGE, 3)).toBe('rgb(220 38 38)');
  });

  it('checks the typed concentration against the reading', () => {
    expect(acidFromVolume(12)).toBeCloseTo(0.12, 9);
    expect(judgeResult(0.12, 12.05, null, PHENOL)).toBe('invalid');
    expect(judgeResult(0.12, 11, 0.11, PHENOL)).toBe('too-early');
    expect(judgeResult(0.12, 13, 0.13, PHENOL)).toBe('overshot');
    expect(judgeResult(0.12, 12.05, 0.2, PHENOL)).toBe('wrong');
    expect(judgeResult(0.12, 12.05, 0.12, PHENOL)).toBe('right');
    expect(overshot(0.12, 12.1)).toBe(false);
  });
});
