// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Natural numbers of any length as grades 3 and 4 meet them: the places
 * (hàng đơn vị, hàng chục, ... hàng trăm triệu) grouped in classes (lớp đơn
 * vị, lớp nghìn, lớp triệu), the book's reading class by class, the sum of
 * places, rounding, comparing and the Roman numerals of grade 3. Numbers to
 * 1 000 with their blocks stay in `place-value.js`. Pure and DOM-free.
 */
import { fmt } from '#lib/core/number-format.js';
import { DIGIT_WORDS, SIGN_WORDS, compareSign, readNumber } from './numbers.js';
import { readTo1000 } from './place-value.js';

/** Place names by power of ten: index 0 is hàng đơn vị, 8 is hàng trăm triệu. */
export const PLACE_NAMES = /** @type {const} */ ([
  'đơn vị',
  'chục',
  'trăm',
  'nghìn',
  'chục nghìn',
  'trăm nghìn',
  'triệu',
  'chục triệu',
  'trăm triệu',
  'tỉ',
  'chục tỉ',
  'trăm tỉ',
]);

/** Class names by class index: 0 is lớp đơn vị, 1 lớp nghìn, 2 lớp triệu. */
export const CLASS_NAMES = /** @type {const} */ (['đơn vị', 'nghìn', 'triệu', 'tỉ']);

/** The largest number read in words; anything larger is written in digits. */
export const READ_TOP = 10 ** PLACE_NAMES.length - 1;

/**
 * Keys of the places by power of ten, for a record of digits.
 * @typedef {'ones' | 'tens' | 'hundreds' | 'thousands' | 'tenThousands' | 'hundredThousands' | 'millions' | 'tenMillions' | 'hundredMillions' | 'billions' | 'tenBillions' | 'hundredBillions'} PlaceKey
 */
export const PLACE_KEYS = /** @type {const} */ ([
  'ones',
  'tens',
  'hundreds',
  'thousands',
  'tenThousands',
  'hundredThousands',
  'millions',
  'tenMillions',
  'hundredMillions',
  'billions',
  'tenBillions',
  'hundredBillions',
]);

/** The base-ten block of the first four places, as `block.svelte` draws it. */
const BLOCKS = /** @type {const} */ ([
  { block: 'don-vi', blockName: 'khối đơn vị' },
  { block: 'chuc', blockName: 'thanh chục' },
  { block: 'tram', blockName: 'tấm trăm' },
  { block: 'nghin', blockName: 'khối nghìn' },
]);

/**
 * One column of a place table.
 * @typedef {object} PlaceColumn
 * @property {PlaceKey} key
 * @property {number} exp power of ten
 * @property {string} title column title with a capital: "Chục nghìn"
 * @property {string} unit the place's name: "chục nghìn"
 * @property {number} value 10 ** exp
 * @property {import('./place-value.js').BlockKind} [block] the block of the first four places
 * @property {string} [blockName]
 */

/**
 * The column title of a place, with a capital: "Chục nghìn".
 * @param {number} exp power of ten
 */
export const placeTitle = (exp) => PLACE_NAMES[exp][0].toUpperCase() + PLACE_NAMES[exp].slice(1);

/**
 * The places of a table of `count` columns, from the left: `placeColumns(4)`
 * is nghìn, trăm, chục, đơn vị.
 * @param {number} count
 * @returns {PlaceColumn[]}
 */
export function placeColumns(count) {
  return Array.from({ length: count }, (_, i) => {
    const exp = count - 1 - i;
    return {
      key: PLACE_KEYS[exp],
      exp,
      title: placeTitle(exp),
      unit: PLACE_NAMES[exp],
      value: 10 ** exp,
      ...BLOCKS[exp],
    };
  });
}

/**
 * The class a place belongs to: 0, 1, 2 or 3.
 * @param {number} exp
 */
export const classOf = (exp) => Math.floor(exp / 3);

/**
 * How many digits a natural number has; 0 has one.
 * @param {number} n
 */
export const digitCount = (n) => String(n).length;

/**
 * The digits of a number from the left, each with its power of ten.
 * @param {number} n
 * @returns {{ digit: number, exp: number }[]}
 */
export function digitsOf(n) {
  const text = String(n);
  return [...text].map((d, i) => ({ digit: Number(d), exp: text.length - 1 - i }));
}

/**
 * The digit of `n` at a place.
 * @param {number} n
 * @param {number} exp
 */
export const digitAt = (n, exp) => Math.floor(n / 10 ** exp) % 10;

/**
 * The value of the digit at a place: in 653 720 the 5 is worth 50 000.
 * @param {number} n
 * @param {number} exp
 */
export const valueAt = (n, exp) => digitAt(n, exp) * 10 ** exp;

/**
 * The digits of a number in a table of `count` places, by key. The top place
 * takes whatever is left, so 10 000 in four places has 10 thousands.
 * @param {number} n
 * @param {number} count
 * @returns {Record<string, number>} by `PlaceKey`, the first `count` places
 */
