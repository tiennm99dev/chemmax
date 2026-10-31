/**
 * A deliberately simple carbon-cycle model for the lesson: how burning
 * fossil fuel and clearing or planting forest change the CO2 in the air and
 * the global temperature until 2100.
 *
 * - Each year's emission (GtC) enters the air as ppm (1 ppm of CO2 holds
 *   about 2,13 GtC) and is split into pools that the ocean and plants take
 *   back at different speeds: the usual four-pool impulse response (a fifth
 *   stays for many centuries, the rest decays in about 170, 19 and 1 years).
 * - The pools start in 2024 from an emission history that grew by 1,6 % a
 *   year since 1850, scaled so that the air holds 420 ppm (280 ppm before
 *   industry).
 * - Warming follows the logarithm of the concentration: 2,1 °C for each
 *   doubling, which gives about 1,2 °C today, as observed.
 * These are teaching numbers, not a climate projection.
 */

export const PRE_INDUSTRIAL = 280;
export const START_PPM = 420;
export const START_YEAR = 2024;
export const END_YEAR = 2100;
/** Fossil carbon burnt today, GtC per year (about 37 Gt of CO2). */
export const FOSSIL_NOW = 10;
/** GtC in 1 ppm of atmospheric CO2. */
export const GTC_PER_PPM = 2.13;
/** Warming per doubling of CO2, °C. */
export const WARMING_PER_DOUBLING = 2.1;

/** Land use: net GtC per year from forests. */
export const FOREST = {
  'pha-rung': { label: 'Phá rừng mạnh', gtc: 2 },
  'hien-nay': { label: 'Như hiện nay', gtc: 1 },
  'trong-rung': { label: 'Trồng thêm rừng', gtc: -1 },
};

/** @typedef {keyof typeof FOREST} ForestChoice */

const POOLS = [
  { share: 0.217, keep: 1 },
  { share: 0.259, keep: Math.exp(-1 / 172.9) },
  { share: 0.338, keep: Math.exp(-1 / 18.51) },
  { share: 0.186, keep: Math.exp(-1 / 1.186) },
];

/**
 * One year: pools decay, then the year's emission is added.
 * @param {number[]} pools ppm above pre-industrial, per pool
 * @param {number} gtc emission this year
 */
function stepPools(pools, gtc) {
  const ppm = gtc / GTC_PER_PPM;
  return pools.map((v, i) => v * POOLS[i].keep + POOLS[i].share * ppm);
}

const sum = (/** @type {number[]} */ a) => a.reduce((s, v) => s + v, 0);

/** Pools at the start year, from the emission history. */
const START_POOLS = (() => {
  let pools = [0, 0, 0, 0];
  for (let y = 1850; y < START_YEAR; y++)
    pools = stepPools(pools, (FOSSIL_NOW + 1) * Math.exp(0.016 * (y - (START_YEAR - 1))));
  const scale = (START_PPM - PRE_INDUSTRIAL) / sum(pools);
  return pools.map((v) => v * scale);
})();

/**
 * Warming over pre-industrial for a CO2 concentration, °C.
 * @param {number} ppm
 */
export function warming(ppm) {
  return WARMING_PER_DOUBLING * Math.log2(ppm / PRE_INDUSTRIAL);
}

/**
 * Runs the model from START_YEAR to END_YEAR with constant settings.
 * @param {number} fossil fossil burning as a multiple of today's (0 to 2)
 * @param {ForestChoice} forest
 * `uptake` is the carbon the ocean and land take back from the air that
 * year, GtC; `emission` is what the year adds.
 * @returns {Array<{ year: number, ppm: number, temp: number, uptake: number, emission: number }>}
 */
export function simulate(fossil, forest) {
  if (!(fossil >= 0) || !FOREST[forest]) throw new RangeError('bad settings');
  const gtc = FOSSIL_NOW * fossil + FOREST[forest].gtc;
  let pools = START_POOLS;
  const out = [];
  for (let year = START_YEAR; year <= END_YEAR; year++) {
    const ppm = PRE_INDUSTRIAL + sum(pools);
    const uptake = sum(pools.map((v, i) => v * (1 - POOLS[i].keep))) * GTC_PER_PPM;
    out.push({ year, ppm, temp: warming(ppm), uptake, emission: gtc });
    pools = stepPools(pools, gtc);
  }
  return out;
}
