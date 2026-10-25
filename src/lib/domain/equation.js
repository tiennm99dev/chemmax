/**
 * Chemical equations: parsing "Fe + O2 -> Fe3O4", balancing by the null
 * space of the atom-conservation matrix in exact rational arithmetic, and
 * counting atoms on both sides for a learner's own coefficients.
 *
 * The matrix has one row per element (plus one for charge when ions occur)
 * and one column per species, products negated; the balanced coefficients
 * are the smallest positive integer vector x with A·x = 0.
 */
import { FormulaError, parseFormula } from './formula.js';

/** @typedef {import('./formula.js').Composition} Composition */
/** @typedef {{ formula: string, atoms: Composition, charge: number, coefficient: number | null }} Species */
/** @typedef {{ reactants: Species[], products: Species[] }} Equation */

/**
 * @typedef {{ ok: true, coefficients: number[] }
 *   | { ok: false, reason: 'impossible' | 'ambiguous', message: string }} BalanceResult
 */

const ARROW = /\s*(?:->|→|⟶|⇌|<=>|<->|=)\s*/;

/**
 * Splits one side of an equation at the "+" signs that separate species,
 * leaving charge signs ("Fe^3+", "Na+") in place.
 * @param {string} side
 */
function splitSide(side) {
  /** @type {string[]} */
  const parts = [];
  let start = 0;
  for (let i = 0; i < side.length; i++) {
    if (side[i] !== '+') continue;
    const before = side.slice(start, i);
    const after = side.slice(i + 1);
    const caret = /\^\d*$/.test(before);
    const trailing = /\S$/.test(before) && (after.trim() === '' || /^\s+\+/.test(after));
    if (caret || trailing) continue;
    parts.push(before);
    start = i + 1;
  }
  parts.push(side.slice(start));
  return parts.map((p) => p.trim());
}

/**
 * Parses one species with an optional leading coefficient: "3O2" → O2 × 3.
 * @param {string} text
 * @returns {Species}
 */
export function parseSpecies(text) {
  const m = /^(\d+)\s*(.*)$/.exec(text.trim());
  const coefficient = m ? Number(m[1]) : null;
  const formula = (m ? m[2] : text).trim();
  if (formula === '') throw new FormulaError('Thiếu công thức của một chất.');
  const { atoms, charge } = parseFormula(formula);
  return { formula, atoms, charge, coefficient };
}

/**
 * Parses an equation written with any common arrow (->, →, =, ⇌).
 * @param {string} text
 * @returns {Equation}
 */
export function parseEquation(text) {
  const sides = text.split(ARROW);
  if (sides.length !== 2) {
    throw new FormulaError('Phương trình cần đúng một mũi tên "→" (gõ -> hoặc =).');
  }
  const [left, right] = sides.map((s) => splitSide(s));
  if (left.some((s) => s === '') || right.some((s) => s === '')) {
    throw new FormulaError('Mỗi vế cần ít nhất một chất, và không để dấu "+" thừa.');
  }
  return { reactants: left.map(parseSpecies), products: right.map(parseSpecies) };
}

/** @param {bigint} a @param {bigint} b @returns {bigint} */
function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b) [a, b] = [b, a % b];
  return a;
}

/** A rational as [numerator, denominator], denominator > 0, in lowest terms. */
/** @typedef {[bigint, bigint]} Q */

/** @param {bigint} n @param {bigint} [d] @returns {Q} */
function q(n, d = 1n) {
  if (d < 0n) [n, d] = [-n, -d];
  const g = gcd(n, d) || 1n;
  return [n / g, d / g];
}
/** @param {Q} a @param {Q} b */
const sub = (a, b) => q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
/** @param {Q} a @param {Q} b */
const mul = (a, b) => q(a[0] * b[0], a[1] * b[1]);
/** @param {Q} a @param {Q} b */
const div = (a, b) => q(a[0] * b[1], a[1] * b[0]);

/**
 * The atom-conservation matrix: rows are elements (in order of first
 * appearance) and, when any species is charged, a final charge row.
 * @param {Equation} eq
 * @returns {{ rows: string[], matrix: number[][] }}
 */
export function conservationMatrix(eq) {
  const species = [...eq.reactants, ...eq.products];
  /** @type {string[]} */
  const rows = [];
  for (const s of species)
    for (const sym of Object.keys(s.atoms)) if (!rows.includes(sym)) rows.push(sym);
  const charged = species.some((s) => s.charge !== 0);
  const sign = (/** @type {number} */ j) => (j < eq.reactants.length ? 1 : -1);
  const matrix = rows.map((sym) => species.map((s, j) => sign(j) * (s.atoms[sym] ?? 0)));
  if (charged) {
    rows.push('charge');
    matrix.push(species.map((s, j) => sign(j) * s.charge));
  }
  return { rows, matrix };
}

