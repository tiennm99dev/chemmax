import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  ALCOHOLS,
  POLYOLS,
  alcoholOrder,
  carbonOrder,
  dissolvesCopperHydroxide,
  oxidation,
} from './engine.js';

/** @param {string} text */
const plain = (text) => text.replace(/[–=≡]/g, '');

describe('alcohol order and oxidation', () => {
  it('gives every carbon four bonds', () => {
    const wrong = ALCOHOLS.filter((a) =>
      a.chain.some((c, i) => c.h + carbonOrder(a.chain, i) + (c.oh ? 1 : 0) !== 4),
    );
    expect(wrong).toEqual([]);
  });

  it('writes formulas that match the chains', () => {
    const wrong = ALCOHOLS.filter((a) => {
      const branches = a.chain.reduce((s, c) => s + (c.branches ?? 0), 0);
      const c = a.chain.length + branches;
      const h = a.chain.reduce((s, x) => s + x.h, 0) + 3 * branches + 1;
      const f = parseFormula(plain(a.text)).atoms;
      return f.C !== c || f.H !== h || f.O !== 1;
    });
    expect(wrong).toEqual([]);
  });

  it('classifies the alcohols by order', () => {
    expect(Object.fromEntries(ALCOHOLS.map((a) => [a.id, alcoholOrder(a)]))).toEqual({
      methanol: 1,
      ethanol: 1,
      'propan-1-ol': 1,
      'propan-2-ol': 2,
      'butan-2-ol': 2,
      '2-methylpropan-1-ol': 1,
      '2-methylpropan-2-ol': 3,
      '2-methylbutan-2-ol': 3,
    });
  });

  it('oxidises order I to aldehydes, order II to ketones and not order III', () => {
    const wrong = ALCOHOLS.filter((a) => {
      const order = alcoholOrder(a);
      const eq = oxidation(a);
      if (order === 3) return eq !== null;
      if (eq === null || !isBalancedText(eq)) return true;
      const ox = /** @type {string} */ (a.oxidised);
      return order === 1 ? !ox.endsWith('CHO') : !ox.includes('CO–');
    });
    expect(wrong).toEqual([]);
  });
});

describe('copper(II) hydroxide test', () => {
  it('dissolves only with OH groups on neighbouring carbons', () => {
    expect(POLYOLS.filter(dissolvesCopperHydroxide).map((p) => p.id)).toEqual([
      'ethylene-glycol',
      'glycerol',
    ]);
  });

  it('balances the complex-forming equations', () => {
    const wrong = POLYOLS.filter((p) => p.equation && !isBalancedText(p.equation));
    expect(wrong).toEqual([]);
  });
});
