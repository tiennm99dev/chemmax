import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, shuffle, withUnit } from '#lib/core/drill.js';
import { REACTIONS, ROUND_SIZE, allCases, roundFrom, shiftOf } from './engine.js';
import { REVIEW_SKILLS } from './skills.js';

const byId = (/** @type {string} */ id) => {
  const r = REACTIONS.find((x) => x.id === id);
  if (!r) throw new Error(id);
  return r;
};

describe('equilibrium shift rules', () => {
  it('follows the book on the ammonia equilibrium', () => {
    const nh3 = byId('nh3');
    expect(shiftOf(nh3, { kind: 'heat' })).toBe('nghich');
    expect(shiftOf(nh3, { kind: 'compress' })).toBe('thuan');
    expect(shiftOf(nh3, { kind: 'expand' })).toBe('nghich');
    expect(shiftOf(nh3, { kind: 'catalyst' })).toBe('khong');
    expect(shiftOf(nh3, { kind: 'remove', species: nh3.species[1] })).toBe('thuan');
  });

  it('ignores pressure when both sides hold the same moles of gas', () => {
    expect(shiftOf(byId('hi'), { kind: 'compress' })).toBe('khong');
  });

  it('counts gas on the right side too, and ignores added solid', () => {
    const lime = byId('caco3');
    expect(shiftOf(lime, { kind: 'heat' })).toBe('thuan');
    expect(shiftOf(lime, { kind: 'compress' })).toBe('nghich');
    expect(shiftOf(lime, { kind: 'add', species: lime.species[0] })).toBe('khong');
  });

  it('builds rounds holding all three answers', () => {
    const all = allCases();
    const bad = [];
    for (const seed of [1, 2, 3, 4, 5, 6]) {
      const round = roundFrom(shuffle(rng(seed), all));
      const kinds = new Set(round.map((c) => c.shift));
      if (round.length !== ROUND_SIZE || kinds.size !== 3) bad.push(seed);
    }
    expect(bad).toEqual([]);
  });

  it('gives each case a question and a reason', () => {
    const bad = allCases().filter((c) => !c.text || !c.why);
    expect(bad).toEqual([]);
  });
});

describe('chapter review skills', () => {
  it('accepts every answer as the board prints it, unit included', () => {
    const bad = [];
    for (const skill of REVIEW_SKILLS) {
      const rand = rng(17);
      for (let i = 0; i < 100; i++) {
        const q = skill.make(rand);
        const printed = answerText(q.answer);
        if (!(q.answer > 0) || /e/i.test(printed)) bad.push(q.prompt);
        if (readAnswer(q, withUnit(printed, q.unit), readNumber) !== q.answer) bad.push(q.prompt);
      }
    }
    expect(bad).toEqual([]);
  });

  it('computes the book cases right', () => {
    const acids = [];
    const rand = rng(3);
    for (let i = 0; i < 60; i++) {
      const q = REVIEW_SKILLS[1].make(rand);
      const m = /\$([\d{},]+)\$ M/.exec(q.prompt);
      const c = Number((m?.[1] ?? '').replace('{,}', '.'));
      const protons = q.prompt.includes('H_2SO_4') ? 2 : 1;
      if (Math.abs(-Math.log10(c * protons) - q.answer) > 1e-9) acids.push(q.prompt);
    }
    expect(acids).toEqual([]);
  });
});
