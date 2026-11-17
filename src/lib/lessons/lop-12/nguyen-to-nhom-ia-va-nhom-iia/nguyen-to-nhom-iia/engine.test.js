import { describe, expect, it } from 'vitest';
import { METHODS, SAMPLES, apply, hardness, netCharge, start } from './engine.js';

/** Runs methods one after another from a sample. @param {string} id @param {...import('./engine.js').Method} methods */
const after = (id, ...methods) => methods.reduce((w, m) => apply(w, m).water, start(id));

describe('hardness', () => {
  it('names the three samples by their anions', () => {
    expect(hardness(start('tam-thoi').ions).kind).toBe('tam-thoi');
    expect(hardness(start('vinh-cuu').ions).kind).toBe('vinh-cuu');
    expect(hardness(start('toan-phan').ions)).toEqual({
      kind: 'toan-phan',
      temporary: 2,
      permanent: 3,
    });
  });

  it('keeps every sample electrically neutral after any two methods', () => {
    const bad = [];
    for (const s of SAMPLES) {
      if (netCharge(s.ions) !== 0) bad.push([s.id]);
      for (const a of METHODS)
        for (const b of METHODS) {
          const w = after(s.id, a.id, b.id);
          if (netCharge(w.ions) !== 0 || Object.values(w.ions).some((n) => n < 0))
            bad.push([s.id, a.id, b.id]);
        }
    }
    expect(bad).toEqual([]);
  });
});

describe('softening methods', () => {
  it('softens temporary hardness by boiling or by lime', () => {
    expect(hardness(after('tam-thoi', 'dun-soi').ions).kind).toBe('mem');
    const lime = after('tam-thoi', 'voi');
    expect(hardness(lime.ions).kind).toBe('mem');
    // 3 Ca(HCO3)2 + 3 Ca(OH)2 give 6 CaCO3; Mg(HCO3)2 + 2 Ca(OH)2 give Mg(OH)2 + 2 CaCO3.
    expect(lime.traps).toEqual({ CaCO3: 8, 'Mg(OH)2': 1 });
  });

  it('leaves permanent hardness after boiling or lime', () => {
    const step = apply(start('vinh-cuu'), 'dun-soi');
    expect(step.removed).toBe(0);
    expect(step.equations).toEqual([]);
    expect(apply(start('vinh-cuu'), 'voi').removed).toBe(0);
    const mixed = after('toan-phan', 'dun-soi');
    expect(hardness(mixed.ions)).toEqual({ kind: 'vinh-cuu', temporary: 0, permanent: 3 });
    expect(mixed.traps).toEqual({ CaCO3: 2 });
  });

  it('softens every sample with soda, phosphate or the resin', () => {
    const bad = [];
    for (const s of SAMPLES)
      for (const m of /** @type {const} */ (['soda', 'phosphate', 'nhua'])) {
        const w = after(s.id, m);
        if (hardness(w.ions).kind !== 'mem') bad.push([s.id, m]);
        if (w.ions.Na !== 2 * (s.ions.Ca + s.ions.Mg)) bad.push([s.id, m, 'Na']);
      }
    expect(bad).toEqual([]);
    expect(after('vinh-cuu', 'nhua').traps).toEqual({ resin: 4 });
  });

  it('reports soft water without changing it', () => {
    const soft = after('tam-thoi', 'soda');
    const step = apply(soft, 'dun-soi');
    expect(step.water).toBe(soft);
    expect(step.removed).toBe(0);
  });
});
