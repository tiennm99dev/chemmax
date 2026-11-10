import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import { CHALLENGES, COMPOUNDS, REACTIONS, compound, react, route } from './engine.js';

/** @param {string} text */
const atoms = (text) =>
  JSON.stringify(Object.entries(parseFormula(text.replace(/[–=≡]/g, '')).atoms).sort());

describe('conversion map of the chapter', () => {
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

  it('knows which reagents do nothing', () => {
    expect(react('C2H5OH', 'H2SO4-170')?.to).toBe('C2H4');
    expect(react('C2H5Br', 'NaOH-water')?.to).toBe('C2H5OH');
    expect(react('C2H5Br', 'KOH-ethanol')?.to).toBe('C2H4');
    expect(react('CH3CHO', 'HBr')).toBeNull();
  });

  it('solves every challenge', () => {
    const lengths = CHALLENGES.map((c) => route(c.from, c.to)?.length ?? -1);
    expect(lengths).toEqual([2, 2, 2, 3]);
  });
});
