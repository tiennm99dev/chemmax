import { describe, expect, it } from 'vitest';
import { FRACTIONS, boilingPoint, carbonSpan, fractionIndex } from './engine.js';

describe('boilingPoint', () => {
  it('rises with the number of carbon atoms', () => {
    for (let n = 2; n <= 40; n++) expect(boilingPoint(n)).toBeGreaterThan(boilingPoint(n - 1));
  });

  it('uses the measured values of familiar alkanes', () => {
    expect(boilingPoint(1)).toBe(-162);
    expect(boilingPoint(8)).toBe(126);
    expect(boilingPoint(21)).toBe(356);
  });

  it('rejects carbon counts outside the table', () => {
    expect(() => boilingPoint(0)).toThrow(RangeError);
    expect(() => boilingPoint(41)).toThrow(RangeError);
  });
});

describe('fractions', () => {
  it('collect the textbook carbon ranges', () => {
    expect(carbonSpan(0)).toEqual({ from: 1, to: 4 });
    expect(carbonSpan(1)).toEqual({ from: 5, to: 10 });
    expect(carbonSpan(2)).toEqual({ from: 11, to: 13 });
    expect(carbonSpan(3)).toEqual({ from: 14, to: 20 });
    expect(carbonSpan(4)).toEqual({ from: 21, to: 29 });
    expect(carbonSpan(5)).toEqual({ from: 30, to: 40 });
  });

  it('cover every boiling point exactly once, coolest at the top', () => {
    expect(fractionIndex(-200)).toBe(0);
    expect(fractionIndex(1000)).toBe(FRACTIONS.length - 1);
    for (let i = 1; i < FRACTIONS.length; i++)
      expect(FRACTIONS[i].upTo).toBeGreaterThan(FRACTIONS[i - 1].upTo);
  });
});
