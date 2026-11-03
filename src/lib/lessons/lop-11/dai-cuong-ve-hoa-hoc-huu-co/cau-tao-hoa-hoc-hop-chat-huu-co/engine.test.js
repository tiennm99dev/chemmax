import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import {
  FORMS,
  TARGETS,
  allIsomers,
  bondsOf,
  canonical,
  condensedFormula,
  condensedParts,
  hydrogensOf,
  isComplete,
  kindOf,
  placeAtom,
  removeAtom,
  subscriptText,
  treeOf,
} from './engine.js';

const C4 = TARGETS[0];
const C4O = TARGETS[5];

/**
 * Builds a board from row,col strings.
 * @param {Record<string, 'C' | 'O'>} board
 */
const condensedOf = (board) => condensedFormula(treeOf(board));

describe('the isomer counts', () => {
  it('match the count every target states', () => {
    const wrong = TARGETS.filter((t) => allIsomers(t).length !== t.total);
    expect(wrong.map((t) => t.id)).toEqual([]);
  });

  it('use the atoms of the molecular formula', () => {
    const wrong = TARGETS.filter((t) => {
      const f = parseFormula(t.formula).atoms;
      return (f.C ?? 0) !== t.carbons || (f.O ?? 0) !== t.oxygens || f.H !== 2 * t.carbons + 2;
    });
    expect(wrong.map((t) => t.id)).toEqual([]);
  });
});

describe('placing atoms', () => {
  it('starts anywhere, then only next to the chain', () => {
    const one = placeAtom({}, '2,2', 'C', C4);
    expect('board' in one).toBe(true);
    expect('reason' in placeAtom({ '2,2': 'C' }, '0,0', 'C', C4)).toBe(true);
    expect('board' in placeAtom({ '2,2': 'C' }, '2,3', 'C', C4)).toBe(true);
  });

  it('refuses a cell that would close a ring', () => {
    const board = /** @type {const} */ ({ '1,1': 'C', '1,2': 'C', '2,2': 'C' });
    expect('reason' in placeAtom(board, '2,1', 'C', C4)).toBe(true);
  });

  it('refuses more atoms than the formula has', () => {
    const board = /** @type {const} */ ({ '2,1': 'C', '2,2': 'C', '2,3': 'C', '2,4': 'C' });
    expect('reason' in placeAtom(board, '2,5', 'C', C4)).toBe(true);
    expect('reason' in placeAtom({ '2,1': 'O' }, '2,2', 'O', C4O)).toBe(true);
  });

  it('refuses a third bond on oxygen', () => {
    const board = /** @type {const} */ ({ '2,1': 'C', '2,2': 'O', '2,3': 'C' });
    expect('reason' in placeAtom(board, '1,2', 'C', C4O)).toBe(true);
  });

  it('removes only the ends of a chain', () => {
    const board = /** @type {const} */ ({ '2,1': 'C', '2,2': 'C', '2,3': 'C' });
    expect('reason' in removeAtom(board, '2,2')).toBe(true);
    const r = removeAtom(board, '2,3');
    expect('board' in r && Object.keys(r.board).length).toBe(2);
  });

  it('knows when every atom is placed and lists the bonds', () => {
    const board = /** @type {const} */ ({ '2,1': 'C', '2,2': 'C', '2,3': 'C', '1,2': 'C' });
    expect(isComplete(board, C4)).toBe(true);
    expect(bondsOf(board)).toHaveLength(3);
  });
});

describe('the same substance, however it is drawn', () => {
  it('treats a bent chain and a turned one as the same isomer', () => {
    const straight = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C' });
    const bent = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '1,1': 'C', '0,1': 'C' });
    expect(canonical(treeOf(straight))).toBe(canonical(treeOf(bent)));
  });

  it('tells a branched chain from a straight one', () => {
    const straight = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C' });
    const branched = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'C' });
    expect(canonical(treeOf(straight))).not.toBe(canonical(treeOf(branched)));
  });

  it('tells position isomers apart', () => {
    const one = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'O' });
    const two = /** @type {const} */ ({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'O' });
    expect(canonical(treeOf(one))).not.toBe(canonical(treeOf(two)));
  });
});

