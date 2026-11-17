/**
 * The life cycle of aluminium drink cans, from bauxite to a new can, and the
 * energy a recycling loop saves. The figures are rounded estimates for
 * comparison: about 45 kWh for 1 kg of aluminium made from ore (mining,
 * refining alumina, molten-salt electrolysis), and only about 5% of that to
 * remelt 1 kg of scrap. A can weighs about 15 g, and about 4 kg of bauxite
 * gives 1 kg of aluminium.
 */
import { tidy } from '#lib/core/number-format.js';

/** Mass of one empty can (g). */
export const CAN_MASS = 15;
/** Energy for 1 kg of aluminium from ore (kWh). */
export const PRIMARY_KWH = 45;
/** Share of that energy needed to remelt scrap. */
export const RECYCLE_SHARE = 0.05;
/** Energy for 1 kg of aluminium remelted from scrap (kWh). */
export const RECYCLED_KWH = tidy(PRIMARY_KWH * RECYCLE_SHARE, 6);
/** Bauxite mined for 1 kg of aluminium (kg). */
export const BAUXITE_PER_KG = 4;

/**
 * @typedef {object} Stage
 * @property {string} id
 * @property {string} name
 * @property {'primary' | 'recycled' | 'both'} path which route passes the stage
 * @property {string} detail what happens there (rich text)
 */

/** @type {Stage[]} */
export const STAGES = [
  {
    id: 'khai-thac',
    name: 'Khai thác bauxite',
    path: 'primary',
    detail:
      'Quặng bauxite (thành phần chính $\\mathrm{Al_2O_3}$) được khai thác lộ thiên: phải bóc lớp đất mặt, phá rừng, tạo ra nhiều bụi và đất đá thải. Khoảng $4$ tấn quặng mới cho $1$ tấn nhôm.',
  },
  {
    id: 'alumina',
    name: 'Tinh chế alumina',
    path: 'primary',
    detail:
      'Quặng được hoà tách bằng dung dịch NaOH đặc, nóng để lấy $\\mathrm{Al_2O_3}$ tinh khiết. Tạp chất ($\\mathrm{Fe_2O_3}$…) thải ra thành "bùn đỏ" có tính kiềm, phải chứa trong hồ thải.',
  },
  {
    id: 'dien-phan',
    name: 'Điện phân nóng chảy',
    path: 'primary',
    detail:
      'Điện phân $\\mathrm{Al_2O_3}$ hoà tan trong cryolite nóng chảy (khoảng $950$ °C): $2\\mathrm{Al_2O_3} \\to 4\\mathrm{Al} + 3\\mathrm{O_2}$. Đây là công đoạn tốn điện nhất của cả chuỗi; anode carbon cháy tạo ra $\\mathrm{CO_2}$.',
  },
  {
    id: 'can-dap',
    name: 'Cán, dập lon',
    path: 'both',
    detail:
      'Thỏi nhôm (từ quặng hoặc từ phế liệu) được cán thành tấm mỏng rồi dập, kéo thành vỏ lon, sơn và in nhãn.',
  },
  {
    id: 'su-dung',
    name: 'Đóng gói, sử dụng',
    path: 'both',
    detail:
      'Lon được rót đồ uống, phân phối và dùng chỉ trong vài tuần. Sau đó lon rỗng hoặc bị vứt vào bãi rác, hoặc đi vào vòng tái chế.',
  },
  {
    id: 'thu-gom',
    name: 'Thu gom, phân loại',
    path: 'recycled',
    detail:
      'Lon rỗng được thu gom, tách khỏi rác khác; nam châm hút riêng lon thép, dòng điện xoáy đẩy lon nhôm ra khỏi băng chuyền. Lon được ép thành kiện.',
  },
  {
    id: 'nau-chay',
    name: 'Nấu chảy, đúc thỏi',
    path: 'recycled',
    detail:
      'Lon được băm nhỏ, đốt bỏ lớp sơn, rồi nấu chảy ở khoảng $700$ – $750$ °C (nhôm nóng chảy ở $660$ °C), vớt xỉ, chỉnh thành phần hợp kim và đúc thành thỏi. Không cần điện phân nên chỉ tốn khoảng $5\\%$ năng lượng.',
  },
];

/**
 * Energy and ore for making a number of cans when a share of the metal comes
 * back from recycled cans.
 * @param {{ cans: number, rate: number }} input rate in percent, 0 to 100
 */
