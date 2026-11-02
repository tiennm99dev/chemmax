import { describe, expect, it } from 'vitest';
import {
  ACTION_NOTES,
  ACTION_SHIFT,
  HI_K,
  addGas,
  brownness,
  direction,
  equilibriumNo2,
  hiEquilibrium,
  isSettled,
  kc,
  pressure,
  rateShares,
  relax,
  setVolume,
  settled,
  unitsOf,
} from './engine.js';

/**
 * @param {import('./engine.js').GasState} s
 */
function untilSettled(s) {
  let now = s;
  for (let i = 0; i < 400 && !isSettled(now); i++) now = relax(now, 0.1);
  return now;
}

describe('the NO2 and N2O4 equilibrium', () => {
  it('has a K_C that falls as the temperature rises', () => {
    expect(kc(25)).toBeCloseTo(167, 6);
    expect(kc(0)).toBeGreaterThan(kc(25));
    expect(kc(100)).toBeLessThan(kc(25));
  });

  it('solves both the mass balance and K_C', () => {
    const k = kc(25);
    const no2 = equilibriumNo2(0.1, k);
    const n2o4 = (0.1 - no2) / 2;
    expect(n2o4 / (no2 * no2)).toBeCloseTo(k, 6);
  });

  it('gets browner when heated and paler when cooled', () => {
    const start = settled(25, 1, 0.1);
    const hot = untilSettled({ ...start, tC: 80 });
    const cold = untilSettled({ ...start, tC: 5 });
    expect(direction({ ...start, tC: 80 })).toBe('nghich');
    expect(direction({ ...start, tC: 5 })).toBe('thuan');
    expect(hot.no2).toBeGreaterThan(start.no2);
    expect(cold.no2).toBeLessThan(start.no2);
  });

  it('darkens at once when compressed, then fades as equilibrium shifts forward', () => {
    const start = settled(25, 1, 0.1);
    const pressed = setVolume(start, 0.5);
    expect(pressed.no2).toBeCloseTo(2 * start.no2, 9);
    expect(direction(pressed)).toBe('thuan');
    const after = untilSettled(pressed);
    expect(after.no2).toBeLessThan(pressed.no2);
    expect(after.no2).toBeGreaterThan(start.no2);
    expect(after.n2o4 / after.no2 / after.no2).toBeCloseTo(kc(25), 1);
  });

  it('shifts against an added gas and keeps K_C and the N atoms', () => {
    const start = settled(25, 1, 0.1);
    const more = addGas(start, 'no2', 0.05);
    expect(direction(more)).toBe('thuan');
    const after = untilSettled(more);
    expect(unitsOf(after)).toBeCloseTo(0.15, 9);
    expect(after.n2o4 / after.no2 / after.no2).toBeCloseTo(kc(25), 1);
    expect(direction(addGas(start, 'n2o4', 0.05))).toBe('nghich');
  });

  it('makes the two rates equal exactly at equilibrium', () => {
    const start = settled(25, 1, 0.1);
    expect(rateShares(start)).toEqual({ forward: 1, reverse: 1 });
    const pressed = rateShares(setVolume(start, 0.5));
    expect(pressed.forward).toBe(1);
    expect(pressed.reverse).toBeLessThan(1);
  });

  it('gives a sensible pressure and a colour that grows with NO2', () => {
    const start = settled(25, 1, 0.1);
    expect(pressure(start)).toBeGreaterThan(1);
    expect(pressure(start)).toBeLessThan(2);
    expect(brownness(0.05)).toBeGreaterThan(brownness(0.01));
  });

  it('has a note for every action', () => {
    expect(Object.keys(ACTION_NOTES)).toHaveLength(6);
  });

  it('runs the way the principle says after each action', () => {
    const start = settled(25, 1, 0.1);
    /** @type {Record<import('./engine.js').GasAction, import('./engine.js').GasState>} */
    const after = {
      heat: { ...start, tC: 40 },
      cool: { ...start, tC: 10 },
      compress: setVolume(start, 0.5),
      expand: setVolume(start, 2),
      'add-no2': addGas(start, 'no2', 0.02),
      'add-n2o4': addGas(start, 'n2o4', 0.02),
    };
    const bad = Object.entries(after).filter(
      ([action, gas]) =>
        direction(gas) !== ACTION_SHIFT[/** @type {keyof typeof ACTION_SHIFT} */ (action)],
    );
    expect(bad).toEqual([]);
  });
});

describe('H2 + I2 ⇌ 2HI at 445 °C', () => {
  it('reproduces the book experiment', () => {
    const eq = hiEquilibrium(1, 1, 0);
    expect(eq?.hi).toBeCloseTo(1.6, 9);
    expect(eq?.h2).toBeCloseTo(0.2, 9);
  });

  it('reaches the same K_C from any start', () => {
    const starts = [
      [1, 1, 0],
      [0.5, 1, 0],
      [0, 0, 1],
      [0.2, 0, 0.8],
      [1, 0.3, 0.5],
    ];
    const bad = [];
    for (const [a, b, c] of starts) {
      const eq = hiEquilibrium(a, b, c);
      if (!eq || eq.h2 < 0 || eq.i2 < 0 || eq.hi < 0) bad.push([a, b, c]);
      else if (Math.abs((eq.hi * eq.hi) / (eq.h2 * eq.i2) - HI_K) > 1e-6) bad.push([a, b, c]);
    }
    expect(bad).toEqual([]);
  });

  it('refuses a start that cannot react', () => {
    expect(hiEquilibrium(1, 0, 0)).toBeNull();
    expect(hiEquilibrium(0, 0, 0)).toBeNull();
  });
});
