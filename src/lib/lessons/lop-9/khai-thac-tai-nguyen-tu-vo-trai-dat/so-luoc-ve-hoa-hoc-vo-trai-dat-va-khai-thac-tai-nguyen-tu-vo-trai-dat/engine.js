/**
 * Data for the Earth's crust lesson: the mass percentages of the elements in
 * the crust (rounded textbook values that add up to 100), and a schematic map
 * of some mineral deposits of Viet Nam. The map is a rough outline projected
 * from longitude and latitude, good for locating a region, not to scale.
 */

/**
 * Elements of the crust by mass percentage, most abundant first.
 * `found` names the compounds the element mainly occurs in.
 */
export const ELEMENTS = [
  {
    symbol: 'O',
    name: 'Oxygen',
    percent: 46.1,
    colour: '#2563eb',
    found:
      'có trong hầu hết đất đá: SiO₂ (cát, thạch anh), các oxide kim loại, muối silicate, carbonate',
  },
  {
    symbol: 'Si',
    name: 'Silicon',
    percent: 28.2,
    colour: '#d97706',
    found:
      'chủ yếu ở dạng SiO₂ (cát, thạch anh) và muối silicate (đất sét, cao lanh, mica, feldspar)',
  },
  {
    symbol: 'Al',
    name: 'Aluminium',
    percent: 8.2,
    colour: '#64748b',
    found: 'trong đất sét, feldspar, mica và quặng bauxite (thành phần chính Al₂O₃)',
  },
  {
    symbol: 'Fe',
    name: 'Iron',
    percent: 5.6,
    colour: '#b91c1c',
    found: 'trong quặng hematite (Fe₂O₃), magnetite (Fe₃O₄), siderite (FeCO₃)',
  },
  {
    symbol: 'Ca',
    name: 'Calcium',
    percent: 4.1,
    colour: '#16a34a',
    found: 'trong đá vôi, đá phấn, đá hoa (CaCO₃), thạch cao (CaSO₄·2H₂O), quặng apatite',
  },
  {
    symbol: 'Na',
    name: 'Sodium',
    percent: 2.4,
    colour: '#7c3aed',
    found: 'trong muối mỏ (NaCl), feldspar sodium; nước biển hoà tan nhiều NaCl',
  },
  {
    symbol: 'Mg',
    name: 'Magnesium',
    percent: 2.3,
    colour: '#0891b2',
    found: 'trong đá dolomite (CaCO₃·MgCO₃), magnesite (MgCO₃)',
  },
  {
    symbol: 'K',
    name: 'Potassium',
    percent: 2.1,
    colour: '#db2777',
    found: 'trong feldspar potassium, mica, muối mỏ sylvinite (KCl·NaCl)',
  },
  {
    symbol: '…',
    name: 'Các nguyên tố khác',
    percent: 1.0,
    colour: '#a8a29e',
    found: 'gồm gần như mọi nguyên tố còn lại: H, C, P, S, Cu, Zn, Au, ...',
  },
];

/**
 * Total mass percentage of the chosen elements, rounded to one decimal.
 * @param {string[]} symbols
 */
export function sumPercent(symbols) {
  const total = ELEMENTS.filter((e) => symbols.includes(e.symbol)).reduce(
    (s, e) => s + e.percent,
    0,
  );
  return Math.round(total * 10) / 10;
}

/**
 * Pie slices from 12 o'clock, clockwise: start and end angles in degrees.
 */
export function slices() {
  let start = 0;
  return ELEMENTS.map((e) => {
    const end = start + (e.percent / 100) * 360;
    const s = { symbol: e.symbol, start, end };
    start = end;
    return s;
  });
}

/** Map frame: longitude and latitude of the top-left corner, pixels per degree. */
export const MAP = { lon0: 101.8, lat0: 23.6, k: 20, width: 280, height: 320 };

/**
 * Longitude/latitude to map coordinates.
 * @param {number} lon @param {number} lat
 */
