/**
 * Benzene and toluene in 3D for the arene bench: the flat ring of six carbons
 * (C–C 0,139 nm, all equal) with its hydrogens or the CH3 group in the ring
 * plane, the π electron cloud above and below it, and the outcome of
 * substituting one ring hydrogen by bromination or nitration.
 *
 * Model units are ångström (0,1 nm); z is perpendicular to the ring.
 */

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */
/** @typedef {'benzene' | 'toluene'} AreneId */
/** @typedef {'brom' | 'nitro'} ReactionId */
/** @typedef {'ortho' | 'meta' | 'para'} Relation */

export const RING_RADIUS = 1.39;
export const CH_LENGTH = 1.09;
export const CC_SINGLE = 1.51;
/** Height of the π cloud above and below the ring plane. */
export const CLOUD_HEIGHT = 0.75;

/**
 * The ring carbon at position `pos` (1 to 6), counter-clockwise.
 * @param {number} pos
 * @param {number} [radius]
 * @returns {P3}
 */
export function ringPoint(pos, radius = RING_RADIUS) {
  const a = Math.PI / 2 + ((pos - 1) * Math.PI) / 3;
  return { x: radius * Math.cos(a), y: radius * Math.sin(a), z: 0 };
}

/**
 * What sits on each ring carbon: H, or CH3 at position 1 of toluene.
 * @param {AreneId} arene
 * @returns {string[]} index 0 is position 1
 */
export const groupsOf = (arene) =>
  Array.from({ length: 6 }, (_, i) => (arene === 'toluene' && i === 0 ? 'CH3' : 'H'));

/**
 * A point on the π cloud ring, `t` from 0 to 1 around, above (`side` 1) or below (−1).
 * @param {number} t
 * @param {1 | -1} side
 * @returns {P3}
 */
export function cloudPoint(t, side) {
  const a = 2 * Math.PI * t;
  return {
    x: RING_RADIUS * Math.cos(a),
    y: RING_RADIUS * Math.sin(a),
    z: side * CLOUD_HEIGHT,
  };
}

/**
 * Where a ring position stands from position 1 (the CH3 group of toluene).
 * @param {number} pos 2 to 6
 * @returns {Relation}
 */
export function relationTo1(pos) {
  const steps = Math.min(pos - 1, 7 - pos);
  if (steps === 1) return 'ortho';
  if (steps === 2) return 'meta';
  if (steps === 3) return 'para';
  throw new Error(`Không có quan hệ cho vị trí ${pos}`);
}

/** @type {Record<ReactionId, { reagent: string, group: string, word: string, condition: string, side: string }>} */
export const REACTIONS = {
  brom: {
    reagent: 'Br2',
    group: 'Br',
    word: 'bromo',
    condition: 'xúc tác $\\mathrm{FeBr_3}$, đun nóng',
    side: 'HBr',
  },
  nitro: {
    reagent: 'HNO3',
    group: 'NO2',
    word: 'nitro',
    condition: 'xúc tác $\\mathrm{H_2SO_4}$ đặc, đun nóng',
    side: 'H2O',
  },
};

const LOCANT = { ortho: 2, meta: 3, para: 4 };
const PREFIX = { ortho: 'o', meta: 'm', para: 'p' };

/**
 * The product of replacing the H at `pos` (1 to 6).
 * @param {AreneId} arene
 * @param {ReactionId} reaction
 * @param {number} pos
 * @returns {{ ok: false, reason: string } | { ok: true, name: string, kind: 'only' | 'main' | 'minor', relation: Relation | null, equation: string }}
 */
export function substitute(arene, reaction, pos) {
  const r = REACTIONS[reaction];
  if (groupsOf(arene)[pos - 1] !== 'H') {
    return {
      ok: false,
      reason:
        'Nhóm $\\mathrm{CH_3}$ không bị thay thế trong phản ứng này; tác nhân thế nguyên tử H gắn trên vòng.',
    };
  }
  if (arene === 'benzene') {
    return {
      ok: true,
      name: `${r.word}benzene`,
      kind: 'only',
      relation: null,
      equation: `C6H6 + ${r.reagent} → C6H5${r.group} + ${r.side}`,
    };
  }
  const relation = relationTo1(pos);
  return {
    ok: true,
    name: `${LOCANT[relation]}-${r.word}toluene (${PREFIX[relation]}-${r.word}toluene)`,
    kind: relation === 'meta' ? 'minor' : 'main',
    relation,
    equation: `C6H5CH3 + ${r.reagent} → CH3C6H4${r.group} + ${r.side}`,
  };
}
