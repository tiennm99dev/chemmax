/**
 * The Haber process: how much ammonia a stoichiometric N2 + 3H2 mixture can give
 * at a temperature and pressure, and how much of that one pass over the catalyst
 * really reaches. Gases are treated as ideal, so the percentages run a little
 * below measured tables. Kp comes from the measured 1,64·10⁻⁴ bar⁻² at 400 °C
 * (N2 + 3H2 ⇌ 2NH3), with the mean reaction enthalpy at the working temperatures.
 */

const KP_400 = 1.64e-4;
const T_400 = 673.15;
/** |ΔH|/R in kelvin, from Kp at 400 °C and 500 °C (about 105 kJ/mol at these temperatures). */
const DH_OVER_R = 12620;
const GAS_R = 8.314;
/** Activation energies in J/mol: iron catalyst and bare gas. */
const EA = { fe: 100e3, none: 230e3 };
/** Chosen so one pass over iron at 450 °C gets 90% of the way to equilibrium. */
const PRE_EXP = 2.3 * Math.exp(EA.fe / (GAS_R * 723.15));

/** @param {number} tC */
const toK = (tC) => tC + 273.15;

/** @param {number} tC */
export function kp(tC) {
  return KP_400 * Math.exp(DH_OVER_R * (1 / toK(tC) - 1 / T_400));
}

/**
 * Mole fraction of NH3 at equilibrium from N2:H2 = 1:3, solving
 * y/(1 − y)² = √(27·Kp)·p/16.
 * @param {number} tC
 * @param {number} pBar
 */
export function equilibriumShare(tC, pBar) {
  const a = (Math.sqrt(27 * kp(tC)) * pBar) / 16;
  return (2 * a + 1 - Math.sqrt(4 * a + 1)) / (2 * a);
}

/**
 * Share of the N2 used up when the mixture holds this mole fraction of NH3.
 * @param {number} share
 */
export function conversion(share) {
  return (2 * share) / (1 + share);
}

/**
 * How far one pass gets towards equilibrium, from 0 to 1.
 * @param {number} tC
 * @param {boolean} catalyst
 */
export function approach(tC, catalyst) {
  const rate = PRE_EXP * Math.exp(-(catalyst ? EA.fe : EA.none) / (GAS_R * toK(tC)));
  return 1 - Math.exp(-rate);
}

/**
 * Mole fraction of NH3 leaving the reactor after one pass.
 * @param {number} tC
 * @param {number} pBar
 * @param {boolean} catalyst
 */
export function outletShare(tC, pBar, catalyst) {
  return equilibriumShare(tC, pBar) * approach(tC, catalyst);
}

/**
 * The temperature with the most NH3 per pass, on a 10 °C grid.
 * @param {number} pBar
 * @param {boolean} catalyst
 * @param {number} [from]
 * @param {number} [to]
 */
export function bestTemperature(pBar, catalyst, from = 200, to = 700) {
  let best = from;
  for (let t = from; t <= to; t += 10) {
    if (outletShare(t, pBar, catalyst) > outletShare(best, pBar, catalyst)) best = t;
  }
  return best;
}

/**
 * What the book would say about these settings.
 * @param {number} tC
 * @param {number} pBar
 * @param {boolean} catalyst
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(tC, pBar, catalyst) {
  if (!catalyst) {
    return {
      tone: 'warn',
      text: 'Không có xúc tác, phản ứng gần như không xảy ra trong thời gian khí đi qua bình. Đường cân bằng không đổi: xúc tác không làm chuyển dịch cân bằng, chỉ giúp đạt cân bằng nhanh hơn.',
    };
  }
  if (tC < 400) {
    return {
      tone: 'warn',
      text: 'Nhiệt độ thấp cho phần trăm $\\mathrm{NH_3}$ lúc cân bằng cao, nhưng tốc độ quá chậm nên một lượt qua bình thu được ít.',
    };
  }
  if (tC > 450) {
    return {
      tone: 'warn',
      text: 'Phản ứng nhanh nhưng toả nhiệt, nên nhiệt độ cao đẩy cân bằng theo chiều nghịch và phần trăm $\\mathrm{NH_3}$ giảm.',
    };
  }
  if (pBar < 150) {
    return {
      tone: 'warn',
      text: 'Áp suất thấp làm cân bằng lệch về phía nhiều mol khí, tức chiều nghịch: phần trăm $\\mathrm{NH_3}$ còn thấp.',
    };
  }
  if (pBar > 200) {
    return {
      tone: 'info',
      text: 'Phần trăm $\\mathrm{NH_3}$ có tăng, nhưng chi phí nén khí và thiết bị chịu áp tăng nhanh hơn lợi ích thu được.',
    };
  }
  return {
    tone: 'ok',
    text: 'Đây là vùng điều kiện công nghiệp sách nêu: $400$ – $450\\,^\\circ\\mathrm{C}$, $150$ – $200$ bar, xúc tác Fe. Khí chưa phản ứng được tuần hoàn lại sau khi tách $\\mathrm{NH_3}$.',
  };
}

/**
 * The bottles of the ammonium test.
 * @typedef {{ id: string, formula: string, target: boolean, equation: string | null }} SaltBottle
 * @type {SaltBottle[]}
 */
export const SALTS = [
  { id: 'nh4cl', formula: 'NH4Cl', target: true, equation: 'NH4Cl + NaOH → NaCl + NH3↑ + H2O' },
  {
    id: 'nh42so4',
    formula: '(NH4)2SO4',
    target: true,
    equation: '(NH4)2SO4 + 2NaOH → Na2SO4 + 2NH3↑ + 2H2O',
  },
  { id: 'nacl', formula: 'NaCl', target: false, equation: null },
  { id: 'k2so4', formula: 'K2SO4', target: false, equation: null },
];

/**
 * What the test tube of a bottle shows after warming with NaOH.
 * @param {{ id: string }} bottle
 * @param {string[]} poured
 */
export function ammoniumLook(bottle, poured) {
  const salt = SALTS.find((s) => s.id === bottle.id);
  const liquid = '#e2e8f0';
  if (!salt || poured.length === 0) {
    return { liquid, strip: '#c4b5fd', note: 'Dung dịch không màu. Quỳ tím ẩm ở miệng ống.' };
  }
  if (salt.target) {
    return {
      liquid,
      strip: '#3b82f6',
      note: 'Có khí mùi khai bay lên, quỳ tím ẩm hoá xanh.',
      equation: salt.equation,
    };
  }
  return { liquid, strip: '#c4b5fd', note: 'Không có khí, quỳ tím ẩm không đổi màu.' };
}
