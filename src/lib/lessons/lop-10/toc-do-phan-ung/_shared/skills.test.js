import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { REVIEW_SKILLS, compressionSkill, temperatureSkill } from './skills.js';

describe('reaction rate review skills', () => {
  it('draws usable questions from every skill', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(11);
      for (let i = 0; i < 80; i++) {
        const q = skill.make(rand);
        if (!(q.answer > 0) || !q.prompt || q.steps.length === 0) bad.push(skill.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('accepts every answer as the board prints it, unit included', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(29);
      for (let i = 0; i < 120; i++) {
        const q = skill.make(rand);
        const printed = answerText(q.answer);
        if (/e/i.test(printed)) bad.push(printed);
        if (readAnswer(q, withUnit(printed, q.unit), readNumber) !== q.answer) {
          bad.push(`${q.prompt} => ${printed}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('never shows a negative concentration in a rate question', () => {
    const rand = rng(5);
    const bad = [];
    for (let i = 0; i < 120; i++) {
      const q = REVIEW_SKILLS[0].make(rand);
      if (/\$-/.test(q.prompt)) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('raises the volume factor to the total order of the reaction', () => {
    const rand = rng(1);
    const bad = [];
    for (let i = 0; i < 60; i++) {
      const q = compressionSkill.make(rand);
      const times = Number(/giảm \$(\d)\$ lần/.exec(q.prompt)?.[1]);
      const total = q.prompt.includes('H_2') ? 2 : 3;
      if (q.answer !== times ** total) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('lowers the temperature to a realistic value', () => {
    const rand = rng(8);
    const bad = [];
    for (let i = 0; i < 60; i++) {
      const q = temperatureSkill.make(rand);
      const [, t1] = /ở \$(\d+)/.exec(q.prompt) ?? [];
      if (q.answer >= Number(t1) || q.answer < 15) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });
});
