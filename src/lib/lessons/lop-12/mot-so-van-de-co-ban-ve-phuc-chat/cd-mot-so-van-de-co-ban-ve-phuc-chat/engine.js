/**
 * The complex namer: a centre and a count of each ligand give the formula,
 * charge, coordination number and IUPAC name, with the naming told step by
 * step; and the challenge of building a complex from its name.
 */
import {
  LIGANDS,
  centre,
  chargeText,
  formulaTex,
  ligand,
  nameComplex,
} from '../_shared/complex-data.js';

/** The largest coordination number of the topic. */
export const MAX_CN = 6;

/** @typedef {import('../_shared/complex-data.js').Part} Part */

/** Counts by ligand id to parts, dropping zeros. @param {Record<string, number>} counts */
export const partsOf = (counts) =>
  LIGANDS.filter((l) => (counts[l.id] ?? 0) > 0).map((l) => ({
    ligand: l.id,
    count: counts[l.id],
  }));

/** Usual shape for a coordination number. @param {number} cn */
export function shapeOf(cn) {
  if (cn === 2) return 'thường có dạng đường thẳng';
  if (cn === 4) return 'thường có dạng tứ diện hoặc vuông phẳng';
  if (cn === 6) return 'thường có dạng bát diện';
  return 'ít gặp ở các phức chất trong chuyên đề';
}

/**
 * Everything the namer shows for one build.
 * @param {string} centreId
 * @param {Record<string, number>} counts
 */
export function describe(centreId, counts) {
  const parts = partsOf(counts);
  if (parts.length === 0)
    return { ok: false, text: 'Hãy thêm ít nhất một phối tử vào cầu nội.', naming: null };
  const naming = nameComplex(centreId, parts);
  const c = centre(centreId);
  const sum = parts.map((p) => `${p.count} \\cdot ${ligand(p.ligand).dentate}`).join(' + ');
  const cnTex = `${sum} = ${naming.cn}`;
  if (naming.cn > MAX_CN)
    return {
      ok: false,
      naming,
      text: `Số phối trí $${cnTex}$ vượt quá ${MAX_CN}: quanh $\\mathrm{${c.symbol}^{${c.charge === 1 ? '' : c.charge}+}}$ không đủ chỗ cho chừng ấy liên kết cho – nhận. Bớt phối tử đi.`,
    };
  const steps = [
    `Phối tử theo thứ tự bảng chữ cái của tên, kèm tiền tố số lượng: ${naming.ligandWords.join(' + ')}.`,
    naming.charge < 0
      ? `Phức chất là anion nên tên kim loại thêm đuôi "-ate": ${naming.metalWord}.`
      : `Phức chất là ${naming.kind} nên giữ tên kim loại: ${naming.metalWord}.`,
    `Số oxi hoá của ${c.symbol} viết bằng số La Mã trong ngoặc: ${naming.oxidation}.`,
  ];
  return {
    ok: true,
    naming,
    steps,
    text: `$${formulaTex(naming.formula)}$: điện tích ${chargeText(naming.charge)}, số phối trí $${cnTex}$, ${shapeOf(naming.cn)}.`,
  };
}

/**
 * @typedef {object} Target
 * @property {string} centre
 * @property {Part[]} parts
 */

/** Complexes to build from their names. @type {Target[]} */
export const TARGETS = [
  { centre: 'Ag1', parts: [{ ligand: 'NH3', count: 2 }] },
  { centre: 'Cu2', parts: [{ ligand: 'NH3', count: 4 }] },
  { centre: 'Fe2', parts: [{ ligand: 'CN', count: 6 }] },
  { centre: 'Zn2', parts: [{ ligand: 'OH', count: 4 }] },
  {
    centre: 'Pt2',
    parts: [
      { ligand: 'Cl', count: 2 },
      { ligand: 'NH3', count: 2 },
    ],
  },
  {
    centre: 'Co3',
    parts: [
      { ligand: 'Cl', count: 2 },
      { ligand: 'en', count: 2 },
    ],
  },
  { centre: 'Cr3', parts: [{ ligand: 'C2O4', count: 3 }] },
  { centre: 'Fe3', parts: [{ ligand: 'F', count: 6 }] },
  { centre: 'Ni2', parts: [{ ligand: 'en', count: 3 }] },
  {
    centre: 'Cu2',
    parts: [
      { ligand: 'NH3', count: 4 },
      { ligand: 'H2O', count: 2 },
    ],
  },
  { centre: 'Co3', parts: [{ ligand: 'NH3', count: 6 }] },
  { centre: 'Fe3', parts: [{ ligand: 'CN', count: 6 }] },
];

/** The name a target is shown by. @param {Target} t */
export const targetName = (t) => nameComplex(t.centre, t.parts).name;

/**
 * Checks a build against a target named in words, naming the first thing to fix.
 * @param {Target} target
 * @param {string} centreId
 * @param {Record<string, number>} counts
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(target, centreId, counts) {
  const want = centre(target.centre);
  const got = centre(centreId);
  const name = targetName(target);
  if (got.symbol !== want.symbol)
    return {
      ok: false,
      text: `Phần cuối của tên, "${nameComplex(target.centre, target.parts).metalWord}", chỉ kim loại trung tâm: chọn lại nguyên tử trung tâm.`,
    };
  if (got.charge !== want.charge)
    return {
      ok: false,
      text: `Số La Mã ${nameComplex(target.centre, target.parts).oxidation} trong tên là số oxi hoá (điện tích) của nguyên tử trung tâm.`,
    };
  for (const l of LIGANDS) {
    const need = target.parts.find((p) => p.ligand === l.id)?.count ?? 0;
    const have = counts[l.id] ?? 0;
    if (need === 0 && have > 0)
      return { ok: false, text: `Tên "${name}" không có phối tử ${l.name}.` };
    if (need > 0 && have !== need)
      return {
        ok: false,
        text: `Đọc lại tiền tố đứng trước "${l.name}": cần ${need} phối tử, em đang đặt ${have}.`,
      };
  }
  const n = nameComplex(target.centre, target.parts);
  return {
    ok: true,
    text: `Đúng! "${name}" là $${formulaTex(n.formula)}$, điện tích ${chargeText(n.charge)}, số phối trí ${n.cn}.`,
  };
}
