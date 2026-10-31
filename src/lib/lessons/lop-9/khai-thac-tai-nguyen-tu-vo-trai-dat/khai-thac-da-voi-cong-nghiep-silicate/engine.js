/**
 * Production lines of the limestone and silicate lesson, stage by stage, and
 * the mass balance of lime burning: CaCO3 → CaO + CO2, so 100 parts of pure
 * calcium carbonate give 56 parts of quicklime and 44 parts of carbon dioxide
 * (Ca = 40, C = 12, O = 16). Temperatures are the approximate values the book
 * gives; they differ from plant to plant.
 */

export const M_CACO3 = 100;
export const M_CAO = 56;
export const M_CO2 = 44;

/**
 * Masses (same unit as `rock`) when limestone holding `purity` per cent of
 * CaCO3 is burnt completely; the impurities stay in the lime.
 * @param {number} rock mass of limestone
 * @param {number} purity mass percentage of CaCO3, 0 to 100
 */
export function burnLimestone(rock, purity) {
  if (rock < 0 || purity < 0 || purity > 100) throw new RangeError('bad limestone');
  const caco3 = (rock * purity) / 100;
  const tidy = (/** @type {number} */ v) => Math.round(v * 1e6) / 1e6;
  return {
    caco3: tidy(caco3),
    cao: tidy((caco3 * M_CAO) / M_CACO3),
    co2: tidy((caco3 * M_CO2) / M_CACO3),
    solid: tidy(rock - (caco3 * M_CO2) / M_CACO3),
  };
}

/**
 * @typedef {object} Stage
 * @property {string} name short stage name
 * @property {string} detail what happens, plain text
 * @property {string} [temp] operating temperature, plain text
 * @property {string[]} [equations] book-style equations ("CaCO3 → CaO + CO2↑")
 * @property {string} output what leaves the stage
 */

/**
 * @typedef {object} Line
 * @property {string} id
 * @property {string} label
 * @property {string} inputs raw materials
 * @property {string} product
 * @property {Stage[]} stages
 * @property {string} impact effect on the environment
 */

