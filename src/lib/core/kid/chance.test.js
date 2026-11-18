// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { BALL_COLORS, CHANCES, ballCounts, boxText, waysToTake, wordOf } from './chance.js';

describe('chance words', () => {
  it('names an event from every outcome', () => {
    const balls = ['đỏ', 'đỏ', 'xanh'];
    expect(wordOf(balls, (b) => b === 'đỏ')).toBe('Có thể');
    expect(wordOf(balls, (b) => b !== 'vàng')).toBe('Chắc chắn');
    expect(wordOf(balls, (b) => b === 'vàng')).toBe('Không thể');
    expect(CHANCES).toEqual(['Chắc chắn', 'Có thể', 'Không thể']);
  });
});

describe('boxes of balls', () => {
  it('counts the balls of each colour in the order they appear', () => {
    expect(ballCounts(['do', 'xanh', 'do'])).toEqual([
      { color: 'do', count: 2 },
      { color: 'xanh', count: 1 },
    ]);
  });

  it('describes a box colour by colour', () => {
    expect(boxText(['do', 'xanh', 'xanh'])).toBe('Hộp có 2 bóng xanh, 1 bóng đỏ');
    expect(boxText(['tim', 'trang'])).toBe('Hộp có 1 bóng trắng, 1 bóng tím');
  });

  it('lists every way of taking balls', () => {
    expect(waysToTake(['do', 'xanh'], 1)).toEqual([['do'], ['xanh']]);
    expect(waysToTake(['do', 'xanh', 'vang'], 2)).toEqual([
      ['do', 'xanh'],
      ['do', 'vang'],
      ['xanh', 'vang'],
    ]);
  });

  it('gives every colour its own letter', () => {
    const marks = Object.values(BALL_COLORS).map((c) => c.mark);
    expect(new Set(marks).size).toBe(marks.length);
  });
});