export function placeDigits(n, count) {
  /** @type {Record<string, number>} */
  const out = {};
  for (let exp = 0; exp < count; exp++) {
    out[PLACE_KEYS[exp]] = exp === count - 1 ? Math.floor(n / 10 ** exp) : digitAt(n, exp);
  }
  return out;
}

/**
 * The value of a table of digits by key.
 * @param {Record<string, number>} digits by `PlaceKey`
 */
export function valueOfDigits(digits) {
  return PLACE_KEYS.reduce((sum, key, exp) => sum + (digits[key] ?? 0) * 10 ** exp, 0);
}

/**
 * "3 nghìn, 0 trăm, 6 chục, 7 đơn vị" for a table of `count` places.
 * @param {number} n
 * @param {number} count
 */
export function placesText(n, count) {
  const d = placeDigits(n, count);
  return placeColumns(count)
    .map((p) => `${d[p.key]} ${p.unit}`)
    .join(', ');
}

/**
 * The places of a number that are not zero, largest first: 50 701 gives
 * [50000, 700, 1].
 * @param {number} n
 * @returns {number[]}
 */
export function sumParts(n) {
  return digitsOf(n)
    .map(({ digit, exp }) => digit * 10 ** exp)
    .filter((v) => v > 0);
}

/**
 * A number written as the sum of its places, the book's way:
 * "882 936 = 800 000 + 80 000 + 2 000 + 900 + 30 + 6". A zero place is left
 * out, and a number with one part stays as it is.
 * @param {number} n
 */
export function sumText(n) {
  const parts = sumParts(n);
  return parts.length > 1 ? `${fmt(n)} = ${parts.map(fmt).join(' + ')}` : fmt(n);
}

/**
 * The classes of a number from the left: 304 028 102 gives the parts 304,
 * 028 and 102. `text` keeps the leading zeros of every class but the first,
 * as the number is written.
 * @param {number} n
 * @returns {{ cls: number, value: number, text: string }[]}
 */
export function classParts(n) {
  const count = Math.ceil(digitCount(n) / 3);
  const parts = [];
  for (let cls = count - 1; cls >= 0; cls--) {
    const value = Math.floor(n / 1000 ** cls) % 1000;
    const text = cls === count - 1 ? String(value) : String(value).padStart(3, '0');
    parts.push({ cls, value, text });
  }
  return parts;
}

/**
 * How the book reads one class of three digits. The first class is read as
 * it is ("ba trăm linh bốn"); a later one keeps its zero hundreds ("không
 * trăm hai mươi tám", "không trăm linh một"). A later class of 000 is not
 * read, so it gives ''.
 * @param {number} value 0 to 999
 * @param {boolean} leading whether it is the first class from the left
 */
export function readClass(value, leading) {
  if (leading || value >= 100) return readTo1000(value);
  if (value === 0) return '';
  if (value < 10) return `không trăm linh ${DIGIT_WORDS[value]}`;
  return `không trăm ${readNumber(value)}`;
}

/**
 * One class read with its name: "ba trăm linh bốn triệu", "không trăm hai
 * mươi tám nghìn", "một trăm linh hai". '' for a later class of 000.
 * @param {number} n
 * @param {number} cls
 */
export function readPart(n, cls) {
  const parts = classParts(n);
  const part = parts.find((p) => p.cls === cls);
  if (!part) return '';
  const words = readClass(part.value, part === parts[0]);
  if (words === '') return '';
  return cls === 0 ? words : `${words} ${CLASS_NAMES[cls]}`;
}

/**
 * How the book reads a natural number, class by class from the left: 3067 is
 * "ba nghìn không trăm sáu mươi bảy", 24 105 is "hai mươi tư nghìn một trăm
 * linh năm", 109 140 903 is "một trăm linh chín triệu một trăm bốn mươi nghìn
 * chín trăm linh ba", 1 000 000 is "một triệu". A value that is not a natural
 * number up to `READ_TOP` is written in digits.
 * @param {number} n
 * @returns {string}
 */
export function readWhole(n) {
  if (!Number.isInteger(n) || n < 0 || n > READ_TOP) return String(n);
  if (n === 0) return DIGIT_WORDS[0];
  return classParts(n)
    .map((p) => readPart(n, p.cls))
    .filter((w) => w !== '')
    .join(' ');
}

/**
 * A reading with a capital first letter, to start a sentence.
 * @param {number} n
 */
export function capitalReading(n) {
  const words = readWhole(n);
  return words[0].toUpperCase() + words.slice(1);
}

/**
 * A number rounded to a place the book's way: the digit just to the right
 * decides, below 5 rounds down, 5 to 9 rounds up.
 * @param {number} n
 * @param {number} unit 10, 100, ... 100 000 000
 */
export function roundTo(n, unit) {
  const low = Math.floor(n / unit) * unit;
  return n - low >= unit / 2 ? low + unit : low;
}

/**
 * The digit that decides a rounding: the ones digit for tens, the hundreds
 * digit for thousands.
 * @param {number} n
 * @param {number} unit
 */
export function roundingDigit(n, unit) {
  return Math.floor(n / (unit / 10)) % 10;
}

