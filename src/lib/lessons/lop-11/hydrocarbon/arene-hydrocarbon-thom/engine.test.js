import { describe, expect, it } from 'vitest';
import { dist } from '#lib/geom-engine/plane.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import { cloudPoint, groupsOf, relationTo1, ringPoint, substitute, RING_RADIUS } from './engine.js';

describe('benzene ring geometry', () => {
  it('makes a regular hexagon whose sides all equal the ring radius', () => {
    const sides = [1, 2, 3, 4, 5, 6].map((p) => dist(ringPoint(p), ringPoint((p % 6) + 1)));
    expect(sides.every((s) => Math.abs(s - RING_RADIUS) < 1e-9)).toBe(true);
  });

  it('puts the π cloud above and below the ring plane', () => {
    expect(cloudPoint(0.25, 1).z).toBeGreaterThan(0);
    expect(cloudPoint(0.25, -1).z).toBeLessThan(0);
  });

  it('places the CH3 group of toluene at position 1 only', () => {
    expect(groupsOf('toluene')).toEqual(['CH3', 'H', 'H', 'H', 'H', 'H']);
    expect(groupsOf('benzene').every((g) => g === 'H')).toBe(true);
  });
});

describe('substitution on the ring', () => {
  it('names the positions around position 1', () => {
    expect([2, 3, 4, 5, 6].map(relationTo1)).toEqual(['ortho', 'meta', 'para', 'meta', 'ortho']);
  });

  it('gives one product from benzene wherever the H is replaced', () => {
    const names = new Set(
      [1, 2, 3, 4, 5, 6].map((p) => {
        const r = substitute('benzene', 'brom', p);
        return r.ok ? `${r.name}:${r.kind}` : 'no';
      }),
    );
    expect([...names]).toEqual(['bromobenzene:only']);
  });

  it('prefers ortho and para on toluene', () => {
    const kinds = [2, 3, 4].map((p) => {
      const r = substitute('toluene', 'nitro', p);
      return r.ok ? r.kind : 'no';
    });
    expect(kinds).toEqual(['main', 'minor', 'main']);
    const para = substitute('toluene', 'nitro', 4);
    expect(para.ok && para.name).toBe('4-nitrotoluene (p-nitrotoluene)');
  });

  it('refuses to replace the CH3 group', () => {
    expect(substitute('toluene', 'brom', 1).ok).toBe(false);
  });

  it('balances every equation', () => {
    const wrong = [];
    for (const arene of /** @type {const} */ (['benzene', 'toluene'])) {
      for (const reaction of /** @type {const} */ (['brom', 'nitro'])) {
        const r = substitute(arene, reaction, 2);
        if (!r.ok || !isBalancedText(r.equation)) wrong.push(`${arene} ${reaction}`);
      }
    }
    expect(wrong).toEqual([]);
  });
});
