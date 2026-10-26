/**
 * A gas-collecting experiment for comparing reaction rates, with the two
 * reactions the KNTT grade 8 book uses:
 *
 * - limestone and hydrochloric acid, CaCO3 + 2HCl → CaCl2 + CO2 + H2O:
 *   0,1 g of CaCO3 (0,001 mol) in 10 mL of acid; the acid (at least 0,5 M,
 *   so at least 0,005 mol) is always in excess, so the CO2 collected tends to
 *   0,001 × 24,79 L = 24,79 mL whatever the conditions;
 * - hydrogen peroxide decomposing, 2H2O2 → 2H2O + O2, in 5 mL of solution
 *   (taken as 5 g): the O2 collected depends on how much H2O2 there is.
 *
 * The collected volume follows V(t) = Vmax · (1 − e^(−kt)). The rate
 * constant k grows with temperature (doubling for every 10 °C, a classroom
 * rule of thumb), with the acid concentration and the contact surface of the
 * limestone, and with the MnO2 catalyst. The numbers are a qualitative model
 * for comparing runs, not measured data.
 */
import { formatNumber } from '#lib/core/number-format.js';
import { MOLAR_VOLUME } from '../_shared/molar.js';

/** @typedef {'da-voi' | 'oxi-gia'} ReactionId */
/** @typedef {'vien' | 'manh' | 'bot'} Surface */

/**
 * @typedef {object} Run
 * @property {ReactionId} reaction
 * @property {number} temperature °C
 * @property {number} concentration HCl in mol/L, or H2O2 in %
 * @property {Surface} surface form of the limestone (limestone only)
 * @property {boolean} catalyst whether MnO2 is added (hydrogen peroxide only)
 */

/** Seconds of reaction the widget follows. */
export const DURATION = 60;

/** Temperature range of the water bath, °C. */
export const TEMPERATURE = { min: 10, max: 60, step: 5 };

export const REACTIONS = /** @type {const} */ ({
  'da-voi': {
    label: 'Đá vôi + HCl',
    equation: 'CaCO3 + 2HCl → CaCl2 + CO2 + H2O',
    gas: 'CO2',
    concentration: { min: 0.5, max: 2, step: 0.5, unit: 'M', label: 'Nồng độ dung dịch HCl' },
  },
  'oxi-gia': {
    label: 'Nước oxi già (H₂O₂)',
    equation: '2H2O2 → 2H2O + O2',
    gas: 'O2',
    concentration: { min: 1, max: 6, step: 1, unit: '%', label: 'Nồng độ dung dịch H₂O₂' },
  },
});

/** Forms of limestone, from one lump to powder, with their contact-surface factor. */
export const SURFACES = /** @type {const} */ ([
  { value: 'vien', label: 'Viên', factor: 1 },
  { value: 'manh', label: 'Mảnh nhỏ', factor: 3 },
  { value: 'bot', label: 'Bột', factor: 8 },
]);

/** Moles of CaCO3 in the 0,1 g sample (M = 100 g/mol). */
const CACO3_MOL = 0.1 / 100;

/** Mass of the hydrogen peroxide solution, g (5 mL taken as 5 g). */
const PEROXIDE_SOLUTION_MASS = 5;

/** M of H2O2, g/mol. */
const H2O2_MOLAR_MASS = 34;

/**
 * The default settings for a reaction.
 * @param {ReactionId} reaction
 * @returns {Run}
 */
export function defaultRun(reaction) {
  return {
    reaction,
    temperature: 25,
    concentration: reaction === 'da-voi' ? 1 : 3,
    surface: 'vien',
    catalyst: false,
  };
}

/**
 * Volume of gas collected once the reaction is over, in mL.
 * @param {Run} run
 */
export function finalVolume(run) {
  if (run.reaction === 'da-voi') return CACO3_MOL * MOLAR_VOLUME * 1000;
  const mol = (PEROXIDE_SOLUTION_MASS * run.concentration) / 100 / H2O2_MOLAR_MASS;
  return (mol / 2) * MOLAR_VOLUME * 1000;
}

/**
 * Rate constant k of the run, per second.
 * @param {Run} run
 */
export function rateConstant(run) {
  const heat = 2 ** ((run.temperature - 25) / 10);
  if (run.reaction === 'da-voi') {
    const surface = SURFACES.find((s) => s.value === run.surface)?.factor ?? 1;
    return 0.012 * run.concentration * surface * heat;
  }
  return (run.catalyst ? 0.15 : 0.0008) * heat;
}

/**
 * Gas collected after `t` seconds, mL.
 * @param {Run} run @param {number} t
 */
export function gasVolume(run, t) {
  return finalVolume(run) * (1 - Math.exp(-rateConstant(run) * Math.max(0, t)));
}

/**
 * How fast gas escapes at time `t`, mL per second.
 * @param {Run} run @param {number} t
 */
export function gasRate(run, t) {
  const k = rateConstant(run);
  return finalVolume(run) * k * Math.exp(-k * Math.max(0, t));
}

/**
 * Share of the limiting reactant (CaCO3 or H2O2) still left at time `t`, 0..1.
 * @param {Run} run @param {number} t
 */
export function remaining(run, t) {
  return Math.exp(-rateConstant(run) * Math.max(0, t));
}

/**
 * The run's concentration as the book writes it: `1,5 M` or `3%`.
 * @param {Run} run
 */
export function concentrationText(run) {
  const unit = REACTIONS[run.reaction].concentration.unit;
  return unit === '%'
    ? `${formatNumber(run.concentration)}%`
    : `${formatNumber(run.concentration)} ${unit}`;
}

