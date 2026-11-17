import { describe, expect, it } from 'vitest';
import { frameProblems } from '../_shared/frame-check.js';
import { ALKENES, CARBONYL_FRAMES, addition, barrier, profile } from './engine.js';

/** @param {string} id */
const alkene = (id) => {
  const found = ALKENES.find((a) => a.id === id);
  if (!found) throw new Error(id);
  return found;
};

describe('electrophilic addition', () => {
  it('gives the Markovnikov product through the more stable carbocation', () => {
    const r = addition(alkene('propene'), 'hbr', 0);
    expect(r.main).toBe(true);
    expect(r.order).toBe(2);
    expect(r.name).toBe('2-bromopropane');
    expect(r.product).toBe('\\mathrm{CH_3{-}CHBr{-}CH_3}');
    const minor = addition(alkene('propene'), 'hbr', 1);
    expect(minor.main).toBe(false);
    expect(minor.name).toBe('1-bromopropane');
  });

  it('names the alcohols of hydration', () => {
    expect(addition(alkene('2-methylpropene'), 'h2o', 0).name).toBe('2-methylpropan-2-ol');
    expect(addition(alkene('2-methylpropene'), 'h2o', 0).product).toBe(
      '\\mathrm{CH_3{-}C(OH)(CH_3){-}CH_3}',
    );
    expect(addition(alkene('but-1-ene'), 'h2o', 1).name).toBe('butan-1-ol');
    expect(addition(alkene('but-1-ene'), 'h2o', 1).product).toBe(
      '\\mathrm{CH_2OH{-}CH_2{-}CH_2{-}CH_3}',
    );
    expect(addition(alkene('propene'), 'h2o', 0).product).toBe('\\mathrm{CH_3{-}CH(OH){-}CH_3}');
  });

  it('puts the H on the carbon with more hydrogens in every main product', () => {
    for (const a of ALKENES) {
      expect(a.sites[0].order).toBeGreaterThan(a.sites[1].order);
      expect(a.carbons[0]).toBe('CH_2');
    }
  });

  it('draws a lower barrier for a more stable carbocation', () => {
    expect(barrier(3)).toBeLessThan(barrier(2));
    expect(barrier(2)).toBeLessThan(barrier(1));
    const p = profile(2);
    expect(p[0]).toEqual({ s: 0, e: 0 });
    expect(p.at(-1)?.e).toBe(-40);
    expect(Math.max(...p.map((q) => q.e))).toBe(barrier(2));
  });

  it('has consistent carbonyl frames', () => {
    expect(frameProblems(CARBONYL_FRAMES)).toEqual([]);
  });
});
