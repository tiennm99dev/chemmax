import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import {
  EQUATIONS,
  MOLAR_MASS,
  fermentation,
  silverFromGlucose,
  silverMirror,
  tubeContents,
} from './engine.js';

describe('silver mirror tubes', () => {
  it('gives a mirror with glucose only', () => {
    expect(silverMirror('glucose', false)).toBe(true);
    expect(silverMirror('saccharose', false)).toBe(false);
    expect(silverMirror('water', false)).toBe(false);
    expect(silverMirror('water', true)).toBe(false);
  });

  it('gives a mirror with saccharose after hydrolysis', () => {
    expect(silverMirror('saccharose', true)).toBe(true);
    expect(tubeContents('saccharose', true).solutes).toEqual(['glucose', 'fructose']);
    expect(tubeContents('glucose', true).changed).toBe(false);
  });
});

describe('calculations', () => {
  it('deposits 2 mol of silver per mole of glucose', () => {
    expect(silverFromGlucose(18)).toBe(21.6);
    expect(silverFromGlucose(27)).toBe(32.4);
  });

  it('ferments glucose into ethylic alcohol and carbon dioxide', () => {
    expect(fermentation(360, 75)).toEqual({ ethanolMol: 3, ethanolGrams: 138, co2Litres: 74.37 });
    expect(fermentation(45, 100).co2Litres).toBe(12.395);
  });

  it('uses the book molar masses', () => {
    expect(MOLAR_MASS.glucose).toBe(moleculeMassAmu('C6H12O6'));
    expect(MOLAR_MASS.saccharose).toBe(moleculeMassAmu('C12H22O11'));
    expect(MOLAR_MASS.ethanol).toBe(moleculeMassAmu('C2H5OH'));
  });

  it('writes balanced equations', () => {
    for (const eq of Object.values(EQUATIONS)) expect(isBalancedText(eq), eq).toBe(true);
  });
});
