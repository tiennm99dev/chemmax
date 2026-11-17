/**
 * The chapter review quiz: a fixed mixed run of two kinds of question.
 * "react" asks whether a metal reacts with water, dilute HCl or a salt
 * solution (answered by the α rule on E°, from the shared metal data);
 * "corrode" describes two metals and asks which one is eaten away by
 * electrochemical corrosion, or that none is because a condition is missing.
 */
import { coupleTex, metal, outcome, potentialTex, reagent } from '../_shared/metals.js';

/**
 * @typedef {object} CorrosionCase
 * @property {string} id
 * @property {string} text the situation (rich text)
 * @property {[string, string]} pair the two metals
 * @property {boolean} contact the metals touch, directly or through a wire
 * @property {boolean} electrolyte both stand in one electrolyte solution
 * @property {string} [note] an extra remark after the answer (rich text)
 */

/** @type {CorrosionCase[]} */
export const CORROSION_CASES = [
  {
    id: 'ton',
    text: 'Tôn (sắt tráng kẽm) bị xây xát sâu tới lớp sắt bên trong, để ngoài không khí ẩm.',
    pair: ['Fe', 'Zn'],
    contact: true,
    electrolyte: true,
    note: 'Lớp kẽm vẫn bảo vệ sắt ngay cả khi bị xước, vì kẽm bị ăn mòn thay.',
  },
  {
    id: 'sat-tay',
    text: 'Sắt tây (sắt tráng thiếc) bị xây xát sâu tới lớp sắt bên trong, để ngoài không khí ẩm.',
    pair: ['Fe', 'Sn'],
    contact: true,
    electrolyte: true,
    note: 'Vì vậy hộp sắt tây đã bị xước thì gỉ rất nhanh ở chỗ xước.',
  },
  {
    id: 'noi-day',
    text: 'Thanh Zn và thanh Cu được nối với nhau bằng dây dẫn rồi cùng nhúng vào dung dịch $\\mathrm{H_2SO_4}$ loãng.',
    pair: ['Zn', 'Cu'],
    contact: true,
    electrolyte: true,
    note: 'Khí $\\mathrm{H_2}$ thoát ra chủ yếu ở bề mặt thanh Cu (cathode): $2\\mathrm{H^+} + 2e \\longrightarrow \\mathrm{H_2}$.',
  },
  {
    id: 'rieng-re',
    text: 'Thanh Zn và thanh Cu đặt riêng rẽ, không chạm nhau, không nối dây, cùng nhúng vào dung dịch $\\mathrm{H_2SO_4}$ loãng.',
    pair: ['Zn', 'Cu'],
    contact: false,
    electrolyte: true,
    note: 'Thanh Zn vẫn tan dần do ăn mòn hoá học: $\\mathrm{Zn} + \\mathrm{H_2SO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{H_2}$.',
  },
  {
    id: 'dinh-tan',
    text: 'Dùng đinh sắt để đóng một tấm đồng lên vỏ tàu biển.',
    pair: ['Fe', 'Cu'],
    contact: true,
    electrolyte: true,
    note: 'Nước biển là dung dịch chất điện li, nên đinh sắt bị ăn mòn rất nhanh.',
  },
  {
    id: 'khoi-mg',
    text: 'Gắn một khối magnesium vào ống dẫn bằng thép chôn dưới đất ẩm.',
    pair: ['Fe', 'Mg'],
    contact: true,
    electrolyte: true,
    note: 'Đây là phương pháp điện hoá: khối Mg (anode hi sinh) bị ăn mòn và được thay định kì, ống thép được bảo vệ.',
  },
  {
    id: 'kho',
    text: 'Một vật bằng sắt được ghép chặt với một vật bằng đồng, để trong không khí khô.',
    pair: ['Fe', 'Cu'],
    contact: true,
    electrolyte: false,
    note: 'Không có dung dịch chất điện li nên không hình thành pin điện.',
  },
  {
    id: 'nhom-dong',
    text: 'Dây điện bằng nhôm được nối trực tiếp với dây điện bằng đồng, mối nối để ngoài trời mưa.',
    pair: ['Al', 'Cu'],
    contact: true,
    electrolyte: true,
    note: 'Vì vậy không nên nối trực tiếp dây nhôm với dây đồng ở ngoài trời.',
  },
];

