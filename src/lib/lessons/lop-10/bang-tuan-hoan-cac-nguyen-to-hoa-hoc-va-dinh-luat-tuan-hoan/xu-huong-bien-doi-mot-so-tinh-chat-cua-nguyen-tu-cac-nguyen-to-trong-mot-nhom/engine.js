/**
 * Trends of atomic radius, electronegativity and first ionisation energy
 * along one group A (top to bottom) or one period (left to right) of the
 * main-group table, with the steps that go against the general trend.
 */
import { fmt, formatNumber } from '#lib/core/number-format.js';
import { MAIN_GROUP, valueOf } from '#lib/domain/main-group.js';
import { roman } from '#lib/domain/compounds.js';

/** @typedef {import('#lib/domain/main-group.js').MainGroupAtom} MainGroupAtom */
/** @typedef {import('#lib/domain/main-group.js').Property} Property */
/** @typedef {'group' | 'period'} Direction */

export const PERIODS = [1, 2, 3, 4, 5, 6];
export const GROUPS = [1, 2, 3, 4, 5, 6, 7, 8];

/** @type {Record<Property, { name: string, unit: string, places: number }>} */
export const PROPERTIES = {
  radius: { name: 'bán kính nguyên tử', unit: 'pm', places: 0 },
  electronegativity: { name: 'độ âm điện', unit: '', places: 2 },
  ionization: { name: 'năng lượng ion hoá thứ nhất', unit: 'kJ/mol', places: 0 },
};

/** +1: the property grows along the direction; -1: it falls. */
const EXPECTED = /** @type {Record<Property, Record<Direction, 1 | -1>>} */ ({
  radius: { group: 1, period: -1 },
  electronegativity: { group: -1, period: 1 },
  ionization: { group: -1, period: 1 },
});

const REASONS = /** @type {Record<Property, Record<Direction, string>>} */ ({
  radius: {
    group:
      'Đi xuống trong nhóm, số lớp electron tăng nên electron lớp ngoài cùng ở xa hạt nhân hơn: bán kính tăng.',
    period:
      'Trong một chu kì, số lớp electron không đổi nhưng điện tích hạt nhân tăng, hạt nhân hút electron lớp ngoài cùng mạnh hơn: bán kính giảm.',
  },
  electronegativity: {
    group:
      'Đi xuống trong nhóm, bán kính tăng nên hạt nhân hút electron liên kết yếu hơn: độ âm điện giảm.',
    period:
      'Trong một chu kì, điện tích hạt nhân tăng và bán kính giảm, nguyên tử hút electron liên kết mạnh hơn: độ âm điện tăng.',
  },
  ionization: {
    group:
      'Đi xuống trong nhóm, electron lớp ngoài cùng ở xa hạt nhân hơn nên dễ bị tách ra: năng lượng ion hoá giảm.',
    period:
      'Trong một chu kì, hạt nhân hút electron lớp ngoài cùng ngày càng mạnh nên khó tách hơn: năng lượng ion hoá có xu hướng tăng.',
  },
});

/** @param {number} period @param {number} group */
export function atomAt(period, group) {
  return MAIN_GROUP.find((a) => a.period === period && a.group === group);
}

/**
 * The atoms on one line of the table that have a value for the property:
 * a group read downwards, a period read left to right. Hydrogen is left out
 * of group IA (it is not an alkali metal), and the noble gases are left out
 * for electronegativity, which the book does not give for them.
 * @param {MainGroupAtom} through
 * @param {Direction} direction
 * @param {Property} property
 */
export function lineThrough(through, direction, property) {
  const onLine = MAIN_GROUP.filter((a) =>
    direction === 'group' ? a.group === through.group && a.z !== 1 : a.period === through.period,
  );
  return onLine
    .filter((a) => valueOf(a, property) !== null)
    .filter((a) => property !== 'electronegativity' || a.group !== 8)
    .sort((a, b) => a.z - b.z);
}

/**
 * @param {MainGroupAtom} a
 * @param {Property} property
 */
