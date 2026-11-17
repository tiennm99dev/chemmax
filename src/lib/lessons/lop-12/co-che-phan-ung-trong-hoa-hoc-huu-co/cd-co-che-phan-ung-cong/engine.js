/**
 * Electrophilic addition of HX or water to an unsymmetrical alkene: where
 * H+ adds decides which carbocation forms, and the more stable carbocation
 * gives the main product (Markovnikov's rule). Also the frames of the
 * nucleophilic addition of HCN to ethanal.
 */

/**
 * @typedef {object} Site
 * @property {string} cation TeX of the carbocation formed when H+ adds to this carbon
 * @property {1 | 2 | 3} order degree of the positive carbon
 * @property {string} product TeX of the product with "X" for the added group
 * @property {{ hbr: string, h2o: string }} names names of the products
 */

/**
 * @typedef {object} Alkene
 * @property {string} id
 * @property {string} name
 * @property {string} tex
 * @property {[string, string]} carbons how the two carbons of C=C are written
 * @property {[Site, Site]} sites H+ on the first carbon, on the second
 */

/** @type {Alkene[]} */
export const ALKENES = [
  {
    id: 'propene',
    name: 'propene',
    tex: 'CH_2{=}CH{-}CH_3',
    carbons: ['CH_2', 'CH'],
    sites: [
      {
        cation: 'CH_3{-}\\overset{+}{C}H{-}CH_3',
        order: 2,
        product: 'CH_3{-}CHX{-}CH_3',
        names: { hbr: '2-bromopropane', h2o: 'propan-2-ol' },
      },
      {
        cation: '\\overset{+}{C}H_2{-}CH_2{-}CH_3',
        order: 1,
        product: 'CH_2X{-}CH_2{-}CH_3',
        names: { hbr: '1-bromopropane', h2o: 'propan-1-ol' },
      },
    ],
  },
  {
    id: 'but-1-ene',
    name: 'but-1-ene',
    tex: 'CH_2{=}CH{-}CH_2{-}CH_3',
    carbons: ['CH_2', 'CH'],
    sites: [
      {
        cation: 'CH_3{-}\\overset{+}{C}H{-}CH_2{-}CH_3',
        order: 2,
        product: 'CH_3{-}CHX{-}CH_2{-}CH_3',
        names: { hbr: '2-bromobutane', h2o: 'butan-2-ol' },
      },
      {
        cation: '\\overset{+}{C}H_2{-}CH_2{-}CH_2{-}CH_3',
        order: 1,
        product: 'CH_2X{-}CH_2{-}CH_2{-}CH_3',
        names: { hbr: '1-bromobutane', h2o: 'butan-1-ol' },
      },
    ],
  },
  {
    id: '2-methylpropene',
    name: '2-methylpropene',
    tex: 'CH_2{=}C(CH_3){-}CH_3',
    carbons: ['CH_2', 'C(CH_3)'],
    sites: [
      {
        cation: 'CH_3{-}\\overset{+}{C}(CH_3){-}CH_3',
        order: 3,
        product: 'CH_3{-}CX(CH_3){-}CH_3',
        names: { hbr: '2-bromo-2-methylpropane', h2o: '2-methylpropan-2-ol' },
      },
      {
        cation: '\\overset{+}{C}H_2{-}CH(CH_3){-}CH_3',
        order: 1,
        product: 'CH_2X{-}CH(CH_3){-}CH_3',
        names: { hbr: '1-bromo-2-methylpropane', h2o: '2-methylpropan-1-ol' },
      },
    ],
  },
];

const ORDER_WORDS = { 1: 'bậc I', 2: 'bậc II', 3: 'bậc III' };

/** @param {1 | 2 | 3} order */
export const orderWord = (order) => ORDER_WORDS[order];

/**
 * Energy of the barrier to a carbocation of the given degree, in the
 * illustrative units of the diagram: the more stable the cation, the lower.
 * @param {1 | 2 | 3} order
 */
