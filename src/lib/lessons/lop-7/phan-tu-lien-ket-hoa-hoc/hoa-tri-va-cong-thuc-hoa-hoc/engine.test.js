import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import {
  FIRST,
  MAX_INDEX,
  buildFormula,
  evaluate,
  feedback,
  firstPart,
  lowestIndexes,
  partnersOf,
  secondPart,
  valenceFrom,
  valenceRule,
} from './engine.js';

describe('buildFormula', () => {
  it('brackets a group only when its subscript is above one', () => {
    expect(buildFormula(firstPart('Al'), 2, secondPart('O'), 3)).toBe('Al2O3');
    expect(buildFormula(firstPart('Ca'), 1, secondPart('OH'), 2)).toBe('Ca(OH)2');
    expect(buildFormula(firstPart('Na'), 1, secondPart('OH'), 1)).toBe('NaOH');
    expect(buildFormula(firstPart('H'), 2, secondPart('SO4'), 1)).toBe('H2SO4');
    expect(buildFormula(firstPart('Al'), 2, secondPart('SO4'), 3)).toBe('Al2(SO4)3');
  });
});

describe('valence rule', () => {
  it('gives lowest subscripts from the valences', () => {
    expect(lowestIndexes(3, 2)).toEqual([2, 3]);
    expect(lowestIndexes(2, 2)).toEqual([1, 1]);
    expect(lowestIndexes(4, 2)).toEqual([1, 2]);
    expect(lowestIndexes(5, 2)).toEqual([2, 5]);
    expect(lowestIndexes(6, 2)).toEqual([1, 3]);
  });

  it('checks a·x = b·y and lowest terms', () => {
    expect(valenceRule(3, 2, 2, 3)).toEqual({ left: 6, right: 6, holds: true, lowest: true });
    expect(valenceRule(2, 2, 2, 2).lowest).toBe(false);
    expect(valenceRule(2, 1, 1, 1).holds).toBe(false);
  });

  it('works a valence back from a formula', () => {
    expect(valenceFrom(2, 2, 3)).toBe(3); // Fe2O3
    expect(valenceFrom(1, 2, 2)).toBe(4); // CO2
    expect(valenceFrom(2, 2, 5)).toBe(5); // P2O5
    expect(valenceFrom(3, 2, 4)).toBeNull(); // Fe3O4 has no whole valence
  });
});

describe('evaluate', () => {
  it('accepts every listed valence with lowest subscripts that fit the builder', () => {
    for (const A of FIRST) {
      for (const B of partnersOf(A.id)) {
        for (const a of A.valences) {
          for (const b of B.valences) {
            const [x, y] = lowestIndexes(a, b);
            expect(Math.max(x, y)).toBeLessThanOrEqual(MAX_INDEX);
            const r = evaluate({ first: A.id, second: B.id, a, b, x, y });
            expect(r.correct, r.formula).toBe(true);
            expect(['ok', 'unstable']).toContain(r.status);
            expect(() => parseFormula(r.formula)).not.toThrow();
            const sum = r.percents.reduce((s, p) => s + p.percent, 0);
            expect(sum).toBeCloseTo(100, 8);
          }
        }
      }
    }
  });

  it('reports the first mistake', () => {
    const base = { first: 'Fe', second: 'O', a: 3, b: 2, x: 2, y: 3 };
    expect(evaluate(base).status).toBe('ok');
    expect(evaluate(base).mass).toBe(160);
    expect(evaluate({ ...base, a: 4 }).status).toBe('valence-a');
    expect(evaluate({ ...base, b: 1 }).status).toBe('valence-b');
    expect(evaluate({ ...base, y: 2 }).status).toBe('rule');
    expect(evaluate({ ...base, a: 2, x: 2, y: 2 }).status).toBe('lowest');
    expect(evaluate({ first: 'Ag', second: 'OH', a: 1, b: 1, x: 1, y: 1 }).status).toBe('unstable');
  });

  it('names the valences in Roman numerals', () => {
    const r = evaluate({ first: 'Na', second: 'Cl', a: 2, b: 1, x: 1, y: 1 });
    expect(feedback(r, 2, 1)).toContain('hoá trị I, không phải II');
    const ok = evaluate({ first: 'Al', second: 'O', a: 3, b: 2, x: 2, y: 3 });
    expect(feedback(ok, 3, 2)).toBe('Đúng quy tắc hoá trị: III × 2 = II × 3 = 6.');
    const bad = evaluate({ first: 'Al', second: 'O', a: 3, b: 2, x: 1, y: 1 });
    expect(feedback(bad, 3, 2)).toContain('III × 1 = 3 nhưng II × 1 = 2');
  });

  it('keeps non-metals to their usual partners', () => {
    expect(partnersOf('C').map((p) => p.id)).toEqual(['O']);
    expect(partnersOf('H').map((p) => p.id)).not.toContain('OH');
    expect(partnersOf('Na').length).toBe(8);
  });
});
