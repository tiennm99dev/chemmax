import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { strictTexFailures, texSpans } from '#lib/core/tex-check.js';
import { formulaParts } from '#lib/domain/formula.js';
import { ITEMS, buildQuiz, judgePick } from './engine.js';
import {
  REVIEW_SKILLS,
  centreChargeSkill,
  complexChargeSkill,
  silverSkill,
  titrationSkill,
} from './skills.js';

/** The plain numbers written in TeX in a prompt, in order. @param {string} text */
const numbers = (text) =>
  texSpans(text)
    .map((t) => t.replace(/\\,/g, '').replace('{,}', '.'))
    .filter((t) => /^-?[\d.]+$/.test(t))
    .map(Number);

describe('the colour and formula quiz', () => {
  it('asks about every item once, with the answer among four distinct options', () => {
    const quiz = buildQuiz();
    expect(quiz).toHaveLength(ITEMS.length);
    const bad = quiz.filter(
      (q) =>
        q.options.length !== 4 ||
        !q.options.includes(q.item) ||
        new Set(q.options.map((o) => (q.kind === 'colour' ? o.formula : o.colour))).size !== 4,
    );
    expect(bad).toEqual([]);
    expect(quiz.filter((q) => q.options[0] === q.item).length).toBeLessThan(ITEMS.length / 2);
    expect(new Set(quiz.map((q) => q.kind))).toEqual(new Set(['colour', 'formula']));
  });

  it('parses every formula and keeps the answer hidden until the last try', () => {
    for (const item of ITEMS) expect(() => formulaParts(item.formula)).not.toThrow();
    const q = buildQuiz()[0];
    const wrong = q.options.find((o) => o !== q.item);
    if (!wrong) throw new Error('no distractor');
    expect(judgePick(q, q.item, false).ok).toBe(true);
    expect(judgePick(q, wrong, false).text).not.toContain('Thực ra');
    expect(judgePick(q, wrong, true).text).toContain(q.item.colour);
  });
});

describe('the chapter review drill', () => {
  it('draws integer or short exact answers with TeX that renders', () => {
    const bad = [];
    /** @type {string[]} */
    const texts = [];
    for (const skill of REVIEW_SKILLS)
      for (let seed = 1; seed <= 40; seed++) {
        const q = skill.make(rng(seed));
        const decimals = String(q.answer).split('.')[1]?.length ?? 0;
        if (
          !Number.isFinite(q.answer) ||
          (q.answer === 0 && skill.id !== 'electron-3d-cua-ion') ||
          decimals > 3
        )
          bad.push([skill.id, seed, q.answer]);
        texts.push(q.prompt, ...q.steps, ...(q.hints ?? []));
      }
    expect(bad).toEqual([]);
    expect(strictTexFailures(texts)).toEqual([]);
  });

  it('computes the answers from the prompt', () => {
    const bad = [];
    for (let seed = 1; seed <= 40; seed++) {
      const t = titrationSkill.make(rng(seed));
      const [vFe, vMn] = numbers(t.prompt);
      if (Math.abs(t.answer - (5 * 0.02 * vMn) / vFe) > 1e-9) bad.push(['titration', seed]);

      const s = silverSkill.make(rng(seed));
      const [mass] = numbers(s.prompt);
      if (Math.abs(s.answer - (2 * mass) / 143.5) > 1e-9) bad.push(['silver', seed]);

      const c = complexChargeSkill.make(rng(seed));
      const charge = Number(/\^\{(\d)\+\}/.exec(c.prompt)?.[1]);
      const n = Number(/với (\d) phối tử/.exec(c.prompt)?.[1]);
      const ligandCharge = /NH_\{3\}|H_\{2\}O/.test(c.prompt.split('phối tử')[1]) ? 0 : -1;
      if (c.answer !== charge + n * ligandCharge) bad.push(['complex', seed]);

      const k = centreChargeSkill.make(rng(seed));
      if (!(k.answer === 2 || k.answer === 3)) bad.push(['centre', seed]);
    }
    expect(bad).toEqual([]);
  });
});
