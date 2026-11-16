import { describe, expect, it } from 'vitest';
import {
  AMINO_ACIDS,
  biuret,
  hydrolysisText,
  drift,
  isoelectric,
  mainForm,
  netCharge,
  peptideBonds,
  peptideFormula,
  peptideKind,
  peptideMass,
  peptideName,
} from './amino.js';

describe('amino acids in an electric field', () => {
  it('finds the isoelectric points of the book amino acids', () => {
    const pI = Object.fromEntries(AMINO_ACIDS.map((a) => [a.id, isoelectric(a.id)]));
    expect(pI.gly).toBeCloseTo(5.97, 1);
    expect(pI.glu).toBeCloseTo(3.22, 1);
    expect(pI.lys).toBeCloseTo(9.74, 1);
  });

  it('moves the amino acids the right way at pH 6', () => {
    expect(drift('gly', 6)).toBe('dung-yen');
    expect(drift('glu', 6)).toBe('duong');
    expect(drift('lys', 6)).toBe('am');
    expect(drift('gly', 2)).toBe('am');
    expect(drift('gly', 11)).toBe('duong');
  });

  it('names the main form', () => {
    expect(mainForm('gly', 6)).toBe('ion lưỡng cực');
    expect(mainForm('gly', 1)).toBe('cation');
    expect(mainForm('gly', 12)).toBe('anion');
    expect(netCharge('glu', 12)).toBeCloseTo(-2, 1);
  });

  it('keeps the molar masses consistent with the formulas', () => {
    const bad = AMINO_ACIDS.filter(
      (a) => 12 * a.atoms.C + a.atoms.H + 14 * a.atoms.N + 16 * a.atoms.O !== a.molar,
    );
    expect(bad).toEqual([]);
  });
});

describe('peptides', () => {
  it('counts bonds, water and mass', () => {
    expect(peptideMass(['gly', 'ala', 'val'])).toBe(245);
    expect(peptideMass(['gly', 'gly', 'ala', 'gly'])).toBe(260);
    expect(peptideMass(['gly', 'ala'])).toBe(146);
    expect(peptideBonds(['gly', 'ala', 'val'])).toBe(2);
    expect(peptideName(['ala', 'gly'])).toBe('Ala-Gly');
    expect(peptideFormula(['gly', 'ala'])).toBe('C_{5}H_{10}N_{2}O_{3}');
    expect(peptideFormula(['gly'])).toBe('C_{2}H_{5}NO_{2}');
  });

  it('gives the biuret colour from two peptide bonds on', () => {
    expect(biuret(['gly', 'ala'])).toBe(false);
    expect(biuret(['gly', 'ala', 'gly'])).toBe(true);
    expect(peptideKind(2)).toBe('dipeptide');
    expect(peptideKind(6)).toBe('hexapeptide');
    expect(peptideKind(9)).toBe('polypeptide');
    expect(hydrolysisText(['gly', 'ala', 'gly'])).toBe('2 glycine, 1 alanine');
  });
});
