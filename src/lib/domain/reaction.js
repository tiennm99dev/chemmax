/**
 * Chemical equations written the way the book prints them, as plain text:
 * "Zn + 2HCl → ZnCl2 + H2↑", with ↑ for a gas given off and ↓ for a
 * precipitate. `terms` splits one into coefficient, formula and mark for
 * drawing; `isBalancedText` checks it against atom conservation.
 */
import { isBalanced, parseEquation } from '#lib/domain/equation.js';

/** @typedef {{ coefficient: number, formula: string, mark: '' | '↑' | '↓' }} Term */
/** @typedef {{ left: Term[], arrow: string, right: Term[] }} SplitEquation */

const ARROW = /\s*(→|⇌)\s*/;

/**
 * @param {string} text one species with an optional coefficient and mark
 * @returns {Term}
 */
function term(text) {
  const t = text.trim();
  const mark = t.endsWith('↑') ? '↑' : t.endsWith('↓') ? '↓' : '';
  const body = mark ? t.slice(0, -1) : t;
  const m = /^(\d+)(.+)$/.exec(body);
  return {
    coefficient: m ? Number(m[1]) : 1,
    formula: m ? m[2] : body,
    mark: /** @type {Term['mark']} */ (mark),
  };
}

/**
 * Splits "A + 2B → C↓ + D" into its two sides.
 * @param {string} text
 * @returns {SplitEquation}
 */
export function terms(text) {
  const parts = text.split(ARROW);
  if (parts.length !== 3) throw new Error(`Không đọc được phương trình: ${text}`);
  const side = (/** @type {string} */ s) => s.split(' + ').map(term);
  return { left: side(parts[0]), arrow: parts[1], right: side(parts[2]) };
}

/**
 * Whether a book-style equation conserves every element. Bond marks of
 * condensed structural formulas (–, =, ≡) are ignored, so
 * "CH2=CH2 + Br2 → BrCH2–CH2Br" can be checked too.
 * @param {string} text
 */
export function isBalancedText(text) {
  const { left, right } = terms(text);
  const plain = (/** @type {Term[]} */ list) =>
    list.map((t) => t.formula.replace(/[–=≡]/g, '')).join(' + ');
  const eq = parseEquation(`${plain(left)} -> ${plain(right)}`);
  return isBalanced(
    eq,
    [...left, ...right].map((t) => t.coefficient),
  );
}
