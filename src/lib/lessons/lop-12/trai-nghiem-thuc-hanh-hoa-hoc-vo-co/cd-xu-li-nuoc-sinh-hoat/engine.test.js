import { describe, expect, it } from 'vitest';
import { BOOK_ORDER, START_ORDER, cloudiness, ironRemoval, moveLayer, pour } from './engine.js';

describe('layered water filter', () => {
  it('makes safe water with alum, the book order and chlorine', () => {
    const r = pour({ order: BOOK_ORDER, alum: true, chlorine: true });
    expect(r.turbidity).toBeCloseTo(0.4032, 4);
    expect(r.color).toBeCloseTo(2.43, 4);
    expect(r.safe).toBe(true);
  });

  it('needs each part of the treatment', () => {
    const noAlum = pour({ order: BOOK_ORDER, alum: false, chlorine: true });
    expect(noAlum.turbidity).toBeCloseTo(4.032, 4);
    expect(noAlum.clear).toBe(false);

    const noCarbon = pour({
      order: BOOK_ORDER.filter((id) => id !== 'than'),
      alum: true,
      chlorine: true,
    });
    expect(noCarbon.color).toBeCloseTo(24.3, 4);
    expect(noCarbon.safe).toBe(false);

    const bareCarbon = pour({
      order: ['than', 'cat-1', 'cat-2', 'soi', 'bong'],
      alum: true,
      chlorine: true,
    });
    expect(bareCarbon.color).toBeGreaterThan(15);

    const noChlorine = pour({ order: BOOK_ORDER, alum: true, chlorine: false });
    expect(noChlorine.clear).toBe(true);
    expect(noChlorine.safe).toBe(false);
  });

  it('punishes a wrong bottom and sand under gravel', () => {
    const start = pour({ order: START_ORDER, alum: true, chlorine: true });
    expect(start.safe).toBe(false);
    expect(start.notes.join(' ')).toContain('bông');
    expect(pour({ order: [], alum: false, chlorine: false }).turbidity).toBe(100);
  });

  it('moves layers within the bottle', () => {
    expect(moveLayer(['a', 'b', 'c'], 'b', -1)).toEqual(['b', 'a', 'c']);
    expect(moveLayer(['a', 'b', 'c'], 'c', 1)).toEqual(['a', 'b', 'c']);
    expect(cloudiness(0)).toBe(0);
    expect(cloudiness(100)).toBeLessThanOrEqual(0.85);
  });
});

describe('iron removal by aeration', () => {
  it('matches the worked example and the exercise', () => {
    const ex = ironRemoval(3, 1000);
    expect(ex.oxygen).toBeCloseTo(0.4286, 4);
    expect(ex.precipitate).toBeCloseTo(5.732, 3);
    expect(ironRemoval(2.8, 2000).precipitate).toBeCloseTo(10.7, 6);
  });
});
