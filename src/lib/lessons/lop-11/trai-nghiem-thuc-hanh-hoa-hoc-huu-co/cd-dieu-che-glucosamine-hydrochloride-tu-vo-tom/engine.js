/**
 * From shrimp shells to glucosamine hydrochloride. Dry shells are taken as
 * a mix of calcium carbonate, protein, chitin and pigments with fat (a
 * typical composition; real shells vary). Each step of the procedure takes
 * one part away, then concentrated hydrochloric acid hydrolyses the chitin:
 *
 *   (C8H13O5N)n + 2n H2O + n HCl → n C6H13O5N·HCl + n CH3COOH
 *
 * Molar masses use the book's atomic masses (C 12, H 1, O 16, N 14,
 * Cl 35,5, Ca 40).
 */
import { tidy } from '#lib/core/number-format.js';

export const M_CHITIN_UNIT = 203;
export const M_GLUCOSAMINE_HCL = 215.5;
export const M_CACO3 = 100;
export const M_HCL = 36.5;
/** Molar volume of a gas at standard conditions, 25 °C and 1 bar (L/mol). */
export const MOLAR_VOLUME = 24.79;

/** Typical composition of 100 g of dry shrimp shell (g). */
export const SHELL = { caco3: 35, protein: 35, chitin: 22, pigment: 8 };

export const PART_NAMES = {
  caco3: 'Muối khoáng (chủ yếu CaCO₃)',
  protein: 'Protein',
  chitin: 'Chitin',
  pigment: 'Sắc tố, chất béo',
  product: 'Glucosamine hydrochloride',
};

export const PART_COLORS = {
  caco3: '#cbd5e1',
  protein: '#fca5a5',
  chitin: '#fde68a',
  pigment: '#fb923c',
  product: '#a5b4fc',
};

/**
 * Glucosamine hydrochloride (g) from a mass of chitin, in theory.
 * @param {number} chitin g
 */
export function glucosamineFrom(chitin) {
  return tidy((chitin / M_CHITIN_UNIT) * M_GLUCOSAMINE_HCL, 6);
}

/**
 * Carbon dioxide (L, standard conditions) from a mass of calcium carbonate.
 * @param {number} caco3 g
 */
export function co2From(caco3) {
  return tidy((caco3 / M_CACO3) * MOLAR_VOLUME, 6);
}

/**
 * Mass (g) of hydrochloric acid solution that dissolves a mass of calcium
 * carbonate exactly.
 * @param {number} caco3 g
 * @param {number} percent HCl concentration, %
 */
export function acidFor(caco3, percent) {
  const hcl = (caco3 / M_CACO3) * 2 * M_HCL;
  return tidy((hcl * 100) / percent, 6);
}

/** @typedef {keyof typeof PART_NAMES} PartKey */

/**
 * What is left after `done` steps of the procedure, starting from `shell`
 * grams of dry shell; `yieldPct` applies to the crystallisation.
 * @param {number} done steps finished (0 – 6)
 * @param {number} shell g of dry shell
 * @param {number} yieldPct %
 * @returns {{ parts: Array<{ key: PartKey, mass: number }>, state: string }}
 */
export function stageOf(done, shell, yieldPct) {
  const k = shell / 100;
  const caco3 = SHELL.caco3 * k;
  const protein = SHELL.protein * k;
  const chitin = SHELL.chitin * k;
  const pigment = SHELL.pigment * k;
  const product = glucosamineFrom(chitin);
  /** @type {Array<{ key: PartKey, mass: number }>} */
  let parts;
  let state;
  if (done <= 0) {
    parts = [
      { key: 'caco3', mass: caco3 },
      { key: 'protein', mass: protein },
      { key: 'chitin', mass: chitin },
      { key: 'pigment', mass: pigment },
    ];
    state = 'Vỏ tôm khô, đã xay nhỏ';
  } else if (done === 1) {
    parts = [
      { key: 'protein', mass: protein },
      { key: 'chitin', mass: chitin },
      { key: 'pigment', mass: pigment },
    ];
    state = 'Vỏ tôm đã khử khoáng, rửa đến trung tính';
  } else if (done === 2) {
    parts = [
      { key: 'chitin', mass: chitin },
      { key: 'pigment', mass: pigment },
    ];
    state = 'Vỏ tôm đã khử protein, rửa đến trung tính';
  } else if (done === 3) {
    parts = [{ key: 'chitin', mass: chitin }];
    state = 'Chitin thô màu trắng ngà';
  } else if (done === 4) {
    parts = [{ key: 'product', mass: product }];
    state = 'Dung dịch glucosamine hydrochloride có màu vàng nâu (tính theo lí thuyết)';
  } else if (done === 5) {
    parts = [{ key: 'product', mass: product }];
    state = 'Dung dịch đã khử màu, trong suốt (tính theo lí thuyết)';
  } else {
    parts = [{ key: 'product', mass: (product * yieldPct) / 100 }];
    state = `Tinh thể glucosamine hydrochloride màu trắng (hiệu suất ${yieldPct}%)`;
  }
  return { parts: parts.map((p) => ({ ...p, mass: tidy(p.mass, 6) })), state };
}

/**
 * The procedure of the lesson, one decision per step, for the step quiz.
 * @type {import('../_shared/step-quiz.js').Step[]}
 */
