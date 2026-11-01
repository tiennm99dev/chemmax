/**
 * Redox reactions as the book balances them: every species carries the
 * oxidation number of each of its elements, and every reaction names its
 * reducing agent, its oxidising agent and the two half-reactions with the
 * multipliers that make the electrons given equal the electrons taken.
 */
import { MINUS } from '#lib/core/number-format.js';
import { parseFormula } from '#lib/domain/formula.js';

/**
 * @typedef {{ formula: string, ox: Record<string, number> }} Species
 * @typedef {{
 *   el: string,
 *   from: number,
 *   to: number,
 *   atoms: number,
 *   molecule?: 'from' | 'to',
 *   times: number,
 * }} Half one half-reaction; `atoms` of `el` are written, as a diatomic
 *   molecule on the side `molecule` names, and the half is multiplied by `times`
 * @typedef {{
 *   id: string,
 *   condition?: string,
 *   left: Species[],
 *   right: Species[],
 *   reducer: string,
 *   oxidant: string,
 *   lose: Half,
 *   gain: Half,
 *   seed: string,
 *   final: number[],
 * }} Reaction `seed` is the scheme once the multipliers are placed; `final`
 *   holds the balanced coefficients, reactants first
 * @typedef {{ el?: string, on?: number, text: string, sub: string }} Token
 */

