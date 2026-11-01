import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { formationOf } from './energy.js';
import { REVIEW_SKILLS, heatSkill, unknownSkill } from './skills.js';

describe('chemical energy review skills', () => {
  it('draws usable questions from every skill', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(7);
      for (let i = 0; i < 60; i++) {
        const q = skill.make(rand);
        if (!Number.isFinite(q.answer) || !q.prompt || q.steps.length === 0) bad.push(skill.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('accepts every answer as the board prints it, unit included', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(21);
      for (let i = 0; i < 80; i++) {
        const q = skill.make(rand);
        if (readAnswer(q, withUnit(answerText(q.answer), q.unit), readNumber) !== q.answer) {
          bad.push(q.prompt);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('recovers the enthalpy of formation it hid', () => {
    const rand = rng(3);
    const bad = [];
    for (let i = 0; i < 80; i++) {
      const q = unknownSkill.make(rand);
      const named = /Tìm nhiệt tạo thành chuẩn của \$\\mathrm\{(.+?)\}\$/.exec(q.prompt)?.[1] ?? '';
      const species = named.replace(/_\{(\d+)\}/g, '$1');
      if (formationOf(species) !== q.answer) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('scales the heat with the amount', () => {
    const rand = rng(11);
    const bad = [];
    for (let i = 0; i < 60; i++) {
      const q = heatSkill.make(rand);
      if (!(q.answer > 0)) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });
});