/**
 * Basis of the null space of an integer matrix, in exact rationals.
 * @param {number[][]} matrix
 * @param {number} cols
 * @returns {Q[][]}
 */
export function nullSpace(matrix, cols) {
  /** @type {Q[][]} */
  const m = matrix.map((row) => row.map((v) => q(BigInt(v))));
  /** @type {number[]} */
  const pivots = [];
  let r = 0;
  for (let c = 0; c < cols && r < m.length; c++) {
    const p = m.findIndex((row, i) => i >= r && row[c][0] !== 0n);
    if (p < 0) continue;
    [m[r], m[p]] = [m[p], m[r]];
    const lead = m[r][c];
    m[r] = m[r].map((v) => div(v, lead));
    for (let i = 0; i < m.length; i++) {
      if (i === r || m[i][c][0] === 0n) continue;
      const f = m[i][c];
      m[i] = m[i].map((v, k) => sub(v, mul(f, m[r][k])));
    }
    pivots.push(c);
    r += 1;
  }
  const free = Array.from({ length: cols }, (_, c) => c).filter((c) => !pivots.includes(c));
  return free.map((f) => {
    /** @type {Q[]} */
    const v = Array.from({ length: cols }, () => q(0n));
    v[f] = q(1n);
    pivots.forEach((pc, i) => {
      v[pc] = q(-m[i][f][0], m[i][f][1]);
    });
    return v;
  });
}

/**
 * Balances an equation, ignoring any coefficients written in it.
 * @param {Equation} eq
 * @returns {BalanceResult}
 */
export function balance(eq) {
  const cols = eq.reactants.length + eq.products.length;
  const { matrix } = conservationMatrix(eq);
  const basis = nullSpace(matrix, cols);
  if (basis.length === 0) {
    return {
      ok: false,
      reason: 'impossible',
      message: 'Không thể cân bằng: kiểm tra lại công thức các chất và vế của phương trình.',
    };
  }
  if (basis.length > 1) {
    return {
      ok: false,
      reason: 'ambiguous',
      message:
        'Phương trình gộp nhiều phản ứng độc lập nên có nhiều cách cân bằng; hãy tách thành từng phản ứng.',
    };
  }
  const v = basis[0];
  const lcm = v.reduce((l, [, d]) => (l * d) / gcd(l, d), 1n);
  let ints = v.map(([n, d]) => (n * lcm) / d);
  const g = ints.reduce((a, b) => gcd(a, b), 0n) || 1n;
  ints = ints.map((x) => x / g);
  if (ints.every((x) => x <= 0n)) ints = ints.map((x) => -x);
  if (ints.some((x) => x <= 0n)) {
    return {
      ok: false,
      reason: 'impossible',
      message: 'Không thể cân bằng với hệ số dương: có chất không tham gia hoặc đặt nhầm vế.',
    };
  }
  return { ok: true, coefficients: ints.map(Number) };
}

/**
 * Atoms of each element (and the total charge) on each side for the given
 * coefficients.
 * @param {Equation} eq
 * @param {number[]} coefficients one per species, reactants first
 * @returns {Array<{ symbol: string, left: number, right: number }>}
 */
export function tally(eq, coefficients) {
  const { rows } = conservationMatrix(eq);
  const n = eq.reactants.length;
  const count =
    (/** @type {Species[]} */ list, offset = 0) =>
    (/** @type {string} */ sym) =>
      list.reduce(
        (sum, s, j) =>
          sum +
          (coefficients[offset + j] ?? 0) * (sym === 'charge' ? s.charge : (s.atoms[sym] ?? 0)),
        0,
      );
  const left = count(eq.reactants);
  const right = count(eq.products, n);
  return rows.map((symbol) => ({ symbol, left: left(symbol), right: right(symbol) }));
}

/**
 * @param {Equation} eq
 * @param {number[]} coefficients
 */
export function isBalanced(eq, coefficients) {
  if (coefficients.some((c) => !(c > 0))) return false;
  return tally(eq, coefficients).every((t) => t.left === t.right);
}

/**
 * Writes an equation with coefficients, leaving out ones: "4Fe + 3O2 → 2Fe2O3".
 * @param {Equation} eq
 * @param {number[]} coefficients
 */
export function formatEquation(eq, coefficients) {
  const n = eq.reactants.length;
  const side = (/** @type {Species[]} */ list, offset = 0) =>
    list
      .map(
        (s, j) => `${coefficients[offset + j] === 1 ? '' : coefficients[offset + j]}${s.formula}`,
      )
      .join(' + ');
  return `${side(eq.reactants)} → ${side(eq.products, n)}`;
}