/** Oxidation numbers of the species the reactions below use. */
const S = /** @type {Record<string, Species>} */ ({
  Fe: { formula: 'Fe', ox: { Fe: 0 } },
  Fe2O3: { formula: 'Fe2O3', ox: { Fe: 3, O: -2 } },
  CO: { formula: 'CO', ox: { C: 2, O: -2 } },
  CO2: { formula: 'CO2', ox: { C: 4, O: -2 } },
  Mg: { formula: 'Mg', ox: { Mg: 0 } },
  HNO3: { formula: 'HNO3', ox: { H: 1, N: 5, O: -2 } },
  MgNO3: { formula: 'Mg(NO3)2', ox: { Mg: 2, N: 5, O: -2 } },
  NO: { formula: 'NO', ox: { N: 2, O: -2 } },
  NO2: { formula: 'NO2', ox: { N: 4, O: -2 } },
  H2O: { formula: 'H2O', ox: { H: 1, O: -2 } },
  N2: { formula: 'N2', ox: { N: 0 } },
  H2: { formula: 'H2', ox: { H: 0 } },
  NH3: { formula: 'NH3', ox: { N: -3, H: 1 } },
  Cu: { formula: 'Cu', ox: { Cu: 0 } },
  H2SO4: { formula: 'H2SO4', ox: { H: 1, S: 6, O: -2 } },
  CuSO4: { formula: 'CuSO4', ox: { Cu: 2, S: 6, O: -2 } },
  SO2: { formula: 'SO2', ox: { S: 4, O: -2 } },
  SO3: { formula: 'SO3', ox: { S: 6, O: -2 } },
  KMnO4: { formula: 'KMnO4', ox: { K: 1, Mn: 7, O: -2 } },
  HCl: { formula: 'HCl', ox: { H: 1, Cl: -1 } },
  KCl: { formula: 'KCl', ox: { K: 1, Cl: -1 } },
  MnCl2: { formula: 'MnCl2', ox: { Mn: 2, Cl: -1 } },
  Cl2: { formula: 'Cl2', ox: { Cl: 0 } },
  O2: { formula: 'O2', ox: { O: 0 } },
  FeSO43: { formula: 'Fe2(SO4)3', ox: { Fe: 3, S: 6, O: -2 } },
  Al: { formula: 'Al', ox: { Al: 0 } },
  AlNO3: { formula: 'Al(NO3)3', ox: { Al: 3, N: 5, O: -2 } },
  CuNO3: { formula: 'Cu(NO3)2', ox: { Cu: 2, N: 5, O: -2 } },
  NaBr: { formula: 'NaBr', ox: { Na: 1, Br: -1 } },
  NaCl: { formula: 'NaCl', ox: { Na: 1, Cl: -1 } },
  Br2: { formula: 'Br2', ox: { Br: 0 } },
  FeOH2: { formula: 'Fe(OH)2', ox: { Fe: 2, O: -2, H: 1 } },
  FeOH3: { formula: 'Fe(OH)3', ox: { Fe: 3, O: -2, H: 1 } },
  FeSO4: { formula: 'FeSO4', ox: { Fe: 2, S: 6, O: -2 } },
  K2SO4: { formula: 'K2SO4', ox: { K: 1, S: 6, O: -2 } },
  MnSO4: { formula: 'MnSO4', ox: { Mn: 2, S: 6, O: -2 } },
});

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    id: 'fe2o3-co',
    condition: 'nung nóng, trong lò cao',
    left: [S.Fe2O3, S.CO],
    right: [S.Fe, S.CO2],
    reducer: 'CO',
    oxidant: 'Fe2O3',
    lose: { el: 'C', from: 2, to: 4, atoms: 1, times: 3 },
    gain: { el: 'Fe', from: 3, to: 0, atoms: 1, times: 2 },
    seed: 'Fe2O3 + 3CO -> 2Fe + 3CO2',
    final: [1, 3, 2, 3],
  },
  {
    id: 'mg-hno3',
    condition: 'nitric acid loãng',
    left: [S.Mg, S.HNO3],
    right: [S.MgNO3, S.NO, S.H2O],
    reducer: 'Mg',
    oxidant: 'HNO3',
    lose: { el: 'Mg', from: 0, to: 2, atoms: 1, times: 3 },
    gain: { el: 'N', from: 5, to: 2, atoms: 1, times: 2 },
    seed: '3Mg + HNO3 -> 3Mg(NO3)2 + 2NO + H2O',
    final: [3, 8, 3, 2, 4],
  },
  {
    id: 'n2-h2',
    condition: 'nhiệt độ, áp suất cao, có xúc tác',
    left: [S.N2, S.H2],
    right: [S.NH3],
    reducer: 'H2',
    oxidant: 'N2',
    lose: { el: 'H', from: 0, to: 1, atoms: 2, molecule: 'from', times: 3 },
    gain: { el: 'N', from: 0, to: -3, atoms: 2, molecule: 'from', times: 1 },
    seed: 'N2 + 3H2 -> 2NH3',
    final: [1, 3, 2],
  },
  {
    id: 'cu-h2so4',
    condition: 'sulfuric acid đặc, nóng',
    left: [S.Cu, S.H2SO4],
    right: [S.CuSO4, S.SO2, S.H2O],
    reducer: 'Cu',
    oxidant: 'H2SO4',
    lose: { el: 'Cu', from: 0, to: 2, atoms: 1, times: 1 },
    gain: { el: 'S', from: 6, to: 4, atoms: 1, times: 1 },
    seed: 'Cu + H2SO4 -> CuSO4 + SO2 + H2O',
    final: [1, 2, 1, 1, 2],
  },
  {
    id: 'nh3-o2',
    condition: 'có xúc tác Pt, giai đoạn đầu của quá trình Ostwald',
    left: [S.NH3, S.O2],
    right: [S.NO, S.H2O],
    reducer: 'NH3',
    oxidant: 'O2',
    lose: { el: 'N', from: -3, to: 2, atoms: 1, times: 4 },
    gain: { el: 'O', from: 0, to: -2, atoms: 2, molecule: 'from', times: 5 },
    seed: '4NH3 + 5O2 -> 4NO + H2O',
    final: [4, 5, 4, 6],
  },
  {
    id: 'kmno4-hcl',
    condition: 'hydrochloric acid đặc',
    left: [S.KMnO4, S.HCl],
    right: [S.KCl, S.MnCl2, S.Cl2, S.H2O],
    reducer: 'HCl',
    oxidant: 'KMnO4',
    lose: { el: 'Cl', from: -1, to: 0, atoms: 2, molecule: 'to', times: 5 },
    gain: { el: 'Mn', from: 7, to: 2, atoms: 1, times: 2 },
    seed: '2KMnO4 + HCl -> KCl + 2MnCl2 + 5Cl2 + H2O',
    final: [2, 16, 2, 2, 5, 8],
  },
  {
    id: 'fe-h2so4',
    condition: 'sulfuric acid đặc, nóng',
    left: [S.Fe, S.H2SO4],
    right: [S.FeSO43, S.SO2, S.H2O],
    reducer: 'Fe',
    oxidant: 'H2SO4',
    lose: { el: 'Fe', from: 0, to: 3, atoms: 2, times: 1 },
    gain: { el: 'S', from: 6, to: 4, atoms: 1, times: 3 },
    seed: '2Fe + H2SO4 -> Fe2(SO4)3 + 3SO2 + H2O',
    final: [2, 6, 1, 3, 6],
  },
  {
    id: 'al-hno3',
    condition: 'nitric acid loãng',
    left: [S.Al, S.HNO3],
    right: [S.AlNO3, S.NO, S.H2O],
    reducer: 'Al',
    oxidant: 'HNO3',
    lose: { el: 'Al', from: 0, to: 3, atoms: 1, times: 1 },
    gain: { el: 'N', from: 5, to: 2, atoms: 1, times: 1 },
    seed: 'Al + HNO3 -> Al(NO3)3 + NO + H2O',
    final: [1, 4, 1, 1, 2],
  },
  {
    id: 'cu-hno3',
    condition: 'nitric acid đặc',
    left: [S.Cu, S.HNO3],
    right: [S.CuNO3, S.NO2, S.H2O],
    reducer: 'Cu',
    oxidant: 'HNO3',
    lose: { el: 'Cu', from: 0, to: 2, atoms: 1, times: 1 },
    gain: { el: 'N', from: 5, to: 4, atoms: 1, times: 2 },
    seed: 'Cu + HNO3 -> Cu(NO3)2 + 2NO2 + H2O',
    final: [1, 4, 1, 2, 2],
  },
  {
    id: 'cl2-nabr',
    condition: 'cho nước chlorine vào dung dịch',
    left: [S.Cl2, S.NaBr],
    right: [S.NaCl, S.Br2],
    reducer: 'NaBr',
    oxidant: 'Cl2',
    lose: { el: 'Br', from: -1, to: 0, atoms: 2, molecule: 'to', times: 1 },
    gain: { el: 'Cl', from: 0, to: -1, atoms: 2, molecule: 'from', times: 1 },
    seed: 'Cl2 + 2NaBr -> 2NaCl + Br2',
    final: [1, 2, 2, 1],
  },
  {
    id: 'so2-o2',
    condition: 'có xúc tác, trong sản xuất sulfuric acid',
    left: [S.SO2, S.O2],
    right: [S.SO3],
    reducer: 'SO2',
    oxidant: 'O2',
    lose: { el: 'S', from: 4, to: 6, atoms: 1, times: 2 },
    gain: { el: 'O', from: 0, to: -2, atoms: 2, molecule: 'from', times: 1 },
    seed: '2SO2 + O2 -> 2SO3',
    final: [2, 1, 2],
  },
  {
    id: 'feoh2-o2',
    condition: 'trong không khí ẩm',
    left: [S.FeOH2, S.O2, S.H2O],
    right: [S.FeOH3],
    reducer: 'Fe(OH)2',
    oxidant: 'O2',
    lose: { el: 'Fe', from: 2, to: 3, atoms: 1, times: 4 },
    gain: { el: 'O', from: 0, to: -2, atoms: 2, molecule: 'from', times: 1 },
    seed: '4Fe(OH)2 + O2 + H2O -> 4Fe(OH)3',
    final: [4, 1, 2, 4],
  },
  {
    id: 'feso4-kmno4',
    condition: 'trong môi trường sulfuric acid',
    left: [S.FeSO4, S.KMnO4, S.H2SO4],
    right: [S.FeSO43, S.K2SO4, S.MnSO4, S.H2O],
    reducer: 'FeSO4',
    oxidant: 'KMnO4',
    lose: { el: 'Fe', from: 2, to: 3, atoms: 2, times: 5 },
    gain: { el: 'Mn', from: 7, to: 2, atoms: 1, times: 2 },
    seed: '10FeSO4 + 2KMnO4 + H2SO4 -> 5Fe2(SO4)3 + K2SO4 + 2MnSO4 + H2O',
    final: [10, 2, 8, 5, 1, 2, 8],
  },
];

