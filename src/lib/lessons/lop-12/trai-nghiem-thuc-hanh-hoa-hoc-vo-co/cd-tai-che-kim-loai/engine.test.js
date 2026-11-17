import { describe, expect, it } from 'vitest';
import {
  CAN_MASS,
  PRIMARY_KWH,
  RECYCLED_KWH,
  SCRAP_BINS,
  SCRAP_CARDS,
  STAGES,
  canBudget,
  rateVerdict,
} from './engine.js';

describe('aluminium can budget', () => {
  it('uses 5% of the ore energy for recycled metal', () => {
    expect(RECYCLED_KWH).toBeCloseTo(2.25, 9);
    expect(CAN_MASS).toBe(15);
  });

  it('matches the worked numbers of the lesson', () => {
    const none = canBudget({ cans: 1000, rate: 0 });
    expect(none.mass).toBeCloseTo(15, 9);
    expect(none.energy).toBeCloseTo(15 * PRIMARY_KWH, 9);
    expect(none.saved).toBe(0);
    expect(none.bauxite).toBeCloseTo(60, 9);

    const all = canBudget({ cans: 1000, rate: 100 });
    expect(all.energy).toBeCloseTo(33.75, 9);
    expect(all.saved).toBeCloseTo(641.25, 9);
    expect(all.bauxite).toBe(0);

    const class600 = canBudget({ cans: 600, rate: 100 });
    expect(class600.mass).toBeCloseTo(9, 9);
    expect(class600.saved).toBeCloseTo(384.75, 9);

    const half = canBudget({ cans: 2000, rate: 50 });
    expect(half.recycled).toBeCloseTo(15, 9);
    expect(half.energy).toBeCloseTo(15 * 45 + 15 * 2.25, 9);
  });

  it('clamps the rate and grades it', () => {
    expect(canBudget({ cans: 100, rate: 140 }).primary).toBe(0);
    expect(rateVerdict(0).tone).toBe('warn');
    expect(rateVerdict(30).tone).toBe('info');
    expect(rateVerdict(70).tone).toBe('ok');
    expect(rateVerdict(100).tone).toBe('ok');
  });

  it('has stages on both routes', () => {
    const paths = new Set(STAGES.map((s) => s.path));
    expect([...paths].sort()).toEqual(['both', 'primary', 'recycled']);
  });
});

describe('scrap sorting', () => {
  it('puts every card in a known bin, each bin used', () => {
    const ids = SCRAP_BINS.map((b) => b.id);
    expect(SCRAP_CARDS.every((c) => ids.includes(c.bin))).toBe(true);
    expect(ids.every((id) => SCRAP_CARDS.some((c) => c.bin === id))).toBe(true);
    expect(new Set(SCRAP_CARDS.map((c) => c.id)).size).toBe(SCRAP_CARDS.length);
  });
});
