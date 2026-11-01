import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { tidy } from '#lib/core/number-format.js';
import { element, outerElectrons } from '#lib/domain/elements.js';
import { REVIEW_SKILLS, oxideMassSkill, positionSkill } from './skills.js';

describe('review skills', () => {
  it('makes questions with natural-number answers and steps', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      for (let seed = 1; seed <= 40; seed++) {
        const q = skill.make(rng(seed));
        if (
          !Number.isInteger(q.answer) ||
          q.answer < 1 ||
          q.steps.length === 0 ||
          /NaN|undefined/.test(q.prompt + q.steps.join(''))
        ) {
          bad.push(`${skill.id}:${seed}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('finds the element at a position', () => {
    const bad = [];
    for (let seed = 1; seed <= 60; seed++) {
      const q = positionSkill.make(rng(seed));
      const m = /chu kì (\d), nhóm/.exec(q.prompt);
      const el = element(q.answer);
      if (!m || !el || el.period !== Number(m[1])) bad.push(seed);
      const group = /** @type {string} */ (/nhóm (\w+)A/.exec(q.prompt)?.[1]);
      const n = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'].indexOf(group) + 1;
      if (outerElectrons(q.answer) !== n) bad.push(seed);
    }
    expect(bad).toEqual([]);
  });

  it('gives an oxygen share that leads back to the atomic mass', () => {
    const bad = [];
    for (let seed = 1; seed <= 60; seed++) {
      const q = oxideMassSkill.make(rng(seed));
      const share = Number(/(\d+)\{,\}(\d+)\\%/.exec(q.prompt)?.slice(1, 3).join('.'));
      const group = /** @type {string} */ (/nhóm (\w+)A/.exec(q.prompt)?.[1]);
      const v = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'].indexOf(group) + 1;
      const r = v % 2 === 1 ? 2 : 1;
      const o = v % 2 === 1 ? v : v / 2;
      const mass = ((1600 * o) / share - 16 * o) / r;
      if (Math.round(tidy(mass, 6)) !== q.answer) bad.push(`${seed}: ${mass}`);
    }
    expect(bad).toEqual([]);
  });
});
