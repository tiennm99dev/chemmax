import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { METAL_LOSS, NONMETAL_OUTER, compound, gain, ionText, transfer } from './engine.js';

const METALS = /** @type {import('./engine.js').MetalId[]} */ (Object.keys(METAL_LOSS));
const NONMETALS = /** @type {import('./engine.js').NonmetalId[]} */ (Object.keys(NONMETAL_OUTER));

describe('compound', () => {
  it('gives the formula from equal electrons lost and gained', () => {
    expect(compound('Na', 'Cl').formula).toBe('NaCl');
    expect(compound('Mg', 'O').formula).toBe('MgO');
    expect(compound('Ca', 'Cl').formula).toBe('CaCl2');
    expect(compound('Al', 'O').formula).toBe('Al2O3');
    expect(compound('K', 'S').formula).toBe('K2S');
    expect(compound('Al', 'S').formula).toBe('Al2S3');
    expect(compound('Al', 'O').electrons).toBe(6);
  });

  it('writes the formation equations of the book', () => {
    expect(compound('Na', 'Cl').equation).toBe('2Na + Cl2 → 2NaCl');
    expect(compound('Al', 'O').equation).toBe('4Al + 3O2 → 2Al2O3');
    expect(compound('Mg', 'O').equation).toBe('2Mg + O2 → 2MgO');
    expect(compound('Ca', 'Cl').equation).toBe('Ca + Cl2 → CaCl2');
    expect(compound('Al', 'Cl').equation).toBe('2Al + 3Cl2 → 2AlCl3');
    expect(compound('Mg', 'S').equation).toBe('Mg + S → MgS');
    for (const m of METALS) {
      for (const n of NONMETALS) {
        const eq = compound(m, n).equation;
        expect(isBalancedText(eq), eq).toBe(true);
      }
    }
  });
});

describe('ions', () => {
  it('writes charges as superscripts', () => {
    expect(ionText('Na', 1)).toBe('Na⁺');
    expect(ionText('Al', 3)).toBe('Al³⁺');
    expect(ionText('O', -gain('O'))).toBe('O²⁻');
    expect(ionText('Cl', -gain('Cl'))).toBe('Cl⁻');
  });
});

describe('transfer', () => {
  it('moves electrons one by one until every atom is an ion', () => {
    const start = transfer('Al', 'O', 0);
    expect(start.lost).toEqual([0, 0]);
    expect(start.gained).toEqual([0, 0, 0]);
    expect(start.done).toBe(false);
    const mid = transfer('Al', 'O', 4);
    expect(mid.lost).toEqual([3, 1]);
    expect(mid.gained).toEqual([2, 2, 0]);
    const end = transfer('Al', 'O', 99);
    expect(end.lost).toEqual([3, 3]);
    expect(end.gained).toEqual([2, 2, 2]);
    expect(end.moves).toHaveLength(6);
    expect(end.done).toBe(true);
  });
});