/** @param {string} id */
export function corrosionCase(id) {
  const c = CORROSION_CASES.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown case ${id}`);
  return c;
}

/** The choice that means no metal is eaten away electrochemically. */
export const NONE = 'none';

/** `$E^\circ_{\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V` for a sentence. @param {string} id */
const eWords = (id) => {
  const m = metal(id);
  return `$E^\\circ_{${coupleTex(m)}} = ${potentialTex(m.E)}$ V`;
};

/**
 * Which metal of a case is corroded electrochemically (its id), or NONE, and why.
 * @param {CorrosionCase} c
 * @returns {{ answer: string, cathode: string | null, why: string }}
 */
export function corrosionAnswer(c) {
  if (!c.contact)
    return {
      answer: NONE,
      cathode: null,
      why: 'Hai kim loại không tiếp xúc với nhau (trực tiếp hoặc qua dây dẫn) nên không tạo thành pin điện: không xảy ra ăn mòn điện hoá.',
    };
  if (!c.electrolyte)
    return {
      answer: NONE,
      cathode: null,
      why: 'Hai kim loại không cùng tiếp xúc với một dung dịch chất điện li nên không xảy ra ăn mòn điện hoá.',
    };
  const [a, b] = c.pair.map(metal);
  const [anode, cathode] = a.E < b.E ? [a, b] : [b, a];
  return {
    answer: anode.id,
    cathode: cathode.id,
    why: `Đủ ba điều kiện ăn mòn điện hoá. ${eWords(anode.id)} nhỏ hơn ${eWords(cathode.id)} nên ${anode.id} là anode, bị oxi hoá: $\\mathrm{${anode.id}} \\longrightarrow \\mathrm{${anode.id}^{${anode.charge === 1 ? '' : anode.charge}+}} + ${anode.charge === 1 ? '' : anode.charge}e$; ${cathode.id} là cathode, không bị ăn mòn.`,
  };
}

/**
 * @typedef {{ kind: 'react', metal: string, reagent: string } | { kind: 'corrode', id: string }} Question
 */

/** The quiz in a fixed mixed order: reaction and corrosion questions alternate. @type {Question[]} */
export const QUESTIONS = [
  { kind: 'react', metal: 'Fe', reagent: 'CuSO4' },
  { kind: 'corrode', id: 'ton' },
  { kind: 'react', metal: 'Cu', reagent: 'HCl' },
  { kind: 'corrode', id: 'sat-tay' },
  { kind: 'react', metal: 'Cu', reagent: 'AgNO3' },
  { kind: 'corrode', id: 'noi-day' },
  { kind: 'react', metal: 'Na', reagent: 'CuSO4' },
  { kind: 'corrode', id: 'rieng-re' },
  { kind: 'react', metal: 'Cu', reagent: 'FeSO4' },
  { kind: 'corrode', id: 'dinh-tan' },
  { kind: 'react', metal: 'Al', reagent: 'HCl' },
  { kind: 'corrode', id: 'kho' },
  { kind: 'react', metal: 'Ag', reagent: 'CuSO4' },
  { kind: 'corrode', id: 'khoi-mg' },
  { kind: 'react', metal: 'Zn', reagent: 'FeSO4' },
  { kind: 'corrode', id: 'nhom-dong' },
];

/**
 * @typedef {object} Card
 * @property {string} prompt rich text
 * @property {Array<{ value: string, label: string }>} options
 * @property {string} answer value of the right option
 * @property {string[]} metals the metals to mark on the series strip
 * @property {string} why rich text explanation
 * @property {string[]} equations book-style equations to show after answering
 * @property {string} [note] rich text remark
 */

/**
 * Everything the widget shows for one question.
 * @param {Question} q
 * @returns {Card}
 */
export function card(q) {
  if (q.kind === 'react') {
    const r = reagent(q.reagent);
    const o = outcome(q.metal, q.reagent);
    const where = r.id === 'H2O' ? 'nước' : `dung dịch $${r.tex}$${r.id === 'HCl' ? ' loãng' : ''}`;
    return {
      prompt: `Cho ${q.metal} vào ${where} ở nhiệt độ thường. Có xảy ra phản ứng không?`,
      options: [
        { value: 'yes', label: 'Có phản ứng' },
        { value: 'no', label: 'Không phản ứng' },
      ],
      answer: o.reacts ? 'yes' : 'no',
      metals: r.ion ? [q.metal, r.ion.id] : r.id === 'HCl' ? [q.metal, 'H'] : [q.metal],
      why: o.why,
      equations: o.equations,
      note: o.note,
    };
  }
  const c = corrosionCase(q.id);
  const a = corrosionAnswer(c);
  return {
    prompt: `${c.text} Kim loại nào bị ăn mòn điện hoá?`,
    options: [
      ...c.pair.map((id) => ({ value: id, label: id })),
      { value: NONE, label: 'Không xảy ra ăn mòn điện hoá' },
    ],
    answer: a.answer,
    metals: [...c.pair],
    why: a.why,
    equations: [],
    note: c.note,
  };
}
