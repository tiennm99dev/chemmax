import { describe, expect, it } from 'vitest';
import { isBalancedText } from './equation-check.js';

describe('isBalancedText', () => {
  it('accepts balanced equations, condensed formulas included', () => {
    expect(isBalancedText('CH4 + 2O2 → CO2 + 2H2O')).toBe(true);
    expect(isBalancedText('CH2=CH2 + Br2 → BrCH2–CH2Br')).toBe(true);
  });

  it('rejects unbalanced ones', () => {
    expect(isBalancedText('CH4 + O2 → CO2 + 2H2O')).toBe(false);
    expect(isBalancedText('C2H4 + 2O2 → 2CO2 + 2H2O')).toBe(false);
  });
});
