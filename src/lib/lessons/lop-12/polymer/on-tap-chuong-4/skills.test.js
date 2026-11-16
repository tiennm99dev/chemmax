import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { rng } from '#lib/core/drill.js';
import { texSource, texStrict } from '#lib/core/katex-options.js';
import { REVIEW_SKILLS } from './skills.js';

/** Every `$...$` piece of a rich text. @param {string} text */
const texPieces = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

describe('the chapter review drill', () => {
  it('draws questions with short positive answers and TeX that renders', () => {
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

  it('computes the book answers from the numbers in the prompt', () => {
    /** The numbers written in TeX in a prompt. @param {string} text */
    const numbers = (text) =>
      texPieces(text).map((t) =>
        Number(t.replace(/\\,/g, '').replace('{,}', '.').replace(/\\%/, '')),
      );
    const units = [28, 42, 62.5, 104, 53, 54, 113, 226, 192];
    const ratios = [113 / 131, 226 / 116, 192 / 166];
    const [degree, count, addition, condensation] = REVIEW_SKILLS;
    const bad = [];
    for (let seed = 1; seed <= 30; seed++) {
      for (const skill of [degree, count]) {
        const q = skill.make(rng(seed));
        const [M] = numbers(q.prompt);
        if (!units.some((u) => Math.abs(M / q.answer - u) < 1e-9)) bad.push([skill.id, seed]);
      }
      const a = addition.make(rng(seed));
      const [m, h] = numbers(a.prompt);
      if (Math.abs(a.answer - (m * h) / 100) > 1e-9) bad.push(['addition', seed]);
      const c = condensation.make(rng(seed));
      const [mc] = numbers(c.prompt);
      if (!ratios.some((r) => Math.abs(c.answer - mc * r) < 1e-9)) bad.push(['condensation', seed]);
    }
    expect(bad).toEqual([]);
  });
});
