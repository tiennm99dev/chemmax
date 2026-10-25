/**
 * Chemical formulas as students type them: H2O, Ca(OH)2, Fe2(SO4)3,
 * K4[Fe(CN)6], CuSO4·5H2O (also CuSO4.5H2O or CuSO4*5H2O), ions with a
 * caret charge (Fe^3+, SO4^2-, OH^-) and an optional state tag ((s), (l),
 * (g), (aq)) that is ignored.
 */
import { element } from './elements.js';

/** @typedef {Record<string, number>} Composition element symbol → atom count */
/** @typedef {{ text: string, kind: 'normal' | 'sub' | 'sup' }} FormulaPart */

/** Error with a Vietnamese message suitable for showing to the learner. */
export class FormulaError extends Error {
  /** @param {string} message */
  constructor(message) {
    super(message);
    this.name = 'FormulaError';
  }
}

const STATE_TAG = /\((?:s|l|g|aq|r|k|dd)\)\s*$/;
const HYDRATE_DOT = /[·.*•]/;
const CHARGE = /\^(\d*)([+-])$/;

/**
 * Splits a species into formula and charge: "SO4^2-" → ["SO4", -2].
 * @param {string} text
 * @returns {[string, number]}
 */
function splitCharge(text) {
  const m = CHARGE.exec(text);
  if (!m) {
    // A bare sign is a charge of one ("Na+", "OH-"); "Fe3+" is ambiguous.
    const bare = /(\d*)([+-])$/.exec(text);
    if (!bare) return [text, 0];
    if (bare[1] !== '') {
      throw new FormulaError(`"${text}": viết điện tích sau dấu ^, ví dụ Fe^3+ hoặc SO4^2-.`);
    }
    return [text.slice(0, -1), bare[2] === '+' ? 1 : -1];
  }
  const size = m[1] === '' ? 1 : Number(m[1]);
  return [text.slice(0, m.index), m[2] === '+' ? size : -size];
}

/**
 * Normalises typed input: trims, drops a state tag, turns Unicode subscripts
 * and superscripts into plain digits and signs.
 * @param {string} text
 */
export function normalizeFormula(text) {
  const sub = '₀₁₂₃₄₅₆₇₈₉';
  const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  let s = text.trim().replace(STATE_TAG, '').trim();
  s = s.replace(/[₀-₉]/g, (c) => String(sub.indexOf(c)));
  s = s.replace(/([⁰-⁹¹²³]*)([⁺⁻])$/, (_, digits, sign) => {
    const n = [...digits].map((c) => String(sup.indexOf(c))).join('');
    return `^${n}${sign === '⁺' ? '+' : '-'}`;
  });
  return s.replace(/−/g, '-');
}

/**
 * Parses a formula into its atom counts and charge.
 * @param {string} text
 * @returns {{ atoms: Composition, charge: number }}
 */
export function parseFormula(text) {
  const [body, charge] = splitCharge(normalizeFormula(text));
  if (body === '') throw new FormulaError('Công thức đang trống.');
  /** @type {Composition} */
  const atoms = {};
  for (const [i, part] of body.split(HYDRATE_DOT).entries()) {
    const m = /^(\d*)(.*)$/.exec(part);
    const [, lead, rest] = m ?? ['', '', part];
    if (i === 0 && lead !== '') {
      throw new FormulaError(`"${text}": công thức không bắt đầu bằng chữ số.`);
    }
    if (rest === '') throw new FormulaError(`"${text}": thiếu công thức sau dấu chấm.`);
    const times = lead === '' ? 1 : Number(lead);
    for (const [symbol, n] of Object.entries(parseGroup(rest, text))) {
      atoms[symbol] = (atoms[symbol] ?? 0) + n * times;
    }
  }
  return { atoms, charge };
}

/**
 * @param {string} s
 * @param {string} original for error messages
 * @returns {Composition}
 */