/** @type {Line[]} */
export const LINES = [
  {
    id: 'voi',
    label: 'Vôi sống',
    inputs: 'đá vôi (thành phần chính CaCO₃)',
    product: 'vôi sống CaO',
    stages: [
      {
        name: 'Khai thác',
        detail:
          'Khoan, nổ mìn phá đá ở núi đá vôi hoặc mỏ đá; bốc xếp và vận chuyển đá về nơi chế biến.',
        output: 'đá vôi tảng',
      },
      {
        name: 'Đập, phân loại',
        detail: 'Đập nhỏ đá vôi và phân loại theo kích thước để đá nung chín đều.',
        output: 'đá vôi cục',
      },
      {
        name: 'Nung',
        detail:
          'Nung đá vôi trong lò vôi. Calcium carbonate bị phân huỷ thành vôi sống, khí carbon dioxide thoát ra.',
        temp: 'khoảng 900–1 000 °C',
        equations: ['CaCO3 → CaO + CO2↑'],
        output: 'vôi sống CaO và khí CO₂',
      },
      {
        name: 'Tôi vôi',
        detail:
          'Vôi sống tác dụng mạnh với nước, toả nhiều nhiệt, tạo vôi tôi. Vôi tôi để ngoài không khí hấp thụ CO₂ và đóng rắn lại, vì vậy vữa vôi trát tường cứng dần.',
        equations: ['CaO + H2O → Ca(OH)2', 'Ca(OH)2 + CO2 → CaCO3 + H2O'],
        output: 'vôi tôi Ca(OH)₂: khử chua đất, xử lí nước thải, sát trùng',
      },
    ],
    impact:
      'Nổ mìn và nung vôi sinh bụi, tiếng ồn; mỗi tấn CaCO₃ bị nung thải ra 0,44 tấn CO₂; núi đá vôi bị phá vỡ cảnh quan.',
  },
  {
    id: 'xi-mang',
    label: 'Xi măng',
    inputs: 'đá vôi, đất sét giàu SiO₂, một ít quặng sắt; thạch cao',
    product: 'xi măng',
    stages: [
      {
        name: 'Nghiền, trộn',
        detail:
          'Nghiền nhỏ đá vôi, trộn với đất sét giàu SiO₂ và một ít quặng sắt theo tỉ lệ thích hợp thành phối liệu.',
        output: 'phối liệu dạng bột hoặc bùn',
      },
      {
        name: 'Nung clinker',
        detail:
          'Nung phối liệu trong lò quay hoặc lò đứng. Đá vôi bị phân huỷ, CaO kết hợp với SiO₂, Al₂O₃ trong đất sét tạo các calcium silicate và calcium aluminate.',
        temp: 'khoảng 1 400–1 600 °C',
        equations: ['CaCO3 → CaO + CO2↑'],
        output: 'clinker: những hạt rắn màu xám',
      },
      {
        name: 'Nghiền clinker',
        detail:
          'Để nguội clinker rồi nghiền thành bột mịn cùng khoảng 5% thạch cao CaSO₄·2H₂O và một số phụ gia để điều chỉnh thời gian đông cứng.',
        output: 'xi măng: bột mịn màu lục xám',
      },
      {
        name: 'Sử dụng',
        detail:
          'Trộn xi măng với cát, nước thành vữa; với cát, đá, sỏi và nước thành bê tông. Hỗn hợp đông cứng lại, dùng trong xây dựng.',
        output: 'vữa, bê tông',
      },
    ],
    impact:
      'Lò nung tiêu thụ nhiều than, thải nhiều CO₂ (từ cả nhiên liệu và đá vôi bị phân huỷ) cùng bụi; cần lọc bụi và tận dụng nhiệt thải.',
  },
  {
    id: 'thuy-tinh',
    label: 'Thuỷ tinh',
    inputs: 'cát trắng (SiO₂), đá vôi (CaCO₃), soda (Na₂CO₃)',
    product: 'thuỷ tinh thường (hỗn hợp sodium silicate và calcium silicate)',
    stages: [
      {
        name: 'Trộn nguyên liệu',
        detail: 'Trộn cát trắng, đá vôi và soda theo tỉ lệ thích hợp.',
        output: 'hỗn hợp nguyên liệu',
      },
      {
        name: 'Nung chảy',
        detail:
          'Nung hỗn hợp trong lò. Đá vôi và soda tác dụng với cát tạo các muối silicate nóng chảy thành thuỷ tinh dạng nhão.',
        temp: 'khoảng 1 400 °C',
        equations: ['CaCO3 → CaO + CO2↑', 'CaO + SiO2 → CaSiO3', 'Na2CO3 + SiO2 → Na2SiO3 + CO2↑'],
        output: 'thuỷ tinh dạng nhão',
      },
      {
        name: 'Tạo hình',
        detail:
          'Làm nguội từ từ thuỷ tinh nhão đến độ dẻo thích hợp rồi ép hoặc thổi thành chai, lọ, cốc, kính tấm.',
        output: 'đồ dùng bằng thuỷ tinh',
      },
    ],
    impact:
      'Lò nung tốn nhiều năng lượng và thải CO₂; thuỷ tinh tái chế được nhiều lần nên thu gom chai lọ cũ giúp giảm khai thác cát và nhiên liệu.',
  },
  {
    id: 'gom',
    label: 'Đồ gốm',
    inputs: 'đất sét, cao lanh (đất sét trắng), cát trắng, nước',
    product: 'gạch, ngói, sành, sứ',
    stages: [
      {
        name: 'Nhào trộn',
        detail:
          'Nghiền và nhào đất sét với nước (làm đồ sứ thì dùng cao lanh, cát trắng) thành khối dẻo.',
        output: 'khối đất dẻo',
      },
      {
        name: 'Tạo hình, sấy',
        detail: 'Tạo hình sản phẩm bằng khuôn hoặc bàn xoay, rồi phơi hoặc sấy khô.',
        output: 'mộc (sản phẩm chưa nung)',
      },
      {
        name: 'Nung',
        detail:
          'Nung ở nhiệt độ cao, đất sét mất nước và kết khối, sản phẩm trở nên cứng, bền. Đồ sứ được nung lần đầu, tráng men, trang trí rồi nung lần hai ở nhiệt độ cao hơn.',
        temp: 'gạch ngói khoảng 900–1 000 °C; đồ sứ khoảng 1 200–1 400 °C',
        output: 'gạch, ngói, sành, sứ',
      },
    ],
    impact:
      'Khai thác đất sét làm mất đất canh tác; lò nung thủ công dùng than, củi gây khói bụi. Nên dùng lò nung khí, gạch không nung.',
  },
];
