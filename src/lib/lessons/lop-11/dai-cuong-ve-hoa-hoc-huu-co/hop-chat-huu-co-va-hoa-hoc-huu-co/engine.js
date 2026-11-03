/**
 * Simplified infrared spectra for telling functional groups apart. Each band
 * is a bond with the wavenumber range the book gives it; each sample lists its
 * main absorption peaks, drawn as a sum of smooth dips on a %T axis. The peaks
 * sit where real spectra of these substances have them, but the shapes are
 * stylised and the fingerprint region is left out.
 */

/** @typedef {'oh' | 'ohAcid' | 'nh' | 'ch' | 'chAld' | 'co' | 'cSingleO' | 'chBend'} BandId */
/** @typedef {'alcohol' | 'aldehyde' | 'ketone' | 'acid' | 'ester' | 'amine' | 'hydrocarbon'} ClassId */
/** @typedef {{ bond: string, low: number, high: number, note: string }} Band */
/** @typedef {{ at: number, width: number, depth: number, band: BandId }} Peak */
/** @typedef {{ id: string, name: string, formula: string, type: ClassId, peaks: Peak[] }} Sample */

/** @type {Record<BandId, Band>} */
export const BANDS = {
  oh: {
    bond: 'O–H',
    low: 3200,
    high: 3500,
    note: 'Đỉnh rộng của liên kết O–H trong alcohol.',
  },
  ohAcid: {
    bond: 'O–H',
    low: 2500,
    high: 3300,
    note: 'Dải rất rộng, trùm lên cả vùng C–H: liên kết O–H trong nhóm –COOH.',
  },
  nh: {
    bond: 'N–H',
    low: 3000,
    high: 3300,
    note: 'Liên kết N–H trong amine. Đỉnh này thường nhọn và yếu hơn đỉnh O–H của alcohol.',
  },
  ch: {
    bond: 'C–H',
    low: 2850,
    high: 3000,
    note: 'Liên kết C–H của gốc hydrocarbon. Gần như chất hữu cơ nào cũng có, nên chưa nói lên nhóm chức.',
  },
  chAld: {
    bond: 'C–H',
    low: 2695,
    high: 2830,
    note: 'Liên kết C–H trong nhóm –CHO, đặc trưng cho aldehyde.',
  },
  co: {
    bond: 'C=O',
    low: 1666,
    high: 1760,
    note: 'Đỉnh mạnh của liên kết C=O. Aldehyde, ketone, carboxylic acid và ester đều có, nên phải xét thêm các đỉnh khác.',
  },
  cSingleO: {
    bond: 'C–O',
    low: 1000,
    high: 1300,
    note: 'Liên kết đơn C–O, có trong alcohol, ester và carboxylic acid.',
  },
  chBend: {
    bond: 'C–H (biến dạng)',
    low: 1350,
    high: 1480,
    note: 'Dao động biến dạng của C–H trong gốc hydrocarbon, không phải nhóm chức.',
  },
};

/** @type {Record<ClassId, string>} */
export const CLASS_NAMES = {
  alcohol: 'Alcohol',
  aldehyde: 'Aldehyde',
  ketone: 'Ketone',
  acid: 'Carboxylic acid',
  ester: 'Ester',
  amine: 'Amine',
  hydrocarbon: 'Hydrocarbon',
};

