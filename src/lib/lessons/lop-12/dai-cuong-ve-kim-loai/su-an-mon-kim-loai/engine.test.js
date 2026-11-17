import { describe, expect, it } from 'vitest';
import { SETTINGS, ranking, setting, stateAt } from './engine.js';

describe('nail corrosion model', () => {
  it('orders the tubes as the experiment does', () => {
    expect(ranking(10).map((s) => s.id)).toEqual([
      'dong',
      'muoi',
      'nuoc',
      'khong-oxi',
      'kho',
      'kem',
    ]);
  });

  it('protects the nail wound with zinc while the zinc is eaten', () => {
    const zn = stateAt(setting('kem'), 10);
    expect(zn.rust).toBe(0);
    expect(zn.wire).toBeGreaterThan(0.5);
  });

  it('keeps every share between 0 and 1', () => {
    const bad = SETTINGS.filter((s) => {
      const st = stateAt(s, 30);
      return st.rust < 0 || st.rust > 1 || st.wire < 0 || st.wire > 1;
    });
    expect(bad).toEqual([]);
    expect(stateAt(setting('nuoc'), 0).rust).toBe(0);
  });
});
