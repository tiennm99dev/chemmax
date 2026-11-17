import { describe, expect, it } from 'vitest';
import { ionValence, metal } from '../_shared/transition.js';
import { CHALLENGES, judgeD } from './engine.js';

describe('counting the 3d electrons of an ion', () => {
  it('accepts the 3d count left after the 4s electrons go', () => {
    expect(judgeD('Fe', 3, 5).ok).toBe(true);
    expect(judgeD('Cr', 3, 3).ok).toBe(true);
    expect(judgeD('Cu', 2, 9).ok).toBe(true);
    expect(judgeD('Ti', 4, 0).ok).toBe(true);
  });

  it('names the slip of emptying 3d first', () => {
    const v = judgeD('Fe', 2, 4);
    expect(v.ok).toBe(false);
    expect(v.text).toContain('4s bị nhường trước');
    expect(v.text).toContain('3d^{6}');
  });

  it('only asks about ions the atom can form', () => {
    const bad = CHALLENGES.filter(([s, q]) => {
      try {
        ionValence(metal(s).z, q);
        return false;
      } catch {
        return true;
      }
    });
    expect(bad).toEqual([]);
  });
});
