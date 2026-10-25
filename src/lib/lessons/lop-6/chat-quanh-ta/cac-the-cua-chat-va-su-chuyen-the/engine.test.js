import { describe, expect, it } from 'vitest';
import {
  BOX,
  CURVE,
  HEAT_MAX,
  N,
  STAGE_BOUNDS,
  evaporated,
  layout,
  processName,
  stateAt,
} from './engine.js';

describe('water heating model', () => {
  it('starts as ice at -30 °C and ends as steam at 120 °C', () => {
    expect(stateAt(0)).toMatchObject({ temp: -30, stage: 'ran', solid: N });
    expect(stateAt(HEAT_MAX)).toMatchObject({ temp: 120, stage: 'khi', gas: N });
  });

  it('holds 0 °C while ice melts and 100 °C while water boils', () => {
    for (let q = STAGE_BOUNDS.meltStart; q < STAGE_BOUNDS.meltEnd; q++) {
      expect(stateAt(q).temp).toBe(0);
      expect(stateAt(q).stage).toBe('nong-chay');
    }
    for (let q = STAGE_BOUNDS.boilStart; q < STAGE_BOUNDS.boilEnd; q++) {
      expect(stateAt(q).temp).toBe(100);
      expect(stateAt(q).stage).toBe('soi');
    }
  });

  it('keeps the particle count and moves particles one way as heat grows', () => {
    let prev = stateAt(0);
    for (let q = 0; q <= HEAT_MAX; q += 0.5) {
      const s = stateAt(q);
      expect(s.solid + s.liquid + s.gas).toBe(N);
      expect(s.temp).toBeGreaterThanOrEqual(prev.temp);
      expect(s.solid).toBeLessThanOrEqual(prev.solid);
      expect(s.gas).toBeGreaterThanOrEqual(prev.gas);
      prev = s;
    }
  });

  it('lets liquid water evaporate below the boiling point', () => {
    expect(evaporated(0)).toBe(0);
    expect(evaporated(50)).toBe(2);
    expect(evaporated(100)).toBe(4);
    expect(stateAt(50).gas).toBeGreaterThan(0);
  });

  it('follows the heating curve corners', () => {
    for (const [q, t] of CURVE) expect(stateAt(q).temp).toBeCloseTo(t, 9);
  });

  it('names the change for heating and for cooling', () => {
    expect(processName('nong-chay', true)).toMatch(/^Nóng chảy/);
    expect(processName('nong-chay', false)).toMatch(/^Đông đặc/);
    expect(processName('soi', true)).toMatch(/^Sôi/);
    expect(processName('soi', false)).toMatch(/^Ngưng tụ/);
    expect(processName('long', true)).toMatch(/^Bay hơi/);
  });

  it('keeps every particle inside the box', () => {
    for (let q = 0; q <= HEAT_MAX; q += 5) {
      for (const t of [0, 1.3, 7.7, 42]) {
        for (const p of layout(stateAt(q), t)) {
          expect(p.x).toBeGreaterThanOrEqual(BOX.left);
          expect(p.x).toBeLessThanOrEqual(BOX.right);
          expect(p.y).toBeGreaterThanOrEqual(BOX.top);
          expect(p.y).toBeLessThanOrEqual(BOX.bottom);
        }
      }
    }
  });

  it('keeps gas particles above the liquid', () => {
    const s = stateAt(70);
    const pts = layout(s, 3);
    const lowestGas = Math.max(...pts.filter((p) => p.phase === 'gas').map((p) => p.y));
    const highestLiquid = Math.min(...pts.filter((p) => p.phase === 'liquid').map((p) => p.y));
    expect(lowestGas).toBeLessThanOrEqual(highestLiquid);
  });
});
