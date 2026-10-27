/**
 * A blast furnace cut into zones from the throat down to the hearth. Depth
 * runs from 0 at the top to 1 at the bottom; each zone has its rough
 * temperature, the reactions that happen there (book-style text, all heated)
 * and what the charge and the gas look like at that height. Temperatures
 * are typical values, rounded, as school diagrams give them.
 */

/**
 * @typedef {object} Zone
 * @property {string} id
 * @property {string} name
 * @property {number} top depth where the zone starts, 0-1
 * @property {number} bottom depth where it ends, 0-1
 * @property {string} temperature rough temperature range, Vietnamese text
 * @property {string[]} equations book-style equations, all at high temperature
 * @property {string} solid what the charge going down is made of here
 * @property {string} gas what the gas going up is made of here
 * @property {string} note what happens, in Vietnamese
 */

/** @type {Zone[]} */
export const ZONES = [
  {
    id: 'mieng',
    name: 'Miệng lò',
    top: 0,
    bottom: 0.12,
    temperature: 'khoảng 200 – 400 °C',
    equations: [],
    solid: 'Quặng hematite (Fe₂O₃), than cốc (C), đá vôi (CaCO₃) mới nạp',
    gas: 'Khí lò (CO₂, CO, N₂) thoát ra ngoài',
    note: 'Nguyên liệu được nạp từ trên xuống theo từng lớp; khí nóng đi lên làm khô và nung nóng chúng.',
  },
  {
    id: 'than',
    name: 'Thân lò',
    top: 0.12,
    bottom: 0.5,
    temperature: 'khoảng 400 – 1 000 °C',
    equations: ['Fe2O3 + 3CO → 2Fe + 3CO2', 'CaCO3 → CaO + CO2'],
    solid: 'Fe₂O₃ bị khử dần thành sắt; đá vôi bị phân huỷ thành CaO',
    gas: 'CO đi lên, bị oxi hoá thành CO₂',
    note: 'Carbon monoxide khử iron(III) oxide thành sắt. Đá vôi bị nhiệt phân thành calcium oxide.',
  },
  {
    id: 'bung',
    name: 'Bụng lò',
    top: 0.5,
    bottom: 0.72,
    temperature: 'khoảng 1 000 – 1 500 °C',
    equations: ['CaO + SiO2 → CaSiO3'],
    solid: 'Sắt nóng chảy hoà tan carbon tạo gang; CaO kết hợp với cát (SiO₂) tạo xỉ',
    gas: 'CO đi lên',
    note: 'Sắt nóng chảy hoà tan một ít carbon và các nguyên tố khác tạo thành gang lỏng. CaO kết hợp với SiO₂ (tạp chất cát, đá trong quặng) tạo xỉ CaSiO₃.',
  },
  {
    id: 'gio',
    name: 'Vùng cửa gió',
    top: 0.72,
    bottom: 0.86,
    temperature: 'khoảng 1 800 – 2 000 °C',
    equations: ['C + O2 → CO2', 'C + CO2 → 2CO'],
    solid: 'Than cốc cháy',
    gas: 'Không khí nóng thổi vào; CO₂ sinh ra gặp than nóng đỏ biến thành CO',
    note: 'Không khí nóng được thổi vào qua cửa gió, đốt cháy than cốc: phản ứng toả rất nhiều nhiệt, là vùng nóng nhất của lò. Khí CO₂ đi lên gặp than nóng đỏ tạo CO, chất khử oxide sắt.',
  },
  {
    id: 'noi',
    name: 'Nồi lò',
    top: 0.86,
    bottom: 1,
    temperature: 'khoảng 1 500 °C',
    equations: [],
    solid: 'Gang lỏng ở dưới, xỉ lỏng nhẹ hơn nổi lên trên',
    gas: '—',
    note: 'Xỉ nhẹ hơn gang nên nổi lên trên. Định kì tháo xỉ qua cửa tháo xỉ và tháo gang lỏng qua cửa tháo gang ở đáy lò.',
  },
];

/** Temperature (°C) at a few depths; values in between are interpolated. */
const PROFILE = [
  [0, 250],
  [0.12, 400],
  [0.5, 1000],
  [0.72, 1500],
  [0.8, 1900],
  [0.86, 1800],
  [1, 1500],
];

/** @param {number} depth */
const clampDepth = (depth) => Math.max(0, Math.min(1, depth));

/**
 * The zone at a depth (0 top, 1 bottom).
 * @param {number} depth
 * @returns {Zone}
 */
export function zoneAt(depth) {
  const d = clampDepth(depth);
  return ZONES.find((z) => d >= z.top && d < z.bottom) ?? ZONES[ZONES.length - 1];
}

/**
 * Rough temperature at a depth, rounded to 50 °C.
 * @param {number} depth
 */
export function temperatureAt(depth) {
  const d = clampDepth(depth);
  for (let i = 1; i < PROFILE.length; i++) {
    const [d1, t1] = PROFILE[i];
    const [d0, t0] = PROFILE[i - 1];
    if (d <= d1) return Math.round((t0 + ((t1 - t0) * (d - d0)) / (d1 - d0)) / 50) * 50;
  }
  return PROFILE[PROFILE.length - 1][1];
}

/**
 * @typedef {object} Method
 * @property {string} id
 * @property {string} name
 * @property {string} use which metals it suits
 */

/** How metals are extracted, chosen by how reactive they are. */
export const METHODS = /** @type {Method[]} */ ([
  {
    id: 'dien-phan',
    name: 'Điện phân nóng chảy',
    use: 'kim loại hoạt động mạnh: Na, Ca, Mg, Al',
  },
  {
    id: 'nhiet-luyen',
    name: 'Nhiệt luyện (dùng chất khử C, CO, H₂, Al)',
    use: 'kim loại hoạt động trung bình: Zn, Fe, Pb',
  },
  {
    id: 'thuy-luyen',
    name: 'Thuỷ luyện hoặc tách vật lí',
    use: 'kim loại hoạt động yếu: Ag, Au',
  },
]);

/** Activity series used to pick a method. */
const ORDER = ['K', 'Na', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Pb', 'Cu', 'Ag', 'Au'];

/**
 * The usual extraction method for a metal, from its place in the series:
 * up to Al electrolysis of the molten compound, Zn to Cu reduction by heat,
 * Ag and Au hydrometallurgy (gold also occurs free and is panned).
 * @param {string} metal
 * @returns {Method['id']}
 */
export function methodFor(metal) {
  const i = ORDER.indexOf(metal);
  if (i < 0) throw new Error(`Không có kim loại ${metal}`);
  if (i <= ORDER.indexOf('Al')) return 'dien-phan';
  if (i <= ORDER.indexOf('Cu')) return 'nhiet-luyen';
  return 'thuy-luyen';
}
