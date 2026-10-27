import { describe, expect, it } from 'vitest';
import { isBalancedText } from '../_shared/equation-check.js';
import { PORTIONS_TO_CLEAR, bromineColour, bromineTest, chainMass, mol } from './engine.js';

describe('bromineTest', () => {
  it('lets methane pass without touching the bromine', () => {
    const t = bromineTest('ch4', 8);
    expect(t.reacted).toBe(0);
    expect(t.colour).toBe(1);
    expect(mol(t.escaped)).toBeCloseTo(0.016, 9);
  });

  it('uses bromine one to one with ethylene until it runs out', () => {
    expect(mol(bromineTest('c2h4', 2).bromineLeft)).toBeCloseTo(0.006, 9);
    expect(PORTIONS_TO_CLEAR).toBe(5);
    const done = bromineTest('c2h4', 5);
    expect(done.colour).toBe(0);
    expect(done.escaped).toBe(0);
    const extra = bromineTest('c2h4', 7);
    expect(mol(extra.product)).toBeCloseTo(0.01, 9);
    expect(mol(extra.escaped)).toBeCloseTo(0.004, 9);
  });

  it('fades the colour from orange to nearly clear', () => {
    expect(bromineColour(1)).toBe('rgb(234, 120, 20)');
    expect(bromineColour(0)).toBe('rgb(254, 249, 231)');
  });

  it('matches balanced equations', () => {
    expect(isBalancedText('CH2=CH2 + Br2 → BrCH2–CH2Br')).toBe(true);
    expect(isBalancedText('C2H4 + 3O2 → 2CO2 + 2H2O')).toBe(true);
  });
});

describe('chainMass', () => {
  it('adds 28 amu per unit', () => {
    expect(chainMass(1)).toBe(28);
    expect(chainMass(1000)).toBe(28_000);
  });
});
