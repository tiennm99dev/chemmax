/**
 * The activity series as the book prints it, K Na Ca Mg Al Zn Fe Pb (H) Cu
 * Ag Au, and the rules read from it: a metal before H frees hydrogen from
 * dilute hydrochloric acid, and a metal (other than K, Na, Ca, which react
 * with the water first) pushes any metal after it out of a salt solution.
 * Salts are nitrates, which all dissolve, so every reaction written here
 * really runs to the end.
 */

/** @typedef {'K' | 'Na' | 'Ca' | 'Mg' | 'Al' | 'Zn' | 'Fe' | 'Pb' | 'H' | 'Cu' | 'Ag' | 'Au'} SeriesId */
/** @typedef {Exclude<SeriesId, 'H'>} MetalId */

/** The series, most active first. */
export const SERIES = /** @type {SeriesId[]} */ ([
  'K',
  'Na',
  'Ca',
  'Mg',
  'Al',
  'Zn',
  'Fe',
  'Pb',
  'H',
  'Cu',
  'Ag',
  'Au',
]);

/** Metals that react with water at room temperature, so never displace a metal from a solution. */
export const WATER_METALS = /** @type {MetalId[]} */ (['K', 'Na', 'Ca']);

/** Charge of the ion each metal forms in these reactions (iron forms Fe²⁺). */
export const CHARGE = /** @type {Record<MetalId, number>} */ ({
  K: 1,
  Na: 1,
  Ca: 2,
  Mg: 2,
  Al: 3,
  Zn: 2,
  Fe: 2,
  Pb: 2,
  Cu: 2,
  Ag: 1,
  Au: 3,
});

/** Vietnamese names. */
export const NAME = /** @type {Record<SeriesId, string>} */ ({
  K: 'potassium',
  Na: 'sodium',
  Ca: 'calcium',
  Mg: 'magnesium',
  Al: 'nhôm',
  Zn: 'kẽm',
  Fe: 'sắt',
  Pb: 'chì',
  H: 'hydrogen',
  Cu: 'đồng',
  Ag: 'bạc',
  Au: 'vàng',
});

/** @param {SeriesId} id */
export function rank(id) {
  return SERIES.indexOf(id);
}

/** @param {number} a @param {number} b @returns {number} */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/** @param {number} n */
const coef = (n) => (n === 1 ? '' : String(n));

/** @param {MetalId} m formula of the metal's nitrate */
export function nitrate(m) {
  const c = CHARGE[m];
  return c === 1 ? `${m}NO3` : `${m}(NO3)${c}`;
}

/** @param {MetalId} m formula of the metal's chloride */
function chloride(m) {
  const c = CHARGE[m];
  return c === 1 ? `${m}Cl` : `${m}Cl${c}`;
}

/** @param {MetalId} m formula of the metal's hydroxide */
function hydroxide(m) {
  const c = CHARGE[m];
  return c === 1 ? `${m}OH` : `${m}(OH)${c}`;
}

/**
 * The formula of the solution that stands for each place in the series:
 * dilute HCl for H, the nitrate for a metal.
 * @param {SeriesId} id
 */
export function solutionOf(id) {
  return id === 'H' ? 'HCl' : nitrate(id);
}

/**
 * Book-style equation of a metal with water at room temperature.
 * @param {MetalId} m
 */
export function waterEquation(m) {
  const c = CHARGE[m];
  const k = gcd(2, c);
  return `${coef(2 / k)}${m} + ${coef((2 * c) / k)}H2O → ${coef(2 / k)}${hydroxide(m)} + ${coef(c / k)}H2↑`;
}

/**
 * Book-style equation of a metal with dilute HCl.
 * @param {MetalId} m
 */
export function acidEquation(m) {
  const c = CHARGE[m];
  const k = gcd(2, c);
  return `${coef(2 / k)}${m} + ${coef((2 * c) / k)}HCl → ${coef(2 / k)}${chloride(m)} + ${coef(c / k)}H2↑`;
}

/**
 * Book-style equation of metal `m` pushing metal `n` out of its nitrate.
 * @param {MetalId} m
 * @param {MetalId} n
 */
export function displacementEquation(m, n) {
  const a = CHARGE[m];
  const b = CHARGE[n];
  const k = gcd(a, b);
  const x = b / k;
  const y = a / k;
  return `${coef(x)}${m} + ${coef(y)}${nitrate(n)} → ${coef(x)}${nitrate(m)} + ${coef(y)}${n}`;
}

/**
 * @typedef {object} Prediction
 * @property {boolean} reacts whether the metal visibly reacts in the solution
 * @property {boolean} displaces whether it frees the element of the solution (H₂ or the metal)
 * @property {string | null} equation
 * @property {string} reason the rule from the series, in Vietnamese
 */

/**
 * What happens when metal `m` is put into the solution standing for `target`.
 * @param {MetalId} m
 * @param {SeriesId} target
 * @returns {Prediction}
 */
export function predict(m, target) {
  const before = rank(m) < rank(target);
  const nm = NAME[m];
  const cap = nm[0].toUpperCase() + nm.slice(1);
  if (target === 'H') {
    if (!before) {
      return {
        reacts: false,
        displaces: false,
        equation: null,
        reason: `${cap} đứng sau H trong dãy nên không đẩy được hydrogen ra khỏi dung dịch acid.`,
      };
    }
    return {
      reacts: true,
      displaces: true,
      equation: acidEquation(m),
      reason: WATER_METALS.includes(m)
        ? `${cap} đứng trước H nên đẩy được hydrogen ra khỏi acid; phản ứng rất mãnh liệt, nguy hiểm.`
        : `${cap} đứng trước H nên đẩy được hydrogen ra khỏi dung dịch acid${m === 'Pb' ? ' (phản ứng rất chậm vì muối PbCl₂ ít tan bám ngoài chì)' : ''}.`,
    };
  }
  if (m === target) {
    return {
      reacts: false,
      displaces: false,
      equation: null,
      reason: 'Một kim loại không phản ứng với dung dịch muối của chính nó.',
    };
  }
  if (WATER_METALS.includes(m)) {
    return {
      reacts: true,
      displaces: false,
      equation: waterEquation(m),
      reason: `${cap} tác dụng với nước trong dung dịch trước, tạo base và khí hydrogen, nên không đẩy được ${NAME[target]} ra khỏi muối.`,
    };
  }
  if (!before) {
    return {
      reacts: false,
      displaces: false,
      equation: null,
      reason: `${cap} đứng sau ${NAME[target]} trong dãy (hoạt động yếu hơn) nên không đẩy được ${NAME[target]} ra khỏi muối.`,
    };
  }
  return {
    reacts: true,
    displaces: true,
    equation: displacementEquation(m, /** @type {MetalId} */ (target)),
    reason: `${cap} đứng trước ${NAME[target]} trong dãy (hoạt động mạnh hơn) nên đẩy được ${NAME[target]} ra khỏi dung dịch muối.`,
  };
}