export function valueText(a, property) {
  const v = valueOf(a, property);
  if (v === null || (property === 'electronegativity' && a.group === 8)) return 'không xét';
  const { unit, places } = PROPERTIES[property];
  const text = places === 0 ? fmt(v) : formatNumber(v, places);
  return `${text}${unit ? ` ${unit}` : ''}`;
}

/**
 * @typedef {object} Trend
 * @property {MainGroupAtom[]} line
 * @property {1 | -1} expected
 * @property {Array<[MainGroupAtom, MainGroupAtom]>} against steps that go the other way (or stay)
 * @property {string} sentence
 * @property {string} reason
 * @property {string} metal
 */

/**
 * The trend through an atom along its group or its period, as the widget
 * states it.
 * @param {MainGroupAtom} through
 * @param {Direction} direction
 * @param {Property} property
 * @returns {Trend}
 */
export function trend(through, direction, property) {
  const hydrogen = through.z === 1 && direction === 'group';
  const line = hydrogen ? [] : lineThrough(through, direction, property);
  const expected = EXPECTED[property][direction];
  const metal =
    direction === 'group'
      ? 'Cũng theo chiều đó, tính kim loại tăng dần và tính phi kim giảm dần.'
      : 'Cũng theo chiều đó, tính kim loại giảm dần và tính phi kim tăng dần.';
  const reason = REASONS[property][direction];
  const { name } = PROPERTIES[property];
  const where =
    direction === 'group'
      ? `Trong nhóm ${roman(through.group)}A`
      : `Trong chu kì ${through.period}`;
  if (line.length < 2) {
    const why = hydrogen
      ? 'Hydrogen không phải kim loại kiềm nên không xét cùng nhóm IA; chọn Li hoặc nguyên tố bên dưới.'
      : property === 'electronegativity' && through.group === 8
        ? 'Sách không xét độ âm điện của khí hiếm; chọn một nguyên tố khác.'
        : `${where} chỉ có một giá trị, chưa so sánh được.`;
    return { line, expected, against: [], sentence: why, reason, metal };
  }
  /** @type {Array<[MainGroupAtom, MainGroupAtom]>} */
  const against = [];
  for (let i = 1; i < line.length; i++) {
    const before = /** @type {number} */ (valueOf(line[i - 1], property));
    const after = /** @type {number} */ (valueOf(line[i], property));
    if ((after - before) * expected <= 0) against.push([line[i - 1], line[i]]);
  }
  const first = line[0];
  const last = line[line.length - 1];
  const rise = expected > 0;
  let sentence = `${where}, từ ${first.symbol} đến ${last.symbol}, ${name} ${rise ? 'tăng' : 'giảm'} từ ${valueText(first, property)} ${rise ? 'lên' : 'xuống'} ${valueText(last, property)}.`;
  if (against.length > 0) {
    const list = against
      .map(
        ([a, b]) =>
          `${a.symbol} (${valueText(a, property)}) → ${b.symbol} (${valueText(b, property)})`,
      )
      .join('; ');
    sentence += ` Đó là xu hướng chung; vài bước không theo xu hướng đó: ${list}.`;
  }
  return { line, expected, against, sentence, reason, metal };
}

/**
 * Fill colour for a value: pale for the smallest value of the property,
 * deep for the largest, over every atom shown.
 * @param {MainGroupAtom} a
 * @param {Property} property
 */
export function heat(a, property) {
  const v = valueOf(a, property);
  if (v === null || (property === 'electronegativity' && a.group === 8)) return '#e2e8f0';
  const values = /** @type {number[]} */ (
    MAIN_GROUP.map((x) => valueOf(x, property)).filter((x) => x !== null)
  );
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const t = (v - lo) / (hi - lo);
  const from = [224, 242, 254];
  const to = [251, 146, 60];
  const [r, g, b] = from.map((c, i) => Math.round(c + (to[i] - c) * t));
  return `rgb(${r} ${g} ${b})`;
}
