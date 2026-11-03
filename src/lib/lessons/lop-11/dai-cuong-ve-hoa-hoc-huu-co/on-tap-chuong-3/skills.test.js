import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import { REVIEW_SKILLS, burningSkill, carbonSkill, factorSkill, isomerSkill } from './skills.js';

const SEEDS = Array.from({ length: 40 }, (_, i) => i + 1);

/** @param {import('#lib/core/drill.js').Skill} skill */
const questions = (skill) => SEEDS.map((seed) => skill.make(rng(seed)));

/** @param {string} tex */
const plainFormula = (tex) => tex.replace(/\\mathrm|[{}_]/g, '');

describe('chapter review skills', () => {
  it('always gives a positive answer, steps and hints', () => {
    const wrong = REVIEW_SKILLS.flatMap((skill) =>
      questions(skill).filter(
        (q) => !(q.answer > 0) || q.steps.length < 2 || (q.hints?.length ?? 0) < 1,
      ),
    );
    expect(wrong).toEqual([]);
  });

  it('finds a whole n for every formula, matching its molecular formula', () => {
    const wrong = questions(factorSkill).filter((q) => {
      const formula = /công thức phân tử là \$(.+)\$\.$/.exec(q.steps[1])?.[1] ?? '';
      const mass = Number(/m\/z lớn nhất là \$(\d+)\$/.exec(q.prompt)?.[1]);
      return !Number.isInteger(q.answer) || moleculeMassAmu(plainFormula(formula)) !== mass;
    });
    expect(wrong).toEqual([]);
  });

  it('gives carbon counts that agree with the percentage', () => {
    const wrong = questions(carbonSkill).filter((q) => {
      const [, percent] = /\$([\d{},]+)\\%\$/.exec(q.prompt) ?? [];
      const value = Number(percent.replace('{,}', '.'));
      const mass = Number(/phân tử khối là \$(\d+)\$/.exec(q.prompt)?.[1]);
      return Math.abs((value * mass) / 100 / 12 - q.answer) > 0.01;
    });
    expect(wrong).toEqual([]);
  });

  it('keeps 12 g of carbon for every 44 g of carbon dioxide', () => {
    const wrong = questions(burningSkill).filter((q) => {
      const value = Number((/\$([\d{},]+)\$ g/.exec(q.prompt)?.[1] ?? '').replace('{,}', '.'));
      return Math.abs((value * 12) / 44 - q.answer) > 1e-9;
    });
    expect(wrong).toEqual([]);
  });

  it('counts known isomers', () => {
    const answers = new Set(questions(isomerSkill).map((q) => q.answer));
    expect([...answers].every((a) => [2, 3, 5, 7].includes(a))).toBe(true);
  });
});
