/**
 * "Find the ester" puzzles: each one describes an ester X only through its
 * hydrolysis (the products, its molecular formula with the alcohol formed,
 * or the masses of ester and salt in a saponification). The learner builds
 * X from an acid part and an alcohol part; any pair that fits every clue is
 * right, and the tests make sure exactly one pair of the part lists fits.
 */
import { numTex, tidy } from '#lib/core/number-format.js';
import { allEsters, ester, texFormula } from '../_shared/ester.js';

/** @typedef {import('../_shared/ester.js').Ester} Ester */

/**
 * @typedef {object} Puzzle
 * @property {'base' | 'acid' | 'formula' | 'mass'} kind
 * @property {string} acid acid part id of the ester meant
 * @property {string} alcohol alcohol part id of the ester meant
 * @property {number} [mol] moles saponified, for a mass puzzle
 */

/** @type {Puzzle[]} */
export const PUZZLES = [
  { kind: 'base', acid: 'acetate', alcohol: 'ethyl' },
  { kind: 'acid', acid: 'formate', alcohol: 'methyl' },
  { kind: 'formula', acid: 'propionate', alcohol: 'ethyl' },
  { kind: 'mass', acid: 'acrylate', alcohol: 'methyl', mol: 0.1 },
  { kind: 'base', acid: 'benzoate', alcohol: 'methyl' },
  { kind: 'formula', acid: 'acetate', alcohol: 'isoamyl' },
  { kind: 'mass', acid: 'butyrate', alcohol: 'ethyl', mol: 0.05 },
  { kind: 'formula', acid: 'acetate', alcohol: 'benzyl' },
];

/**
 * Masses in a mass puzzle.
 * @param {Puzzle} p
 */
export function massesOf(p) {
  const e = ester(p.acid, p.alcohol);
  const mol = p.mol ?? 0.1;
  return { ester: tidy(mol * e.molar, 6), salt: tidy(mol * e.saltMolar, 6) };
}

/**
 * The puzzle as rich text.
 * @param {Puzzle} p
 */
export function puzzleText(p) {
  const e = ester(p.acid, p.alcohol);
  const alc = `${e.alcohol.alcohol} ($${texFormula(e.alcohol.formula)}$)`;
  if (p.kind === 'base') {
    return `Thuỷ phân ester X trong dung dịch NaOH, đun nóng, thu được ${e.acid.salt} ($${texFormula(e.saltFormula)}$) và ${alc}. Xác định X.`;
  }
  if (p.kind === 'acid') {
    return `Thuỷ phân ester X trong môi trường acid thu được ${e.acid.acid} ($${texFormula(e.acidFormula)}$) và ${alc}. Xác định X.`;
  }
  if (p.kind === 'formula') {
    return `Ester đơn chức X có công thức phân tử $${texFormula(e.molecular)}$. Thuỷ phân X thu được ${alc} và một carboxylic acid. Xác định X.`;
  }
  const m = massesOf(p);
  return `Xà phòng hoá hoàn toàn $${numTex(m.ester)}$ g ester đơn chức X bằng dung dịch NaOH vừa đủ, thu được $${numTex(m.salt)}$ g muối và ${alc}. Xác định X.`;
}

/**
 * Whether an ester fits every clue of a puzzle.
 * @param {Puzzle} p
 * @param {Ester} x
 */
export function fits(p, x) {
  const e = ester(p.acid, p.alcohol);
  if (x.alcohol.id !== e.alcohol.id) return false;
  if (p.kind === 'base' || p.kind === 'acid') return x.acid.id === e.acid.id;
  if (p.kind === 'formula') return x.molecular === e.molecular;
  const m = massesOf(p);
  // Same moles of ester and of salt: m(ester)/M(ester) = m(salt)/M(salt).
  return Math.abs(m.ester * x.saltMolar - m.salt * x.molar) < 1e-6;
}

/**
 * Every ester of the part lists that fits a puzzle.
 * @param {Puzzle} p
 */
export function solutions(p) {
  return allEsters().filter((x) => fits(p, x));
}

/**
 * Checks a built ester and explains the result.
 * @param {Puzzle} p
 * @param {string} acidId
 * @param {string} alcoholId
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(p, acidId, alcoholId) {
  const x = ester(acidId, alcoholId);
  const e = ester(p.acid, p.alcohol);
  if (fits(p, x)) {
    return {
      ok: true,
      text: `Đúng: X là ${x.name} $${texFormula(x.formula)}$. ${reason(p, e)}`,
    };
  }
  if (x.alcohol.id !== e.alcohol.id) {
    return {
      ok: false,
      text: `${x.name} khi thuỷ phân cho ${x.alcohol.alcohol}, không phải ${e.alcohol.alcohol}. Gốc $\\mathrm{R'}$ của ester là gốc hydrocarbon của alcohol thu được.`,
    };
  }
  if (p.kind === 'formula') {
    return {
      ok: false,
      text: `${x.name} có công thức phân tử $${texFormula(x.molecular)}$, chưa khớp. Bớt phần $\\mathrm{OR'}$ ra rồi đếm số C, H còn lại cho gốc acid.`,
    };
  }
  if (p.kind === 'mass') {
    return {
      ok: false,
      text: `Với ${x.name} ($M = ${x.molar}$), số mol ester và số mol muối không bằng nhau. Lập phương trình $\\dfrac{m_{\\text{ester}}}{M_{\\text{ester}}} = \\dfrac{m_{\\text{muối}}}{M_{\\text{muối}}}$.`,
    };
  }
  return {
    ok: false,
    text: `${x.name} khi thuỷ phân cho gốc acid ${x.acid.name}, không khớp với sản phẩm đề cho. Gốc $\\mathrm{RCOO}$ của ester lấy từ acid (hoặc muối) thu được.`,
  };
}

/**
 * Why the right ester fits.
 * @param {Puzzle} p
 * @param {Ester} e
 */
function reason(p, e) {
  if (p.kind === 'base') return `Phương trình: $${texEquation(e.baseEquation)}$.`;
  if (p.kind === 'acid') return `Phương trình: $${texEquation(e.acidEquation)}$.`;
  if (p.kind === 'formula') {
    return `Bớt gốc $${texFormula(e.alcohol.r)}$ khỏi $${texFormula(e.molecular)}$, phần còn lại là gốc $${texFormula(`${e.acid.r}COO`)}$.`;
  }
  const m = massesOf(p);
  return `$n = \\dfrac{${numTex(m.ester)}}{${e.molar}} = \\dfrac{${numTex(m.salt)}}{${e.saltMolar}} = ${numTex(p.mol ?? 0.1)}$ mol.`;
}

/**
 * A book-style equation as TeX.
 * @param {string} text
 */
export function texEquation(text) {
  return text
    .split(' ')
    .map((t) => {
      if (t === '+') return '+';
      if (t === '→') return '\\rightarrow';
      if (t === '⇌') return '\\rightleftharpoons';
      const m = /^(\d*)(.+)$/.exec(t);
      return m ? `${m[1]}${texFormula(m[2])}` : t;
    })
    .join(' ');
}
