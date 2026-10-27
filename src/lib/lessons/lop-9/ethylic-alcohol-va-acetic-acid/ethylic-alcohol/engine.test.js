import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import {
  ETHANOL_ATOMS,
  ETHANOL_BONDS,
  TASKS,
  alcoholDegree,
  ethanolIn,
  mixtureKind,
  recipe,
  sodiumProducts,
  trySodium,
} from './engine.js';

describe('alcohol content', () => {
  it('is the share of pure alcohol in 100 mL of mixture', () => {
    expect(alcoholDegree(70, 30)).toBe(70);
    expect(alcoholDegree(45, 105)).toBeCloseTo(30, 9);
    expect(alcoholDegree(0, 0)).toBe(0);
    expect(ethanolIn(40, 500)).toBe(200);
  });

  it('gives recipes reachable with 5 mL steps', () => {
    for (const t of TASKS) {
      const r = recipe(t.degree, t.volume);
      expect(r.ethanol % 5).toBe(0);
      expect(r.water % 5).toBe(0);
      expect(alcoholDegree(r.ethanol, r.water)).toBeCloseTo(t.degree, 9);
    }
    expect(recipe(70, 200)).toEqual({ ethanol: 140, water: 60 });
  });

  it('names the kind of mixture', () => {
    expect(mixtureKind(5)).toMatch(/bia/);
    expect(mixtureKind(70)).toMatch(/sát khuẩn/);
    expect(mixtureKind(100)).toMatch(/nguyên chất/);
  });
});

describe('ethylic alcohol and sodium', () => {
  it('draws CH3–CH2–OH with six hydrogens and eight bonds', () => {
    expect(ETHANOL_ATOMS.filter((a) => a.el === 'H')).toHaveLength(6);
    expect(ETHANOL_BONDS).toHaveLength(8);
  });

  it('replaces only the hydrogen of the –OH group', () => {
    const replaced = ETHANOL_ATOMS.filter((a) => trySodium(a.id) === 'replaced');
    expect(replaced.map((a) => a.id)).toEqual(['h6']);
    expect(trySodium('h1')).toBe('c-h');
    expect(trySodium('o')).toBe('not-h');
  });

  it('makes one H2 for every two molecules', () => {
    expect(sodiumProducts(2)).toEqual({ ethylate: 2, hydrogenAtoms: 2, h2: 1 });
    expect(sodiumProducts(1).h2).toBe(0);
  });

  it('uses balanced book equations and the book molar masses', () => {
    expect(isBalancedText('2C2H5OH + 2Na → 2C2H5ONa + H2↑')).toBe(true);
    expect(isBalancedText('C2H5OH + 3O2 → 2CO2 + 3H2O')).toBe(true);
    expect(moleculeMassAmu('C2H5OH')).toBe(46);
    expect(moleculeMassAmu('C2H5ONa')).toBe(68);
  });
});
