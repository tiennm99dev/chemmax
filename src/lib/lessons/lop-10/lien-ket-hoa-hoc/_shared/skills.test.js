import { describe, expect, it } from 'vitest';
import { readNumber } from '#lib/core/decimal.js';
import { rng } from '#lib/core/drill.js';
import { formatNumber } from '#lib/core/number-format.js';
import { REVIEW_SKILLS, deltaChiSkill, ionElectronsSkill, polarCountSkill } from './skills.js';

describe('review skills', () => {
  it('draws usable questions from every skill', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(7);
      for (let i = 0; i < 40; i++) {
        const q = skill.make(rand);
        if (!q || !Number.isFinite(q.answer) || q.answer < 0 || !q.prompt) bad.push(skill.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('reads back the answer as a learner types it, with a comma', () => {
    const rand = rng(11);
    const bad = [];
    for (let i = 0; i < 40; i++) {
      const q = deltaChiSkill.make(rand);
      if (q && readNumber(formatNumber(q.answer)) !== q.answer) bad.push(q.answer);
    }
    expect(bad).toEqual([]);
  });

  it('gives an ion the electrons of its charge', () => {
    const rand = rng(3);
    const bad = [];
    for (let i = 0; i < 40; i++) {
      const q = ionElectronsSkill.make(rand);
      if (q && ![10, 18].includes(q.answer)) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('counts between 0 and 4 polar bonds', () => {
    const rand = rng(5);
    const bad = [];
    for (let i = 0; i < 40; i++) {
      const q = polarCountSkill.make(rand);
      if (q && (q.answer < 0 || q.answer > 4)) bad.push(q.answer);
    }
    expect(bad).toEqual([]);
  });
});
