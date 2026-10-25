/**
 * Laboratory glassware as solids of revolution: each vessel is an inner
 * profile (radius against height, in drawing pixels, piecewise linear), so
 * the liquid level for a volume follows the real shape. A conical flask's
 * marks crowd together near the neck, a cylinder's are evenly spaced.
 *
 * Measuring vessels carry the two quantities of KHTN 6: giới hạn đo (GHĐ,
 * the largest marked volume) and độ chia nhỏ nhất (ĐCNN, the step between
 * neighbouring marks).
 */

/**
 * @typedef {object} Vessel
 * @property {string} id
 * @property {string} name
 * @property {Array<[number, number]>} profile [height, inner radius] from the bottom up
 * @property {number} capacity volume in mL at `fullHeight` (the GHĐ for measuring vessels)
 * @property {number} fullHeight height of the top mark
 * @property {number} minor ĐCNN in mL; 0 when the vessel has no scale
 * @property {number} major mL between labelled marks
 * @property {number[]} [marks] single marks instead of a scale (volumetric flask)
 * @property {boolean} [burette] marks read 0 at the top, increasing downwards
 * @property {number} [zeroHeight] height of the 0 mark on a burette
 * @property {number} [scaleLength] pixels from a burette's 0 mark down to its capacity mark
 */

/** @type {Record<string, Vessel>} */
export const VESSELS = {
  'ong-nghiem': {
    id: 'ong-nghiem',
    name: 'Ống nghiệm',
    profile: [
      [0, 0],
      [3, 9],
      [9, 14],
      [18, 16],
      [230, 16],
    ],
    capacity: 15,
    fullHeight: 200,
    minor: 0,
    major: 0,
  },
  'coc-thuy-tinh': {
    id: 'coc-thuy-tinh',
    name: 'Cốc thuỷ tinh',
    profile: [
      [0, 62],
      [215, 62],
    ],
    capacity: 250,
    fullHeight: 180,
    minor: 50,
    major: 50,
  },
  'binh-tam-giac': {
    id: 'binh-tam-giac',
    name: 'Bình tam giác',
    profile: [
      [0, 74],
      [150, 20],
      [158, 15],
      [225, 15],
    ],
    capacity: 250,
    fullHeight: 138,
    minor: 25,
    major: 50,
  },
  'ong-dong': {
    id: 'ong-dong',
    name: 'Ống đong',
    profile: [
      [0, 21],
      [245, 21],
    ],
    capacity: 100,
    fullHeight: 225,
    minor: 1,
    major: 10,
  },
  'binh-dinh-muc': {
    id: 'binh-dinh-muc',
    name: 'Bình định mức',
    profile: [
      [0, 44],
      [12, 60],
      [40, 64],
      [70, 56],
      [94, 30],
      [108, 9],
      [250, 9],
    ],
    capacity: 100,
    fullHeight: 200,
    minor: 0,
    major: 0,
    marks: [100],
  },
  burette: {
    id: 'burette',
    name: 'Burette',
    profile: [
      [0, 8],
      [255, 8],
    ],
    capacity: 50,
    fullHeight: 240,
    minor: 1,
    major: 5,
    burette: true,
    zeroHeight: 240,
    scaleLength: 200,
  },
};

/**
 * Inner radius at height `h`, linear between profile points; 0 below the
 * bottom and the last radius above the top.
 * @param {Vessel} v
 * @param {number} h
 */
export function radiusAt(v, h) {
  const p = v.profile;
  if (h <= p[0][0]) return p[0][1];
  for (let i = 1; i < p.length; i++) {
    const [h1, r1] = p[i];
    const [h0, r0] = p[i - 1];
    if (h <= h1) return r0 + ((r1 - r0) * (h - h0)) / (h1 - h0);
  }
  return p[p.length - 1][1];
}

/**
 * Height of the vessel's inside, the last profile point.
 * @param {Vessel} v
 */
