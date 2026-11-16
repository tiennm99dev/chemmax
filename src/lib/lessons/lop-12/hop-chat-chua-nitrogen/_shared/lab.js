/**
 * The nitrogen compounds of the chapter in a test tube: what litmus,
 * hydrochloric acid, bromine water, copper(II) sulfate, copper(II) hydroxide
 * in a base (the biuret test), concentrated nitric acid and heating show.
 *
 * The chemistry behind the table:
 * - an alkylamine such as methylamine is a stronger base than ammonia: its
 *   solution turns litmus blue, and it first precipitates Cu(OH)2 from a
 *   copper(II) salt, then dissolves it into a deep blue complex;
 * - aniline is a very weak base: litmus keeps its colour, but it dissolves in
 *   hydrochloric acid as a salt; its –NH2 group makes the ring react with
 *   bromine water at once, giving white 2,4,6-tribromoaniline;
 * - glycine has one –NH2 and one –COOH group, so litmus keeps its colour;
 * - the biuret test (violet) needs two or more peptide bonds: a tripeptide or
 *   a protein, never an amino acid or a dipeptide;
 * - a protein (egg white albumin) coagulates on heating and gives a yellow
 *   solid with concentrated nitric acid; short peptides without a benzene
 *   ring do neither.
 * Only the pairs a lesson offers are in the table; `observe` throws on any
 * other pair so a missing entry shows up in the tests.
 */

/** @typedef {'methylamine' | 'aniline' | 'glycine' | 'gly-ala' | 'gly-ala-gly' | 'albumin'} SubstanceId */
/** @typedef {'quy' | 'hcl' | 'bromine' | 'cuso4' | 'biuret' | 'hno3' | 'heat'} ReagentId */

/**
 * @typedef {object} Substance
 * @property {SubstanceId} id
 * @property {string} name
 * @property {string} formula rich text
 * @property {string} state what the sample looks like on the bench
 */

/** @type {Substance[]} */
export const SUBSTANCES = [
  {
    id: 'methylamine',
    name: 'methylamine',
    formula: '$\\mathrm{CH_3NH_2}$',
    state: 'dung dịch không màu, mùi khai',
  },
  {
    id: 'aniline',
    name: 'aniline',
    formula: '$\\mathrm{C_6H_5NH_2}$',
    state: 'chất lỏng không màu, ít tan trong nước',
  },
  {
    id: 'glycine',
    name: 'glycine',
    formula: '$\\mathrm{H_2N{-}CH_2{-}COOH}$',
    state: 'dung dịch không màu',
  },
  { id: 'gly-ala', name: 'Gly-Ala', formula: 'dipeptide', state: 'dung dịch không màu' },
  {
    id: 'gly-ala-gly',
    name: 'Gly-Ala-Gly',
    formula: 'tripeptide',
    state: 'dung dịch không màu',
  },
  {
    id: 'albumin',
    name: 'lòng trắng trứng',
    formula: 'protein albumin',
    state: 'dung dịch keo, hơi đục',
  },
];

/** @type {{ id: ReagentId, name: string, liquid: string, precipitate?: string | null }[]} */
export const REAGENTS = [
  { id: 'quy', name: 'Quỳ tím', liquid: '#c4b5fd' },
  { id: 'hcl', name: 'Dung dịch HCl', liquid: '#f1f5f9' },
  { id: 'bromine', name: 'Nước bromine', liquid: '#fbbf24' },
  { id: 'cuso4', name: 'Dung dịch CuSO₄', liquid: '#bae6fd' },
  { id: 'biuret', name: 'Cu(OH)₂/NaOH', liquid: '#e0f2fe', precipitate: '#60a5fa' },
  { id: 'hno3', name: 'HNO₃ đặc', liquid: '#f8fafc' },
  { id: 'heat', name: 'Đun nóng', liquid: '#f1f5f9' },
];

const COLORS = {
  litmus: '#c4b5fd',
  litmusBlue: '#3b82f6',
  clear: '#f1f5f9',
  cloudy: '#e2e8f0',
  white: '#f8fafc',
  paleYellow: '#fef3c7',
  bromine: '#fbbf24',
  deepBlue: '#1d4ed8',
  blue: '#60a5fa',
  paleBlue: '#bae6fd',
  violet: '#7c3aed',
  yellow: '#facc15',
};

/**
 * What a test tube shows. `text` is rich text, `short` a few plain words for
 * a results table, `reacts` marks a change the eye can see; `tex` is the
 * equation, if any.
 * @typedef {{ text: string, short: string, liquid: string, precipitate: string | null, amount: number, reacts: boolean, tex: string | null, why: string }} Observation
 */

/**
 * @param {boolean} reacts @param {string} short @param {string} text @param {string} liquid
 * @param {string} why @param {{ precipitate?: string, amount?: number, tex?: string }} [extra]
 * @returns {Observation}
 */
