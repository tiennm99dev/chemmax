// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { fractionParts } from './fraction-text.js';

/** @param {string} text */
const fracs = (text) => fractionParts(text).filter((p) => p.kind === 'frac');

describe('fractionParts', () => {
  it('finds fractions and gives the text back whole', () => {
    const text = 'Quy đồng mẫu số hai phân số 3/8 và 5/16.';
    const parts = fractionParts(text);
    expect(parts.map((p) => p.text).join('')).toBe(text);
    expect(fracs(text)).toEqual([
      { kind: 'frac', n: 3, d: 8, text: '3/8' },
      { kind: 'frac', n: 5, d: 16, text: '5/16' },
    ]);
  });

  it('reads a whole number before a proper fraction as a mixed number', () => {
    expect(fracs('Viết 2 3/4 thành phân số.')).toEqual([
      { kind: 'frac', n: 3, d: 4, whole: 2, text: '2 3/4' },
    ]);
    expect(fracs('1/2 giờ')).toEqual([{ kind: 'frac', n: 1, d: 2, text: '1/2' }]);
  });

  it('keeps a whole number before an improper fraction apart', () => {
    const text = 'Có 3 7/4';
    expect(fracs(text)).toEqual([{ kind: 'frac', n: 7, d: 4, text: '7/4' }]);
    expect(
      fractionParts(text)
        .map((p) => p.text)
        .join(''),
    ).toBe(text);
  });

  it('leaves units, brackets, decimals and dates as text', () => {
    for (const text of [
      '36 km/giờ = ? m/giây',
      '(3 × 2)/(8 × 2)',
      '0,5/2',
      'ngày 2/9/1945',
      'Không có phân số',
    ]) {
      expect(fracs(text)).toEqual([]);
    }
  });
});
