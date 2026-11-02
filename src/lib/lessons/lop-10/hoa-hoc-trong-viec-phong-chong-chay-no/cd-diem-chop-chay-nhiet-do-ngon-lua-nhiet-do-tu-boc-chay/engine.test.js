import { describe, expect, it } from 'vitest';
import {
  AXIS_MAX,
  AXIS_MIN,
  FLAMES,
  LIQUIDS,
  axisPercent,
  liquidClass,
  liquidState,
  stateMessage,
} from './engine.js';

const octane = /** @type {import('./engine.js').Liquid} */ (LIQUIDS.find((l) => l.id === 'octane'));
const format = (/** @type {number} */ v) => String(v);

describe('liquid classes and states', () => {
  it('splits liquids at 37.8 °C', () => {
    expect(liquidClass(14)).toBe('flammable');
    expect(liquidClass(37.7)).toBe('flammable');
    expect(liquidClass(37.8)).toBe('combustible');
    expect(liquidClass(88)).toBe('combustible');
  });

  it('walks through the three regimes', () => {
    expect(liquidState(octane, 0, true)).toBe('safe');
    expect(liquidState(octane, 30, false)).toBe('vapour');
    expect(liquidState(octane, 30, true)).toBe('flash');
    expect(liquidState(octane, 300, false)).toBe('auto');
  });

  it('keeps every liquid on the chart with its flash point below its ignition point', () => {
    const bad = LIQUIDS.filter(
      (l) => l.flash >= l.ignite || l.flash < AXIS_MIN || l.ignite > AXIS_MAX,
    ).map((l) => l.id);
    expect(bad).toEqual([]);
    expect(axisPercent(AXIS_MIN)).toBe(0);
    expect(axisPercent(AXIS_MAX)).toBe(100);
  });

  it('mentions the point that decides', () => {
    expect(stateMessage(octane, 0, true, format)).toContain('thấp hơn điểm chớp cháy');
    expect(stateMessage(octane, 300, false, format)).toContain('tự bốc cháy (206');
  });

  it('burns hotter in oxygen than in air', () => {
    expect(FLAMES.filter((f) => f.oxygen <= f.air)).toEqual([]);
  });
});
