/**
 * A mechanism scene: atoms and groups placed on an SVG board, the bonds
 * between them, the electrons being moved and the curved arrows that move
 * them. Pure data and geometry, no DOM, so the frames of a mechanism can be
 * checked in tests.
 */

import { formulaParts, prettyFormula } from '#lib/domain/formula.js';

/**
 * @typedef {object} SceneAtom
 * @property {string} id
 * @property {number} x
 * @property {number} y
 * @property {string} label formula of the atom or group, "CH3", "Br"; empty for a ring corner
 * @property {'+' | '-' | 'δ+' | 'δ-'} [charge]
 * @property {boolean} [radical] carries one unpaired electron
 * @property {string} [tone] fill colour of the label
 */

/**
 * @typedef {object} SceneBond
 * @property {string} a atom id
 * @property {string} b atom id
 * @property {1 | 2 | 3} [order]
 * @property {boolean} [partial] a bond being made or broken (dashed)
 */

/**
 * An end of a curved arrow: an atom id, a bond written "a~b" (its midpoint)
 * or a point.
 * @typedef {string | { x: number, y: number }} ArrowEnd
 */

/**
 * @typedef {object} SceneArrow
 * @property {ArrowEnd} from where the electrons are
 * @property {ArrowEnd} to where they go
 * @property {boolean} [half] a fishhook arrow: one electron, not a pair
 * @property {number} [bend] sideways bulge in px; negative bends the other way
 */

/**
 * @typedef {object} SceneDot
 * @property {string} id
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {object} SceneNote
 * @property {number} x
 * @property {number} y
 * @property {string} text plain text, no TeX
 * @property {string} [tone]
 */

/**
 * @typedef {object} Scene
 * @property {SceneAtom[]} atoms
 * @property {SceneBond[]} [bonds]
 * @property {SceneArrow[]} [arrows]
 * @property {SceneDot[]} [dots] bonding electrons drawn as dots
 * @property {SceneNote[]} [notes]
 */

/** How far an arrow head stops short of an atom label, in px. */
export const LABEL_GAP = 13;

/**
 * Finds an atom of a scene, or throws so a typo in a frame fails the tests.
 * @param {Scene} scene @param {string} id
 */
export function atomOf(scene, id) {
  const atom = scene.atoms.find((a) => a.id === id);
  if (!atom) throw new Error(`No atom "${id}" in the scene`);
  return atom;
}

/**
 * The point an arrow end names, and whether it is an atom (so the head stops
 * short of the label).
 * @param {Scene} scene @param {ArrowEnd} end
 * @returns {{ x: number, y: number, atom: boolean }}
 */
export function endPoint(scene, end) {
  if (typeof end !== 'string') return { ...end, atom: false };
  if (end.includes('~')) {
    const [a, b] = end.split('~').map((id) => atomOf(scene, id));
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, atom: false };
  }
  const atom = atomOf(scene, end);
  return { x: atom.x, y: atom.y, atom: atom.label !== '' };
}

/**
 * The SVG path of a curved arrow: a quadratic curve bulging `bend` px to the
 * left of the direction of travel, its ends pulled back from atom labels.
 * @param {Scene} scene @param {SceneArrow} arrow
 */
export function arrowPath(scene, arrow) {
  const p = endPoint(scene, arrow.from);
  const q = endPoint(scene, arrow.to);
  const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
  const ux = (q.x - p.x) / len;
  const uy = (q.y - p.y) / len;
  const bend = arrow.bend ?? 28;
  const cx = (p.x + q.x) / 2 + uy * bend;
  const cy = (p.y + q.y) / 2 - ux * bend;
  const pull = (/** @type {{ x: number, y: number, atom: boolean }} */ pt) => {
    if (!pt.atom) return pt;
    const d = Math.hypot(cx - pt.x, cy - pt.y) || 1;
    return { x: pt.x + ((cx - pt.x) / d) * LABEL_GAP, y: pt.y + ((cy - pt.y) / d) * LABEL_GAP };
  };
  const a = pull(p);
  const b = pull(q);
  const r = (/** @type {number} */ v) => Math.round(v * 10) / 10;
  return `M ${r(a.x)} ${r(a.y)} Q ${r(cx)} ${r(cy)} ${r(b.x)} ${r(b.y)}`;
}