/**
 * The factors that differ between two runs of the same reaction, in the
 * book's order, each with a phrase saying how it changed.
 * @param {Run} before @param {Run} after
 * @returns {Array<{ factor: 'nong-do' | 'nhiet-do' | 'be-mat' | 'xuc-tac', text: string }>}
 */
export function changes(before, after) {
  /** @type {Array<{ factor: 'nong-do' | 'nhiet-do' | 'be-mat' | 'xuc-tac', text: string }>} */
  const out = [];
  if (before.concentration !== after.concentration) {
    const up = after.concentration > before.concentration;
    out.push({
      factor: 'nong-do',
      text: `nồng độ ${up ? 'tăng' : 'giảm'} từ ${concentrationText(before)} ${up ? 'lên' : 'xuống'} ${concentrationText(after)}`,
    });
  }
  if (before.temperature !== after.temperature) {
    const up = after.temperature > before.temperature;
    out.push({
      factor: 'nhiet-do',
      text: `nhiệt độ ${up ? 'tăng' : 'giảm'} từ ${formatNumber(before.temperature)} °C ${up ? 'lên' : 'xuống'} ${formatNumber(after.temperature)} °C`,
    });
  }
  if (after.reaction === 'da-voi' && before.surface !== after.surface) {
    const f = (/** @type {Surface} */ s) => SURFACES.findIndex((x) => x.value === s);
    const name = (/** @type {Surface} */ s) => SURFACES[f(s)].label.toLowerCase();
    out.push({
      factor: 'be-mat',
      text: `đá vôi đổi từ dạng ${name(before.surface)} sang dạng ${name(after.surface)} (diện tích tiếp xúc ${f(after.surface) > f(before.surface) ? 'lớn hơn' : 'nhỏ hơn'})`,
    });
  }
  if (after.reaction === 'oxi-gia' && before.catalyst !== after.catalyst) {
    out.push({
      factor: 'xuc-tac',
      text: after.catalyst ? 'thêm chất xúc tác MnO₂' : 'bỏ chất xúc tác MnO₂',
    });
  }
  return out;
}

/**
 * Compares a run with the one before it by how fast gas escapes at the start
 * (mL per second), and explains the result in Vietnamese.
 * @param {Run | null} before @param {Run} after
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function compareRuns(before, after) {
  const rAfter = gasRate(after, 0);
  const head = `Lúc đầu khí thoát ra khoảng ${formatNumber(rAfter, 2)} mL mỗi giây`;
  if (!before || before.reaction !== after.reaction) {
    return {
      tone: 'info',
      text: `${head}. Đổi một yếu tố rồi làm lại để so sánh tốc độ phản ứng.`,
    };
  }
  const diff = changes(before, after);
  if (diff.length === 0) {
    return {
      tone: 'info',
      text: `${head}, giống lần trước vì điều kiện không đổi. Hãy đổi một yếu tố rồi làm lại.`,
    };
  }
  if (diff.length > 1) {
    return {
      tone: 'warn',
      text: `${head}. Em đã đổi ${diff.length} yếu tố cùng lúc (${diff.map((d) => d.text).join('; ')}), nên không biết yếu tố nào làm tốc độ thay đổi. Hãy giữ nguyên các yếu tố khác, mỗi lần chỉ đổi một yếu tố.`,
    };
  }
  const rBefore = gasRate(before, 0);
  const faster = rAfter > rBefore;
  const d = diff[0];
  const word = faster ? 'nhanh hơn' : 'chậm hơn';
  let why;
  if (d.factor === 'nong-do') {
    why = faster
      ? 'Nồng độ chất tham gia tăng thì tốc độ phản ứng tăng.'
      : 'Nồng độ chất tham gia giảm thì tốc độ phản ứng giảm.';
    if (after.reaction === 'oxi-gia')
      why += ' Lượng H₂O₂ cũng thay đổi nên lượng khí O₂ cuối cùng thay đổi theo.';
  } else if (d.factor === 'nhiet-do') {
    why = faster
      ? 'Nhiệt độ tăng thì tốc độ phản ứng tăng.'
      : 'Nhiệt độ giảm thì tốc độ phản ứng giảm, giống như thực phẩm để trong tủ lạnh lâu hỏng hơn.';
  } else if (d.factor === 'be-mat') {
    why = faster
      ? 'Đá vôi càng nhỏ, diện tích bề mặt tiếp xúc với acid càng lớn, phản ứng càng nhanh. Lượng khí cuối cùng vẫn như cũ vì khối lượng đá vôi không đổi.'
      : 'Đá vôi càng to, diện tích bề mặt tiếp xúc càng nhỏ, phản ứng càng chậm. Lượng khí cuối cùng vẫn như cũ.';
  } else {
    why = after.catalyst
      ? 'MnO₂ là chất xúc tác: sau phản ứng nó vẫn còn nguyên ở đáy ống nghiệm, và lượng khí O₂ cuối cùng không đổi.'
      : 'Không có chất xúc tác, H₂O₂ phân huỷ rất chậm ở nhiệt độ thường.';
  }
  return {
    tone: 'ok',
    text: `${head}, lần trước ${formatNumber(rBefore, 2)} mL mỗi giây: phản ứng ${word} vì ${d.text}. ${why}`,
  };
}

/**
 * A rounded top for the volume axis that fits every curve drawn.
 * @param {number} volume largest volume to show, mL
 */
export function axisTop(volume) {
  const steps = [25, 50, 75, 100, 125, 150];
  return steps.find((s) => s >= volume - 1e-9) ?? Math.ceil(volume / 50) * 50;
}