export const GLUCOSAMINE_STEPS = [
  {
    title: 'Khử khoáng',
    question: 'Ngâm vỏ tôm khô trong dung dịch nào để loại các muối khoáng?',
    options: [
      {
        label: 'Dung dịch NaOH $4\\%$.',
        why: 'Kiềm không hoà tan được $\\mathrm{CaCO_3}$; nó dùng để loại protein ở bước sau.',
      },
      {
        label: 'Dung dịch HCl $10\\%$, ngâm khoảng $1$ giờ ở nhiệt độ phòng.',
        ok: true,
        why: 'Acid hoà tan muối carbonate: $\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\to \\mathrm{CaCl_2} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}$, nên có sủi bọt khí.',
      },
      {
        label: 'Nước cất.',
        why: 'Calcium carbonate không tan trong nước.',
      },
    ],
    result: 'Rửa vỏ tôm bằng nước đến khi trung tính.',
  },
  {
    title: 'Khử protein',
    question: 'Đun vỏ tôm đã khử khoáng với dung dịch nào để loại protein?',
    options: [
      {
        label: 'Dung dịch NaOH $4\\%$, đun nóng.',
        ok: true,
        why: 'Kiềm loãng, nóng thuỷ phân protein thành các chất tan, chitin gần như không bị ảnh hưởng.',
      },
      {
        label: 'Dung dịch HCl đặc, đun sôi.',
        why: 'HCl đặc nóng sẽ thuỷ phân luôn chitin cùng với protein, sản phẩm lẫn nhiều tạp chất.',
      },
      {
        label: 'Than hoạt tính.',
        why: 'Than hoạt tính chỉ hấp phụ chất màu, không loại được protein.',
      },
    ],
    result: 'Rửa đến trung tính; phần rắn còn lại là chitin lẫn sắc tố.',
  },
  {
    title: 'Khử màu chitin',
    question: 'Loại sắc tố (astaxanthin màu đỏ cam) và chất béo còn lẫn bằng cách nào?',
    options: [
      {
        label: 'Ngâm trong dung dịch NaCl bão hoà.',
        why: 'Nước muối không hoà tan hay phá huỷ được sắc tố.',
      },
      {
        label: 'Ngâm trong dung dịch $\\mathrm{H_2O_2}$ $1\\%$, rửa thêm bằng acetone.',
        ok: true,
        why: '$\\mathrm{H_2O_2}$ oxi hoá làm mất màu sắc tố; acetone hoà tan sắc tố và chất béo.',
      },
      {
        label: 'Phơi nắng trong một năm.',
        why: 'Quá chậm và chitin dễ bị nấm mốc, phân huỷ.',
      },
    ],
    result: 'Thu được chitin màu trắng ngà; sấy khô, nghiền nhỏ.',
  },
  {
    title: 'Thuỷ phân chitin',
    question: 'Chuyển chitin thành glucosamine hydrochloride bằng cách nào?',
    options: [
      {
        label: 'Ngâm trong HCl $10\\%$ ở nhiệt độ phòng.',
        why: 'Acid loãng, nguội chỉ hoà tan được muối carbonate, không cắt được mạch chitin.',
      },
      {
        label: 'Đun sôi với dung dịch NaOH đặc.',
        why: 'Kiềm đặc nóng chỉ cắt nhóm acetyl, biến chitin thành chitosan, không tạo glucosamine hydrochloride.',
      },
      {
        label: 'Đun hồi lưu với HCl đặc trong bình cầu có ống sinh hàn, làm trong tủ hút.',
        ok: true,
        why: 'HCl đặc nóng cắt các liên kết trong mạch và nhóm acetyl: $\\mathrm{(C_8H_{13}O_5N)_n} + 2n\\mathrm{H_2O} + n\\mathrm{HCl} \\to n\\mathrm{C_6H_{13}O_5N{\\cdot}HCl} + n\\mathrm{CH_3COOH}$.',
      },
    ],
    result: 'Chitin tan dần, thu được dung dịch màu vàng nâu.',
  },
  {
    title: 'Khử màu dung dịch',
    question: 'Làm dung dịch sau thuỷ phân hết màu bằng cách nào?',
    options: [
      {
        label: 'Cho than hoạt tính vào từ từ, khuấy, rồi lọc.',
        ok: true,
        why: 'Than hoạt tính xốp, có diện tích bề mặt rất lớn, hấp phụ các chất màu.',
      },
      {
        label: 'Thêm $\\mathrm{H_2SO_4}$ đặc.',
        why: 'Acid sulfuric đặc háo nước, làm than hoá chất hữu cơ, dung dịch càng sẫm màu.',
      },
      {
        label: 'Đun cạn ngay đến khô.',
        why: 'Chất màu vẫn còn, lẫn vào sản phẩm.',
      },
    ],
    result: 'Dung dịch trong, gần như không màu.',
  },
  {
    title: 'Kết tinh và thu sản phẩm',
    question: 'Thu tinh thể glucosamine hydrochloride như thế nào?',
    options: [
      {
        label: 'Rửa tinh thể bằng thật nhiều nước.',
        why: 'Glucosamine hydrochloride tan tốt trong nước, rửa bằng nước sẽ mất phần lớn sản phẩm.',
      },
      {
        label: 'Đun đến khi cháy khô cả cặn.',
        why: 'Sản phẩm bị phân huỷ, than hoá.',
      },
      {
        label:
          'Để nguội qua đêm (làm lạnh bằng nước đá nếu chưa kết tinh), lọc lấy tinh thể, rửa bằng cồn $96^\\circ$.',
        ok: true,
        why: 'Độ tan giảm khi lạnh nên tinh thể tách ra; cồn rửa sạch acid còn bám mà ít hoà tan sản phẩm.',
      },
    ],
    result: 'Thu được tinh thể glucosamine hydrochloride màu trắng.',
  },
];