function parseGroup(s, original) {
  /** @type {Composition[]} */
  const stack = [{}];
  /** @type {string[]} */
  const open = [];
  let i = 0;
  const readCount = () => {
    const m = /^\d+/.exec(s.slice(i));
    if (!m) return 1;
    i += m[0].length;
    const n = Number(m[0]);
    if (n === 0) throw new FormulaError(`"${original}": chỉ số không thể bằng 0.`);
    return n;
  };
  const add = (/** @type {Composition} */ into, /** @type {Composition} */ from, k = 1) => {
    for (const [sym, n] of Object.entries(from)) into[sym] = (into[sym] ?? 0) + n * k;
  };
  while (i < s.length) {
    const c = s[i];
    if (c === '(' || c === '[') {
      open.push(c === '(' ? ')' : ']');
      stack.push({});
      i += 1;
    } else if (c === ')' || c === ']') {
      if (open.pop() !== c) throw new FormulaError(`"${original}": dấu ngoặc không khớp.`);
      i += 1;
      const group = /** @type {Composition} */ (stack.pop());
      add(stack[stack.length - 1], group, readCount());
    } else if (/[A-Z]/.test(c)) {
      const symbol = /^[A-Z][a-z]?/.exec(s.slice(i))?.[0] ?? c;
      const known = element(symbol) ? symbol : element(c) ? c : null;
      if (!known) throw new FormulaError(`"${original}": không có nguyên tố "${symbol}".`);
      i += known.length;
      add(stack[stack.length - 1], { [known]: 1 }, readCount());
    } else {
      throw new FormulaError(`"${original}": kí tự "${c}" không hợp lệ.`);
    }
  }
  if (open.length) throw new FormulaError(`"${original}": thiếu dấu đóng ngoặc.`);
  return stack[0];
}

/**
 * Molar mass in g/mol from the atomic weights: H2O → 18,015.
 * @param {string} text
 */
export function molarMass(text) {
  const { atoms } = parseFormula(text);
  let m = 0;
  for (const [symbol, n] of Object.entries(atoms)) m += (element(symbol)?.mass ?? 0) * n;
  return Math.round(m * 1000) / 1000;
}

/**
 * Splits a formula into display parts: digits after a symbol or bracket are
 * subscripts, the hydrate multiplier is normal text and the charge is a
 * superscript. "CuSO4·5H2O" → Cu S O ₄ · 5 H ₂ O.
 * @param {string} text
 * @returns {FormulaPart[]}
 */
export function formulaParts(text) {
  const [body, charge] = splitCharge(normalizeFormula(text));
  /** @type {FormulaPart[]} */
  const parts = [];
  const push = (/** @type {string} */ t, /** @type {FormulaPart['kind']} */ kind) => {
    const last = parts[parts.length - 1];
    if (last && last.kind === kind) last.text += t;
    else parts.push({ text: t, kind });
  };
  let afterDot = false;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (HYDRATE_DOT.test(c)) {
      push('·', 'normal');
      afterDot = true;
    } else if (/\d/.test(c)) {
      push(c, afterDot || i === 0 ? 'normal' : 'sub');
    } else {
      afterDot = false;
      push(c, 'normal');
    }
  }
  if (charge !== 0) {
    const size = Math.abs(charge) === 1 ? '' : String(Math.abs(charge));
    push(`${size}${charge > 0 ? '+' : '−'}`, 'sup');
  }
  return parts;
}

/**
 * Plain-text formula with Unicode subscripts and superscripts, for
 * aria-labels and readouts: "Fe2(SO4)3" → "Fe₂(SO₄)₃".
 * @param {string} text
 */
export function prettyFormula(text) {
  const sub = '₀₁₂₃₄₅₆₇₈₉';
  const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  return formulaParts(text)
    .map((p) =>
      p.kind === 'sub'
        ? p.text.replace(/\d/g, (d) => sub[Number(d)])
        : p.kind === 'sup'
          ? p.text
              .replace(/\d/g, (d) => sup[Number(d)])
              .replace('+', '⁺')
              .replace('−', '⁻')
          : p.text,
    )
    .join('');
}
