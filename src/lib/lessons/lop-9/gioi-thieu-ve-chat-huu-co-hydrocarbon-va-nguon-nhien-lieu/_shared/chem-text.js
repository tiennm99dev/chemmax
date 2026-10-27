/**
 * Chemical text the way the book prints it, as plain strings: equations and
 * condensed structural formulas such as "CH3–CH2–OH",
 * "2C2H6 + 7O2 → 4CO2 + 6H2O" or "(–CH2–CH2–)n". A digit right after a
 * letter or a closing bracket is a subscript, as is the "n" of a polymer;
 * a leading coefficient stays on the line.
 */

/** @typedef {{ text: string, sub: boolean }} Run */

const SUB_DIGITS = '₀₁₂₃₄₅₆₇₈₉';

/**
 * @param {string} ch
 * @param {string} prev
 */
function isSub(ch, prev) {
  if (/[0-9]/.test(ch)) return /[A-Za-z)]/.test(prev);
  return ch === 'n' && prev === ')';
}

/**
 * Splits chemical text into normal and subscript runs.
 * @param {string} text
 * @returns {Run[]}
 */
export function chemRuns(text) {
  /** @type {Run[]} */
  const runs = [];
  let prev = '';
  for (const ch of text) {
    const sub = isSub(ch, prev) || (/[0-9]/.test(ch) && runs.at(-1)?.sub === true);
    const last = runs.at(-1);
    if (last && last.sub === sub) last.text += ch;
    else runs.push({ text: ch, sub });
    prev = ch;
  }
  return runs;
}

/**
 * The same text with Unicode subscripts, for labels and screen readers.
 * @param {string} text
 */
export function chemUnicode(text) {
  return chemRuns(text)
    .map((r) =>
      r.sub ? [...r.text].map((c) => (c === 'n' ? 'ₙ' : SUB_DIGITS[Number(c)])).join('') : r.text,
    )
    .join('');
}
