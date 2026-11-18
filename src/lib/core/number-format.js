// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Vietnamese number writing for widgets, visuals and live readouts. The
 * decimal mark is always a comma (52,9, never 52.9). Written by hand rather
 * than with Intl so the output never depends on the ICU data a runtime ships.
 *
 * - `formatNumber`: a narrow space groups thousands the book's way, trailing
 *   decimal zeros dropped (12345.5 → '12 345,5').
 * - `formatFixed`: a fixed number of decimals, zeros kept (5 → '5,0').
 * - `texNumber`: a formatted number made safe for TeX (`3{,}5`, `1\,000`), so
 *   KaTeX does not put a space after the decimal comma and groups by a thin space.
 * - `numTex`: a number as TeX source the book's way, digits grouped by a thin
 *   space (`12\,345{,}5`).
 * - `hoursText`: a time in hours as rich text, '$1$ giờ $12$ phút'.
 * - `tidy`: rounds away binary noise (0.1 + 0.2) before a value is compared
 *   or written.
 * - `fmt`, `sup`, `powText`, `readNatural`: natural numbers the way the lower
 *   secondary books print them, grouped by a narrow space (2 345), with
 *   superscript exponents (2⁵).
 * - `MINUS`, `intText`, `operand`, `readInteger`: integers with the book's
 *   minus sign (−1 234), bracketed inside an operation ((−5) + 3).
 */

const SUPERSCRIPT = '⁰¹²³⁴⁵⁶⁷⁸⁹';

/**
 * Narrow no-break space used between groups of three digits, the thin space
 * the books print (1 000); TeX writes it `\,`.
 */
export const GROUP = '\u202f';

/**
 * @param {number} value
 * @param {number} decimals
 * @param {boolean} keepZeros
 */
function write(value, decimals, keepZeros) {
  const fixed = Math.abs(value).toFixed(decimals);
  const [int, frac = ''] = fixed.split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, GROUP);
  const digits = keepZeros ? frac : frac.replace(/0+$/, '');
  const sign = value < 0 && Number(fixed) !== 0 ? '−' : '';
  return digits ? `${sign}${grouped},${digits}` : `${sign}${grouped}`;
}

/**
 * A number with a narrow space (`GROUP`) grouping thousands and ',' as the
 * decimal mark, rounded to at most `maxDecimals` places: 12345.5 → '12 345,5',
 * -0.25 → '−0,25'.
 * @param {number} value
 * @param {number} [maxDecimals]
 */
export function formatNumber(value, maxDecimals = 6) {
  return write(value, maxDecimals, false);
}

/**
 * Like `formatNumber` with exactly `decimals` places, the Vietnamese
 * `toFixed`: (52.94, 1) → '52,9', (5, 1) → '5,0', (22500, 1) → '22 500,0'.
 * @param {number} value
 * @param {number} decimals
 */
export function formatFixed(value, decimals) {
  return write(value, decimals, true);
}

/**
 * A formatted number for TeX source: '3,5' → '3{,}5', '1 000' → '1\,000'.
 * KaTeX spaces a bare comma as punctuation, which reads as a list rather than
 * a decimal, and refuses the narrow space in strict mode.
 * @param {string} text
 */
export function texNumber(text) {
  return text.replace(/,/g, '{,}').replaceAll(GROUP, '\\,');
}

/**
 * Rounds away binary noise to `places` decimals, so 0.1 + 0.2 equals 0.3 and
 * −0 becomes 0.
 * @param {number} value
 * @param {number} [places]
 */
export function tidy(value, places = 9) {
  const r = Math.round(value * 10 ** places) / 10 ** places;
  return Object.is(r, -0) ? 0 : r;
}

/**
 * A number as TeX source, grouped the book's way: digits in threes split by a
 * thin space (`\,`), the decimal comma braced and an ASCII minus, rounded to
 * at most `maxDecimals` places: 12345.5 → '12\,345{,}5', -2.5 → '-2{,}5'.
 * @param {number} value
 * @param {number} [maxDecimals]
 */
export function numTex(value, maxDecimals = 6) {
  return texNumber(formatNumber(value, maxDecimals)).replace(MINUS, '-');
}

/**
 * A time in hours as rich text with TeX numbers, the way the book writes a
 * duration: 1.2 gives '$1$ giờ $12$ phút', 0.5 gives '$30$ phút', 4 gives
 * '$4$ giờ'.
 * @param {number} hours
 */
export function hoursText(hours) {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (m === 0) return `$${h}$ giờ`;
  return h === 0 ? `$${m}$ phút` : `$${h}$ giờ $${m}$ phút`;
}

/**
 * A natural number with its digits grouped by threes: 1234567 → '1 234 567'.
 * Four-digit numbers are grouped too, as in the textbook (2 345).
 * @param {number} n
 */
export function fmt(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, GROUP);
}

/**
 * Superscript digits for an exponent: 12 → '¹²'.
 * @param {number} n
 */
