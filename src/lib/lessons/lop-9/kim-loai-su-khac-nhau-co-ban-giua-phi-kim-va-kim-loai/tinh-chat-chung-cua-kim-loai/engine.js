/**
 * A virtual bench for the general chemical properties of metals: pick one of
 * seven metals and one reagent (oxygen or chlorine on heating, water at room
 * temperature, dilute hydrochloric acid, copper(II) sulfate or silver nitrate
 * solution) and read whether a reaction happens, what is seen and the
 * equation, written the way the book prints it.
 */

/** @typedef {'Na' | 'Mg' | 'Al' | 'Zn' | 'Fe' | 'Cu' | 'Ag'} MetalId */
/** @typedef {'O2' | 'Cl2' | 'H2O' | 'HCl' | 'CuSO4' | 'AgNO3'} ReagentId */

/**
 * @typedef {object} Metal
 * @property {MetalId} id
 * @property {string} name Vietnamese name with the symbol
 * @property {string} color colour of the metal piece
 */

/** @type {Metal[]} */
export const METALS = [
  { id: 'Na', name: 'Sodium (Na)', color: '#e2e8f0' },
  { id: 'Mg', name: 'Magnesium (Mg)', color: '#cbd5e1' },
  { id: 'Al', name: 'Nhôm (Al)', color: '#d1d5db' },
  { id: 'Zn', name: 'Kẽm (Zn)', color: '#94a3b8' },
  { id: 'Fe', name: 'Sắt (Fe)', color: '#475569' },
  { id: 'Cu', name: 'Đồng (Cu)', color: '#c2410c' },
  { id: 'Ag', name: 'Bạc (Ag)', color: '#e5e7eb' },
];

/**
 * @typedef {object} Reagent
 * @property {ReagentId} id
 * @property {string} label short label for the switch
 * @property {string} group which property of metals it shows
 * @property {boolean} heated whether the metal is heated (t° over the arrow)
 */

/** @type {Reagent[]} */
export const REAGENTS = [
  { id: 'O2', label: 'Oxygen', group: 'Tác dụng với phi kim', heated: true },
  { id: 'Cl2', label: 'Chlorine', group: 'Tác dụng với phi kim', heated: true },
  { id: 'H2O', label: 'Nước', group: 'Tác dụng với nước', heated: false },
  { id: 'HCl', label: 'Dung dịch HCl', group: 'Tác dụng với dung dịch acid', heated: false },
  { id: 'CuSO4', label: 'Dung dịch CuSO₄', group: 'Tác dụng với dung dịch muối', heated: false },
  { id: 'AgNO3', label: 'Dung dịch AgNO₃', group: 'Tác dụng với dung dịch muối', heated: false },
];

/**
 * What the bench shows.
 * - `flame`: the metal burns in a gas jar.
 * - `gas`: bubbles of hydrogen.
 * - `coat`: a metal (copper, silver) builds up on the piece.
 * - `none`: nothing changes.
 * @typedef {'flame' | 'gas' | 'coat' | 'none'} Sign
 */

/**
 * @typedef {object} Outcome
 * @property {boolean} reacts
 * @property {string | null} equation book-style equation, null when nothing reacts
 * @property {boolean} heated
 * @property {Sign} sign
 * @property {string} seen what is observed, in Vietnamese
 * @property {string} why the rule behind it, in Vietnamese
 * @property {string} [solution] colour of the liquid at the end
 * @property {string} [deposit] colour of the metal deposited on the piece
 * @property {string} [flameColor]
 * @property {string} [residue] colour of the solid product left in the spoon after burning
 */

const BLUE = '#93c5fd';
const CLEAR = '#e0f2fe';
const COPPER = '#b45309';
const SILVER = '#9ca3af';

