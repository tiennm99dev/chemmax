/**
 * The contact process as three choices, what it yields, and the sulfate test.
 */

/**
 * @typedef {{ id: string, formula: string, name: string, right: boolean, why: string,
 *   equation?: string }} ContactOption
 * @typedef {{ id: number, title: string, plant: string, question: string,
 *   options: ContactOption[], made: string }} ContactStage
 * @typedef {'s' | 'fes2'} Source
 */

/** @type {ContactStage[]} */
export const STAGES = [
  {
    id: 1,
    title: 'Giai đoạn 1: tạo sulfur dioxide',
    plant: 'Lò đốt',
    question: 'Đốt nguyên liệu nào trong không khí dư?',
    made: 'SO2',
    options: [
      {
        id: 's',
        formula: 'S',
        name: 'Sulfur',
        right: true,
        why: 'Đốt sulfur cho khí $\\mathrm{SO_2}$ khá sạch.',
        equation: 'S + O2 → SO2',
      },
      {
        id: 'fes2',
        formula: 'FeS2',
        name: 'Quặng pyrite',
        right: true,
        why: 'Đốt quặng pyrite cho $\\mathrm{SO_2}$ và xỉ $\\mathrm{Fe_2O_3}$.',
        equation: '4FeS2 + 11O2 → 2Fe2O3 + 8SO2',
      },
      {
        id: 'caco3',
        formula: 'CaCO3',
        name: 'Đá vôi',
        right: false,
        why: 'Đá vôi không chứa sulfur, nung chỉ cho $\\mathrm{CO_2}$.',
      },
    ],
  },
  {
    id: 2,
    title: 'Giai đoạn 2: oxi hoá thành sulfur trioxide',
    plant: 'Tháp tiếp xúc',
    question: 'Dùng xúc tác nào, ở khoảng $450$ – $500\\,^\\circ\\mathrm{C}$?',
    made: 'SO3',
    options: [
      {
        id: 'v2o5',
        formula: 'V2O5',
        name: 'Vanadium(V) oxide',
        right: true,
        why: 'Hỗn hợp khí tiếp xúc với lớp xúc tác $\\mathrm{V_2O_5}$, vì vậy gọi là phương pháp tiếp xúc. Phản ứng toả nhiệt, thuận nghịch.',
        equation: '2SO2 + O2 ⇌ 2SO3',
      },
      {
        id: 'fe',
        formula: 'Fe',
        name: 'Bột sắt',
        right: false,
        why: 'Bột sắt là xúc tác của quá trình Haber, không dùng ở đây.',
      },
      {
        id: 'none',
        formula: 'O2',
        name: 'Chỉ thêm oxygen',
        right: false,
        why: 'Oxygen là chất phản ứng, không phải xúc tác. Không có xúc tác thì phản ứng quá chậm.',
      },
    ],
  },
  {
    id: 3,
    title: 'Giai đoạn 3: hấp thụ sulfur trioxide',
    plant: 'Tháp hấp thụ',
    question: 'Dùng chất nào để hấp thụ $\\mathrm{SO_3}$?',
    made: 'H2SO4',
    options: [
      {
        id: 'h2so4',
        formula: 'H2SO4',
        name: 'H₂SO₄ 98%',
        right: true,
        why: 'Tạo oleum $\\mathrm{H_2SO_4 \\cdot nSO_3}$, rồi pha oleum vào nước được dung dịch acid: $\\mathrm{H_2SO_4 \\cdot nSO_3 + nH_2O \\to (n+1)H_2SO_4}$',
      },
      {
        id: 'h2o',
        formula: 'H2O',
        name: 'Nước',
        right: false,
        why: '$\\mathrm{SO_3}$ tan vào nước toả nhiệt rất mạnh, tạo sương mù acid khó hấp thụ.',
      },
      {
        id: 'naoh',
        formula: 'NaOH',
        name: 'Dung dịch NaOH',
        right: false,
        why: 'NaOH sẽ tạo muối sulfate chứ không thu được acid.',
      },
    ],
  },
];

/** Tonnes of H2SO4 per tonne of raw material, if nothing is lost. */
export const MASS_RATIO = { s: 98 / 32, fes2: (2 * 98) / 120 };

/**
 * Tonnes of H2SO4 from this raw material at this overall yield.
 * @param {Source} source
 * @param {number} tonnes
 * @param {number} yieldPercent
 */
export function acidTonnes(source, tonnes, yieldPercent) {
  return tonnes * MASS_RATIO[source] * (yieldPercent / 100);
}

/**
 * The bottles of the sulfate test.
 * @typedef {{ id: string, formula: string, target: boolean, withBarium: string | null,
 *   withAcid: string | null }} SulfateBottle
 * @type {SulfateBottle[]}
 */
export const BOTTLES = [
  {
    id: 'na2so4',
    formula: 'Na2SO4',
    target: true,
    withBarium: 'BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl',
    withAcid: null,
  },
  {
    id: 'h2so4',
    formula: 'H2SO4',
    target: true,
    withBarium: 'BaCl2 + H2SO4 → BaSO4↓ + 2HCl',
    withAcid: null,
  },
  {
    id: 'na2co3',
    formula: 'Na2CO3',
    target: false,
    withBarium: 'BaCl2 + Na2CO3 → BaCO3↓ + 2NaCl',
    withAcid: 'BaCO3 + 2HCl → BaCl2 + CO2↑ + H2O',
  },
  { id: 'nacl', formula: 'NaCl', target: false, withBarium: null, withAcid: null },
];

/**
 * What the test tube of a bottle shows after these reagents.
 * @param {{ id: string }} bottle
 * @param {string[]} poured
 * @returns {{ liquid: string, precipitate?: string, amount?: number, note: string, equation?: string }}
 */
export function sulfateLook(bottle, poured) {
  const b = BOTTLES.find((x) => x.id === bottle.id);
  const liquid = '#e2e8f0';
  const white = { precipitate: '#f8fafc', amount: 0.6 };
  if (!b || !poured.includes('bacl2')) return { liquid, note: 'Dung dịch không màu.' };
  if (!poured.includes('hcl')) {
    return b.withBarium
      ? { liquid, ...white, note: 'Xuất hiện kết tủa trắng.', equation: b.withBarium }
      : { liquid, note: 'Không có hiện tượng.' };
  }
  if (b.withAcid) {
    return { liquid, note: 'Kết tủa tan, có bọt khí không màu.', equation: b.withAcid };
  }
  return b.withBarium
    ? { liquid, ...white, note: 'Kết tủa trắng không tan trong acid.', equation: b.withBarium }
    : { liquid, note: 'Vẫn không có hiện tượng.' };
}
