import { describe, expect, it } from 'vitest';
import {
  NAMES,
  TARGETS,
  answerBonds,
  checkStructure,
  condensed,
  cycleBond,
  placeAtoms,
  target,
} from './engine.js';

describe('placeAtoms', () => {
  it('keeps every atom on the board', () => {
    for (const t of TARGETS) {
      const atoms = placeAtoms(t);
      expect(atoms).toHaveLength(t.heavy.length + t.hydrogens);
      for (const a of atoms) {
        expect(a.x).toBeGreaterThanOrEqual(20);
        expect(a.x).toBeLessThanOrEqual(340);
        expect(a.y).toBeGreaterThanOrEqual(20);
        expect(a.y).toBeLessThanOrEqual(240);
      }
    }
  });
});

describe('answers', () => {
  it('are valid structures with a known name', () => {
    for (const t of TARGETS) {
      const atoms = placeAtoms(t);
      t.answers.forEach((_, k) => {
        const bonds = answerBonds(t, atoms, k);
        expect(checkStructure(atoms, bonds).status, t.formula).toBe('ok');
        const text = condensed(atoms, bonds);
        expect(text && NAMES[text], `${t.formula} ${text}`).toBeTruthy();
      });
    }
  });

  it('tells the two structures of C2H6O apart', () => {
    const t = target('c2h6o');
    const atoms = placeAtoms(t);
    expect(condensed(atoms, answerBonds(t, atoms, 0))).toBe('CH3–CH2–OH');
    expect(condensed(atoms, answerBonds(t, atoms, 1))).toBe('CH3–O–CH3');
  });

  it('writes ethylene with its double bond and methane on its own', () => {
    for (const [id, text] of [
      ['c2h4', 'CH2=CH2'],
      ['ch4', 'CH4'],
      ['ch3cl', 'CH3–Cl'],
      ['ch4o', 'CH3–OH'],
      ['c3h8', 'CH3–CH2–CH3'],
    ]) {
      const t = target(id);
      const atoms = placeAtoms(t);
      expect(condensed(atoms, answerBonds(t, atoms))).toBe(text);
    }
  });
});

describe('cycleBond', () => {
  const atoms = placeAtoms(target('ch4o'));
  it('goes none, single, double, none between C and O', () => {
    let bonds = cycleBond(atoms, [], 0, 1);
    expect(bonds).toEqual([{ a: 0, b: 1, order: 1 }]);
    bonds = cycleBond(atoms, bonds, 1, 0);
    expect(bonds).toEqual([{ a: 0, b: 1, order: 2 }]);
    expect(cycleBond(atoms, bonds, 0, 1)).toEqual([]);
  });

  it('never makes a double bond to hydrogen', () => {
    const bonds = cycleBond(atoms, [], 0, 2);
    expect(cycleBond(atoms, bonds, 0, 2)).toEqual([]);
  });
});

describe('checkStructure', () => {
  const t = target('c2h6');
  const atoms = placeAtoms(t);
  it('reports atoms with too many or too few bonds', () => {
    expect(checkStructure(atoms, []).status).toBe('missing');
    const bonds = answerBonds(t, atoms);
    const extra = [...bonds.filter((b) => !(b.a === 0 && b.b === 1)), { a: 0, b: 1, order: 2 }];
    expect(checkStructure(atoms, /** @type {any} */ (extra)).status).toBe('over');
  });

  it('rejects two separate molecules', () => {
    // C=C with two H each, and the last two hydrogens bonded to each other
    const bonds = /** @type {import('./engine.js').Bond[]} */ ([
      { a: 0, b: 1, order: 2 },
      { a: 0, b: 2, order: 1 },
      { a: 0, b: 3, order: 1 },
      { a: 1, b: 4, order: 1 },
      { a: 1, b: 5, order: 1 },
      { a: 6, b: 7, order: 1 },
    ]);
    expect(checkStructure(atoms, bonds).status).toBe('split');
  });
});
