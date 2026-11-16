import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  FRACTIONS,
  MAX_CARBON,
  alkane,
  alkene,
  boilingPoint,
  crack,
  crackText,
  formulaTex,
  fractionOf,
} from './engine.js';

describe('fractional distillation', () => {
  it('raises the boiling point with every carbon', () => {
    const bad = [];
    for (let n = 2; n <= MAX_CARBON; n++) {
      if (!(boilingPoint(n) > boilingPoint(n - 1))) bad.push(n);
    }
    expect(bad).toEqual([]);
    expect(() => boilingPoint(MAX_CARBON + 1)).toThrow(RangeError);
  });

  it('sends each alkane to the fraction of the book table', () => {
    /** @param {number} n */
    const at = (n) => fractionOf(boilingPoint(n)).id;
    expect([1, 4].map(at)).toEqual(['khi', 'khi']);
    expect([5, 8, 10].map(at)).toEqual(['xang', 'xang', 'xang']);
    expect([11, 12, 13].map(at)).toEqual(['dau-hoa', 'dau-hoa', 'dau-hoa']);
    expect([15, 18, 20].map(at)).toEqual(['diesel', 'diesel', 'diesel']);
    expect([21, 30].map(at)).toEqual(['can', 'can']);
  });

  it('lists the fractions from the top of the column down', () => {
    const tops = FRACTIONS.map((f) => f.upTo);
    expect([...tops].sort((a, b) => a - b)).toEqual(tops);
  });
});

describe('cracking', () => {
  it('writes formulas the book way', () => {
    expect(alkane(1)).toBe('CH4');
    expect(alkane(8)).toBe('C8H18');
    expect(alkene(2)).toBe('C2H4');
    expect(formulaTex(12, 26)).toBe('$\\mathrm{C_{12}H_{26}}$');
  });

  it('gives a balanced equation for every allowed cut', () => {
    const bad = [];
    for (let n = 10; n <= MAX_CARBON; n++) {
      for (let k = 1; k <= n - 2; k++) {
        const { equation } = crack(n, k);
        if (!isBalancedText(equation)) bad.push(equation);
      }
    }
    expect(bad).toEqual([]);
    expect(crack(16, 8).equation).toBe('C16H34 → C8H18 + C8H16');
    expect(() => crack(10, 9)).toThrow(RangeError);
  });

  it('says what the products are good for', () => {
    expect(crackText(16, 8)).toContain('khoảng của xăng');
    expect(crackText(20, 18)).toContain('ethylene');
    expect(crackText(20, 18)).toContain('nguyên liệu hoá dầu');
  });
});
