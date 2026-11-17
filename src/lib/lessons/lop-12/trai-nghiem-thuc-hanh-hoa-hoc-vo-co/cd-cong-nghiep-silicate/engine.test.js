import { describe, expect, it } from 'vitest';
import {
  GLASS_MOLAR,
  MATERIALS,
  PRODUCTS,
  T_MAX,
  T_MIN,
  burnLimestone,
  fire,
  glassBatch,
  glassPercent,
  glowColor,
} from './engine.js';

describe('virtual kiln', () => {
  it('makes each product only from its recipe in its range', () => {
    const cases = /** @type {[string[], number, string | null][]} */ ([
      [['cat', 'soda', 'da-voi'], 1450, 'thuy-tinh'],
      [['cat', 'soda', 'da-voi'], 1200, null],
      [['cat', 'soda', 'da-voi'], 700, null],
      [['dat-set'], 950, 'dat-nung'],
      [['dat-set', 'cat'], 1050, 'dat-nung'],
      [['dat-set'], 1200, 'sanh'],
      [['dat-set'], 1300, 'sanh'],
      [['dat-set'], 1400, null],
      [['dat-set'], 700, null],
      [['cao-lanh', 'fenspat', 'cat'], 1400, 'su'],
      [['cao-lanh', 'fenspat', 'cat'], 1000, null],
      [['da-voi', 'dat-set'], 1450, 'clinker'],
      [['da-voi', 'dat-set', 'cat'], 1500, 'clinker'],
      [['da-voi', 'dat-set'], 1000, null],
      [['da-voi', 'dat-set', 'thach-cao'], 1450, null],
      [['cat', 'soda'], 1450, null],
      [['cat'], 1600, null],
      [['soda', 'dat-set'], 1200, null],
    ]);
    const bad = cases.filter(([load, t, want]) => fire(load, t).product !== want);
    expect(bad).toEqual([]);
  });

  it('explains every firing and covers every product', () => {
    expect(fire([], 1000).tone).toBe('info');
    expect(fire(['thach-cao'], 1000).text).toContain('clinker');
    const ids = PRODUCTS.map((p) => p.id);
    expect(ids.length).toBe(5);
    expect(MATERIALS.length).toBe(7);
    expect(glowColor(T_MIN)).not.toBe(glowColor(T_MAX));
  });
});

describe('glass and lime sums', () => {
  it('gives the composition of ordinary glass', () => {
    expect(GLASS_MOLAR).toBe(478);
    const p = glassPercent();
    expect(p.SiO2).toBeCloseTo(75.31, 2);
    expect(p.Na2O).toBeCloseTo(12.97, 2);
    expect(p.CaO).toBeCloseTo(11.72, 2);
  });

  it('gives the raw materials for one tonne of glass', () => {
    const b = glassBatch(1000);
    expect(b.Na2CO3).toBeCloseTo(221.76, 2);
    expect(b.CaCO3).toBeCloseTo(209.21, 2);
    expect(b.SiO2).toBeCloseTo(753.14, 2);
    expect(b.CO2).toBeCloseTo(184.1, 1);
    expect(glassBatch(478).Na2CO3).toBeCloseTo(106, 9);
  });

  it('burns limestone', () => {
    const r = burnLimestone(1000, 0.9);
    expect(r.CaO).toBeCloseTo(504, 9);
    expect(r.CO2).toBeCloseTo(396, 9);
    expect(burnLimestone(1000, 1).CO2).toBeCloseTo(440, 9);
  });
});
