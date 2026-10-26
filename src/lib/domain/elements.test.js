import { describe, expect, it } from 'vitest';
import {
  ELEMENTS,
  electronConfiguration,
  element,
  formatConfiguration,
  formatMass,
  groupLabel,
  metalKind,
  outerElectrons,
  shellCounts,
  tablePosition,
} from './elements.js';

/** @param {number | string} key */
const el = (key) => {
  const e = element(key);
  if (!e) throw new Error(`no element ${key}`);
  return e;
};

describe('element data', () => {
  it('lists all 118 elements in order with unique symbols', () => {
    expect(ELEMENTS).toHaveLength(118);
    ELEMENTS.forEach((e, i) => expect(e.z).toBe(i + 1));
    expect(new Set(ELEMENTS.map((e) => e.symbol)).size).toBe(118);
    for (const e of ELEMENTS) expect(e.symbol).toMatch(/^[A-Z][a-z]?$/);
    expect(el(118).symbol).toBe('Og');
  });

  it('looks elements up by number or case-sensitive symbol', () => {
    expect(el('Co').name).toBe('cobalt');
    expect(element('CO')).toBeUndefined();
    expect(element(0)).toBeUndefined();
    expect(element(119)).toBeUndefined();
    expect(el(26).viName).toBe('sắt');
    expect(el(8).viName).toBeNull();
  });

  it('carries the textbook atomic weights', () => {
    /** @type {Array<[string, number]>} */
    const known = [
      ['H', 1.008],
      ['C', 12.011],
      ['N', 14.007],
      ['O', 15.999],
      ['Na', 22.99],
      ['Mg', 24.305],
      ['Al', 26.982],
      ['S', 32.06],
      ['Cl', 35.45],
      ['K', 39.098],
      ['Ca', 40.078],
      ['Fe', 55.845],
      ['Cu', 63.546],
      ['Zn', 65.38],
      ['Ag', 107.87],
      ['Ba', 137.33],
      ['U', 238.03],
    ];
    for (const [symbol, mass] of known) expect(el(symbol).mass, symbol).toBe(mass);
    expect(formatMass(el('Cl'))).toBe('35,45');
    expect(formatMass(el('Tc'))).toBe('[98]');
    expect(el('Pu').massNumberOnly).toBe(true);
    expect(el('U').massNumberOnly).toBe(false);
  });

  it('keeps atomic weights increasing apart from the known inversions', () => {
    const inversions = ELEMENTS.slice(1)
      .filter((e, i) => e.mass < ELEMENTS[i].mass)
      .map((e) => e.symbol);
    // Ar/K, Co/Ni and Te/I are the classic pairs; the rest are actinides and
    // superheavy elements listed by the mass number of their longest-lived isotope.
    expect(inversions).toEqual(['K', 'Ni', 'I', 'Pa', 'Np', 'Am', 'Hs']);
  });

  it('has Pauling electronegativities where established', () => {
    expect(el('F').electronegativity).toBe(3.98);
    expect(el('O').electronegativity).toBe(3.44);
    expect(el('Cl').electronegativity).toBe(3.16);
    expect(el('Cs').electronegativity).toBe(0.79);
    expect(el('He').electronegativity).toBeNull();
    const values = ELEMENTS.flatMap((e) => (e.electronegativity === null ? [] : [e]));
    expect(Math.max(...values.map((e) => e.electronegativity ?? 0))).toBe(3.98);
  });
});

