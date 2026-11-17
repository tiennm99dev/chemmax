/**
 * Choosing how to win a metal from its compounds by how active it is: molten
 * electrolysis for the most active metals (K to Al), reduction by C, CO or H2
 * at high temperature for the middle ones, hydrometallurgy for the least
 * active, electrolysis of a solution for the middle and least active ones.
 */

/** @typedef {'dpnc' | 'nhiet' | 'thuy' | 'dpdd'} MethodId */
/** @typedef {'strong' | 'middle' | 'weak'} Activity */

/** @type {Array<{ id: MethodId, name: string }>} */
export const METHODS = [
  { id: 'dpnc', name: 'Điện phân nóng chảy' },
  { id: 'nhiet', name: 'Nhiệt luyện' },
  { id: 'thuy', name: 'Thuỷ luyện' },
  { id: 'dpdd', name: 'Điện phân dung dịch' },
];

/** @param {MethodId} id */
export const methodName = (id) =>
  /** @type {{ name: string }} */ (METHODS.find((m) => m.id === id)).name;

/**
 * @typedef {object} Source
 * @property {string} id element symbol
 * @property {Activity} activity
 * @property {string} found how it occurs in nature (rich text)
 * @property {Partial<Record<MethodId, { equation: string, condition: string }>>} ways
 *   the methods used for it, each with a book-style equation and its condition
 * @property {MethodId} main the method mostly used
 */

/** @type {Source[]} */
export const SOURCES = [
  {
    id: 'K',
    activity: 'strong',
    found: 'muối $\\mathrm{KCl}$ trong mỏ muối và nước biển',
    ways: { dpnc: { equation: '2KCl → 2K + Cl2↑', condition: 'điện phân nóng chảy' } },
    main: 'dpnc',
  },
  {
    id: 'Ca',
    activity: 'strong',
    found: 'đá vôi $\\mathrm{CaCO_3}$, thạch cao $\\mathrm{CaSO_4 \\cdot 2H_2O}$',
    ways: { dpnc: { equation: 'CaCl2 → Ca + Cl2↑', condition: 'điện phân nóng chảy' } },
    main: 'dpnc',
  },
  {
    id: 'Na',
    activity: 'strong',
    found: 'muối $\\mathrm{NaCl}$ trong nước biển, mỏ muối',
    ways: { dpnc: { equation: '2NaCl → 2Na + Cl2↑', condition: 'điện phân nóng chảy' } },
    main: 'dpnc',
  },
  {
    id: 'Mg',
    activity: 'strong',
    found: '$\\mathrm{MgCl_2}$ trong nước biển, quặng dolomite $\\mathrm{CaCO_3 \\cdot MgCO_3}$',
    ways: { dpnc: { equation: 'MgCl2 → Mg + Cl2↑', condition: 'điện phân nóng chảy' } },
    main: 'dpnc',
  },
  {
    id: 'Al',
    activity: 'strong',
    found: 'quặng bauxite $\\mathrm{Al_2O_3 \\cdot 2H_2O}$',
    ways: {
      dpnc: {
        equation: '2Al2O3 → 4Al + 3O2↑',
        condition: 'điện phân nóng chảy, có cryolite',
      },
    },
    main: 'dpnc',
  },
  {
    id: 'Zn',
    activity: 'middle',
    found: 'quặng zinc blende $\\mathrm{ZnS}$',
    ways: {
      nhiet: { equation: 'ZnO + C → Zn + CO', condition: 'nhiệt độ cao' },
      dpdd: { equation: '2ZnSO4 + 2H2O → 2Zn + O2↑ + 2H2SO4', condition: 'điện phân dung dịch' },
    },
    main: 'nhiet',
  },
  {
    id: 'Fe',
    activity: 'middle',
    found:
      'quặng hematite $\\mathrm{Fe_2O_3}$, magnetite $\\mathrm{Fe_3O_4}$, pyrite $\\mathrm{FeS_2}$',
    ways: {
      nhiet: { equation: 'Fe2O3 + 3CO → 2Fe + 3CO2', condition: 'nhiệt độ cao (lò cao)' },
      dpdd: { equation: '2FeSO4 + 2H2O → 2Fe + O2↑ + 2H2SO4', condition: 'điện phân dung dịch' },
    },
    main: 'nhiet',
  },
  {
    id: 'Sn',
    activity: 'middle',
    found: 'quặng cassiterite $\\mathrm{SnO_2}$',
    ways: {
      nhiet: { equation: 'SnO2 + 2C → Sn + 2CO', condition: 'nhiệt độ cao' },
      dpdd: { equation: 'SnCl2 → Sn + Cl2↑', condition: 'điện phân dung dịch' },
    },
    main: 'nhiet',
  },
  {
    id: 'Pb',
    activity: 'middle',
    found: 'quặng galena $\\mathrm{PbS}$',
    ways: {
      nhiet: { equation: 'PbO + C → Pb + CO', condition: 'nhiệt độ cao' },
      dpdd: {
        equation: '2Pb(NO3)2 + 2H2O → 2Pb + O2↑ + 4HNO3',
        condition: 'điện phân dung dịch',
      },
    },
    main: 'nhiet',
  },
  {
    id: 'Cu',
    activity: 'weak',
    found: 'quặng chalcopyrite $\\mathrm{CuFeS_2}$, malachite $\\mathrm{CuCO_3 \\cdot Cu(OH)_2}$',
    ways: {
      nhiet: { equation: 'CuO + H2 → Cu + H2O', condition: 'nhiệt độ cao' },
      thuy: { equation: 'Fe + CuSO4 → FeSO4 + Cu', condition: 'trong dung dịch' },
      dpdd: { equation: 'CuCl2 → Cu + Cl2↑', condition: 'điện phân dung dịch' },
    },
    main: 'nhiet',
  },
  {
    id: 'Ag',
    activity: 'weak',
    found: 'dạng đơn chất (bạc tự sinh) hoặc hợp chất như $\\mathrm{Ag_2S}$',
    ways: {
      thuy: {
        equation: 'Zn + 2Na[Ag(CN)2] → Na2[Zn(CN)4] + 2Ag',
        condition: 'hoà tan bằng NaCN, rồi khử bằng Zn',
      },
      dpdd: { equation: '4AgNO3 + 2H2O → 4Ag + O2↑ + 4HNO3', condition: 'điện phân dung dịch' },
    },
    main: 'thuy',
  },
  {
    id: 'Au',
    activity: 'weak',
    found: 'chủ yếu ở dạng đơn chất (vàng sa khoáng, vàng trong đá)',
    ways: {
      thuy: {
        equation: 'Zn + 2Na[Au(CN)2] → Na2[Zn(CN)4] + 2Au',
        condition: 'hoà tan bằng NaCN, rồi khử bằng Zn',
      },
      dpdd: {
        equation: '2AuCl3 → 2Au + 3Cl2↑',
        condition: 'điện phân dung dịch (tinh chế vàng)',
      },
    },
    main: 'thuy',
  },
];

