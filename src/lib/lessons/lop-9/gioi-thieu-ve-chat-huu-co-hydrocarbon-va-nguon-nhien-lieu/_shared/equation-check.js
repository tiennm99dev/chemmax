/**
 * Atom-conservation check for book-style equation text such as
 * "2C2H6 + 7O2 → 4CO2 + 6H2O": every element has as many atoms on the left
 * as on the right. Bond marks of condensed formulas (–, =) are ignored, so
 * "CH2=CH2 + Br2 → BrCH2–CH2Br" can be checked too.
 */
import { parseFormula } from '#lib/domain/formula.js';

/**
 * @param {string} side
 * @returns {Map<string, number>}
 */
function count(side) {
  /** @type {Map<string, number>} */
  const out = new Map();
  for (const raw of side.split(' + ')) {
    const t = raw.trim().replace(/[↑↓]$/, '').replace(/[–=≡]/g, '');
    const m = /^(\d*)(.+)$/.exec(t);
    const k = m && m[1] ? Number(m[1]) : 1;
    const { atoms } = parseFormula(m ? m[2] : t);
    for (const [el, n] of Object.entries(atoms)) out.set(el, (out.get(el) ?? 0) + k * n);
  }
  return out;
}

/** @param {string} text */
export function isBalancedText(text) {
  const [left, right] = text.split(/\s*→\s*/);
  const a = count(left);
  const b = count(right);
  return a.size === b.size && [...a].every(([el, n]) => b.get(el) === n);
}
