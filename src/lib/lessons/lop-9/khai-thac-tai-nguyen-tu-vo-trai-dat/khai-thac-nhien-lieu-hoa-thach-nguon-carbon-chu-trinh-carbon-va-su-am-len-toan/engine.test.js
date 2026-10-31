import { describe, expect, it } from 'vitest';
import { START_PPM, simulate, warming } from './engine.js';

const at2100 = (/** @type {number} */ f, /** @type {any} */ forest) => simulate(f, forest).at(-1);

describe('carbon model', () => {
  it('starts from today', () => {
    const first = simulate(1, 'hien-nay')[0];
    expect(first.year).toBe(2024);
    expect(first.ppm).toBeCloseTo(START_PPM, 6);
    expect(first.temp).toBeGreaterThan(1.1);
    expect(first.temp).toBeLessThan(1.35);
  });

  it('gives plausible concentrations in 2100', () => {
    const rows = [
      [1, 'hien-nay', 560, 600],
      [2, 'pha-rung', 740, 820],
      [0, 'trong-rung', 340, 380],
    ];
    const off = rows.filter(([f, forest, lo, hi]) => {
      const ppm = at2100(Number(f), forest)?.ppm ?? 0;
      return ppm < Number(lo) || ppm > Number(hi);
    });
    expect(off).toEqual([]);
  });

  it('warms more when more fuel is burnt or forests are cleared', () => {
    const t = (/** @type {number} */ f, /** @type {any} */ forest) => at2100(f, forest)?.temp ?? 0;
    expect(t(1.5, 'hien-nay')).toBeGreaterThan(t(1, 'hien-nay'));
    expect(t(1, 'pha-rung')).toBeGreaterThan(t(1, 'trong-rung'));
  });

  it('warms 2,1 °C per doubling of CO2', () => {
    expect(warming(560)).toBeCloseTo(2.1, 9);
    expect(warming(280)).toBe(0);
  });

  it('takes back about half of today’s emissions', () => {
    const { uptake, emission } = simulate(1, 'hien-nay')[0];
    expect(emission).toBe(11);
    expect(uptake).toBeGreaterThan(4.5);
    expect(uptake).toBeLessThan(7);
  });

  it('rejects unknown settings', () => {
    expect(() => simulate(-1, 'hien-nay')).toThrow(RangeError);
    expect(() => simulate(1, /** @type {any} */ ('x'))).toThrow(RangeError);
  });
});
