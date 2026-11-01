import { describe, expect, it } from 'vitest';
import { ITEMS, deltaLine, itemType, nextStep, rightAnswer } from './engine.js';

/** @param {import('./engine.js').TreeItem} item */
function walk(item) {
  /** @type {number | string} */
  let step = 0;
  while (typeof step === 'number') step = nextStep(step, rightAnswer(item, step));
  return step;
}

describe('decision path', () => {
  it('ends every item on its own kind of bond', () => {
    const wrong = ITEMS.filter((i) => walk(i) !== itemType(i)).map((i) => i.compound);
    expect(wrong).toEqual([]);
  });

  it('classifies the items as the thresholds say', () => {
    const kinds = Object.fromEntries(ITEMS.map((i) => [i.compound, itemType(i)]));
    expect(kinds).toEqual({
      NaCl: 'ion',
      HCl: 'polar',
      Cl2: 'nonpolar',
      H2O: 'polar',
      MgO: 'ion',
      CH4: 'nonpolar',
      KF: 'ion',
      CO2: 'polar',
      N2: 'nonpolar',
      H2S: 'nonpolar',
      AlCl3: 'polar',
    });
  });

  it('writes the arithmetic with a decimal comma', () => {
    expect(deltaLine(ITEMS[1])).toBe('|Δχ| = 3,16 − 2,2 = 0,96');
    expect(deltaLine(ITEMS[2])).toBe('|Δχ| = 3,16 − 3,16 = 0');
  });
});
