import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { REVIEW_SKILLS, mixtureSkill, oxNumberSkill } from './skills.js';

const firstNumber = (/** @type {string} */ prompt) => {
  const m = /\$([\d ,{}\\]+)\$ g/.exec(prompt);
  if (!m) throw new Error(prompt);
  return Number(m[1].replace(/[{}\\ ]/g, '').replace(',', '.'));
};

describe('halogen review skills', () => {
  it('draws usable questions from every skill', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(13);
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
      const rand = rng(31);
      for (let i = 0; i < 120; i++) {
        const q = skill.make(rand);
        if (readAnswer(q, withUnit(answerText(q.answer), q.unit), readNumber) !== q.answer) {
          bad.push(q.prompt);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('finds the oxidation number that makes the molecule neutral', () => {
    const expected = /** @type {Record<string, number>} */ ({
      HClO: 1,
      HClO_2: 3,
      HClO_3: 5,
      HClO_4: 7,
      NaClO: 1,
      KClO_3: 5,
      HBrO: 1,
      KBrO_3: 5,
      HIO_3: 5,
      NaIO_4: 7,
    });
    const rand = rng(3);
    const wrong = [];
    for (let i = 0; i < 80; i++) {
      const q = oxNumberSkill.make(rand);
      const formula = /\\mathrm\{([^}]+)\}/.exec(q.prompt)?.[1] ?? '';
      if (expected[formula] !== q.answer) wrong.push(formula);
    }
    expect(wrong).toEqual([]);
  });

  it('builds the mixture so that its stated percentage is the real one', () => {
    const rand = rng(9);
    const wrong = [];
    for (let i = 0; i < 80; i++) {
      const q = mixtureSkill.make(rand);
      const total = firstNumber(q.prompt);
      const solid = Number(
        (/thu được \$([\d{},]+)\$ g/.exec(q.prompt)?.[1] ?? '')
          .replace(/[{}]/g, '')
          .replace(',', '.'),
      );
      const percent = ((solid / 143.5) * 58.5 * 100) / total;
      if (Math.abs(percent - q.answer) > 1e-6) wrong.push(q.prompt);
    }
    expect(wrong).toEqual([]);
  });
});
