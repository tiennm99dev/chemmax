import { describe, expect, it } from 'vitest';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import { SCENARIOS, mix, scenario, tubeAfter } from './engine.js';

describe('the virtual test tube', () => {
  it('writes balanced equations at every drop', () => {
    const bad = [];
    for (const s of SCENARIOS)
      for (let d = 0; d <= s.drops + 1; d++) {
        const t = tubeAfter(s, d);
        if (t.equation && !isBalancedText(t.equation)) bad.push([s.id, d, t.equation]);
      }
    expect(bad).toEqual([]);
    const eq = tubeAfter(scenario('cu-hcl'), 1).equation ?? '';
    expect(terms(eq).left.map((t) => t.formula)).toEqual(['[Cu(H2O)6]^2+', 'Cl^-']);
  });

  it('forms then dissolves the copper hydroxide precipitate with ammonia', () => {
    const s = scenario('cu-nh3');
    expect(tubeAfter(s, 0).precipitate).toBeNull();
    expect(tubeAfter(s, 2).amount).toBe(0.5);
    expect(tubeAfter(s, 4).amount).toBe(1);
    expect(tubeAfter(s, 8).amount).toBe(0.5);
    const end = tubeAfter(s, 12);
    expect(end).toMatchObject({ precipitate: null, amount: 0, finished: true });
    expect(end.liquid).toBe('#1d4ed8');
    expect(end.species).toContain('NH_3');
  });

  it('turns copper(II) yellow with concentrated hydrochloric acid', () => {
    const s = scenario('cu-hcl');
    expect(tubeAfter(s, 8).liquid).toBe('#facc15');
    expect(tubeAfter(s, 4).seen).toContain('xanh lá');
    expect(tubeAfter(s, 8).species).toContain('CuCl_4');
  });

  it('dissolves silver chloride in ammonia', () => {
    const s = scenario('agcl-nh3');
    expect(tubeAfter(s, 0).amount).toBe(1);
    expect(tubeAfter(s, 2).amount).toBe(0.5);
    expect(tubeAfter(s, 4)).toMatchObject({ precipitate: null, finished: true });
    expect(() => scenario('x')).toThrow();
  });

  it('mixes colours', () => {
    expect(mix('#000000', '#ffffff', 0.5)).toBe('#808080');
    expect(mix('#123456', '#abcdef', 0)).toBe('#123456');
  });
});
