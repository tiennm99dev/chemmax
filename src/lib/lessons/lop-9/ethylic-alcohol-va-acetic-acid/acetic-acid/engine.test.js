import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import { MOLAR_MASS, REAGENTS, esterYield, esterify } from './engine.js';

describe('esterify', () => {
  it('makes ethyl acetate and water when the acid gives OH and the alcohol H', () => {
    expect(esterify('OH', 'H')).toEqual({ status: 'ester', leaving: 'H2O' });
  });

  it('flags the swapped cut and cuts that cannot make water', () => {
    expect(esterify('H', 'OH').status).toBe('swapped');
    expect(esterify('H', 'H')).toEqual({ status: 'no-water', leaving: 'H2' });
    expect(esterify('OH', 'OH').leaving).toBe('H2O2');
  });

  it('balances the esterification', () => {
    expect(isBalancedText('CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O')).toBe(true);
  });
});

describe('esterYield', () => {
  it('takes the smaller amount as limiting and applies the yield', () => {
    const r = esterYield(20, 30, 50);
    expect(r.limiting).toBe('acid');
    expect(r.theoreticalMol).toBe(0.2);
    expect(r.massEster).toBe(8.8);
    expect(esterYield(10, 10, 60).massEster).toBe(5.28);
    expect(esterYield(30, 15, 100).limiting).toBe('alcohol');
  });

  it('uses the book molar masses', () => {
    expect(MOLAR_MASS.acid).toBe(moleculeMassAmu('CH3COOH'));
    expect(MOLAR_MASS.alcohol).toBe(moleculeMassAmu('C2H5OH'));
    expect(MOLAR_MASS.ester).toBe(moleculeMassAmu('CH3COOC2H5'));
    expect(MOLAR_MASS.water).toBe(moleculeMassAmu('H2O'));
  });
});

describe('REAGENTS', () => {
  it('writes balanced equations for every reaction', () => {
    for (const r of REAGENTS) {
      if (r.equation) expect(isBalancedText(r.equation), r.equation).toBe(true);
    }
  });

  it('has copper as the one metal that does not react', () => {
    expect(REAGENTS.filter((r) => !r.reacts).map((r) => r.id)).toEqual(['cu']);
  });
});