export function barrier(order) {
  return { 1: 110, 2: 80, 3: 65 }[order];
}

/**
 * Key points of the energy profile through a carbocation of the given degree:
 * start, first peak, carbocation, second peak, product.
 * @param {1 | 2 | 3} order
 * @returns {Array<{ s: number, e: number }>}
 */
export function keyPoints(order) {
  const peak = barrier(order);
  const cation = peak - 25;
  return [
    { s: 0, e: 0 },
    { s: 0.3, e: peak },
    { s: 0.5, e: cation },
    { s: 0.62, e: cation + 8 },
    { s: 1, e: -40 },
  ];
}

/**
 * A smooth profile through the key points (cosine easing between each pair),
 * sampled at `n` points per stretch.
 * @param {1 | 2 | 3} order @param {number} [n]
 */
export function profile(order, n = 16) {
  const keys = keyPoints(order);
  /** @type {Array<{ s: number, e: number }>} */
  const out = [keys[0]];
  for (let i = 1; i < keys.length; i++) {
    const a = keys[i - 1];
    const b = keys[i];
    for (let k = 1; k <= n; k++) {
      const t = k / n;
      const w = (1 - Math.cos(Math.PI * t)) / 2;
      out.push({ s: a.s + (b.s - a.s) * t, e: a.e + (b.e - a.e) * w });
    }
  }
  return out;
}

/**
 * The outcome of adding H+ to one carbon of the double bond.
 * @param {Alkene} alkene
 * @param {'hbr' | 'h2o'} reagent
 * @param {0 | 1} site which carbon of C=C takes the H+
 */
export function addition(alkene, reagent, site) {
  const chosen = alkene.sites[site];
  const other = alkene.sites[1 - site];
  const group = reagent === 'hbr' ? 'Br' : 'OH';
  const main = chosen.order > other.order;
  const written = chosen.product
    .replace('CH_2X', `CH_2${group}`)
    .replace('X', group === 'OH' ? '(OH)' : group);
  const product = `\\mathrm{${written}}`;
  const attacker =
    reagent === 'hbr' ? '$\\mathrm{Br^-}$' : 'phân tử $\\mathrm{H_2O}$ (rồi tách $\\mathrm{H^+}$)';
  const text = main
    ? `H⁺ cộng vào $\\mathrm{${alkene.carbons[site]}}$ tạo carbocation ${orderWord(chosen.order)}, bền hơn carbocation ${orderWord(other.order)} ở hướng kia, nên đi qua rào năng lượng thấp hơn. ${attacker} kết hợp với carbocation cho sản phẩm chính ${chosen.names[reagent]}. Đúng quy tắc Markovnikov.`
    : `H⁺ cộng vào $\\mathrm{${alkene.carbons[site]}}$ tạo carbocation ${orderWord(chosen.order)}, kém bền hơn carbocation ${orderWord(other.order)} ở hướng kia, rào năng lượng cao hơn. Hướng này chỉ cho sản phẩm phụ ${chosen.names[reagent]}.`;
  return {
    cation: `\\mathrm{${chosen.cation}}`,
    order: chosen.order,
    product,
    name: chosen.names[reagent],
    main,
    text,
  };
}

/** @typedef {import('../_shared/player.js').Frame} Frame */

