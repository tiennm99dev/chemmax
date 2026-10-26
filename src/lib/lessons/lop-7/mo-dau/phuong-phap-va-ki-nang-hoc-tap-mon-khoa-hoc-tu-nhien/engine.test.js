import { describe, expect, it } from 'vitest';
import { SCENARIOS, STEPS, checkOrder, moveItem, startOrder } from './engine.js';

describe('inquiry steps', () => {
  it('has the five steps of the method', () => {
    expect(STEPS).toHaveLength(5);
    expect(STEPS[0].name).toMatch(/^Đề xuất vấn đề/);
    expect(STEPS[4].name).toMatch(/báo cáo/);
  });

  it('gives every scenario five cards and exactly one right next move', () => {
    expect(new Set(SCENARIOS.map((s) => s.id)).size).toBe(SCENARIOS.length);
    for (const s of SCENARIOS) {
      expect(s.cards, s.id).toHaveLength(5);
      expect(
        s.moves.filter((m) => m.ok),
        s.id,
      ).toHaveLength(1);
      expect(s.moves.find((m) => m.ok)?.text, s.id).toMatch(/bước 2/);
    }
  });
});

describe('startOrder', () => {
  it('is a permutation that is never already solved', () => {
    for (let seed = -3; seed < 6; seed++) {
      const order = startOrder(seed);
      expect([...order].sort()).toEqual([0, 1, 2, 3, 4]);
      expect(checkOrder(order).solved).toBe(false);
    }
  });

  it('returns a fresh copy', () => {
    const a = startOrder(0);
    a[0] = 99;
    expect(startOrder(0)[0]).not.toBe(99);
  });
});

describe('moveItem', () => {
  it('moves one card and shifts the rest', () => {
    expect(moveItem([3, 0, 4, 2, 1], 1, 0)).toEqual([0, 3, 4, 2, 1]);
    expect(moveItem([0, 1, 2, 3, 4], 0, 4)).toEqual([1, 2, 3, 4, 0]);
  });

  it('clamps the target and ignores a bad source', () => {
    expect(moveItem([0, 1, 2], 2, -5)).toEqual([2, 0, 1]);
    expect(moveItem([0, 1, 2], 7, 0)).toEqual([0, 1, 2]);
  });
});

describe('checkOrder', () => {
  it('accepts the book order', () => {
    const r = checkOrder([0, 1, 2, 3, 4]);
    expect(r.solved).toBe(true);
    expect(r.correct).toBe(5);
    expect(r.slots[1].hint).toBe(`Bước 2: ${STEPS[1].name}.`);
  });

  it('counts right positions and nudges the wrong ones without naming the card', () => {
    const r = checkOrder([0, 2, 1, 3, 4]);
    expect(r.solved).toBe(false);
    expect(r.correct).toBe(3);
    expect(r.text).toMatch(/^3\/5 thẻ đúng vị trí/);
    expect(r.slots[1].ok).toBe(false);
    expect(r.slots[1].hint).toBe(`Vị trí 2 cần: ${STEPS[1].role}.`);
  });
});
