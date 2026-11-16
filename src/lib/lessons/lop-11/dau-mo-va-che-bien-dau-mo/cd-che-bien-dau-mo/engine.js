/**
 * Fractional distillation and cracking of crude oil, on straight-chain
 * alkanes. A real crude also holds branched and cyclic hydrocarbons, so the
 * carbon ranges of the fractions overlap; boiling points decide the cut.
 */

/**
 * Normal boiling points of the straight-chain alkanes C1 – C30, in °C,
 * rounded to the degree.
 */
const BOILING = [
  -162, -89, -42, -1, 36, 69, 98, 126, 151, 174, 196, 216, 235, 254, 271, 287, 302, 316, 330, 343,
  357, 369, 380, 391, 402, 412, 422, 432, 441, 450,
];

/** Largest carbon number the widget offers. */
export const MAX_CARBON = BOILING.length;

/**
 * Boiling point of the straight-chain alkane with n carbons.
 * @param {number} n 1 to 30
 */
export function boilingPoint(n) {
  const bp = BOILING[n - 1];
  if (bp === undefined) throw new RangeError(`No boiling point for C${n}`);
  return bp;
}

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   upTo: number,
 *   range: string,
 *   carbons: string,
 *   use: string,
 * }} Fraction
 */

/**
 * The fractions drawn off the atmospheric column, top to bottom. `upTo` is
 * the upper end of the boiling range in °C.
 * @type {Fraction[]}
 */
export const FRACTIONS = [
  {
    id: 'khi',
    name: 'Khí dầu mỏ',
    upTo: 30,
    range: 'dưới 30 °C',
    carbons: 'C1 – C4',
    use: 'khí hoá lỏng (LPG) làm nhiên liệu, nguyên liệu hoá dầu',
  },
  {
    id: 'xang',
    name: 'Xăng (naphtha)',
    upTo: 180,
    range: '30 – 180 °C',
    carbons: 'C5 – C10',
    use: 'nhiên liệu động cơ xăng, nguyên liệu reforming',
  },
  {
    id: 'dau-hoa',
    name: 'Dầu hoả (kerosene)',
    upTo: 250,
    range: '180 – 250 °C',
    carbons: 'khoảng C11 – C15',
    use: 'nhiên liệu phản lực, đun nấu, thắp sáng',
  },
  {
    id: 'diesel',
    name: 'Dầu diesel (gas oil)',
    upTo: 350,
    range: '250 – 350 °C',
    carbons: 'khoảng C15 – C20',
    use: 'nhiên liệu động cơ diesel, nguyên liệu cracking',
  },
  {
    id: 'can',
    name: 'Cặn (mazut)',
    upTo: Infinity,
    range: 'trên 350 °C',
    carbons: 'trên C20',
    use: 'chưng cất chân không lấy dầu nhờn, paraffin, nhựa đường; dầu đốt lò (FO)',
  },
];

/**
 * The fraction a hydrocarbon boiling at `bp` °C condenses into.
 * @param {number} bp
 */
export function fractionOf(bp) {
  return FRACTIONS.find((f) => bp < f.upTo) ?? FRACTIONS[FRACTIONS.length - 1];
}

/**
 * Formula of a hydrocarbon CnHm in the book's plain writing ("CH4", "C8H18").
 * @param {number} c @param {number} h
 */
export const formulaOf = (c, h) => `C${c === 1 ? '' : c}H${h}`;

/** Formula of the alkane with n carbons. @param {number} n */
export const alkane = (n) => formulaOf(n, 2 * n + 2);

/** Formula of the alkene with n carbons (n ≥ 2). @param {number} n */
export const alkene = (n) => formulaOf(n, 2 * n);

/**
 * Inline TeX of a hydrocarbon CnHm, such as `$\mathrm{C_{8}H_{18}}$`.
 * @param {number} c @param {number} h
 */
export const formulaTex = (c, h) => `$\\mathrm{C${c === 1 ? '' : `_{${c}}`}H_{${h}}}$`;

/** Stems of the straight-chain alkane names up to decane. */
const SMALL = ['meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];

/**
 * Cracking an alkane with n carbons at the C–C bond after the k-th carbon:
 * the k-carbon piece keeps the hydrogen and becomes an alkane, the rest
 * becomes an alkene, so the alkene needs at least two carbons.
 * @param {number} n chain length
 * @param {number} k carbons in the alkane piece, 1 to n − 2
 */
export function crack(n, k) {
  if (!(k >= 1 && k <= n - 2)) throw new RangeError(`Cannot crack C${n} after carbon ${k}`);
  const m = n - k;
  return {
    alkane: k,
    alkene: m,
    equation: `${alkane(n)} → ${alkane(k)} + ${alkene(m)}`,
  };
}

/** @param {number} n */
const alkaneName = (n) => (n <= SMALL.length ? `${SMALL[n - 1]}ane` : formulaTex(n, 2 * n + 2));
/** @param {number} n */
const alkeneName = (n) => (n === 2 ? 'ethylene' : n === 3 ? 'propylene' : formulaTex(n, 2 * n));

/**
 * What the products of one cracking step are good for.
 * @param {number} n
 * @param {number} k
 */
export function crackText(n, k) {
  const { alkane: a, alkene: e } = crack(n, k);
  const feed = fractionOf(boilingPoint(n)).name.toLowerCase();
  const parts = [
    `${alkaneName(a)} thuộc phân đoạn ${fractionOf(boilingPoint(a)).name.toLowerCase()}`,
    `${alkeneName(e)} ${e <= 3 ? 'là nguyên liệu hoá dầu quý (sản xuất chất dẻo)' : `có số carbon như phân đoạn ${fractionOf(boilingPoint(e)).name.toLowerCase()}`}`,
  ];
  const gasoline = [a, e].some((c) => c >= 5 && c <= 10);
  return `Từ một phân tử thuộc ${feed} thu được ${parts.join(', ')}.${gasoline ? ' Cracking đã tạo thêm hydrocarbon trong khoảng của xăng.' : ''}`;
}
