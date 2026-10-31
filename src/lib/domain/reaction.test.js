import { describe, expect, it } from 'vitest';
import { isBalancedText, terms } from './reaction.js';

describe('terms', () => {
  it('reads coefficients, formulas and gas or precipitate marks', () => {
    const eq = terms('Zn + 2HCl → ZnCl2 + H2↑');
    expect(eq.arrow).toBe('→');
    expect(eq.left).toEqual([
      { coefficient: 1, formula: 'Zn', mark: '' },
      { coefficient: 2, formula: 'HCl', mark: '' },
    ]);
    expect(eq.right[1]).toEqual({ coefficient: 1, formula: 'H2', mark: '↑' });
    expect(terms('BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl').right[0].mark).toBe('↓');
  });

  it('keeps a reversible arrow', () => {
    expect(terms('CO2 + H2O ⇌ H2CO3').arrow).toBe('⇌');
  });

  it('rejects text without an arrow', () => {
    expect(() => terms('Zn + HCl')).toThrow();
  });
});

describe('isBalancedText', () => {
  it('accepts balanced and rejects unbalanced equations', () => {
    expect(isBalancedText('Fe2O3 + 6HCl → 2FeCl3 + 3H2O')).toBe(true);
    expect(isBalancedText('Fe2O3 + 3HCl → 2FeCl3 + 3H2O')).toBe(false);
    expect(isBalancedText('Ca(OH)2 + CO2 → CaCO3↓ + H2O')).toBe(true);
  });

  it('ignores the bond marks of condensed structural formulas', () => {
    expect(isBalancedText('CH4 + 2O2 → CO2 + 2H2O')).toBe(true);
    expect(isBalancedText('CH2=CH2 + Br2 → BrCH2–CH2Br')).toBe(true);
    expect(isBalancedText('CH≡CH + 2Br2 → Br2CH–CHBr2')).toBe(true);
    expect(isBalancedText('CH4 + O2 → CO2 + 2H2O')).toBe(false);
    expect(isBalancedText('C2H4 + 2O2 → 2CO2 + 2H2O')).toBe(false);
  });
});
