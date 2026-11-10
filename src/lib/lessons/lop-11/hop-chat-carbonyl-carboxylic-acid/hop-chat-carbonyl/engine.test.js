import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import { REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';

describe('carbonyl test-tube bench', () => {
  it('balances every equation it shows', () => {
    const wrong = [];
    for (const s of SAMPLES) {
      for (const r of REAGENTS) {
        const eq = observe(s.id, r.id).equation;
        if (eq && !isBalancedText(eq)) wrong.push(eq);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('oxidises aldehydes only and gives iodoform only with CH3CO–', () => {
    const table = Object.fromEntries(
      SAMPLES.map((s) => [s.id, REAGENTS.map((r) => (observe(s.id, r.id).changed ? 1 : 0))]),
    );
    expect(table).toEqual({
      acetaldehyde: [1, 1, 1],
      propanal: [1, 1, 0],
      acetone: [0, 0, 1],
      'pentan-3-one': [0, 0, 0],
    });
  });

  it('writes an equation exactly when something happens', () => {
    const wrong = [];
    for (const s of SAMPLES) {
      for (const r of REAGENTS) {
        const o = observe(s.id, r.id);
        if (o.changed !== (o.equation !== null)) wrong.push(`${s.id}:${r.id}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('deals each sample once', () => {
    for (const seed of [1, 2, 3, 7]) {
      expect([...dealSamples(rng(seed))].sort()).toEqual(SAMPLES.map((s) => s.id).sort());
    }
  });
});
