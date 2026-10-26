import { describe, expect, it } from 'vitest';
import { isBalancedText } from '../_shared/reaction.js';
import {
  ANIONS,
  CATIONS,
  SOLUTIONS,
  TABLE,
  anion,
  cation,
  compound,
  formulaOf,
  mix,
  randomPair,
} from './engine.js';

/** @param {string} id */
const sol = (id) =>
  /** @type {import('./engine.js').Solution} */ (SOLUTIONS.find((s) => s.id === id));

describe('compound', () => {
  it('writes formulas with the right subscripts and brackets', () => {
    expect(compound(cation('Na'), anion('Cl'))).toBe('NaCl');
    expect(compound(cation('Cu'), anion('OH'))).toBe('Cu(OH)2');
    expect(compound(cation('Fe3'), anion('SO4'))).toBe('Fe2(SO4)3');
    expect(compound(cation('Ba'), anion('PO4'))).toBe('Ba3(PO4)2');
    expect(compound(cation('Fe3'), anion('PO4'))).toBe('FePO4');
    expect(compound(cation('Mg'), anion('Cl'))).toBe('MgCl2');
    expect(compound(cation('Na'), anion('CO3'))).toBe('Na2CO3');
  });
});

describe('solubility table', () => {
  it('has a mark for every cation and anion', () => {
    for (const a of ANIONS) for (const c of CATIONS) expect(TABLE[a.id][c.id]).toMatch(/^[TIK–]$/);
  });

  it('offers only soluble solutions', () => {
    for (const s of SOLUTIONS) expect(TABLE[s.anion][s.cation], s.id).toBe('T');
  });
});

describe('mix', () => {
  it('finds the classic precipitates with balanced equations', () => {
    const cases = [
      ['Ba-Cl', 'Na-SO4', 'BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl'],
      ['Cu-SO4', 'Na-OH', 'CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4'],
      ['Fe3-Cl', 'Na-OH', 'FeCl3 + 3NaOH → Fe(OH)3↓ + 3NaCl'],
      ['Ag-NO3', 'Na-Cl', 'AgNO3 + NaCl → AgCl↓ + NaNO3'],
      ['Cu-SO4', 'K-PO4', '3CuSO4 + 2K3PO4 → Cu3(PO4)2↓ + 3K2SO4'],
    ];
    for (const [a, b, eq] of cases) {
      const r = mix(sol(a), sol(b));
      expect(r.outcome).toBe('precipitate');
      expect(r.equation).toBe(eq);
      expect(isBalancedText(eq)).toBe(true);
    }
    expect(mix(sol('Fe3-Cl'), sol('Na-OH')).text).toContain('nâu đỏ');
    expect(mix(sol('Ba-Cl'), sol('Na-SO4')).text).toContain('BaSO₄ (barium sulfate)');
  });

  it('gives no reaction when every new pair is soluble or ions are shared', () => {
    expect(mix(sol('Na-Cl'), sol('K-NO3')).outcome).toBe('none');
    expect(mix(sol('Na-Cl'), sol('Na-SO4')).products).toHaveLength(0);
  });

  it('flags slightly soluble and unstable products', () => {
    expect(mix(sol('Ag-NO3'), sol('Na-SO4')).outcome).toBe('slight');
    expect(mix(sol('Cu-SO4'), sol('Na-CO3')).outcome).toBe('unstable');
  });

  it('balances every precipitate the mixer can produce', () => {
    for (const a of SOLUTIONS) {
      for (const b of SOLUTIONS) {
        const r = mix(a, b);
        if (r.outcome !== 'precipitate') continue;
        expect(r.equation, `${formulaOf(a)} + ${formulaOf(b)}`).not.toBeNull();
        expect(isBalancedText(/** @type {string} */ (r.equation))).toBe(true);
        expect(r.text).not.toContain('undefined');
      }
    }
  });
});

describe('randomPair', () => {
  it('only asks clear-cut questions', () => {
    let seed = 1;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let k = 0; k < 50; k++) {
      const [a, b] = randomPair(rand);
      expect(a.id).not.toBe(b.id);
      expect(['precipitate', 'none']).toContain(mix(a, b).outcome);
    }
  });
});
