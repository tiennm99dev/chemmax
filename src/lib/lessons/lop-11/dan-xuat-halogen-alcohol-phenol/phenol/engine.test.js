import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { ACID_CHOICES, ACIDS, BASES, REACTING_PAIRS, react, spread } from './engine.js';

describe('acid strength on the pKa scale', () => {
  it('orders the acids from strong to weak', () => {
    const sorted = [...ACIDS].sort((a, b) => a.pKa - b.pKa).map((a) => a.id);
    expect(sorted).toEqual(ACIDS.map((a) => a.id));
  });

  it('has an equation for exactly the pairs that react', () => {
    const yes = [];
    for (const a of ACID_CHOICES) {
      for (const b of BASES) if (react(a, b.id).result === 'yes') yes.push(`${a}|${b.id}`);
    }
    expect(yes.sort()).toEqual([...REACTING_PAIRS].sort());
  });

  it('balances every equation', () => {
    const wrong = REACTING_PAIRS.map((k) => {
      const [a, b] = k.split('|');
      return /** @type {string} */ (react(a, b).equation);
    }).filter((e) => !isBalancedText(e));
    expect(wrong).toEqual([]);
  });

  it('matches the book facts about phenol and ethanol', () => {
    expect(react('phenol', 'NaOH').result).toBe('yes');
    expect(react('ethanol', 'NaOH').result).toBe('no');
    expect(react('carbonic', 'C6H5ONa').result).toBe('yes');
    expect(react('phenol', 'NaHCO3').result).toBe('no');
    expect(react('phenol', 'Na2CO3').result).toBe('yes');
    expect(react('phenol', 'C6H5ONa').result).toBe('same');
  });
});

describe('label spreading', () => {
  it('keeps labels apart and inside the range', () => {
    expect(spread([10, 12, 50], 20, 0, 100)).toEqual([10, 30, 50]);
    expect(spread([90, 95, 99], 10, 0, 100)).toEqual([80, 90, 100]);
  });
});
