import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { formulaParts } from '#lib/domain/formula.js';
import { COMPOUNDS, oxideFormula } from '#lib/domain/compounds.js';
import { PERIOD3, judgeNature, periodSentence } from './engine.js';

describe('highest compounds', () => {
  it('writes each highest oxide from the group number', () => {
    const wrong = COMPOUNDS.filter((c) => {
      const symbol = c.oxide.replace(/2?O\d*$/, '');
      return oxideFormula(symbol, c.valence) !== c.oxide;
    }).map((c) => c.oxide);
    expect(wrong).toEqual([]);
  });

  it('parses every formula', () => {
    const bad = COMPOUNDS.flatMap((c) => [c.oxide, c.hydroxide]).filter((f) => {
      try {
        formulaParts(f);
        return false;
      } catch {
        return true;
      }
    });
    expect(bad).toEqual([]);
  });
});

describe('period 3', () => {
  it('runs from Na to Cl with valence I to VII and the base → acid scale rising', () => {
    expect(PERIOD3.map((e) => e.symbol)).toEqual(['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl']);
    expect(PERIOD3.map((e) => e.valence)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    const scales = PERIOD3.map((e) => e.scale);
    expect(scales).toEqual([...scales].sort((a, b) => a - b));
  });

  it('balances every equation', () => {
    const unbalanced = PERIOD3.flatMap((e) => e.equations).filter((t) => !isBalancedText(t));
    expect(unbalanced).toEqual([]);
  });

  it('judges a guess of the oxide character', () => {
    const al = /** @type {import('./engine.js').Period3Entry} */ (PERIOD3[2]);
    expect(judgeNature(al, 'luong-tinh').ok).toBe(true);
    expect(judgeNature(al, 'base').text).toContain('ranh giới');
    expect(periodSentence(al)).toContain('III');
  });
});
