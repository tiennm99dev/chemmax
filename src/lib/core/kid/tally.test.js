// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { describe, expect, it } from 'vitest';
import { countBy, extremes, tallyBundles, tallyWords, totalOf } from './tally.js';

describe('data helpers', () => {
  it('bundles tally strokes by five', () => {
    expect(tallyBundles(0)).toEqual([]);
    expect(tallyBundles(4)).toEqual([4]);
    expect(tallyBundles(5)).toEqual([5]);
    expect(tallyBundles(12)).toEqual([5, 5, 2]);
  });

  it('counts items by category and adds the counts', () => {
    expect(countBy([0, 2, 2, 1, 2], 3)).toEqual([1, 1, 3]);
    expect(countBy([], 2)).toEqual([0, 0]);
    expect(totalOf([{ count: 18 }, { count: 29 }, { count: 6 }])).toBe(53);
  });

  it('finds the most and the fewest, ties included', () => {
    const rows = [
      { label: 'Bò', count: 45 },
      { label: 'Gà', count: 120 },
      { label: 'Lợn', count: 78 },
      { label: 'Dê', count: 36 },
    ];
    expect(extremes(rows)).toEqual({ max: 120, min: 36, most: ['Gà'], least: ['Dê'] });
    const tie = extremes([
      { label: 'A', count: 3 },
      { label: 'B', count: 3 },
    ]);
    expect(tie.most).toEqual(['A', 'B']);
    expect(tie.least).toEqual(['A', 'B']);
  });
});

describe('tally bundles', () => {
  it('groups strokes in fives', () => {
    expect(tallyBundles(0)).toEqual([]);
    expect(tallyBundles(4)).toEqual([4]);
    expect(tallyBundles(5)).toEqual([5]);
    expect(tallyBundles(12)).toEqual([5, 5, 2]);
  });

  it('reads a tally in words', () => {
    expect(tallyWords(3)).toBe('3 vạch');
    expect(tallyWords(5)).toBe('1 bó 5 vạch');
    expect(tallyWords(7)).toBe('1 bó 5 vạch và 2 vạch');
  });
});

describe('extremes', () => {
  it('names every category that ties', () => {
    const rows = [
      { label: 'nắng', count: 3 },
      { label: 'mưa', count: 2 },
      { label: 'mây', count: 2 },
    ];
    expect(extremes(rows)).toEqual({ max: 3, min: 2, most: ['nắng'], least: ['mưa', 'mây'] });
  });
});
