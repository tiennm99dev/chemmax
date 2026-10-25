/**
 * pH at 25 °C: conversions between pH, [H⁺] and [OH⁻], strong acid and base
 * solutions, indicator colours and the pH of everyday substances.
 */

/** Ionic product of water at 25 °C. */
export const KW = 1e-14;

/** @typedef {'acid' | 'neutral' | 'base'} Medium */

/** @param {number} h [H⁺] in mol/L */
export function phFromH(h) {
  return -Math.log10(h);
}

/** @param {number} ph */
export function hFromPh(ph) {
  return 10 ** -ph;
}

/** @param {number} ph */
export function ohFromPh(ph) {
  return KW / hFromPh(ph);
}

/** @param {number} ph */
export function pOH(ph) {
  return 14 - ph;
}

/**
 * Acidic below 7, neutral at 7, basic above, as the textbook classifies
 * solutions at 25 °C.
 * @param {number} ph
 * @returns {Medium}
 */
export function medium(ph) {
  if (Math.abs(ph - 7) < 1e-9) return 'neutral';
  return ph < 7 ? 'acid' : 'base';
}

export const MEDIUM_LABELS = /** @type {Record<Medium, string>} */ ({
  acid: 'Môi trường acid',
  neutral: 'Môi trường trung tính',
  base: 'Môi trường base',
});

/**
 * pH of a strong acid (`concentration` mol/L, `protons` H⁺ per formula: 1
 * for HCl, 2 for H₂SO₄ taken as fully dissociated), counting the water's own
 * H⁺ so that very dilute acids stay just below 7.
 * @param {number} concentration
 * @param {number} [protons]
 */
export function strongAcidPh(concentration, protons = 1) {
  const c = concentration * protons;
  return phFromH((c + Math.sqrt(c * c + 4 * KW)) / 2);
}

/**
 * pH of a strong base, `hydroxides` OH⁻ per formula (1 for NaOH, 2 for Ba(OH)₂).
 * @param {number} concentration
 * @param {number} [hydroxides]
 */
export function strongBasePh(concentration, hydroxides = 1) {
  return 14 - strongAcidPh(concentration, hydroxides);
}

/** Universal indicator colours at whole pH values 0-14. */
const UNIVERSAL = [
  '#b91c1c',
  '#dc2626',
  '#ea580c',
  '#f97316',
  '#f59e0b',
  '#eab308',
  '#a3e635',
  '#22c55e',
  '#14b8a6',
  '#0ea5e9',
  '#2563eb',
  '#4f46e5',
  '#6d28d9',
  '#7e22ce',
  '#581c87',
];

export const UNIVERSAL_STOPS = UNIVERSAL.map((color, ph) => ({ ph, color }));

/** @param {string} hex */
function rgb(hex) {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

/**
 * Colour of universal indicator paper at a pH, interpolated between whole values.
 * @param {number} ph
 */
export function universalColor(ph) {
  const p = Math.min(14, Math.max(0, ph));
  const i = Math.min(13, Math.floor(p));
  const t = p - i;
  const [a, b] = [rgb(UNIVERSAL[i]), rgb(UNIVERSAL[i + 1])];
  const [r, g, bl] = a.map((v, k) => Math.round(v + (b[k] - v) * t));
  return `rgb(${r} ${g} ${bl})`;
}

/**
 * Litmus (quỳ tím): red in acid (below about 4,5), blue in base (above
 * about 8,3), purple in between.
 * @param {number} ph
 */
export function litmus(ph) {
  if (ph < 4.5) return { name: 'đỏ', color: '#dc2626' };
  if (ph > 8.3) return { name: 'xanh', color: '#2563eb' };
  return { name: 'tím', color: '#7c3aed' };
}

/**
 * Phenolphthalein: colourless below about 8,2, pink in basic solutions.
 * @param {number} ph
 */
export function phenolphthalein(ph) {
  if (ph < 8.2) return { name: 'không màu', color: '#f8fafc' };
  return { name: 'hồng', color: '#ec4899' };
}

/** Typical pH of everyday substances (approximate values). */
export const SUBSTANCES = [
  { name: 'Dịch vị dạ dày', ph: 1.5 },
  { name: 'Nước chanh', ph: 2.4 },
  { name: 'Giấm ăn', ph: 2.9 },
  { name: 'Nước cam', ph: 3.5 },
  { name: 'Cà phê đen', ph: 5 },
  { name: 'Nước mưa', ph: 5.6 },
  { name: 'Sữa bò', ph: 6.6 },
  { name: 'Nước cất', ph: 7 },
  { name: 'Máu', ph: 7.4 },
  { name: 'Nước biển', ph: 8.1 },
  { name: 'Dung dịch baking soda', ph: 8.3 },
  { name: 'Nước xà phòng', ph: 10 },
  { name: 'Nước amonia gia dụng', ph: 11.5 },
  { name: 'Nước vôi trong', ph: 12.4 },
];

/**
 * Splits a positive number into mantissa and power of ten, mantissa rounded
 * to `digits` decimals: 0,00032 → { mantissa: 3.2, exponent: -4 }.
 * @param {number} x
 * @param {number} [digits]
 */
export function scientific(x, digits = 1) {
  if (!(x > 0)) return { mantissa: 0, exponent: 0 };
  let exponent = Math.floor(Math.log10(x));
  let mantissa = Math.round((x / 10 ** exponent) * 10 ** digits) / 10 ** digits;
  if (mantissa >= 10) {
    mantissa /= 10;
    exponent += 1;
  }
  return { mantissa, exponent };
}

/**
 * "3,2 × 10⁻⁴" with a comma decimal and superscript exponent.
 * @param {number} x
 * @param {number} [digits]
 */
export function formatScientific(x, digits = 1) {
  const { mantissa, exponent } = scientific(x, digits);
  const sup = String(exponent).replace(/[-\d]/g, (c) =>
    c === '-' ? '⁻' : '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)],
  );
  return `${mantissa.toFixed(digits).replace('.', ',')} × 10${sup}`;
}
