import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import { ester } from '../_shared/ester.js';
import { PUZZLES, judge, massesOf, puzzleText, solutions, texEquation } from './engine.js';
import { REVIEW_SKILLS } from './skills.js';

describe('find the ester from its hydrolysis', () => {
  it('has exactly one answer for every puzzle, the ester meant', () => {
    const bad = [];
    for (const p of PUZZLES) {
      const found = solutions(p).map((e) => e.name);
      const meant = ester(p.acid, p.alcohol).name;
      if (found.length !== 1 || found[0] !== meant) bad.push([meant, found]);
      if (!judge(p, p.acid, p.alcohol).ok) bad.push([meant, 'judge']);
      if (!puzzleText(p)) bad.push([meant, 'text']);
    }
    expect(bad).toEqual([]);
  });

  it('works out the saponification masses', () => {
    const acrylate = PUZZLES.find((p) => p.kind === 'mass' && p.acid === 'acrylate');
    if (!acrylate) throw new Error('missing puzzle');
    expect(massesOf(acrylate)).toEqual({ ester: 8.6, salt: 9.4 });
  });

  it('explains a wrong alcohol and a wrong acid part', () => {
    const p = PUZZLES[0];
    const wrongAlcohol = judge(p, 'acetate', 'methyl');
    expect(wrongAlcohol.ok).toBe(false);
    expect(wrongAlcohol.text).toContain('methanol');
    expect(judge(p, 'formate', 'ethyl').ok).toBe(false);
  });

  it('writes balanced equations as TeX', () => {
    const e = ester('acetate', 'ethyl');
    expect(isBalancedText(e.baseEquation)).toBe(true);
    expect(texEquation(e.baseEquation)).toBe(
      '\\mathrm{CH_{3}COOC_{2}H_{5}} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_{3}COONa} + \\mathrm{C_{2}H_{5}OH}',
    );
  });
});

describe('chapter review skills', () => {
  it('accepts every answer as the board prints it, unit included', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(23);
      for (let i = 0; i < 100; i++) {
        const q = skill.make(rand);
        const printed = answerText(q.answer);
        if (!(q.answer > 0) || /e/i.test(printed)) bad.push(q.prompt);
        if (readAnswer(q, withUnit(printed, q.unit), readNumber) !== q.answer) bad.push(q.prompt);
        if (/\d\.\d/.test(q.prompt)) bad.push(['dot', q.prompt]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('ends every worked solution on the answer', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(5);
      for (let i = 0; i < 30; i++) {
        const q = skill.make(rand);
        const last = q.steps[q.steps.length - 1];
        const shown = answerText(q.answer).replace(',', '{,}');
        if (!last.includes(shown)) bad.push([skill.id, last, shown]);
      }
    }
    expect(bad).toEqual([]);
  });
});
