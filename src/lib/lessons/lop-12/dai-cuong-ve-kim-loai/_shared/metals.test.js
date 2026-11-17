import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  ANIONS,
  METALS,
  REAGENTS,
  acidText,
  displacementText,
  metal,
  outcome,
  potentialTex,
  potentialText,
  saltOf,
  waterText,
} from './metals.js';

describe('metal data', () => {
  it('lists the series in rising E°', () => {
    const E = METALS.map((m) => m.E);
    expect(E).toEqual([...E].sort((a, b) => a - b));
  });

  it('writes potentials with a sign and a decimal comma', () => {
    expect(potentialText(-0.762)).toBe('−0,762 V');
    expect(potentialText(0.34)).toBe('+0,340 V');
    expect(potentialTex(-0.44)).toBe('-0{,}440');
  });
});

describe('formulas and equations', () => {
  it('writes salts the book way', () => {
    expect(saltOf('Al', 3, ANIONS.SO4).formula).toBe('Al2(SO4)3');
    expect(saltOf('Cu', 2, ANIONS.SO4).formula).toBe('CuSO4');
    expect(saltOf('Na', 1, ANIONS.SO4).formula).toBe('Na2SO4');
    expect(saltOf('Fe', 2, ANIONS.NO3).formula).toBe('Fe(NO3)2');
    expect(saltOf('Ag', 1, ANIONS.NO3).formula).toBe('AgNO3');
    expect(saltOf('Al', 3, ANIONS.Cl).formula).toBe('AlCl3');
    expect(saltOf('Mg', 2, ANIONS.OH).formula).toBe('Mg(OH)2');
  });

  it('balances displacements', () => {
    expect(displacementText(metal('Al'), metal('Cu'), ANIONS.SO4)).toBe(
      '2Al + 3CuSO4 → Al2(SO4)3 + 3Cu',
    );
    expect(displacementText(metal('Zn'), metal('Cu'), ANIONS.SO4)).toBe('Zn + CuSO4 → ZnSO4 + Cu');
    expect(displacementText(metal('Cu'), metal('Ag'), ANIONS.NO3)).toBe(
      'Cu + 2AgNO3 → Cu(NO3)2 + 2Ag',
    );
    expect(displacementText(metal('Al'), metal('Ag'), ANIONS.NO3)).toBe(
      'Al + 3AgNO3 → Al(NO3)3 + 3Ag',
    );
  });

  it('writes the acid and water reactions', () => {
    expect(acidText(metal('Al'))).toBe('2Al + 6HCl → 2AlCl3 + 3H2↑');
    expect(acidText(metal('Fe'))).toBe('Fe + 2HCl → FeCl2 + H2↑');
    expect(acidText(metal('Na'))).toBe('2Na + 2HCl → 2NaCl + H2↑');
    expect(waterText(metal('K'))).toBe('2K + 2H2O → 2KOH + H2↑');
    expect(waterText(metal('Mg'))).toBe('Mg + 2H2O → Mg(OH)2 + H2↑');
  });

  it('gives only balanced equations for every metal and reagent', () => {
    const bad = [];
    for (const m of METALS)
      for (const r of REAGENTS)
        for (const eq of outcome(m.id, r.id).equations)
          if (!isBalancedText(eq)) bad.push(`${m.id}/${r.id}: ${eq}`);
    expect(bad).toEqual([]);
  });
});

describe('outcome', () => {
  it('follows the α rule in salt solutions', () => {
    expect(outcome('Zn', 'CuSO4').reacts).toBe(true);
    expect(outcome('Cu', 'FeSO4').reacts).toBe(false);
    expect(outcome('Cu', 'AgNO3').reacts).toBe(true);
    expect(outcome('Ag', 'CuSO4').reacts).toBe(false);
    expect(outcome('Fe', 'FeSO4').reacts).toBe(false);
    expect(outcome('Fe', 'AgNO3').note).toContain('Fe(NO_3)_3');
  });

  it('lets alkali metals react with the water of a salt solution first', () => {
    const o = outcome('Na', 'CuSO4');
    expect(o.equations).toEqual(['2Na + 2H2O → 2NaOH + H2↑', '2NaOH + CuSO4 → Cu(OH)2↓ + Na2SO4']);
    expect(o.show).toBe('gas-precipitate');
  });

  it('frees hydrogen from dilute HCl only for E° below zero', () => {
    const fromAcid = METALS.filter((m) => outcome(m.id, 'HCl').reacts).map((m) => m.id);
    expect(fromAcid).toEqual(['K', 'Na', 'Mg', 'Al', 'Zn', 'Fe', 'Ni', 'Sn', 'Pb']);
  });

  it('reacts with cold water only for the alkali metals', () => {
    const cold = METALS.filter((m) => outcome(m.id, 'H2O').reacts).map((m) => m.id);
    expect(cold).toEqual(['K', 'Na']);
  });
});
