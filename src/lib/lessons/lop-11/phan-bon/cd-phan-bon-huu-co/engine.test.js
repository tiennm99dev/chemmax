import { describe, expect, it } from 'vitest';
import {
  AMBIENT,
  DAYS,
  advice,
  hotDays,
  mixRatio,
  moistureFactor,
  peakTemp,
  ratioFactor,
  simulate,
} from './engine.js';

const good = { cn: 30, moisture: 55, turnEvery: 7 };

describe('mix and factors', () => {
  it('works out the C/N of a mix', () => {
    expect(mixRatio(10, 5)).toBe(30);
    expect(mixRatio(10, 10)).toBeCloseTo(23.08, 2);
    expect(mixRatio(0, 0)).toBe(0);
  });

  it('peaks the moisture factor at 50 – 60 % and the C/N factor near 28', () => {
    expect(moistureFactor(25)).toBe(0);
    expect(moistureFactor(55)).toBe(1);
    expect(moistureFactor(80)).toBeLessThan(0.5);
    expect(ratioFactor(28)).toBe(1);
    expect(ratioFactor(60)).toBeLessThan(0.4);
    expect(ratioFactor(12)).toBeLessThan(0.4);
  });
});

describe('compost pile', () => {
  it('heats a good pile into the hot range, then cools and cures it', () => {
    const run = simulate(good);
    expect(run).toHaveLength(DAYS + 1);
    expect(peakTemp(run)).toBeGreaterThan(60);
    expect(peakTemp(run)).toBeLessThan(72);
    expect(hotDays(run)).toBeGreaterThanOrEqual(3);
    expect(run[DAYS].phase).toBe('chin');
    expect(run[DAYS].temp).toBeLessThan(AMBIENT + 5);
  });

  it('keeps a poor pile out of the hot range', () => {
    const poor = [
      { ...good, moisture: 35 },
      { ...good, moisture: 75 },
      { ...good, cn: 60 },
      { ...good, cn: 12 },
    ].filter((s) => hotDays(simulate(s)) > 0 || peakTemp(simulate(s)) > 50);
    expect(poor).toEqual([]);
  });

  it('leaves more undecomposed matter when the pile is never turned', () => {
    const turned = simulate(good)[DAYS].left;
    const still = simulate({ ...good, turnEvery: 0 })[DAYS].left;
    expect(still).toBeGreaterThan(turned + 0.1);
  });

  it('names the main problem first', () => {
    expect(advice({ ...good, moisture: 35 }, []).text).toContain('quá khô');
    expect(advice({ ...good, moisture: 75 }, []).text).toContain('quá ướt');
    expect(advice({ ...good, cn: 60 }, []).text).toContain('quá cao');
    expect(advice({ ...good, cn: 12 }, []).text).toContain('quá thấp');
    expect(advice({ ...good, turnEvery: 0 }, []).text).toContain('Không đảo');
    expect(advice(good, simulate(good)).ok).toBe(true);
  });
});