/** The reactions the step-by-step balancing tool of the lesson walks through. */
export const STEP_REACTIONS = REACTIONS.slice(0, 7);

/**
 * An oxidation number the way the book writes it: the sign before the number.
 * @param {number} on
 */
export const onText = (on) => (on > 0 ? `+${on}` : on < 0 ? `${MINUS}${-on}` : '0');

/**
 * Electrons one half-reaction exchanges as written.
 * @param {Half} half
 */
export const halfElectrons = (half) => half.atoms * Math.abs(half.from - half.to);

/**
 * Electrons the whole balanced equation exchanges.
 * @param {Reaction} r
 */
export const totalElectrons = (r) => r.lose.times * halfElectrons(r.lose);

/**
 * A formula in TeX, without the math delimiters: "Fe2(SO4)3", "SO4^2-".
 * @param {string} formula
 */
export function formulaTex(formula) {
  const [body, charge] = formula.split('^');
  const main = body.replace(/\d+/g, (d) => `_{${d}}`);
  return `\\mathrm{${main}${charge ? `^{${charge}}` : ''}}`;
}

/**
 * The species of a reaction, reactants first.
 * @param {Reaction} r
 */
export const allSpecies = (r) => [...r.left, ...r.right];

/**
 * The unbalanced scheme, as the equation parser reads it.
 * @param {Reaction} r
 */