export function innerHeight(v) {
  return v.profile[v.profile.length - 1][0];
}

/**
 * Volume up to height `h` in cubic pixels: a sum of conical frustums,
 * π·Δh·(r₀² + r₀r₁ + r₁²)/3 per segment.
 * @param {Vessel} v
 * @param {number} h
 */
function rawVolume(v, h) {
  let total = 0;
  const p = v.profile;
  for (let i = 1; i < p.length; i++) {
    const h0 = p[i - 1][0];
    if (h <= h0) break;
    const h1 = Math.min(h, p[i][0]);
    const r0 = radiusAt(v, h0);
    const r1 = radiusAt(v, h1);
    total += (Math.PI * (h1 - h0) * (r0 * r0 + r0 * r1 + r1 * r1)) / 3;
  }
  return total;
}

/**
 * Volume of liquid in mL when it stands at height `h`. For a burette this
 * is the liquid between the level and the bottom of the scale.
 * @param {Vessel} v
 * @param {number} h
 */
export function volumeAt(v, h) {
  const clamped = Math.max(0, Math.min(h, innerHeight(v)));
  return (rawVolume(v, clamped) / rawVolume(v, v.fullHeight)) * v.capacity;
}

/**
 * Height of the liquid surface holding `ml` mL (inverse of `volumeAt`, by
 * bisection).
 * @param {Vessel} v
 * @param {number} ml
 */
export function levelFor(v, ml) {
  let lo = 0;
  let hi = innerHeight(v);
  if (ml <= 0) return 0;
  if (ml >= volumeAt(v, hi)) return hi;
  for (let k = 0; k < 60; k++) {
    const mid = (lo + hi) / 2;
    if (volumeAt(v, mid) < ml) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Burette reading: the scale reads 0 at `zeroHeight` and grows downwards
 * to the capacity `scaleLength` pixels lower.
 * @param {Vessel} v
 * @param {number} h height of the liquid surface
 */
export function buretteReading(v, h) {
  const zero = v.zeroHeight ?? v.fullHeight;
  return ((zero - h) / (v.scaleLength ?? zero)) * v.capacity;
}

/**
 * Height of a burette level that reads `reading` mL.
 * @param {Vessel} v
 * @param {number} reading
 */
export function buretteLevel(v, reading) {
  const zero = v.zeroHeight ?? v.fullHeight;
  return zero - (reading / v.capacity) * (v.scaleLength ?? zero);
}

/**
 * Marks of the scale, bottom up for ordinary vessels and top down for a
 * burette: height, volume (or burette reading), whether it is labelled.
 * @param {Vessel} v
 * @returns {Array<{ value: number, h: number, major: boolean }>}
 */
export function graduations(v) {
  if (v.marks) return v.marks.map((value) => ({ value, h: levelFor(v, value), major: true }));
  if (!v.minor) return [];
  const out = [];
  const n = Math.round(v.capacity / v.minor);
  for (let k = v.burette ? 0 : 1; k <= n; k++) {
    const value = Math.round(k * v.minor * 1000) / 1000;
    const h = v.burette ? buretteLevel(v, value) : levelFor(v, value);
    out.push({ value, h, major: Math.abs(value / v.major - Math.round(value / v.major)) < 1e-9 });
  }
  return out;
}

/**
 * A reading rounded to the nearest mark, as a student reads it at eye level
 * with the bottom of the meniscus.
 * @param {Vessel} v
 * @param {number} ml
 */
export function roundReading(v, ml) {
  if (!v.minor) return Math.round(ml * 10) / 10;
  return Math.round(ml / v.minor) * v.minor;
}

/**
 * Concentration after diluting `v1` of a solution at `c1` to a total of
 * `v2` (C₁V₁ = C₂V₂); any consistent units.
 * @param {number} c1
 * @param {number} v1
 * @param {number} v2
 */
export function dilute(c1, v1, v2) {
  return v2 > 0 ? (c1 * v1) / v2 : NaN;
}
