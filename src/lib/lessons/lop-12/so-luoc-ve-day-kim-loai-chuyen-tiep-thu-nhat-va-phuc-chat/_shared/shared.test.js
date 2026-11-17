import { describe, expect, it } from 'vitest';
import { formulaParts } from '#lib/domain/formula.js';
import {
  METALS,
  colouredByD,
  ionTex,
  ionValence,
  metal,
  oxText,
  valenceOf,
  valenceTex,
} from './transition.js';
import {
  CENTRES,
  GEOMETRIES,
  KNOWN,
  centre,
  chargeSup,
  complexCharge,
  complexFormula,
  formulaTex,
  ligand,
} from './complexes.js';

describe('the first transition series', () => {
  it('runs from Sc to Cu with 3d and 4s valence electrons', () => {
    expect(METALS.map((m) => m.symbol).join(' ')).toBe('Sc Ti V Cr Mn Fe Co Ni Cu');
    expect(METALS.map((m) => m.z)).toEqual([21, 22, 23, 24, 25, 26, 27, 28, 29]);
    expect(valenceOf(21)).toEqual({ d: 1, s: 2 });
    expect(valenceOf(24)).toEqual({ d: 5, s: 1 });
    expect(valenceOf(26)).toEqual({ d: 6, s: 2 });
    expect(valenceOf(29)).toEqual({ d: 10, s: 1 });
  });

  it('takes 4s electrons first when an ion forms', () => {
    expect(ionValence(26, 2)).toEqual({ d: 6, s: 0 });
    expect(ionValence(26, 3)).toEqual({ d: 5, s: 0 });
    expect(ionValence(24, 3)).toEqual({ d: 3, s: 0 });
    expect(ionValence(25, 2)).toEqual({ d: 5, s: 0 });
    expect(ionValence(29, 2)).toEqual({ d: 9, s: 0 });
    expect(ionValence(29, 1)).toEqual({ d: 10, s: 0 });
    expect(ionValence(25, 7)).toEqual({ d: 0, s: 0 });
    expect(() => ionValence(21, 4)).toThrow();
  });

  it('writes configurations and ions as TeX', () => {
    expect(valenceTex(valenceOf(24))).toBe('\\mathrm{[Ar]3d^{5}4s^{1}}');
    expect(valenceTex(ionValence(21, 3))).toBe('\\mathrm{[Ar]}');
    expect(ionTex('Fe', 3)).toBe('Fe^{3+}');
    expect(ionTex('Cu', 1)).toBe('Cu^{+}');
    expect(oxText(7)).toBe('+7');
  });

  it('lists states the atom can reach, with parseable species', () => {
    const bad = [];
    for (const m of METALS) {
      const { d, s } = valenceOf(m.z);
      for (const st of m.states) {
        if (st.ox > d + s) bad.push([m.symbol, st.ox]);
        try {
          formulaParts(st.species);
        } catch {
          bad.push([m.symbol, st.species]);
        }
      }
      if (!m.usual.every((u) => m.states.some((st) => st.ox === u))) bad.push([m.symbol, 'usual']);
    }
    expect(bad).toEqual([]);
    expect(metal('Mn').states.map((s) => s.ox)).toEqual([2, 4, 6, 7]);
  });

  it('keeps the light and the hard-to-melt metals of the book', () => {
    expect(METALS.filter((m) => m.density < 5).map((m) => m.symbol)).toEqual(['Sc', 'Ti']);
    expect(METALS.filter((m) => m.melting < 1287).map((m) => m.symbol)).toEqual(['Mn', 'Cu']);
  });

  it('calls empty and full 3d subshells colourless', () => {
    expect(colouredByD(0)).toBe(false);
    expect(colouredByD(10)).toBe(false);
    expect(colouredByD(5)).toBe(true);
  });
});

describe('complexes', () => {
  it('adds the ligand charges to the centre', () => {
    expect(complexCharge(3, [{ ligand: 'NH3', count: 6 }])).toBe(3);
    expect(complexCharge(2, [{ ligand: 'CN', count: 6 }])).toBe(-4);
    expect(
      complexCharge(2, [
        { ligand: 'Cl', count: 2 },
        { ligand: 'NH3', count: 2 },
      ]),
    ).toBe(0);
  });

  it('writes formulas the book way', () => {
    expect(complexFormula('Co', 3, [{ ligand: 'NH3', count: 6 }])).toBe('[Co(NH3)6]^3+');
    expect(complexFormula('Pt', 2, [{ ligand: 'Cl', count: 4 }])).toBe('[PtCl4]^2-');
    expect(complexFormula('Zn', 2, [{ ligand: 'OH', count: 4 }])).toBe('[Zn(OH)4]^2-');
    expect(
      complexFormula('Pt', 2, [
        { ligand: 'Cl', count: 2 },
        { ligand: 'NH3', count: 2 },
      ]),
    ).toBe('[PtCl2(NH3)2]');
    expect(chargeSup(-1)).toBe('-');
    expect(formulaTex('[Cu(NH3)4(H2O)2]^2+')).toBe('\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}');
  });

  it('builds every known complex from its centre and ligands, with a matching shape', () => {
    const bad = [];
    for (const k of KNOWN) {
      const c = centre(k.centre);
      if (complexFormula(c.symbol, c.charge, k.parts) !== k.formula) bad.push(k.formula);
      const n = k.parts.reduce((s, p) => s + p.count, 0);
      if (GEOMETRIES[k.geometry].count !== n) bad.push([k.formula, 'shape']);
    }
    expect(bad).toEqual([]);
    expect(CENTRES.length).toBeGreaterThan(4);
    expect(ligand('NH3').donor).toBe('N');
    expect(() => ligand('X')).toThrow();
  });
});
