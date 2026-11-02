/**
 * Flash points and autoignition temperatures of common liquids, and what a
 * given temperature means for each. Values are rounded reference figures, in
 * °C; octane uses the book's 14 °C. Published figures vary with the test method
 * and, for gasoline and diesel, with the blend.
 */

/** Below this flash point a liquid counts as flammable, otherwise as combustible (°C). */
export const FLAMMABLE_LIMIT = 37.8;

/** @typedef {{ id: string, name: string, flash: number, ignite: number }} Liquid */

/** @type {Liquid[]} */
export const LIQUIDS = [
  { id: 'gasoline', name: 'Xăng', flash: -43, ignite: 280 },
  { id: 'ether', name: 'Diethyl ether', flash: -45, ignite: 160 },
  { id: 'hexane', name: 'Hexane', flash: -22, ignite: 225 },
  { id: 'acetone', name: 'Acetone', flash: -20, ignite: 465 },
  { id: 'methanol', name: 'Methanol', flash: 11, ignite: 464 },
  { id: 'ethanol', name: 'Ethanol', flash: 13, ignite: 363 },
  { id: 'octane', name: 'Octane', flash: 14, ignite: 206 },
  { id: 'acetic', name: 'Acetic acid', flash: 39, ignite: 427 },
  { id: 'diesel', name: 'Dầu diesel', flash: 52, ignite: 210 },
  { id: 'nitrobenzene', name: 'Nitrobenzene', flash: 88, ignite: 482 },
  { id: 'glycol', name: 'Ethylene glycol', flash: 111, ignite: 398 },
  { id: 'stearic', name: 'Stearic acid', flash: 196, ignite: 395 },
];

/** Ends of the temperature axis the chart draws, in °C. */
export const AXIS_MIN = -60;
export const AXIS_MAX = 500;

/**
 * Where a temperature falls along the chart, as a percentage from its left edge.
 * @param {number} t °C
 */
export const axisPercent = (t) => ((t - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100;

/**
 * The book's two classes of liquid, by flash point.
 * @param {number} flash °C
 * @returns {'flammable' | 'combustible'}
 */
export const liquidClass = (flash) => (flash < FLAMMABLE_LIMIT ? 'flammable' : 'combustible');

/** @type {Record<'flammable' | 'combustible', string>} */
export const CLASS_NAMES = {
  flammable: 'Chất lỏng dễ cháy',
  combustible: 'Chất lỏng có thể gây cháy',
};

/**
 * What a liquid does at temperature `t`, with or without a flame nearby.
 * @param {Liquid} liquid
 * @param {number} t °C
 * @param {boolean} spark a flame or spark is present
 * @returns {'safe' | 'vapour' | 'flash' | 'auto'}
 */
export function liquidState(liquid, t, spark) {
  if (t >= liquid.ignite) return 'auto';
  if (t < liquid.flash) return 'safe';
  return spark ? 'flash' : 'vapour';
}

/**
 * The sentence for one liquid at one temperature.
 * @param {Liquid} liquid
 * @param {number} t °C
 * @param {boolean} spark
 * @param {(value: number) => string} format writes a temperature
 */
export function stateMessage(liquid, t, spark, format) {
  const head = `${liquid.name} ở ${format(t)} °C:`;
  switch (liquidState(liquid, t, spark)) {
    case 'auto':
      return `${head} đã đạt nhiệt độ tự bốc cháy (${format(liquid.ignite)} °C), hỗn hợp hơi và không khí tự cháy dù không có nguồn lửa.`;
    case 'flash':
      return `${head} đã qua điểm chớp cháy (${format(liquid.flash)} °C), nguồn lửa làm hơi bắt cháy.`;
    case 'vapour':
      return `${head} đã qua điểm chớp cháy (${format(liquid.flash)} °C), đủ hơi để cháy nhưng chưa có nguồn lửa. Chỉ một tia lửa là đủ.`;
    default:
      return `${head} thấp hơn điểm chớp cháy (${format(liquid.flash)} °C), chưa đủ hơi để bắt lửa dù có nguồn lửa.`;
  }
}

/**
 * Calculated flame temperatures for gases burning at constant pressure, in °C,
 * in air and in pure oxygen. Real flames stay somewhat cooler.
 * @type {Array<{ id: string, name: string, air: number, oxygen: number }>}
 */
export const FLAMES = [
  { id: 'methane', name: 'Methane', air: 1960, oxygen: 3100 },
  { id: 'propane', name: 'Propane', air: 1980, oxygen: 2820 },
  { id: 'hydrogen', name: 'Hydrogen', air: 2250, oxygen: 3200 },
  { id: 'acetylene', name: 'Acetylene', air: 2500, oxygen: 3480 },
];
