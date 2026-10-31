import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  REVIEW_SKILLS,
  configTex,
  unpairedElectrons,
  isotopeShareSkill,
  particleSkill,
} from './skills.js';

describe('review drill skills', () => {
  it('counts unpaired electrons by Hund’s rule', () => {
    const got = [1, 2, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 26].map(unpairedElectrons);
    expect(got).toEqual([1, 0, 1, 2, 3, 2, 1, 0, 3, 2, 1, 0, 1, 0, 4]);
  });

  it('writes configurations in shell order', () => {
    expect(configTex(19)).toBe('\\mathrm{1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{1}}');
  });

  it('builds questions whose answers solve their own data', () => {
    const rand = rng(7);
    /** @type {string[]} */
    const bad = [];
    for (let i = 0; i < 200; i++) {
      const q = particleSkill.make(rand);
      const [total, diff] = [...q.prompt.matchAll(/\$(\d+)\$/g)].map((m) => Number(m[1]));
      const z = (total + diff) / 4;
      const n = total - 2 * z;
      if (q.answer !== z && q.answer !== n) bad.push(q.prompt);

      const s = isotopeShareSkill.make(rand);
      const [a1, a2] = [...s.prompt.matchAll(/\{\}\^\{(\d+)\}/g)].map((m) => Number(m[1]));
      const avg = Number(
        /khối trung bình của X là \$([\d{},]+)\$/.exec(s.prompt)?.[1].replace('{,}', '.'),
      );
      const x = s.answer;
      if (Math.abs((a1 * x + a2 * (100 - x)) / 100 - avg) > 1e-9) bad.push(s.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('gives every question a natural-number answer and a worked solution', () => {
    const rand = rng(3);
    /** @type {string[]} */
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      for (let i = 0; i < 50; i++) {
        const q = skill.make(rand);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.steps.length === 0) bad.push(q.prompt);
      }
    }
    expect(bad).toEqual([]);
  });
});
