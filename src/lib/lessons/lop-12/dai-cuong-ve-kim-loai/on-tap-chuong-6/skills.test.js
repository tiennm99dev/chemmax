import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { rng } from '#lib/core/drill.js';
import { texSource, texStrict } from '#lib/core/katex-options.js';
import {
  MOLAR_VOLUME,
  REVIEW_SKILLS,
  acidMassSkill,
  barSkill,
  reductionSkill,
  unknownMetalSkill,
} from './skills.js';

/** Every `$...$` piece of a rich text. @param {string} text */
const texPieces = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

/** The plain numbers written in TeX in a prompt, in order. @param {string} text */
const numbers = (text) =>
  texPieces(text)
    .map((t) => t.replace(/\\,/g, '').replace('{,}', '.').replace('\\%', ''))
    .filter((t) => /^-?[\d.]+$/.test(t))
    .map(Number);

const MOLAR = { Mg: 24, Zn: 65, Fe: 56, Al: 27, Cu: 64, Ag: 108 };
const close = (/** @type {number} */ a, /** @type {number} */ b) => Math.abs(a - b) < 1e-9;

describe('the chapter review drill', () => {
  it('draws questions with short exact answers and TeX that renders', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      for (let seed = 1; seed <= 40; seed++) {
        const q = skill.make(rng(seed));
        const decimals = String(q.answer).split('.')[1]?.length ?? 0;
        if (!(q.answer > 0) || decimals > 3) bad.push([skill.id, seed, q.answer]);
        for (const text of [q.prompt, ...q.steps, ...(q.hints ?? [])]) {
          for (const tex of texPieces(text)) {
            try {
              katex.renderToString(texSource(tex), {
                throwOnError: true,
                strict: (/** @type {string} */ code, /** @type {string} */ msg) => {
                  if (texStrict(code, msg) !== 'ignore') throw new Error(msg);
                  return 'ignore';
                },
              });
            } catch {
              bad.push([skill.id, seed, tex]);
            }
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('computes the answers from the numbers in the prompt', () => {
    const bad = [];
    for (let seed = 1; seed <= 40; seed++) {
      const a = acidMassSkill.make(rng(seed));
      const id = /** @type {keyof typeof MOLAR} */ (/lượng (\w+) trong/.exec(a.prompt)?.[1]);
      const [V] = numbers(a.prompt);
      const nH2 = V / MOLAR_VOLUME;
      const nM = id === 'Al' ? (nH2 * 2) / 3 : nH2;
      if (!close(a.answer, nM * MOLAR[id])) bad.push(['acid', seed]);

      const u = unknownMetalSkill.make(rng(seed));
      const [m, Vu] = numbers(u.prompt);
      if (!close(u.answer, m / (Vu / MOLAR_VOLUME))) bad.push(['unknown', seed]);

      const b = barSkill.make(rng(seed));
      const [delta] = numbers(b.prompt);
      const expected = b.prompt.includes('thanh Fe')
        ? (delta / 8) * 64
        : b.prompt.includes('thanh Zn')
          ? (delta / 1) * 64
          : (delta / 152) * 2 * 108;
      if (!close(b.answer, expected)) bad.push(['bar', seed]);

      const r = reductionSkill.make(rng(seed));
      const [mass, pct = 100] = numbers(r.prompt);
      const fe = r.prompt.includes('Fe_2O_3');
      const metal = fe ? (mass / 160) * 2 * 56 : (mass / 80) * 64;
      if (!close(r.answer, (metal * pct) / 100)) bad.push(['reduction', seed]);
    }
    expect(bad).toEqual([]);
  });
});
