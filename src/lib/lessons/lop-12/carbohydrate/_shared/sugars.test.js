import { describe, expect, it } from 'vitest';
import { REAGENTS, SUGARS, benchSugar, observe, sugar } from './sugars.js';

describe('carbohydrates in the test tube', () => {
  it('shows the book results for each reagent', () => {
    const reacting = (/** @type {import('./sugars.js').ReagentId} */ r) =>
      SUGARS.filter((s) => observe(s.id, r).reacts).map((s) => s.id);
    expect(reacting('cu-oh2')).toEqual(['glucose', 'fructose', 'saccharose', 'maltose']);
    expect(reacting('tollens')).toEqual(['glucose', 'fructose', 'maltose']);
    expect(reacting('cu-oh2-nong')).toEqual(['glucose', 'fructose', 'maltose']);
    expect(reacting('bromine')).toEqual(['glucose', 'maltose']);
    expect(reacting('iodine')).toEqual(['tinh-bot']);
  });

  it('gives every pair a text, a short text and a reason', () => {
    const bad = [];
    for (const s of SUGARS) {
      for (const r of REAGENTS) {
        const o = observe(s.id, r.id);
        if (!o.text || !o.short || !o.liquid || !o.why) bad.push([s.id, r.id]);
        if (o.tex && !o.reacts) bad.push([s.id, r.id, 'tex']);
      }
    }
    expect(bad).toEqual([]);
  });

  it('tells glucose from fructose only with bromine water', () => {
    const differ = REAGENTS.filter(
      (r) => observe('glucose', r.id).text !== observe('fructose', r.id).text,
    ).map((r) => r.id);
    expect(differ).toEqual(['bromine']);
    expect(observe('fructose', 'bromine').why).toContain('ketone');
  });

  it('writes the bench formula as TeX', () => {
    expect(benchSugar('glucose')).toEqual({
      name: sugar('glucose').name,
      formula: `$\\mathrm{${sugar('glucose').formula}}$`,
    });
  });

  it('rejects an unknown id', () => {
    expect(() => sugar('xylose')).toThrow();
  });
});
