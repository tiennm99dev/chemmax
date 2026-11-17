// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Grade 4-5 fractions the book's way, on a plain `{ n, d }` with natural
 * numbers: the stacked TeX and plain text of a fraction, how it is read
 * ("ba phần tư"), lowest terms, equal value and the four operations with the
 * result in lowest terms. A denominator of 1 is written as the whole number
 * unless `keepOne` asks for it (a lesson that teaches 5 = 5/1). Pure and
 * DOM-free.
 */
import {
  add as addF,
  div as divF,
  mul as mulF,
  simplify,
  sub as subF,
} from '#lib/fraction-engine/index.js';
import { fmt } from '#lib/core/number-format.js';
import { readWhole } from './whole-numbers.js';

/** @typedef {{ n: number, d: number }} Frac */
/** @typedef {{ keepOne?: boolean }} OneOption */

/**
 * TeX of a fraction, drawn stacked: `\dfrac{3}{4}`, or `5` when d is 1.
 * @param {number} n
 * @param {number} d
 * @param {OneOption} [options]
 */
export const fracTex = (n, d, { keepOne = false } = {}) =>
  d === 1 && !keepOne ? `${n}` : `\\dfrac{${n}}{${d}}`;

/**
 * The fraction as rich text with inline TeX: '$\dfrac{3}{4}$'.
 * @param {number} n
 * @param {number} d
 * @param {OneOption} [options]
 */
export const fracRich = (n, d, options) => `$${fracTex(n, d, options)}$`;

/**
 * Plain text of a fraction: '3/4', or '2' when the denominator is 1 (thousands
 * grouped as the book writes them).
 * @param {number} n
 * @param {number} d
 */
export const fracText = (n, d) => (d === 1 ? fmt(n) : `${n}/${d}`);

/**
 * How the book reads a denominator: 4 is "tư", any other its number words.
 * @param {number} d
 */
export const denominatorWords = (d) => (d === 4 ? 'tư' : readWhole(d));

/**
 * How the book reads a fraction: 5/6 is "năm phần sáu", 3/4 "ba phần tư"; a
 * denominator of 1 reads the whole number unless `keepOne`.
 * @param {number} n
 * @param {number} d
 * @param {OneOption} [options]
 */
export const fracWords = (n, d, { keepOne = false } = {}) =>
  d === 1 && !keepOne ? readWhole(n) : `${readWhole(n)} phần ${denominatorWords(d)}`;

/**
 * The fraction in lowest terms.
 * @param {number} n
 * @param {number} d
 * @returns {Frac}
 */
export const reduce = (n, d) => simplify({ n, d });

/**
 * Whether two fractions have the same value.
 * @param {Frac} f
 * @param {Frac} g
 */
export const sameValue = (f, g) => f.n * g.d === g.n * f.d;

/** @param {Frac} f @param {Frac} g @returns {Frac} f + g in lowest terms */
export const add = (f, g) => addF(f, g);
/** @param {Frac} f @param {Frac} g @returns {Frac} f − g in lowest terms */
export const sub = (f, g) => subF(f, g);
/** @param {Frac} f @param {Frac} g @returns {Frac} f × g in lowest terms */
export const mul = (f, g) => mulF(f, g);
/** @param {Frac} f @param {Frac} g @returns {Frac} f : g in lowest terms */
export const div = (f, g) => divF(f, g);
