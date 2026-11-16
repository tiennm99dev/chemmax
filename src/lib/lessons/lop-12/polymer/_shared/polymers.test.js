import { describe, expect, it } from 'vitest';
import { POLYMERS, M_WATER, equationTex, monomerMolar, polymer } from './polymers.js';

/** Molar mass of a molecular formula written with Unicode subscripts. */
const ATOMIC = /** @type {Record<string, number>} */ ({ C: 12, H: 1, N: 14, O: 16, Cl: 35.5 });
const SUB = '₀₁₂₃₄₅₆₇₈₉';
/** @param {string} formula */
function molar(formula) {
  const plain = [...formula]
    .map((ch) => (SUB.includes(ch) ? String(SUB.indexOf(ch)) : ch))
    .join('');
  let sum = 0;
  for (const [, el, count] of plain.matchAll(/([A-Z][a-z]?)(\d*)/g)) {
    sum += ATOMIC[el] * (count === '' ? 1 : Number(count));
  }
  return sum;
}

describe('the polymers of the chapter', () => {
  it('keeps each monomer molar mass in step with its formula', () => {
    const bad = [];
    for (const p of POLYMERS)
      for (const m of p.monomers) if (molar(m.molecular) !== m.molar) bad.push(m.name);
    expect(bad).toEqual([]);
  });

  it('conserves mass: monomers make one unit plus the water split off', () => {
    const bad = POLYMERS.filter(
      (p) =>
        monomerMolar(p) !== p.unitMolar + p.water * M_WATER ||
        (p.method === 'trung-hop') !== (p.water === 0),
    ).map((p) => p.id);
    expect(bad).toEqual([]);
  });

  it('writes the book equations', () => {
    expect(equationTex(polymer('pe'))).toBe(
      'n\\,\\mathrm{CH_2{=}CH_2} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} \\mathrm{({-}CH_2{-}CH_2{-})_n}',
    );
    expect(equationTex(polymer('nylon-6'))).toContain('+ n\\,\\mathrm{H_2O}');
    expect(equationTex(polymer('nylon-6-6'))).toContain('+ 2n\\,\\mathrm{H_2O}');
    expect(equationTex(polymer('capron'))).toMatch(/^n\\,\\text\{caprolactam\}/);
    expect(() => polymer('teflon')).toThrow();
  });
});
