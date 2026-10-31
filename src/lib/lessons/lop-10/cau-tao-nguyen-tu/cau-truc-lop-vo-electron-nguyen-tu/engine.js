/**
 * Filling orbital boxes one electron at a time, checked against the three
 * rules of the textbook: the energy order (1s 2s 2p 3s 3p 4s 3d), the Pauli
 * principle (at most two electrons of opposite spin per orbital) and Hund's
 * rule (in a subshell, as many unpaired electrons as possible, all with the
 * same spin). Covers the first 20 elements, the scope of the lesson; the 3d
 * row is drawn to show that 4s fills first.
 */
import { element, formatConfiguration, shellCounts } from '#lib/domain/elements.js';

/** @typedef {1 | -1} Spin up (1) or down (-1) */
/** @typedef {Spin[][]} Boxes the orbitals of one subshell, each holding 0-2 spins */
/** @typedef {Boxes[]} OrbitalState one entry per subshell of `SUBSHELLS` */

/** Subshells in increasing energy, with their number of orbitals. */
export const SUBSHELLS = [
  { name: '1s', n: 1, l: 0, orbitals: 1 },
  { name: '2s', n: 2, l: 0, orbitals: 1 },
  { name: '2p', n: 2, l: 1, orbitals: 3 },
  { name: '3s', n: 3, l: 0, orbitals: 1 },
  { name: '3p', n: 3, l: 1, orbitals: 3 },
  { name: '4s', n: 4, l: 0, orbitals: 1 },
  { name: '3d', n: 3, l: 2, orbitals: 5 },
];

/** Largest atomic number the filler takes. */
export const MAX_Z = 20;

/** @returns {OrbitalState} */
export function emptyState() {
  return SUBSHELLS.map((s) => Array.from({ length: s.orbitals }, () => []));
}

/** @param {OrbitalState} state */
export function total(state) {
  return state.reduce((n, boxes) => n + boxes.reduce((m, b) => m + b.length, 0), 0);
}

/** @param {Boxes} boxes */
function isFull(boxes) {
  return boxes.every((b) => b.length === 2);
}

/**
 * @typedef {'full' | 'pauli-max' | 'pauli-spin' | 'aufbau' | 'hund-pair' | 'hund-spin'} Rule
 */

/** Why a placement breaks a rule, in the book's words. */
export const RULE_TEXT = /** @type {Record<Rule, string>} */ ({
  full: 'Đã đủ số electron của nguyên tử này.',
  'pauli-max': 'Nguyên lí Pauli: mỗi orbital chứa tối đa 2 electron.',
  'pauli-spin': 'Nguyên lí Pauli: hai electron trong một orbital phải có chiều tự quay ngược nhau.',
  aufbau:
    'Nguyên lí vững bền: electron chiếm các phân lớp có mức năng lượng thấp trước; phân lớp thấp hơn chưa đầy.',
  'hund-pair':
    'Quy tắc Hund: trong một phân lớp, electron chiếm mỗi orbital một electron trước, rồi mới ghép đôi.',
  'hund-spin':
    'Quy tắc Hund: các electron độc thân trong một phân lớp có chiều tự quay giống nhau.',
});

/**
 * The rule a placement would break, or null when it is allowed.
 * @param {OrbitalState} state
 * @param {number} z
 * @param {number} sub index in `SUBSHELLS`
 * @param {number} box
 * @param {Spin} spin
 * @returns {Rule | null}
 */
export function breaks(state, z, sub, box, spin) {
  if (total(state) >= z) return 'full';
  const boxes = state[sub];
  const target = boxes[box];
  if (target.length === 2) return 'pauli-max';
  if (target.length === 1 && target[0] === spin) return 'pauli-spin';
  if (state.slice(0, sub).some((b) => !isFull(b))) return 'aufbau';
  if (target.length === 1 && boxes.some((b) => b.length === 0)) return 'hund-pair';
  if (target.length === 0 && boxes.some((b) => b.length === 1 && b[0] !== spin)) {
    return 'hund-spin';
  }
  return null;
}

