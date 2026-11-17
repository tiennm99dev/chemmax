/**
 * The two conversion chains of the chapter review, sodium and calcium. Each
 * step turns one substance into the next with a reagent or a condition; the
 * learner fills one blank per step, either the product or the reagent, from
 * a few choices. Equations are written book-style for `EquationLine`.
 */

/**
 * @typedef {object} Link
 * @property {string} to the product, as a formula ("NaOH")
 * @property {string} reagent what is added or done, as rich text
 * @property {'to' | 'reagent'} blank which part the learner fills
 * @property {string[]} options choices for the blank, the right one first (formulas or rich text)
 * @property {string} equation the book-style equation
 * @property {string} [condition] the condition over the arrow, in words
 * @property {string} why the reason, shown after the answer (rich text)
 */

/**
 * @typedef {object} Chain
 * @property {string} id
 * @property {string} name
 * @property {string} first the starting substance
 * @property {Link[]} links
 */

/** @type {Chain[]} */
export const CHAINS = [
  {
    id: 'na',
    name: 'Sodium',
    first: 'Na',
    links: [
      {
        to: 'NaOH',
        reagent: '$+\\,\\mathrm{H_2O}$',
        blank: 'to',
        options: ['NaOH', 'Na2O', 'NaH'],
        equation: '2Na + 2H2O → 2NaOH + H2↑',
        why: 'Kim loại kiềm khử nước ở nhiệt độ thường, tạo base tan và khí hydrogen.',
      },
      {
        to: 'Na2CO3',
        reagent: '$+\\,\\mathrm{CO_2}$',
        blank: 'reagent',
        options: ['$+\\,\\mathrm{CO_2}$', '$+\\,\\mathrm{CaCO_3}$', '$+\\,\\mathrm{CO}$'],
        equation: '2NaOH + CO2 → Na2CO3 + H2O',
        why: 'Base tác dụng với oxide acid $\\mathrm{CO_2}$; $\\mathrm{CaCO_3}$ không tan nên không phản ứng với NaOH, CO là oxide trung tính.',
      },
      {
        to: 'NaHCO3',
        reagent: '$+\\,\\mathrm{CO_2} + \\mathrm{H_2O}$',
        blank: 'to',
        options: ['NaHCO3', 'NaOH', 'Na2O'],
        equation: 'Na2CO3 + CO2 + H2O → 2NaHCO3',
        why: 'Muối carbonate hấp thụ thêm $\\mathrm{CO_2}$ và nước, chuyển thành muối hydrogencarbonate.',
      },
      {
        to: 'Na2CO3',
        reagent: '$t^\\circ$',
        blank: 'reagent',
        options: ['$t^\\circ$', '$+\\,\\mathrm{H_2O}$', '$+\\,\\mathrm{NaCl}$'],
        equation: '2NaHCO3 → Na2CO3 + CO2↑ + H2O',
        condition: 'đun nóng',
        why: '$\\mathrm{NaHCO_3}$ kém bền nhiệt, bị nhiệt phân thành soda: đây là giai đoạn cuối của phương pháp Solvay.',
      },
      {
        to: 'NaCl',
        reagent: '$+\\,\\mathrm{HCl}$',
        blank: 'to',
        options: ['NaCl', 'NaClO', 'Cl2'],
        equation: 'Na2CO3 + 2HCl → 2NaCl + CO2↑ + H2O',
        why: 'Muối carbonate tác dụng với acid mạnh hơn, giải phóng khí $\\mathrm{CO_2}$.',
      },
      {
        to: 'Na',
        reagent: 'điện phân nóng chảy',
        blank: 'reagent',
        options: ['điện phân nóng chảy', 'điện phân dung dịch', '$+\\,\\mathrm{CO}$, $t^\\circ$'],
        equation: '2NaCl → 2Na + Cl2↑',
        condition: 'điện phân nóng chảy',
        why: 'Na hoạt động mạnh: điện phân dung dịch NaCl chỉ khử nước ở cathode, CO không khử được hợp chất của Na. Chỉ điện phân nóng chảy mới thu được Na.',
      },
    ],
  },
  {
    id: 'ca',
    name: 'Calcium',
    first: 'Ca',
    links: [
      {
        to: 'Ca(OH)2',
        reagent: '$+\\,\\mathrm{H_2O}$',
        blank: 'to',
        options: ['Ca(OH)2', 'CaO', 'CaH2'],
        equation: 'Ca + 2H2O → Ca(OH)2 + H2↑',
        why: 'Ca khử nước ngay ở nhiệt độ thường, tạo $\\mathrm{Ca(OH)_2}$ và khí hydrogen.',
      },
      {
        to: 'CaCO3',
        reagent: '$+\\,\\mathrm{CO_2}$ (vừa đủ)',
        blank: 'to',
        options: ['CaCO3', 'Ca(HCO3)2', 'CaO'],
        equation: 'Ca(OH)2 + CO2 → CaCO3↓ + H2O',
        why: 'Nước vôi trong vẩn đục do kết tủa trắng $\\mathrm{CaCO_3}$: đây là phản ứng nhận biết khí $\\mathrm{CO_2}$.',
      },
      {
        to: 'Ca(HCO3)2',
        reagent: '$+\\,\\mathrm{CO_2} + \\mathrm{H_2O}$',
        blank: 'reagent',
        options: ['$+\\,\\mathrm{CO_2} + \\mathrm{H_2O}$', '$t^\\circ$', '$+\\,\\mathrm{NaOH}$'],
        equation: 'CaCO3 + CO2 + H2O → Ca(HCO3)2',
        why: 'Nước có hoà tan $\\mathrm{CO_2}$ hoà tan dần đá vôi: đây là sự xâm thực tạo hang động và là nguồn gốc của nước cứng tạm thời.',
      },
      {
        to: 'CaCO3',
        reagent: '$t^\\circ$',
        blank: 'to',
        options: ['CaCO3', 'Ca(OH)2', 'CaO'],
        equation: 'Ca(HCO3)2 → CaCO3↓ + CO2↑ + H2O',
        condition: 'đun nóng',
        why: 'Đun nóng phân huỷ $\\mathrm{Ca(HCO_3)_2}$ tạo cặn trong ấm đun nước. Nhũ đá trong hang động cũng do phản ứng phân huỷ này, xảy ra chậm ở nhiệt độ thường khi $\\mathrm{CO_2}$ thoát ra.',
      },
      {
        to: 'CaO',
        reagent: '$t^\\circ$ (nung)',
        blank: 'to',
        options: ['CaO', 'Ca', 'Ca(OH)2'],
        equation: 'CaCO3 → CaO + CO2↑',
        condition: 'nung',
        why: 'Nung đá vôi thu được vôi sống CaO.',
      },
      {
        to: 'CaCl2',
        reagent: '$+\\,\\mathrm{HCl}$',
        blank: 'reagent',
        options: ['$+\\,\\mathrm{HCl}$', '$+\\,\\mathrm{NaCl}$', '$+\\,\\mathrm{Cl_2}$'],
        equation: 'CaO + 2HCl → CaCl2 + H2O',
        why: 'Oxide base tác dụng với acid tạo muối và nước; NaCl không phản ứng với CaO.',
      },
      {
        to: 'Ca',
        reagent: 'điện phân nóng chảy',
        blank: 'reagent',
        options: ['điện phân nóng chảy', 'điện phân dung dịch', '$+\\,\\mathrm{H_2}$, $t^\\circ$'],
        equation: 'CaCl2 → Ca + Cl2↑',
        condition: 'điện phân nóng chảy',
        why: 'Ca là kim loại hoạt động mạnh, chỉ điều chế được bằng điện phân muối nóng chảy.',
      },
    ],
  },
];

/** @param {string} id */
export function chain(id) {
  const c = CHAINS.find((x) => x.id === id);
  if (!c) throw new Error(`Không có sơ đồ ${id}`);
  return c;
}

/** The substance a link starts from. @param {Chain} c @param {number} i */
export const fromOf = (c, i) => (i === 0 ? c.first : c.links[i - 1].to);

/** The right answer of a link's blank. @param {Link} link */
export const answerOf = (link) => (link.blank === 'to' ? link.to : link.reagent);

/**
 * Choices for a link's blank in a fixed order that does not always put the
 * answer first: rotated by the link's place in the chain.
 * @param {Link} link
 * @param {number} i
 */
export function choicesOf(link, i) {
  const k = (i * 2 + 1) % link.options.length;
  return [...link.options.slice(k), ...link.options.slice(0, k)];
}