describe('table layout', () => {
  it('places periods and groups as on the 18-column table', () => {
    expect([el('H').period, el('H').group]).toEqual([1, 1]);
    expect([el('He').period, el('He').group]).toEqual([1, 18]);
    expect([el('B').period, el('B').group]).toEqual([2, 13]);
    expect([el('Ar').period, el('Ar').group]).toEqual([3, 18]);
    expect([el('Fe').period, el('Fe').group]).toEqual([4, 8]);
    expect([el('La').period, el('La').group]).toEqual([6, 3]);
    expect(el('Ce').group).toBeNull();
    expect(el('Lu').group).toBeNull();
    expect([el('Hf').period, el('Hf').group]).toEqual([6, 4]);
    expect([el('Og').period, el('Og').group]).toEqual([7, 18]);
  });

  it('gives each element its own grid cell', () => {
    const cells = new Set(ELEMENTS.map((e) => JSON.stringify(tablePosition(e))));
    expect(cells.size).toBe(118);
    expect(tablePosition(el('Ce'))).toEqual({ row: 9, col: 4 });
    expect(tablePosition(el('Lr'))).toEqual({ row: 10, col: 17 });
    for (const e of ELEMENTS) {
      const p = tablePosition(e);
      expect(p.col).toBeGreaterThanOrEqual(1);
      expect(p.col).toBeLessThanOrEqual(18);
    }
  });

  it('labels groups in the A/B notation', () => {
    expect(groupLabel(el('Na'))).toBe('IA');
    expect(groupLabel(el('Ca'))).toBe('IIA');
    expect(groupLabel(el('Sc'))).toBe('IIIB');
    expect(groupLabel(el('Fe'))).toBe('VIIIB');
    expect(groupLabel(el('Ni'))).toBe('VIIIB');
    expect(groupLabel(el('Cu'))).toBe('IB');
    expect(groupLabel(el('Zn'))).toBe('IIB');
    expect(groupLabel(el('Al'))).toBe('IIIA');
    expect(groupLabel(el('Cl'))).toBe('VIIA');
    expect(groupLabel(el('Ne'))).toBe('VIIIA');
    expect(groupLabel(el('Nd'))).toBe('IIIB');
  });

  it('counts the blocks and categories', () => {
    const count = (/** @type {(e: import('./elements.js').Element) => boolean} */ f) =>
      ELEMENTS.filter(f).length;
    expect(count((e) => e.block === 's')).toBe(14);
    expect(count((e) => e.block === 'p')).toBe(36);
    expect(count((e) => e.block === 'd')).toBe(40);
    expect(count((e) => e.block === 'f')).toBe(28);
    expect(count((e) => e.category === 'noble-gas')).toBe(7);
    expect(count((e) => e.category === 'alkali-metal')).toBe(6);
    expect(count((e) => e.category === 'lanthanide')).toBe(15);
    expect(count((e) => e.category === 'actinide')).toBe(15);
    expect(el('H').category).toBe('nonmetal');
    expect(el('Si').category).toBe('metalloid');
    expect(el('Br').state).toBe('liquid');
    expect(el('Hg').state).toBe('liquid');
    expect(el('Cl').state).toBe('gas');
    expect(el('Fe').state).toBe('solid');
    expect(metalKind(el('Na'))).toBe('kim-loai');
    expect(metalKind(el('S'))).toBe('phi-kim');
    expect(metalKind(el('Ar'))).toBe('khi-hiem');
  });

  it('sorts the metalloids the way the KNTT table colours them', () => {
    for (const s of ['B', 'Si', 'As', 'Te']) expect(metalKind(el(s)), s).toBe('phi-kim');
    for (const s of ['Ge', 'Sb']) expect(metalKind(el(s)), s).toBe('kim-loai');
    expect(el('Ge').category).toBe('metalloid');
  });
});

describe('electron configuration', () => {
  it('fills every element with exactly Z electrons within subshell capacity', () => {
    for (const e of ELEMENTS) {
      const config = electronConfiguration(e.z);
      expect(
        config.reduce((n, s) => n + s.electrons, 0),
        e.symbol,
      ).toBe(e.z);
      for (const s of config) expect(s.electrons).toBeLessThanOrEqual(2 * (2 * s.l + 1));
    }
  });

  it('writes configurations in shell order, full or with the noble-gas core', () => {
    const write = (/** @type {number} */ z, core = false) =>
      formatConfiguration(electronConfiguration(z), { core });
    expect(write(1)).toBe('1s¹');
    expect(write(8)).toBe('1s²2s²2p⁴');
    expect(write(11)).toBe('1s²2s²2p⁶3s¹');
    expect(write(17)).toBe('1s²2s²2p⁶3s²3p⁵');
    expect(write(26)).toBe('1s²2s²2p⁶3s²3p⁶3d⁶4s²');
    expect(write(26, true)).toBe('[Ar]3d⁶4s²');
    expect(write(24, true)).toBe('[Ar]3d⁵4s¹');
    expect(write(29, true)).toBe('[Ar]3d¹⁰4s¹');
    expect(write(35, true)).toBe('[Ar]3d¹⁰4s²4p⁵');
    expect(write(46, true)).toBe('[Kr]4d¹⁰');
    expect(write(57, true)).toBe('[Xe]5d¹6s²');
    expect(write(79, true)).toBe('[Xe]4f¹⁴5d¹⁰6s¹');
    expect(write(92, true)).toBe('[Rn]5f³6d¹7s²');
    expect(write(103, true)).toBe('[Rn]5f¹⁴7s²7p¹');
    expect(formatConfiguration(electronConfiguration(26), { order: 'filling' })).toBe(
      '1s²2s²2p⁶3s²3p⁶4s²3d⁶',
    );
  });

  it('counts electrons per shell and in the outer shell', () => {
    expect(shellCounts(electronConfiguration(11))).toEqual([2, 8, 1]);
    expect(shellCounts(electronConfiguration(19))).toEqual([2, 8, 8, 1]);
    expect(shellCounts(electronConfiguration(26))).toEqual([2, 8, 14, 2]);
    expect(shellCounts(electronConfiguration(46))).toEqual([2, 8, 18, 18]);
    expect(outerElectrons(17)).toBe(7);
    expect(outerElectrons(20)).toBe(2);
    for (const e of ELEMENTS) {
      if (e.group !== null && e.group >= 13 && e.z !== 2) {
        expect(outerElectrons(e.z), e.symbol).toBe(e.group - 10);
      }
      if (e.group !== null && e.group <= 2 && e.z !== 46) {
        expect(outerElectrons(e.z), e.symbol).toBe(e.group);
      }
    }
  });
});
