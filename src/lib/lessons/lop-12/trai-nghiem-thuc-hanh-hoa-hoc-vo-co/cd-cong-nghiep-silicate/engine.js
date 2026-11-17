/**
 * A virtual kiln for the silicate industry: the learner loads raw materials,
 * picks a temperature and fires. Each recipe the lesson teaches gives its
 * product only in its own temperature range; anything else is explained.
 * Temperatures are the usual industrial ranges, rounded to 50 °C:
 * earthenware (gạch, ngói, đất nung) about 900 - 1 050 °C, stoneware (sành)
 * about 1 100 - 1 300 °C, porcelain (sứ) about 1 400 °C, soda-lime glass
 * about 1 400 - 1 500 °C, Portland clinker about 1 400 - 1 500 °C.
 * Also the mass sums for ordinary glass Na2O·CaO·6SiO2.
 */
import { tidy } from '#lib/core/number-format.js';

/** @typedef {'cat' | 'soda' | 'da-voi' | 'dat-set' | 'cao-lanh' | 'fenspat' | 'thach-cao'} MaterialId */

/** @type {{ id: MaterialId, name: string, formula: string }[]} */
export const MATERIALS = [
  { id: 'cat', name: 'Cát thạch anh', formula: '$\\mathrm{SiO_2}$' },
  { id: 'soda', name: 'Soda', formula: '$\\mathrm{Na_2CO_3}$' },
  { id: 'da-voi', name: 'Đá vôi', formula: '$\\mathrm{CaCO_3}$' },
  { id: 'dat-set', name: 'Đất sét', formula: 'nhiều tạp chất' },
  { id: 'cao-lanh', name: 'Cao lanh', formula: '$\\mathrm{Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O}$' },
  { id: 'fenspat', name: 'Fenspat', formula: '$\\mathrm{K_2O \\cdot Al_2O_3 \\cdot 6SiO_2}$' },
  { id: 'thach-cao', name: 'Thạch cao', formula: '$\\mathrm{CaSO_4 \\cdot 2H_2O}$' },
];

export const PRODUCTS = [
  { id: 'dat-nung', name: 'Gạch, ngói (đất nung)' },
  { id: 'sanh', name: 'Sành' },
  { id: 'su', name: 'Sứ' },
  { id: 'thuy-tinh', name: 'Thuỷ tinh' },
  { id: 'clinker', name: 'Clinker xi măng' },
];

export const T_MIN = 600;
export const T_MAX = 1600;

/**
 * @typedef {object} Firing
 * @property {string | null} product id from PRODUCTS, or null
 * @property {'ok' | 'warn' | 'info'} tone
 * @property {string} text what came out of the kiln and why (rich text)
 */

/**
 * @param {Set<string>} set
 * @param {string[]} ids
 */
function exactly(set, ids) {
  return set.size === ids.length && ids.every((id) => set.has(id));
}

/**
 * Fire a load of raw materials at a temperature.
 * @param {Iterable<string>} load material ids
 * @param {number} t °C
 * @returns {Firing}
 */
