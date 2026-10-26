import { describe as group, expect, it } from 'vitest';
import { SAMPLES, TOLERANCE, describe, judge } from './engine.js';

group('samples', () => {
  it('take nine everyday solutions from acid to base', () => {
    expect(SAMPLES).toHaveLength(9);
    expect(SAMPLES.some((s) => s.ph < 7)).toBe(true);
    expect(SAMPLES.some((s) => s.ph > 7)).toBe(true);
    expect(SAMPLES.find((s) => s.name === 'Nước cất')?.ph).toBe(7);
  });
});

group('judge', () => {
  const lemon = { name: 'Nước chanh', ph: 2.4 };

  it('accepts a guess within the tolerance', () => {
    expect(judge(lemon, 2.4).ok).toBe(true);
    expect(judge(lemon, 2.4 + TOLERANCE).ok).toBe(true);
    expect(judge(lemon, 1.4).ok).toBe(true);
  });

  it('points towards the real value', () => {
    expect(judge(lemon, 6).direction).toBe('more-acidic');
    expect(judge({ name: 'Nước vôi trong', ph: 12.4 }, 9).direction).toBe('more-basic');
  });
});

group('describe', () => {
  it('names the medium and indicator colours', () => {
    expect(describe(2.4)).toBe(
      'pH ≈ 2,4, môi trường acid; quỳ tím hoá đỏ; phenolphthalein không màu.',
    );
    expect(describe(7)).toContain('trung tính; quỳ tím không đổi màu');
    expect(describe(12.4)).toBe(
      'pH ≈ 12,4, môi trường base; quỳ tím hoá xanh; phenolphthalein chuyển màu hồng.',
    );
  });
});