export function sup(n) {
  return String(n)
    .split('')
    .map((d) => SUPERSCRIPT[Number(d)])
    .join('');
}

/**
 * A power written in plain text: (2, 5) → '2⁵'.
 * @param {number | string} base
 * @param {number} exponent
 */
export function powText(base, exponent) {
  return `${typeof base === 'number' ? fmt(base) : base}${sup(exponent)}`;
}

/**
 * Reads a natural number typed by a learner: '1024', '1 024' or '1.024'.
 * Returns null for anything else (decimals, signs, letters, empty input).
 * @param {string} text
 * @returns {number | null}
 */
export function readNatural(text) {
  const s = text.trim().replace(/\s/g, '');
  if (/^\d{1,3}(\.\d{3})+$/.test(s)) return Number(s.replace(/\./g, ''));
  return /^\d+$/.test(s) ? Number(s) : null;
}

/** The minus sign the book prints (U+2212), never a hyphen. */
export const MINUS = '−';

/**
 * An integer as plain text, grouped like `fmt`: −1 234, 0, 56.
 * @param {number} n
 */
export function intText(n) {
  return n < 0 ? `${MINUS}${fmt(-n)}` : fmt(n);
}

/**
 * An integer as an operand: negatives go in brackets, (−5).
 * @param {number} n
 */
export function operand(n) {
  return n < 0 ? `(${intText(n)})` : intText(n);
}

/**
 * Reads an integer typed by a learner: '-5', '−5', '+5', '5', '- 12',
 * '1 024' or '−1.024'. Returns null for anything else.
 * @param {string} text
 * @returns {number | null}
 */
export function readInteger(text) {
  const s = text.trim().replace(/[−–—]/g, '-').replace(/\s/g, '');
  const m = /^([+-]?)(\d{1,3}(?:\.\d{3})+|\d+)$/.exec(s);
  if (!m) return null;
  const n = Number(m[2].replace(/\./g, ''));
  return m[1] === '-' ? (n === 0 ? 0 : -n) : n;
}

/**
 * Whole numbers as close as possible to `values` that add up to `total`
 * (largest remainder), so printed measures add up the way a theorem says
 * they must (four angles to 360°, three to 180°, shares to 100%). Values
 * that tie keep their order.
 * @param {number[]} values
 * @param {number} total
 */
export function roundToTotal(values, total) {
  const floors = values.map(Math.floor);
  let left = total - floors.reduce((s, v) => s + v, 0);
  const order = values
    .map((v, i) => ({ i, r: v - Math.floor(v) }))
    .sort((p, q) => q.r - p.r || p.i - q.i);
  const out = [...floors];
  for (let k = 0; left > 0 && k < order.length; k++, left--) out[order[k].i] += 1;
  return out;
}

/**
 * A value as mantissa × 10^exponent, the mantissa rounded to `digits` decimals
 * and kept below 10 in size: 9,999·10⁵ with 2 digits is 1·10⁶.
 * @param {number} value
 * @param {number} [digits]
 */
export function sciParts(value, digits = 2) {
  if (value === 0) return { mantissa: 0, exponent: 0 };
  let exponent = Math.floor(Math.log10(Math.abs(value)));
  let mantissa = Number((value / 10 ** exponent).toFixed(digits));
  if (Math.abs(mantissa) >= 10) {
    exponent += 1;
    mantissa = Number((value / 10 ** exponent).toFixed(digits));
  }
  return { mantissa, exponent };
}

/** @param {number} n */
const supSigned = (n) => (n < 0 ? `⁻${sup(-n)}` : sup(n));

/**
 * Scientific notation as plain text the book's way: 3,6·10⁻³, 10⁻¹² for a
 * mantissa of 1; a value with an exponent from −2 to 3 is written as a
 * decimal (0,9; 4 500).
 * @param {number} value
 * @param {number} [digits]
 */
export function sciText(value, digits = 2) {
  const { mantissa, exponent } = sciParts(value, digits);
  if (exponent >= -2 && exponent <= 3) return formatNumber(value, Math.max(0, digits - exponent));
  const m = formatNumber(mantissa, digits);
  if (m === '1') return `10${supSigned(exponent)}`;
  if (m === `${MINUS}1`) return `${MINUS}10${supSigned(exponent)}`;
  return `${m}·10${supSigned(exponent)}`;
}

/**
 * Scientific notation as TeX source, `3{,}6 \cdot 10^{-3}`, with the same
 * decimal range as `sciText`.
 * @param {number} value
 * @param {number} [digits]
 */
export function sciTex(value, digits = 2) {
  const { mantissa, exponent } = sciParts(value, digits);
  if (exponent >= -2 && exponent <= 3) return numTex(value, Math.max(0, digits - exponent));
  const m = numTex(mantissa, digits);
  if (m === '1') return `10^{${exponent}}`;
  if (m === '-1') return `-10^{${exponent}}`;
  return `${m} \\cdot 10^{${exponent}}`;
}
