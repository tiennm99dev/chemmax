import { describe, expect, it } from 'vitest';
import { FUELS, KIND_NAMES, MAP, QUESTIONS, SITES, co2For, judge, project } from './engine.js';

describe('oil and gas map', () => {
  it('places every site inside the map', () => {
    const out = SITES.filter((s) => {
      const { x, y } = project(s.lon, s.lat);
      return !(x > 0 && x < MAP.width && y > 0 && y < MAP.height);
    }).map((s) => s.id);
    expect(out).toEqual([]);
  });

  it('keeps ids unique and kinds known', () => {
    expect(new Set(SITES.map((s) => s.id)).size).toBe(SITES.length);
    expect(SITES.filter((s) => !(s.kind in KIND_NAMES))).toEqual([]);
  });

  it('answers every quiz question with a site on the map', () => {
    const ids = new Set(SITES.map((s) => s.id));
    expect(QUESTIONS.filter((q) => !ids.has(q.answer))).toEqual([]);
  });

  it('judges taps', () => {
    expect(judge(QUESTIONS[0], 'bach-ho').right).toBe(true);
    const wrong = judge(QUESTIONS[0], 'dung-quat');
    expect(wrong.right).toBe(false);
    expect(wrong.text).toContain('Nhà máy lọc dầu Dung Quất');
  });
});

describe('carbon dioxide per heat', () => {
  it('matches the worked example', () => {
    const [methane] = FUELS;
    const octane = FUELS.find((f) => f.id === 'octane');
    expect(co2For(methane, 1000).grams).toBeCloseTo(49.44, 2);
    expect(octane && co2For(octane, 1000).grams).toBeCloseTo(64.35, 2);
    expect(co2For(methane, 8900).grams).toBeCloseTo(440, 6);
  });

  it('makes natural gas the lowest and coal the highest', () => {
    const grams = FUELS.map((f) => co2For(f, 1000).grams);
    expect(Math.min(...grams)).toBe(grams[0]);
    expect(Math.max(...grams)).toBe(grams[FUELS.findIndex((f) => f.id === 'coal')]);
  });
});
