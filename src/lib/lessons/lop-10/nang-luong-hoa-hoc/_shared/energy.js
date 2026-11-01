/**
 * Enthalpy data and arithmetic of the chemical energy chapter: standard
 * enthalpies of formation, average bond energies, the reactions the lessons
 * calculate with, and how to write them the book's way.
 */
import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';
import { prettyFormula } from '#lib/domain/formula.js';

/**
 * Standard enthalpy of formation at 298 K, in kJ/mol. A stable element is 0.
 * @type {Record<string, number>}
 */
export const FORMATION = {
  'C(s)': 0,
  'H2(g)': 0,
  'N2(g)': 0,
  'O2(g)': 0,
  'CH4(g)': -74.8,
  'C2H4(g)': 52.3,
  'C2H6(g)': -84.7,
  'CO(g)': -110.5,
  'CO2(g)': -393.5,
  'H2O(g)': -241.8,
  'H2O(l)': -285.8,
  'NH3(g)': -45.9,
  'NO(g)': 90.3,
  'NO2(g)': 33.2,
  'SO2(g)': -296.8,
  'SO3(g)': -395.7,
  'FeS2(s)': -177.9,
  'Fe2O3(s)': -825.5,
};

/**
 * Average bond energy, in kJ/mol.
 * @type {Record<string, number>}
 */
export const BOND_ENERGY = {
  'H–H': 436,
  'Cl–Cl': 243,
  'H–Cl': 431,
  'O=O': 494,
  'N≡N': 945,
  'N–H': 386,
  'N=O': 607,
  'C–H': 418,
  'C–C': 346,
  'C=C': 612,
  'C=O': 732,
  'O–H': 459,
};

/** @typedef {{ n: number, s: string }} Term a coefficient and a species such as 'CO2(g)' */
/** @typedef {{ id: string, left: Term[], right: Term[] }} Reaction */
/** @typedef {Term & { bonds: Record<string, number> }} BondTerm bonds in one molecule */
/** @typedef {{ id: string, left: BondTerm[], right: BondTerm[] }} BondReaction */

/** Reactions calculated from enthalpies of formation. @type {Reaction[]} */
export const FORMATION_REACTIONS = [
  {
    id: 'ch4',
    left: [
      { n: 1, s: 'CH4(g)' },
      { n: 2, s: 'O2(g)' },
    ],
    right: [
      { n: 1, s: 'CO2(g)' },
      { n: 2, s: 'H2O(l)' },
    ],
  },
  {
    id: 'c2h6',
    left: [
      { n: 1, s: 'C2H6(g)' },
      { n: 3.5, s: 'O2(g)' },
    ],
    right: [
      { n: 2, s: 'CO2(g)' },
      { n: 3, s: 'H2O(l)' },
    ],
  },
  {
    id: 'no',
    left: [
      { n: 1, s: 'N2(g)' },
      { n: 1, s: 'O2(g)' },
    ],
    right: [{ n: 2, s: 'NO(g)' }],
  },
  {
    id: 'co',
    left: [
      { n: 1, s: 'CO(g)' },
      { n: 0.5, s: 'O2(g)' },
    ],
    right: [{ n: 1, s: 'CO2(g)' }],
  },
  {
    id: 'water-gas',
    left: [
      { n: 1, s: 'C(s)' },
      { n: 1, s: 'H2O(g)' },
    ],
    right: [
      { n: 1, s: 'CO(g)' },
      { n: 1, s: 'H2(g)' },
    ],
  },
  {
    id: 'h2o',
    left: [
      { n: 2, s: 'H2(g)' },
      { n: 1, s: 'O2(g)' },
    ],
    right: [{ n: 2, s: 'H2O(l)' }],
  },
  {
    id: 'hydrogenation',
    left: [
      { n: 1, s: 'C2H4(g)' },
      { n: 1, s: 'H2(g)' },
    ],
    right: [{ n: 1, s: 'C2H6(g)' }],
  },
  {
    id: 'no2',
    left: [
      { n: 1, s: 'N2(g)' },
      { n: 2, s: 'O2(g)' },
    ],
    right: [{ n: 2, s: 'NO2(g)' }],
  },
  {
    id: 'nh3',
    left: [
      { n: 1, s: 'N2(g)' },
      { n: 3, s: 'H2(g)' },
    ],
    right: [{ n: 2, s: 'NH3(g)' }],
  },
  {
    id: 'so3',
    left: [
      { n: 2, s: 'SO2(g)' },
      { n: 1, s: 'O2(g)' },
    ],
    right: [{ n: 2, s: 'SO3(g)' }],
  },
  {
    id: 'fes2',
    left: [
      { n: 4, s: 'FeS2(s)' },
      { n: 11, s: 'O2(g)' },
    ],
    right: [
      { n: 2, s: 'Fe2O3(s)' },
      { n: 8, s: 'SO2(g)' },
    ],
  },
];

