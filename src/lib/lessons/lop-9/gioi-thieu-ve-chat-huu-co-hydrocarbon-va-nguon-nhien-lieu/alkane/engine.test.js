import { describe, expect, it } from 'vitest';
import { bondValences } from '#lib/domain/molecule.js';
import { isBalancedText } from '../_shared/equation-check.js';
import {
  ALKANES,
  alkaneFormula,
  alkaneMolecule,
  combustion,
  equationText,
  isBalanced,
  isSimplest,
  molarMass,
} from './engine.js';

describe('alkaneMolecule', () => {
  it('draws CnH2n+2 with carbon valence IV and hydrogen valence I', () => {
    for (const { n } of ALKANES) {
      const m = alkaneMolecule(n);
      expect(m.atoms.filter((a) => a.el === 'C')).toHaveLength(n);
      expect(m.atoms.filter((a) => a.el === 'H')).toHaveLength(2 * n + 2);
      const v = bondValences(m);
      m.atoms.forEach((a, i) => expect(v[i]).toBe(a.el === 'C' ? 4 : 1));
    }
  });
});

describe('combustion', () => {
  it('gives the book equations', () => {
    expect(equationText(1, combustion(1))).toBe('CH4 + 2O2 → CO2 + 2H2O');
    expect(equationText(2, combustion(2))).toBe('2C2H6 + 7O2 → 4CO2 + 6H2O');
    expect(equationText(3, combustion(3))).toBe('C3H8 + 5O2 → 3CO2 + 4H2O');
    expect(equationText(4, combustion(4))).toBe('2C4H10 + 13O2 → 8CO2 + 10H2O');
  });

  it('is balanced and simplest for every alkane up to C10', () => {
    for (let n = 1; n <= 10; n++) {
      const k = combustion(n);
      expect(isBalanced(n, k)).toBe(true);
      expect(isSimplest(k)).toBe(true);
      expect(isBalancedText(equationText(n, k))).toBe(true);
    }
  });

  it('spots unbalanced and non-simplest coefficients', () => {
    expect(isBalanced(1, [1, 1, 1, 2])).toBe(false);
    expect(isBalanced(1, [2, 4, 2, 4])).toBe(true);
    expect(isSimplest([2, 4, 2, 4])).toBe(false);
  });
});

describe('formulas', () => {
  it('names and weighs the alkanes', () => {
    expect(alkaneFormula(1)).toBe('CH4');
    expect(alkaneFormula(4)).toBe('C4H10');
    expect(molarMass(4)).toBe(58);
    expect(molarMass(3)).toBe(44);
  });
});
