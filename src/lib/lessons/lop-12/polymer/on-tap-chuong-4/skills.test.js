import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { strictTexFailures, texSpans } from '#lib/core/tex-check.js';
import { REVIEW_SKILLS } from './skills.js';

describe('the chapter review drill', () => {
  it('draws questions with short positive answers and TeX that renders', () => {
    const bad = [];
    /** @type {string[]} */
    const texts = [];
    for (const skill of REVIEW_SKILLS) {
      for (let seed = 1; seed <= 40; seed++) {
        const q = skill.make(rng(seed));
        const decimals = String(q.answer).split('.')[1]?.length ?? 0;
        if (!(q.answer > 0) || decimals > 3) bad.push([skill.id, seed, q.answer]);
        texts.push(q.prompt, ...q.steps, ...(q.hints ?? []));
      }
    }
    expect(bad).toEqual([]);
    expect(strictTexFailures(texts)).toEqual([]);
  });

  it('computes the book answers from the numbers in the prompt', () => {
    /** The numbers written in TeX in a prompt. @param {string} text */
    const numbers = (text) =>
      texSpans(text).map((t) =>
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
