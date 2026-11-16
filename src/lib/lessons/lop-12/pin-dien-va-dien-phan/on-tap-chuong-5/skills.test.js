import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { rng } from '#lib/core/drill.js';
import { texSource, texStrict } from '#lib/core/katex-options.js';
import { COUPLES, FARADAY } from '../_shared/electrochem.js';
import { REVIEW_SKILLS, emfSkill, massSkill, timeSkill, unknownSkill } from './skills.js';

/** Every `$...$` piece of a rich text. @param {string} text */
const texPieces = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

/** The numbers written in TeX in a prompt, in order. @param {string} text */
const numbers = (text) =>
  texPieces(text)
    .map((t) => t.replace(/\\,/g, '').replace('{,}', '.'))
    .filter((t) => /^-?[\d.]+$/.test(t))
    .map(Number);

describe('the chapter review drill', () => {
  it('draws questions with short exact answers and TeX that renders', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      for (let seed = 1; seed <= 40; seed++) {
        const q = skill.make(rng(seed));
        const decimals = String(q.answer).split('.')[1]?.length ?? 0;
        if (!Number.isFinite(q.answer) || decimals > 3) bad.push([skill.id, seed, q.answer]);
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
    const potentials = COUPLES.map((c) => c.E);
    const bad = [];
    for (let seed = 1; seed <= 40; seed++) {
      const e = emfSkill.make(rng(seed));
      const [, Ea, , Ec] = texPieces(e.prompt).map((t) =>
        Number(t.replace(/E\^\\circ = /, '').replace('{,}', '.')),
      );
      if (!(e.answer > 0) || Math.abs(e.answer - (Ec - Ea)) > 1e-9) bad.push(['emf', seed]);

      const u = unknownSkill.make(rng(seed));
      const [Ecat, emf] = numbers(u.prompt.replace(/E\^\\circ = /g, ''));
      if (Math.abs(u.answer - (Ecat - emf)) > 1e-9 || !potentials.includes(u.answer))
        bad.push(['unknown', seed]);

      const m = massSkill.make(rng(seed));
      const [I, t] = numbers(m.prompt);
      const ne = (I * t) / FARADAY;
      const cu = m.prompt.includes('CuSO_4');
      const expected = cu ? (ne / 2) * 64 : ne * 108;
      if (Math.abs(m.answer - expected) > 1e-9) bad.push(['mass', seed]);

      const s = timeSkill.make(rng(seed));
      const [Is, ms] = numbers(s.prompt);
      const cuS = s.prompt.includes('CuSO_4');
      const neS = cuS ? (ms / 64) * 2 : ms / 108;
      if (Math.abs(s.answer - (neS * FARADAY) / Is) > 1e-6) bad.push(['time', seed]);
    }
    expect(bad).toEqual([]);
  });
});
