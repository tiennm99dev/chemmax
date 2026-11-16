import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { parseFormula } from '#lib/domain/formula.js';
import { FATS, allEsters, ester, massOf, texFormula } from './ester.js';

/** Molar mass with whole-number atomic masses, C=C bond marks ignored. */
const bookMass = (/** @type {string} */ text) => {
  const { atoms } = parseFormula(text.replace(/=/g, ''));
  return massOf(atoms.C ?? 0, atoms.H ?? 0, atoms.O ?? 0, atoms.Na ?? 0);
};

describe('esters built from an acid part and an alcohol part', () => {
  it('names and counts ethyl acetate the book way', () => {
    const e = ester('acetate', 'ethyl');
    expect(e.name).toBe('ethyl acetate');
    expect(e.formula).toBe('CH3COOC2H5');
    expect(e.molecular).toBe('C4H8O2');
    expect(e.molar).toBe(88);
    expect(e.saltMolar).toBe(82);
    expect(e.acidMolar).toBe(60);
    expect(e.alcoholMolar).toBe(46);
    expect(e.saturated).toBe(true);
  });

  it('keeps the C=C of acrylate and the ring of benzoate out of CnH2nO2', () => {
    expect(ester('acrylate', 'methyl').saturated).toBe(false);
    expect(ester('benzoate', 'methyl').molecular).toBe('C8H8O2');
    expect(ester('formate', 'methyl').molecular).toBe('C2H4O2');
  });

  it('matches the molar mass of its condensed formula and balances both hydrolyses', () => {
    const bad = [];
    for (const e of allEsters()) {
      if (bookMass(e.formula) !== e.molar) bad.push(['mass', e.name]);
      if (bookMass(e.saltFormula) !== e.saltMolar) bad.push(['salt', e.name]);
      if (!isBalancedText(e.acidEquation)) bad.push(['acid', e.name]);
      if (!isBalancedText(e.baseEquation)) bad.push(['base', e.name]);
    }
    expect(bad).toEqual([]);
  });

  it('gives every fat the molar mass of its formula', () => {
    const bad = FATS.filter(
      (f) => bookMass(f.formula) !== f.molar || bookMass(f.salt) !== f.saltMolar,
    );
    expect(bad).toEqual([]);
  });
});

describe('formulas as TeX', () => {
  it('subscripts counts and braces bond marks', () => {
    expect(texFormula('CH2=CHCOONa')).toBe('\\mathrm{CH_{2}{=}CHCOONa}');
    expect(texFormula('(C17H35COO)3C3H5')).toBe('\\mathrm{(C_{17}H_{35}COO)_{3}C_{3}H_{5}}');
    expect(texFormula('CH3COOCH2CH2CH(CH3)2')).toBe(
      '\\mathrm{CH_{3}COOCH_{2}CH_{2}CH(CH_{3})_{2}}',
    );
  });
});
