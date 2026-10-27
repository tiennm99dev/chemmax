import { describe, expect, it } from 'vitest';
import { AMINO_ACIDS, aminoMass, chainMass, coagulation, peptideBonds } from './engine.js';

describe('amino acids and chains', () => {
  it('has the book masses of the amino acids', () => {
    expect(aminoMass('gly')).toBe(75);
    expect(aminoMass('ala')).toBe(89);
    expect(aminoMass('ser')).toBe(105);
    expect(aminoMass('val')).toBe(117);
    for (const a of AMINO_ACIDS) expect(a.formula).toMatch(/N/);
  });

  it('gives off one water per peptide bond', () => {
    expect(peptideBonds(0)).toBe(0);
    expect(peptideBonds(1)).toBe(0);
    expect(peptideBonds(5)).toBe(4);
    expect(chainMass(['gly', 'gly'])).toBe(132);
    expect(chainMass(['gly', 'ala', 'val'])).toBe(75 + 89 + 117 - 36);
    expect(chainMass([])).toBe(0);
  });
});

describe('coagulation', () => {
  it('sets egg white between 60 and 80 °C', () => {
    expect(coagulation(25, 'none')).toBe(0);
    expect(coagulation(60, 'none')).toBe(0);
    expect(coagulation(70, 'none')).toBe(0.5);
    expect(coagulation(100, 'none')).toBe(1);
  });

  it('coagulates with lemon juice or alcohol without heating', () => {
    expect(coagulation(25, 'lemon')).toBe(1);
    expect(coagulation(25, 'alcohol')).toBe(1);
  });
});
