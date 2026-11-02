import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { HALIDES, REDUCTIONS, SULFUR_STEPS, judgeTube, makeTubes } from './engine.js';

const halide = (/** @type {string} */ id) => {
  const h = HALIDES.find((x) => x.id === id);
  if (!h) throw new Error(id);
  return h;
};

describe('telling halide ions apart with silver nitrate', () => {
  it('gives each ion the colour the book gives it', () => {
    expect(HALIDES.map((h) => [h.id, h.precipitate, h.seen])).toEqual([
      ['F', null, 'không có kết tủa'],
      ['Cl', 'AgCl', 'kết tủa trắng'],
      ['Br', 'AgBr', 'kết tủa vàng nhạt'],
      ['I', 'AgI', 'kết tủa vàng'],
    ]);
  });

  it('writes balanced precipitate equations, and none for fluoride', () => {
    const unbalanced = HALIDES.filter((h) => h.equation && !isBalancedText(h.equation));
    expect(unbalanced).toEqual([]);
    expect(halide('F').equation).toBeNull();
  });

  it('puts all four ions under the letters A to D, varying with the seed', () => {
    const tubes = makeTubes(3);
    expect(tubes.map((t) => t.letter)).toEqual(['A', 'B', 'C', 'D']);
    expect(tubes.map((t) => t.halide.id).sort()).toEqual(['Br', 'Cl', 'F', 'I']);
    const orders = new Set(
      [1, 2, 3, 4, 5, 6].map((seed) =>
        makeTubes(seed)
          .map((t) => t.halide.id)
          .join(),
      ),
    );
    expect(orders.size).toBeGreaterThan(1);
  });

  it('accepts the right ion and describes the tube after a wrong one', () => {
    expect(judgeTube(halide('Br'), 'Br').right).toBe(true);
    expect(judgeTube(halide('F'), 'F').text).toContain('AgF tan');
    const wrong = judgeTube(halide('I'), 'Br');
    expect(wrong.right).toBe(false);
    expect(wrong.text).toContain('kết tủa vàng');
  });
});

describe('halides with concentrated sulfuric acid', () => {
  it('writes balanced equations', () => {
    expect(REDUCTIONS.filter((r) => !isBalancedText(r.equation))).toEqual([]);
  });

  it('reduces sulfur further as the halide gets stronger', () => {
    expect(REDUCTIONS.map((r) => r.sulfur)).toEqual([6, 4, -2]);
    const steps = SULFUR_STEPS.map((s) => s.sulfur);
    expect(REDUCTIONS.every((r) => steps.includes(r.sulfur))).toBe(true);
  });

  it('names the sulfur product of each reaction in its equation', () => {
    for (const r of REDUCTIONS) {
      const step = SULFUR_STEPS.find((s) => s.sulfur === r.sulfur);
      expect(r.equation).toContain(step?.formula === 'H2SO4' ? 'NaHSO4' : step?.formula);
    }
  });
});
