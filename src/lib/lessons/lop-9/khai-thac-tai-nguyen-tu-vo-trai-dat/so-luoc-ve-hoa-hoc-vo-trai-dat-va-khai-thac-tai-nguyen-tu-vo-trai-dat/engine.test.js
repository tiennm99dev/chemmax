import { describe, expect, it } from 'vitest';
import {
  ELEMENTS,
  ISLANDS,
  MAP,
  MINERALS,
  OUTLINE,
  project,
  slices,
  sumPercent,
} from './engine.js';

describe('crust elements', () => {
  it('add up to 100 % and are listed most abundant first', () => {
    expect(sumPercent(ELEMENTS.map((e) => e.symbol))).toBe(100);
    const named = ELEMENTS.slice(0, -1);
    for (let i = 1; i < named.length; i++)
      expect(named[i].percent).toBeLessThanOrEqual(named[i - 1].percent);
  });

  it('sum a chosen group', () => {
    expect(sumPercent(['O', 'Si'])).toBe(74.3);
    expect(sumPercent(['Al', 'Fe'])).toBe(13.8);
    expect(sumPercent([])).toBe(0);
  });

  it('turn into slices that close the circle', () => {
    const s = slices();
    expect(s[0].start).toBe(0);
    expect(s[s.length - 1].end).toBeCloseTo(360, 6);
  });
});

describe('mineral map', () => {
  it('keeps the outline, islands and every deposit inside the frame', () => {
    const points = [
      ...OUTLINE.map(([lon, lat]) => project(lon, lat)),
      ...ISLANDS.map((i) => project(i.lon, i.lat)),
      ...MINERALS.map((m) => project(m.lon, m.lat)),
    ];
    const outside = points.filter((p) => p.x < 0 || p.y < 0 || p.x > MAP.width || p.y > MAP.height);
    expect(outside).toEqual([]);
  });

  it('gives every deposit a unique id', () => {
    expect(new Set(MINERALS.map((m) => m.id)).size).toBe(MINERALS.length);
  });
});
