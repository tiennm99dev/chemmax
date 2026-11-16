// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { clockAngle, foldUpper, kindOf, measureFrom, rayDirection } from './protractor.js';

describe('protractor', () => {
  it('sorts angles by kind', () => {
    expect([30, 90, 120, 180].map(kindOf)).toEqual(['nhon', 'vuong', 'tu', 'bet']);
  });

  it('turns a measure into the second side and back on either scale', () => {
    expect(rayDirection(50, 'phai')).toBe(50);
    expect(rayDirection(50, 'trai')).toBe(130);
    expect(measureFrom(130, 'trai')).toBe(50);
    expect(foldUpper(200)).toBe(180);
    expect(foldUpper(300)).toBe(0);
    expect(foldUpper(75)).toBe(75);
  });

  it('measures the hands of a clock', () => {
    expect([3, 6, 9, 12, 4, 8].map(clockAngle)).toEqual([90, 180, 90, 0, 120, 120]);
  });
});
