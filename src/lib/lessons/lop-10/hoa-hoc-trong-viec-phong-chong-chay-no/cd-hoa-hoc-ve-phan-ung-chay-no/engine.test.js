import { describe, expect, it } from 'vitest';
import {
  FUELS,
  GASES,
  axisTop,
  combustionEnthalpy,
  explosionZone,
  heatOf,
  oxygenInMixture,
  rateDrop,
  stoichiometricPercent,
  volumeToLowerLimit,
} from './engine.js';

/** @param {string} id */
const fuel = (id) => /** @type {import('./engine.js').Fuel} */ (FUELS.find((f) => f.id === id));
/** @param {string} id */
const gas = (id) => /** @type {import('./engine.js').Gas} */ (GASES.find((g) => g.id === id));

describe('heat of combustion', () => {
  it('reproduces the enthalpies the lesson quotes', () => {
    /** @type {Record<string, number>} */
    const expected = {
      carbon: -394,
      methane: -802,
      propane: -2045,
      butane: -2660,
      octane: -5080,
      ethanol: -1236,
    };
    for (const f of FUELS) expect(combustionEnthalpy(f)).toBe(expected[f.id]);
  });

  it('gives the heat per kilogram', () => {
    expect(heatOf(fuel('octane'), 1000)).toBeCloseTo(44561, 0);
    expect(heatOf(fuel('methane'), 1000)).toBeCloseTo(50125, 0);
  });

  it('gives the LPG mix and other worked figures', () => {
    const perMol = 0.4 * 2045 + 0.6 * 2660;
    expect(perMol).toBeCloseTo(2414, 6);
    expect((perMol / (0.4 * 44 + 0.6 * 58)) * 1000).toBeCloseTo(46069, 0);
    expect((-968 + 2 * 365.6) / 2).toBeCloseTo(-118.4, 6);
    expect(((2.7e9 / 80) * 118.4) / 1e9).toBeCloseTo(3.996, 3);
  });
});

describe('rate and oxygen', () => {
  it('falls in proportion to oxygen', () => {
    expect(rateDrop(21, 16)).toBeCloseTo(1.3125, 4);
    expect(rateDrop(21, 14)).toBeCloseTo(1.5, 6);
    expect(rateDrop(0.21, 0.66 * 0.21)).toBeCloseTo(1.515, 3);
  });
});

describe('explosion limits', () => {
  it('sorts a share of gas against the limits', () => {
    const methane = gas('methane');
    expect(explosionZone(methane, 4.9)).toBe('lean');
    expect(explosionZone(methane, 5)).toBe('inside');
    expect(explosionZone(methane, 15)).toBe('inside');
    expect(explosionZone(methane, 15.1)).toBe('rich');
  });

  it('finds the exact mixture inside the limits for every gas', () => {
    const outside = GASES.filter((g) => explosionZone(g, stoichiometricPercent(g)) !== 'inside');
    expect(outside.map((g) => g.id)).toEqual([]);
    expect(stoichiometricPercent(gas('methane'))).toBeCloseTo(9.5, 1);
  });

  it('keeps the upper limit on the chart', () => {
    const cut = GASES.filter((g) => axisTop(g) <= g.upper || axisTop(g) > 100);
    expect(cut.map((g) => g.id)).toEqual([]);
  });

  it('computes the oxygen left and the volume to the limit', () => {
    expect(oxygenInMixture(10)).toBeCloseTo(18.9, 6);
    expect(volumeToLowerLimit(gas('methane'), 40)).toBeCloseTo(2, 6);
    expect(volumeToLowerLimit(gas('butane'), 30)).toBeCloseTo(0.54, 6);
  });
});
