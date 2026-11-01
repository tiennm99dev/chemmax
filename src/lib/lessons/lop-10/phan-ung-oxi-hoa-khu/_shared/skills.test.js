import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { formatNumber } from '#lib/core/number-format.js';
import { REVIEW_SKILLS, gasMolSkill, oxNumberSkill } from './skills.js';

describe('redox review skills', () => {
  it('draws usable questions from every skill', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(7);
      for (let i = 0; i < 40; i++) {
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
      for (let i = 0; i < 60; i++) {
        const q = skill.make(rand);
        if (readAnswer(q, withUnit(answerText(q.answer), q.unit), readNumber) !== q.answer) {
          bad.push(q.prompt);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('reads back a signed oxidation number as a learner types it', () => {
    const rand = rng(11);
    const bad = [];
    for (let i = 0; i < 40; i++) {
      const q = oxNumberSkill.make(rand);
      if (readNumber(formatNumber(q.answer)) !== q.answer) bad.push(q.answer);
    }
    expect(bad).toEqual([]);
  });

  it('gets the gas amount from the electron balance', () => {
    const rand = rng(3);
    const bad = [];
    for (let i = 0; i < 40; i++) {
      const q = gasMolSkill.make(rand);
      if (readNumber(formatNumber(q.answer, 3)) !== q.answer) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });
});