/** @param {string} id */
export function source(id) {
  const s = SOURCES.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown metal ${id}`);
  return s;
}

/** Vietnamese words for the activity groups. */
export const ACTIVITY_NAMES = {
  strong: 'hoạt động mạnh',
  middle: 'hoạt động trung bình',
  weak: 'hoạt động yếu',
};

/**
 * Why a method does not suit a metal.
 * @param {Source} s
 * @param {MethodId} method
 */
function whyNot(s, method) {
  const ion = `ion của ${s.id}`;
  if (s.activity === 'strong') {
    if (method === 'nhiet')
      return `${s.id} là kim loại hoạt động mạnh: các chất khử C, CO, $\\mathrm{H_2}$ không khử được oxide của ${s.id} thành kim loại.`;
    if (method === 'thuy')
      return `Ion của ${s.id} rất khó bị khử: trong dung dịch, kim loại mạnh hơn ${s.id} (nếu có) khử nước trước, nên không đẩy được ${s.id} ra khỏi dung dịch muối.`;
    return `Khi điện phân dung dịch, nước bị khử ở cathode thay cho ${ion}, nên thu được khí $\\mathrm{H_2}$ chứ không thu được ${s.id}.`;
  }
  if (method === 'dpnc')
    return `Điện phân nóng chảy tốn rất nhiều năng lượng nên chỉ dùng cho kim loại hoạt động mạnh (từ K đến Al). ${s.id} được tách bằng cách rẻ hơn.`;
  if (method === 'thuy')
    return `Thuỷ luyện thường dùng cho kim loại hoạt động yếu như Cu, Ag, Au; ${s.id} không được tách theo cách này.`;
  return `${s.id} tồn tại chủ yếu ở dạng đơn chất hoặc hợp chất lẫn rất ít trong quặng; người ta hoà tan ${s.id} bằng dung dịch thích hợp rồi khử (thuỷ luyện) chứ không dùng nhiệt luyện.`;
}

/**
 * The verdict on using `method` for metal `id`.
 * @param {string} id
 * @param {MethodId} method
 * @returns {{ ok: boolean, text: string }}
 */
export function verdict(id, method) {
  const s = source(id);
  const way = s.ways[method];
  if (!way) return { ok: false, text: whyNot(s, method) };
  const others = /** @type {MethodId[]} */ (Object.keys(s.ways)).filter((m) => m !== method);
  const main =
    method === s.main
      ? 'Đây là phương pháp chủ yếu.'
      : `Phương pháp chủ yếu: ${methodName(s.main).toLowerCase()}.`;
  const also = others.length
    ? ` Cũng có thể dùng: ${others.map((m) => methodName(m).toLowerCase()).join(', ')}.`
    : '';
  return {
    ok: true,
    text: `Phù hợp: ${s.id} là kim loại ${ACTIVITY_NAMES[s.activity]}. ${main}${also}`,
  };
}
