import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { rng } from '#lib/core/drill.js';
import { texSource, texStrict } from '#lib/core/katex-options.js';
import {
  MOLAR_VOLUME,
  REVIEW_SKILLS,
  bakingSodaSkill,
  limeKilnSkill,
  limewaterSkill,
  softeningSkill,
  waterSkill,
} from './skills.js';

/** Every `$...$` piece of a rich text. @param {string} text */
const texPieces = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

/** The plain numbers written in TeX in a prompt, in order. @param {string} text */
const numbers = (text) =>
  texPieces(text)
    .map((t) => t.replace(/\\,/g, '').replace('{,}', '.').replace('\\%', ''))
    .filter((t) => /^-?[\d.]+$/.test(t))
    .map(Number);

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
      const w = waterSkill.make(rng(seed));
      const [mass] = numbers(w.prompt);
      const molar = w.prompt.includes(' g K ') ? 39 : 23;
      if (!close(w.answer, (mass / molar / 2) * MOLAR_VOLUME)) bad.push(['water', seed]);

      const b = bakingSodaSkill.make(rng(seed));
      const [mb] = numbers(b.prompt);
      if (!close(b.answer, (mb / 84 / 2) * 106)) bad.push(['soda', seed]);

      const l = limewaterSkill.make(rng(seed));
      const [V] = numbers(l.prompt);
      if (!close(l.answer, (V / MOLAR_VOLUME) * 100)) bad.push(['limewater', seed]);

      const k = limeKilnSkill.make(rng(seed));
      const [mk, pct] = numbers(k.prompt);
      if (!close(k.answer, (((mk * 56) / 100) * pct) / 100)) bad.push(['kiln', seed]);

      const s = softeningSkill.make(rng(seed));
      const [ca, mg] = numbers(s.prompt);
      if (!close(s.answer, (ca + mg) * 106)) bad.push(['softening', seed]);
    }
    expect(bad).toEqual([]);
  });
});
