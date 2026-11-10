import { describe, expect, it } from 'vitest';
import {
  COMPOUNDS,
  PLANS,
  PRODUCTS,
  fertiliserFor,
  nutrientGrams,
  planFeedback,
  supplied,
  theoreticalGrade,
  verdict,
} from './engine.js';

describe('theoretical grades', () => {
  it('matches hand-worked values', () => {
    expect(theoreticalGrade('(NH2)2CO', 'N')).toBeCloseTo(46.67, 2);
    expect(theoreticalGrade('NH4NO3', 'N')).toBe(35);
    expect(theoreticalGrade('(NH4)2SO4', 'N')).toBeCloseTo(21.21, 2);
    expect(theoreticalGrade('Ca(H2PO4)2', 'P2O5')).toBeCloseTo(60.68, 2);
    expect(theoreticalGrade('Ca(H2PO4)2·2CaSO4', 'P2O5')).toBeCloseTo(28.06, 2);
    expect(theoreticalGrade('KCl', 'K2O')).toBeCloseTo(63.09, 2);
    expect(theoreticalGrade('K2SO4', 'K2O')).toBeCloseTo(54.02, 2);
    expect(theoreticalGrade('(NH4)2HPO4', 'P2O5')).toBeCloseTo(53.79, 2);
  });

  it('writes the nutrient mass per mole for the worked fraction', () => {
    expect(nutrientGrams('(NH2)2CO', 'N')).toEqual({ grams: 28, tex: '2 \\cdot 14' });
    expect(nutrientGrams('KCl', 'K2O')).toEqual({ grams: 47, tex: '\\dfrac{1}{2} \\cdot 94' });
    expect(nutrientGrams('K2SO4', 'K2O')).toEqual({ grams: 94, tex: '94' });
  });

  it('gives every compound a positive grade for each nutrient it counts', () => {
    const bad = COMPOUNDS.flatMap((c) =>
      c.counts.filter((k) => !(theoreticalGrade(c.formula, k) > 0)).map((k) => `${c.id} ${k}`),
    );
    expect(bad).toEqual([]);
  });
});

describe('fertiliser planner', () => {
  it('adds up nutrients from several products', () => {
    expect(supplied({ urea: 100, dap: 100, kcl: 50 })).toEqual({ N: 64, P2O5: 46, K2O: 30 });
    expect(supplied({ npk: 50 })).toEqual({ N: 8, P2O5: 8, K2O: 4 });
  });

  it('can meet every plan with straight fertilisers on the slider grid', () => {
    const misses = PLANS.filter((plan) => {
      /** @param {number} kg @param {number} grade */
      const onGrid = (kg, grade) => Math.round(fertiliserFor(kg, grade) / 5) * 5;
      const got = supplied({
        urea: onGrid(plan.need.N, 46),
        super: onGrid(plan.need.P2O5, 16),
        kcl: onGrid(plan.need.K2O, 60),
      });
      const max = Object.fromEntries(PRODUCTS.map((p) => [p.id, p.max]));
      return (
        !planFeedback(got, plan.need, String).done ||
        onGrid(plan.need.N, 46) > max.urea ||
        onGrid(plan.need.P2O5, 16) > max.super
      );
    }).map((p) => p.id);
    expect(misses).toEqual([]);
  });

  it('judges each nutrient within 5 %', () => {
    expect(verdict(94, 100)).toBe('short');
    expect(verdict(96, 100)).toBe('ok');
    expect(verdict(106, 100)).toBe('over');
    expect(planFeedback({ N: 80, P2O5: 60, K2O: 70 }, PLANS[0].need, String).text).toBe(
      'Còn thiếu 20 kg $\\mathrm{N}$, thừa 10 kg $\\mathrm{K_2O}$.',
    );
  });
});
