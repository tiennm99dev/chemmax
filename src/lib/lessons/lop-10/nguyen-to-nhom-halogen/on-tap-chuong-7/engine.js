/**
 * Conversion schemes of the halogen chapter: each step names its reagent and
 * asks for the product, and shows the equation once the learner finds it.
 */

/**
 * @typedef {object} ChainStep
 * @property {string} reagent what goes over the arrow
 * @property {string} product
 * @property {string[]} options formulas to choose from, the product among them
 * @property {string} equation book-style equation that makes the product
 * @property {string} hint shown after a wrong choice
 */

/**
 * @typedef {object} Chain
 * @property {string} id
 * @property {string} title
 * @property {string} start
 * @property {ChainStep[]} steps
 */

/** @type {Chain[]} */
export const CHAINS = [
  {
    id: 'chlorine',
    title: 'Từ muối ăn đến silver chloride',
    start: 'NaCl',
    steps: [
      {
        reagent: 'H2SO4 đặc, đun nóng',
        product: 'HCl',
        options: ['Cl2', 'HCl', 'SO2'],
        equation: 'NaCl + H2SO4 → NaHSO4 + HCl↑',
        hint: 'Cl⁻ không khử được sulfuric acid đặc, nên đây chỉ là phản ứng trao đổi.',
      },
      {
        reagent: 'MnO2, đun nóng',
        product: 'Cl2',
        options: ['Cl2', 'MnCl2', 'H2'],
        equation: 'MnO2 + 4HCl → MnCl2 + Cl2↑ + 2H2O',
        hint: 'Đây là cách điều chế một khí màu vàng lục trong phòng thí nghiệm.',
      },
      {
        reagent: 'Fe, đun nóng',
        product: 'FeCl3',
        options: ['FeCl2', 'FeCl3', 'Fe2O3'],
        equation: '2Fe + 3Cl2 → 2FeCl3',
        hint: 'Chlorine có tính oxi hoá mạnh, đưa sắt lên số oxi hoá cao nhất.',
      },
      {
        reagent: 'dung dịch AgNO3',
        product: 'AgCl',
        options: ['Ag', 'AgCl', 'FeCl2'],
        equation: 'FeCl3 + 3AgNO3 → 3AgCl↓ + Fe(NO3)3',
        hint: 'Ion Cl⁻ gặp ion Ag⁺ tạo kết tủa trắng.',
      },
    ],
  },
  {
    id: 'javel',
    title: 'Từ muối ăn đến nước Javel',
    start: 'NaCl',
    steps: [
      {
        reagent: 'H2O, điện phân có màng ngăn',
        product: 'Cl2',
        options: ['Na', 'Cl2', 'HCl'],
        equation: '2NaCl + 2H2O → 2NaOH + H2↑ + Cl2↑',
        hint: 'Đây là cách sản xuất một halogen trong công nghiệp.',
      },
      {
        reagent: 'dung dịch NaOH, nhiệt độ thường',
        product: 'NaClO',
        options: ['NaClO', 'NaClO3', 'HClO'],
        equation: 'Cl2 + 2NaOH → NaCl + NaClO + H2O',
        hint: 'Sản phẩm là chất có trong nước Javel; số oxi hoá của Cl trong đó là +1.',
      },
    ],
  },
  {
    id: 'bromine',
    title: 'Vòng chuyển hoá của bromine',
    start: 'NaBr',
    steps: [
      {
        reagent: 'Cl2',
        product: 'Br2',
        options: ['HBr', 'Br2', 'NaCl'],
        equation: 'Cl2 + 2NaBr → 2NaCl + Br2',
        hint: 'Halogen mạnh hơn đẩy halogen yếu hơn ra khỏi dung dịch muối.',
      },
      {
        reagent: 'H2, đun nóng',
        product: 'HBr',
        options: ['HBr', 'HBrO', 'NaBr'],
        equation: 'H2 + Br2 → 2HBr',
        hint: 'Halogen phản ứng với hydrogen tạo hydrogen halide.',
      },
      {
        reagent: 'dung dịch NaOH',
        product: 'NaBr',
        options: ['Br2', 'NaBr', 'NaBrO'],
        equation: 'HBr + NaOH → NaBr + H2O',
        hint: 'Đây là phản ứng trung hoà giữa acid và base.',
      },
      {
        reagent: 'dung dịch AgNO3',
        product: 'AgBr',
        options: ['Ag', 'AgNO3', 'AgBr'],
        equation: 'NaBr + AgNO3 → AgBr↓ + NaNO3',
        hint: 'Ion Br⁻ gặp ion Ag⁺ tạo kết tủa vàng nhạt.',
      },
    ],
  },
  {
    id: 'iodine',
    title: 'Từ muối iodide đến silver iodide',
    start: 'NaI',
    steps: [
      {
        reagent: 'Br2',
        product: 'I2',
        options: ['I2', 'HI', 'NaBr'],
        equation: 'Br2 + 2NaI → 2NaBr + I2',
        hint: 'Bromine mạnh hơn iodine nên đẩy được iodine ra khỏi muối.',
      },
      {
        reagent: 'H2, đun nóng',
        product: 'HI',
        options: ['NaI', 'HI', 'HIO'],
        equation: 'H2 + I2 ⇌ 2HI',
        hint: 'Phản ứng này là thuận nghịch, tạo một hydrogen halide.',
      },
      {
        reagent: 'dung dịch AgNO3',
        product: 'AgI',
        options: ['Ag', 'I2', 'AgI'],
        equation: 'HI + AgNO3 → AgI↓ + HNO3',
        hint: 'Ion I⁻ gặp ion Ag⁺ tạo kết tủa vàng.',
      },
    ],
  },
  {
    id: 'fluorine',
    title: 'Từ fluorite đến hydrofluoric acid khắc thuỷ tinh',
    start: 'CaF2',
    steps: [
      {
        reagent: 'H2SO4 đặc, đun nóng',
        product: 'HF',
        options: ['F2', 'HF', 'CaO'],
        equation: 'CaF2 + H2SO4 → CaSO4 + 2HF↑',
        hint: 'F⁻ không có tính khử, nên chỉ xảy ra phản ứng trao đổi.',
      },
      {
        reagent: 'SiO2 trong thuỷ tinh',
        product: 'SiF4',
        options: ['Si', 'SiF4', 'F2'],
        equation: 'SiO2 + 4HF → SiF4↑ + 2H2O',
        hint: 'HF hoà tan silicon dioxide, tạo một hợp chất khí của silicon.',
      },
    ],
  },
];

/**
 * @param {ChainStep} step
 * @param {string} choice
 * @returns {boolean}
 */
export const isRight = (step, choice) => choice === step.product;
