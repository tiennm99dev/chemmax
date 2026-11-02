import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { TUBES, gasMmol, outcome, tubeColor, turned } from './engine.js';

describe('the sulfur dioxide lab', () => {
  it('prints balanced equations', () => {
    const wrong = Object.values(TUBES).filter((t) => !isBalancedText(t.equation));
    expect(wrong).toEqual([]);
    expect(isBalancedText('S + O2 → SO2')).toBe(true);
  });

  it('clears the permanganate at the 5 : 2 ratio of the equation', () => {
    const permanganate = 10 * 0.02;
    expect(TUBES.kmno4.needs).toBeCloseTo((permanganate * 5) / 2, 9);
    expect(TUBES.br2.needs).toBeCloseTo(10 * 0.05, 9);
  });

  it('needs 16 mg of sulfur for those tubes', () => {
    expect(gasMmol('s', 16)).toBeCloseTo(0.5, 9);
    expect(turned('s', 'kmno4', gasMmol('s', 16))).toBe(1);
    expect(turned('s', 'kmno4', gasMmol('s', 8))).toBeCloseTo(0.5, 9);
  });

  it('leaves the oxidants alone with carbon dioxide', () => {
    expect(turned('c', 'kmno4', 5)).toBe(0);
    expect(turned('c', 'br2', 5)).toBe(0);
    expect(turned('c', 'quy', 5)).toBe(1);
  });

  it('fades the colour towards the end colour', () => {
    expect(tubeColor('kmno4', 0)).toBe('rgb(126,34,206)');
    expect(tubeColor('kmno4', 1)).toBe('rgb(241,245,249)');
  });

  it('reports what the learner should conclude', () => {
    expect(outcome('s', 'kmno4', 0).tone).toBe('info');
    expect(outcome('s', 'kmno4', 16).tone).toBe('ok');
    expect(outcome('s', 'kmno4', 8).tone).toBe('info');
    expect(outcome('c', 'br2', 16).tone).toBe('warn');
    expect(outcome('c', 'quy', 16).equation).toContain('CO2');
  });
});