/** @type {Record<MetalId, string>} */
const OXIDE = {
  Na: '4Na + O2 → 2Na2O',
  Mg: '2Mg + O2 → 2MgO',
  Al: '4Al + 3O2 → 2Al2O3',
  Zn: '2Zn + O2 → 2ZnO',
  Fe: '3Fe + 2O2 → Fe3O4',
  Cu: '2Cu + O2 → 2CuO',
  Ag: '',
};

/** @type {Record<MetalId, string>} */
const CHLORIDE = {
  Na: '2Na + Cl2 → 2NaCl',
  Mg: 'Mg + Cl2 → MgCl2',
  Al: '2Al + 3Cl2 → 2AlCl3',
  Zn: 'Zn + Cl2 → ZnCl2',
  Fe: '2Fe + 3Cl2 → 2FeCl3',
  Cu: 'Cu + Cl2 → CuCl2',
  Ag: '2Ag + Cl2 → 2AgCl',
};

/** @type {Record<MetalId, string>} */
const WITH_HCL = {
  Na: '2Na + 2HCl → 2NaCl + H2↑',
  Mg: 'Mg + 2HCl → MgCl2 + H2↑',
  Al: '2Al + 6HCl → 2AlCl3 + 3H2↑',
  Zn: 'Zn + 2HCl → ZnCl2 + H2↑',
  Fe: 'Fe + 2HCl → FeCl2 + H2↑',
  Cu: '',
  Ag: '',
};

/** @type {Record<MetalId, string>} */
const WITH_CUSO4 = {
  Na: '',
  Mg: 'Mg + CuSO4 → MgSO4 + Cu',
  Al: '2Al + 3CuSO4 → Al2(SO4)3 + 3Cu',
  Zn: 'Zn + CuSO4 → ZnSO4 + Cu',
  Fe: 'Fe + CuSO4 → FeSO4 + Cu',
  Cu: '',
  Ag: '',
};

/** @type {Record<MetalId, string>} */
const WITH_AGNO3 = {
  Na: '',
  Mg: 'Mg + 2AgNO3 → Mg(NO3)2 + 2Ag',
  Al: 'Al + 3AgNO3 → Al(NO3)3 + 3Ag',
  Zn: 'Zn + 2AgNO3 → Zn(NO3)2 + 2Ag',
  Fe: 'Fe + 2AgNO3 → Fe(NO3)2 + 2Ag',
  Cu: 'Cu + 2AgNO3 → Cu(NO3)2 + 2Ag',
  Ag: '',
};

const SODIUM_WATER = '2Na + 2H2O → 2NaOH + H2↑';

/** @param {MetalId} id */
export function metal(id) {
  return METALS.find((m) => m.id === id) ?? METALS[0];
}

/** @param {ReagentId} id */
export function reagent(id) {
  return REAGENTS.find((r) => r.id === id) ?? REAGENTS[0];
}

/**
 * What happens when `metalId` meets `reagentId` on the bench.
 * @param {MetalId} metalId
 * @param {ReagentId} reagentId
 * @returns {Outcome}
 */
