import { describe, expect, it } from 'vitest';
import { OXYGEN_AIR, OXYGEN_LIMIT, SCENARIOS, fireMessage, fireState } from './engine.js';

const whole = { fuel: true, oxidiser: true, heat: true, oxygen: OXYGEN_AIR };

describe('fire triangle', () => {
  it('burns only with all three sides', () => {
    expect(fireState(whole).burning).toBe(true);
    expect(fireState({ ...whole, fuel: false })).toMatchObject({
      burning: false,
      missing: ['fuel'],
    });
    expect(fireState({ ...whole, oxidiser: false }).missing).toEqual(['oxidiser']);
    expect(fireState({ ...whole, heat: false }).missing).toEqual(['heat']);
  });

  it('goes out at the oxygen limit, not above it', () => {
    expect(fireState({ ...whole, oxygen: OXYGEN_LIMIT + 1 }).burning).toBe(true);
    expect(fireState({ ...whole, oxygen: OXYGEN_LIMIT })).toMatchObject({
      burning: false,
      thinAir: true,
    });
  });

  it('names what is missing', () => {
    expect(fireMessage(whole)).toContain('đang cháy');
    expect(fireMessage({ ...whole, fuel: false, heat: false })).toContain('chất cháy, nguồn nhiệt');
    expect(fireMessage({ ...whole, oxygen: 10 })).toContain('14%');
  });

  it('covers every side in its scenarios', () => {
    expect(new Set(SCENARIOS.map((s) => s.side))).toEqual(new Set(['fuel', 'oxidiser', 'heat']));
  });
});