function out(reacts, short, text, liquid, why, extra = {}) {
  return {
    reacts,
    short,
    text,
    liquid,
    why,
    precipitate: extra.precipitate ?? null,
    amount: extra.amount ?? 0,
    tex: extra.tex ?? null,
  };
}

const NO_VIOLET_AMINO =
  'Phản ứng màu biuret cần ít nhất hai liên kết peptide; amino acid không có liên kết peptide nào.';

/** @type {Partial<Record<SubstanceId, Partial<Record<ReagentId, Observation>>>>} */
const TABLE = {
  methylamine: {
    quy: out(
      true,
      'Quỳ hoá xanh',
      'quỳ tím chuyển sang màu xanh',
      COLORS.litmusBlue,
      'Methylamine nhận proton của nước tạo ion $\\mathrm{OH^-}$: dung dịch có tính base, mạnh hơn dung dịch ammonia.',
      {
        tex: '\\mathrm{CH_3NH_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{CH_3NH_3^+} + \\mathrm{OH^-}',
      },
    ),
    hcl: out(
      false,
      'Không hiện tượng rõ',
      'không quan sát thấy hiện tượng: muối tạo thành tan trong nước',
      COLORS.clear,
      'Methylamine phản ứng với HCl tạo muối methylammonium chloride tan, không màu.',
      { tex: '\\mathrm{CH_3NH_2} + \\mathrm{HCl} \\rightarrow \\mathrm{CH_3NH_3Cl}' },
    ),
    bromine: out(
      false,
      'Không có kết tủa trắng',
      'không có kết tủa trắng',
      COLORS.paleYellow,
      'Methylamine không có vòng benzene nên không có phản ứng thế tạo kết tủa trắng như aniline.',
    ),
    cuso4: out(
      true,
      'Kết tủa xanh rồi tan, dung dịch xanh lam đậm',
      'lúc đầu có kết tủa xanh $\\mathrm{Cu(OH)_2}$, nhỏ thêm methylamine thì kết tủa tan, tạo dung dịch màu xanh lam đậm',
      COLORS.deepBlue,
      'Dung dịch methylamine có tính base nên tạo kết tủa $\\mathrm{Cu(OH)_2}$; methylamine dư tạo phức chất tan màu xanh lam đậm với ion $\\mathrm{Cu^{2+}}$.',
      {
        tex: '\\mathrm{CuSO_4} + 2\\mathrm{CH_3NH_2} + 2\\mathrm{H_2O} \\rightarrow \\mathrm{Cu(OH)_2}\\downarrow + \\mathrm{(CH_3NH_3)_2SO_4}',
      },
    ),
    biuret: out(
      true,
      'Dung dịch xanh lam đậm',
      'kết tủa tan, tạo dung dịch màu xanh lam đậm, không có màu tím',
      COLORS.deepBlue,
      'Methylamine tạo phức chất tan màu xanh lam đậm với copper(II); nó không có liên kết peptide nên không cho màu tím.',
    ),
  },
  aniline: {
    quy: out(
      false,
      'Quỳ không đổi màu',
      'quỳ tím không đổi màu',
      COLORS.litmus,
      'Aniline có tính base rất yếu (yếu hơn ammonia nhiều): vòng benzene hút cặp electron của nguyên tử N.',
    ),
    hcl: out(
      true,
      'Aniline tan, dung dịch trong suốt',
      'aniline tan dần, tạo dung dịch đồng nhất trong suốt',
      COLORS.clear,
      'Aniline vẫn có tính base, phản ứng với HCl tạo muối phenylammonium chloride tan trong nước.',
      { tex: '\\mathrm{C_6H_5NH_2} + \\mathrm{HCl} \\rightarrow \\mathrm{C_6H_5NH_3Cl}' },
    ),
    bromine: out(
      true,
      'Kết tủa trắng',
      'nước bromine mất màu, xuất hiện kết tủa trắng',
      COLORS.clear,
      'Nhóm $\\mathrm{{-}NH_2}$ làm phản ứng thế ở vòng benzene xảy ra dễ dàng tại các vị trí 2, 4, 6, tạo 2,4,6-tribromoaniline kết tủa trắng.',
      {
        precipitate: COLORS.white,
        amount: 0.6,
        tex: '\\mathrm{C_6H_5NH_2} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3NH_2}\\downarrow + 3\\mathrm{HBr}',
      },
    ),
    cuso4: out(
      false,
      'Không có dung dịch xanh lam đậm',
      'không tạo dung dịch xanh lam đậm',
      COLORS.paleBlue,
      'Tính base của aniline quá yếu để tạo kết tủa và phức chất với ion $\\mathrm{Cu^{2+}}$ như methylamine.',
    ),
    biuret: out(
      false,
      'Kết tủa xanh không tan',
      'kết tủa xanh $\\mathrm{Cu(OH)_2}$ không tan',
      COLORS.paleBlue,
      'Aniline không hoà tan được $\\mathrm{Cu(OH)_2}$ và không có liên kết peptide.',
      { precipitate: COLORS.blue, amount: 0.4 },
    ),
  },
  glycine: {
    quy: out(
      false,
      'Quỳ không đổi màu',
      'quỳ tím không đổi màu',
      COLORS.litmus,
      'Glycine có một nhóm $\\mathrm{{-}NH_2}$ và một nhóm $\\mathrm{{-}COOH}$; trong dung dịch nó tồn tại chủ yếu ở dạng ion lưỡng cực, gần như trung tính.',
    ),
    bromine: out(
      false,
      'Không có kết tủa trắng',
      'không có kết tủa trắng',
      COLORS.bromine,
      'Glycine không có vòng benzene.',
    ),
    biuret: out(
      false,
      'Dung dịch xanh lam, không có màu tím',
      'kết tủa tan tạo dung dịch xanh lam, không có màu tím',
      COLORS.blue,
      NO_VIOLET_AMINO,
    ),
  },
  'gly-ala': {
    biuret: out(
      false,
      'Không có màu tím',
      'không xuất hiện màu tím',
      COLORS.blue,
      'Dipeptide chỉ có một liên kết peptide, chưa đủ để có phản ứng màu biuret.',
    ),
    hno3: out(
      false,
      'Không có kết tủa vàng',
      'không có kết tủa vàng',
      COLORS.clear,
      'Gly-Ala không có gốc amino acid chứa vòng benzene và không phải protein.',
    ),
    heat: out(
      false,
      'Không đông tụ',
      'dung dịch vẫn trong suốt',
      COLORS.clear,
      'Peptide ngắn không có cấu trúc không gian của protein nên không đông tụ.',
    ),
  },
  'gly-ala-gly': {
    quy: out(
      false,
      'Quỳ không đổi màu',
      'quỳ tím không đổi màu',
      COLORS.litmus,
      'Tripeptide này có một nhóm $\\mathrm{{-}NH_2}$ ở đầu N và một nhóm $\\mathrm{{-}COOH}$ ở đầu C.',
    ),
    bromine: out(
      false,
      'Không có kết tủa trắng',
      'không có kết tủa trắng',
      COLORS.bromine,
      'Gly-Ala-Gly không có vòng benzene.',
    ),
    biuret: out(
      true,
      'Màu tím',
      'xuất hiện màu tím đặc trưng',
      COLORS.violet,
      'Tripeptide có hai liên kết peptide nên có phản ứng màu biuret.',
    ),
    hno3: out(
      false,
      'Không có kết tủa vàng',
      'không có kết tủa vàng',
      COLORS.clear,
      'Gly-Ala-Gly không có gốc amino acid chứa vòng benzene.',
    ),
    heat: out(
      false,
      'Không đông tụ',
      'dung dịch vẫn trong suốt',
      COLORS.clear,
      'Peptide ngắn không đông tụ khi đun nóng.',
    ),
  },
  albumin: {
    biuret: out(
      true,
      'Màu tím',
      'xuất hiện màu tím đặc trưng',
      COLORS.violet,
      'Protein có rất nhiều liên kết peptide nên có phản ứng màu biuret.',
    ),
    hno3: out(
      true,
      'Kết tủa vàng',
      'xuất hiện chất rắn màu vàng',
      COLORS.paleYellow,
      'Một phần do nitro hoá vòng benzene trong các gốc amino acid có vòng thơm, một phần do protein bị đông tụ trong acid.',
      { precipitate: COLORS.yellow, amount: 0.5 },
    ),
    heat: out(
      true,
      'Đông tụ',
      'lòng trắng trứng đông tụ thành chất rắn màu trắng',
      COLORS.cloudy,
      'Nhiệt làm thay đổi cấu trúc không gian của protein, protein bị đông tụ.',
      { precipitate: COLORS.white, amount: 0.7 },
    ),
  },
};

/**
 * @param {string} id
 * @returns {Substance}
 */
export function substance(id) {
  const s = SUBSTANCES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown substance ${id}`);
  return s;
}

/**
 * @param {string} id
 */
export function reagent(id) {
  const r = REAGENTS.find((x) => x.id === id);
  if (!r) throw new Error(`unknown reagent ${id}`);
  return r;
}

/**
 * What the tube shows for this substance and reagent.
 * @param {SubstanceId} id
 * @param {ReagentId} reagentId
 * @returns {Observation}
 */
export function observe(id, reagentId) {
  const o = TABLE[id]?.[reagentId];
  if (!o) throw new Error(`no observation for ${id} with ${reagentId}`);
  return o;
}
