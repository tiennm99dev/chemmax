import { describe, expect, it } from 'vitest';
import { strictTexFailures } from '#lib/core/tex-check.js';
import {
  CELL_METALS,
  COUPLES,
  ELECTROLYTES,
  amountOf,
  cell,
  couple,
  discharge,
  electronMoles,
  oxidationTex,
  plain,
  potentialTex,
  reacts,
  reductionTex,
} from './electrochem.js';

/** Bare TeX as a rich text. @param {string} tex */
const inline = (tex) => `$${tex}$`;

describe('electrode potentials and Galvani cells', () => {
  it('keeps the couples in the order of the electrochemical series', () => {
    const E = COUPLES.map((c) => c.E);
    expect(E).toEqual([...E].sort((a, b) => a - b));
    expect(couple('H').E).toBe(0);
  });

  it('builds the book Zn-Cu cell', () => {
    const c = cell('Cu', 'Zn');
    expect(c?.anode.id).toBe('Zn');
    expect(c?.cathode.id).toBe('Cu');
    expect(c?.emf).toBe(1.102);
    expect(c?.overall).toBe(
      '\\mathrm{Zn} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{Cu}',
    );
    expect(cell('Zn', 'Zn')).toBeNull();
  });

  it('balances electrons in the overall reaction', () => {
    expect(cell('Mg', 'Al')?.overall).toBe(
      '3\\mathrm{Mg} + 2\\mathrm{Al^{3+}} \\longrightarrow 3\\mathrm{Mg^{2+}} + 2\\mathrm{Al}',
    );
    expect(cell('Al', 'Ag')?.overall).toBe(
      '\\mathrm{Al} + 3\\mathrm{Ag^+} \\longrightarrow \\mathrm{Al^{3+}} + 3\\mathrm{Ag}',
    );
    expect(cell('Zn', 'H')?.overall).toBe(
      '\\mathrm{Zn} + 2\\mathrm{H^+} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{H_2}',
    );
    expect(cell('H', 'Ag')?.overall).toBe(
      '\\mathrm{H_2} + 2\\mathrm{Ag^+} \\longrightarrow \\mathrm{2H^+} + 2\\mathrm{Ag}',
    );
    expect(cell('Ni', 'Ag')?.emf).toBe(1.056);
  });

  it('writes potentials with three decimals and renders every cell', () => {
    expect(potentialTex(-0.44)).toBe('-0{,}440');
    expect(potentialTex(0.34)).toBe('+0{,}340');
    const bad = [];
    /** @type {string[]} */
    const texts = [];
    for (const a of CELL_METALS) {
      for (const b of CELL_METALS) {
        const c = cell(a, b);
        if (!c) continue;
        if (!(c.emf > 0)) bad.push([a, b, 'emf']);
        texts.push(
          ...[c.emfTex, c.overall, oxidationTex(c.anode), reductionTex(c.cathode)].map(inline),
        );
      }
    }
    expect(bad).toEqual([]);
    expect(strictTexFailures(texts)).toEqual([]);
  });

  it('applies the α rule', () => {
    expect(reacts('Fe', 'Cu')).toBe(true);
    expect(reacts('Cu', 'Fe')).toBe(false);
    expect(reacts('Cu', 'Ag')).toBe(true);
    expect(reacts('Cu', 'H')).toBe(false);
  });
});

describe('electrolysis', () => {
  /** @param {string} id */
  const products = (id) => {
    const e = ELECTROLYTES.find((x) => x.id === id);
    if (!e) throw new Error(id);
    const d = discharge(e);
    return [d.cathode.chosen.product, d.anode.chosen.product];
  };

  it('picks what is discharged first at each electrode', () => {
    expect(products('nacl-nc')).toEqual(['Na', 'Cl_2']);
    expect(products('al2o3-nc')).toEqual(['Al', 'O_2']);
    expect(products('nacl-dd')).toEqual(['H_2', 'Cl_2']);
    expect(products('cuso4-dd')).toEqual(['Cu', 'O_2']);
    expect(products('cucl2-dd')).toEqual(['Cu', 'Cl_2']);
    expect(products('agno3-dd')).toEqual(['Ag', 'O_2']);
    expect(products('na2so4-dd')).toEqual(['H_2', 'O_2']);
    expect(products('nano3-dd')).toEqual(['H_2', 'O_2']);
    expect(products('mgcl2-nc')).toEqual(['Mg', 'Cl_2']);
  });

  it('renders every equation and reason', () => {
    const texts = ELECTROLYTES.flatMap((e) => {
      const d = discharge(e);
      return [
        ...[e.overall, d.cathode.chosen.half, d.anode.chosen.half].map(inline),
        d.cathode.why,
        d.anode.why,
      ];
    });
    expect(strictTexFailures(texts)).toEqual([]);
  });

  it('turns charge into amounts of product', () => {
    const ne = electronMoles(9.65, 2000);
    expect(ne).toBeCloseTo(0.2, 12);
    const [cu] = ELECTROLYTES.filter((x) => x.id === 'cuso4-dd').map((e) => discharge(e));
    expect(amountOf(cu.cathode.chosen, ne).mass).toBeCloseTo(6.4, 12);
    const o2 = amountOf(cu.anode.chosen, ne);
    expect(o2.mol).toBeCloseTo(0.05, 12);
    expect(o2.volume).toBeCloseTo(1.2395, 12);
  });
});

describe('plain text of a formula', () => {
  it('turns TeX sub- and superscripts into Unicode', () => {
    expect(plain('Cu^{2+}')).toBe('Cu²⁺');
    expect(plain('SO_4^{2-}')).toBe('SO₄²⁻');
    expect(plain('Ag^+')).toBe('Ag⁺');
    expect(plain('H_2O')).toBe('H₂O');
  });
});
