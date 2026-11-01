import { describe, expect, it } from 'vitest';
import { balance, parseEquation } from '#lib/domain/equation.js';
import { parseFormula } from '#lib/domain/formula.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  OX_CASES,
  REACTIONS,
  allSpecies,
  atomTokens,
  bookText,
  changeOf,
  compareElectrons,
  halfElectrons,
  halfTex,
  onText,
  oxSum,
  oxSumTex,
  scheme,
  solveOx,
  totalElectrons,
} from './redox.js';

/**
 * The change in the total oxidation number of one element across a balanced equation.
 * @param {import('./redox.js').Reaction} r
 * @param {string} el
 */
function netChange(r, el) {
  const n = r.left.length;
  let change = 0;
  allSpecies(r).forEach((s, i) => {
    const count = parseFormula(s.formula).atoms[el] ?? 0;
    const sign = i < n ? -1 : 1;
    change += sign * r.final[i] * count * (s.ox[el] ?? 0);
  });
  return change;
}

describe('redox reactions', () => {
  it('stores the coefficients the balancer finds', () => {
    const wrong = REACTIONS.filter((r) => {
      const result = balance(parseEquation(scheme(r)));
      return !result.ok || result.coefficients.join() !== r.final.join();
    }).map((r) => r.id);
    expect(wrong).toEqual([]);
  });

  it('prints balanced book equations', () => {
    const wrong = REACTIONS.filter((r) => !isBalancedText(bookText(r))).map((r) => r.id);
    expect(wrong).toEqual([]);
  });

  it('gives neutral species oxidation numbers that add up to zero', () => {
    const bad = [];
    for (const r of REACTIONS) {
      for (const s of allSpecies(r)) {
        const { atoms } = parseFormula(s.formula);
        const sum = Object.entries(atoms).reduce((t, [el, k]) => t + k * s.ox[el], 0);
        if (sum !== 0) bad.push(s.formula);
      }
    }
    expect(bad).toEqual([]);
  });

  it('moves oxidation numbers only for the two half-reactions, by the same electrons', () => {
    const bad = [];
    for (const r of REACTIONS) {
      const total = totalElectrons(r);
      if (r.gain.times * halfElectrons(r.gain) !== total) bad.push(`${r.id}: electrons`);
      if (netChange(r, r.lose.el) !== total) bad.push(`${r.id}: lose`);
      if (netChange(r, r.gain.el) !== -total) bad.push(`${r.id}: gain`);
      const elements = new Set(allSpecies(r).flatMap((s) => Object.keys(s.ox)));
      for (const el of elements) {
        if (el !== r.lose.el && el !== r.gain.el && netChange(r, el) !== 0)
          bad.push(`${r.id}: ${el}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('names as reducer and oxidant the reactants holding the changing atoms', () => {
    const bad = [];
    for (const r of REACTIONS) {
      const reducer = r.left.find((s) => s.formula === r.reducer);
      const oxidant = r.left.find((s) => s.formula === r.oxidant);
      if (reducer?.ox[r.lose.el] !== r.lose.from) bad.push(`${r.id}: reducer`);
      if (oxidant?.ox[r.gain.el] !== r.gain.from) bad.push(`${r.id}: oxidant`);
    }
    expect(bad).toEqual([]);
  });

  it('seeds the multipliers on the species of the final equation', () => {
    /** @type {string[]} */
    const bad = [];
    for (const r of REACTIONS) {
      const seed = parseEquation(r.seed);
      const list = [...seed.reactants, ...seed.products];
      list.forEach((s, i) => {
        if ((s.coefficient ?? 1) > 1 && s.coefficient !== r.final[i]) bad.push(r.id);
      });
    }
    expect(bad).toEqual([]);
  });

  it('writes half-reactions the way the book does', () => {
    const mg = REACTIONS.find((r) => r.id === 'mg-hno3');
    const kmn = REACTIONS.find((r) => r.id === 'kmno4-hcl');
    if (!mg || !kmn) throw new Error('missing reaction');
    expect(halfTex(mg.lose, 'lose', 2)).toBe(
      '\\overset{0}{\\mathrm{Mg}} \\rightarrow \\overset{+2}{\\mathrm{Mg}} + 2e',
    );
    expect(halfTex(mg.gain, 'gain')).toBe(
      '\\overset{+5}{\\mathrm{N}} + \\,?\\,e \\rightarrow \\overset{+2}{\\mathrm{N}}',
    );
    expect(halfTex(kmn.lose, 'lose', 2)).toBe(
      '2\\overset{-1}{\\mathrm{Cl}} \\rightarrow \\overset{0}{\\mathrm{Cl_{2}}} + 2e',
    );
  });

  it('marks only the atoms whose oxidation number changes', () => {
    const r = REACTIONS.find((x) => x.id === 'mg-hno3');
    if (!r) throw new Error('missing reaction');
    expect(changeOf(r, 'N', 5, 'left')).toBe('gain');
    expect(changeOf(r, 'N', 5, 'right')).toBe(null);
    expect(changeOf(r, 'N', 2, 'right')).toBe('gain');
    expect(changeOf(r, 'Mg', 2, 'right')).toBe('lose');
    expect(changeOf(r, 'O', -2, 'left')).toBe(null);
  });

  it('splits a formula into atoms and brackets with their subscripts', () => {
    const tokens = atomTokens({ formula: 'Mg(NO3)2', ox: { Mg: 2, N: 5, O: -2 } });
    expect(tokens.map((t) => `${t.text}${t.sub}`)).toEqual(['Mg', '(', 'N', 'O3', ')2']);
    expect(tokens[3].on).toBe(-2);
    expect(tokens[1].el).toBeUndefined();
  });

  it('accepts only the smallest multipliers as the final choice', () => {
    const r = REACTIONS.find((x) => x.id === 'mg-hno3');
    if (!r) throw new Error('missing reaction');
    expect(compareElectrons(r, 3, 2)).toEqual({ given: 6, taken: 6, equal: true, lowest: true });
    expect(compareElectrons(r, 6, 4).lowest).toBe(false);
    expect(compareElectrons(r, 6, 4).equal).toBe(true);
    expect(compareElectrons(r, 2, 2).equal).toBe(false);
  });
});

describe('oxidation number cases', () => {
  it('solves the cases as the book gives them', () => {
    const answers = Object.fromEntries(OX_CASES.map((c) => [c.formula, solveOx(c)]));
    expect(answers).toEqual({
      H2SO4: 6,
      Fe2O3: 3,
      SO2: 4,
      H2S: -2,
      NH3: -3,
      HNO3: 5,
      KMnO4: 7,
      NaClO: 1,
      K2Cr2O7: 6,
      CH4: -4,
      'Fe(OH)2': 2,
      'Al2(SO4)3': 6,
      'SO4^2-': 6,
      'NH4^+': -3,
      'NO3^-': 5,
      Cl2: 0,
    });
  });

  it('sums to the charge of the species at the solved value', () => {
    const bad = OX_CASES.filter((c) => oxSum(c, solveOx(c)) !== parseFormula(c.formula).charge).map(
      (c) => c.formula,
    );
    expect(bad).toEqual([]);
  });

  it('writes the sum and the signs the way the book does', () => {
    const c = OX_CASES[0];
    expect(oxSumTex(c, null)).toBe('2 \\cdot (+1) + 1 \\cdot x + 4 \\cdot (-2)');
    expect(onText(6)).toBe('+6');
    expect(onText(0)).toBe('0');
    expect(onText(-3)).toBe('−3');
  });
});
