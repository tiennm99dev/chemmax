import { describe, expect, it } from 'vitest';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import {
  CHAIN_UNITS,
  CUT_ORDER,
  FOODS,
  IODINE,
  MOLAR_MASS,
  fragments,
  glucoseFromStarch,
  iodineColor,
  iodineStage,
  score,
} from './engine.js';

describe('iodine test', () => {
  it('turns blue-violet only where there is starch', () => {
    for (const f of FOODS) {
      expect(iodineColor(f)).toBe(f.starch ? IODINE.starch : IODINE.none);
      expect(f.starch).toBe(f.main === 'tinh bột');
    }
  });

  it('keeps cellulose samples free of starch', () => {
    const cellulose = FOODS.filter((f) => f.main === 'cellulose');
    expect(cellulose.length).toBeGreaterThan(0);
    expect(cellulose.every((f) => !f.starch)).toBe(true);
  });

  it('counts right predictions', () => {
    expect(score({})).toEqual({ right: 0, done: 0, total: FOODS.length });
    expect(score({ com: true, bong: true, duong: false })).toEqual({
      right: 2,
      done: 3,
      total: FOODS.length,
    });
  });
});

describe('hydrolysis', () => {
  it('turns 162 parts of starch into 180 parts of glucose', () => {
    expect(glucoseFromStarch(162, 100)).toBe(180);
    expect(glucoseFromStarch(1000, 80)).toBe(888.89);
    expect(glucoseFromStarch(81, 75)).toBe(67.5);
  });

  it('uses the book molar masses', () => {
    expect(MOLAR_MASS.unit).toBe(moleculeMassAmu('C6H10O5'));
    expect(MOLAR_MASS.glucose).toBe(moleculeMassAmu('C6H12O6'));
  });
});

describe('model hydrolysis of a starch chain', () => {
  it('cuts every bond once', () => {
    expect([...CUT_ORDER].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('keeps the units and ends with glucose only', () => {
    for (let k = 0; k <= CUT_ORDER.length; k += 1) {
      const pieces = fragments(k);
      expect(pieces.reduce((s, x) => s + x, 0)).toBe(CHAIN_UNITS);
      expect(pieces.length).toBe(k + 1);
    }
    expect(fragments(CUT_ORDER.length).every((x) => x === 1)).toBe(true);
  });

  it('fades the iodine colour as the pieces get shorter', () => {
    expect(iodineStage(fragments(0)).color).toBe(IODINE.starch);
    expect(iodineStage(fragments(CUT_ORDER.length)).color).toBe(IODINE.none);
    expect(iodineStage([4, 3, 5]).label).toMatch(/tím đỏ/);
  });
});
