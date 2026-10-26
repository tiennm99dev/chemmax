/**
 * Logic for the chemical element lesson: a memory game that pairs the name,
 * the symbol and the proton count of the first 20 elements, and the atom
 * cards that the learner sorts by element (same proton count, whatever the
 * neutrons).
 */
import { shuffled } from '#lib/core/card-sorter.js';
import { element } from '#lib/domain/elements.js';

/** The first 20 elements, the ones the book asks to know by name and symbol. */
export const FIRST_20 = Array.from({ length: 20 }, (_, i) => {
  const el = /** @type {import('#lib/domain/elements.js').Element} */ (element(i + 1));
  return { z: el.z, symbol: el.symbol, name: el.name, viName: el.viName };
});

/** @typedef {'name' | 'symbol' | 'protons'} Face */
/** @typedef {{ value: string, label: string, faces: [Face, Face] }} Mode */

/** What the two cards of a pair show. */
export const MODES = /** @type {Mode[]} */ ([
  { value: 'name-symbol', label: 'Tên – kí hiệu', faces: ['name', 'symbol'] },
  { value: 'symbol-protons', label: 'Kí hiệu – số proton', faces: ['symbol', 'protons'] },
  { value: 'name-protons', label: 'Tên – số proton', faces: ['name', 'protons'] },
]);

/** Pairs on the board in one round. */
export const PAIRS = 6;

/**
 * @typedef {object} MemoryCard
 * @property {string} id
 * @property {number} z the element the card belongs to
 * @property {Face} face
 * @property {string} text what the card shows when turned up
 */

/**
 * The text a card shows.
 * @param {number} z
 * @param {Face} face
 */
export function faceText(z, face) {
  const el = FIRST_20[z - 1];
  if (face === 'symbol') return el.symbol;
  if (face === 'protons') return `${z} proton`;
  return el.name;
}

/**
 * The cards of one round: `PAIRS` elements taken from the first 20, two
 * cards each, laid out in a shuffled order that depends only on the mode and
 * the round, so a round can be replayed.
 * @param {string} mode
 * @param {number} round
 * @returns {MemoryCard[]}
 */
export function makeDeck(mode, round) {
  const m = MODES.find((x) => x.value === mode) ?? MODES[0];
  const picked = shuffled(FIRST_20, 7919 * (round + 1) + 13).slice(0, PAIRS);
  const cards = picked.flatMap((el) =>
    m.faces.map((face) => ({ id: `${el.z}-${face}`, z: el.z, face, text: faceText(el.z, face) })),
  );
  return shuffled(cards, 104729 * (round + 1) + mode.length);
}

/**
 * The full description of an element, as said after a turn.
 * @param {number} z
 */
export function describeElement(z) {
  const el = FIRST_20[z - 1];
  const vi = el.viName ? ` (${el.viName})` : '';
  return `${el.name}${vi}, kí hiệu ${el.symbol}, có ${z} proton`;
}

/**
 * What one turned-up card says about its element, worded from its face:
 * "B là kí hiệu của boron (5 proton)".
 * @param {MemoryCard} card
 */
export function cardFact(card) {
  const el = FIRST_20[card.z - 1];
  const name = el.viName ? `${el.name} (${el.viName})` : el.name;
  if (card.face === 'symbol') return `${el.symbol} là kí hiệu của ${name}, có ${el.z} proton`;
  if (card.face === 'protons') return `${el.z} proton là của ${name}, kí hiệu ${el.symbol}`;
  return `${name} có kí hiệu ${el.symbol} và ${el.z} proton`;
}

/**
 * Result of turning up two cards: whether they belong to the same element,
 * and what the learner is told.
 * @param {MemoryCard} a
 * @param {MemoryCard} b
 */
export function judgePair(a, b) {
  if (a.z === b.z) return { match: true, text: `Đúng một cặp: ${describeElement(a.z)}.` };
  return { match: false, text: `Chưa khớp: ${cardFact(a)}; còn ${cardFact(b)}.` };
}

/**
 * @typedef {object} AtomCard
 * @property {string} id
 * @property {string} label
 * @property {string} bin
 * @property {string} why
 */

/** Bins of the sorting activity: three elements, named with their atomic number. */
export const ELEMENT_BINS = [
  { id: 'H', label: 'Hydrogen (H, 1 proton)' },
  { id: 'C', label: 'Carbon (C, 6 proton)' },
  { id: 'O', label: 'Oxygen (O, 8 proton)' },
];

/**
 * Atoms described by their particles. Some give the protons directly, some
 * only the electrons (equal to the protons in an atom); the neutrons vary
 * within an element and never decide it.
 * @type {AtomCard[]}
 */
export const ATOM_CARDS = [
  {
    id: 'h1',
    label: 'Hạt nhân có 1 proton, không có neutron',
    bin: 'H',
    why: '1 proton: hydrogen.',
  },
  {
    id: 'h2',
    label: 'Hạt nhân có 1 proton và 1 neutron',
    bin: 'H',
    why: 'Vẫn 1 proton nên vẫn là hydrogen; số neutron không quyết định nguyên tố.',
  },
  {
    id: 'h3',
    label: 'Nguyên tử có 1 electron và 2 neutron',
    bin: 'H',
    why: 'Nguyên tử trung hoà: 1 electron thì có 1 proton, đó là hydrogen.',
  },
  {
    id: 'c12',
    label: 'Hạt nhân có 6 proton và 6 neutron',
    bin: 'C',
    why: '6 proton: carbon.',
  },
  {
    id: 'c13',
    label: 'Hạt nhân có 6 proton và 7 neutron',
    bin: 'C',
    why: '6 proton nên là carbon, dù có 7 neutron.',
  },
  {
    id: 'c14',
    label: 'Nguyên tử có 6 electron và 8 neutron',
    bin: 'C',
    why: '6 electron thì có 6 proton: carbon. Số neutron 8 không làm nó thành oxygen.',
  },
  {
    id: 'o16',
    label: 'Hạt nhân có 8 proton và 8 neutron',
    bin: 'O',
    why: '8 proton: oxygen.',
  },
  {
    id: 'o17',
    label: 'Hạt nhân có 8 proton và 9 neutron',
    bin: 'O',
    why: '8 proton nên là oxygen.',
  },
  {
    id: 'o18',
    label: 'Nguyên tử có 8 electron và 10 neutron',
    bin: 'O',
    why: '8 electron thì có 8 proton: oxygen.',
  },
  {
    id: 'o-n6',
    label: 'Hạt nhân có 6 neutron và 8 proton',
    bin: 'O',
    why: 'Đếm proton, không đếm neutron: 8 proton là oxygen.',
  },
];
