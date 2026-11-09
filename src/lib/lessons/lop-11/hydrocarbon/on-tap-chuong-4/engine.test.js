import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { REAGENTS, SAMPLES, dealSamples, observe, signature } from './engine.js';

describe('virtual reagent bench', () => {
  it('tells every sample apart by its state and reactions', () => {
    const patterns = new Set(SAMPLES.map((s) => signature(s.id)));
    expect(patterns.size).toBe(SAMPLES.length);
  });

  it('decolours bromine water only with the unsaturated gases', () => {
    const changed = SAMPLES.filter((s) => observe(s.id, 'bromine').changed).map((s) => s.id);
    expect(changed).toEqual(['ethylene', 'acetylene']);
  });

  it('gives a precipitate with AgNO3/NH3 only for acetylene', () => {
    const changed = SAMPLES.filter((s) => observe(s.id, 'agno3').changed).map((s) => s.id);
    expect(changed).toEqual(['acetylene']);
  });

  it('oxidises toluene only when heated, and never benzene or methane', () => {
    expect(observe('toluene', 'kmno4').changed).toBe(false);
    expect(observe('toluene', 'kmno4-hot').changed).toBe(true);
    const never = ['benzene', 'methane'].flatMap((s) =>
      REAGENTS.filter((r) => observe(/** @type {'benzene'} */ (s), r.id).changed),
    );
    expect(never).toEqual([]);
  });

  it('deals each sample exactly once', () => {
    const wrong = [1, 2, 3, 4, 5].filter((seed) => {
      const dealt = dealSamples(rng(seed));
      return new Set(dealt).size !== SAMPLES.length;
    });
    expect(wrong).toEqual([]);
  });
});
