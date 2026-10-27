import { describe, expect, it } from 'vitest';
import { chemRuns, chemUnicode } from './chem-text.js';

describe('chemRuns', () => {
  it('subscripts atom counts but keeps coefficients on the line', () => {
    expect(chemRuns('2C2H6')).toEqual([
      { text: '2C', sub: false },
      { text: '2', sub: true },
      { text: 'H', sub: false },
      { text: '6', sub: true },
    ]);
  });

  it('subscripts two-digit counts and the n of a polymer', () => {
    expect(chemUnicode('C10H22')).toBe('C₁₀H₂₂');
    expect(chemUnicode('(–CH2–CH2–)n')).toBe('(–CH₂–CH₂–)ₙ');
  });

  it('reads whole equations', () => {
    expect(chemUnicode('CH4 + 2O2 → CO2 + 2H2O')).toBe('CH₄ + 2O₂ → CO₂ + 2H₂O');
  });
});