const H2 = { 'H–H': 1 };
const O2 = { 'O=O': 1 };
const CH4 = { 'C–H': 4 };
const CO2 = { 'C=O': 2 };
const H2O = { 'O–H': 2 };

/** Gas-phase reactions calculated from bond energies. @type {BondReaction[]} */
export const BOND_REACTIONS = [
  {
    id: 'hcl',
    left: [
      { n: 1, s: 'H2(g)', bonds: H2 },
      { n: 1, s: 'Cl2(g)', bonds: { 'Cl–Cl': 1 } },
    ],
    right: [{ n: 2, s: 'HCl(g)', bonds: { 'H–Cl': 1 } }],
  },
  {
    id: 'no',
    left: [
      { n: 1, s: 'N2(g)', bonds: { 'N≡N': 1 } },
      { n: 1, s: 'O2(g)', bonds: O2 },
    ],
    right: [{ n: 2, s: 'NO(g)', bonds: { 'N=O': 1 } }],
  },
  {
    id: 'nh3',
    left: [
      { n: 1, s: 'N2(g)', bonds: { 'N≡N': 1 } },
      { n: 3, s: 'H2(g)', bonds: H2 },
    ],
    right: [{ n: 2, s: 'NH3(g)', bonds: { 'N–H': 3 } }],
  },
  {
    id: 'cracking',
    left: [{ n: 1, s: 'C3H8(g)', bonds: { 'C–C': 2, 'C–H': 8 } }],
    right: [
      { n: 1, s: 'CH4(g)', bonds: CH4 },
      { n: 1, s: 'C2H4(g)', bonds: { 'C=C': 1, 'C–H': 4 } },
    ],
  },
  {
    id: 'hydrogenation',
    left: [
      { n: 1, s: 'C2H4(g)', bonds: { 'C=C': 1, 'C–H': 4 } },
      { n: 1, s: 'H2(g)', bonds: H2 },
    ],
    right: [{ n: 1, s: 'C2H6(g)', bonds: { 'C–C': 1, 'C–H': 6 } }],
  },
  {
    id: 'ch4',
    left: [
      { n: 1, s: 'CH4(g)', bonds: CH4 },
      { n: 2, s: 'O2(g)', bonds: O2 },
    ],
    right: [
      { n: 1, s: 'CO2(g)', bonds: CO2 },
      { n: 2, s: 'H2O(g)', bonds: H2O },
    ],
  },
  {
    id: 'butane',
    left: [
      { n: 1, s: 'C4H10(g)', bonds: { 'C–C': 3, 'C–H': 10 } },
      { n: 6.5, s: 'O2(g)', bonds: O2 },
    ],
    right: [
      { n: 4, s: 'CO2(g)', bonds: CO2 },
      { n: 5, s: 'H2O(g)', bonds: H2O },
    ],
  },
];

/**
 * A species in TeX with real subscripts: 'Fe2O3(s)' gives \mathrm{Fe_{2}O_{3}(s)}.
 * @param {string} s
 */
export function speciesTex(s) {
  return `\\mathrm{${s.replace(/\d+/g, '_{$&}')}}`;
}

