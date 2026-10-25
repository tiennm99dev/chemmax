import { describe, expect, it } from 'vitest';
import {
  AIR,
  CUPS,
  OXYGEN,
  burnTime,
  flameSize,
  judgeAir,
  oxygenShare,
  oxygenUsed,
  waterRise,
} from './engine.js';

describe('candle under a cup', () => {
  it('burns longer under a bigger cup, in proportion to its air', () => {
    expect(burnTime(250)).toBeCloseTo(10, 9);
    expect(burnTime(500)).toBeCloseTo(2 * burnTime(250), 9);
    expect(burnTime(1000)).toBeCloseTo(4 * burnTime(250), 9);
  });

  it('raises the water by about one fifth of the cup, whatever its size', () => {
    for (const v of CUPS) {
      expect(waterRise(v, 0)).toBe(0);
      expect(waterRise(v, burnTime(v))).toBeCloseTo(0.2, 9);
      expect(waterRise(v, 10 * burnTime(v))).toBeCloseTo(0.2, 9);
    }
  });

  it('never uses more oxygen than the cup holds', () => {
    for (const v of CUPS) expect(oxygenUsed(v, 1e6)).toBeLessThan(v * OXYGEN);
  });

  it('lowers the oxygen share and the flame until it goes out', () => {
    const v = 500;
    expect(oxygenShare(v, 0)).toBeCloseTo(OXYGEN, 9);
    expect(oxygenShare(v, burnTime(v))).toBeCloseTo(0.0125, 9);
    expect(flameSize(v, 0)).toBe(1);
    expect(flameSize(v, burnTime(v) / 2)).toBeLessThan(1);
    expect(flameSize(v, burnTime(v))).toBe(0);
  });
});

describe('composition of air', () => {
  it('adds up to 100%', () => {
    expect(AIR.reduce((s, g) => s + g.value, 0)).toBe(100);
  });

  it('accepts a close guess and names the gases that are off', () => {
    expect(judgeAir([78, 21, 1]).ok).toBe(true);
    expect(judgeAir([76, 23, 1]).ok).toBe(true);
    const r = judgeAir([50, 49, 1]);
    expect(r.ok).toBe(false);
    expect(r.messages).toEqual([
      'Nitrogen: quá ít so với thực tế.',
      'Oxygen: quá nhiều so với thực tế.',
    ]);
  });
});
