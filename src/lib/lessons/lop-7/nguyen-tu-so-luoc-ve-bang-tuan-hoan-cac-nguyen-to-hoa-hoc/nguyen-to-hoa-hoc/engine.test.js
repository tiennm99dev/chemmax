import { describe, expect, it } from 'vitest';
import {
  ATOM_CARDS,
  ELEMENT_BINS,
  FIRST_20,
  MODES,
  PAIRS,
  faceText,
  judgePair,
  makeDeck,
} from './engine.js';

describe('the first 20 elements', () => {
  it('runs from hydrogen to calcium with the IUPAC names the book uses', () => {
    expect(FIRST_20).toHaveLength(20);
    expect(FIRST_20[0]).toMatchObject({ z: 1, symbol: 'H', name: 'hydrogen' });
    expect(FIRST_20[10]).toMatchObject({ z: 11, symbol: 'Na', name: 'sodium' });
    expect(FIRST_20[12]).toMatchObject({ z: 13, symbol: 'Al', name: 'aluminium' });
    expect(FIRST_20[15]).toMatchObject({ z: 16, symbol: 'S', name: 'sulfur' });
    expect(FIRST_20[18]).toMatchObject({ z: 19, symbol: 'K', name: 'potassium' });
    expect(FIRST_20[19]).toMatchObject({ z: 20, symbol: 'Ca', name: 'calcium' });
  });
});

describe('makeDeck', () => {
  it('lays out two cards for each of the round elements', () => {
    for (const mode of MODES) {
      const deck = makeDeck(mode.value, 0);
      expect(deck).toHaveLength(2 * PAIRS);
      expect(new Set(deck.map((c) => c.id)).size).toBe(2 * PAIRS);
      const counts = new Map();
      for (const c of deck) counts.set(c.z, (counts.get(c.z) ?? 0) + 1);
      expect([...counts.values()].every((n) => n === 2)).toBe(true);
      for (const c of deck) expect(mode.faces).toContain(c.face);
    }
  });

  it('is the same for the same round and changes between rounds', () => {
    const ids = (/** @type {number} */ r) => makeDeck('name-symbol', r).map((c) => c.id);
    expect(ids(2)).toEqual(ids(2));
    expect(ids(0)).not.toEqual(ids(1));
  });

  it('does not put both cards of every pair next to each other', () => {
    const deck = makeDeck('symbol-protons', 0);
    const adjacent = deck.filter((c, i) => i > 0 && deck[i - 1].z === c.z).length;
    expect(adjacent).toBeLessThan(PAIRS);
  });
});

describe('judgePair', () => {
  it('matches the cards of one element and explains a miss', () => {
    const na = { id: '11-name', z: 11, face: /** @type {const} */ ('name'), text: 'sodium' };
    const naSym = { id: '11-symbol', z: 11, face: /** @type {const} */ ('symbol'), text: 'Na' };
    const s = { id: '16-symbol', z: 16, face: /** @type {const} */ ('symbol'), text: 'S' };
    expect(judgePair(na, naSym).match).toBe(true);
    const miss = judgePair(na, s);
    expect(miss.match).toBe(false);
    expect(miss.text).toMatch(/kí hiệu Na/);
    expect(miss.text).toMatch(/sulfur/);
  });

  it('writes proton cards with the count', () => {
    expect(faceText(8, 'protons')).toBe('8 proton');
  });
});

describe('atom cards', () => {
  it('fall into the bin of their proton count', () => {
    const z = { H: 1, C: 6, O: 8 };
    for (const c of ATOM_CARDS) {
      const m = c.label.match(/(\d+) (proton|electron)/);
      expect(m, c.id).not.toBeNull();
      expect(Number(m?.[1]), c.id).toBe(z[/** @type {'H' | 'C' | 'O'} */ (c.bin)]);
    }
    for (const b of ELEMENT_BINS) expect(ATOM_CARDS.some((c) => c.bin === b.id)).toBe(true);
  });
});
