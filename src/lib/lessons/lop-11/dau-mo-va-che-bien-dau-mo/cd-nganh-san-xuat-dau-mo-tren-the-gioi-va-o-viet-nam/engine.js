/**
 * A schematic map of Vietnam's oil and gas: fields, refineries and the
 * plants that burn natural gas, with a find-it-on-the-map quiz. The outline
 * is a rough polygon of longitude and latitude, not a survey map.
 */

/** @typedef {'mo-dau' | 'mo-khi' | 'loc-dau' | 'dung-khi'} Kind */

/** Names of the site kinds, for the legend and filters. @type {Record<Kind, string>} */
export const KIND_NAMES = {
  'mo-dau': 'Mỏ dầu',
  'mo-khi': 'Mỏ khí',
  'loc-dau': 'Nhà máy lọc dầu',
  'dung-khi': 'Điện, đạm từ khí',
};

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   kind: Kind,
 *   place: string,
 *   lon: number,
 *   lat: number,
 *   facts: string,
 * }} Site
 */

/** @type {Site[]} */
export const SITES = [
  {
    id: 'bach-ho',
    name: 'Mỏ Bạch Hổ',
    kind: 'mo-dau',
    place: 'Bể Cửu Long, thềm lục địa phía Nam',
    lon: 108.0,
    lat: 9.8,
    facts:
      'Mỏ dầu lớn nhất Việt Nam, do Liên doanh Việt – Nga Vietsovpetro khai thác. Tấn dầu đầu tiên được khai thác năm $1986$, mở đầu ngành khai thác dầu mỏ của Việt Nam. Dầu nằm cả trong đá móng granite nứt nẻ; là dầu nhẹ, rất ít lưu huỳnh.',
  },
  {
    id: 'rang-dong',
    name: 'Mỏ Rạng Đông',
    kind: 'mo-dau',
    place: 'Bể Cửu Long',
    lon: 108.35,
    lat: 10.35,
    facts: 'Mỏ dầu ở bể Cửu Long, đưa vào khai thác năm $1998$ theo hợp đồng với đối tác Nhật Bản.',
  },
  {
    id: 'su-tu-den',
    name: 'Mỏ Sư Tử Đen',
    kind: 'mo-dau',
    place: 'Bể Cửu Long',
    lon: 107.65,
    lat: 10.6,
    facts:
      'Mỏ dầu ở bể Cửu Long, khai thác từ năm $2003$; cùng cụm với các mỏ Sư Tử Vàng, Sư Tử Trắng, Sư Tử Nâu.',
  },
  {
    id: 'dai-hung',
    name: 'Mỏ Đại Hùng',
    kind: 'mo-dau',
    place: 'Bể Nam Côn Sơn',
    lon: 108.7,
    lat: 8.45,
    facts: 'Mỏ dầu ở bể Nam Côn Sơn, khai thác từ năm $1994$, ở vùng biển phía đông Côn Đảo.',
  },
  {
    id: 'lan-tay',
    name: 'Mỏ khí Lan Tây – Lan Đỏ',
    kind: 'mo-khi',
    place: 'Bể Nam Côn Sơn',
    lon: 108.2,
    lat: 7.6,
    facts:
      'Mỏ khí thiên nhiên, cấp khí từ năm $2002$ qua đường ống Nam Côn Sơn vào bờ, chủ yếu cho các nhà máy điện ở Phú Mỹ.',
  },
  {
    id: 'pm3',
    name: 'Khí PM3 – CAA',
    kind: 'mo-khi',
    place: 'Bể Malay – Thổ Chu, vùng chồng lấn với Malaysia',
    lon: 103.7,
    lat: 7.3,
    facts:
      'Khí được đưa vào bờ qua đường ống PM3 – Cà Mau từ năm $2007$, cấp cho cụm Khí – Điện – Đạm Cà Mau.',
  },
  {
    id: 'tien-hai',
    name: 'Mỏ khí Tiền Hải C',
    kind: 'mo-khi',
    place: 'Bể Sông Hồng, tỉnh Thái Bình (đất liền)',
    lon: 106.5,
    lat: 20.4,
    facts:
      'Mỏ khí trên đất liền, khai thác từ năm $1981$: mỏ khí đầu tiên được đưa vào khai thác ở Việt Nam, cấp khí cho các nhà máy công nghiệp địa phương.',
  },
  {
    id: 'dung-quat',
    name: 'Nhà máy lọc dầu Dung Quất',
    kind: 'loc-dau',
    place: 'Khu kinh tế Dung Quất, tỉnh Quảng Ngãi',
    lon: 108.8,
    lat: 15.35,
    facts:
      'Nhà máy lọc dầu đầu tiên của Việt Nam, công suất $6{,}5$ triệu tấn dầu thô mỗi năm, cho ra sản phẩm đầu tiên năm $2009$. Chế biến dầu Bạch Hổ và dầu nhập khẩu thành LPG, xăng, nhiên liệu phản lực, dầu diesel, dầu FO, polypropylene.',
  },
  {
    id: 'nghi-son',
    name: 'Liên hợp lọc hoá dầu Nghi Sơn',
    kind: 'loc-dau',
    place: 'Khu kinh tế Nghi Sơn, tỉnh Thanh Hoá',
    lon: 105.78,
    lat: 19.32,
    facts:
      'Nhà máy lọc dầu lớn nhất Việt Nam, công suất $10$ triệu tấn dầu thô mỗi năm, vận hành thương mại từ năm $2018$, dùng dầu thô nhập khẩu từ Kuwait. Ngoài nhiên liệu còn sản xuất nguyên liệu hoá dầu như polypropylene, benzene, p-xylene.',
  },
  {
    id: 'phu-my',
    name: 'Trung tâm điện lực và Nhà máy đạm Phú Mỹ',
    kind: 'dung-khi',
    place: 'Phú Mỹ, Bà Rịa – Vũng Tàu',
    lon: 107.05,
    lat: 10.6,
    facts:
      'Các nhà máy nhiệt điện chạy bằng khí thiên nhiên từ bể Cửu Long và Nam Côn Sơn, cùng nhà máy đạm sản xuất phân urea từ khí: khí thiên nhiên vừa là nhiên liệu vừa là nguyên liệu.',
  },
  {
    id: 'ca-mau',
    name: 'Cụm Khí – Điện – Đạm Cà Mau',
    kind: 'dung-khi',
    place: 'Tỉnh Cà Mau',
    lon: 105.05,
    lat: 9.25,
    facts:
      'Dùng khí từ bể Malay – Thổ Chu để chạy nhà máy điện và sản xuất phân urea cho vùng Đồng bằng sông Cửu Long.',
  },
];