export function outcome(metalId, reagentId) {
  const m = metal(metalId);
  const short = m.name.split(' (')[0];
  const none = (/** @type {string} */ seen, /** @type {string} */ why) => ({
    reacts: false,
    equation: null,
    heated: false,
    sign: /** @type {Sign} */ ('none'),
    seen,
    why,
  });

  switch (reagentId) {
    case 'O2':
      if (metalId === 'Ag') {
        return none(
          'Không có hiện tượng: bạc không cháy, vẫn sáng bóng.',
          'Ag, Au không tác dụng với oxygen.',
        );
      }
      return {
        reacts: true,
        equation: OXIDE[metalId],
        heated: metalId !== 'Na',
        sign: metalId === 'Na' || metalId === 'Cu' ? 'none' : 'flame',
        flameColor: FLAME[metalId],
        residue: OXIDE_COLOR[metalId],
        seen: OXIDE_SEEN[metalId],
        why: 'Kim loại tác dụng với oxygen tạo thành oxide.',
      };
    case 'Cl2':
      return {
        reacts: true,
        equation: CHLORIDE[metalId],
        heated: true,
        sign: metalId === 'Ag' ? 'none' : 'flame',
        flameColor: FLAME[metalId],
        residue: CHLORIDE_COLOR[metalId],
        seen: CHLORIDE_SEEN[metalId],
        why: 'Kim loại tác dụng với chlorine tạo thành muối chloride.',
      };
    case 'H2O':
      if (metalId === 'Na') {
        return {
          reacts: true,
          equation: SODIUM_WATER,
          heated: false,
          sign: 'gas',
          solution: CLEAR,
          seen: 'Mẩu sodium chạy trên mặt nước, tan dần, có khí thoát ra và toả nhiều nhiệt.',
          why: 'K, Na, Ca tác dụng với nước ở nhiệt độ thường tạo base và khí hydrogen.',
        };
      }
      return none(
        `Không có hiện tượng rõ rệt: ${short.toLowerCase()} gần như không tác dụng với nước ở nhiệt độ thường.`,
        metalId === 'Zn' || metalId === 'Fe'
          ? 'Zn, Fe chỉ tác dụng với hơi nước ở nhiệt độ cao, tạo oxide và khí hydrogen.'
          : 'Chỉ những kim loại rất mạnh như K, Na, Ca tác dụng với nước ở nhiệt độ thường.',
      );
    case 'HCl':
      if (!WITH_HCL[metalId]) {
        return none(
          `Không có hiện tượng: ${short.toLowerCase()} không tan, không có bọt khí.`,
          'Cu, Ag, Au không tác dụng với dung dịch HCl, H₂SO₄ loãng.',
        );
      }
      return {
        reacts: true,
        equation: WITH_HCL[metalId],
        heated: false,
        sign: 'gas',
        solution: metalId === 'Fe' ? '#d9f99d' : CLEAR,
        seen:
          metalId === 'Na'
            ? 'Phản ứng rất mãnh liệt, có thể gây nổ: không làm thí nghiệm này trong phòng học.'
            : `Mẩu ${short.toLowerCase()} tan dần, có bọt khí hydrogen không màu thoát ra${metalId === 'Fe' ? ', dung dịch chuyển dần sang màu lục nhạt' : ''}.`,
        why: 'Nhiều kim loại tác dụng với dung dịch acid tạo muối và khí hydrogen.',
      };
    default:
      return saltOutcome(metalId, reagentId, short);
  }
}

/**
 * @param {MetalId} metalId
 * @param {'CuSO4' | 'AgNO3'} salt
 * @param {string} short
 * @returns {Outcome}
 */
function saltOutcome(metalId, salt, short) {
  const start = salt === 'CuSO4' ? BLUE : CLEAR;
  if (metalId === 'Na') {
    return {
      reacts: true,
      equation: SODIUM_WATER,
      heated: false,
      sign: 'gas',
      solution: start,
      seen: 'Sodium tác dụng với nước trong dung dịch, có khí thoát ra; không thấy kim loại mới bám vào.',
      why: 'K, Na, Ca tác dụng với nước trước nên không đẩy được kim loại ra khỏi dung dịch muối.',
    };
  }
  const equation = (salt === 'CuSO4' ? WITH_CUSO4 : WITH_AGNO3)[metalId];
  if (!equation) {
    const self = (salt === 'CuSO4' && metalId === 'Cu') || (salt === 'AgNO3' && metalId === 'Ag');
    return {
      reacts: false,
      equation: null,
      heated: false,
      sign: 'none',
      solution: start,
      seen: `Không có hiện tượng: mẩu ${short.toLowerCase()} không đổi, dung dịch giữ nguyên màu.`,
      why: self
        ? 'Kim loại không đẩy chính nó ra khỏi dung dịch muối của nó.'
        : `${short} hoạt động hoá học yếu hơn ${salt === 'CuSO4' ? 'đồng' : 'bạc'} nên không đẩy được kim loại ra khỏi muối.`,
    };
  }
  const copper = salt === 'CuSO4';
  const toBlue = copper ? CLEAR : metalId === 'Cu' ? BLUE : CLEAR;
  return {
    reacts: true,
    equation,
    heated: false,
    sign: 'coat',
    solution: toBlue,
    deposit: copper ? COPPER : SILVER,
    seen: copper
      ? `Có chất rắn màu đỏ (đồng) bám ngoài mẩu ${short.toLowerCase()}, màu xanh của dung dịch nhạt dần.`
      : `Có chất rắn màu xám bạc (bạc) bám ngoài mẩu ${short.toLowerCase()}${metalId === 'Cu' ? ', dung dịch chuyển dần sang màu xanh lam' : ''}.`,
    why: `${short} hoạt động hoá học mạnh hơn ${copper ? 'đồng' : 'bạc'} nên đẩy ${copper ? 'đồng' : 'bạc'} ra khỏi dung dịch muối.`,
  };
}

