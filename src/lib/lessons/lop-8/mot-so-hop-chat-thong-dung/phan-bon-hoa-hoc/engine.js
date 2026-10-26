/**
 * A simplified rice plot of one sào (360 m²) for the fertiliser lesson.
 * The crop needs set masses of the elements N, P and K; the soil supplies a
 * quarter of each and fertiliser the rest. Growth follows the scarcest
 * nutrient (too little stunts the plant), too much of one burns it, and
 * whatever the plant cannot take up runs off into water. The numbers are
 * illustrative: they keep the real fertilisers' element contents and the
 * order of magnitude of advice for rice, not a farming recommendation.
 */

/** @typedef {'N' | 'P' | 'K'} Nutrient */

/** Element mass the crop takes up in a season, kg per sào. */
export const NEED = /** @type {Record<Nutrient, number>} */ ({ N: 3.6, P: 0.95, K: 1.8 });

/** Share of each need the soil already supplies. */
export const SOIL_SHARE = 0.25;

/** Supply/need ratio above which the extra starts to harm the plant. */
export const BURN_FROM = 1.6;

/**
 * Mass fraction of each element in the pure fertiliser compound, from the
 * book's rounded atomic masses: urea (NH₂)₂CO 28/60, superphosphate kép
 * Ca(H₂PO₄)₂ 62/234, potassium chloride KCl 39/74,5.
 */
export const FERTILISERS = [
  {
    id: 'urea',
    name: 'Phân đạm urea',
    formula: '(NH2)2CO',
    element: /** @type {Nutrient} */ ('N'),
    fraction: 28 / 60,
    max: 16,
  },
  {
    id: 'super',
    name: 'Phân lân superphosphate kép',
    formula: 'Ca(H2PO4)2',
    element: /** @type {Nutrient} */ ('P'),
    fraction: 62 / 234,
    max: 8,
  },
  {
    id: 'kcl',
    name: 'Phân kali KCl',
    formula: 'KCl',
    element: /** @type {Nutrient} */ ('K'),
    fraction: 39 / 74.5,
    max: 8,
  },
];

/**
 * The ready-mixed NPK fertiliser of the model: urea, superphosphate kép and
 * KCl mixed 2 : 1 : 1 by mass, so a fixed ratio of the three elements.
 */
export const NPK_MIX = {
  N: (2 / 4) * (28 / 60),
  P: (1 / 4) * (62 / 234),
  K: (1 / 4) * (39 / 74.5),
  max: 24,
};

/** @typedef {{ urea: number, super: number, kcl: number }} SingleDoses kg of each fertiliser */

/**
 * Element masses put on the field.
 * @param {'don' | 'npk'} mode
 * @param {SingleDoses} single
 * @param {number} npk kg of the NPK mix
 * @returns {Record<Nutrient, number>}
 */
export function applied(mode, single, npk) {
  if (mode === 'npk') return { N: npk * NPK_MIX.N, P: npk * NPK_MIX.P, K: npk * NPK_MIX.K };
  const [u, s, k] = FERTILISERS;
  return {
    N: single.urea * u.fraction,
    P: single.super * s.fraction,
    K: single.kcl * k.fraction,
  };
}

/**
 * Growth factor for a supply/need ratio: rises with the supply up to 1,
 * stays 1 while it is enough, then falls as the excess burns the plant.
 * @param {number} ratio
 */
export function response(ratio) {
  if (ratio <= 1) return Math.max(0, ratio);
  if (ratio <= BURN_FROM) return 1;
  return Math.max(0, 1 - (ratio - BURN_FROM) * 0.9);
}

/**
 * @typedef {object} FieldResult
 * @property {Record<Nutrient, number>} ratio supply / need for each element
 * @property {number} growth 0..1, the yield compared with a well-fed plot
 * @property {Nutrient | null} limiting the element that holds growth back
 * @property {Nutrient | null} burning an element given far too much
 * @property {number} runoff kg of N, P and K the plant cannot use
 * @property {'thấp' | 'trung bình' | 'cao'} pollution
 */

/**
 * @param {Record<Nutrient, number>} add element masses from fertiliser, kg
 * @returns {FieldResult}
 */
export function grow(add) {
  const keys = /** @type {Nutrient[]} */ (['N', 'P', 'K']);
  const ratio = /** @type {Record<Nutrient, number>} */ ({});
  for (const k of keys) ratio[k] = (NEED[k] * SOIL_SHARE + add[k]) / NEED[k];
  const factors = keys.map((k) => response(ratio[k]));
  const growth = Math.min(...factors);
  const short = keys.filter((k) => ratio[k] < 1).sort((a, b) => ratio[a] - ratio[b]);
  const over = keys.filter((k) => ratio[k] > BURN_FROM).sort((a, b) => ratio[b] - ratio[a]);
  // The plant takes up its need scaled by how well it grows; the rest is left over.
  const runoff = keys.reduce((sum, k) => sum + NEED[k] * Math.max(0, ratio[k] - growth), 0);
  const share = runoff / (NEED.N + NEED.P + NEED.K);
  return {
    ratio,
    growth,
    limiting: short[0] ?? null,
    burning: over[0] ?? null,
    runoff,
    pollution: share < 0.25 ? 'thấp' : share < 0.6 ? 'trung bình' : 'cao',
  };
}

/** What a lack of each element looks like, as the book describes its role. */
export const SHORTAGE = /** @type {Record<Nutrient, string>} */ ({
  N: 'Thiếu nitrogen: cây còi cọc, lá nhỏ và vàng, đẻ nhánh kém.',
  P: 'Thiếu phosphorus: rễ kém phát triển, cây chậm ra hoa, hạt lép.',
  K: 'Thiếu potassium: thân yếu dễ đổ, dễ nhiễm sâu bệnh, hạt kém chắc.',
});

/**
 * One line of feedback for the plot.
 * @param {FieldResult} r
 */
export function advice(r) {
  if (r.burning) {
    return `Bón quá nhiều ${{ N: 'phân đạm', P: 'phân lân', K: 'phân kali' }[r.burning]}: cây bị “cháy” và lượng thừa ngấm vào đất, nước gây ô nhiễm. Hãy giảm lượng phân.`;
  }
  if (r.limiting) return `${SHORTAGE[r.limiting]} Hãy bón thêm phân chứa nguyên tố này.`;
  if (r.pollution !== 'thấp') {
    return 'Cây phát triển tốt nhưng phân bón thừa nhiều, phần cây không hấp thụ sẽ trôi xuống ao hồ. Có thể giảm lượng phân mà năng suất không đổi.';
  }
  return 'Bón đủ và cân đối: cây phát triển tốt, lượng phân thừa ít.';
}
