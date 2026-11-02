import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { RAIN_STAGES, isAcidRain, lakePh, lakeState, phOf, pond, rainPh } from './engine.js';

describe('acid rain', () => {
  it('prints balanced equations', () => {
    const wrong = RAIN_STAGES.filter((s) => !isBalancedText(s.equation));
    expect(wrong).toEqual([]);
  });

  it('puts rain without NOx exactly at the limit of the book', () => {
    expect(rainPh(0)).toBeCloseTo(5.6, 6);
    expect(isAcidRain(rainPh(0))).toBe(false);
    expect(isAcidRain(rainPh(5))).toBe(true);
  });

  it('turns a known amount of strong acid into its pH', () => {
    expect(rainPh(100)).toBeCloseTo(4, 2);
    expect(phOf(400)).toBeCloseTo(7.8, 1);
  });

  it('protects a limestone lake but not a granite one', () => {
    expect(lakePh(30, 100, 'da_voi', false)).toBeGreaterThan(7);
    expect(lakePh(30, 100, 'granite', false)).toBeLessThan(5);
    expect(lakePh(0, 100, 'granite', false)).toBeCloseTo(phOf(40), 6);
  });

  it('lets lime bring a sour lake back up', () => {
    expect(lakePh(30, 100, 'granite', true)).toBeGreaterThan(6);
  });

  it('loses fish as the water sours', () => {
    expect([6.5, 5.7, 5.2, 4.5].map((ph) => lakeState(ph).fish)).toEqual([5, 3, 1, 0]);
  });
});

describe('eutrophication', () => {
  it('runs from a clean pond to a dead one', () => {
    expect(pond(0, false, false).oxygen).toBe(8);
    expect(pond(100, false, false).fish).toBe(0);
    expect(pond(50, false, false).tone).toBe('info');
  });

  it('is helped by treating the water and by aeration', () => {
    expect(pond(100, true, false).oxygen).toBeGreaterThan(pond(100, false, false).oxygen);
    expect(pond(100, false, true).oxygen).toBeGreaterThan(pond(100, false, false).oxygen);
    expect(pond(100, true, false).fish).toBe(5);
  });
});
