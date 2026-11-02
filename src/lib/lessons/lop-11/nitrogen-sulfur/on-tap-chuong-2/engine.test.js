import { describe, expect, it } from 'vitest';
import { answerText, readNumber } from '#lib/core/decimal.js';
import { readAnswer, rng, withUnit } from '#lib/core/drill.js';
import { formulaParts } from '#lib/domain/formula.js';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import {
  BLANKS,
  MAPS,
  blankSets,
  blanksFor,
  clueText,
  edgesAt,
  nodeOf,
  optionsFor,
  whyWrong,
} from './engine.js';
import { REVIEW_SKILLS } from './skills.js';

const ALL = [MAPS.n, MAPS.s];

describe('conversion maps', () => {
  it('writes every equation balanced, from the substance at the tail to the one at the head', () => {
    const bad = [];
    for (const map of ALL) {
      for (const edge of map.edges) {
        if (!edge.equation) {
          if (!edge.tex) bad.push(`${edge.from}-${edge.to}: no equation`);
          continue;
        }
        const { left, right } = terms(edge.equation);
        if (!isBalancedText(edge.equation)) bad.push(edge.equation);
        const hasSide = (/** @type {typeof left} */ side, /** @type {string} */ id) =>
          side.some((t) => t.formula === nodeOf(map, id).formula);
        if (!hasSide(left, edge.from) || !hasSide(right, edge.to)) bad.push(edge.equation);
      }
    }
    expect(bad).toEqual([]);
  });

  it('gives each substance a formula the drawing can parse and two distinct wrong choices', () => {
    const bad = [];
    for (const map of ALL) {
      for (const node of map.nodes) {
        const options = [node.formula, ...node.traps.map((t) => t.formula)];
        if (new Set(options).size !== 3) bad.push(node.id);
        for (const formula of options) {
          try {
            formulaParts(formula);
          } catch {
            bad.push(formula);
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('never hides two substances joined by an arrow', () => {
    const bad = [];
    for (const map of ALL) {
      const sets = blankSets(map);
      if (sets.length === 0) bad.push(map.id);
      for (const set of sets) {
        for (const edge of map.edges) {
          if (set.includes(edge.from) && set.includes(edge.to)) bad.push(set.join());
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('picks a full set of blanks for any seed', () => {
    const bad = [];
    for (const map of ALL) {
      for (let seed = 1; seed < 40; seed++) {
        if (new Set(blanksFor(map, seed)).size !== BLANKS) bad.push(seed);
      }
    }
    expect(bad).toEqual([]);
  });

  it('offers the right formula among the options and explains the wrong ones', () => {
    const bad = [];
    for (const map of ALL) {
      for (const node of map.nodes) {
        const options = optionsFor(node, 7);
        if (!options.includes(node.formula)) bad.push(node.id);
        for (const option of options) {
          const why = whyWrong(node, option);
          if (option === node.formula ? why !== null : !why) bad.push(`${node.id}:${option}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('hides the substance in an arrow clue only while it is blank', () => {
    const edge = edgesAt(MAPS.n, 'nh3')[0];
    expect(clueText(MAPS.n, edge, ['nh3'])).toBe('N₂ +H₂ (Fe, t°, p) → ?');
    expect(clueText(MAPS.n, edge, [])).toBe('N₂ +H₂ (Fe, t°, p) → NH₃');
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
      }
    }
    expect(bad).toEqual([]);
  });

  it('computes the gas from copper by the equation of each acid', () => {
    const rand = rng(5);
    const bad = [];
    for (let i = 0; i < 80; i++) {
      const q = REVIEW_SKILLS[0].make(rand);
      const mass = Number(/\$([\d{},]+)\$ g Cu/.exec(q.prompt)?.[1].replace('{,}', '.'));
      const copper = mass / 64;
      const gas = q.prompt.includes('\\mathrm{NO_2}')
        ? copper * 2
        : q.prompt.includes('\\mathrm{NO}')
          ? (copper * 2) / 3
          : copper;
      if (Math.abs(gas * 24.79 - q.answer) > 1e-6) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });

  it('computes acid from sulfur and pyrite by conservation of sulfur', () => {
    const rand = rng(9);
    const bad = [];
    for (let i = 0; i < 80; i++) {
      const q = REVIEW_SKILLS[2].make(rand);
      const mass = Number(/\$([\d{},]+)\$ tấn/.exec(q.prompt)?.[1].replace('{,}', '.'));
      const percent = Number(/\$(\d+)\\%\$/.exec(q.prompt)?.[1]);
      const perTon = q.prompt.includes('FeS_2') ? (2 * 98) / 120 : 98 / 32;
      if (Math.abs((mass * perTon * percent) / 100 - q.answer) > 1e-6) bad.push(q.prompt);
    }
    expect(bad).toEqual([]);
  });
});
