/**
 * The steps of the electron balance tool: what a tap on an atom means, what
 * a choice of reducing or oxidising agent means, and the checks of each step.
 */
import { isBalanced, parseEquation } from '#lib/domain/equation.js';
import { prettyFormula } from '#lib/domain/formula.js';
import { changeOf, halfElectrons, onText } from '../_shared/redox.js';

/** @typedef {import('../_shared/redox.js').Reaction} Reaction */
/** @typedef {'mark' | 'roles' | 'electrons' | 'multipliers' | 'finish'} Stage */

/** The four steps of the method and the stages that belong to each. */
export const STEPS = [
  { title: 'Xác định số oxi hoá, chất khử và chất oxi hoá', stages: ['mark', 'roles'] },
  { title: 'Viết quá trình oxi hoá và quá trình khử', stages: ['electrons'] },
  { title: 'Tìm hệ số để electron nhường bằng electron nhận', stages: ['multipliers'] },
  { title: 'Đặt hệ số và cân bằng các nguyên tố còn lại', stages: ['finish'] },
];

/**
 * The feedback for tapping an atom while looking for those that change.
 * @param {Reaction} r
 * @param {string} el
 * @param {number} on
 * @param {'left' | 'right'} side
 */
export function tapResult(r, el, on, side) {
  const change = changeOf(r, el, on, side);
  if (change === null) {
    return {
      change,
      text: `${el} với số oxi hoá ${onText(on)} ở đây không đổi qua phản ứng. Hãy tìm nguyên tử khác.`,
    };
  }
  const half = r[change];
  const move = change === 'lose' ? 'tăng' : 'giảm';
  return {
    change,
    text: `Đúng: số oxi hoá của ${el} ${move} từ ${onText(half.from)} thành ${onText(half.to)}.`,
  };
}

/**
 * The feedback for naming a reactant as the reducing or the oxidising agent.
 * @param {Reaction} r
 * @param {'reducer' | 'oxidant'} role
 * @param {string} formula
 */
export function roleResult(r, role, formula) {
  const name = prettyFormula(formula);
  if (formula !== r[role]) {
    return {
      ok: false,
      text:
        role === 'reducer'
          ? `${name} không phải chất khử. Chất khử chứa nguyên tố có số oxi hoá tăng.`
          : `${name} không phải chất oxi hoá. Chất oxi hoá chứa nguyên tố có số oxi hoá giảm.`,
    };
  }
  const el = role === 'reducer' ? r.lose.el : r.gain.el;
  const holder = formula === el ? name : `${name} chứa ${el}`;
  return {
    ok: true,
    text:
      role === 'reducer'
        ? `Đúng: ${holder} có số oxi hoá tăng, nên nhường electron và là chất khử.`
        : `Đúng: ${holder} có số oxi hoá giảm, nên nhận electron và là chất oxi hoá.`,
  };
}

/**
 * Checks the electrons typed into the two half-reactions.
 * @param {Reaction} r
 * @param {number} lose
 * @param {number} gain
 */
export function electronCheck(r, lose, gain) {
  const loseOk = lose === halfElectrons(r.lose);
  const gainOk = gain === halfElectrons(r.gain);
  if (loseOk && gainOk) return { ok: true, text: 'Đúng cả hai quá trình.' };
  const half = loseOk ? r.gain : r.lose;
  const many = half.atoms > 1 ? ` Quá trình này viết cho ${half.atoms} nguyên tử ${half.el}.` : '';
  return {
    ok: false,
    text: `Xem lại quá trình của ${half.el}: tính độ chênh lệch giữa ${onText(half.from)} và ${onText(half.to)}.${many}`,
  };
}

/**
 * Whether the scheme with the multipliers placed is balanced already.
 * @param {Reaction} r
 */
export function seedIsBalanced(r) {
  const eq = parseEquation(r.seed);
  const list = [...eq.reactants, ...eq.products];
  return isBalanced(
    eq,
    list.map((s) => s.coefficient ?? 1),
  );
}
