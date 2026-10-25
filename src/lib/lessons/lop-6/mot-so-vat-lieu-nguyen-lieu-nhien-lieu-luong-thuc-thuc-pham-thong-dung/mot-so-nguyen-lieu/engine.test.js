import { describe, expect, it } from 'vitest';
import { CHAINS, canOpen, chain, judge } from './engine.js';

describe('raw material chains', () => {
  it('joins every pair of nodes with one step', () => {
    for (const c of CHAINS) expect(c.steps.length).toBe(c.nodes.length - 1);
  });

  it('keeps every answer inside its options', () => {
    for (const c of CHAINS) {
      for (const s of c.steps) {
        expect(s.options.length).toBeGreaterThanOrEqual(2);
        expect(s.answer).toBeGreaterThanOrEqual(0);
        expect(s.answer).toBeLessThan(s.options.length);
      }
    }
  });

  it('has unique ids', () => {
    expect(new Set(CHAINS.map((c) => c.id)).size).toBe(CHAINS.length);
    expect(() => chain('khong-co')).toThrow();
  });
});

describe('opening steps', () => {
  it('opens steps in order', () => {
    expect(canOpen([], 0)).toBe(true);
    expect(canOpen([false, false], 1)).toBe(false);
    expect(canOpen([true, false], 1)).toBe(true);
  });

  it('scores the prediction and always explains the step', () => {
    const right = judge('voi', 0, 1);
    expect(right.ok).toBe(true);
    expect(right.text).toMatch(/^Đúng\. Đá vôi → Vôi sống: Nung/);
    const wrong = judge('voi', 0, 0);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('đáp án là "Nung đá vôi ở nhiệt độ cao"');
    expect(wrong.text).toContain('carbon dioxide');
  });
});