describe('condensed structural formulas', () => {
  it('writes alkanes the book way', () => {
    expect(condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C' })).toBe('CH3–CH2–CH2–CH3');
    expect(condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'C' })).toBe('CH3–CH(CH3)–CH3');
    expect(
      condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C', '1,1': 'C', '3,1': 'C' }),
    ).toBe('CH3–C(CH3)2–CH2–CH3');
  });

  it('writes alcohols and ethers the book way', () => {
    expect(condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'O' })).toBe('CH3–CH2–OH');
    expect(condensedOf({ '2,0': 'C', '2,1': 'O', '2,2': 'C' })).toBe('CH3–O–CH3');
    expect(condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'O' })).toBe('CH3–CH(OH)–CH3');
    expect(condensedOf({ '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'C', '3,1': 'O' })).toBe(
      'CH3–C(CH3)(OH)–CH3',
    );
    expect(condensedOf({ '2,0': 'C', '2,1': 'O', '2,2': 'C', '2,3': 'C' })).toBe('CH3–CH2–O–CH3');
  });

  it('gives each isomer of C4H10O its own formula on a real board', () => {
    /** @type {Record<string, 'C' | 'O'>[]} */
    const boards = [
      { '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C', '2,4': 'O' },
      { '2,0': 'C', '2,1': 'C', '2,2': 'C', '2,3': 'C', '1,2': 'O' },
      { '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'C', '2,3': 'O' },
      { '2,0': 'C', '2,1': 'C', '2,2': 'C', '1,1': 'C', '3,1': 'O' },
      { '2,0': 'C', '2,1': 'O', '2,2': 'C', '2,3': 'C', '2,4': 'C' },
      { '2,0': 'C', '2,1': 'C', '2,2': 'O', '2,3': 'C', '2,4': 'C' },
      { '2,0': 'C', '2,1': 'O', '2,2': 'C', '2,3': 'C', '1,2': 'C' },
    ];
    const codes = new Set(boards.map((b) => canonical(treeOf(b))));
    expect([...codes].sort()).toEqual(allIsomers(C4O).sort());
    expect(new Set(boards.map(condensedOf)).size).toBe(7);
    expect(boards.map((b) => kindOf(treeOf(b))).filter((k) => k === 'ether')).toHaveLength(3);
  });

  it('writes subscripts into plain text', () => {
    expect(subscriptText('CH3–CH(OH)–CH3')).toBe('CH₃–CH(OH)–CH₃');
  });

  it('splits subscripts out for drawing', () => {
    expect(condensedParts('CH3–OH')).toEqual([
      { text: 'CH', sub: false },
      { text: '3', sub: true },
      { text: '–OH', sub: false },
    ]);
  });
});

describe('the three ways of writing a formula', () => {
  it('fills the valence of every atom with the hydrogens of the formula', () => {
    const wrong = FORMS.filter((form) => {
      const f = parseFormula(form.formula).atoms;
      return hydrogensOf(form).length !== f.H || form.atoms.length !== (f.C ?? 0) + (f.O ?? 0);
    });
    expect(wrong.map((f) => f.id)).toEqual([]);
  });

  it('draws no hydrogen on top of another atom', () => {
    const wrong = FORMS.filter((form) => {
      const spots = [...form.atoms, ...hydrogensOf(form)].map((a) => `${a.x},${a.y}`);
      return new Set(spots).size !== spots.length;
    });
    expect(wrong.map((f) => f.id)).toEqual([]);
  });

  it('gives the skeleton one point per heavy atom', () => {
    const wrong = FORMS.filter((f) => f.skeleton.length !== f.atoms.length);
    expect(wrong).toEqual([]);
  });
});
