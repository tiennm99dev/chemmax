import { describe, expect, it } from 'vitest';
import { DROPLETS, H, PER_DROPLET, TOTAL, W, explain, scene } from './engine.js';

/** @type {Array<['soap' | 'detergent', 'soft' | 'hard']>} */
const CASES = [
  ['soap', 'soft'],
  ['soap', 'hard'],
  ['detergent', 'soft'],
  ['detergent', 'hard'],
];

describe('washing an oil stain', () => {
  it('cleans fully with soap in soft water and with detergent in any water', () => {
    expect(scene(3, 'soap', 'soft').cleaned).toBe(1);
    expect(scene(3, 'detergent', 'hard').cleaned).toBe(1);
    expect(scene(3, 'detergent', 'hard').scum).toEqual([]);
  });

  it('loses soap to scum in hard water and leaves part of the stain', () => {
    const s = scene(2, 'soap', 'hard');
    expect(s.lost).toBeGreaterThan(0);
    expect(s.formed).toBeLessThan(DROPLETS);
    expect(s.stain).not.toBeNull();
    expect(scene(3, 'soap', 'hard').cleaned).toBeLessThan(1);
    expect(explain(3, 'soap', 'hard').tone).toBe('warn');
  });

  it('wraps each droplet with its molecules, tails pointing inward', () => {
    const s = scene(2, 'soap', 'soft');
    const bad = [];
    for (const d of s.droplets) {
      const around = s.molecules.filter((m) => Math.hypot(m.x - d.x, m.y - d.y) < d.r + 20);
      if (around.length !== PER_DROPLET) bad.push(['count', d.id, around.length]);
      for (const m of around) {
        const tipX = m.x + 16 * Math.cos(m.angle);
        const tipY = m.y + 16 * Math.sin(m.angle);
        if (Math.hypot(tipX - d.x, tipY - d.y) > d.r) bad.push(['tail', d.id, m.id]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('keeps every molecule on the board and counts them at every stage', () => {
    const bad = [];
    for (const [agent, water] of CASES) {
      for (const stage of [0, 1, 2, 3]) {
        const s = scene(stage, agent, water);
        const rinsed = stage === 3 ? s.formed * PER_DROPLET : 0;
        if (s.molecules.length + rinsed !== s.active) bad.push([agent, water, stage, 'count']);
        if (s.active + s.lost !== TOTAL) bad.push([agent, water, stage, 'total']);
        for (const m of s.molecules) {
          if (m.x < 0 || m.x > W || m.y < 0 || m.y > H) bad.push([agent, water, stage, m.id]);
        }
        if (!explain(stage, agent, water).text) bad.push([agent, water, stage, 'text']);
      }
    }
    expect(bad).toEqual([]);
  });
});