/** @type {Frame[]} */
export const CARBONYL_FRAMES = [
  {
    scene: {
      atoms: [
        { id: 'c', x: 200, y: 110, label: 'C', charge: 'δ+' },
        { id: 'o', x: 200, y: 45, label: 'O', charge: 'δ-' },
        { id: 'me', x: 140, y: 145, label: 'CH3' },
        { id: 'h', x: 260, y: 145, label: 'H' },
        { id: 'cn', x: 70, y: 70, label: 'CN', charge: '-' },
      ],
      bonds: [
        { a: 'c', b: 'o', order: 2 },
        { a: 'c', b: 'me' },
        { a: 'c', b: 'h' },
      ],
      arrows: [
        { from: 'cn', to: 'c', bend: -30 },
        { from: 'c~o', to: 'o', bend: -25 },
      ],
    },
    caption:
      '$\\mathrm{CH_3CHO} + \\mathrm{HCN} \\rightarrow \\mathrm{CH_3CH(OH)CN}$. Liên kết $\\mathrm{C{=}O}$ phân cực mạnh về phía O: C mang $\\delta+$, O mang $\\delta-$. Anion $\\mathrm{CN^-}$ (từ HCN) là tác nhân nucleophile.',
    ask: {
      prompt: 'Anion $\\mathrm{CN^-}$ tấn công vào nguyên tử nào của nhóm $\\mathrm{C{=}O}$?',
      options: ['Nguyên tử C ($\\delta+$)', 'Nguyên tử O ($\\delta-$)'],
      answer: 0,
      hint: 'Tác nhân nucleophile giàu electron tìm đến trung tâm thiếu electron.',
      why: 'C mang một phần điện tích dương nên bị $\\mathrm{CN^-}$ tấn công; cặp electron $\\pi$ của $\\mathrm{C{=}O}$ chuyển hẳn về O. Đây là giai đoạn chậm.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'c', x: 180, y: 110, label: 'C' },
        { id: 'o', x: 180, y: 45, label: 'O', charge: '-' },
        { id: 'me', x: 120, y: 145, label: 'CH3' },
        { id: 'h', x: 240, y: 145, label: 'H' },
        { id: 'cn', x: 120, y: 85, label: 'CN' },
        { id: 'hh', x: 265, y: 45, label: 'H' },
        { id: 'cn2', x: 320, y: 45, label: 'CN' },
      ],
      bonds: [
        { a: 'c', b: 'o' },
        { a: 'c', b: 'me' },
        { a: 'c', b: 'h' },
        { a: 'c', b: 'cn' },
        { a: 'hh', b: 'cn2' },
      ],
      arrows: [
        { from: 'o', to: 'hh', bend: 30 },
        { from: 'hh~cn2', to: 'cn2', bend: 28 },
      ],
    },
    caption:
      'Tạo anion trung gian: O mang điện tích âm, C đã chuyển từ lai hoá $sp^2$ (phẳng) sang $sp^3$. Bên cạnh là một phân tử HCN.',
    ask: {
      prompt: 'Anion trung gian nhận tiểu phân nào để thành sản phẩm?',
      options: ['$\\mathrm{H^+}$ từ HCN', '$\\mathrm{CN^-}$', 'Thêm một electron'],
      answer: 0,
      hint: 'O đang mang điện tích âm, cần một tiểu phân mang điện tích dương.',
      why: 'O⁻ lấy $\\mathrm{H^+}$ của HCN (giai đoạn nhanh), tạo nhóm OH và giải phóng lại $\\mathrm{CN^-}$ để tiếp tục tấn công phân tử aldehyde khác.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'c', x: 180, y: 110, label: 'C' },
        { id: 'o', x: 180, y: 45, label: 'OH' },
        { id: 'me', x: 120, y: 145, label: 'CH3' },
        { id: 'h', x: 240, y: 145, label: 'H' },
        { id: 'cn', x: 120, y: 85, label: 'CN' },
        { id: 'cn2', x: 310, y: 60, label: 'CN', charge: '-' },
      ],
      bonds: [
        { a: 'c', b: 'o' },
        { a: 'c', b: 'me' },
        { a: 'c', b: 'h' },
        { a: 'c', b: 'cn' },
      ],
      notes: [{ x: 180, y: 190, text: 'Cyanohydrin' }],
    },
    caption:
      'Sản phẩm $\\mathrm{CH_3CH(OH)CN}$ (2-hydroxypropanenitrile), một cyanohydrin; $\\mathrm{CN^-}$ được tái tạo. Đây là phản ứng cộng nucleophile ($A_N$): tác nhân tấn công đầu tiên là nucleophile.',
  },
];
