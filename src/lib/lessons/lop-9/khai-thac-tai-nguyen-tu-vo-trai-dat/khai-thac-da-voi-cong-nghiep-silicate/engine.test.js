import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { LINES, burnLimestone } from './engine.js';

describe('burnLimestone', () => {
  it('splits pure CaCO3 into 56 % quicklime and 44 % carbon dioxide', () => {
    expect(burnLimestone(100, 100)).toEqual({ caco3: 100, cao: 56, co2: 44, solid: 56 });
  });

  it('keeps the impurities in the solid', () => {
    expect(burnLimestone(10, 90)).toEqual({ caco3: 9, cao: 5.04, co2: 3.96, solid: 6.04 });
  });

  it('rejects impossible purities', () => {
    expect(() => burnLimestone(1, 120)).toThrow(RangeError);
  });
});

describe('production lines', () => {
  it('write only balanced equations', () => {
    const wrong = LINES.flatMap((l) => l.stages.flatMap((s) => s.equations ?? [])).filter(
      (e) => !isBalancedText(e),
    );
    expect(wrong).toEqual([]);
  });

  it('have unique ids and at least three stages each', () => {
    expect(new Set(LINES.map((l) => l.id)).size).toBe(LINES.length);
    expect(LINES.filter((l) => l.stages.length < 3)).toEqual([]);
  });
});
