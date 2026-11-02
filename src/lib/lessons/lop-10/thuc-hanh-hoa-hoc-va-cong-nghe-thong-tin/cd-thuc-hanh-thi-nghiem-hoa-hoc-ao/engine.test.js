import { describe, expect, it } from 'vitest';
import {
  ACID_VOLUME,
  BENCH_ITEMS,
  DROP,
  RATE_EXPERIMENTS,
  SAMPLES,
  acidConcentration,
  averageRate,
  balloonRadius,
  benchReady,
  emptyBench,
  equivalenceVolume,
  flaskPh,
  gasVolume,
  itemsLeft,
  meanOf,
  placeItem,
  titrationStage,
} from './engine.js';

describe('setting up the bench', () => {
  it('refuses a chemical before its container', () => {
    const r = placeItem(emptyBench(), 'naoh', 'stand');
    expect(r.ok).toBe(false);
    expect(r.message).toContain('burette');
  });

  it('refuses the wrong place and the spare item', () => {
    const b = placeItem(emptyBench(), 'burette', 'stand').bench;
    expect(placeItem(b, 'hcl', 'stand').ok).toBe(false);
    expect(placeItem(b, 'caco3', 'bench').ok).toBe(false);
    expect(placeItem(b, 'nothing', 'bench').ok).toBe(false);
  });

  it('is ready once every needed item is placed, leaving the spare out', () => {
    let b = emptyBench();
    for (const item of BENCH_ITEMS) {
      if (item.slot) b = placeItem(b, item.id, item.slot).bench;
    }
    expect(benchReady(b)).toBe(true);
    expect(itemsLeft(b)).toEqual([]);
    expect(b.caco3).toBeUndefined();
  });
});

describe('titration', () => {
  it('neutralises at the volume from CaVa = CbVb', () => {
    expect(SAMPLES.map((s) => equivalenceVolume(s.concentration))).toEqual([16, 24, 30]);
  });

  it('runs from acid, through 7, to base', () => {
    expect(flaskPh(0.1, 0)).toBeCloseTo(1, 6);
    expect(flaskPh(0.12, 24)).toBe(7);
    expect(flaskPh(0.12, 23.95)).toBeLessThan(5);
    expect(flaskPh(0.12, 24.05)).toBeGreaterThan(9);
  });

  it('turns pink on the first drop past equivalence and calls more an overshoot', () => {
    const c = 0.08;
    const eq = equivalenceVolume(c);
    expect(titrationStage(c, eq - DROP)).toBe('before');
    expect(titrationStage(c, eq)).toBe('before');
    expect(titrationStage(c, eq + DROP)).toBe('end');
    expect(titrationStage(c, eq + 2 * DROP)).toBe('end');
    expect(titrationStage(c, eq + 1)).toBe('past');
  });

  it('reports the acid concentration from the reading', () => {
    expect(ACID_VOLUME).toBe(20);
    expect(acidConcentration(24)).toBeCloseTo(0.12, 9);
    expect(meanOf([24, 24.1, 23.9])).toBeCloseTo(24, 9);
    expect(meanOf([])).toBeNull();
  });
});

describe('reaction rate experiments', () => {
  /** @param {string} id */
  const tubes = (id) =>
    /** @type {import('./engine.js').RateExperiment} */ (RATE_EXPERIMENTS.find((e) => e.id === id))
      .tubes;

  it('ends at the gas volume stoichiometry allows', () => {
    const [one, two] = tubes('concentration');
    expect(gasVolume(one, 1e6)).toBeCloseTo(123.95, 2);
    expect(gasVolume(two, 1e6)).toBeCloseTo(247.9, 2);
    expect(gasVolume(one, 0)).toBe(0);
  });

  it('doubles the rate at double concentration', () => {
    const [one, two] = tubes('concentration');
    expect(averageRate(two, 20) / averageRate(one, 20)).toBeCloseTo(2, 6);
    expect(averageRate(one, 0)).toBe(0);
  });

  it('speeds up when warmed or catalysed but keeps the final amount', () => {
    for (const id of ['temperature', 'catalyst']) {
      const [slow, fast] = tubes(id);
      expect(gasVolume(fast, 20)).toBeGreaterThan(gasVolume(slow, 20));
      expect(fast.moles).toBe(slow.moles);
    }
  });

  it('grows a balloon with its gas', () => {
    expect(balloonRadius(200)).toBeGreaterThan(balloonRadius(20));
    expect(balloonRadius(-1)).toBe(5);
  });
});