/** Pixels per degree and the map's top-left corner in degrees. */
const SCALE = 19;
const WEST = 101.6;
const NORTH = 23.8;

/** Map width and height in SVG units. */
export const MAP = {
  width: Math.round((115.2 - WEST) * SCALE),
  height: Math.round((NORTH - 6.6) * SCALE),
};

/**
 * SVG position of a longitude and latitude.
 * @param {number} lon @param {number} lat
 */
export function project(lon, lat) {
  return { x: (lon - WEST) * SCALE, y: (NORTH - lat) * SCALE };
}

/** Rough mainland outline as [longitude, latitude] pairs. */
const OUTLINE = [
  [102.14, 22.4],
  [102.5, 22.75],
  [103.0, 22.55],
  [103.5, 22.6],
  [104.0, 22.75],
  [104.4, 22.75],
  [104.8, 23.15],
  [105.35, 23.35],
  [105.9, 22.95],
  [106.5, 22.9],
  [106.7, 22.6],
  [106.6, 22.25],
  [107.0, 21.95],
  [107.4, 21.65],
  [108.0, 21.5],
  [107.6, 21.25],
  [107.1, 20.95],
  [106.75, 20.7],
  [106.55, 20.25],
  [106.15, 19.95],
  [105.85, 19.6],
  [105.75, 19.05],
  [105.85, 18.65],
  [106.25, 18.25],
  [106.5, 17.85],
  [106.75, 17.35],
  [107.15, 16.85],
  [107.65, 16.45],
  [108.2, 16.1],
  [108.5, 15.75],
  [108.8, 15.3],
  [109.0, 14.8],
  [109.2, 13.9],
  [109.3, 13.2],
  [109.2, 12.6],
  [109.25, 12.1],
  [109.15, 11.7],
  [109.0, 11.4],
  [108.6, 11.15],
  [108.3, 10.95],
  [107.9, 10.75],
  [107.4, 10.5],
  [107.05, 10.35],
  [106.8, 10.3],
  [106.65, 9.95],
  [106.4, 9.6],
  [106.1, 9.35],
  [105.6, 9.05],
  [105.25, 8.75],
  [104.75, 8.6],
  [104.8, 9.0],
  [104.85, 9.6],
  [105.1, 10.0],
  [104.85, 10.2],
  [104.5, 10.4],
  [104.9, 10.55],
  [105.1, 10.95],
  [105.6, 10.95],
  [106.0, 10.85],
  [106.2, 11.1],
  [106.0, 11.4],
  [106.4, 11.75],
  [106.9, 12.0],
  [107.5, 12.3],
  [107.55, 12.9],
  [107.5, 13.6],
  [107.55, 14.2],
  [107.55, 14.7],
  [107.2, 15.0],
  [107.7, 15.4],
  [107.2, 15.8],
  [106.9, 16.3],
  [106.5, 16.55],
  [106.2, 17.0],
  [105.7, 17.7],
  [105.2, 18.2],
  [105.0, 18.7],
  [104.3, 19.1],
  [103.9, 19.3],
  [104.3, 19.7],
  [104.7, 19.85],
  [104.95, 20.15],
  [104.6, 20.5],
  [104.2, 20.75],
  [103.6, 20.7],
  [103.2, 20.85],
  [102.9, 21.3],
  [102.85, 21.75],
  [102.6, 22.0],
];

