/**
 * Starch and cellulose: the iodine test (starch turns blue-violet, nothing
 * else in the tray does) and the hydrolysis
 * (C6H10O5)n + nH2O → nC6H12O6, where each 162 g of the –C6H10O5– unit gives
 * 180 g of glucose.
 */

/** Book molar masses, g/mol: one –C6H10O5– unit, and glucose. */
export const MOLAR_MASS = { unit: 162, glucose: 180 };

/**
 * A sample on the tray.
 * @typedef {{ id: string, name: string, starch: boolean, main: string, why: string, color: string }} Food
 */

/** Colour of a drop of iodine solution on a sample with starch, and without. */
export const IODINE = { starch: '#4c1d95', none: '#b45309' };

/** @type {Food[]} */
export const FOODS = [
  {
    id: 'com',
    name: 'Cơm',
    starch: true,
    main: 'tinh bột',
    why: 'Hạt gạo chứa nhiều tinh bột.',
    color: '#f8fafc',
  },
  {
    id: 'khoai-tay',
    name: 'Lát khoai tây',
    starch: true,
    main: 'tinh bột',
    why: 'Củ khoai tây dự trữ tinh bột.',
    color: '#fef3c7',
  },
  {
    id: 'banh-mi',
    name: 'Bánh mì',
    starch: true,
    main: 'tinh bột',
    why: 'Bánh mì làm từ bột mì, chứa nhiều tinh bột.',
    color: '#fde68a',
  },
  {
    id: 'chuoi-xanh',
    name: 'Chuối xanh',
    starch: true,
    main: 'tinh bột',
    why: 'Quả chuối xanh chứa nhiều tinh bột; khi chín, phần lớn tinh bột chuyển thành đường.',
    color: '#ecfccb',
  },
  {
    id: 'bong',
    name: 'Bông gòn',
    starch: false,
    main: 'cellulose',
    why: 'Bông gần như là cellulose nguyên chất; cellulose không tạo màu xanh tím với iodine.',
    color: '#ffffff',
  },
  {
    id: 'giay-loc',
    name: 'Giấy lọc',
    starch: false,
    main: 'cellulose',
    why: 'Giấy lọc làm từ cellulose, không có tinh bột.',
    color: '#f1f5f9',
  },
  {
    id: 'duong',
    name: 'Đường kính',
    starch: false,
    main: 'saccharose',
    why: 'Đường kính là saccharose, không phải tinh bột.',
    color: '#ffffff',
  },
  {
    id: 'trung',
    name: 'Lòng trắng trứng luộc',
    starch: false,
    main: 'protein',
    why: 'Lòng trắng trứng chủ yếu là protein và nước.',
    color: '#f8fafc',
  },
  {
    id: 'thuy-phan',
    name: 'Hồ tinh bột đã thuỷ phân hết',
    starch: false,
    main: 'glucose',
    why: 'Đun lâu với acid, tinh bột đã bị thuỷ phân hết thành glucose, nên không còn màu xanh tím.',
    color: '#f1f5f9',
  },
];

/**
 * Colour seen after a drop of iodine solution.
 * @param {Food} food
 */
export function iodineColor(food) {
  return food.starch ? IODINE.starch : IODINE.none;
}

/**
 * Tally of the learner's predictions, as { food id: predicted starch? }.
 * @param {Record<string, boolean>} predictions
 */
export function score(predictions) {
  let right = 0;
  let done = 0;
  for (const f of FOODS) {
    if (predictions[f.id] === undefined) continue;
    done += 1;
    if (predictions[f.id] === f.starch) right += 1;
  }
  return { right, done, total: FOODS.length };
}

/**
 * Glucose (same mass unit as `starch`) from hydrolysing a mass of starch or
 * cellulose with the given yield in percent: 162 parts give 180 parts.
 * @param {number} starch
 * @param {number} yieldPercent
 */
export function glucoseFromStarch(starch, yieldPercent) {
  const m = ((starch * MOLAR_MASS.glucose) / MOLAR_MASS.unit) * (yieldPercent / 100);
  return Math.round(m * 100) / 100;
}

/** Units in the model starch chain of the hydrolysis widget. */
export const CHAIN_UNITS = 12;

/** Bonds of the model chain, numbered 0–10, in the order acid cuts them. */
export const CUT_ORDER = [5, 2, 8, 0, 10, 6, 3, 9, 1, 7, 4];

/**
 * Lengths of the pieces of the model chain after the first `cuts` bonds of
 * `CUT_ORDER` have been broken by water.
 * @param {number} cuts
 * @returns {number[]}
 */
export function fragments(cuts) {
  const broken = new Set(CUT_ORDER.slice(0, Math.max(0, cuts)));
  /** @type {number[]} */
  const pieces = [];
  let run = 1;
  for (let bond = 0; bond < CHAIN_UNITS - 1; bond += 1) {
    if (broken.has(bond)) {
      pieces.push(run);
      run = 1;
    } else run += 1;
  }
  pieces.push(run);
  return pieces;
}

/**
 * What a drop of iodine shows while starch is being hydrolysed: long chains
 * give blue-violet, shorter pieces a weaker red-violet, and once only glucose
 * (or pieces of two units) is left the iodine keeps its own yellow-brown.
 * @param {number[]} pieces
 * @returns {{ label: string, color: string }}
 */
export function iodineStage(pieces) {
  const longest = Math.max(...pieces);
  if (longest >= 6) return { label: 'xanh tím', color: IODINE.starch };
  if (longest >= 3) return { label: 'tím đỏ, nhạt dần', color: '#9d174d' };
  return { label: 'vàng nâu (không còn tinh bột)', color: IODINE.none };
}