/**
 * The two strokes of a bond of the given order, offset sideways so a double
 * bond draws as two parallel lines.
 * @param {Scene} scene @param {SceneBond} bond
 */
export function bondLines(scene, bond) {
  const a = atomOf(scene, bond.a);
  const b = atomOf(scene, bond.b);
  const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  const ux = (b.x - a.x) / len;
  const uy = (b.y - a.y) / len;
  const trimA = a.label === '' ? 0 : Math.min(LABEL_GAP, len / 3);
  const trimB = b.label === '' ? 0 : Math.min(LABEL_GAP, len / 3);
  const x1 = a.x + ux * trimA;
  const y1 = a.y + uy * trimA;
  const x2 = b.x - ux * trimB;
  const y2 = b.y - uy * trimB;
  const order = bond.order ?? 1;
  const gap = 4;
  const offsets = order === 1 ? [0] : order === 2 ? [-gap / 2, gap / 2] : [-gap, 0, gap];
  return offsets.map((o) => ({
    x1: x1 - uy * o,
    y1: y1 + ux * o,
    x2: x2 - uy * o,
    y2: y2 + ux * o,
  }));
}

/**
 * A group label split into SVG tspans: subscripts small and lowered, the text
 * after them raised back by the same `dy`.
 * @param {string} label
 * @returns {Array<{ text: string, small: boolean, dy: number }>}
 */
export function labelSpans(label) {
  if (label === '') return [];
  /** @type {Array<{ text: string, kind: string }>} */
  let parts;
  try {
    parts = formulaParts(label);
  } catch {
    parts = [{ text: label, kind: 'normal' }];
  }
  let lowered = false;
  return parts.map((part) => {
    const sub = part.kind === 'sub';
    const dy = (sub ? SUB_DROP : 0) - (lowered ? SUB_DROP : 0);
    lowered = sub;
    return { text: part.text, small: sub, dy };
  });
}

/** How far a subscript sits below the line, in px. */
const SUB_DROP = 4;

const CHARGE_WORDS = { '+': 'mang điện dương', '-': 'mang điện âm', 'δ+': 'δ+', 'δ-': 'δ−' };

/**
 * What a screen reader hears for a scene: each atom or group with its charge
 * or unpaired electron, then the bonds.
 * @param {Scene} scene
 */
export function sceneText(scene) {
  const name = (/** @type {SceneAtom} */ a) => (a.label === '' ? 'C' : prettyLabel(a.label));
  const parts = scene.atoms
    .filter((a) => a.label !== '' || a.charge || a.radical)
    .map((a) => {
      const extra = [
        a.charge ? CHARGE_WORDS[a.charge] : '',
        a.radical ? 'có electron độc thân' : '',
      ]
        .filter(Boolean)
        .join(', ');
      return extra ? `${name(a)} (${extra})` : name(a);
    });
  const bonds = (scene.bonds ?? []).map((b) => {
    const kind = b.partial ? 'liên kết đang hình thành hoặc đứt' : `liên kết bậc ${b.order ?? 1}`;
    return `${name(atomOf(scene, b.a))}–${name(atomOf(scene, b.b))} ${kind}`;
  });
  const arrows = scene.arrows?.length ? `${scene.arrows.length} mũi tên cong` : '';
  return [parts.join('; '), bonds.join('; '), arrows].filter(Boolean).join('. ');
}

/** @param {string} label */
function prettyLabel(label) {
  try {
    return prettyFormula(label);
  } catch {
    return label;
  }
}
