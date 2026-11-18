// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { describe, expect, it } from 'vitest';
import {
  add,
  div,
  fracRich,
  fracTex,
  fracText,
  fracWords,
  mul,
  reduce,
  sameValue,
  sub,
} from './fractions.js';

describe('kid fractions', () => {
  it('writes a fraction as TeX, rich text and plain text', () => {
    expect(fracTex(3, 4)).toBe('\\dfrac{3}{4}');
    expect(fracTex(5, 1)).toBe('5');
    expect(fracTex(5, 1, { keepOne: true })).toBe('\\dfrac{5}{1}');
    expect(fracRich(3, 4)).toBe('$\\dfrac{3}{4}$');
    expect(fracText(3, 4)).toBe('3/4');
    expect(fracText(2000, 1)).toBe('2 000');
  });

  it('reads a fraction the book way', () => {
    expect(fracWords(3, 4)).toBe('ba phần tư');
    expect(fracWords(5, 6)).toBe('năm phần sáu');
    expect(fracWords(8, 1)).toBe('tám');
    expect(fracWords(8, 1, { keepOne: true })).toBe('tám phần một');
  });

  it('reduces, compares and computes in lowest terms', () => {
    expect(reduce(6, 8)).toEqual({ n: 3, d: 4 });
    expect(sameValue({ n: 1, d: 2 }, { n: 3, d: 6 })).toBe(true);
    expect(add({ n: 1, d: 4 }, { n: 1, d: 4 })).toEqual({ n: 1, d: 2 });
    expect(sub({ n: 3, d: 4 }, { n: 1, d: 4 })).toEqual({ n: 1, d: 2 });
    expect(mul({ n: 2, d: 3 }, { n: 3, d: 4 })).toEqual({ n: 1, d: 2 });
    expect(div({ n: 1, d: 2 }, { n: 1, d: 4 })).toEqual({ n: 2, d: 1 });
  });
});
