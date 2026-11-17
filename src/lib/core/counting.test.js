// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { arrangeCount, choose, factorial, pascalRow } from './counting.js';

describe('counting', () => {
  it('computes factorials', () => {
    expect([0, 1, 5, 10].map(factorial)).toEqual([1, 1, 120, 3628800]);
  });

  it('counts arrangements and combinations, 0 out of range', () => {
    expect(arrangeCount(5, 3)).toBe(60);
    expect(arrangeCount(5, 6)).toBe(0);
    expect(choose(5, 2)).toBe(10);
    expect(choose(52, 5)).toBe(2598960);
    expect(choose(5, -1)).toBe(0);
    expect(choose(5, 6)).toBe(0);
    expect(choose(0, 0)).toBe(1);
  });

  it('agrees with n!/(k!(n − k)!) for every small n and k', () => {
    for (let n = 0; n <= 15; n++) {
      for (let k = 0; k <= n; k++) {
        expect(choose(n, k)).toBe(factorial(n) / (factorial(k) * factorial(n - k)));
      }
    }
  });

  it('lists a row of Pascal’s triangle', () => {
    expect(pascalRow(4)).toEqual([1, 4, 6, 4, 1]);
  });
});
