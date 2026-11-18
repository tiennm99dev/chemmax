/**
 * Metals of the grade 12 chapter "Đại cương về kim loại": the book's standard
 * electrode potentials of the common metal couples, salt formulas of a metal
 * ion, and what happens when a metal is put into water, dilute hydrochloric
 * acid or a salt solution (the α rule on E°), written as book-style equations
 * such as "Zn + CuSO4 → ZnSO4 + Cu".
 */
import { formatFixed, texNumber } from '#lib/core/number-format.js';
import { electrodeCouple } from '#lib/domain/electrode-potentials.js';

/**
 * @typedef {object} Metal
 * @property {string} id element symbol
 * @property {string} name the book's name of the element
 * @property {number} charge charge of its common ion in the book's table
 * @property {number} E standard electrode potential of M^n+/M, volts (25 °C)
 * @property {'cold' | 'hot' | 'oxide' | 'steam' | 'none'} water how it meets water:
 *   at room temperature, slowly in hot water, held back by its oxide layer,
 *   only steam at high temperature, or not at all
 */

/**
 * How each metal of the chapter meets water, in the order of the
 * electrochemical series (E° rising).
 * @type {Record<string, Metal['water']>}
 */
const WATER = {
  K: 'cold',
  Na: 'cold',
  Mg: 'hot',
  Al: 'oxide',
  Zn: 'steam',
  Fe: 'steam',
  Ni: 'none',
  Sn: 'none',
  Pb: 'none',
  Cu: 'none',
  Ag: 'none',
};

/**
 * Metals of the electrochemical series in the order of rising E°; name,
 * charge and E° come from the book's table in the domain module.
 * @type {Metal[]}
 */
export const METALS = Object.entries(WATER).map(([id, water]) => {
  const { name, charge, E } = electrodeCouple(id);
  return { id, name, charge, E, water };
});

