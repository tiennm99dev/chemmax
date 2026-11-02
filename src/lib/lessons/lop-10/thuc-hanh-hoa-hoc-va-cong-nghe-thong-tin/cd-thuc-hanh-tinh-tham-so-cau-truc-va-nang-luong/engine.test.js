import { describe, expect, it } from 'vitest';
import {
  KJ_PER_KCAL,
  PARAMS,
  WATER_MINIMUM,
  atMinimum,
  hasConverged,
  inputFile,
  optimiseStep,
  relativeError,
  waterHeat,
  worstRow,
} from './engine.js';

/** @param {Partial<import('./engine.js').OptState>} over */
const start = (over = {}) => ({
  r: 1.1,
  angle: 90,
  freeR: true,
  freeAngle: true,
  steps: 0,
  ...over,
});

/** @param {import('./engine.js').OptState} s */
function runToEnd(s) {
  let now = s;
  while (!hasConverged(now) && now.steps < 100) now = optimiseStep(now);
  return now;
}

describe('computed against measured', () => {
  it('converts the output file heat of formation of water', () => {
    expect(WATER_MINIMUM.heat * KJ_PER_KCAL).toBeCloseTo(-247.9041, 3);
    expect(PARAMS.heat[0].calc).toBeCloseTo(WATER_MINIMUM.heat * KJ_PER_KCAL, 0);
  });

  it('gives the relative errors the lesson quotes', () => {
    /** @param {'length' | 'angle' | 'heat'} kind @param {string} id */
    const err = (kind, id) =>
      relativeError(
        /** @type {import('./engine.js').ParamRow} */ (PARAMS[kind].find((r) => r.id === id)),
      );
    expect(err('length', 'h2o')).toBeCloseTo(0.31, 2);
    expect(err('angle', 'nh3')).toBeCloseTo(2.25, 2);
    expect(err('heat', 'h2o')).toBeCloseTo(2.52, 2);
    expect(err('heat', 'ch4')).toBeCloseTo(50.67, 2);
  });

  it('finds the worst row of each table', () => {
    expect(worstRow(PARAMS.heat).id).toBe('ch4');
    expect(worstRow(PARAMS.angle).id).toBe('nh3');
    expect(worstRow(PARAMS.length).id).toBe('c2h6');
  });

  it('keeps geometry errors small and heat errors larger', () => {
    const worstGeometry = Math.max(...PARAMS.length.map(relativeError));
    expect(worstGeometry).toBeLessThan(3);
    expect(relativeError(worstRow(PARAMS.heat))).toBeGreaterThan(worstGeometry * 10);
  });
});

describe('geometry optimisation', () => {
  it('lowers the heat at every step until it reaches the minimum', () => {
    let s = start();
    let last = waterHeat(s.r, s.angle);
    const rising = [];
    for (let i = 0; i < 8; i++) {
      s = optimiseStep(s);
      const now = waterHeat(s.r, s.angle);
      if (now >= last) rising.push(i);
      last = now;
    }
    expect(rising).toEqual([]);
  });

  it('reaches the geometry of the output file when everything is free', () => {
    const end = runToEnd(start());
    expect(hasConverged(end)).toBe(true);
    expect(end.steps).toBeLessThan(15);
    expect(end.r).toBeCloseTo(WATER_MINIMUM.r, 3);
    expect(Math.abs(end.angle - WATER_MINIMUM.angle)).toBeLessThan(0.05);
    expect(waterHeat(end.r, end.angle)).toBeCloseTo(WATER_MINIMUM.heat, 1);
  });

  it('tells a fixed angle near the minimum from the minimum itself', () => {
    expect(atMinimum(runToEnd(start()))).toBe(true);
    expect(atMinimum(runToEnd(start({ angle: 104.5, freeAngle: false })))).toBe(false);
  });

  it('stays above the minimum when a wrong angle is fixed', () => {
    const end = runToEnd(start({ freeAngle: false }));
    expect(hasConverged(end)).toBe(true);
    expect(end.angle).toBe(90);
    expect(waterHeat(end.r, end.angle)).toBeGreaterThan(WATER_MINIMUM.heat + 2);
  });

  it('writes the flags and keywords into the input file', () => {
    const file = inputFile(start({ r: 0.97, angle: 104.5, freeAngle: false }));
    const lines = file.split('\n');
    expect(lines[0]).toBe('AM1 OPT ENPART');
    expect(lines[4]).toContain('0.970 1');
    expect(lines[5]).toContain('104.5 0');
  });
});
