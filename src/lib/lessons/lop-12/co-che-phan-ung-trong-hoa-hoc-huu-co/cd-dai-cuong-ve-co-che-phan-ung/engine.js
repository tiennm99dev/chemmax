/**
 * Bond cleavage: homolytic (each atom keeps one electron of the shared pair)
 * or heterolytic (one atom takes the whole pair), with the particles formed
 * and whether the split is the usual one for that bond.
 */

import { numTex } from '#lib/core/number-format.js';
import { element } from '#lib/domain/elements.js';

/**
 * @typedef {object} BondCase
 * @property {string} id
 * @property {string} title rich text naming the bond
 * @property {string} left formula of the left fragment, "CH3"
 * @property {string} right
 * @property {string} leftTex TeX of the left fragment without \mathrm
 * @property {string} rightTex
 * @property {string} leftAtom symbol of the bonded atom on the left
 * @property {string} rightAtom
 */

/** @type {BondCase[]} */
export const BONDS = [
  {
    id: 'cl-cl',
    title: '$\\mathrm{Cl{-}Cl}$',
    left: 'Cl',
    right: 'Cl',
    leftTex: 'Cl',
    rightTex: 'Cl',
    leftAtom: 'Cl',
    rightAtom: 'Cl',
  },
  {
    id: 'ch3-h',
    title: '$\\mathrm{CH_3{-}H}$',
    left: 'CH3',
    right: 'H',
    leftTex: 'CH_3',
    rightTex: 'H',
    leftAtom: 'C',
    rightAtom: 'H',
  },
  {
    id: 'tbu-br',
    title: '$\\mathrm{(CH_3)_3C{-}Br}$',
    left: '(CH3)3C',
    right: 'Br',
    leftTex: '(CH_3)_3C',
    rightTex: 'Br',
    leftAtom: 'C',
    rightAtom: 'Br',
  },
  {
    id: 'ch3-li',
    title: '$\\mathrm{CH_3{-}Li}$',
    left: 'CH3',
    right: 'Li',
    leftTex: 'CH_3',
    rightTex: 'Li',
    leftAtom: 'C',
    rightAtom: 'Li',
  },
];

/** @param {string} symbol */
export function chi(symbol) {
  const value = element(symbol)?.electronegativity;
  if (value == null) throw new Error(`No electronegativity for ${symbol}`);
  return value;
}

/**
 * @typedef {object} Fragment
 * @property {string} label
 * @property {string} tex
 * @property {'+' | '-' | undefined} charge
 * @property {boolean} radical
 * @property {string} kind what the particle is called: "gốc tự do", "carbocation", ...
 */

/**
 * @param {string} label @param {string} tex @param {string} atom
 * @param {'+' | '-' | undefined} charge @param {boolean} radical
 * @returns {Fragment}
 */
function fragment(label, tex, atom, charge, radical) {
  const carbon = atom === 'C';
  let kind;
  if (radical) kind = carbon ? 'gốc tự do (gốc carbon)' : 'nguyên tử tự do (gốc tự do)';
  else if (charge === '+') kind = carbon ? 'carbocation' : 'cation';
  else kind = carbon ? 'carbanion' : 'anion';
  const mark = radical ? '{\\cdot}' : charge === '+' ? '^{+}' : '^{-}';
  return { label, tex: `\\mathrm{${tex}}${mark}`, charge, radical, kind };
}

/**
 * @typedef {object} Cleavage
 * @property {Fragment} left
 * @property {Fragment} right
 * @property {'ok' | 'warn' | 'info'} tone how usual this split is for the bond
 * @property {string} text rich-text verdict
 */

/**
 * Splits a bond.
 * @param {BondCase} bond
 * @param {'homo' | 'hetero'} mode
 * @param {'left' | 'right'} toward the atom that takes the pair (heterolytic only)
 * @returns {Cleavage}
 */
export function cleave(bond, mode, toward = 'right') {
  const xl = chi(bond.leftAtom);
  const xr = chi(bond.rightAtom);
  const gap = Math.abs(xl - xr);
  const gapText = `$\\Delta\\chi = ${numTex(gap, 2)}$`;
  if (mode === 'homo') {
    const left = fragment(bond.left, bond.leftTex, bond.leftAtom, undefined, true);
    const right = fragment(bond.right, bond.rightTex, bond.rightAtom, undefined, true);
    const made = `Tạo hai gốc tự do $${left.tex}$ và $${right.tex}$, mỗi gốc có một electron độc thân.`;
    if (gap < 0.4)
      return {
        left,
        right,
        tone: 'ok',
        text: `${made} Liên kết không phân cực hoặc ít phân cực (${gapText}) nên dễ phân cắt đồng li khi chiếu sáng hoặc đun nóng.`,
      };
    return {
      left,
      right,
      tone: 'info',
      text: `${made} Liên kết này phân cực (${gapText}); trong dung môi phân cực nó thường phân cắt dị li hơn.`,
    };
  }
  const leftTakes = toward === 'left';
  const left = fragment(bond.left, bond.leftTex, bond.leftAtom, leftTakes ? '-' : '+', false);
  const right = fragment(bond.right, bond.rightTex, bond.rightAtom, leftTakes ? '+' : '-', false);
  const taker = leftTakes ? bond.leftAtom : bond.rightAtom;
  const giver = leftTakes ? bond.rightAtom : bond.leftAtom;
  const made = `Cặp electron chung về ${taker}: tạo $${left.tex}$ (${left.kind}) và $${right.tex}$ (${right.kind}).`;
  if (gap === 0)
    return {
      left,
      right,
      tone: 'info',
      text: `${made} Hai nguyên tử giống nhau, liên kết không phân cực nên phân cắt dị li chỉ xảy ra khi có tác nhân làm phân cực liên kết (như $\\mathrm{FeCl_3}$).`,
    };
  if (chi(taker) > chi(giver))
    return {
      left,
      right,
      tone: 'ok',
      text: `${made} Đúng xu hướng: ${taker} có độ âm điện lớn hơn ${giver} (${gapText}) nên giữ cặp electron và mang điện tích âm.`,
    };
  return {
    left,
    right,
    tone: 'warn',
    text: `${made} Ngược xu hướng: ${taker} có độ âm điện nhỏ hơn ${giver}, nên cặp electron thường về ${giver}, không về ${taker}.`,
  };
}