/**
 * The state after adding an electron (a fresh copy), or the rule it breaks.
 * @param {OrbitalState} state
 * @param {number} z
 * @param {number} sub
 * @param {number} box
 * @param {Spin} spin
 * @returns {{ ok: true, state: OrbitalState } | { ok: false, rule: Rule }}
 */
export function place(state, z, sub, box, spin) {
  const rule = breaks(state, z, sub, box, spin);
  if (rule) return { ok: false, rule };
  const next = state.map((boxes, i) =>
    boxes.map((b, j) => (i === sub && j === box ? [...b, spin] : [...b])),
  );
  return { ok: true, state: next };
}

/**
 * The next allowed placement towards the ground state: the first subshell
 * that is not full, its first empty orbital (spin of the unpaired electrons
 * there, up by default), else its first half-filled orbital with the
 * opposite spin. Null when all z electrons are placed.
 * @param {OrbitalState} state
 * @param {number} z
 * @returns {{ sub: number, box: number, spin: Spin } | null}
 */
export function nextPlacement(state, z) {
  if (total(state) >= z) return null;
  const sub = state.findIndex((b) => !isFull(b));
  const boxes = state[sub];
  const empty = boxes.findIndex((b) => b.length === 0);
  if (empty >= 0) {
    const single = boxes.find((b) => b.length === 1);
    return { sub, box: empty, spin: single ? single[0] : 1 };
  }
  const half = boxes.findIndex((b) => b.length === 1);
  return { sub, box: half, spin: /** @type {Spin} */ (-boxes[half][0]) };
}

/**
 * The ground state of the atom with atomic number z, filled by the rules.
 * @param {number} z
 */
export function groundState(z) {
  let state = emptyState();
  for (let step = nextPlacement(state, z); step; step = nextPlacement(state, z)) {
    const r = place(state, z, step.sub, step.box, step.spin);
    if (!r.ok) break;
    state = r.state;
  }
  return state;
}

/**
 * Electrons per subshell, as the domain configuration helpers take them.
 * @param {OrbitalState} state
 */
export function subshells(state) {
  return SUBSHELLS.map((s, i) => ({
    n: s.n,
    l: s.l,
    electrons: state[i].reduce((m, b) => m + b.length, 0),
  })).filter((s) => s.electrons > 0);
}

/**
 * Configuration text in shell order, such as "1s²2s²2p⁶3s¹".
 * @param {OrbitalState} state
 */
export function configText(state) {
  return formatConfiguration(subshells(state));
}

/** @param {OrbitalState} state */
export function unpaired(state) {
  return state.reduce((n, boxes) => n + boxes.filter((b) => b.length === 1).length, 0);
}

/**
 * Electrons per shell (K, L, M, N) of a filled state.
 * @param {OrbitalState} state
 */
export function shells(state) {
  return shellCounts(subshells(state));
}

/**
 * What the outer electrons say about the element, as the textbook puts it:
 * 1-3 outer electrons for a metal (except H, He and B), 5-7 for a nonmetal,
 * 8 for a noble gas (and He with 2), 4 for either.
 * @param {number} z
 */
export function outerKind(z) {
  const outer = shellCounts(subshells(groundState(z))).at(-1) ?? 0;
  if (z === 2 || outer === 8) return { outer, kind: 'khí hiếm' };
  if (z === 1 || z === 5) return { outer, kind: 'phi kim' };
  if (outer <= 3) return { outer, kind: 'kim loại' };
  if (outer === 4) return { outer, kind: 'phi kim hoặc kim loại' };
  return { outer, kind: 'phi kim' };
}

/**
 * Element name and symbol for atomic number z.
 * @param {number} z
 */
export function elementLabel(z) {
  const el = element(z);
  return el ? `${el.name} (${el.symbol})` : '';
}
