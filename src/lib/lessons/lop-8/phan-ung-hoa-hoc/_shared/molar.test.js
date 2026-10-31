import { describe, expect, it } from 'vitest';
import { molarMass, sciText } from './molar.js';

describe('molarMass', () => {
  it('uses the book atomic masses', () => {
    expect(molarMass('H2O')).toBe(18);
    expect(molarMass('CO2')).toBe(44);
    expect(molarMass('HCl')).toBe(36.5);
    expect(molarMass('CaCO3')).toBe(100);
    expect(molarMass('CuSO4')).toBe(160);
    expect(molarMass('BaCl2')).toBe(208);
    expect(molarMass('Na2SO4')).toBe(142);
    expect(molarMass('BaSO4')).toBe(233);
    expect(molarMass('KMnO4')).toBe(158);
  });

  it('throws for an element the book table lacks', () => {
    expect(() => molarMass('UF6')).toThrow();
  });
});

describe('sciText', () => {
  it('writes a mantissa between 1 and 10 with a decimal comma', () => {
    expect(sciText(6.022e23)).toBe('6,022 × 10²³');
    expect(sciText(1.2044e24)).toBe('1,2044 × 10²⁴');
    expect(sciText(3.011e23)).toBe('3,011 × 10²³');
    expect(sciText(0)).toBe('0');
  });
});