export function project(lon, lat) {
  return {
    x: Math.round((lon - MAP.lon0) * MAP.k * 10) / 10,
    y: Math.round((MAP.lat0 - lat) * MAP.k * 10) / 10,
  };
}

/** Rough outline of mainland Viet Nam, clockwise from the north-west corner. */
export const OUTLINE = [
  [102.15, 22.4],
  [103.95, 22.5],
  [105.3, 23.35],
  [106.7, 22.85],
  [106.75, 22.0],
  [108.05, 21.55],
  [107.1, 20.95],
  [106.75, 20.75],
  [106.3, 20.2],
  [105.85, 19.6],
  [105.75, 18.8],
  [106.2, 18.2],
  [106.65, 17.45],
  [107.2, 16.85],
  [107.65, 16.45],
  [108.25, 16.05],
  [108.9, 15.1],
  [109.25, 13.8],
  [109.35, 13.05],
  [109.2, 12.25],
  [109.2, 11.9],
  [109.05, 11.5],
  [108.15, 10.9],
  [107.1, 10.35],
  [106.6, 9.95],
  [106.2, 9.5],
  [105.7, 9.25],
  [104.75, 8.6],
  [104.85, 9.3],
  [105.05, 10.0],
  [104.5, 10.4],
  [105.1, 10.95],
  [105.6, 10.95],
  [105.95, 11.35],
  [106.2, 11.75],
  [106.6, 11.95],
  [107.55, 12.35],
  [107.6, 13.0],
  [107.5, 13.9],
  [107.55, 14.7],
  [107.35, 15.4],
  [107.2, 16.2],
  [106.6, 16.6],
  [105.7, 17.6],
  [105.3, 18.3],
  [104.4, 18.9],
  [103.9, 19.3],
  [104.3, 20.0],
  [103.4, 20.8],
  [102.95, 21.3],
  [102.4, 21.9],
];

/** Island groups drawn as dot clusters: centre longitude, latitude. */
export const ISLANDS = [
  { name: 'Quần đảo Hoàng Sa', lon: 111.8, lat: 16.4 },
  { name: 'Quần đảo Trường Sa', lon: 113.9, lat: 9.9 },
];

/** Kinds of mineral resources, as the lesson groups them. */
export const KINDS = {
  'nhien-lieu': { label: 'Nhiên liệu', colour: '#1f2937' },
  'kim-loai': { label: 'Quặng kim loại', colour: '#b91c1c' },
  'phi-kim': { label: 'Khoáng sản phi kim', colour: '#16a34a' },
  'vat-lieu': { label: 'Vật liệu xây dựng, công nghiệp silicate', colour: '#d97706' },
};

/**
 * Some well-known deposits of Viet Nam.
 * @type {Array<{ id: string, name: string, kind: keyof typeof KINDS, place: string, lon: number, lat: number, main: string, use: string }>}
 */
