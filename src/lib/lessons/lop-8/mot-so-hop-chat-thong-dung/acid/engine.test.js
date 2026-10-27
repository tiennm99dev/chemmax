import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { DROPS_TO_FINISH, TARGETS, mix, observe } from './engine.js';

describe('equations', () => {
  it('are all balanced', () => {
    for (const t of TARGETS) {
      for (const eq of Object.values(t.equations ?? {})) expect(isBalancedText(eq), eq).toBe(true);
    }
  });
});

describe('observe', () => {
  it('turns litmus red with any acid', () => {
    expect(observe('HCl', 'quy', 1).paper).toBe('#dc2626');
    expect(observe('H2SO4', 'quy', 0).paper).toBe('#7c3aed');
  });

  it('dissolves a reactive metal with hydrogen bubbles, then stops', () => {
    const half = observe('HCl', 'zn', 2);
    expect(half.bubbles).toBeGreaterThan(0);
    expect(half.solidLeft).toBeCloseTo(0.5, 9);
    expect(half.equation).toBe('Zn + 2HCl → ZnCl2 + H2↑');
    const done = observe('HCl', 'zn', DROPS_TO_FINISH);
    expect(done.solidLeft).toBe(0);
    expect(done.bubbles).toBe(0);
  });

  it('leaves copper untouched', () => {
    const r = observe('H2SO4', 'cu', 5);
    expect(r.equation).toBeNull();
    expect(r.solidLeft).toBe(1);
    expect(r.bubbles).toBe(0);
  });

  it('fades the pink of phenolphthalein as the base is neutralised', () => {
    expect(observe('HCl', 'naoh', 0).liquid).toBe('#f472b6');
    expect(observe('HCl', 'naoh', DROPS_TO_FINISH).liquid).toBe('#e0f2fe');
    expect(observe('H2SO4', 'naoh', 1).equation).toBe('2NaOH + H2SO4 → Na2SO4 + 2H2O');
  });

  it('shows no equation before the first drop', () => {
    expect(observe('HCl', 'fe', 0).equation).toBeNull();
  });
});

describe('mix', () => {
  it('interpolates colours', () => {
    expect(mix('#000000', '#ffffff', 0)).toBe('#000000');
    expect(mix('#000000', '#ffffff', 1)).toBe('#ffffff');
    expect(mix('#000000', '#ffffff', 0.5)).toBe('#808080');
  });
});
