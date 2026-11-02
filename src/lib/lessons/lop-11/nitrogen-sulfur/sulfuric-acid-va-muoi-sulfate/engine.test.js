import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { BOTTLES, MASS_RATIO, STAGES, acidTonnes, sulfateLook } from './engine.js';

describe('the contact process', () => {
  it('prints balanced equations', () => {
    const wrong = STAGES.flatMap((s) => s.options)
      .filter((o) => o.equation && !isBalancedText(o.equation))
      .map((o) => o.equation);
    expect(wrong).toEqual([]);
  });

  it('has a right and a wrong option at every stage', () => {
    const lacking = STAGES.filter(
      (s) => !s.options.some((o) => o.right) || !s.options.some((o) => !o.right),
    );
    expect(lacking).toEqual([]);
  });

  it('keeps the sulfur atoms when working out the yield', () => {
    expect(MASS_RATIO.s).toBeCloseTo(3.0625, 6);
    expect(MASS_RATIO.fes2).toBeCloseTo(196 / 120, 6);
    expect(acidTonnes('fes2', 1, 80)).toBeCloseTo(1.30667, 4);
    expect(acidTonnes('s', 1, 100)).toBeCloseTo(3.0625, 6);
  });
});

describe('the sulfate test', () => {
  it('prints balanced equations', () => {
    const wrong = BOTTLES.flatMap((b) => [b.withBarium, b.withAcid])
      .filter((e) => e !== null)
      .filter((e) => !isBalancedText(e));
    expect(wrong).toEqual([]);
  });

  it('shows nothing before the barium chloride', () => {
    expect(BOTTLES.every((b) => !sulfateLook(b, []).precipitate)).toBe(true);
  });

  it('lets carbonate fool barium chloride alone', () => {
    const cloudy = BOTTLES.filter((b) => sulfateLook(b, ['bacl2']).precipitate).map((b) => b.id);
    expect(cloudy).toEqual(['na2so4', 'h2so4', 'na2co3']);
  });

  it('keeps only the sulfate precipitate after the acid', () => {
    const left = BOTTLES.filter((b) => sulfateLook(b, ['bacl2', 'hcl']).precipitate).map(
      (b) => b.id,
    );
    expect(left).toEqual(BOTTLES.filter((b) => b.target).map((b) => b.id));
  });
});
