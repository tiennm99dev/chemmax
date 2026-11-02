import { describe, expect, it } from 'vitest';
import {
  activationFromRatio,
  arrhenius,
  boltzmannShare,
  catalystGain,
  energyProfile,
  ratioOnHeating,
  sciTex,
} from './engine.js';

describe('Arrhenius', () => {
  it('shrinks k as Ea grows and grows k as T rises', () => {
    expect(arrhenius(1e11, 100, 300)).toBeLessThan(arrhenius(1e11, 80, 300));
    expect(arrhenius(1e11, 100, 400)).toBeGreaterThan(arrhenius(1e11, 100, 300));
    expect(boltzmannShare(0, 300)).toBe(1);
  });

  it('solves the two-temperature form the book uses', () => {
    expect(ratioOnHeating(100, 350, 400)).toBeCloseTo(73.3, 0);
    expect(8e-6 * ratioOnHeating(100, 350, 400)).toBeCloseTo(5.87e-4, 5);
    expect(activationFromRatio(3, 300, 310)).toBeCloseTo(84.9, 0);
    expect(8.17e-3 * ratioOnHeating(103.5, 318, 338)).toBeCloseTo(0.0828, 3);
  });

  it('agrees with the plain equation', () => {
    const direct = arrhenius(5, 60, 500) / arrhenius(5, 60, 300);
    expect(ratioOnHeating(60, 300, 500)).toBeCloseTo(direct, 3);
  });

  it('measures what a catalyst gains', () => {
    expect(catalystGain(55.4, 13.5, 773)).toBeCloseTo(678, -1);
    expect(catalystGain(50, 50, 300)).toBe(1);
  });
});

describe('energyProfile', () => {
  it('starts at 0, peaks at Ea and ends at the reaction enthalpy', () => {
    const p = energyProfile(100, -40);
    expect(p[0].e).toBe(0);
    expect(p.at(-1)?.e).toBe(-40);
    expect(Math.max(...p.map((x) => x.e))).toBeCloseTo(100, 0);
  });
});

describe('sciTex', () => {
  it('writes plain numbers plain and small or large ones with a power of ten', () => {
    expect(sciTex(5.87e-4)).toBe('5{,}87 \\cdot 10^{-4}');
    expect(sciTex(2.5e8)).toBe('2{,}5 \\cdot 10^{8}');
    expect(sciTex(73.3)).toBe('73{,}3');
  });

  it('carries a mantissa that rounds up to ten', () => {
    expect(sciTex(9.999e-5)).toBe('1 \\cdot 10^{-4}');
  });
});
