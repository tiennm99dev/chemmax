import { describe, expect, it } from 'vitest';
import { element, groupLabel } from '#lib/domain/elements.js';
import { LAST_Z, challengeOrder, judgeTap, place } from './engine.js';

describe('place', () => {
  it('reads period, block and group from the configuration', () => {
    expect(place(17)).toMatchObject({ period: 3, block: 'p', valence: 7, group: 'VIIA' });
    expect(place(20)).toMatchObject({ period: 4, block: 's', valence: 2, group: 'IIA' });
    expect(place(26)).toMatchObject({ period: 4, block: 'd', valence: 8, group: 'VIIIB' });
    expect(place(29)).toMatchObject({ period: 4, block: 'd', valence: 11, group: 'IB' });
    expect(place(24)?.config).toBe('1s²2s²2p⁶3s²3p⁶3d⁵4s¹');
    expect(place(2)).toMatchObject({ period: 1, block: 's', group: 'VIIIA' });
  });

  it('agrees with the table for every element of periods 1-4', () => {
    const wrong = [];
    for (let z = 1; z <= LAST_Z; z++) {
      const p = place(z);
      const el = element(z);
      if (
        !p ||
        !el ||
        p.period !== el.period ||
        p.block !== el.block ||
        p.group !== groupLabel(el)
      ) {
        wrong.push(z);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('stops after period 4', () => {
    expect(place(37)).toBeNull();
  });
});

describe('challenge', () => {
  it('asks each element of periods 1-4 once', () => {
    const order = challengeOrder();
    expect([...order].sort((a, b) => a - b)).toEqual(
      Array.from({ length: LAST_Z }, (_, i) => i + 1),
    );
  });

  it('accepts the right cell and coaches a wrong one', () => {
    expect(judgeTap(16, 16).ok).toBe(true);
    const row = judgeTap(16, 17);
    expect(row.ok).toBe(false);
    expect(row.text).toContain('Đúng chu kì');
    expect(judgeTap(16, 8).text).toContain('Đúng nhóm');
  });
});
