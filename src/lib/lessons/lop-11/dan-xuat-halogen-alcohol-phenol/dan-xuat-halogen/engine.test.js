import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { HALIDES, betaCarbons, carbonOrder, eliminate, halideText, substitute } from './engine.js';

/** @param {string} id */
const halide = (id) =>
  /** @type {import('./engine.js').Halide} */ (HALIDES.find((h) => h.id === id));

describe('substitution and elimination of an alkyl halide', () => {
  it('writes the halides the book way', () => {
    expect(HALIDES.map(halideText)).toEqual([
      'CH3–CH2Br',
      'CH3–CHBr–CH3',
      'CH3–CHBr–CH2–CH3',
      'CH3–CCl(CH3)–CH2–CH3',
    ]);
  });

  it('gives every carbon four bonds', () => {
    const wrong = HALIDES.filter((h) =>
      h.chain.some((c, i) => c.h + carbonOrder(h.chain, i) + (i === h.at ? 1 : 0) !== 4),
    );
    expect(wrong).toEqual([]);
  });

  it('replaces the halogen by OH in substitution', () => {
    expect(HALIDES.map((h) => substitute(h).text)).toEqual([
      'CH3–CH2OH',
      'CH3–CH(OH)–CH3',
      'CH3–CH(OH)–CH2–CH3',
      'CH3–C(OH)(CH3)–CH2–CH3',
    ]);
  });

  it('follows Zaitsev for 2-bromobutane', () => {
    const h = halide('2-bromobutane');
    expect(betaCarbons(h)).toEqual([0, 2]);
    expect(eliminate(h, 2)).toMatchObject({
      text: 'CH3–CH=CH–CH3',
      name: 'but-2-ene',
      kind: 'main',
    });
    expect(eliminate(h, 0)).toMatchObject({
      text: 'CH2=CH–CH2–CH3',
      name: 'but-1-ene',
      kind: 'minor',
    });
  });

  it('writes branched and symmetric alkenes', () => {
    const b = halide('2-chloro-2-methylbutane');
    expect(eliminate(b, 2).text).toBe('CH3–C(CH3)=CH–CH3');
    expect(eliminate(b, 0).text).toBe('CH2=C(CH3)–CH2–CH3');
    const p = halide('2-bromopropane');
    expect([eliminate(p, 0).text, eliminate(p, 2).text, eliminate(p, 2).kind]).toEqual([
      'CH2=CH–CH3',
      'CH2=CH–CH3',
      'only',
    ]);
    expect(eliminate(halide('bromoethane'), 0).text).toBe('CH2=CH2');
  });

  it('balances every equation', () => {
    const wrong = [];
    for (const h of HALIDES) {
      const eqs = [substitute(h).equation, ...betaCarbons(h).map((i) => eliminate(h, i).equation)];
      for (const e of eqs) if (!isBalancedText(e)) wrong.push(e);
    }
    expect(wrong).toEqual([]);
  });

  it('refuses a carbon that is not next to the halogen', () => {
    expect(() => eliminate(halide('2-bromobutane'), 3)).toThrow();
  });
});