export function fire(load, t) {
  const set = new Set(load);
  if (set.size === 0) {
    return { product: null, tone: 'info', text: 'Lò còn trống: hãy chọn nguyên liệu.' };
  }
  if (set.has('thach-cao')) {
    return {
      product: null,
      tone: 'warn',
      text: 'Thạch cao $\\mathrm{CaSO_4 \\cdot 2H_2O}$ không cho vào lò nung. Trong sản xuất xi măng, nó được nghiền chung với clinker sau khi nung (khoảng $3$ – $5\\%$) để điều chỉnh tốc độ đông kết.',
    };
  }

  if (exactly(set, ['cat', 'soda', 'da-voi'])) {
    if (t >= 1400) {
      return {
        product: 'thuy-tinh',
        tone: 'ok',
        text: 'Hỗn hợp nóng chảy hoàn toàn thành khối lỏng trong suốt: $\\mathrm{Na_2CO_3 + SiO_2 \\to Na_2SiO_3 + CO_2}$, $\\mathrm{CaCO_3 + SiO_2 \\to CaSiO_3 + CO_2}$. Tạo hình rồi ủ (làm nguội từ từ) được thuỷ tinh thường, thành phần gần đúng $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$.',
      };
    }
    if (t >= 900) {
      return {
        product: null,
        tone: 'warn',
        text: 'Soda và đá vôi đã bắt đầu phản ứng với cát, nhưng hỗn hợp còn sệt, đầy bọt khí và hạt cát chưa tan. Lò nấu thuỷ tinh cần khoảng $1\\,400$ – $1\\,500$ °C.',
      };
    }
    return {
      product: null,
      tone: 'warn',
      text: 'Nhiệt độ quá thấp: các chất chưa phản ứng, ra lò vẫn là bột nguyên liệu.',
    };
  }

  if (exactly(set, ['cat', 'soda'])) {
    if (t >= 1000) {
      return {
        product: null,
        tone: 'warn',
        text: 'Được sodium silicate $\\mathrm{Na_2SiO_3}$ ("thuỷ tinh lỏng"), tan được trong nước nên không dùng làm cốc chén. Cần thêm đá vôi để có $\\mathrm{CaO}$, giúp thuỷ tinh bền, không tan.',
      };
    }
    return {
      product: null,
      tone: 'warn',
      text: 'Nhiệt độ còn thấp, cát và soda chưa nóng chảy thành khối. Ngoài ra, thiếu đá vôi thì sản phẩm sẽ tan trong nước.',
    };
  }

  if (exactly(set, ['cat']) || exactly(set, ['cat', 'da-voi'])) {
    return {
      product: null,
      tone: 'warn',
      text: 'Thiếu soda làm chất trợ chảy: $\\mathrm{SiO_2}$ tinh khiết chỉ nóng chảy ở trên $1\\,700$ °C, lò này không đạt tới. Thuỷ tinh thạch anh phải nấu ở nhiệt độ rất cao nên đắt.',
    };
  }

  if (
    set.has('da-voi') &&
    set.has('dat-set') &&
    [...set].every((id) => ['da-voi', 'dat-set', 'cat'].includes(id))
  ) {
    if (t >= 1400) {
      return {
        product: 'clinker',
        tone: 'ok',
        text: 'Trong lò quay, $\\mathrm{CaCO_3 \\to CaO + CO_2}$; $\\mathrm{CaO}$ kết hợp với $\\mathrm{SiO_2}$, $\\mathrm{Al_2O_3}$, $\\mathrm{Fe_2O_3}$ của đất sét, kết khối thành những viên clinker gồm chủ yếu $\\mathrm{3CaO \\cdot SiO_2}$, $\\mathrm{2CaO \\cdot SiO_2}$, $\\mathrm{3CaO \\cdot Al_2O_3}$. Nghiền clinker với một ít thạch cao được xi măng.',
      };
    }
    if (t >= 900) {
      return {
        product: null,
        tone: 'warn',
        text: 'Đá vôi đã bị nhiệt phân $\\mathrm{CaCO_3 \\to CaO + CO_2}$, nhưng vôi sống mới chỉ trộn lẫn với đất sét nung, chưa kết khối thành clinker. Cần khoảng $1\\,400$ – $1\\,500$ °C.',
      };
    }
    return {
      product: null,
      tone: 'warn',
      text: 'Đất sét mới mất nước; đá vôi chỉ bị nhiệt phân mạnh từ khoảng $900$ °C. Chưa có clinker.',
    };
  }

  if (exactly(set, ['cao-lanh', 'fenspat', 'cat'])) {
    if (t >= 1350) {
      return {
        product: 'su',
        tone: 'ok',
        text: 'Fenspat chảy ra, gắn kết các hạt cao lanh và thạch anh thành khối đặc chắc, trắng, gần như không thấm nước: đó là sứ. Thực tế, sứ thường được nung sơ bộ khoảng $1\\,000$ °C, tráng men rồi nung ở khoảng $1\\,400$ °C.',
      };
    }
    if (t >= 900) {
      return {
        product: null,
        tone: 'warn',
        text: 'Được sứ mộc (nung sơ bộ): đã rắn nhưng còn xốp, hút nước. Tráng men và nung tiếp ở khoảng $1\\,400$ °C mới thành sứ.',
      };
    }
    return {
      product: null,
      tone: 'warn',
      text: 'Nhiệt độ quá thấp, phối liệu chưa kết khối, sản phẩm bở.',
    };
  }

  if (exactly(set, ['dat-set']) || exactly(set, ['dat-set', 'cat'])) {
    if (t < 850) {
      return {
        product: null,
        tone: 'warn',
        text: 'Đất sét mới mất nước, chưa kết khối: ngâm vào nước sẽ bở ra. Cần nung từ khoảng $900$ °C.',
      };
    }
    if (t < 1100) {
      return {
        product: 'dat-nung',
        tone: 'ok',
        text: 'Đất sét kết khối thành gốm đất nung: gạch, ngói, chậu cảnh. Sản phẩm còn xốp, hút nước, màu đỏ gạch do sắt oxide có trong đất sét.',
      };
    }
    if (t <= 1300) {
      return {
        product: 'sanh',
        tone: 'ok',
        text: 'Nung ở khoảng $1\\,100$ – $1\\,300$ °C, đất sét kết khối chặt thành sành: rắn, gõ kêu, ít thấm nước, màu nâu hoặc xám; dùng làm chum, vại, chén, lọ.',
      };
    }
    return {
      product: null,
      tone: 'warn',
      text: 'Đất sét thường có nhiều tạp chất nên chảy mềm ở nhiệt độ quá cao: sản phẩm bị biến dạng, sụp. Muốn nung ở khoảng $1\\,400$ °C phải dùng phối liệu sứ (cao lanh, fenspat, thạch anh).',
    };
  }

  return {
    product: null,
    tone: 'warn',
    text: 'Hỗn hợp này không ứng với sản phẩm nào của bài. Gợi ý: thuỷ tinh cần cát, soda, đá vôi; gốm đất nung, sành cần đất sét; sứ cần cao lanh, fenspat, cát; clinker cần đá vôi và đất sét.',
  };
}

