import { describe, expect, it } from 'vitest';
import { isBalancedText } from '../_shared/reaction.js';
import { ZONES, methodFor, temperatureAt, zoneAt } from './engine.js';

describe('furnace zones', () => {
  it('tile the furnace from top to bottom without gaps', () => {
    expect(ZONES[0].top).toBe(0);
    expect(ZONES[ZONES.length - 1].bottom).toBe(1);
    for (let i = 1; i < ZONES.length; i++) expect(ZONES[i].top).toBe(ZONES[i - 1].bottom);
  });

  it('hold only balanced equations', () => {
    for (const z of ZONES) for (const eq of z.equations) expect(isBalancedText(eq), eq).toBe(true);
  });

  it('reduce iron oxide in the stack and burn coke at the tuyeres', () => {
    expect(zoneAt(0.3).equations).toContain('Fe2O3 + 3CO → 2Fe + 3CO2');
    expect(zoneAt(0.8).equations).toContain('C + O2 → CO2');
    expect(zoneAt(0.6).equations).toContain('CaO + SiO2 → CaSiO3');
    expect(zoneAt(0).id).toBe('mieng');
    expect(zoneAt(1).id).toBe('noi');
    expect(zoneAt(-3).id).toBe('mieng');
  });
});

describe('temperatureAt', () => {
  it('is hottest at the tuyeres and coolest at the throat', () => {
    expect(temperatureAt(0)).toBe(250);
    expect(temperatureAt(0.8)).toBe(1900);
    expect(temperatureAt(0.31)).toBe(700);
    for (let d = 0; d <= 1; d += 0.05) {
      expect(temperatureAt(d)).toBeLessThanOrEqual(temperatureAt(0.8));
      expect(temperatureAt(d)).toBeGreaterThanOrEqual(temperatureAt(0));
    }
  });
});

describe('methodFor', () => {
  it('picks the method from reactivity', () => {
    expect(methodFor('Na')).toBe('dien-phan');
    expect(methodFor('Al')).toBe('dien-phan');
    expect(methodFor('Fe')).toBe('nhiet-luyen');
    expect(methodFor('Zn')).toBe('nhiet-luyen');
    expect(methodFor('Ag')).toBe('thuy-luyen');
    expect(methodFor('Au')).toBe('thuy-luyen');
    expect(() => methodFor('Xx')).toThrow();
  });
});