export const MINERALS = [
  {
    id: 'than',
    name: 'Than đá',
    kind: 'nhien-lieu',
    place: 'Quảng Ninh (Hòn Gai, Cẩm Phả, Uông Bí)',
    lon: 107.2,
    lat: 21.05,
    main: 'carbon (C)',
    use: 'nhiên liệu cho nhà máy nhiệt điện, luyện kim, sản xuất xi măng',
  },
  {
    id: 'dau-khi',
    name: 'Dầu mỏ, khí thiên nhiên',
    kind: 'nhien-lieu',
    place: 'thềm lục địa phía Nam (mỏ Bạch Hổ, Rồng, Đại Hùng)',
    lon: 108.1,
    lat: 9.8,
    main: 'hydrocarbon; khí thiên nhiên chủ yếu là methane CH₄',
    use: 'nhiên liệu, nguyên liệu cho công nghiệp hoá dầu, phân bón',
  },
  {
    id: 'apatite',
    name: 'Quặng apatite',
    kind: 'phi-kim',
    place: 'Lào Cai',
    lon: 103.95,
    lat: 22.3,
    main: 'calcium phosphate (Ca₃(PO₄)₂)',
    use: 'sản xuất phân lân',
  },
  {
    id: 'dong',
    name: 'Quặng đồng',
    kind: 'kim-loai',
    place: 'Sin Quyền (Lào Cai)',
    lon: 103.75,
    lat: 22.65,
    main: 'hợp chất của đồng với sulfur (CuFeS₂)',
    use: 'luyện đồng làm dây điện, hợp kim',
  },
  {
    id: 'dat-hiem',
    name: 'Đất hiếm',
    kind: 'kim-loai',
    place: 'Đông Pao (Lai Châu)',
    lon: 103.3,
    lat: 22.15,
    main: 'hợp chất của các nguyên tố đất hiếm',
    use: 'nam châm vĩnh cửu, thiết bị điện tử, pin',
  },
  {
    id: 'thiec',
    name: 'Quặng thiếc',
    kind: 'kim-loai',
    place: 'Tĩnh Túc (Cao Bằng)',
    lon: 105.95,
    lat: 22.65,
    main: 'cassiterite (SnO₂)',
    use: 'mạ sắt tây, hàn mạch điện tử, hợp kim',
  },
  {
    id: 'sat-tn',
    name: 'Quặng sắt',
    kind: 'kim-loai',
    place: 'Trại Cau (Thái Nguyên)',
    lon: 105.85,
    lat: 21.6,
    main: 'hematite (Fe₂O₃), magnetite (Fe₃O₄)',
    use: 'luyện gang, thép',
  },
  {
    id: 'da-voi',
    name: 'Đá vôi',
    kind: 'vat-lieu',
    place: 'Ninh Bình, Hà Nam, Thanh Hoá, ...',
    lon: 105.85,
    lat: 20.3,
    main: 'calcium carbonate (CaCO₃)',
    use: 'sản xuất vôi, xi măng, thuỷ tinh; vật liệu xây dựng',
  },
  {
    id: 'crom',
    name: 'Quặng chromite',
    kind: 'kim-loai',
    place: 'Cổ Định (Thanh Hoá)',
    lon: 105.6,
    lat: 19.65,
    main: 'FeCr₂O₄',
    use: 'sản xuất chromium, thép không gỉ',
  },
  {
    id: 'sat-ht',
    name: 'Quặng sắt',
    kind: 'kim-loai',
    place: 'Thạch Khê (Hà Tĩnh)',
    lon: 105.95,
    lat: 18.45,
    main: 'magnetite (Fe₃O₄)',
    use: 'luyện gang, thép',
  },
  {
    id: 'vang',
    name: 'Vàng',
    kind: 'kim-loai',
    place: 'Bồng Miêu (Quảng Nam)',
    lon: 108.05,
    lat: 15.5,
    main: 'vàng tự nhiên (đơn chất Au)',
    use: 'đồ trang sức, thiết bị điện tử, dự trữ',
  },
  {
    id: 'titan',
    name: 'Sa khoáng titanium',
    kind: 'kim-loai',
    place: 'cát ven biển Bình Định, Hà Tĩnh, Bình Thuận',
    lon: 109.0,
    lat: 14.2,
    main: 'ilmenite (FeTiO₃)',
    use: 'sản xuất titanium dioxide (bột màu trắng), kim loại titanium',
  },
  {
    id: 'cat-trang',
    name: 'Cát trắng',
    kind: 'vat-lieu',
    place: 'Cam Ranh (Khánh Hoà)',
    lon: 109.05,
    lat: 11.95,
    main: 'thạch anh, silicon dioxide (SiO₂)',
    use: 'sản xuất thuỷ tinh, đồ gốm',
  },
  {
    id: 'bauxite',
    name: 'Quặng bauxite',
    kind: 'kim-loai',
    place: 'Tây Nguyên (Đắk Nông, Lâm Đồng)',
    lon: 107.75,
    lat: 11.85,
    main: 'aluminium oxide (Al₂O₃)',
    use: 'sản xuất aluminium (nhôm)',
  },
];
