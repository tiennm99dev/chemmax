import { describe, expect, it } from 'vitest';
import {
  FUELS,
  airAdvice,
  carbonDioxide,
  co2For,
  heat,
  massFor,
  smoky,
  usefulHeat,
} from './engine.js';

describe('heat from fuels', () => {
  it('uses Q = q·m with the school table values', () => {
    expect(heat('cui', 1)).toBe(10);
    expect(heat('than-da', 2)).toBe(54);
    expect(heat('xang', 0.5)).toBe(23);
    expect(heat('hydrogen', 1)).toBe(140);
  });

  it('gives the most useful heat with just enough air', () => {
    for (const f of FUELS) {
      const best = usefulHeat(f.id, 2, 'vua');
      expect(best).toBeCloseTo(heat(f.id, 2), 9);
      expect(usefulHeat(f.id, 2, 'thieu')).toBeLessThan(best);
      expect(usefulHeat(f.id, 2, 'thua')).toBeLessThan(best);
    }
  });

  it('finds the mass for a needed amount of heat', () => {
    expect(massFor('cui', 100)).toBeCloseTo(10, 9);
    expect(massFor('than-da', 54)).toBeCloseTo(2, 9);
    for (const f of FUELS) expect(heat(f.id, massFor(f.id, 77))).toBeCloseTo(77, 9);
  });
});

describe('emissions', () => {
  it('gives no carbon dioxide or smoke from hydrogen', () => {
    expect(carbonDioxide('hydrogen', 3, 'vua')).toBe(0);
    expect(smoky('hydrogen', 'thieu')).toBe(false);
  });

  it('makes smoke only with too little air', () => {
    expect(smoky('cui', 'thieu')).toBe(true);
    expect(smoky('cui', 'vua')).toBe(false);
    expect(smoky('cui', 'thua')).toBe(false);
  });

  it('ranks fuels by carbon dioxide for the same heat', () => {
    const order = FUELS.map((f) => f.id).sort((a, b) => co2For(b, 100) - co2For(a, 100));
    expect(order[0]).toBe('cui');
    expect(order[order.length - 1]).toBe('hydrogen');
    expect(co2For('cui', 100)).toBeCloseTo(18, 9);
    expect(co2For('than-da', 100)).toBeCloseTo(10, 9);
  });

  it('explains each air supply', () => {
    expect(airAdvice('gas', 'vua')).toMatch(/^Không khí vừa đủ/);
    expect(airAdvice('cui', 'thieu')).toContain('carbon monoxide');
    expect(airAdvice('hydrogen', 'thieu')).not.toContain('carbon monoxide');
    expect(airAdvice('xang', 'thua')).toMatch(/^Thừa không khí/);
  });
});
