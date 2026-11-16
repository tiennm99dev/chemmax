import { describe, expect, it } from 'vitest';
import { activity, curve, denatures, fits, phFactor, temperatureFactor } from './engine.js';

describe('the lock-and-key enzyme model', () => {
  it('only lets the matching substrate in', () => {
    expect(fits('amylase', 'tinh-bot')).toBe(true);
    expect(fits('amylase', 'protein')).toBe(false);
    expect(activity('pepsin', 'chat-beo', 37, 2, false)).toBe(0);
  });

  it('works best at body temperature and its own pH', () => {
    expect(temperatureFactor(37)).toBe(1);
    expect(temperatureFactor(27)).toBeCloseTo(0.5);
    expect(temperatureFactor(50)).toBeLessThan(temperatureFactor(37));
    expect(temperatureFactor(60)).toBe(0);
    expect(phFactor('pepsin', 2)).toBe(1);
    expect(activity('pepsin', 'protein', 37, 2, false)).toBeCloseTo(100);
    expect(activity('pepsin', 'protein', 37, 7, false)).toBeLessThan(0.1);
    expect(activity('amylase', 'tinh-bot', 37, 2, false)).toBeLessThan(0.1);
  });

  it('denatures in heat, for good', () => {
    expect(denatures(65)).toBe(true);
    expect(denatures(37)).toBe(false);
    expect(activity('amylase', 'tinh-bot', 37, 6.8, true)).toBe(0);
  });

  it('draws a curve with one peak at 37 °C', () => {
    const pts = curve('amylase', 6.8);
    const best = pts.reduce((a, b) => (b[1] > a[1] ? b : a));
    expect(best[0]).toBe(37);
    expect(pts.at(-1)?.[1]).toBe(0);
  });
});
