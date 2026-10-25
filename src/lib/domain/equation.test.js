import { describe, expect, it } from 'vitest';
import { FormulaError } from './formula.js';
import {
  balance,
  conservationMatrix,
  formatEquation,
  isBalanced,
  nullSpace,
  parseEquation,
  tally,
} from './equation.js';

/** @param {string} text */
function balanced(text) {
  const result = balance(parseEquation(text));
  if (!result.ok) throw new Error(result.message);
  return result.coefficients;
}

describe('equation parser', () => {
  it('accepts the usual arrows and leading coefficients', () => {
    for (const arrow of ['->', '→', '=', '⇌', '<=>']) {
      const eq = parseEquation(`2H2 + O2 ${arrow} 2H2O`);
      expect(eq.reactants.map((s) => s.formula)).toEqual(['H2', 'O2']);
      expect(eq.products.map((s) => s.formula)).toEqual(['H2O']);
      expect(eq.reactants.map((s) => s.coefficient)).toEqual([2, null]);
    }
    expect(parseEquation('H2+O2->H2O').reactants).toHaveLength(2);
  });

  it('keeps charge signs inside ions', () => {
    const eq = parseEquation('Fe^3+ + 3OH^- -> Fe(OH)3');
    expect(eq.reactants.map((s) => [s.formula, s.charge])).toEqual([
      ['Fe^3+', 3],
      ['OH^-', -1],
    ]);
    const salt = parseEquation('Na+ + Cl- -> NaCl');
    expect(salt.reactants.map((s) => s.charge)).toEqual([1, -1]);
  });

  it('rejects equations without exactly one arrow or with an empty species', () => {
    expect(() => parseEquation('H2 + O2')).toThrow(FormulaError);
    expect(() => parseEquation('H2 -> H2 -> H2')).toThrow(FormulaError);
    expect(() => parseEquation('H2 + -> H2')).toThrow(FormulaError);
    expect(() => parseEquation('H2 + Qq -> H2')).toThrow(FormulaError);
  });
});

describe('balancing', () => {
  it('balances textbook equations to the smallest integers', () => {
    expect(balanced('H2 + O2 -> H2O')).toEqual([2, 1, 2]);
    expect(balanced('Fe + O2 -> Fe3O4')).toEqual([3, 2, 1]);
    expect(balanced('Al + O2 -> Al2O3')).toEqual([4, 3, 2]);
    expect(balanced('C2H5OH + O2 -> CO2 + H2O')).toEqual([1, 3, 2, 3]);
    expect(balanced('FeS2 + O2 -> Fe2O3 + SO2')).toEqual([4, 11, 2, 8]);
    expect(balanced('Cu + HNO3 -> Cu(NO3)2 + NO + H2O')).toEqual([3, 8, 3, 2, 4]);
    expect(balanced('KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O')).toEqual([2, 16, 2, 2, 5, 8]);
    expect(balanced('CuSO4·5H2O -> CuSO4 + H2O')).toEqual([1, 1, 5]);
    expect(balanced('Ca(OH)2 + H3PO4 -> Ca3(PO4)2 + H2O')).toEqual([3, 2, 1, 6]);
  });

  it('ignores coefficients already written', () => {
    expect(balanced('5H2 + 7O2 -> 3H2O')).toEqual([2, 1, 2]);
  });

  it('conserves charge in ionic equations', () => {
    expect(balanced('Fe^3+ + OH^- -> Fe(OH)3')).toEqual([1, 3, 1]);
    expect(balanced('MnO4^- + Fe^2+ + H^+ -> Mn^2+ + Fe^3+ + H2O')).toEqual([1, 5, 8, 1, 5, 4]);
    expect(conservationMatrix(parseEquation('Fe^3+ + OH^- -> Fe(OH)3')).rows).toEqual([
      'Fe',
      'O',
      'H',
      'charge',
    ]);
  });

  it('reports equations that cannot be balanced or have many answers', () => {
    const impossible = balance(parseEquation('H2 -> O2'));
    expect(impossible).toMatchObject({ ok: false, reason: 'impossible' });
    expect(balance(parseEquation('NaCl -> Na'))).toMatchObject({ ok: false, reason: 'impossible' });
    const many = balance(parseEquation('H2 + O2 -> H2O + H2O2'));
    expect(many).toMatchObject({ ok: false, reason: 'ambiguous' });
  });

  it('finds the null space in exact arithmetic', () => {
    const basis = nullSpace(
      [
        [2, 0, -2],
        [0, 2, -1],
      ],
      3,
    );
    expect(basis).toHaveLength(1);
    expect(basis[0].map(([n, d]) => Number(n) / Number(d))).toEqual([1, 0.5, 1]);
    expect(
      nullSpace(
        [
          [1, 0],
          [0, 1],
        ],
        2,
      ),
    ).toEqual([]);
  });
});

describe('checking a learner’s coefficients', () => {
  const eq = parseEquation('Al + O2 -> Al2O3');

  it('counts atoms on each side', () => {
    expect(tally(eq, [1, 1, 1])).toEqual([
      { symbol: 'Al', left: 1, right: 2 },
      { symbol: 'O', left: 2, right: 3 },
    ]);
    expect(tally(eq, [4, 3, 2])).toEqual([
      { symbol: 'Al', left: 4, right: 4 },
      { symbol: 'O', left: 6, right: 6 },
    ]);
  });

  it('accepts any positive multiple and rejects zeros', () => {
    expect(isBalanced(eq, [4, 3, 2])).toBe(true);
    expect(isBalanced(eq, [8, 6, 4])).toBe(true);
    expect(isBalanced(eq, [4, 3, 1])).toBe(false);
    expect(isBalanced(eq, [0, 0, 0])).toBe(false);
  });

  it('writes the balanced equation without ones', () => {
    expect(formatEquation(eq, [4, 3, 2])).toBe('4Al + 3O2 → 2Al2O3');
    expect(formatEquation(parseEquation('H2 + Cl2 -> HCl'), [1, 1, 2])).toBe('H2 + Cl2 → 2HCl');
  });
});