/** @param {string} id */
export function metal(id) {
  const m = METALS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown metal ${id}`);
  return m;
}

/** Superscript charge of an ion as plain text: "Cu²⁺", "Ag⁺". @param {Metal} m */
export function ionText(m) {
  const SUP = ['', '', '²', '³'];
  return `${m.id}${SUP[m.charge]}⁺`;
}

/** TeX of the ion: `Cu^{2+}`, `Ag^+` (without \mathrm). @param {Metal} m */
export const ionTex = (m) => (m.charge === 1 ? `${m.id}^+` : `${m.id}^{${m.charge}+}`);

/** `\mathrm{Cu^{2+}/Cu}`. @param {Metal} m */
export const coupleTex = (m) => `\\mathrm{${ionTex(m)}/${m.id}}`;

/** A potential with its sign and three decimals, as the book prints it: "−0,762 V", "+0,340 V". @param {number} E */
export const potentialText = (E) =>
  `${E > 0 ? '+' : E < 0 ? '−' : ''}${formatFixed(Math.abs(E), 3)} V`;

/** A potential for TeX: `-0{,}762`, `+0{,}340`. @param {number} E */
export const potentialTex = (E) =>
  `${E > 0 ? '+' : E < 0 ? '-' : ''}${texNumber(formatFixed(Math.abs(E), 3))}`;

/** @param {number} a @param {number} b @returns {number} */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
/** @param {number} a @param {number} b */
const lcm = (a, b) => (a * b) / gcd(a, b);
/** A coefficient in front of a species, empty for 1. @param {number} k */
const coef = (k) => (k === 1 ? '' : String(k));

/**
 * @typedef {object} Anion
 * @property {string} formula as written after the metal: "SO4", "NO3", "Cl", "OH"
 * @property {number} charge
 */

/** @type {Record<'SO4' | 'NO3' | 'Cl' | 'OH', Anion>} */
export const ANIONS = {
  SO4: { formula: 'SO4', charge: 2 },
  NO3: { formula: 'NO3', charge: 1 },
  Cl: { formula: 'Cl', charge: 1 },
  OH: { formula: 'OH', charge: 1 },
};

/**
 * The neutral formula of a metal ion with an anion: "CuSO4", "Al2(SO4)3",
 * "Fe(NO3)2", "AgNO3", "AlCl3", "Mg(OH)2".
 * @param {string} id metal symbol
 * @param {number} charge metal ion charge
 * @param {Anion} anion
 * @returns {{ formula: string, metals: number }} formula and metal atoms per formula unit
 */
export function saltOf(id, charge, anion) {
  const g = gcd(charge, anion.charge);
  const metals = anion.charge / g;
  const anions = charge / g;
  const group = anion.formula.length > 2 || /\d/.test(anion.formula) || anion.formula === 'OH';
  const tail =
    anions === 1
      ? anion.formula
      : group
        ? `(${anion.formula})${anions}`
        : `${anion.formula}${anions}`;
  return { formula: `${id}${metals === 1 ? '' : metals}${tail}`, metals };
}

/**
 * The displacement of a metal ion from its salt by a metal:
 * "2Al + 3CuSO4 → Al2(SO4)3 + 3Cu".
 * @param {Metal} reducer metal put in
 * @param {Metal} ion metal whose salt is in the solution
 * @param {Anion} anion
 */
export function displacementText(reducer, ion, anion) {
  const g = gcd(reducer.charge, ion.charge);
  const p = ion.charge / g; // reducer atoms
  const q = reducer.charge / g; // ions reduced
  const given = saltOf(ion.id, ion.charge, anion);
  const made = saltOf(reducer.id, reducer.charge, anion);
  const k = lcm(given.metals / gcd(q, given.metals), made.metals / gcd(p, made.metals));
  return `${coef(p * k)}${reducer.id} + ${coef((q * k) / given.metals)}${given.formula} → ${coef((p * k) / made.metals)}${made.formula} + ${coef(q * k)}${ion.id}`;
}

/** "2Al + 6HCl → 2AlCl3 + 3H2↑". @param {Metal} m */
export function acidText(m) {
  const n = m.charge;
  const g = gcd(2, n);
  const atoms = 2 / g;
  return `${coef(atoms)}${m.id} + ${coef(atoms * n)}HCl → ${coef(atoms)}${saltOf(m.id, n, ANIONS.Cl).formula} + ${coef(n / g)}H2↑`;
}

/** "2Na + 2H2O → 2NaOH + H2↑", "Mg + 2H2O → Mg(OH)2 + H2↑". @param {Metal} m */
export function waterText(m) {
  const n = m.charge;
  const g = gcd(2, n);
  const atoms = 2 / g;
  return `${coef(atoms)}${m.id} + ${coef(atoms * n)}H2O → ${coef(atoms)}${saltOf(m.id, n, ANIONS.OH).formula} + ${coef(n / g)}H2↑`;
}

/**
 * @typedef {object} Reagent
 * @property {string} id
 * @property {string} label plain text for the controls
 * @property {string} tex TeX of the dissolved substance
 * @property {Metal | null} ion metal ion of a salt, null for water and acid
 * @property {Anion | null} anion
 * @property {string} color solution colour before the reaction
 */

/** @type {Reagent[]} */
export const REAGENTS = [
  {
    id: 'H2O',
    label: 'Nước',
    tex: '\\mathrm{H_2O}',
    ion: null,
    anion: null,
    color: '#e0f2fe',
  },
  {
    id: 'HCl',
    label: 'HCl loãng',
    tex: '\\mathrm{HCl}',
    ion: null,
    anion: ANIONS.Cl,
    color: '#f1f5f9',
  },
  {
    id: 'FeSO4',
    label: 'FeSO₄',
    tex: '\\mathrm{FeSO_4}',
    ion: metal('Fe'),
    anion: ANIONS.SO4,
    color: '#d9f99d',
  },
  {
    id: 'CuSO4',
    label: 'CuSO₄',
    tex: '\\mathrm{CuSO_4}',
    ion: metal('Cu'),
    anion: ANIONS.SO4,
    color: '#7dd3fc',
  },
  {
    id: 'AgNO3',
    label: 'AgNO₃',
    tex: '\\mathrm{AgNO_3}',
    ion: metal('Ag'),
    anion: ANIONS.NO3,
    color: '#f8fafc',
  },
];

/** @param {string} id */
export function reagent(id) {
  const r = REAGENTS.find((x) => x.id === id);
  if (!r) throw new Error(`Unknown reagent ${id}`);
  return r;
}

/**
 * The precipitate an alkali hydroxide gives with a salt, as the book writes it.
 * @type {Record<string, string>}
 */
const HYDROXIDE_STEP = {
  FeSO4: '2MOH + FeSO4 → Fe(OH)2↓ + M2SO4',
  CuSO4: '2MOH + CuSO4 → Cu(OH)2↓ + M2SO4',
  AgNO3: '2MOH + 2AgNO3 → Ag2O↓ + 2MNO3 + H2O',
};

/** Colour and name of each precipitate. */
const PRECIPITATES = {
  FeSO4: { color: '#bef264', name: 'kết tủa trắng hơi xanh $\\mathrm{Fe(OH)_2}$' },
  CuSO4: { color: '#38bdf8', name: 'kết tủa xanh $\\mathrm{Cu(OH)_2}$' },
  AgNO3: { color: '#78350f', name: 'kết tủa nâu đen $\\mathrm{Ag_2O}$' },
};

/**
 * @typedef {object} Outcome
 * @property {boolean} reacts
 * @property {'none' | 'gas' | 'deposit' | 'gas-precipitate'} show what the tube draws
 * @property {string[]} equations book-style equations, in order
 * @property {string} observation what is seen (rich text)
 * @property {string} why the reason, from E° (rich text)
 * @property {string} [deposit] colour of the metal coating on the strip
 * @property {string} [precipitate] colour of the precipitate
 * @property {string} [after] colour of the solution afterwards
 * @property {string} [note] an extra remark (rich text)
 */

/** Colours of deposited metals. */
const DEPOSIT = { Fe: '#57534e', Cu: '#b45309', Ag: '#cbd5e1' };

/** `E°(Zn²⁺/Zn) = −0,762 V` as TeX in a sentence. @param {Metal} m */
const eTex = (m) => `$E^\\circ_{${coupleTex(m)}} = ${potentialTex(m.E)}$ V`;

/**
 * What a metal does in a reagent.
 * @param {string} metalId
 * @param {string} reagentId
 * @returns {Outcome}
 */
export function outcome(metalId, reagentId) {
  const m = metal(metalId);
  const r = reagent(reagentId);

  if (r.id === 'H2O') {
    if (m.water === 'cold')
      return {
        reacts: true,
        show: 'gas',
        equations: [waterText(m)],
        observation: `Mẩu ${m.id} chạy trên mặt nước, tan dần, có khí không màu thoát ra; dung dịch thu được làm phenolphthalein chuyển hồng.`,
        why: `${eTex(m)} rất âm: kim loại kiềm khử được nước ngay ở nhiệt độ thường.`,
        after: r.color,
      };
    const why = {
      hot: 'Magnesium hầu như không tác dụng với nước lạnh; trong nước nóng phản ứng xảy ra chậm, tạo $\\mathrm{Mg(OH)_2}$ và khí $\\mathrm{H_2}$.',
      oxide:
        'Aluminium có $E^\\circ$ rất âm nhưng được phủ lớp oxide $\\mathrm{Al_2O_3}$ mỏng, bền, ngăn không cho nhôm tiếp xúc với nước.',
      steam: `${m.id} không tác dụng với nước ở nhiệt độ thường; ${m.id} chỉ khử được hơi nước ở nhiệt độ cao.`,
      none: `${m.id} không tác dụng với nước, kể cả khi đun nóng.`,
    }[/** @type {'hot' | 'oxide' | 'steam' | 'none'} */ (m.water)];
    return {
      reacts: false,
      show: 'none',
      equations: [],
      observation: 'Không thấy hiện tượng gì ở nhiệt độ thường.',
      why,
      after: r.color,
    };
  }

  if (r.id === 'HCl') {
    if (m.E < 0) {
      const alkali = m.water === 'cold';
      return {
        reacts: true,
        show: 'gas',
        equations: [acidText(m)],
        observation: alkali
          ? `${m.id} phản ứng rất mãnh liệt, có thể gây nổ, khí không màu thoát ra. Không làm thí nghiệm này!`
          : `Mẩu ${m.id} tan dần, có bọt khí không màu ($\\mathrm{H_2}$) thoát ra.`,
        why: `${eTex(m)} $< 0$ nên ${m.id} khử được ion $\\mathrm{H^+}$ trong dung dịch acid thành khí hydrogen.`,
        after: m.id === 'Fe' ? '#ecfccb' : r.color,
      };
    }
    return {
      reacts: false,
      show: 'none',
      equations: [],
      observation: 'Không có bọt khí, kim loại không tan.',
      why: `${eTex(m)} $> 0$ nên ${m.id} không khử được ion $\\mathrm{H^+}$ trong dung dịch $\\mathrm{HCl}$ loãng.`,
      after: r.color,
    };
  }

  const ion = /** @type {Metal} */ (r.ion);
  const anion = /** @type {Anion} */ (r.anion);
  if (m.water === 'cold') {
    const base = waterText(m);
    const second = HYDROXIDE_STEP[r.id].replaceAll('M', m.id);
    const p = PRECIPITATES[/** @type {'FeSO4' | 'CuSO4' | 'AgNO3'} */ (r.id)];
    return {
      reacts: true,
      show: 'gas-precipitate',
      equations: [base, second],
      observation: `Có khí không màu thoát ra và xuất hiện ${p.name}; không có kim loại ${ion.id} bám ra.`,
      why: `${m.id} khử nước trước: tạo $\\mathrm{${m.id}OH}$ và $\\mathrm{H_2}$; sau đó $\\mathrm{${m.id}OH}$ tác dụng với muối. Kim loại tác dụng mạnh với nước không đẩy được kim loại khác ra khỏi dung dịch muối.`,
      precipitate: p.color,
      after: '#f8fafc',
    };
  }
  if (m.id === ion.id)
    return {
      reacts: false,
      show: 'none',
      equations: [],
      observation: 'Không có hiện tượng gì.',
      why: `Kim loại và ion trong dung dịch thuộc cùng một cặp $${coupleTex(m)}$ nên không có phản ứng.`,
      after: r.color,
    };
  if (m.E < ion.E) {
    const fe = m.id === 'Fe' && ion.id === 'Ag';
    const colour = /** @type {Record<string, string>} */ ({
      Cu: '#7dd3fc',
      Fe: '#d9f99d',
      Ni: '#bbf7d0',
    })[m.id];
    return {
      reacts: true,
      show: 'deposit',
      equations: [displacementText(m, ion, anion)],
      observation: `Có lớp kim loại ${ion.id} ${ion.id === 'Cu' ? 'màu đỏ' : ion.id === 'Ag' ? 'màu trắng xám' : 'màu xám'} bám lên ${m.id}${r.id === 'CuSO4' ? ', màu xanh của dung dịch nhạt dần' : r.id === 'FeSO4' ? ', màu lục nhạt của dung dịch nhạt dần' : ''}${colour ? `; dung dịch có màu của ion $\\mathrm{${ionTex(m)}}$` : ''}.`,
      why: `${eTex(m)} $<$ ${eTex(ion)}: theo quy tắc α, ${m.id} khử được ion $\\mathrm{${ionTex(ion)}}$.`,
      deposit: DEPOSIT[/** @type {'Fe' | 'Cu' | 'Ag'} */ (ion.id)],
      after: colour ?? '#f8fafc',
      note: fe
        ? 'Nếu $\\mathrm{AgNO_3}$ dư, ion $\\mathrm{Fe^{2+}}$ bị oxi hoá tiếp: $\\mathrm{Fe(NO_3)_2 + AgNO_3 \\longrightarrow Fe(NO_3)_3 + Ag}$.'
        : undefined,
    };
  }
  return {
    reacts: false,
    show: 'none',
    equations: [],
    observation: 'Không có hiện tượng gì.',
    why: `${eTex(m)} $>$ ${eTex(ion)}: ${m.id} có tính khử yếu hơn ${ion.id} nên không khử được ion $\\mathrm{${ionTex(ion)}}$.`,
    after: r.color,
  };
}
