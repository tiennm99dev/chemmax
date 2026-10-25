import { describe, expect, it } from 'vitest';
import {
  SUBSTANCES,
  formatScientific,
  hFromPh,
  litmus,
  medium,
  ohFromPh,
  phFromH,
  phenolphthalein,
  pOH,
  scientific,
  strongAcidPh,
  strongBasePh,
  universalColor,
} from './ph.js';

describe('pH engine', () => {
  it('converts between pH, [H+] and [OH-]', () => {
    expect(phFromH(1e-3)).toBeCloseTo(3, 12);
    expect(hFromPh(5)).toBeCloseTo(1e-5, 18);
    expect(ohFromPh(12)).toBeCloseTo(1e-2, 12);
    expect(hFromPh(4) * ohFromPh(4)).toBeCloseTo(1e-14, 26);
    expect(pOH(3)).toBe(11);
  });

  it('classifies the medium', () => {
    expect(medium(3)).toBe('acid');
    expect(medium(7)).toBe('neutral');
    expect(medium(7.4)).toBe('base');
  });

  it('computes strong acid and base solutions', () => {
    expect(strongAcidPh(0.01)).toBeCloseTo(2, 6);
    expect(strongAcidPh(0.005, 2)).toBeCloseTo(2, 6);
    expect(strongBasePh(0.001)).toBeCloseTo(11, 6);
    expect(strongBasePh(0.005, 2)).toBeCloseTo(12, 6);
    const veryDilute = strongAcidPh(1e-8);
    expect(veryDilute).toBeLessThan(7);
    expect(veryDilute).toBeGreaterThan(6.9);
    expect(strongAcidPh(0)).toBeCloseTo(7, 12);
  });

  it('gives indicator colours', () => {
    expect(litmus(2).name).toBe('đỏ');
    expect(litmus(7).name).toBe('tím');
    expect(litmus(12).name).toBe('xanh');
    expect(phenolphthalein(7).name).toBe('không màu');
    expect(phenolphthalein(10).name).toBe('hồng');
    expect(universalColor(0)).toBe('rgb(185 28 28)');
    expect(universalColor(14)).toBe('rgb(88 28 135)');
    expect(universalColor(-3)).toBe(universalColor(0));
    expect(universalColor(7)).toBe('rgb(34 197 94)');
  });

  it('lists substances in pH order within 0-14', () => {
    const values = SUBSTANCES.map((s) => s.ph);
    expect(values).toEqual([...values].sort((a, b) => a - b));
    for (const v of values) {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(14);
    }
    expect(SUBSTANCES.find((s) => s.name === 'Nước cất')?.ph).toBe(7);
  });

  it('writes concentrations in scientific notation', () => {
    expect(scientific(0.00032)).toEqual({ mantissa: 3.2, exponent: -4 });
    expect(scientific(9.96e-3)).toEqual({ mantissa: 1, exponent: -2 });
    expect(formatScientific(1e-7)).toBe('1,0 × 10⁻⁷');
    expect(formatScientific(2.5e-12)).toBe('2,5 × 10⁻¹²');
    expect(formatScientific(1)).toBe('1,0 × 10⁰');
  });
});
