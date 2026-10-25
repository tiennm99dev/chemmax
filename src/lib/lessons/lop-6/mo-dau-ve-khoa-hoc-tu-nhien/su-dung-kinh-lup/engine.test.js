import { describe, expect, it } from 'vitest';
import {
  FOCAL,
  MAX_DISTANCE,
  MIN_DISTANCE,
  SHARP_FROM,
  apparentMagnification,
  blur,
  imageDistance,
  inverted,
  viewState,
} from './engine.js';

describe('hand magnifier', () => {
  it('is a 5x lens whose sharp range ends at the focal point', () => {
    expect(apparentMagnification(FOCAL)).toBeCloseTo(5, 9);
    expect(SHARP_FROM).toBeCloseTo(3.75, 9);
  });

  it('puts the virtual image at the near point at the start of the sharp range', () => {
    expect(imageDistance(SHARP_FROM) + 10).toBeCloseTo(25, 9);
    expect(imageDistance(FOCAL)).toBe(Infinity);
  });

  it('makes the image grow as the lens moves away from the object', () => {
    let last = 0;
    for (let d = MIN_DISTANCE; d <= FOCAL; d += 0.1) {
      const m = apparentMagnification(d);
      expect(m).toBeGreaterThan(last);
      last = m;
    }
    expect(apparentMagnification(SHARP_FROM)).toBeCloseTo(4, 9);
  });

  it('is blurred too close, sharp in the window and blurred past the focus', () => {
    expect(viewState(1)).toBe('gan-qua');
    expect(viewState(3.8)).toBe('ro-net');
    expect(viewState(4.9)).toBe('ro-net');
    expect(viewState(FOCAL)).toBe('ro-net');
    expect(blur(FOCAL)).toBe(0);
    expect(viewState(5.5)).toBe('xa-qua');
    expect(blur(4)).toBe(0);
    expect(blur(1)).toBeGreaterThan(blur(3.5));
    expect(blur(MAX_DISTANCE)).toBeGreaterThan(blur(5.2));
    expect(inverted(6)).toBe(true);
    expect(inverted(4)).toBe(false);
  });

  it('keeps the blur within the drawing limits', () => {
    for (let d = MIN_DISTANCE; d <= MAX_DISTANCE; d += 0.05) {
      expect(blur(d)).toBeGreaterThanOrEqual(0);
      expect(blur(d)).toBeLessThanOrEqual(10);
    }
  });
});
