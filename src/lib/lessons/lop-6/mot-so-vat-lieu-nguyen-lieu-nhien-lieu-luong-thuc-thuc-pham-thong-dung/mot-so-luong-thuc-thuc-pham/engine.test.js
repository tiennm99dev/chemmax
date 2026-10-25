import { describe, expect, it } from 'vitest';
import { CAPACITY, FOODS, GROUPS, canAdd, counts, judgePlate } from './engine.js';

describe('balanced plate', () => {
  it('files every food under a known group', () => {
    const ids = GROUPS.map((g) => g.id);
    for (const f of FOODS) expect(ids).toContain(f.group);
    for (const g of GROUPS) expect(FOODS.some((f) => f.group === g.id)).toBe(true);
  });

  it('lets a balanced plate fit on the plate', () => {
    const least = GROUPS.reduce((n, g) => n + g.min, 0);
    expect(least).toBeLessThanOrEqual(CAPACITY);
  });

  it('counts portions by group', () => {
    expect(counts(['com', 'com', 'ca', 'rau-cai'])).toEqual({
      carb: 2,
      protein: 1,
      lipid: 0,
      vitamin: 1,
    });
  });

  it('accepts a balanced plate', () => {
    const plate = ['com', 'com', 'ca', 'dau-an', 'rau-cai', 'ca-rot', 'cam'];
    expect(judgePlate(plate).ok).toBe(true);
    expect(judgePlate([...plate, 'khoai-lang']).ok).toBe(true);
  });

  it('names missing and excess groups', () => {
    const r = judgePlate(['com', 'thit', 'thit', 'thit', 'lac', 'dau-an']);
    expect(r.ok).toBe(false);
    expect(r.messages.some((m) => m.startsWith('Thiếu nhóm vitamin'))).toBe(true);
    expect(r.messages.some((m) => m.startsWith('Quá nhiều chất đạm'))).toBe(true);
    expect(r.messages.some((m) => m.startsWith('Quá nhiều chất béo'))).toBe(true);
    expect(r.messages.some((m) => m.startsWith('Hơi ít chất bột đường'))).toBe(true);
  });

  it('stops at the plate capacity', () => {
    expect(canAdd(Array(CAPACITY - 1).fill('com'))).toBe(true);
    expect(canAdd(Array(CAPACITY).fill('com'))).toBe(false);
  });
});
