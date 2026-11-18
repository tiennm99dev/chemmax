// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { describe, expect, it } from 'vitest';
import {
  decText,
  num,
  partsOf,
  placesText,
  readScaled,
  toScaled,
  trimZeros,
  valueOptions,
} from './decimals.js';

describe('grade 5 decimals', () => {
  it('splits, scales and writes decimals exactly', () => {
    expect(partsOf('2,47')).toEqual({ whole: '2', frac: '47' });
    expect(partsOf('5')).toEqual({ whole: '5', frac: '' });
    expect(toScaled('2,47')).toEqual({ scaled: 247, places: 2 });
    expect(decText(50, 2)).toBe('0,50');
    expect(trimZeros('2,500')).toBe('2,5');
    expect(trimZeros('3,00')).toBe('3');
    expect(trimZeros('10,0')).toBe('10');
  });

  it('writes computed and scaled values the book way', () => {
    expect(num(0.1 + 0.2)).toBe('0,3');
    expect(num(12000)).toBe('12 000');
    expect(placesText(350, 2)).toBe('3,50');
    expect(placesText(5, 3)).toBe('0,005');
    expect(placesText(123450, 1)).toBe('12 345,0');
  });

  it('reads a scaled decimal with each leading zero read on its own', () => {
    expect(readScaled(247, 2)).toBe('hai phẩy bốn mươi bảy');
    expect(readScaled(5, 2)).toBe('không phẩy không năm');
    expect(readScaled(12053, 3)).toBe('mười hai phẩy không năm mươi ba');
    expect(readScaled(7, 0)).toBe('bảy');
  });

  it('builds sorted options without repeats, the unit after each', () => {
    const q = valueOptions(2.8, [5.6, 0.28, 2.8, -1], { unit: 'dm²' });
    expect(q.options).toEqual(['0,28 dm²', '2,8 dm²', '5,6 dm²']);
    expect(q.options[q.answer]).toBe('2,8 dm²');
    expect(valueOptions(25, [50], { unit: '%' }).options).toEqual(['25%', '50%']);
  });
});
