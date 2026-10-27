/**
 * Fractional distillation of crude oil. A hydrocarbon condenses on the tray
 * whose temperature range holds its boiling point; straight-chain alkanes
 * stand in for the hydrocarbons of each fraction. Boiling points are
 * measured values at 1 atm, rounded to whole degrees Celsius; the fraction
 * limits are the usual approximate cut points, which differ a little from
 * refinery to refinery.
 */

/**
 * Boiling points of the straight-chain alkanes CnH2n+2 (°C), by n.
 * @type {Record<number, number>}
 */
const BOILING = {
  1: -162,
  2: -89,
  3: -42,
  4: -1,
  5: 36,
  6: 69,
  7: 98,
  8: 126,
  9: 151,
  10: 174,
  11: 196,
  12: 216,
  13: 235,
  14: 254,
  15: 271,
  16: 287,
  17: 302,
  18: 316,
  19: 330,
  20: 343,
  22: 369,
  24: 391,
  26: 412,
  28: 432,
  30: 450,
  32: 467,
  34: 483,
  36: 498,
  40: 525,
};

export const MIN_C = 1;
export const MAX_C = 40;

/**
 * Boiling point of the straight-chain alkane with n carbon atoms, rounded to
 * whole degrees; values between tabulated ones are interpolated.
 * @param {number} n
 */
export function boilingPoint(n) {
  if (n < MIN_C || n > MAX_C || !Number.isInteger(n)) throw new RangeError(`n = ${n}`);
  if (BOILING[n] !== undefined) return BOILING[n];
  let lo = n - 1;
  while (BOILING[lo] === undefined) lo -= 1;
  let hi = n + 1;
  while (BOILING[hi] === undefined) hi += 1;
  return Math.round(BOILING[lo] + ((BOILING[hi] - BOILING[lo]) * (n - lo)) / (hi - lo));
}

/**
 * Fractions from the top of the column (coolest) to the bottom (hottest).
 * `upTo` is the highest boiling point collected there, in °C.
 */
export const FRACTIONS = [
  {
    id: 'khi',
    name: 'Khí dầu mỏ',
    upTo: 30,
    range: 'dưới 30 °C',
    use: 'nhiên liệu khí đun nấu (gas), nguyên liệu cho công nghiệp hoá chất',
    colour: '#e0f2fe',
  },
  {
    id: 'xang',
    name: 'Xăng',
    upTo: 180,
    range: 'khoảng 30–180 °C',
    use: 'nhiên liệu cho xe máy, ô tô',
    colour: '#fef9c3',
  },
  {
    id: 'dau-hoa',
    name: 'Dầu hoả',
    upTo: 250,
    range: 'khoảng 180–250 °C',
    use: 'nhiên liệu cho động cơ máy bay phản lực, đun nấu, thắp sáng',
    colour: '#fde68a',
  },
  {
    id: 'diesel',
    name: 'Dầu diesel',
    upTo: 350,
    range: 'khoảng 250–350 °C',
    use: 'nhiên liệu cho động cơ diesel: xe tải, tàu thuyền, máy phát điện',
    colour: '#fbbf24',
  },
  {
    id: 'mazut',
    name: 'Dầu mazut',
    upTo: 450,
    range: 'khoảng 350–450 °C',
    use: 'nhiên liệu cho lò đốt công nghiệp, tàu biển; sản xuất dầu nhờn',
    colour: '#b45309',
  },
  {
    id: 'nhua-duong',
    name: 'Nhựa đường (cặn)',
    upTo: Infinity,
    range: 'trên 450 °C, còn lại ở đáy tháp',
    use: 'rải đường, chống thấm',
    colour: '#292524',
  },
];

/**
 * Index into FRACTIONS of the tray that collects a boiling point.
 * @param {number} celsius
 */
export function fractionIndex(celsius) {
  return FRACTIONS.findIndex((f) => celsius < f.upTo);
}

/**
 * Carbon-number span of each fraction for straight-chain alkanes.
 * @param {number} index
 */
export function carbonSpan(index) {
  const ns = [];
  for (let n = MIN_C; n <= MAX_C; n++) if (fractionIndex(boilingPoint(n)) === index) ns.push(n);
  return { from: ns[0], to: ns[ns.length - 1] };
}
