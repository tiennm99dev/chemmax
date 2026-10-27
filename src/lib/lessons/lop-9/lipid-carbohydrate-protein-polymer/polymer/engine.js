/**
 * Polymers built from monomers by opening their C=C double bond
 * (n CH2=CH2 → (–CH2–CH2–)n): the polymer's molecular mass is n times the
 * monomer's, and the materials made from polymers (plastics, fibres, rubber,
 * composites) for the sorting game.
 */
import { moleculeMassAmu } from '#lib/domain/book-mass.js';

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   formula: string,
 *   monomer: string,
 *   unit: string,
 *   polymer: string,
 *   short: string,
 *   uses: string,
 * }} Monomer
 */

/** @type {Monomer[]} */
export const MONOMERS = [
  {
    id: 'ethylene',
    name: 'Ethylene',
    formula: 'C2H4',
    monomer: 'CH₂=CH₂',
    unit: '–CH₂–CH₂–',
    polymer: 'Polyethylene',
    short: 'PE',
    uses: 'túi, màng bọc thực phẩm, chai lọ, ống nhựa, vỏ bọc dây điện',
  },
  {
    id: 'propylene',
    name: 'Propylene',
    formula: 'C3H6',
    monomer: 'CH₂=CH–CH₃',
    unit: '–CH₂–CH(CH₃)–',
    polymer: 'Polypropylene',
    short: 'PP',
    uses: 'hộp đựng thực phẩm, cốc, đồ gia dụng',
  },
  {
    id: 'vinyl-chloride',
    name: 'Vinyl chloride',
    formula: 'C2H3Cl',
    monomer: 'CH₂=CHCl',
    unit: '–CH₂–CHCl–',
    polymer: 'Poly(vinyl chloride)',
    short: 'PVC',
    uses: 'ống dẫn nước, vỏ bọc dây điện, áo mưa',
  },
];

/** @param {string} id */
export function monomer(id) {
  const m = MONOMERS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown monomer ${id}`);
  return m;
}

/**
 * Molar mass of the monomer, which is also the mass of one repeating unit.
 * @param {string} id
 */
export function unitMass(id) {
  return moleculeMassAmu(monomer(id).formula);
}

/**
 * Molecular mass of a polymer chain of `n` units, amu.
 * @param {string} id
 * @param {number} n
 */
export function polymerMass(id, n) {
  return Math.round(unitMass(id) * n * 1000) / 1000;
}

/**
 * Number of units (degree of polymerisation) in a chain of the given mass.
 * @param {string} id
 * @param {number} mass
 */
export function unitsIn(id, mass) {
  return mass / unitMass(id);
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const MATERIAL_BINS = [
  { id: 'chat-deo', label: 'Chất dẻo' },
  { id: 'to', label: 'Tơ' },
  { id: 'cao-su', label: 'Cao su' },
  { id: 'composite', label: 'Vật liệu composite' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const MATERIAL_CARDS = [
  {
    id: 'tui-pe',
    label: 'Túi đựng hàng bằng PE',
    bin: 'chat-deo',
    why: 'Polyethylene được ép, thổi thành màng mỏng và giữ nguyên hình dạng: đó là chất dẻo.',
  },
  {
    id: 'ong-pvc',
    label: 'Ống nước PVC',
    bin: 'chat-deo',
    why: 'PVC được đúc thành ống khi đun nóng và giữ nguyên hình dạng sau khi nguội: chất dẻo.',
  },
  {
    id: 'hop-pp',
    label: 'Hộp đựng thức ăn PP',
    bin: 'chat-deo',
    why: 'Polypropylene là chất dẻo dùng làm hộp, cốc.',
  },
  {
    id: 'to-tam',
    label: 'Khăn lụa tơ tằm',
    bin: 'to',
    why: 'Tơ tằm là tơ thiên nhiên (protein), kéo được thành sợi mảnh.',
  },
  {
    id: 'soi-bong',
    label: 'Sợi bông',
    bin: 'to',
    why: 'Bông là tơ thiên nhiên, thành phần chính là cellulose.',
  },
  {
    id: 'nylon',
    label: 'Dây dù nylon',
    bin: 'to',
    why: 'Nylon là tơ tổng hợp: polymer mạch không phân nhánh kéo thành sợi.',
  },
  {
    id: 'len',
    label: 'Áo len lông cừu',
    bin: 'to',
    why: 'Len là tơ thiên nhiên có bản chất protein.',
  },
  {
    id: 'lop-xe',
    label: 'Lốp xe đạp',
    bin: 'cao-su',
    why: 'Lốp xe làm từ cao su: bị kéo dãn rồi trở lại hình dạng ban đầu.',
  },
  {
    id: 'gang-tay',
    label: 'Găng tay rửa bát',
    bin: 'cao-su',
    why: 'Găng tay cao su đàn hồi, không thấm nước.',
  },
  {
    id: 'thuyen',
    label: 'Vỏ thuyền nhựa cốt sợi thuỷ tinh',
    bin: 'composite',
    why: 'Sợi thuỷ tinh (vật liệu cốt) được polymer (vật liệu nền) gắn kết lại: vật liệu composite.',
  },
  {
    id: 'bon-nuoc',
    label: 'Bồn chứa nước composite',
    bin: 'composite',
    why: 'Bồn composite gồm sợi gia cường liên kết trong nền polymer.',
  },
];
