import { describe, expect, it } from 'vitest';
import {
  BOND_REACTIONS,
  FORMATION_REACTIONS,
  bondRows,
  bondSteps,
  equationTex,
  equationText,
  formationLevels,
  formationRows,
  fromBonds,
  fromFormation,
  groupedText,
  judgeLevel,
  ladder,
  ladderMove,
  signedText,
  snapLevel,
} from './energy.js';

const byId = (/** @type {string} */ id) => {
  const r = FORMATION_REACTIONS.find((x) => x.id === id);
  if (!r) throw new Error(id);
  return r;
};
const bondById = (/** @type {string} */ id) => {
  const r = BOND_REACTIONS.find((x) => x.id === id);
  if (!r) throw new Error(id);
  return r;
};

describe('enthalpy change from enthalpies of formation', () => {
  it('matches the values worked by hand', () => {
    const expected = {
      ch4: -890.3,
      c2h6: -1559.7,
      no: 180.6,
      co: -283,
      'water-gas': 131.3,
      h2o: -571.6,
      hydrogenation: -137,
      no2: 66.4,
      nh3: -91.8,
      so3: -197.8,
      fes2: -3313.8,
    };
    const got = Object.fromEntries(FORMATION_REACTIONS.map((r) => [r.id, fromFormation(r)]));
    expect(got).toEqual(expected);
  });

  it('keeps the atoms of every reaction balanced', () => {
    const count = (/** @type {{ n: number, s: string }[]} */ terms) => {
      /** @type {Record<string, number>} */
      const atoms = {};
      for (const t of terms) {
        for (const [, el, k] of t.s.replace(/\(.*$/, '').matchAll(/([A-Z][a-z]?)(\d*)/g)) {
          atoms[el] = (atoms[el] ?? 0) + t.n * Number(k || 1);
        }
      }
      return atoms;
    };
    const bad = [...FORMATION_REACTIONS, ...BOND_REACTIONS]
      .filter((r) => {
        const a = count(r.left);
        const b = count(r.right);
        return Object.keys({ ...a, ...b }).some((el) => a[el] !== b[el]);
      })
      .map((r) => r.id);
    expect(bad).toEqual([]);
  });

  it('counts only the cards added so far', () => {
    const r = byId('c2h6');
    expect(formationRows(r)).toHaveLength(4);
    expect(formationLevels(r, [])).toEqual({ left: 0, right: 0 });
    expect(formationLevels(r, ['left-0', 'right-1'])).toEqual({ left: -84.7, right: -857.4 });
  });
});

describe('enthalpy change from bond energies', () => {
  it('matches the values worked by hand', () => {
    const expected = {
      hcl: -183,
      no: 225,
      nh3: -63,
      cracking: 80,
      hydrogenation: -134,
      ch4: -640,
      butane: -2017,
    };
    const got = Object.fromEntries(BOND_REACTIONS.map((r) => [r.id, fromBonds(r)]));
    expect(got).toEqual(expected);
  });

  it('merges a bond over several molecules', () => {
    const rows = bondRows(bondById('cracking'));
    expect(rows.find((x) => x.id === 'form-C–H')?.count).toBe(8);
    expect(rows.find((x) => x.id === 'break-C–H')?.count).toBe(8);
  });

  it('walks a ladder that ends at the enthalpy change', () => {
    const bad = [];
    for (const r of BOND_REACTIONS) {
      const steps = ladder(
        r,
        bondRows(r).map((x) => x.id),
      );
      if (steps.at(-1)?.to !== fromBonds(r)) bad.push(r.id);
    }
    expect(bad).toEqual([]);
  });

  it('counts the bonds of a half coefficient in moles', () => {
    expect(bondSteps(bondById('butane'))[0]).toContain('6,5 mol liên kết O=O');
  });

  it('forms bonds only after every bond is broken', () => {
    const r = bondById('hcl');
    expect(ladderMove(r, [], 'form-H–Cl').ok).toBe(false);
    expect(ladderMove(r, ['break-H–H'], 'form-H–Cl').text).toContain('Cl–Cl');
    expect(ladderMove(r, ['break-H–H', 'break-Cl–Cl'], 'form-H–Cl').ok).toBe(true);
    expect(ladderMove(r, [], 'break-H–H').text).toContain('+436');
  });
});

describe('writing', () => {
  it('writes a half coefficient the way the book does', () => {
    const r = byId('c2h6');
    expect(equationTex(r)).toContain('\\frac{7}{2}\\mathrm{O_{2}(g)}');
    expect(equationText(r)).toBe('C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O');
  });

  it('signs values and groups thousands', () => {
    expect(signedText(225)).toBe('+225');
    expect(signedText(-1559.7)).toBe('−1 559,7');
    expect(signedText(0)).toBe('0');
    expect(groupedText(1000)).toBe('1\u202f000');
  });
});

describe('drawing a product level', () => {
  it('snaps inside the board', () => {
    expect(snapLevel(-284, 50, 1000)).toBe(-300);
    expect(snapLevel(1400, 50, 1000)).toBe(1000);
    expect(Object.is(snapLevel(-10, 50, 1000), -0)).toBe(false);
  });

  it('judges side first, then distance', () => {
    expect(judgeLevel(0, -283, 30).ok).toBe(false);
    expect(judgeLevel(300, -283, 30).text).toContain('Sai phía');
    expect(judgeLevel(-100, -283, 30).text).toContain('chưa đủ xa');
    expect(judgeLevel(-600, -283, 30).text).toContain('xa quá');
    expect(judgeLevel(-300, -283, 30).ok).toBe(true);
  });
});
