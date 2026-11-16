// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { CHANCES, wordOf } from './chance.js';

describe('chance words', () => {
  it('names an event from every outcome', () => {
    const balls = ['đỏ', 'đỏ', 'xanh'];
    expect(wordOf(balls, (b) => b === 'đỏ')).toBe('Có thể');
    expect(wordOf(balls, (b) => b !== 'vàng')).toBe('Chắc chắn');
    expect(wordOf(balls, (b) => b === 'vàng')).toBe('Không thể');
    expect(CHANCES).toEqual(['Chắc chắn', 'Có thể', 'Không thể']);
  });
});
