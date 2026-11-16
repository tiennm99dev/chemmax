import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { BENCH_REAGENTS, PLAN, SAMPLES, dealSamples, observe } from './engine.js';
import { REVIEW_SKILLS } from './skills.js';

describe('the sample bench', () => {
  it('deals each sample once', () => {
    const dealt = dealSamples(rng(3));
    expect([...dealt].sort()).toEqual(SAMPLES.map((s) => s.id).sort());
  });

  it('tells all four samples apart with the bench reagents', () => {
    const rows = SAMPLES.map((s) => BENCH_REAGENTS.map((r) => observe(s.id, r.id).text).join('|'));
    expect(new Set(rows).size).toBe(SAMPLES.length);
  });

  it('names one sample at each step of the plan', () => {
    const left = new Set(SAMPLES.map((s) => s.id));
    for (const [reagent, found] of PLAN) {
      const odd = [...left].filter(
        (id) => observe(id, reagent).text === observe(found, reagent).text,
      );
      expect(odd).toEqual([found]);
      left.delete(found);
    }
    expect(left.size).toBe(1);
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

  it('works out a saccharose silver question', () => {
    const rand = rng(1);
    const found = [];
    for (let i = 0; i < 200 && found.length === 0; i++) {
      const q = REVIEW_SKILLS[0].make(rand);
      if (q.prompt.includes('saccharose') && q.prompt.includes('$34{,}2$')) found.push(q.answer);
    }
    expect(found).toEqual([43.2]);
  });
});