/** The outline as an SVG `points` attribute. */
export const OUTLINE_POINTS = OUTLINE.map(([lon, lat]) => {
  const { x, y } = project(lon, lat);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(' ');

/**
 * Islands and archipelagos drawn on the map; an archipelago (r 0) is drawn
 * as a few dots with its name, anchored so it stays on the map.
 */
export const ISLANDS = [
  { name: 'Phú Quốc', ...project(103.97, 10.25), r: 4, anchor: 'middle' },
  { name: 'Côn Đảo', ...project(106.6, 8.7), r: 2.5, anchor: 'middle' },
  { name: 'Quần đảo Hoàng Sa', ...project(112.0, 16.5), r: 0, anchor: 'middle' },
  { name: 'Quần đảo Trường Sa', ...project(114.0, 9.5), r: 0, anchor: 'end' },
];

/** @typedef {{ prompt: string, answer: string, explain: string }} Question */

/** Find-it-on-the-map questions. @type {Question[]} */
export const QUESTIONS = [
  {
    prompt: 'Mỏ dầu lớn nhất Việt Nam, nơi khai thác tấn dầu đầu tiên năm $1986$.',
    answer: 'bach-ho',
    explain: 'Mỏ Bạch Hổ ở bể Cửu Long, do Vietsovpetro khai thác từ năm $1986$.',
  },
  {
    prompt: 'Nhà máy lọc dầu đầu tiên của Việt Nam.',
    answer: 'dung-quat',
    explain: 'Nhà máy lọc dầu Dung Quất (Quảng Ngãi), cho sản phẩm đầu tiên năm $2009$.',
  },
  {
    prompt:
      'Nhà máy lọc dầu chế biến dầu thô nhập khẩu từ Kuwait, công suất $10$ triệu tấn mỗi năm.',
    answer: 'nghi-son',
    explain: 'Liên hợp lọc hoá dầu Nghi Sơn (Thanh Hoá), vận hành thương mại từ năm $2018$.',
  },
  {
    prompt: 'Mỏ khí đầu tiên được khai thác ở Việt Nam, nằm trên đất liền.',
    answer: 'tien-hai',
    explain: 'Mỏ khí Tiền Hải C (Thái Bình), khai thác từ năm $1981$.',
  },
  {
    prompt:
      'Nơi khí thiên nhiên từ bể Cửu Long và Nam Côn Sơn được dùng để phát điện và sản xuất phân urea.',
    answer: 'phu-my',
    explain: 'Trung tâm điện lực và Nhà máy đạm Phú Mỹ (Bà Rịa – Vũng Tàu).',
  },
  {
    prompt: 'Nguồn khí cấp cho cụm Khí – Điện – Đạm Cà Mau.',
    answer: 'pm3',
    explain: 'Khí PM3 – CAA ở bể Malay – Thổ Chu, đưa vào bờ từ năm $2007$.',
  },
];

/**
 * Feedback after the learner taps a site for a question.
 * @param {Question} q
 * @param {string} picked site id
 * @returns {{ right: boolean, text: string }}
 */
export function judge(q, picked) {
  if (picked === q.answer) return { right: true, text: `Đúng. ${q.explain}` };
  const site = SITES.find((s) => s.id === picked);
  if (!site) return { right: false, text: 'Hãy bấm vào một điểm trên bản đồ.' };
  return {
    right: false,
    text: `Chưa đúng: đó là ${site.name} (${KIND_NAMES[site.kind].toLowerCase()}). Đọc lại câu hỏi và thử điểm khác.`,
  };
}

/**
 * @typedef {{ id: string, name: string, formula: string, heat: number, carbons: number }} Fuel
 */

/**
 * Fuels compared by the CO2 they release for the same heat: `heat` is the
 * heat of combustion in kJ per mole, `carbons` the moles of CO2 per mole.
 * Coal is counted as pure carbon.
 * @type {Fuel[]}
 */
export const FUELS = [
  { id: 'methane', name: 'Khí thiên nhiên (methane)', formula: 'CH4', heat: 890, carbons: 1 },
  { id: 'propane', name: 'Khí hoá lỏng (propane)', formula: 'C3H8', heat: 2220, carbons: 3 },
  { id: 'octane', name: 'Xăng (octane)', formula: 'C8H18', heat: 5470, carbons: 8 },
  { id: 'cetane', name: 'Dầu diesel (hexadecane)', formula: 'C16H34', heat: 10700, carbons: 16 },
  { id: 'coal', name: 'Than (carbon)', formula: 'C', heat: 394, carbons: 1 },
];

/**
 * Grams of CO2 released to get `kJ` of heat from a fuel, with the moles of
 * fuel burnt.
 * @param {Fuel} fuel
 * @param {number} kJ
 */
export function co2For(fuel, kJ) {
  const moles = kJ / fuel.heat;
  return { moles, grams: moles * fuel.carbons * 44 };
}
