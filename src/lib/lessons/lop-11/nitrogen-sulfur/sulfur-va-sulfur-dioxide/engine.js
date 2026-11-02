/**
 * A small virtual lab: burn a little sulfur or carbon in oxygen and bubble the
 * gas through a tube of potassium permanganate, bromine water or litmus.
 */

/** @typedef {'s' | 'c'} Fuel */
/** @typedef {'kmno4' | 'br2' | 'quy'} Tube */

/** Molar mass of each fuel, g/mol. */
const MOLAR = { s: 32, c: 12 };

/**
 * Each tube: its reagent, how much SO2 clears it, its colours and equation.
 * KMnO4: 10 mL 0,02 M is 0,2 mmol, cleared by 0,5 mmol SO2 (5 : 2).
 * Br2: 10 mL 0,05 M is 0,5 mmol, cleared by 0,5 mmol SO2 (1 : 1).
 */
export const TUBES = {
  kmno4: {
    name: 'Dung dịch thuốc tím',
    detail: '10 mL KMnO₄ 0,02 M',
    needs: 0.5,
    from: [126, 34, 206],
    to: [241, 245, 249],
    equation: '5SO2 + 2KMnO4 + 2H2O → K2SO4 + 2MnSO4 + 2H2SO4',
    effect: 'Màu tím nhạt dần rồi mất hẳn: SO₂ khử Mn từ +7 xuống +2.',
    bleached: 'Dung dịch đã mất màu hoàn toàn.',
  },
  br2: {
    name: 'Nước bromine',
    detail: '10 mL Br₂ 0,05 M',
    needs: 0.5,
    from: [234, 138, 8],
    to: [241, 245, 249],
    equation: 'SO2 + Br2 + 2H2O → 2HBr + H2SO4',
    effect: 'Màu vàng cam nhạt dần rồi mất hẳn: SO₂ khử Br₂ thành Br⁻.',
    bleached: 'Dung dịch đã mất màu hoàn toàn.',
  },
  quy: {
    name: 'Nước có quỳ tím',
    detail: '10 mL nước và quỳ tím',
    needs: 0.25,
    from: [167, 139, 250],
    to: [248, 113, 113],
    equation: 'SO2 + H2O ⇌ H2SO3',
    effect: 'Quỳ tím chuyển dần sang đỏ: SO₂ là oxide acid.',
    bleached: 'Quỳ đã đỏ rõ.',
  },
};

/**
 * Gas from burning this much fuel, in mmol: one mole of gas per mole of fuel.
 * @param {Fuel} fuel
 * @param {number} mg
 */
export function gasMmol(fuel, mg) {
  return mg / MOLAR[fuel];
}

/**
 * How far the tube has turned, from 0 to 1, after this much gas.
 * Carbon dioxide reddens litmus but reduces neither oxidant.
 * @param {Fuel} fuel
 * @param {Tube} tube
 * @param {number} mmol gas that has reached the tube
 */
export function turned(fuel, tube, mmol) {
  if (fuel === 'c' && tube !== 'quy') return 0;
  return Math.min(1, mmol / TUBES[tube].needs);
}

/**
 * The tube's colour once it has turned this far.
 * @param {Tube} tube
 * @param {number} share
 */
export function tubeColor(tube, share) {
  const { from, to } = TUBES[tube];
  const mix = from.map((c, i) => Math.round(c + (to[i] - c) * share));
  return `rgb(${mix.join(',')})`;
}

/**
 * The line that sums up a finished run.
 * @param {Fuel} fuel
 * @param {Tube} tube
 * @param {number} mg
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string, equation: string }}
 */
export function outcome(fuel, tube, mg) {
  if (mg === 0) {
    return { tone: 'info', text: 'Hãy múc một ít chất rắn vào muôi trước khi đốt.', equation: '' };
  }
  const burn = fuel === 's' ? 'S + O2 → SO2' : 'C + O2 → CO2';
  if (fuel === 'c' && tube !== 'quy') {
    return {
      tone: 'warn',
      text: 'Màu không đổi: $\\mathrm{CO_2}$ không có tính khử như $\\mathrm{SO_2}$. Đây là cách phân biệt hai khí.',
      equation: burn,
    };
  }
  if (fuel === 'c') {
    return {
      tone: 'info',
      text: 'Quỳ chuyển đỏ nhẹ: $\\mathrm{CO_2}$ cũng là oxide acid, nên quỳ tím không phân biệt được hai khí này.',
      equation: 'CO2 + H2O ⇌ H2CO3',
    };
  }
  const t = TUBES[tube];
  const share = turned(fuel, tube, gasMmol(fuel, mg));
  return {
    tone: share >= 1 ? 'ok' : 'info',
    text:
      share >= 1
        ? `${t.effect} ${t.bleached}`
        : `${t.effect} Còn thiếu khí để đổi màu hết: hãy đốt nhiều sulfur hơn.`,
    equation: t.equation,
  };
}
