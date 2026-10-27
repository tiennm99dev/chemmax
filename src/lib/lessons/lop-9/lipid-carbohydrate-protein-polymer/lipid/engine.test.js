import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import {
  FATTY_ACIDS,
  MOLAR_MASS,
  fatFormula,
  fatMass,
  saltCounts,
  saponifyEquation,
  saponifyMasses,
  saponifyStep,
} from './engine.js';

const STEARIC = ['C17H35', 'C17H35', 'C17H35'];

describe('fat formulas and masses', () => {
  it('writes the book formula of a simple fat', () => {
    expect(fatFormula(STEARIC)).toBe('(C17H35COO)3C3H5');
  });

  it('gives the molar masses of tristearin, triolein and tripalmitin', () => {
    expect(fatMass(STEARIC)).toBe(890);
    expect(fatMass(['C17H33', 'C17H33', 'C17H33'])).toBe(884);
    expect(fatMass(['C15H31', 'C15H31', 'C15H31'])).toBe(806);
  });

  it('adds the R groups of a mixed fat', () => {
    expect(fatMass(['C17H35', 'C15H31', 'C17H33'])).toBe(283 + 255 + 281 + 41);
  });

  it('uses the book masses of glycerol and NaOH', () => {
    expect(MOLAR_MASS.glycerol).toBe(moleculeMassAmu('C3H5(OH)3'));
    expect(MOLAR_MASS.naoh).toBe(moleculeMassAmu('NaOH'));
  });
});

describe('saponification', () => {
  it('cuts one ester bond per NaOH', () => {
    expect(saponifyStep(STEARIC, 0)).toEqual({
      cut: [false, false, false],
      salts: [],
      naoh: 0,
      done: false,
    });
    const two = saponifyStep(STEARIC, 2);
    expect(two.cut).toEqual([true, true, false]);
    expect(two.salts).toEqual(['C17H35COONa', 'C17H35COONa']);
    expect(saponifyStep(STEARIC, 5).done).toBe(true);
  });

  it('conserves mass for every choice of fatty acids', () => {
    for (const a of FATTY_ACIDS)
      for (const b of FATTY_ACIDS) {
        const rs = [a.r, b.r, a.r];
        const m = saponifyMasses(rs);
        expect(m.fat + m.naoh).toBeCloseTo(m.salts + m.glycerol, 6);
      }
  });

  it('writes balanced equations for simple and mixed fats', () => {
    for (const a of FATTY_ACIDS)
      for (const b of FATTY_ACIDS)
        for (const c of FATTY_ACIDS) {
          const eq = saponifyEquation([a.r, b.r, c.r]);
          expect(isBalancedText(eq), eq).toBe(true);
        }
    expect(saponifyEquation(STEARIC)).toBe('(C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3');
    expect(saponifyEquation(['C17H35', 'C15H31', 'C17H35'])).toBe(
      '(C17H35COO)(C15H31COO)(C17H35COO)C3H5 + 3NaOH → 2C17H35COONa + C15H31COONa + C3H5(OH)3',
    );
  });

  it('counts each different salt of a mixed fat', () => {
    expect(saltCounts(['C17H35', 'C15H31', 'C17H35'])).toEqual([
      { r: 'C17H35', count: 2 },
      { r: 'C15H31', count: 1 },
    ]);
    expect(saltCounts(STEARIC)).toEqual([{ r: 'C17H35', count: 3 }]);
  });

  it('gives tristearin 3 × 306 g of sodium stearate per mole', () => {
    expect(saponifyMasses(STEARIC).salts).toBe(918);
  });
});
