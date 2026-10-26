import { describe, expect, it } from 'vitest';
import { molarMass } from '#lib/domain/formula.js';
import {
  FERTILISERS,
  NEED,
  NPK_MIX,
  SOIL_SHARE,
  advice,
  applied,
  grow,
  response,
} from './engine.js';

describe('fertilisers', () => {
  it('use element fractions that match the formulas', () => {
    for (const f of FERTILISERS) {
      const m = molarMass(f.formula);
      const share =
        f.element === 'N' ? (2 * 14.007) / m : f.element === 'P' ? (2 * 30.974) / m : 39.098 / m;
      expect(f.fraction, f.id).toBeCloseTo(share, 2);
    }
    expect(FERTILISERS[0].fraction).toBeCloseTo(0.4667, 4);
  });
});

describe('response', () => {
  it('rises, plateaus and falls', () => {
    expect(response(0.5)).toBe(0.5);
    expect(response(1)).toBe(1);
    expect(response(1.5)).toBe(1);
    expect(response(2)).toBeLessThan(1);
    expect(response(5)).toBe(0);
  });
});

describe('grow', () => {
  const none = { N: 0, P: 0, K: 0 };
  /** @param {'N' | 'P' | 'K'} k */
  const rest = (k) => NEED[k] * (1 - SOIL_SHARE);

  it('without fertiliser grows on the soil alone', () => {
    const r = grow(none);
    expect(r.growth).toBeCloseTo(SOIL_SHARE, 9);
    expect(r.runoff).toBeCloseTo(0, 9);
    expect(r.pollution).toBe('thấp');
  });

  it('is best and clean when every element is just enough', () => {
    const r = grow({ N: rest('N'), P: rest('P'), K: rest('K') });
    expect(r.growth).toBeCloseTo(1, 9);
    expect(r.limiting).toBeNull();
    expect(r.pollution).toBe('thấp');
    expect(advice(r)).toContain('cân đối');
  });

  it('is held back by the scarcest element, and the rest runs off', () => {
    const r = grow({ N: rest('N'), P: 0, K: rest('K') });
    expect(r.limiting).toBe('P');
    expect(r.growth).toBeCloseTo(SOIL_SHARE, 9);
    expect(r.runoff).toBeGreaterThan(2);
    expect(advice(r)).toContain('phosphorus');
  });

  it('burns the crop and pollutes with far too much nitrogen', () => {
    const r = grow({ N: 10, P: rest('P'), K: rest('K') });
    expect(r.burning).toBe('N');
    expect(r.growth).toBeLessThan(1);
    expect(r.pollution).toBe('cao');
    expect(advice(r)).toContain('phân đạm');
  });
});

describe('applied', () => {
  it('converts fertiliser masses into element masses', () => {
    const a = applied('don', { urea: 6, super: 0, kcl: 0 }, 0);
    expect(a.N).toBeCloseTo(2.8, 9);
    expect(a.P).toBe(0);
    const m = applied('npk', { urea: 0, super: 0, kcl: 0 }, 12);
    expect(m.N).toBeCloseTo(12 * NPK_MIX.N, 9);
  });

  it('lets a suitable NPK dose feed the crop well', () => {
    expect(grow(applied('npk', { urea: 0, super: 0, kcl: 0 }, 12)).growth).toBeCloseTo(1, 9);
  });
});
