import { describe, expect, it } from 'vitest';
import { MAX_SLIPS, THRESHOLD, respond } from './engine.js';

describe('layer slip model', () => {
  it('needs a larger force to slip the alloy', () => {
    expect(THRESHOLD.alloy).toBeGreaterThan(THRESHOLD.pure);
    expect(respond('pure', 4).slips).toBeGreaterThan(0);
    expect(respond('alloy', 4).slips).toBe(0);
  });

  it('only leans below the threshold and caps the slips', () => {
    expect(respond('pure', 0)).toEqual({ slips: 0, lean: 0 });
    expect(respond('alloy', 6).lean).toBeLessThan(0.2);
    expect(respond('pure', 10).slips).toBe(MAX_SLIPS);
    expect(respond('alloy', 7).slips).toBe(1);
  });
});
