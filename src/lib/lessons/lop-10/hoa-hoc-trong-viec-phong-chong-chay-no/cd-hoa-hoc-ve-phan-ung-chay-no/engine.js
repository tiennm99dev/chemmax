/**
 * The chemistry of fires and explosions: heat of combustion from enthalpies of
 * formation, the share of oxygen as the driver of the burning rate, and the
 * explosion limits of a gas in air. Enthalpies are rounded to kJ/mol, with
 * water as vapour in the products, using the book's CO₂ and H₂O values.
 */

/** Enthalpy of formation of CO₂(g), kJ/mol. */
export const DF_CO2 = -394;
/** Enthalpy of formation of H₂O(g), kJ/mol. */
export const DF_H2O = -242;

/**
 * @typedef {object} Fuel
 * @property {string} id
 * @property {string} name
 * @property {string} tex equation for 1 mol of fuel, as TeX without delimiters
 * @property {string} formula TeX formula of the fuel
 * @property {number} molar g/mol
 * @property {number} df enthalpy of formation, kJ/mol
 * @property {number} co2 mol of CO₂ per mol of fuel
 * @property {number} h2o mol of H₂O per mol of fuel
 */

/** @type {Fuel[]} */
export const FUELS = [
  {
    id: 'carbon',
    name: 'Than (carbon)',
    tex: '\\mathrm{C(s)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}',
    formula: '\\mathrm{C(s)}',
    molar: 12,
    df: 0,
    co2: 1,
    h2o: 0,
  },
  {
    id: 'methane',
    name: 'Khí thiên nhiên (methane)',
    tex: '\\mathrm{CH_4(g)} + \\mathrm{2O_2(g)} \\rightarrow \\mathrm{CO_2(g)} + \\mathrm{2H_2O(g)}',
    formula: '\\mathrm{CH_4(g)}',
    molar: 16,
    df: -76,
    co2: 1,
    h2o: 2,
  },
  {
    id: 'propane',
    name: 'Gas (propane)',
    tex: '\\mathrm{C_3H_8(g)} + \\mathrm{5O_2(g)} \\rightarrow \\mathrm{3CO_2(g)} + \\mathrm{4H_2O(g)}',
    formula: '\\mathrm{C_3H_8(g)}',
    molar: 44,
    df: -105,
    co2: 3,
    h2o: 4,
  },
  {
    id: 'butane',
    name: 'Gas (butane)',
    tex: '\\mathrm{C_4H_{10}(g)} + \\dfrac{13}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{4CO_2(g)} + \\mathrm{5H_2O(g)}',
    formula: '\\mathrm{C_4H_{10}(g)}',
    molar: 58,
    df: -126,
    co2: 4,
    h2o: 5,
  },
  {
    id: 'octane',
    name: 'Xăng (octane)',
    tex: '\\mathrm{C_8H_{18}(l)} + \\dfrac{25}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{8CO_2(g)} + \\mathrm{9H_2O(g)}',
    formula: '\\mathrm{C_8H_{18}(l)}',
    molar: 114,
    df: -250,
    co2: 8,
    h2o: 9,
  },
  {
    id: 'ethanol',
    name: 'Cồn (ethanol)',
    tex: '\\mathrm{C_2H_5OH(l)} + \\mathrm{3O_2(g)} \\rightarrow \\mathrm{2CO_2(g)} + \\mathrm{3H_2O(g)}',
    formula: '\\mathrm{C_2H_5OH(l)}',
    molar: 46,
    df: -278,
    co2: 2,
    h2o: 3,
  },
];

/**
 * ΔrH of burning 1 mol of fuel, in kJ.
 * @param {Fuel} fuel
 */
export const combustionEnthalpy = (fuel) => fuel.co2 * DF_CO2 + fuel.h2o * DF_H2O - fuel.df;

/**
 * Heat given off by burning a mass of fuel, in kJ.
 * @param {Fuel} fuel
 * @param {number} grams
 */
export const heatOf = (fuel, grams) => (grams / fuel.molar) * -combustionEnthalpy(fuel);

/**
 * How many times the burning rate falls as oxygen drops, taking the rate
 * proportional to the concentration of oxygen.
 * @param {number} oxygenBefore % by volume, or partial pressure
 * @param {number} oxygenAfter same unit
 */
export const rateDrop = (oxygenBefore, oxygenAfter) => oxygenBefore / oxygenAfter;

/**
 * @typedef {object} Gas
 * @property {string} id
 * @property {string} name
 * @property {number} lower lower explosion limit, % by volume in air
 * @property {number} upper upper explosion limit, % by volume in air
 * @property {number} oxygen mol of O₂ to burn 1 mol completely
 */

/** Typical explosion limits in air at ordinary temperature and pressure. */
/** @type {Gas[]} */
export const GASES = [
  { id: 'methane', name: 'Methane', lower: 5, upper: 15, oxygen: 2 },
  { id: 'propane', name: 'Propane', lower: 2.1, upper: 9.5, oxygen: 5 },
  { id: 'butane', name: 'Butane', lower: 1.8, upper: 8.4, oxygen: 6.5 },
  { id: 'hydrogen', name: 'Hydrogen', lower: 4, upper: 75, oxygen: 0.5 },
  { id: 'co', name: 'Carbon monoxide', lower: 12.5, upper: 74, oxygen: 0.5 },
  { id: 'ethanol', name: 'Hơi ethanol', lower: 3.3, upper: 19, oxygen: 3 },
];

/**
 * Where a share of gas in air falls against the limits.
 * @param {Gas} gas
 * @param {number} percent % by volume
 * @returns {'lean' | 'inside' | 'rich'}
 */
export function explosionZone(gas, percent) {
  if (percent < gas.lower) return 'lean';
  return percent > gas.upper ? 'rich' : 'inside';
}

/**
 * The share of gas, in % by volume, that burns with exactly the oxygen in the
 * air mixed with it, taking air as 21% oxygen.
 * @param {Gas} gas
 */
export const stoichiometricPercent = (gas) => 100 / (1 + gas.oxygen / 0.21);

/**
 * The share of oxygen left in the mixture, in % by volume.
 * @param {number} percent % of gas by volume
 */
export const oxygenInMixture = (percent) => 21 * (1 - percent / 100);

/**
 * The top of the chart for a gas: 1.4 times its upper limit, rounded up to a
 * multiple of 5 and never past 100%.
 * @param {Gas} gas
 */
export const axisTop = (gas) => Math.min(100, Math.ceil((gas.upper * 1.4) / 5) * 5);

/**
 * The room volume of gas that brings a closed room to the lower limit, in the
 * unit of `roomVolume`.
 * @param {Gas} gas
 * @param {number} roomVolume
 */
export const volumeToLowerLimit = (gas, roomVolume) => (gas.lower / 100) * roomVolume;