/** @type {Sample[]} */
export const SAMPLES = [
  {
    id: 'ethanol',
    name: 'ethanol',
    formula: 'C2H5OH',
    type: 'alcohol',
    peaks: [
      { at: 3350, width: 130, depth: 0.7, band: 'oh' },
      { at: 2970, width: 40, depth: 0.55, band: 'ch' },
      { at: 1050, width: 30, depth: 0.75, band: 'cSingleO' },
    ],
  },
  {
    id: 'acetone',
    name: 'acetone',
    formula: 'CH3COCH3',
    type: 'ketone',
    peaks: [
      { at: 2970, width: 30, depth: 0.2, band: 'ch' },
      { at: 1715, width: 28, depth: 0.85, band: 'co' },
    ],
  },
  {
    id: 'acetic-acid',
    name: 'acetic acid',
    formula: 'CH3COOH',
    type: 'acid',
    peaks: [
      { at: 3000, width: 270, depth: 0.7, band: 'ohAcid' },
      { at: 1710, width: 30, depth: 0.85, band: 'co' },
      { at: 1290, width: 30, depth: 0.55, band: 'cSingleO' },
    ],
  },
  {
    id: 'acetaldehyde',
    name: 'acetaldehyde',
    formula: 'CH3CHO',
    type: 'aldehyde',
    peaks: [
      { at: 2830, width: 22, depth: 0.4, band: 'chAld' },
      { at: 2720, width: 22, depth: 0.45, band: 'chAld' },
      { at: 1730, width: 28, depth: 0.85, band: 'co' },
    ],
  },
  {
    id: 'ethyl-acetate',
    name: 'ethyl acetate',
    formula: 'CH3COOC2H5',
    type: 'ester',
    peaks: [
      { at: 2985, width: 30, depth: 0.25, band: 'ch' },
      { at: 1740, width: 28, depth: 0.88, band: 'co' },
      { at: 1240, width: 35, depth: 0.8, band: 'cSingleO' },
    ],
  },
  {
    id: 'diethylamine',
    name: 'diethylamine',
    formula: 'C2H5NHC2H5',
    type: 'amine',
    peaks: [
      { at: 3290, width: 28, depth: 0.35, band: 'nh' },
      { at: 2960, width: 35, depth: 0.7, band: 'ch' },
    ],
  },
  {
    id: 'hexane',
    name: 'hexane',
    formula: 'C6H14',
    type: 'hydrocarbon',
    peaks: [
      { at: 2960, width: 40, depth: 0.85, band: 'ch' },
      { at: 1465, width: 25, depth: 0.45, band: 'chBend' },
    ],
  },
];

/**
 * Percent transmittance of a sample at a wavenumber.
 * @param {Sample} sample
 * @param {number} wavenumber in cm⁻¹
 */
export function transmittance(sample, wavenumber) {
  const left = sample.peaks.reduce((t, p) => {
    const d = (wavenumber - p.at) / p.width;
    return t * (1 - p.depth * Math.exp(-d * d));
  }, 1);
  return 96 * left;
}

/**
 * Which class of compound a set of bands points to. The C=O band alone cannot
 * decide, so the other bands settle it.
 * @param {BandId[]} bands
 * @returns {ClassId}
 */
export function classFromBands(bands) {
  const has = (/** @type {BandId} */ id) => bands.includes(id);
  if (has('co')) {
    if (has('ohAcid')) return 'acid';
    if (has('chAld')) return 'aldehyde';
    if (has('cSingleO')) return 'ester';
    return 'ketone';
  }
  if (has('oh')) return 'alcohol';
  if (has('nh')) return 'amine';
  return 'hydrocarbon';
}

/**
 * Why a sample belongs to its class, in terms of the peaks a learner can read.
 * @type {Record<ClassId, string>}
 */
export const CLASS_REASONS = {
  alcohol: 'có đỉnh rộng O–H ở $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$ và không có đỉnh C=O.',
  aldehyde:
    'có đỉnh C=O gần $1\\,730$ $\\mathrm{cm^{-1}}$, kèm các đỉnh C–H của nhóm –CHO ở $2\\,830$ – $2\\,695$ $\\mathrm{cm^{-1}}$.',
  ketone: 'có đỉnh C=O gần $1\\,715$ $\\mathrm{cm^{-1}}$ mà không có O–H, C–O hay C–H của –CHO.',
  acid: 'có dải O–H rất rộng ở $3\\,300$ – $2\\,500$ $\\mathrm{cm^{-1}}$ cùng đỉnh C=O.',
  ester: 'có đỉnh C=O gần $1\\,740$ $\\mathrm{cm^{-1}}$ và đỉnh C–O mạnh, nhưng không có O–H.',
  amine: 'có đỉnh N–H ở $3\\,300$ – $3\\,000$ $\\mathrm{cm^{-1}}$ và không có đỉnh C=O.',
  hydrocarbon: 'chỉ có các đỉnh của liên kết C–H, không có đỉnh của nhóm chức nào.',
};

/**
 * Feedback for one class choice on a sample.
 * @param {Sample} sample
 * @param {ClassId} choice
 * @returns {{ correct: boolean, text: string }}
 */
export function judge(sample, choice) {
  if (choice === sample.type) {
    return {
      correct: true,
      text: `Đúng: mẫu này là ${sample.name}, thuộc loại ${CLASS_NAMES[choice].toLowerCase()}, vì phổ ${CLASS_REASONS[choice]}`,
    };
  }
  return {
    correct: false,
    text: `Chưa đúng. Nếu là ${CLASS_NAMES[choice].toLowerCase()} thì phổ phải ${CLASS_REASONS[choice]} Hãy đọc lại các đỉnh của mẫu.`,
  };
}
