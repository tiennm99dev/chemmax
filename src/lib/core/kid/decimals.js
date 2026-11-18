// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Grade 5 decimals the book's way, kept exact as digit strings and integers
 * scaled by a power of ten: the parts of '2,47', writing and reading a scaled
 * decimal ("hai phẩy bốn mươi bảy"), dropping trailing zeros, a computed value
 * written with a decimal comma and grouped thousands, and the options of a
 * tap-the-answer question. Pure and DOM-free.
 */
import { scaledText } from '#lib/core/decimal.js';
import { fmt, formatNumber, tidy } from '#lib/core/number-format.js';
import { DIGIT_WORDS } from './numbers.js';
import { readWhole } from './whole-numbers.js';

/** The places after the comma, from the left. */
export const DECIMAL_PLACES = /** @type {const} */ (['phần mười', 'phần trăm', 'phần nghìn']);

/**
 * A decimal as its two parts: '2,47' gives { whole: '2', frac: '47' }, '5'
 * gives { whole: '5', frac: '' }.
 * @param {string} text
 */
export function partsOf(text) {
  const [whole, frac = ''] = text.split(',');
  return { whole, frac };
}

/**
 * A decimal as an integer scaled by 10^places: '2,47' gives
 * { scaled: 247, places: 2 }.
 * @param {string} text
 */
export function toScaled(text) {
  const { whole, frac } = partsOf(text);
  return { scaled: Number(whole + frac), places: frac.length };
}

/**
 * Writes an integer scaled by 10^places as a decimal, places kept:
 * (247, 2) → '2,47', (50, 2) → '0,50'.
 * @param {number} scaled
 * @param {number} places
 */
export const decText = (scaled, places) => scaledText(scaled, places);

/**
 * The decimal without the zeros at the end of its decimal part: '2,50'
 * gives '2,5', '3,00' gives '3'.
 * @param {string} text
 */
export function trimZeros(text) {
  const { whole, frac } = partsOf(text);
  const kept = frac.replace(/0+$/, '');
  return kept === '' ? whole : `${whole},${kept}`;
}

/**
 * A computed value as the book writes it: binary noise rounded away, zeros at
 * the end of the decimal part dropped: 5.36 → '5,36', 12000 → '12 000'.
 * @param {number} value
 */
export const num = (value) => formatNumber(tidy(value, 6), 6);

/**
 * An integer scaled by 10^places written as a decimal, every place kept and
 * thousands grouped: (12053, 3) → '12,053', (50, 2) → '0,50', (123450, 1) →
 * '12 345,0'.
 * @param {number} scaled
 * @param {number} places
 */
export function placesText(scaled, places) {
  const digits = String(scaled).padStart(places + 1, '0');
  const whole = fmt(Number(digits.slice(0, digits.length - places)));
  return places === 0 ? whole : `${whole},${digits.slice(-places)}`;
}

/**
 * How the book reads a decimal given as an integer scaled by 10^places: the
 * whole part, "phẩy", then the decimal part, each leading zero read "không":
 * (247, 2) is "hai phẩy bốn mươi bảy", (5, 2) is "không phẩy không năm".
 * @param {number} scaled
 * @param {number} places
 */
export function readScaled(scaled, places) {
  const whole = readWhole(Math.floor(scaled / 10 ** places));
  if (places === 0) return whole;
  const frac = String(scaled % 10 ** places).padStart(places, '0');
  const lead = /^0*/.exec(frac)?.[0].length ?? 0;
  const zeros = Array.from({ length: lead }, () => DIGIT_WORDS[0]);
  const rest = frac.slice(lead);
  return [whole, 'phẩy', ...zeros, ...(rest ? [readWhole(Number(rest))] : [])].join(' ');
}

/**
 * Up to four number options in increasing order: the right value, then the
 * slips a child makes, then the `near` steps added to it. Only positive values
 * other than the right one are kept, each written the book's way and followed
 * by `unit` when one is given ('%' with no space before it, as the book
 * writes it).
 * @param {number} right
 * @param {number[]} slips
 * @param {{ near?: number[], unit?: string }} [options]
 * @returns {{ options: string[], answer: number }}
 */
export function valueOptions(right, slips, { near = [], unit } = {}) {
  const r = tidy(right, 6);
  const seen = new Set([num(r)]);
  /** @type {number[]} */
  const others = [];
  for (const v of [...slips, ...near.map((d) => r + d)].map((x) => tidy(x, 6))) {
    if (v > 0 && !seen.has(num(v)) && others.length < 3) {
      seen.add(num(v));
      others.push(v);
    }
  }
  const values = [r, ...others].sort((x, y) => x - y);
  return {
    options: values.map((v) => (unit ? `${num(v)}${unit === '%' ? '' : ' '}${unit}` : num(v))),
    answer: values.indexOf(r),
  };
}
