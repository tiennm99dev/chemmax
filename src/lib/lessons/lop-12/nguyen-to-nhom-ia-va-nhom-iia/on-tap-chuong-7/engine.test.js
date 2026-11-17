import { describe, expect, it } from 'vitest';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import { CHAINS, answerOf, chain, choicesOf, fromOf } from './engine.js';

describe('conversion chains', () => {
  it('writes every step as a balanced equation from the previous substance', () => {
    /** @type {unknown[]} */
    const bad = [];
    for (const c of CHAINS)
      c.links.forEach((l, i) => {
        if (!isBalancedText(l.equation)) bad.push([c.id, i, 'balance']);
        const { left, right } = terms(l.equation);
        if (!left.some((t) => t.formula === fromOf(c, i))) bad.push([c.id, i, 'from']);
        if (!right.some((t) => t.formula === l.to)) bad.push([c.id, i, 'to']);
      });
    expect(bad).toEqual([]);
  });

  it('offers the answer among distinct choices, not always first', () => {
    /** @type {unknown[]} */
    const bad = [];
    let firstCount = 0;
    let total = 0;
    for (const c of CHAINS)
      c.links.forEach((l, i) => {
        const ch = choicesOf(l, i);
        if (!ch.includes(answerOf(l)) || new Set(ch).size !== ch.length) bad.push([c.id, i]);
        if (ch[0] === answerOf(l)) firstCount += 1;
        total += 1;
      });
    expect(bad).toEqual([]);
    expect(firstCount).toBeLessThan(total / 2);
  });

  it('runs sodium back to sodium and calcium back to calcium', () => {
    expect(chain('na').links.at(-1)?.to).toBe('Na');
    expect(chain('ca').links.at(-1)?.to).toBe('Ca');
    expect(() => chain('x')).toThrow();
  });
});
