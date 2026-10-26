import { describe, expect, it } from 'vitest';
import { BOOK_MASS, bookMass, moleculeMassAmu, percentComposition } from './book-masses.js';
import { element } from '#lib/domain/elements.js';

describe('book masses', () => {
  it('rounds every atomic weight the way the book does', () => {
    for (const [symbol, m] of Object.entries(BOOK_MASS)) {
      const precise = element(symbol)?.mass ?? NaN;
      expect(Math.abs(precise - m), symbol).toBeLessThan(0.6);
    }
  });

  it('rejects an element outside the table', () => {
    expect(() => bookMass('U')).toThrow();
  });
});

describe('moleculeMassAmu', () => {
  it('adds the atoms of a formula', () => {
    expect(moleculeMassAmu('H2O')).toBe(18);
    expect(moleculeMassAmu('CO2')).toBe(44);
    expect(moleculeMassAmu('HCl')).toBe(36.5);
    expect(moleculeMassAmu('Ca(OH)2')).toBe(74);
    expect(moleculeMassAmu('Fe2(SO4)3')).toBe(400);
    expect(moleculeMassAmu('C12H22O11')).toBe(342);
  });
});

describe('percentComposition', () => {
  it('gives each element its share of the mass', () => {
    const fe2o3 = percentComposition('Fe2O3');
    expect(fe2o3.map((p) => p.symbol)).toEqual(['Fe', 'O']);
    expect(fe2o3[0].percent).toBeCloseTo(70, 10);
    expect(fe2o3[1].percent).toBeCloseTo(30, 10);
    const co2 = percentComposition('CO2');
    expect(co2[0].percent).toBeCloseTo(27.27, 2);
    const sum = percentComposition('CaCO3').reduce((s, p) => s + p.percent, 0);
    expect(sum).toBeCloseTo(100, 10);
  });
});
