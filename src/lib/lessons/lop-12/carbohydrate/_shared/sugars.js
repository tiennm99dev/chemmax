/**
 * The carbohydrates of the chapter and what each reagent of the book shows
 * with them in a test tube: copper(II) hydroxide in a base at room
 * temperature and on heating, the Tollens reagent, bromine water and iodine.
 *
 * The chemistry behind the table:
 * - adjacent –OH groups (glucose, fructose, saccharose, maltose) dissolve
 *   Cu(OH)2 into a blue solution at room temperature;
 * - a free hemiacetal –OH lets the ring open to an aldehyde (glucose,
 *   maltose; fructose turns into glucose in a base), so the sugar reduces the
 *   Tollens reagent to silver and Cu(OH)2 in hot NaOH to brick-red Cu2O;
 * - bromine water oxidises the aldehyde group only, so fructose leaves it
 *   yellow (it is not in a base there) while glucose and maltose take its
 *   colour away;
 * - iodine turns starch blue-violet; cellulose gives no colour.
 */

/** @typedef {'glucose' | 'fructose' | 'saccharose' | 'maltose' | 'tinh-bot' | 'cellulose'} SugarId */
/** @typedef {'cu-oh2' | 'cu-oh2-nong' | 'tollens' | 'bromine' | 'iodine'} ReagentId */

/**
 * @typedef {object} Sugar
 * @property {SugarId} id
 * @property {string} name
 * @property {string} formula molecular formula as TeX inside \mathrm{}
 * @property {'monosaccharide' | 'disaccharide' | 'polysaccharide'} kind
 * @property {boolean} polyol dissolves Cu(OH)2 at room temperature
 * @property {boolean} reducing reduces the Tollens reagent and hot Cu(OH)2
 * @property {boolean} bromine takes the colour of bromine water away
 * @property {boolean} iodine turns blue-violet with iodine
 * @property {string} state what the sample looks like on the bench
 */

/** @type {Sugar[]} */
export const SUGARS = [
  {
    id: 'glucose',
    name: 'glucose',
    formula: 'C_6H_{12}O_6',
    kind: 'monosaccharide',
    polyol: true,
    reducing: true,
    bromine: true,
    iodine: false,
    state: 'dung dịch không màu',
  },
  {
    id: 'fructose',
    name: 'fructose',
    formula: 'C_6H_{12}O_6',
    kind: 'monosaccharide',
    polyol: true,
    reducing: true,
    bromine: false,
    iodine: false,
    state: 'dung dịch không màu',
  },
  {
    id: 'saccharose',
    name: 'saccharose',
    formula: 'C_{12}H_{22}O_{11}',
    kind: 'disaccharide',
    polyol: true,
    reducing: false,
    bromine: false,
    iodine: false,
    state: 'dung dịch không màu',
  },
  {
    id: 'maltose',
    name: 'maltose',
    formula: 'C_{12}H_{22}O_{11}',
    kind: 'disaccharide',
    polyol: true,
    reducing: true,
    bromine: true,
    iodine: false,
    state: 'dung dịch không màu',
  },
  {
    id: 'tinh-bot',
    name: 'hồ tinh bột',
    formula: '(C_6H_{10}O_5)_n',
    kind: 'polysaccharide',
    polyol: false,
    reducing: false,
    bromine: false,
    iodine: true,
    state: 'hồ trắng đục, sánh',
  },
  {
    id: 'cellulose',
    name: 'cellulose (bông)',
    formula: '(C_6H_{10}O_5)_n',
    kind: 'polysaccharide',
    polyol: false,
    reducing: false,
    bromine: false,
    iodine: false,
    state: 'sợi bông trắng trong nước',
  },
];

/** @type {{ id: ReagentId, name: string, liquid: string, precipitate?: string | null }[]} */
export const REAGENTS = [
  {
    id: 'cu-oh2',
    name: 'Cu(OH)₂/NaOH, nhiệt độ thường',
    liquid: '#e0f2fe',
    precipitate: '#60a5fa',
  },
  { id: 'cu-oh2-nong', name: 'Cu(OH)₂/NaOH, đun nóng', liquid: '#e0f2fe', precipitate: '#60a5fa' },
  { id: 'tollens', name: 'Thuốc thử Tollens, đun nóng', liquid: '#f1f5f9' },
  { id: 'bromine', name: 'Nước bromine', liquid: '#fbbf24' },
  { id: 'iodine', name: 'Dung dịch iodine', liquid: '#fcd34d' },
];

