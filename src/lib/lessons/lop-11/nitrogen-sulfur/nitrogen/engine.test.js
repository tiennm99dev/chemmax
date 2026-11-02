import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { NODES, STEPS, node, oxText, progressText, trend } from './engine.js';

describe('the nitrogen cycle', () => {
  it('links only known nodes and closes the cycle', () => {
    const missing = STEPS.filter((s) => !node(s.from) || !node(s.to));
    expect(missing).toEqual([]);
    expect(new Set(STEPS.flatMap((s) => [s.from, s.to]))).toEqual(new Set(NODES.map((n) => n.id)));
    expect(STEPS.some((s) => s.to === 'n2')).toBe(true);
    expect(STEPS.some((s) => s.from === 'n2')).toBe(true);
  });

  it('prints only balanced equations', () => {
    const wrong = STEPS.filter((s) => s.equation && !isBalancedText(s.equation));
    expect(wrong.map((s) => s.equation)).toEqual([]);
  });

  it('reads the oxidation state change along each arrow', () => {
    const byId = Object.fromEntries(STEPS.map((s) => [s.id, trend(s)]));
    expect(byId).toEqual({
      1: 'tang',
      2: 'tang',
      3: 'tang',
      4: 'khong-doi',
      5: 'giam',
      6: 'tang',
      7: 'giam',
      8: 'khong-doi',
      9: 'giam',
    });
  });

  it('keeps every badge a full touch target away from the others', () => {
    const mids = STEPS.map((s) => [(s.path[0] + s.path[2]) / 2, (s.path[1] + s.path[3]) / 2]);
    const close = mids.flatMap((a, i) =>
      mids.slice(i + 1).filter((b) => Math.hypot(a[0] - b[0], a[1] - b[1]) < 44),
    );
    expect(close).toEqual([]);
  });

  it('writes oxidation states and progress the way the page shows them', () => {
    expect([5, 0, -3].map(oxText)).toEqual(['+5', '0', '−3']);
    expect(progressText(STEPS.length)).toContain('đủ');
    expect(progressText(2)).toBe('Đã mở 2/9 mũi tên.');
  });
});
