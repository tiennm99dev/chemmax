import { describe, expect, it } from 'vitest';
import {
  FormulaError,
  formulaParts,
  molarMass,
  normalizeFormula,
  parseFormula,
  prettyFormula,
} from './formula.js';

describe('formula parser', () => {
  it('counts atoms with brackets and hydrates', () => {
    expect(parseFormula('H2O').atoms).toEqual({ H: 2, O: 1 });
    expect(parseFormula('Ca(OH)2').atoms).toEqual({ Ca: 1, O: 2, H: 2 });
    expect(parseFormula('Fe2(SO4)3').atoms).toEqual({ Fe: 2, S: 3, O: 12 });
    expect(parseFormula('K4[Fe(CN)6]').atoms).toEqual({ K: 4, Fe: 1, C: 6, N: 6 });
    expect(parseFormula('CuSO4·5H2O').atoms).toEqual({ Cu: 1, S: 1, O: 9, H: 10 });
    expect(parseFormula('CuSO4.5H2O').atoms).toEqual(parseFormula('CuSO4·5H2O').atoms);
    expect(parseFormula('CH3COOH').atoms).toEqual({ C: 2, H: 4, O: 2 });
    expect(parseFormula('CO').atoms).toEqual({ C: 1, O: 1 });
    expect(parseFormula('Co').atoms).toEqual({ Co: 1 });
  });

  it('reads charges and ignores state tags and Unicode digits', () => {
    expect(parseFormula('SO4^2-')).toEqual({ atoms: { S: 1, O: 4 }, charge: -2 });
    expect(parseFormula('Fe^3+').charge).toBe(3);
    expect(parseFormula('OH^-').charge).toBe(-1);
    expect(parseFormula('Na+').charge).toBe(1);
    expect(parseFormula('Cl-').charge).toBe(-1);
    expect(parseFormula('H2O(l)').atoms).toEqual({ H: 2, O: 1 });
    expect(parseFormula('NaCl (aq)').atoms).toEqual({ Na: 1, Cl: 1 });
    expect(parseFormula('H₂SO₄').atoms).toEqual({ H: 2, S: 1, O: 4 });
    expect(parseFormula('Fe³⁺').charge).toBe(3);
    expect(normalizeFormula(' SO₄²⁻ ')).toBe('SO4^2-');
  });

  it('rejects malformed formulas with a Vietnamese message', () => {
    for (const bad of ['', 'Xx2', 'H2O)', '(H2O', 'h2o', '2H2O', 'H0', 'Fe3+', 'CuSO4·']) {
      expect(() => parseFormula(bad), bad).toThrow(FormulaError);
    }
    expect(() => parseFormula('Fe3+')).toThrow(/\^/);
  });

  it('computes molar masses from atomic weights', () => {
    expect(molarMass('H2O')).toBeCloseTo(18.015, 3);
    expect(molarMass('CO2')).toBeCloseTo(44.009, 3);
    expect(molarMass('NaCl')).toBeCloseTo(58.44, 2);
    expect(molarMass('CuSO4·5H2O')).toBeCloseTo(249.68, 1);
  });

  it('splits formulas into subscripts and superscripts for display', () => {
    expect(formulaParts('Fe2(SO4)3')).toEqual([
      { text: 'Fe', kind: 'normal' },
      { text: '2', kind: 'sub' },
      { text: '(SO', kind: 'normal' },
      { text: '4', kind: 'sub' },
      { text: ')', kind: 'normal' },
      { text: '3', kind: 'sub' },
    ]);
    expect(prettyFormula('CuSO4·5H2O')).toBe('CuSO₄·5H₂O');
    expect(prettyFormula('SO4^2-')).toBe('SO₄²⁻');
    expect(prettyFormula('Na+')).toBe('Na⁺');
  });
});
