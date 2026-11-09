import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { ALKENES, REAGENTS, addAcross, alkeneText, markovnikovCarbon } from './engine.js';

/** @param {string} id */
const alkene = (id) =>
  /** @type {import('./engine.js').Alkene} */ (ALKENES.find((a) => a.id === id));
/** @param {string} id */
const reagent = (id) =>
  /** @type {import('./engine.js').Reagent} */ (REAGENTS.find((r) => r.id === id));

describe('addition to an alkene', () => {
  it('writes the alkenes the book way', () => {
    expect(ALKENES.map(alkeneText)).toEqual([
      'CH2=CH–CH3',
      'CH2=CH–CH2–CH3',
      'CH2=C(CH3)–CH3',
      'CH3–CH=CH–CH3',
    ]);
  });

  it('gives every carbon four bonds', () => {
    const wrong = ALKENES.filter((a) =>
      a.chain.some((c, i) => {
        const chainBonds = (i > 0 ? 1 : 0) + (i < a.chain.length - 1 ? 1 : 0);
        const extra = i === a.double || i === a.double + 1 ? 1 : 0;
        return c.h + chainBonds + extra + (c.branch ? 1 : 0) !== 4;
      }),
    );
    expect(wrong).toEqual([]);
  });

  it('follows Markovnikov for HBr on propene', () => {
    const main = addAcross(alkene('propene'), reagent('HBr'), 0);
    const minor = addAcross(alkene('propene'), reagent('HBr'), 1);
    expect(main).toMatchObject({ text: 'CH3–CHBr–CH3', name: '2-bromopropane', kind: 'main' });
    expect(minor).toMatchObject({ text: 'CH3–CH2–CH2Br', name: '1-bromopropane', kind: 'minor' });
  });

  it('writes water addition products', () => {
    expect(addAcross(alkene('propene'), reagent('H2O'), 0).text).toBe('CH3–CH(OH)–CH3');
    expect(addAcross(alkene('2-methylprop-1-ene'), reagent('H2O'), 0).text).toBe(
      'CH3–C(OH)(CH3)–CH3',
    );
    expect(addAcross(alkene('2-methylprop-1-ene'), reagent('HCl'), 1).text).toBe(
      'CH3–CH(CH3)–CH2Cl',
    );
    expect(addAcross(alkene('but-1-ene'), reagent('HBr'), 0).text).toBe('CH3–CH2–CHBr–CH3');
  });

  it('gives one product for the symmetric but-2-ene', () => {
    expect(markovnikovCarbon(alkene('but-2-ene'))).toBe(-1);
    const a = addAcross(alkene('but-2-ene'), reagent('HBr'), 1);
    const b = addAcross(alkene('but-2-ene'), reagent('HBr'), 2);
    expect([a.kind, b.kind, a.name === b.name]).toEqual(['only', 'only', true]);
  });

  it('balances every equation and puts H on the carbon with more H for the main product', () => {
    const wrong = [];
    for (const a of ALKENES) {
      for (const r of REAGENTS) {
        for (const at of [a.double, a.double + 1]) {
          const p = addAcross(a, r, at);
          if (!isBalancedText(p.equation)) wrong.push(p.equation);
          const other = at === a.double ? a.double + 1 : a.double;
          const more = a.chain[at].h > a.chain[other].h;
          if (p.kind === 'main' && !more) wrong.push(`main ${p.equation}`);
        }
      }
    }
    expect(wrong).toEqual([]);
  });

  it('refuses a carbon outside the double bond', () => {
    expect(() => addAcross(alkene('propene'), reagent('HBr'), 2)).toThrow();
  });
});
