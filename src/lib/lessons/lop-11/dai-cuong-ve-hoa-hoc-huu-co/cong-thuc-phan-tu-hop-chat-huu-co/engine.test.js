import { describe, expect, it } from 'vitest';
import {
  SAMPLES,
  formulaText,
  molecularFrom,
  molecularIon,
  oxygenLeft,
  ratioRows,
  simplestCounts,
} from './engine.js';

describe('the simplest formula', () => {
  it('finds the book formula for camphor and eugenol', () => {
    const camphor = simplestCounts({ C: 78.94, H: 10.53, O: 10.53 });
    expect(camphor && formulaText(camphor.counts)).toBe('C10H16O');
    const eugenol = simplestCounts({ C: 73.17, H: 7.31, O: 19.52 });
    expect(eugenol && formulaText(eugenol.counts)).toBe('C5H6O');
  });

  it('keeps the true ratio of a long alkane instead of rounding it', () => {
    const nonane = simplestCounts({ C: 84.38, H: 15.62 });
    expect(nonane && formulaText(nonane.counts)).toBe('C9H20');
  });

  it('multiplies up a ratio that is not whole at first', () => {
    const r = simplestCounts({ C: 62.07, H: 10.34, O: 27.59 });
    expect(r && formulaText(r.counts)).toBe('C3H6O');
    const half = simplestCounts({ C: 81.82, H: 18.18 });
    expect(half && formulaText(half.counts)).toBe('C3H8');
    expect(half?.multiplier).toBe(3);
  });

  it('gives no formula when the ratio cannot be made whole', () => {
    expect(simplestCounts({ C: 37.3, H: 11.9, O: 50.8 })).toBeNull();
    expect(simplestCounts({})).toBeNull();
  });

  it('shows the share of each element', () => {
    const rows = ratioRows({ C: 40, H: 6.67, O: 53.33 });
    expect(rows.map((r) => r.el)).toEqual(['C', 'H', 'O']);
    expect(rows[0].share).toBeCloseTo(40 / 12);
    expect(rows[2].relative).toBeCloseTo(1, 2);
  });
});

describe('the molecular formula', () => {
  it('rebuilds the formula of every sample from its largest m/z', () => {
    const wrong = SAMPLES.flatMap((s) => {
      const simple = simplestCounts(s.percent);
      if (!simple) return [`${s.id} no ratio`];
      const m = molecularFrom(simple.counts, molecularIon(s.peaks));
      return m.formula === s.formula ? [] : [`${s.id} ${m.formula}`];
    });
    expect(wrong).toEqual([]);
  });

  it('adds up every sample to 100 percent', () => {
    const wrong = SAMPLES.filter((s) => {
      const sum = Object.values(s.percent).reduce((a, b) => a + b, 0);
      return Math.abs(sum - 100) > 0.05;
    });
    expect(wrong.map((s) => s.id)).toEqual([]);
  });

  it('keeps every peak m/z at or below the molecular mass, in ascending order', () => {
    const wrong = SAMPLES.filter((s) => {
      const mz = s.peaks.map((p) => p[0]);
      return mz.some((v, i) => i > 0 && v <= mz[i - 1]);
    });
    expect(wrong.map((s) => s.id)).toEqual([]);
  });

  it('refuses a mass that is not a whole multiple', () => {
    expect(molecularFrom({ C: 2, H: 6, O: 1 }, 31).formula).toBeNull();
    expect(molecularFrom({ C: 1, H: 2, O: 1 }, 15).n).toBeNull();
  });

  it('refuses a fragment one mass unit off a whole multiple', () => {
    const unit = { C: 2, H: 4, O: 1 };
    expect(molecularFrom(unit, 43).n).toBeNull();
    expect(molecularFrom(unit, 45).n).toBeNull();
    expect(molecularFrom(unit, 88.1).formula).toBe('C4H8O2');
  });

  it('accepts a fragment that happens to be a multiple, which is why the largest m/z matters', () => {
    expect(molecularFrom({ C: 1, H: 1 }, 52).formula).toBe('C4H4');
    expect(molecularFrom({ C: 1, H: 1 }, 78).formula).toBe('C6H6');
  });
});

describe('oxygen by difference', () => {
  it('takes what is left', () => {
    expect(oxygenLeft(40, 6.67, 0)).toBe(53.33);
    expect(oxygenLeft(92.31, 7.69, 0)).toBe(0);
  });

  it('refuses shares over 100 percent or below zero', () => {
    expect(oxygenLeft(80, 30, 0)).toBeNull();
    expect(oxygenLeft(-5, 10, 0)).toBeNull();
  });
});