/**
 * @param {string} id
 * @returns {Sugar}
 */
export function sugar(id) {
  const s = SUGARS.find((x) => x.id === id);
  if (!s) throw new Error(`unknown carbohydrate ${id}`);
  return s;
}

const COLORS = {
  blueSolution: '#2563eb',
  paleBlue: '#e0f2fe',
  clear: '#f1f5f9',
  bromine: '#fbbf24',
  iodine: '#fcd34d',
  violet: '#4c1d95',
  brickRed: '#b45309',
  silver: '#94a3b8',
  copperHydroxide: '#60a5fa',
  copperOxide: '#1f2937',
};

/**
 * Equations shown once a reaction has happened (TeX, no `$`).
 * @type {Partial<Record<SugarId, Partial<Record<ReagentId, string>>>>}
 */
const EQUATIONS = {
  glucose: {
    'cu-oh2':
      '2\\mathrm{C_6H_{12}O_6} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_6H_{11}O_6)_2Cu} + 2\\mathrm{H_2O}',
    'cu-oh2-nong':
      '\\mathrm{CH_2OH[CHOH]_4CHO} + 2\\mathrm{Cu(OH)_2} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_2OH[CHOH]_4COONa} + \\mathrm{Cu_2O} + 3\\mathrm{H_2O}',
    tollens:
      '\\mathrm{CH_2OH[CHOH]_4CHO} + 2\\mathrm{[Ag(NH_3)_2]OH} \\xrightarrow{t^\\circ} \\mathrm{CH_2OH[CHOH]_4COONH_4} + 2\\mathrm{Ag} + 3\\mathrm{NH_3} + \\mathrm{H_2O}',
    bromine:
      '\\mathrm{CH_2OH[CHOH]_4CHO} + \\mathrm{Br_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_2OH[CHOH]_4COOH} + 2\\mathrm{HBr}',
  },
  fructose: {
    'cu-oh2':
      '2\\mathrm{C_6H_{12}O_6} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_6H_{11}O_6)_2Cu} + 2\\mathrm{H_2O}',
  },
  saccharose: {
    'cu-oh2':
      '2\\mathrm{C_{12}H_{22}O_{11}} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_{12}H_{21}O_{11})_2Cu} + 2\\mathrm{H_2O}',
  },
  maltose: {
    'cu-oh2':
      '2\\mathrm{C_{12}H_{22}O_{11}} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_{12}H_{21}O_{11})_2Cu} + 2\\mathrm{H_2O}',
  },
};

/**
 * What a test tube shows. `text` is rich text, `short` a few plain words for
 * a results table; `tex` is the equation, if any.
 * @typedef {{ text: string, short: string, liquid: string, precipitate: string | null, amount: number, reacts: boolean, tex: string | null }} Observation
 */

/**
 * @param {SugarId} id
 * @param {ReagentId} reagent
 * @returns {Observation}
 */
export function observe(id, reagent) {
  const s = sugar(id);
  const tex = EQUATIONS[id]?.[reagent] ?? null;
  /**
   * @param {boolean} reacts @param {string} short @param {string} text @param {string} liquid
   * @param {string | null} [precipitate] @param {number} [amount]
   * @returns {Observation}
   */
  const out = (reacts, short, text, liquid, precipitate = null, amount = 0) => ({
    reacts,
    short,
    text,
    liquid,
    precipitate,
    amount,
    tex: reacts ? tex : null,
  });

  if (reagent === 'cu-oh2') {
    return s.polyol
      ? out(
          true,
          'dung dịch xanh lam',
          'kết tủa tan, tạo dung dịch màu xanh lam',
          COLORS.blueSolution,
        )
      : out(
          false,
          'không tan',
          'kết tủa $\\mathrm{Cu(OH)_2}$ không tan',
          COLORS.paleBlue,
          COLORS.copperHydroxide,
          0.4,
        );
  }
  if (reagent === 'cu-oh2-nong') {
    if (s.reducing) {
      return out(
        true,
        'kết tủa đỏ gạch',
        'dung dịch xanh lam, đun nóng xuất hiện kết tủa đỏ gạch $\\mathrm{Cu_2O}$',
        '#93c5fd',
        COLORS.brickRed,
        0.6,
      );
    }
    return s.polyol
      ? out(
          false,
          'xanh lam, không có kết tủa đỏ gạch',
          'dung dịch xanh lam, đun nóng không có kết tủa đỏ gạch',
          COLORS.blueSolution,
        )
      : out(
          false,
          'hoá đen, không có kết tủa đỏ gạch',
          '$\\mathrm{Cu(OH)_2}$ không tan, đun nóng hoá đen ($\\mathrm{CuO}$), không có kết tủa đỏ gạch',
          COLORS.paleBlue,
          COLORS.copperOxide,
          0.3,
        );
  }
  if (reagent === 'tollens') {
    return s.reducing
      ? out(
          true,
          'có bạc bám',
          'có lớp bạc sáng bám trên thành ống nghiệm',
          '#e2e8f0',
          COLORS.silver,
          0.7,
        )
      : out(false, 'không hiện tượng', 'không có hiện tượng', COLORS.clear);
  }
  if (reagent === 'bromine') {
    return s.bromine
      ? out(true, 'mất màu', 'nước bromine mất màu', COLORS.clear)
      : out(false, 'không mất màu', 'nước bromine không mất màu', COLORS.bromine);
  }
  return s.iodine
    ? out(true, 'xanh tím', 'xuất hiện màu xanh tím', COLORS.violet)
    : out(false, 'không đổi màu', 'không có màu xanh tím', COLORS.iodine);
}