/**
 * The place a rounding looks at, the place it rounds to and the name of a
 * number already round there: for 1000, "hàng trăm", "hàng nghìn" and "tròn
 * nghìn".
 * @param {number} unit
 */
export function roundingPlaces(unit) {
  const exp = Math.round(Math.log10(unit));
  return {
    look: `hàng ${PLACE_NAMES[exp - 1]}`,
    target: `hàng ${PLACE_NAMES[exp]}`,
    round: `tròn ${PLACE_NAMES[exp]}`,
  };
}

/**
 * Why `n` rounds the way it does, the book's sentence: "Chữ số hàng trăm của
 * 4 726 là 7, 7 > 5 nên làm tròn lên. Làm tròn 4 726 đến hàng nghìn được
 * 5 000." A number already round there stays as it is.
 * @param {number} n
 * @param {number} unit
 */
export function roundWhy(n, unit) {
  const { look, target, round } = roundingPlaces(unit);
  if (n % unit === 0) return `${fmt(n)} đã là số ${round}, giữ nguyên ${fmt(n)}.`;
  const digit = roundingDigit(n, unit);
  const sign = compareSign(digit, 5);
  const way = digit < 5 ? 'làm tròn xuống' : 'làm tròn lên';
  return `Chữ số ${look} của ${fmt(n)} là ${digit}, ${digit} ${sign} 5 nên ${way}. Làm tròn ${fmt(n)} đến ${target} được ${fmt(roundTo(n, unit))}.`;
}

/**
 * The first place from the left where two numbers with the same count of
 * digits differ, or null when they differ in length or are equal.
 * @param {number} a
 * @param {number} b
 * @returns {number | null} the power of ten of that place
 */
export function firstDiff(a, b) {
  if (digitCount(a) !== digitCount(b) || a === b) return null;
  for (let exp = digitCount(a) - 1; exp >= 0; exp--) {
    if (digitAt(a, exp) !== digitAt(b, exp)) return exp;
  }
  return null;
}

/** @param {number} count */
const countWords = (count) => DIGIT_WORDS[count] ?? String(count);

/**
 * Why `a ? b` holds, the book's way: the number with fewer digits is
 * smaller; with as many digits, the first place from the left that differs
 * decides.
 * @param {number} a
 * @param {number} b
 */
export function compareWhy(a, b) {
  const result = `Vậy ${fmt(a)} ${compareSign(a, b)} ${fmt(b)}.`;
  if (a === b) return `Hai số giống nhau ở mọi hàng. ${result}`;
  const ca = digitCount(a);
  const cb = digitCount(b);
  if (ca !== cb) {
    return `${fmt(a)} có ${countWords(ca)} chữ số, ${fmt(b)} có ${countWords(cb)} chữ số. Số nào có ít chữ số hơn thì bé hơn. ${result}`;
  }
  const exp = /** @type {number} */ (firstDiff(a, b));
  const p = digitAt(a, exp);
  const q = digitAt(b, exp);
  const same = PLACE_NAMES.slice(exp + 1, ca)
    .reverse()
    .map((name) => `hàng ${name}`);
  const lead =
    same.length === 0
      ? ''
      : same.length <= 2
        ? `${same.join(', ').replace(/^h/, 'H')} giống nhau. `
        : 'Các hàng bên trái giống nhau. ';
  return `${lead}Ở hàng ${PLACE_NAMES[exp]}: ${p} ${SIGN_WORDS[compareSign(p, q)]} ${q}. ${result}`;
}

/** The three Roman numerals of grade 3 with their values. */
export const ROMAN_DIGITS = /** @type {const} */ ([
  { letter: 'I', value: 1 },
  { letter: 'V', value: 5 },
  { letter: 'X', value: 10 },
]);

/**
 * A number from 1 to 39 in Roman numerals: 4 is IV, 9 is IX, 14 is XIV.
 * Any other value gives ''.
 * @param {number} n
 * @returns {string}
 */
export function toRoman(n) {
  if (!Number.isInteger(n) || n < 1 || n > 39) return '';
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  return 'X'.repeat(Math.floor(n / 10)) + ones[n % 10];
}

/**
 * The value of a Roman numeral made of I, V and X, or null when it is not
 * written the right way (IIII, VV, IIV, VX).
 * @param {string} text
 * @returns {number | null}
 */
export function fromRoman(text) {
  if (!/^[IVX]+$/.test(text)) return null;
  for (let n = 1; n <= 39; n++) if (toRoman(n) === text) return n;
  return null;
}

/**
 * The value a row of Roman letters would add up to by the book's rule (a
 * smaller letter before a bigger one is taken away), even when it is not
 * written the right way; 0 for an empty row.
 * @param {string} text
 */
export function romanSum(text) {
  /** @type {number[]} */
  const values = [...text].map((c) => ROMAN_DIGITS.find((d) => d.letter === c)?.value ?? 0);
  return values.reduce((sum, v, i) => (v < (values[i + 1] ?? 0) ? sum - v : sum + v), 0);
}

/** Matchsticks a Roman letter takes: I is one, V and X are two. @param {string} text */
export function sticksOf(text) {
  return [...text].reduce((n, c) => n + (c === 'I' ? 1 : 2), 0);
}