export function canBudget({ cans, rate }) {
  const share = Math.min(100, Math.max(0, rate)) / 100;
  const mass = (cans * CAN_MASS) / 1000;
  const recycled = mass * share;
  const primary = mass - recycled;
  const energy = primary * PRIMARY_KWH + recycled * RECYCLED_KWH;
  const allPrimary = mass * PRIMARY_KWH;
  return {
    /** kg of aluminium in the cans */
    mass: tidy(mass, 6),
    recycled: tidy(recycled, 6),
    primary: tidy(primary, 6),
    /** kWh actually used */
    energy: tidy(energy, 6),
    /** kWh if every can came from ore */
    allPrimary: tidy(allPrimary, 6),
    saved: tidy(allPrimary - energy, 6),
    /** kg of bauxite still mined */
    bauxite: tidy(primary * BAUXITE_PER_KG, 6),
  };
}

/**
 * What the recycling rate means.
 * @param {number} rate percent
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function rateVerdict(rate) {
  if (rate <= 0) {
    return {
      tone: 'warn',
      text: 'Không lon nào được tái chế: toàn bộ nhôm phải đi lại từ mỏ bauxite qua điện phân nóng chảy, còn lon cũ thành rác.',
    };
  }
  if (rate < 50) {
    return {
      tone: 'info',
      text: 'Phần lớn nhôm vẫn phải làm từ quặng. Mỗi phần trăm lon được thu gom lại bớt được một phần điện phân, công đoạn tốn năng lượng nhất.',
    };
  }
  if (rate < 100) {
    return {
      tone: 'ok',
      text: 'Phần lớn nhôm đi theo vòng tái chế: chỉ nấu chảy lại ở khoảng $700$ °C thay vì khai thác, tinh chế và điện phân, nên năng lượng giảm mạnh.',
    };
  }
  return {
    tone: 'ok',
    text: 'Vòng khép kín: mọi lon đều được tái chế, nhôm có thể tái chế nhiều lần mà không giảm chất lượng. Thực tế luôn hao hụt một ít khi nấu chảy, nên vẫn cần bổ sung nhôm mới.',
  };
}

/** Scrap for the sorting game: magnet first, then tell aluminium from copper. */
export const SCRAP_BINS = [
  { id: 'sat-thep', label: 'Sắt, thép (bị nam châm hút)' },
  { id: 'nhom', label: 'Nhôm' },
  { id: 'dong', label: 'Đồng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const SCRAP_CARDS = [
  {
    id: 'lon-nuoc-ngot',
    label: 'Vỏ lon nước ngọt',
    bin: 'nhom',
    why: 'Lon nước ngọt làm bằng hợp kim nhôm: nhẹ, không bị nam châm hút.',
  },
  {
    id: 'thep-xay-dung',
    label: 'Đầu mẩu thép xây dựng',
    bin: 'sat-thep',
    why: 'Thép là hợp kim của sắt với carbon, bị nam châm hút mạnh.',
  },
  {
    id: 'loi-day-dien',
    label: 'Lõi dây điện màu đỏ',
    bin: 'dong',
    why: 'Lõi dây điện thường bằng đồng vì đồng dẫn điện rất tốt; đồng có màu đỏ, không bị nam châm hút.',
  },
  {
    id: 'khung-cua',
    label: 'Khung cửa sổ nhẹ, màu trắng bạc',
    bin: 'nhom',
    why: 'Khung cửa nhôm kính nhẹ, bền, không gỉ, không bị nam châm hút.',
  },
  {
    id: 'hop-sua',
    label: 'Vỏ hộp sữa đặc (sắt tây)',
    bin: 'sat-thep',
    why: 'Sắt tây là thép lá mạ thiếc, vẫn bị nam châm hút.',
  },
  {
    id: 'ong-dieu-hoa',
    label: 'Ống dẫn gas của máy điều hoà, màu đỏ',
    bin: 'dong',
    why: 'Ống đồng dẫn nhiệt tốt, dễ uốn, dùng trong máy điều hoà, tủ lạnh.',
  },
  {
    id: 'noi-gang',
    label: 'Chảo gang vỡ',
    bin: 'sat-thep',
    why: 'Gang là hợp kim của sắt chứa nhiều carbon, bị nam châm hút.',
  },
  {
    id: 'mam-xe',
    label: 'Vành (la-zăng) đúc của xe máy, rất nhẹ',
    bin: 'nhom',
    why: 'Vành đúc xe máy thường bằng hợp kim nhôm: nhẹ, không bị nam châm hút.',
  },
];