export const M_GLUCOSE = 180;
export const M_DISACCHARIDE = 342;
export const M_UNIT = 162;
export const M_AG = 108;
export const M_ETHANOL = 46;
export const M_CO2 = 44;
export const M_TRINITRATE = 297;
export const M_HNO3 = 63;
/** Molar volume of a gas at standard conditions (25 °C, 1 bar), L/mol. */
export const V_MOLAR = 24.79;

/**
 * Why a sugar does or does not react with a reagent (rich text).
 * @param {SugarId} id
 * @param {ReagentId} reagent
 */
export function reason(id, reagent) {
  const s = sugar(id);
  if (reagent === 'cu-oh2') {
    return s.polyol
      ? `Phân tử ${s.name} có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau (tính chất của polyalcohol), nên hoà tan $\\mathrm{Cu(OH)_2}$ thành phức chất màu xanh lam.`
      : `${capital(s.name)} không tan trong nước lạnh như các đường, không hoà tan được $\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường.`;
  }
  if (reagent === 'iodine') {
    if (s.iodine) {
      return 'Phân tử iodine chui vào lòng chuỗi xoắn của tinh bột (chủ yếu amylose) tạo màu xanh tím.';
    }
    return id === 'cellulose'
      ? 'Mạch cellulose duỗi thẳng, không xoắn, nên không giữ được iodine và không tạo màu.'
      : `${capital(s.name)} không có cấu trúc xoắn của tinh bột nên không tạo màu với iodine.`;
  }
  if (reagent === 'bromine') {
    if (s.bromine) {
      return `Nhóm $\\mathrm{{-}CHO}$ (ở dạng mạch hở) của ${s.name} bị bromine oxi hoá thành nhóm $\\mathrm{{-}COOH}$, nên nước bromine mất màu.`;
    }
    if (id === 'fructose') {
      return 'Fructose có nhóm ketone, không có nhóm $\\mathrm{{-}CHO}$; nước bromine không phải môi trường kiềm nên fructose không chuyển thành glucose. Đây là cách phân biệt glucose với fructose.';
    }
    return `${capital(s.name)} không có nhóm $\\mathrm{{-}CHO}$ tự do nên không làm mất màu nước bromine.`;
  }
  // Tollens or hot Cu(OH)2: both test for a reducing sugar.
  if (id === 'fructose') {
    return 'Fructose không có nhóm $\\mathrm{{-}CHO}$, nhưng trong môi trường kiềm fructose chuyển hoá thành glucose, nên vẫn khử được thuốc thử.';
  }
  if (s.reducing) {
    return id === 'maltose'
      ? 'Gốc glucose thứ hai của maltose còn nhóm $\\mathrm{{-}OH}$ hemiacetal, vòng mở ra tạo nhóm $\\mathrm{{-}CHO}$ có tính khử.'
      : 'Nhóm $\\mathrm{{-}CHO}$ của glucose có tính khử: bị oxi hoá thành nhóm $\\mathrm{{-}COO^-}$.';
  }
  if (id === 'saccharose') {
    return 'Saccharose không còn nhóm $\\mathrm{{-}OH}$ hemiacetal hay hemiketal, vòng không mở ra được, nên không có tính khử.';
  }
  return `${capital(s.name)} có phân tử rất lớn, hầu như không có nhóm $\\mathrm{{-}CHO}$ tự do, nên không khử được thuốc thử.`;
}

/** @param {string} text */
function capital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
