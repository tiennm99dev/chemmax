import { describe, expect, it } from 'vitest';
import {
  CRUDES,
  MAX_TIME,
  apiGravity,
  densityClass,
  fieldText,
  simulate,
  stageAt,
  sulfurClass,
  tempAt,
  trap,
} from './engine.js';

describe('oil field formation', () => {
  it('warms the source rock with depth and passes the stages in order', () => {
    expect(tempAt(0)).toBe(10);
    expect(tempAt(50)).toBe(60);
    expect(tempAt(110)).toBe(120);
    const order = ['deposit', 'kerogen', 'oil', 'gas'];
    /** @type {string[]} */
    const seen = [];
    for (let t = 0; t <= MAX_TIME; t++) {
      const s = stageAt(t);
      if (seen.at(-1) !== s) seen.push(s);
    }
    expect(seen).toEqual(order);
  });

  it('makes no oil before the oil window and keeps mass', () => {
    expect(simulate(40)).toEqual({ kerogen: 100, oil: 0, gas: 0 });
    const bad = [];
    for (let t = 0; t <= MAX_TIME; t += 5) {
      const { kerogen, oil, gas } = simulate(t);
      if (Math.abs(kerogen + oil + gas - 100) > 0.2) bad.push(t);
    }
    expect(bad).toEqual([]);
  });

  it('turns kerogen into oil, then cracks oil into gas when buried deeper', () => {
    expect(simulate(100).oil).toBe(100);
    const end = simulate(MAX_TIME);
    expect(end.gas).toBeGreaterThan(end.oil);
  });

  it('loses everything without a cap rock', () => {
    expect(trap(100, false)).toEqual({ trappedOil: 0, trappedGas: 0, lost: 100 });
    expect(trap(100, true).trappedOil).toBe(100);
    expect(fieldText(100, false, String)).toContain('Không hình thành mỏ');
    expect(fieldText(10, true, String)).toContain('Chưa có dầu');
    expect(fieldText(MAX_TIME, true, String)).toContain('chủ yếu là khí');
  });
});

describe('crude classification', () => {
  it('computes API gravity and its class', () => {
    expect(apiGravity(1)).toBe(10);
    expect(apiGravity(0.85)).toBeCloseTo(34.97, 2);
    expect(apiGravity(0.842)).toBeCloseTo(36.55, 2);
    expect(densityClass(36.6)).toBe('light');
    expect(densityClass(25)).toBe('medium');
    expect(densityClass(18)).toBe('heavy');
    expect(densityClass(8)).toBe('extra');
  });

  it('calls a crude sour above 0,5 % sulfur', () => {
    expect(sulfurClass(0.04)).toBe('dầu ngọt');
    expect(sulfurClass(2.8)).toBe('dầu chua');
  });

  it('keeps every sample on the slider grid', () => {
    const off = CRUDES.filter(
      (c) => Math.abs(Math.round((c.sg - 0.78) / 0.002) * 0.002 + 0.78 - c.sg) > 1e-9,
    );
    expect(off).toEqual([]);
  });
});