/**
 * Glow colour of the kiln at a temperature, dull red to near white.
 * @param {number} t °C
 */
export function glowColor(t) {
  if (t < 800) return '#7f1d1d';
  if (t < 1000) return '#b91c1c';
  if (t < 1200) return '#ea580c';
  if (t < 1400) return '#f59e0b';
  return '#fde68a';
}

const M = { Na2O: 62, CaO: 56, SiO2: 60, Na2CO3: 106, CaCO3: 100, CO2: 44 };
/** Molar mass of Na2O·CaO·6SiO2 (g/mol). */
export const GLASS_MOLAR = M.Na2O + M.CaO + 6 * M.SiO2;

/** Mass percent of each oxide in Na2O·CaO·6SiO2. */
export function glassPercent() {
  return {
    Na2O: tidy((100 * M.Na2O) / GLASS_MOLAR, 6),
    CaO: tidy((100 * M.CaO) / GLASS_MOLAR, 6),
    SiO2: tidy((100 * 6 * M.SiO2) / GLASS_MOLAR, 6),
  };
}

/**
 * Raw materials for a mass of Na2O·CaO·6SiO2, in the same unit as `mass`.
 * @param {number} mass
 */
export function glassBatch(mass) {
  const n = mass / GLASS_MOLAR;
  return {
    Na2CO3: tidy(n * M.Na2CO3, 6),
    CaCO3: tidy(n * M.CaCO3, 6),
    SiO2: tidy(n * 6 * M.SiO2, 6),
    CO2: tidy(n * 2 * M.CO2, 6),
  };
}

/**
 * Lime and carbon dioxide from burning limestone.
 * @param {number} mass limestone, any unit
 * @param {number} purity share of CaCO3, 0 to 1
 */
export function burnLimestone(mass, purity) {
  const n = (mass * purity) / M.CaCO3;
  return { CaO: tidy(n * M.CaO, 6), CO2: tidy(n * M.CO2, 6) };
}
