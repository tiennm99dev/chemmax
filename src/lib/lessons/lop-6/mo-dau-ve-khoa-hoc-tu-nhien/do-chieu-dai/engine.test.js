import { describe, expect, it } from 'vitest';
import {
  RULERS,
  THINGS,
  apparentEnd,
  bestRuler,
  expectedReading,
  fmt,
  judge,
  marks,
  toNearestMark,
} from './engine.js';

const [ke, thang, day] = RULERS;
const thing = (/** @type {string} */ id) => {
  const t = THINGS.find((x) => x.id === id);
  if (!t) throw new Error(id);
  return t;
};

describe('reading a ruler', () => {
  it('rounds to the nearest mark without float noise', () => {
    expect(toNearestMark(14.32, 0.1)).toBe(14.3);
    expect(toNearestMark(4.47, 0.1)).toBe(4.5);
    expect(toNearestMark(26.4, 0.5)).toBe(26.5);
    expect(toNearestMark(119.8, 1)).toBe(120);
    expect(toNearestMark(0.3, 0.1)).toBe(0.3);
  });

  it('picks the ruler that covers the object with the smallest ĐCNN', () => {
    expect(bestRuler(14.32)).toBe(ke);
    expect(bestRuler(26.4)).toBe(thang);
    expect(bestRuler(119.8)).toBe(day);
    expect(bestRuler(200)).toBeNull();
  });

  it('gives the recorded result for each object with its best ruler', () => {
    const results = THINGS.map((t) => {
      const r = bestRuler(t.length);
      return r ? expectedReading(t.length, r) : NaN;
    });
    expect(results).toEqual([14.3, 4.5, 26.5, 120]);
  });

  it('shifts the far end when the eye looks slanted', () => {
    expect(apparentEnd(14.32, 0, 'vuong', ke)).toBeCloseTo(14.32, 9);
    expect(apparentEnd(14.32, 0, 'phai', ke)).toBeCloseTo(14.47, 9);
    expect(apparentEnd(14.32, 2, 'trai', ke)).toBeCloseTo(12.17, 9);
  });
});

describe('judging a measurement', () => {
  const pencil = thing('but-chi');

  it('accepts a correct measurement', () => {
    const r = judge({ thing: pencil, ruler: ke, offset: 0, eye: 'vuong', value: 14.3 });
    expect(r.ok).toBe(true);
    expect(r.messages[0]).toContain('14,3 cm');
  });

  it('names every broken step', () => {
    const r = judge({ thing: pencil, ruler: ke, offset: 1, eye: 'trai', value: 13.32 });
    expect(r.ok).toBe(false);
    expect(r.messages.join(' ')).toMatch(/Vạch số 0/);
    expect(r.messages.join(' ')).toMatch(/vuông góc/);
    expect(r.messages.join(' ')).toMatch(/ĐCNN/);
  });

  it('rejects a ruler that is too short and warns about a coarse one', () => {
    const table = thing('mat-ban');
    expect(
      judge({ thing: table, ruler: ke, offset: 0, eye: 'vuong', value: 120 }).messages[0],
    ).toMatch(/GHĐ/);
    const coarse = judge({ thing: pencil, ruler: day, offset: 0, eye: 'vuong', value: 14 });
    expect(coarse.ok).toBe(false);
    expect(coarse.messages[0]).toMatch(/thước kẻ/);
  });

  it('rejects a wrong reading on the right setup', () => {
    const r = judge({ thing: pencil, ruler: ke, offset: 0, eye: 'vuong', value: 14.4 });
    expect(r.ok).toBe(false);
    expect(r.messages).toHaveLength(1);
    expect(judge({ thing: pencil, ruler: ke, offset: 0, eye: 'vuong', value: NaN }).ok).toBe(false);
  });
});

describe('ruler marks', () => {
  it('labels whole centimetres on a millimetre ruler', () => {
    const m = marks(ke, 0, 1);
    expect(m).toHaveLength(11);
    expect(m[0]).toEqual({ value: 0, kind: 'label' });
    expect(m[5]).toEqual({ value: 0.5, kind: 'half' });
    expect(m[3].kind).toBe('tick');
    expect(m[10].value).toBe(1);
  });

  it('stays inside the ruler', () => {
    expect(marks(ke, -3, 0.2).map((x) => x.value)).toEqual([0, 0.1, 0.2]);
    expect(marks(ke, 19.8, 25).at(-1)?.value).toBe(20);
  });

  it('writes decimals with a comma', () => {
    expect(fmt(14.3)).toBe('14,3');
    expect(fmt(120)).toBe('120');
  });
});