export function scheme(r) {
  const side = (/** @type {Species[]} */ list) => list.map((s) => s.formula).join(' + ');
  return `${side(r.left)} -> ${side(r.right)}`;
}

/**
 * The balanced equation the way the book prints it.
 * @param {Reaction} r
 */
export function bookText(r) {
  const written = allSpecies(r).map((s, i) => `${r.final[i] > 1 ? r.final[i] : ''}${s.formula}`);
  const n = r.left.length;
  return `${written.slice(0, n).join(' + ')} → ${written.slice(n).join(' + ')}`;
}

/**
 * The balanced equation in TeX, without the math delimiters.
 * @param {Reaction} r
 */
export function equationTex(r) {
  const written = allSpecies(r).map(
    (s, i) => `${r.final[i] > 1 ? r.final[i] : ''}${formulaTex(s.formula)}`,
  );
  const n = r.left.length;
  return `${written.slice(0, n).join(' + ')} \\rightarrow ${written.slice(n).join(' + ')}`;
}

/**
 * The unbalanced scheme in TeX, without the math delimiters.
 * @param {Reaction} r
 */
export function schemeTex(r) {
  const side = (/** @type {Species[]} */ list) =>
    list.map((s) => formulaTex(s.formula)).join(' + ');
  return `${side(r.left)} \\rightarrow ${side(r.right)}`;
}

/** @param {number} on */
const onTex = (on) => (on > 0 ? `+${on}` : String(on));

/**
 * One side of a half-reaction in TeX.
 * @param {Half} half
 * @param {'from' | 'to'} side
 */
function halfSide(half, side) {
  const on = onTex(half[side]);
  if (half.molecule === side) return `\\overset{${on}}{\\mathrm{${half.el}_{${half.atoms}}}}`;
  const lead = half.atoms > 1 ? half.atoms : '';
  return `${lead}\\overset{${on}}{\\mathrm{${half.el}}}`;
}

/**
 * A half-reaction in TeX, without the math delimiters. Leave `electrons` out
 * to print a blank for the learner to fill in.
 * @param {Half} half
 * @param {'lose' | 'gain'} kind
 * @param {number} [electrons]
 */
export function halfTex(half, kind, electrons) {
  const e = `${electrons ?? '\\,?\\,'}e`;
  const from = halfSide(half, 'from');
  const to = halfSide(half, 'to');
  return kind === 'lose'
    ? `${from} \\rightarrow ${to} + ${e}`
    : `${from} + ${e} \\rightarrow ${to}`;
}

/**
 * Splits a formula into pieces to draw: an element with its oxidation number,
 * or a bracket, each with the subscript written after it.
 * @param {Species} species
 * @returns {Token[]}
 */
export function atomTokens(species) {
  /** @type {Token[]} */
  const tokens = [];
  for (const piece of species.formula.match(/[A-Z][a-z]?|\d+|[()]/g) ?? []) {
    if (/^\d/.test(piece)) tokens[tokens.length - 1].sub = piece;
    else if (/^[()]$/.test(piece)) tokens.push({ text: piece, sub: '' });
    else tokens.push({ el: piece, on: species.ox[piece], text: piece, sub: '' });
  }
  return tokens;
}