/** @type {Record<MetalId, string>} */
const FLAME = {
  Na: '#facc15',
  Mg: '#f8fafc',
  Al: '#fef3c7',
  Zn: '#bfdbfe',
  Fe: '#fb923c',
  Cu: '#fdba74',
  Ag: '#fde68a',
};

const WHITE = '#f8fafc';

/** Colour of the oxide left after burning; sodium only dulls in air. */
/** @type {Record<MetalId, string>} */
const OXIDE_COLOR = {
  Na: '#94a3b8',
  Mg: WHITE,
  Al: WHITE,
  Zn: WHITE,
  Fe: '#292524',
  Cu: '#1c1917',
  Ag: '',
};

/** Colour of the chloride formed: iron(III) chloride is red-brown, copper(II) chloride brown-yellow. */
/** @type {Record<MetalId, string>} */
const CHLORIDE_COLOR = {
  Na: WHITE,
  Mg: WHITE,
  Al: WHITE,
  Zn: WHITE,
  Fe: '#9a3412',
  Cu: '#a16207',
  Ag: WHITE,
};

/** @type {Record<MetalId, string>} */
const OXIDE_SEEN = {
  Na: 'Mặt cắt sáng bóng của mẩu sodium mờ đi rất nhanh ngay trong không khí: sodium tác dụng với oxygen ở nhiệt độ thường.',
  Mg: 'Magnesium cháy sáng chói, tạo chất bột màu trắng (MgO).',
  Al: 'Bột nhôm rắc vào lửa cháy sáng, tạo chất bột màu trắng (Al₂O₃).',
  Zn: 'Kẽm cháy, tạo chất bột màu trắng (ZnO).',
  Fe: 'Dây sắt nung đỏ cháy sáng, bắn ra tia lửa, tạo chất rắn màu nâu đen (Fe₃O₄).',
  Cu: 'Đồng không cháy thành ngọn lửa; bề mặt đồng bị phủ lớp màu đen (CuO).',
  Ag: '',
};

/** @type {Record<MetalId, string>} */
const CHLORIDE_SEEN = {
  Na: 'Sodium nóng chảy cháy trong chlorine, tạo khói trắng (NaCl).',
  Mg: 'Magnesium cháy trong chlorine, tạo chất rắn màu trắng.',
  Al: 'Nhôm cháy trong chlorine, tạo khói trắng.',
  Zn: 'Kẽm cháy trong chlorine, tạo chất rắn màu trắng.',
  Fe: 'Dây sắt nung đỏ cháy trong chlorine, tạo khói màu nâu đỏ (FeCl₃).',
  Cu: 'Dây đồng nung đỏ cháy trong chlorine, tạo khói màu nâu vàng (CuCl₂).',
  Ag: 'Bạc tác dụng chậm với chlorine khi đun nóng, bề mặt phủ lớp màu trắng (AgCl).',
};
