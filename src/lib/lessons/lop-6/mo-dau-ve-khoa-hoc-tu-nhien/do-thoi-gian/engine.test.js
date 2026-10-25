import { describe, expect, it } from 'vitest';
import {
  MARK_A,
  MARK_B,
  SLOPES,
  TRACK,
  elapsed,
  gateInterval,
  judgeTrial,
  mean,
  position,
  reading,
  reset,
  secondsText,
  start,
  stop,
  stopwatch,
  timeAt,
} from './engine.js';

describe('rolling ball', () => {
  it('passes the marks at the times the photogate measures', () => {
    const [gentle, steep] = SLOPES;
    expect(timeAt(gentle.accel, MARK_B)).toBeCloseTo(2, 9);
    expect(gateInterval(gentle.accel)).toBeCloseTo(2 - Math.sqrt(0.8), 9);
    expect(gateInterval(gentle.accel)).toBeCloseTo(1.106, 3);
    expect(gateInterval(steep.accel)).toBeCloseTo(0.714, 3);
    expect(position(gentle.accel, timeAt(gentle.accel, MARK_A))).toBeCloseTo(MARK_A, 9);
  });

  it('starts at rest and stops at the end of the track', () => {
    expect(position(0.5, -1)).toBe(0);
    expect(position(0.5, 0)).toBe(0);
    expect(position(0.5, 10)).toBe(TRACK);
  });
});

describe('stopwatch', () => {
  it('counts between Start and Stop', () => {
    let sw = start(stopwatch(), 1000);
    expect(elapsed(sw, 1500)).toBe(500);
    sw = stop(sw, 2234);
    expect(elapsed(sw, 9999)).toBe(1234);
    expect(reading(elapsed(sw, 0))).toBe(1.23);
  });

  it('carries on from the last value unless reset', () => {
    let sw = stop(start(stopwatch(), 0), 1000);
    sw = stop(start(sw, 5000), 5500);
    expect(elapsed(sw, 0)).toBe(1500);
    expect(elapsed(reset(sw), 0)).toBe(0);
  });

  it('ignores Reset while running and a second Start', () => {
    const running = start(stopwatch(), 100);
    expect(reset(running)).toBe(running);
    expect(start(running, 900)).toBe(running);
    expect(stop(stopwatch(), 50)).toEqual(stopwatch());
  });

  it('cuts the display down to hundredths and writes a comma', () => {
    expect(reading(1109.9)).toBe(1.1);
    expect(reading(999)).toBe(0.99);
    expect(secondsText(1.1)).toBe('1,10');
    expect(secondsText(0)).toBe('0,00');
  });
});

describe('judging a trial', () => {
  it('rates the gap to the photogate time', () => {
    expect(judgeTrial({ measured: 1.12, truth: 1.106, fromZero: true }).ok).toBe(true);
    expect(judgeTrial({ measured: 1.2, truth: 1.106, fromZero: true }).message).toMatch(/Khá sát/);
    const long = judgeTrial({ measured: 1.5, truth: 1.106, fromZero: true });
    expect(long.ok).toBe(false);
    expect(long.message).toMatch(/dài hơn/);
    expect(judgeTrial({ measured: 0.8, truth: 1.106, fromZero: true }).message).toMatch(/ngắn hơn/);
  });

  it('asks for a reset first', () => {
    const r = judgeTrial({ measured: 1.11, truth: 1.106, fromZero: false });
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/Reset/);
  });

  it('averages the trials', () => {
    expect(mean([1.12, 1.08, 1.1])).toBeCloseTo(1.1, 9);
    expect(mean([])).toBeNaN();
  });
});
