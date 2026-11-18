/**
 * The chapter review quiz: tell complexes apart by colour and formula. A
 * colour question shows a coloured solution and how it was made, and asks
 * for the complex; a formula question shows the complex and asks for its
 * colour. Distractors and their order come from a fixed seed, so every
 * visitor gets the same quiz.
 */
import { rng, shuffle } from '#lib/core/drill.js';
import { formulaTex } from '../_shared/complexes.js';

/**
 * @typedef {object} Item
 * @property {string} formula as read by ChemFormula
 * @property {string} colour in words
 * @property {string} hex
 * @property {string} made how the solution was made (rich text)
 */

/** @type {Item[]} */
export const ITEMS = [
  {
    formula: '[Cu(NH3)4(H2O)2]^2+',
    colour: 'xanh lam đậm',
    hex: '#1d4ed8',
    made: 'Nhỏ dung dịch $\\mathrm{NH_3}$ đến dư vào dung dịch $\\mathrm{CuSO_4}$.',
  },
  {
    formula: '[CuCl4]^2-',
    colour: 'vàng',
    hex: '#facc15',
    made: 'Thêm nhiều dung dịch HCl đặc vào dung dịch $\\mathrm{CuSO_4}$ loãng.',
  },
  {
    formula: '[Cu(H2O)6]^2+',
    colour: 'xanh',
    hex: '#7dd3fc',
    made: 'Hoà tan $\\mathrm{CuSO_4}$ khan vào nước.',
  },
  {
    formula: '[Fe(H2O)6]^3+',
    colour: 'vàng nhạt',
    hex: '#fde68a',
    made: 'Hoà tan một ít $\\mathrm{Fe_2(SO_4)_3}$ vào nước (có thêm vài giọt acid).',
  },
  {
    formula: '[Fe(H2O)6]^2+',
    colour: 'lục nhạt',
    hex: '#bbf7d0',
    made: 'Pha dung dịch $\\mathrm{FeSO_4}$ mới.',
  },
  {
    formula: '[Co(H2O)6]^2+',
    colour: 'hồng đỏ',
    hex: '#f472b6',
    made: 'Hoà tan $\\mathrm{CoCl_2}$ vào nhiều nước.',
  },
  {
    formula: '[Cr(H2O)6]^3+',
    colour: 'xanh tím',
    hex: '#7c6fd6',
    made: 'Hoà tan muối chromium(III) sulfate vào nước.',
  },
  {
    formula: '[Ag(NH3)2]^+',
    colour: 'không màu',
    hex: '#e2f3fb',
    made: 'Nhỏ dung dịch $\\mathrm{NH_3}$ dư vào kết tủa AgCl đến khi kết tủa tan hết.',
  },
  {
    formula: '[Cr(OH)6]^3-',
    colour: 'xanh rêu',
    hex: '#4d7c0f',
    made: 'Nhỏ dung dịch NaOH dư vào kết tủa $\\mathrm{Cr(OH)_3}$ đến khi kết tủa tan.',
  },
];

/**
 * @typedef {object} Question
 * @property {'colour' | 'formula'} kind colour: given the colour, pick the formula
 * @property {Item} item
 * @property {Item[]} options four items in a fixed shuffled order
 */

/**
 * The hue word of a colour, its first word: "xanh lam đậm" → "xanh".
 * @param {string} colour
 */
export const hueOf = (colour) => colour.normalize('NFC').trim().toLowerCase().split(/\s+/)[0];

/**
 * The quiz: one question per item, colour and formula questions in turn. A
 * formula question never offers two colours of the same hue ("vàng" beside
 * "vàng nhạt"), so it tests the chemistry, not the book's adjective; a colour
 * question shows how the solution was made, which tells such shades apart.
 * @param {number} [seed]
 * @returns {Question[]}
 */
export function buildQuiz(seed = 8) {
  const rand = rng(seed);
  return ITEMS.map((item, i) => {
    const kind = i % 2 === 0 ? /** @type {const} */ ('colour') : /** @type {const} */ ('formula');
    const pool = shuffle(
      rand,
      ITEMS.filter((x) => x !== item && (kind === 'colour' || x.colour !== item.colour)),
    );
    /** @type {Item[]} */
    const others = [];
    const hues = new Set([hueOf(item.colour)]);
    for (const x of pool) {
      if (others.length === 3) break;
      if (kind === 'formula') {
        if (hues.has(hueOf(x.colour))) continue;
        hues.add(hueOf(x.colour));
      }
      others.push(x);
    }
    return { kind, item, options: shuffle(rand, [item, ...others]) };
  });
}

/**
 * Judges a pick.
 * @param {Question} q
 * @param {Item} picked
 * @param {boolean} last whether this was the last try: only then is the answer given
 * @returns {{ ok: boolean, text: string }}
 */
export function judgePick(q, picked, last) {
  const ok = picked === q.item;
  const why = `phức chất $${formulaTex(q.item.formula)}$ có màu ${q.item.colour}.`;
  if (ok) return { ok, text: `Đúng: ${why}` };
  const slip =
    q.kind === 'colour' ? ` $${formulaTex(picked.formula)}$ có màu ${picked.colour}.` : '';
  return {
    ok,
    text: last ? `Chưa đúng.${slip} Thực ra ${why}` : `Chưa đúng.${slip} Hãy thử lại một lần nữa.`,
  };
}
