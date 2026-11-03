import { describe, expect, it } from 'vitest';
import { BANDS, SAMPLES, classFromBands, judge, transmittance } from './engine.js';

describe('infrared samples', () => {
  it('puts every peak inside the range of its band', () => {
    const outside = SAMPLES.flatMap((s) =>
      s.peaks
        .filter((p) => p.at < BANDS[p.band].low || p.at > BANDS[p.band].high)
        .map((p) => `${s.id} ${p.at}`),
    );
    expect(outside).toEqual([]);
  });

  it('reads the class of every sample from its bands alone', () => {
    const wrong = SAMPLES.filter((s) => classFromBands(s.peaks.map((p) => p.band)) !== s.type);
    expect(wrong.map((s) => s.id)).toEqual([]);
  });

  it('gives one sample per class', () => {
    expect(new Set(SAMPLES.map((s) => s.type)).size).toBe(SAMPLES.length);
  });

  it('dips at a peak and stays high far from any peak', () => {
    const ethanol = SAMPLES[0];
    expect(transmittance(ethanol, 1050)).toBeLessThan(30);
    expect(transmittance(ethanol, 2200)).toBeGreaterThan(90);
  });

  it('keeps %T between 0 and 100', () => {
    /** @type {string[]} */
    const bad = [];
    for (const s of SAMPLES) {
      for (let v = 500; v <= 4000; v += 50) {
        const t = transmittance(s, v);
        if (t < 0 || t > 100) bad.push(`${s.id} ${v}`);
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('judging a class choice', () => {
  it('accepts the right class and names the substance', () => {
    const r = judge(SAMPLES[1], 'ketone');
    expect(r.correct).toBe(true);
    expect(r.text).toContain('acetone');
  });

  it('rejects a wrong class without revealing the substance', () => {
    const r = judge(SAMPLES[1], 'aldehyde');
    expect(r.correct).toBe(false);
    expect(r.text).not.toContain('acetone');
  });
});
