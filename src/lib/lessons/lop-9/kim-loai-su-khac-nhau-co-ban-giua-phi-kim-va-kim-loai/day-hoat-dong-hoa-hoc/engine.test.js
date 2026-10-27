import { describe, expect, it } from 'vitest';
import { isBalancedText } from '../_shared/reaction.js';
import {
  SERIES,
  acidEquation,
  displacementEquation,
  nitrate,
  predict,
  rank,
  waterEquation,
} from './engine.js';

const METALS = /** @type {import('./engine.js').MetalId[]} */ (SERIES.filter((x) => x !== 'H'));

describe('series', () => {
  it('follows the book order with H between Pb and Cu', () => {
    expect(SERIES.join(' ')).toBe('K Na Ca Mg Al Zn Fe Pb H Cu Ag Au');
    expect(rank('Pb')).toBeLessThan(rank('H'));
    expect(rank('H')).toBeLessThan(rank('Cu'));
  });
});

describe('equations', () => {
  it('writes the book equations', () => {
    expect(displacementEquation('Fe', 'Cu')).toBe('Fe + Cu(NO3)2 → Fe(NO3)2 + Cu');
    expect(displacementEquation('Al', 'Cu')).toBe('2Al + 3Cu(NO3)2 → 2Al(NO3)3 + 3Cu');
    expect(displacementEquation('Cu', 'Ag')).toBe('Cu + 2AgNO3 → Cu(NO3)2 + 2Ag');
    expect(displacementEquation('Al', 'Ag')).toBe('Al + 3AgNO3 → Al(NO3)3 + 3Ag');
    expect(acidEquation('Al')).toBe('2Al + 6HCl → 2AlCl3 + 3H2↑');
    expect(acidEquation('Na')).toBe('2Na + 2HCl → 2NaCl + H2↑');
    expect(acidEquation('Zn')).toBe('Zn + 2HCl → ZnCl2 + H2↑');
    expect(waterEquation('Ca')).toBe('Ca + 2H2O → Ca(OH)2 + H2↑');
    expect(nitrate('Ag')).toBe('AgNO3');
  });

  it('balances every equation predict can give', () => {
    for (const m of METALS) {
      for (const t of SERIES) {
        const p = predict(m, t);
        if (p.equation) expect(isBalancedText(p.equation), p.equation).toBe(true);
        else expect(p.reacts).toBe(false);
      }
    }
  });
});

describe('predict', () => {
  it('frees hydrogen only with metals before H', () => {
    const freeing = METALS.filter((m) => predict(m, 'H').displaces);
    expect(freeing).toEqual(['K', 'Na', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Pb']);
  });

  it('displaces a later metal, never an earlier one', () => {
    expect(predict('Zn', 'Cu').displaces).toBe(true);
    expect(predict('Cu', 'Zn').displaces).toBe(false);
    expect(predict('Cu', 'Ag').displaces).toBe(true);
    expect(predict('Ag', 'Cu').reacts).toBe(false);
    expect(predict('Au', 'Ag').reacts).toBe(false);
  });

  it('lets K, Na, Ca react with the water instead of displacing', () => {
    const p = predict('Na', 'Cu');
    expect(p.reacts).toBe(true);
    expect(p.displaces).toBe(false);
    expect(p.equation).toBe('2Na + 2H2O → 2NaOH + H2↑');
  });

  it('does nothing in a solution of the same metal', () => {
    expect(predict('Fe', 'Fe').reacts).toBe(false);
  });
});
