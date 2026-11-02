import { describe, expect, it } from 'vitest';
import {
  EQUATIONS,
  checkUnknown,
  countLeft,
  expectedLeft,
  lifetimes,
  nuclideName,
  nuclideTex,
  readWhole,
} from './engine.js';

describe('decay', () => {
  it('halves the expected count every half-life', () => {
    expect(expectedLeft(400, 8, 8)).toBe(200);
    expect(expectedLeft(400, 24, 8)).toBe(50);
    expect(expectedLeft(400, 0, 8)).toBe(400);
  });

  it('gives a run that scatters closely around the expected curve', () => {
    const far = [1, 2, 3, 7].flatMap((seed) => {
      const lives = lifetimes(400, seed);
      return [1, 2, 3].filter((h) => Math.abs(countLeft(lives, h) - 400 / 2 ** h) > 45);
    });
    expect(far).toEqual([]);
  });

  it('is the same run for the same seed and never grows', () => {
    const a = lifetimes(50, 9);
    expect(lifetimes(50, 9)).toEqual(a);
    expect(countLeft(a, 0)).toBe(50);
    expect(countLeft(a, 2)).toBeLessThanOrEqual(countLeft(a, 1));
  });
});

describe('nuclear equations', () => {
  it('stores an unknown that conserves mass number and charge', () => {
    const wrong = EQUATIONS.filter((eq) => !checkUnknown(eq, eq.answer.a, eq.answer.z).ok);
    expect(wrong).toEqual([]);
  });

  it('stores the real element for each nuclide charge', () => {
    expect(nuclideName(234, 90)).toContain('thorium');
    expect(nuclideName(92, 36)).toContain('krypton');
    expect(nuclideName(14, 7)).toContain('nitrogen');
  });

  it('rejects a wrong unknown and reports what is needed', () => {
    const r = checkUnknown(EQUATIONS[0], 234, 92);
    expect(r).toEqual({ ok: false, sumA: 238, sumZ: 92, needA: 234, needZ: 90 });
  });

  it('names the particles', () => {
    expect(nuclideName(4, 2)).toContain('α');
    expect(nuclideName(0, -1)).toContain('β');
    expect(nuclideName(0, 1)).toContain('positron');
    expect(nuclideName(1, 0)).toBe('neutron');
    expect(nuclideName(7, -3)).toBe('một hạt không có thật');
  });

  it('writes TeX and reads typed numbers', () => {
    expect(nuclideTex({ a: 0, z: -1, symbol: 'e' })).toBe('{}^{0}_{-1}\\mathrm{e}');
    expect(readWhole(' −1 ')).toBe(-1);
    expect(readWhole('234')).toBe(234);
    expect(readWhole('1,5')).toBeNull();
    expect(readWhole('')).toBeNull();
  });
});
