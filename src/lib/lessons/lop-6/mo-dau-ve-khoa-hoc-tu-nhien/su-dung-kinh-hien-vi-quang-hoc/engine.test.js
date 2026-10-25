import { describe, expect, it } from 'vitest';
import {
  OBJECTIVES,
  START_GAP,
  blurRadius,
  focusMessage,
  focusState,
  lightState,
  totalMagnification,
  turn,
} from './engine.js';

const [low, mid, high] = OBJECTIVES;

/**
 * Best state reachable from START_GAP with the coarse knob only.
 * @param {import('./engine.js').Objective} obj
 */
function bestWithCoarse(obj) {
  let gap = START_GAP;
  let best = Infinity;
  while (gap > 0) {
    gap = turn(gap, 'coarse', -1);
    best = Math.min(best, Math.abs(gap - obj.focus));
  }
  return best;
}

describe('virtual microscope', () => {
  it('multiplies objective and eyepiece magnifications', () => {
    expect(totalMagnification(4)).toBe(40);
    expect(totalMagnification(40)).toBe(400);
    expect(totalMagnification(40, 15)).toBe(600);
  });

  it('turns knobs in whole steps and stops at the slide', () => {
    expect(turn(START_GAP, 'coarse', -1)).toBe(START_GAP - 100);
    expect(turn(START_GAP, 'fine', 2)).toBe(START_GAP + 10);
    expect(turn(30, 'coarse', -1)).toBe(0);
    expect(turn(2990, 'coarse', 1)).toBe(3000);
  });

  it('focuses the 4x objective with the coarse knob alone', () => {
    expect(bestWithCoarse(low)).toBeLessThanOrEqual(low.depth);
  });

  it('needs the fine knob for the 10x and 40x objectives', () => {
    expect(bestWithCoarse(mid)).toBeGreaterThan(mid.depth);
    expect(bestWithCoarse(high)).toBeGreaterThan(high.depth);
    expect(focusState(mid, 730)).toBe('gan-net');
    let gap = 730;
    for (let i = 0; i < 6; i++) gap = turn(gap, 'fine', -1);
    expect(focusState(mid, gap)).toBe('net');
  });

  it('reports touching the slide, sharp, blurred and out of view', () => {
    expect(focusState(high, 0)).toBe('cham');
    expect(focusState(high, 60)).toBe('net');
    expect(focusState(low, 2530)).toBe('khong-thay');
    expect(focusState(low, 2100)).toBe('mo');
    expect(blurRadius(low, 1700)).toBe(0);
    expect(blurRadius(low, 1800)).toBeGreaterThan(blurRadius(low, 1750));
    expect(blurRadius(low, 3000)).toBeLessThanOrEqual(14);
  });

  it('says which way to move the objective when far out of focus', () => {
    expect(focusMessage(low, 2530)).toMatch(/xa tiêu bản.*hạ/);
    expect(focusMessage(low, 500)).toMatch(/quá gần.*nâng/);
    expect(focusMessage(high, 30)).toMatch(/quá gần.*nâng/);
    expect(focusMessage(high, 0)).toMatch(/chạm/);
  });

  it('asks for more light at higher magnification', () => {
    expect(lightState(low, 30)).toBe('vua');
    expect(lightState(high, 30)).toBe('toi');
    expect(lightState(high, 70)).toBe('vua');
    expect(lightState(low, 90)).toBe('choi');
  });
});
