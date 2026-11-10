import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import { CHALLENGES, COMPOUNDS, REACTIONS, compound, react, route } from './engine.js';

/** @param {string} text */
const atoms = (text) =>
  JSON.stringify(Object.entries(parseFormula(text.replace(/[–=≡]/g, '')).atoms).sort());

describe('organic conversion map of grade 11', () => {
  it('balances every reaction', () => {
    expect(REACTIONS.filter((r) => !isBalancedText(r.equation)).map((r) => r.equation)).toEqual([]);
  });

  it('writes each start and end compound in its equation', () => {
    const wrong = REACTIONS.filter((r) => {
      const { left, right } = terms(r.equation);
      /**
       * @param {import('#lib/domain/reaction.js').Term[]} side
       * @param {import('./engine.js').CompoundId} id
       */
      const has = (side, id) => side.some((t) => t.formula === compound(id).formula);
      return !has(left, r.from) || !has(right, r.to);
    });
    expect(wrong).toEqual([]);
  });

  it('keeps the formula and id of each compound consistent', () => {
    const wrong = COMPOUNDS.filter((c) => atoms(c.formula) !== atoms(c.id)).map((c) => c.id);
    expect(wrong).toEqual([]);
  });

  it('has at most one product per compound and reagent', () => {
    const keys = REACTIONS.map((r) => `${r.from}:${r.reagent}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('picks the product by catalyst', () => {
    expect(react('C2H2', 'H2-Pd')?.to).toBe('C2H4');
    expect(react('C2H2', 'H2-Ni')?.to).toBe('C2H6');
    expect(react('C2H2', 'H2O')?.to).toBe('CH3CHO');
    expect(react('C2H4', 'H2O')?.to).toBe('C2H5OH');
    expect(react('CH3CHO', 'NaBH4')?.to).toBe('C2H5OH');
    expect(react('CH3COOC2H5', 'HCl')).toBeNull();
  });

  it('solves every challenge', () => {
    expect(CHALLENGES.map((c) => route(c.from, c.to)?.length ?? -1)).toEqual([3, 3, 3, 3]);
  });
});