/**
 * A book-style coefficient in TeX: none for 1, 3 for 3, \frac{7}{2} for 3,5.
 * @param {number} n
 */
export function coefTex(n) {
  if (n === 1) return '';
  return Number.isInteger(n) ? String(n) : `\\frac{${n * 2}}{2}`;
}

/** @param {Term} t */
const termTex = (t) => `${coefTex(t.n)}${speciesTex(t.s)}`;

/**
 * The equation in TeX.
 * @param {Reaction | BondReaction} r
 */
export function equationTex(r) {
  const side = (/** @type {Term[]} */ list) => list.map(termTex).join(' + ');
  return `${side(r.left)} \\rightarrow ${side(r.right)}`;
}

/**
 * The equation as plain text for a menu: 'C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O'.
 * @param {Reaction | BondReaction} r
 */
export function equationText(r) {
  const term = (/** @type {Term} */ t) => {
    const name = prettyFormula(t.s.replace(/\(.*$/, ''));
    if (t.n === 1) return name;
    return Number.isInteger(t.n) ? `${t.n}${name}` : `${t.n * 2}/2 ${name}`;
  };
  const side = (/** @type {Term[]} */ list) => list.map(term).join(' + ');
  return `${side(r.left)} → ${side(r.right)}`;
}

/**
 * A signed value in kJ as plain text, thousands split the book's way:
 * +225, −1 559,7, 0.
 * @param {number} v
 */
export function signedText(v) {
  const text = formatNumber(v).replace(/\./g, ' ');
  return v > 0 ? `+${text}` : text;
}

/**
 * The same as TeX source.
 * @param {number} v
 */
export function signedTex(v) {
  return v > 0 ? `+${numTex(v)}` : numTex(v);
}

/**
 * A number as an operand in TeX, in brackets when negative.
 * @param {number} v
 */
const operandTex = (v) => (v < 0 ? `(${numTex(v)})` : numTex(v));

/**
 * The enthalpy of formation of a species.
 * @param {string} s
 */
export function formationOf(s) {
  const v = FORMATION[s];
  if (v === undefined) throw new Error(`no enthalpy of formation for ${s}`);
  return v;
}

/**
 * One term of the sum as TeX: 2 · (−393,5).
 * @param {Term} t
 */
export function formationTermTex(t) {
  const v = operandTex(formationOf(t.s));
  return t.n === 1 ? v : `${Number.isInteger(t.n) ? t.n : numTex(t.n)} \\cdot ${v}`;
}

/**
 * Enthalpy of formation of one side, in kJ.
 * @param {Term[]} terms
 */
export function formationSum(terms) {
  return tidy(
    terms.reduce((sum, t) => sum + t.n * formationOf(t.s), 0),
    6,
  );
}

/**
 * The reaction's enthalpy change from enthalpies of formation, in kJ.
 * @param {Reaction} r
 */
export function fromFormation(r) {
  return tidy(formationSum(r.right) - formationSum(r.left), 6);
}

/**
 * The worked calculation from enthalpies of formation, as rich text lines.
 * @param {Reaction} r
 */
export function formationSteps(r) {
  const line = (/** @type {Term[]} */ list) => list.map(formationTermTex).join(' + ');
  const left = formationSum(r.left);
  const right = formationSum(r.right);
  return [
    `Tổng nhiệt tạo thành các chất đầu: $${line(r.left)} = ${numTex(left)}$ kJ.`,
    `Tổng nhiệt tạo thành các sản phẩm: $${line(r.right)} = ${numTex(right)}$ kJ.`,
    `$\\Delta_r H^\\circ_{298} = ${numTex(right)} - ${operandTex(left)} = ${signedTex(fromFormation(r))}$ kJ.`,
  ];
}

/**
 * Bonds of one side, merged: each bond once, counted over all its molecules.
 * @param {BondTerm[]} terms
 * @returns {{ bond: string, count: number, energy: number, total: number }[]}
 */
export function bondTotals(terms) {
  /** @type {Map<string, number>} */
  const counts = new Map();
  for (const t of terms) {
    for (const [bond, k] of Object.entries(t.bonds)) {
      counts.set(bond, (counts.get(bond) ?? 0) + t.n * k);
    }
  }
  return [...counts].map(([bond, count]) => {
    const energy = BOND_ENERGY[bond];
    if (energy === undefined) throw new Error(`no energy for bond ${bond}`);
    return { bond, count, energy, total: tidy(count * energy, 6) };
  });
}

/**
 * The reaction's enthalpy change from bond energies, in kJ.
 * @param {BondReaction} r
 */
export function fromBonds(r) {
  const sum = (/** @type {BondTerm[]} */ terms) =>
    bondTotals(terms).reduce((total, b) => total + b.total, 0);
  return tidy(sum(r.left) - sum(r.right), 6);
}

/**
 * The worked calculation from bond energies, as rich text lines.
 * @param {BondReaction} r
 */
export function bondSteps(r) {
  const line = (/** @type {BondTerm[]} */ terms) =>
    bondTotals(terms)
      .map((b) => `${numTex(b.count)} \\cdot ${b.energy}`)
      .join(' + ');
  const sum = (/** @type {BondTerm[]} */ terms) =>
    tidy(
      bondTotals(terms).reduce((total, b) => total + b.total, 0),
      6,
    );
  const names = (/** @type {BondTerm[]} */ terms) =>
    bondTotals(terms)
      .map((b) => `${formatNumber(b.count)} liên kết ${b.bond}`)
      .join(', ');
  return [
    `Chất đầu có ${names(r.left)}: $\\sum E_b(\\text{cđ}) = ${line(r.left)} = ${numTex(sum(r.left))}$ kJ.`,
    `Sản phẩm có ${names(r.right)}: $\\sum E_b(\\text{sp}) = ${line(r.right)} = ${numTex(sum(r.right))}$ kJ.`,
    `$\\Delta_r H^\\circ_{298} = ${numTex(sum(r.left))} - ${numTex(sum(r.right))} = ${signedTex(fromBonds(r))}$ kJ.`,
  ];
}

/**
 * The kind of reaction a sign means.
 * @param {number} dH
 * @returns {'toa' | 'thu'}
 */
export function kindOf(dH) {
  return dH < 0 ? 'toa' : 'thu';
}

/** @type {Record<'toa' | 'thu', string>} */
export const KIND_NAMES = { toa: 'toả nhiệt', thu: 'thu nhiệt' };

/** @typedef {{ id: string, side: 'left' | 'right', term: Term }} FormationRow */

/**
 * The cards of the formation calculator, one per species.
 * @param {Reaction} r
 * @returns {FormationRow[]}
 */
export function formationRows(r) {
  return /** @type {('left' | 'right')[]} */ (['left', 'right']).flatMap((side) =>
    r[side].map((term, i) => ({ id: `${side}-${i}`, side, term })),
  );
}

/**
 * The enthalpy level of each side once some cards are counted.
 * @param {Reaction} r
 * @param {readonly string[]} added
 */
export function formationLevels(r, added) {
  const rows = formationRows(r).filter((row) => added.includes(row.id));
  const level = (/** @type {'left' | 'right'} */ side) =>
    formationSum(rows.filter((row) => row.side === side).map((row) => row.term));
  return { left: level('left'), right: level('right') };
}

/** @typedef {{ id: string, kind: 'break' | 'form', bond: string, count: number, energy: number, total: number }} BondRow */

/**
 * The bonds to break, then the bonds to form.
 * @param {BondReaction} r
 * @returns {BondRow[]}
 */
export function bondRows(r) {
  return [
    ...bondTotals(r.left).map((b) => ({
      ...b,
      id: `break-${b.bond}`,
      kind: /** @type {const} */ ('break'),
    })),
    ...bondTotals(r.right).map((b) => ({
      ...b,
      id: `form-${b.bond}`,
      kind: /** @type {const} */ ('form'),
    })),
  ];
}

/**
 * The energy ladder walked so far: each step from one level to the next,
 * counted from the reactants at 0. Breaking climbs, forming falls.
 * @param {BondReaction} r
 * @param {readonly string[]} order row ids, in the order they were taken
 * @returns {{ row: BondRow, from: number, to: number }[]}
 */
export function ladder(r, order) {
  const rows = bondRows(r);
  let level = 0;
  return order.map((id) => {
    const row = rows.find((x) => x.id === id);
    if (!row) throw new Error(`no bond row ${id}`);
    const from = level;
    level = tidy(level + (row.kind === 'break' ? row.total : -row.total), 6);
    return { row, from, to: level };
  });
}

/**
 * Whether a row may be taken next: bonds form only once every bond of the
 * reactants is broken, because forming needs the free atoms.
 * @param {BondReaction} r
 * @param {readonly string[]} order
 * @param {string} id
 * @returns {{ ok: boolean, text: string }}
 */
export function ladderMove(r, order, id) {
  const rows = bondRows(r);
  const row = rows.find((x) => x.id === id);
  if (!row) throw new Error(`no bond row ${id}`);
  const unbroken = rows.filter((x) => x.kind === 'break' && !order.includes(x.id));
  if (row.kind === 'form' && unbroken.length > 0) {
    return {
      ok: false,
      text: `Chưa có đủ nguyên tử tự do để tạo liên kết: hãy phá hết liên kết của chất đầu trước (còn ${unbroken.map((x) => x.bond).join(', ')}).`,
    };
  }
  const change = signedText(row.kind === 'break' ? row.total : -row.total);
  return {
    ok: true,
    text:
      row.kind === 'break'
        ? `Phá ${formatNumber(row.count)} mol liên kết ${row.bond} cần cung cấp năng lượng: mức năng lượng đổi ${change} kJ.`
        : `Tạo ${formatNumber(row.count)} mol liên kết ${row.bond} giải phóng năng lượng: mức năng lượng đổi ${change} kJ.`,
  };
}

/**
 * Snaps a dragged product level to the step of the diagram board, inside its
 * range.
 * @param {number} value in kJ
 * @param {number} step
 * @param {number} limit
 */
export function snapLevel(value, step, limit) {
  const clamped = Math.max(-limit, Math.min(limit, value));
  return Math.round(clamped / step) * step + 0;
}

/**
 * Judges a product level drawn for a reaction: first its side of the reactants,
 * then its distance.
 * @param {number} drawn the level drawn, in kJ from the reactants
 * @param {number} dH the reaction's enthalpy change
 * @param {number} tolerance
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeLevel(drawn, dH, tolerance) {
  const kind = KIND_NAMES[kindOf(dH)];
  if (drawn === 0) {
    return {
      ok: false,
      text: `Hai mức đang bằng nhau, tức là phản ứng không toả cũng không thu nhiệt. Hãy đọc giá trị của phản ứng rồi kéo mức sản phẩm.`,
    };
  }
  if (Math.sign(drawn) !== Math.sign(dH)) {
    return {
      ok: false,
      text:
        dH < 0
          ? `Sai phía: phản ứng ${kind} có $\\Delta_r H^\\circ_{298} < 0$, nên mức sản phẩm phải thấp hơn mức chất đầu.`
          : `Sai phía: phản ứng ${kind} có $\\Delta_r H^\\circ_{298} > 0$, nên mức sản phẩm phải cao hơn mức chất đầu.`,
    };
  }
  if (Math.abs(drawn - dH) > tolerance) {
    return {
      ok: false,
      text: `Đúng phía nhưng ${Math.abs(drawn) > Math.abs(dH) ? 'xa quá' : 'chưa đủ xa'}: khoảng cách giữa hai mức phải ứng với $${numTex(Math.abs(dH))}$ kJ.`,
    };
  }
  return {
    ok: true,
    text: `Đúng: phản ứng ${kind}, mức sản phẩm ${dH < 0 ? 'thấp' : 'cao'} hơn mức chất đầu $${numTex(Math.abs(dH))}$ kJ.`,
  };
}
