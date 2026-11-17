import { describe, expect, it } from 'vitest';
import { AREAS, CARDS, HINT_IDS, METALS, card, cardsOf, judgeMetal } from './engine.js';

describe('application map', () => {
  it('fills every area and offers every central metal in the game', () => {
    expect(AREAS.every((a) => cardsOf(a.value).length >= 2)).toBe(true);
    expect(CARDS.filter((c) => !METALS.includes(c.metal)).map((c) => c.id)).toEqual([]);
    expect(CARDS.filter((c) => !HINT_IDS.includes(c.id)).map((c) => c.id)).toEqual([]);
    expect(new Set(CARDS.map((c) => c.id)).size).toBe(CARDS.length);
  });

  it('keeps the metal out of every game clue', () => {
    /** @type {Record<string, string[]>} */
    const words = {
      Fe: ['Fe', 'sắt', 'iron'],
      Mg: ['Mg', 'magnesium'],
      Co: ['Co^', 'Co ', 'cobalt'],
      Pt: ['Pt', 'platin'],
      Ca: ['Ca', 'calcium'],
      Cu: ['Cu', 'đồng', 'copper'],
      Au: ['Au', 'vàng', 'gold'],
      Ag: ['Ag', 'bạc', 'silver'],
    };
    const leaks = CARDS.filter((c) => words[c.metal].some((w) => c.clue.includes(w))).map(
      (c) => c.id,
    );
    expect(leaks).toEqual([]);
  });

  it('matches the coordination numbers of the lesson', () => {
    expect(card('hemoglobin').cn).toBe(6);
    expect(card('cisplatin').cn).toBe(4);
    expect(card('tach-vang').cn).toBe(2);
    expect(card('trang-guong').cn).toBe(2);
  });

  it('judges the guessed metal', () => {
    expect(judgeMetal(card('chlorophyll'), 'Mg').ok).toBe(true);
    const wrong = judgeMetal(card('chlorophyll'), 'Fe');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('nhóm IIA');
  });
});
