// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import {
  GRADE2_NOTES,
  GRADE3_NOTES,
  fewestNotes,
  isNote,
  moneyText,
  notesText,
  spareNote,
  sumNotes,
} from './money.js';

/** @param {string} t */
const plain = (t) => t.replace(/\u202f/g, ' ');

describe('banknotes', () => {
  it('pays with the fewest of a grade’s notes', () => {
    expect(fewestNotes(900, GRADE2_NOTES)).toEqual([500, 200, 200]);
    expect(fewestNotes(150, GRADE2_NOTES)).toBeNull();
    expect(fewestNotes(38000, GRADE3_NOTES)).toEqual([20000, 10000, 5000, 2000, 1000]);
    expect(fewestNotes(1500, GRADE3_NOTES)).toBeNull();
    expect(sumNotes([500, 200, 100])).toBe(800);
  });

  it('writes amounts and notes each grade’s way', () => {
    expect(moneyText(1000, { grouped: false })).toBe('1000 đồng');
    expect(plain(moneyText(25000))).toBe('25 000 đồng');
    expect(notesText([100, 500, 100], { grouped: false })).toBe('1 tờ 500 đồng và 2 tờ 100 đồng');
    expect(plain(notesText([5000, 20000, 5000]))).toBe('1 tờ 20 000 đồng và 2 tờ 5 000 đồng');
  });

  it('knows the notes and the one a buyer did not need', () => {
    expect(isNote(5000)).toBe(true);
    expect(isNote(500, GRADE3_NOTES)).toBe(false);
    expect(spareNote([10000, 5000, 2000], 14000)).toBe(2000);
    expect(spareNote([10000, 5000], 15000)).toBeNull();
  });
});