/**
 * Which half-reaction an atom on one side of the arrow belongs to, or null
 * when its oxidation number stays as it was.
 * @param {Reaction} r
 * @param {string} el
 * @param {number} on
 * @param {'left' | 'right'} side
 * @returns {'lose' | 'gain' | null}
 */
export function changeOf(r, el, on, side) {
  const key = side === 'left' ? 'from' : 'to';
  if (r.lose.el === el && r.lose[key] === on) return 'lose';
  if (r.gain.el === el && r.gain[key] === on) return 'gain';
  return null;
}

/**
 * The multipliers of the two half-reactions compared: electrons given and
 * taken, and whether they match with the smallest whole numbers.
 * @param {Reaction} r
 * @param {number} a multiplier of the half that gives electrons
 * @param {number} b multiplier of the half that takes electrons
 */
export function compareElectrons(r, a, b) {
  const given = a * halfElectrons(r.lose);
  const taken = b * halfElectrons(r.gain);
  return { given, taken, equal: given === taken, lowest: a === r.lose.times && b === r.gain.times };
}

/**
 * @typedef {{ formula: string, target: string, ox: Record<string, number> }} OxCase
 * `ox` holds the oxidation numbers the rules give; `target` is the one to find
 */

/** @type {OxCase[]} */
export const OX_CASES = [
  { formula: 'H2SO4', target: 'S', ox: { H: 1, O: -2 } },
  { formula: 'Fe2O3', target: 'Fe', ox: { O: -2 } },
  { formula: 'SO2', target: 'S', ox: { O: -2 } },
  { formula: 'H2S', target: 'S', ox: { H: 1 } },
  { formula: 'NH3', target: 'N', ox: { H: 1 } },
  { formula: 'HNO3', target: 'N', ox: { H: 1, O: -2 } },
  { formula: 'KMnO4', target: 'Mn', ox: { K: 1, O: -2 } },
  { formula: 'NaClO', target: 'Cl', ox: { Na: 1, O: -2 } },
  { formula: 'K2Cr2O7', target: 'Cr', ox: { K: 1, O: -2 } },
  { formula: 'CH4', target: 'C', ox: { H: 1 } },
  { formula: 'Fe(OH)2', target: 'Fe', ox: { O: -2, H: 1 } },
  { formula: 'Al2(SO4)3', target: 'S', ox: { Al: 3, O: -2 } },
  { formula: 'SO4^2-', target: 'S', ox: { O: -2 } },
  { formula: 'NH4^+', target: 'N', ox: { H: 1 } },
  { formula: 'NO3^-', target: 'N', ox: { O: -2 } },
  { formula: 'Cl2', target: 'Cl', ox: {} },
];

/**
 * The atoms of a case with their count and known oxidation number, and the
 * total the oxidation numbers must reach: the charge of the species.
 * @param {OxCase} c
 */
export function oxParts(c) {
  const { atoms, charge } = parseFormula(c.formula);
  const parts = Object.entries(atoms).map(([el, count]) => ({
    el,
    count,
    on: el === c.target ? null : c.ox[el],
  }));
  return { parts, charge };
}

/**
 * The oxidation number the rules give the target atom.
 * @param {OxCase} c
 */
export function solveOx(c) {
  const { parts, charge } = oxParts(c);
  const known = parts.reduce((sum, p) => sum + (p.on === null ? 0 : p.count * p.on), 0);
  const count = parts.find((p) => p.on === null)?.count ?? 1;
  return (charge - known) / count + 0;
}

/**
 * The sum of the oxidation numbers when the target atom is taken as `x`.
 * @param {OxCase} c
 * @param {number} x
 */
export function oxSum(c, x) {
  return oxParts(c).parts.reduce((sum, p) => sum + p.count * (p.on ?? x), 0);
}

/**
 * The sum written out in TeX: "2 \cdot (+1) + 1 \cdot (+6) + 4 \cdot (-2)".
 * @param {OxCase} c
 * @param {number | null} x the target's oxidation number, or null to print x
 */
export function oxSumTex(c, x) {
  return oxParts(c)
    .parts.map((p) => {
      const value = p.on ?? x;
      return `${p.count} \\cdot ${value === null ? 'x' : `(${onTex(value)})`}`;
    })
    .join(' + ');
}
