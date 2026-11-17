/**
 * Softening hard water, counted in ions. A water sample holds Ca2+, Mg2+
 * and the anions HCO3-, Cl-, SO4^2- (one unit is a fixed small amount of
 * ions); Na+ comes in with the softening agents. Its hardness splits into a
 * temporary part, the Ca2+ and Mg2+ that HCO3- can carry away as carbonate,
 * and a permanent part, the rest. Each method changes the ions as the book
 * describes and records what fell out as a precipitate (counted by the
 * metal ions it holds).
 */

/** @typedef {'Ca' | 'Mg' | 'Na' | 'HCO3' | 'Cl' | 'SO4'} Ion */
/** @typedef {Record<Ion, number>} Ions */
/** @typedef {'CaCO3' | 'MgCO3' | 'Mg(OH)2' | 'Ca3(PO4)2' | 'Mg3(PO4)2' | 'resin'} Trap */

/**
 * @typedef {object} Water
 * @property {Ions} ions
 * @property {Partial<Record<Trap, number>>} traps metal ions held by each precipitate, or by the resin
 */

/** Formulas of the ions, as ChemFormula reads them. @type {Record<Ion, string>} */
export const ION_FORMULA = {
  Ca: 'Ca^2+',
  Mg: 'Mg^2+',
  Na: 'Na^+',
  HCO3: 'HCO3^-',
  Cl: 'Cl^-',
  SO4: 'SO4^2-',
};

/** Charges, for checking that a sample stays neutral. @type {Record<Ion, number>} */
export const CHARGE = { Ca: 2, Mg: 2, Na: 1, HCO3: -1, Cl: -1, SO4: -2 };

/** The order the ions are drawn in. @type {Ion[]} */
export const ION_ORDER = ['Ca', 'Mg', 'Na', 'HCO3', 'Cl', 'SO4'];

/** @type {Record<Trap, string>} */
export const TRAP_NAMES = {
  CaCO3: 'CaCO3',
  MgCO3: 'MgCO3',
  'Mg(OH)2': 'Mg(OH)2',
  'Ca3(PO4)2': 'Ca3(PO4)2',
  'Mg3(PO4)2': 'Mg3(PO4)2',
  resin: 'nhựa trao đổi ion',
};

/**
 * @typedef {object} Sample
 * @property {string} id
 * @property {string} name
 * @property {Ions} ions
 */

/** @type {Sample[]} */
export const SAMPLES = [
  {
    id: 'tam-thoi',
    name: 'Mẫu A',
    ions: { Ca: 3, Mg: 1, Na: 0, HCO3: 8, Cl: 0, SO4: 0 },
  },
  {
    id: 'vinh-cuu',
    name: 'Mẫu B',
    ions: { Ca: 2, Mg: 2, Na: 0, HCO3: 0, Cl: 4, SO4: 2 },
  },
  {
    id: 'toan-phan',
    name: 'Mẫu C',
    ions: { Ca: 3, Mg: 2, Na: 0, HCO3: 4, Cl: 2, SO4: 2 },
  },
];

/** @param {string} id @returns {Water} */
export function start(id) {
  const s = SAMPLES.find((x) => x.id === id);
  if (!s) throw new Error(`Không có mẫu ${id}`);
  return { ions: { ...s.ions }, traps: {} };
}

/** Net charge of the dissolved ions; 0 for every reachable state. @param {Ions} ions */
export const netCharge = (ions) => ION_ORDER.reduce((sum, k) => sum + ions[k] * CHARGE[k], 0);

/** @typedef {'mem' | 'tam-thoi' | 'vinh-cuu' | 'toan-phan'} Hardness */

/** @type {Record<Hardness, string>} */
export const HARDNESS_NAMES = {
  mem: 'nước mềm',
  'tam-thoi': 'nước có tính cứng tạm thời',
  'vinh-cuu': 'nước có tính cứng vĩnh cửu',
  'toan-phan': 'nước có tính cứng toàn phần',
};

/**
 * Splits the hardness: the temporary part is the Ca2+ and Mg2+ matched by
 * HCO3- (two per ion), the permanent part what is left.
 * @param {Ions} ions
 */
export function hardness(ions) {
  const metal = ions.Ca + ions.Mg;
  const temporary = Math.min(metal, Math.floor(ions.HCO3 / 2));
  const permanent = metal - temporary;
  /** @type {Hardness} */
  const kind =
    metal === 0 ? 'mem' : permanent === 0 ? 'tam-thoi' : temporary === 0 ? 'vinh-cuu' : 'toan-phan';
  return { kind, temporary, permanent };
}

/** @typedef {'dun-soi' | 'voi' | 'soda' | 'phosphate' | 'nhua'} Method */

/** @type {Array<{ id: Method, name: string }>} */
export const METHODS = [
  { id: 'dun-soi', name: 'Đun sôi' },
  { id: 'voi', name: 'Thêm Ca(OH)2 vừa đủ' },
  { id: 'soda', name: 'Thêm Na2CO3' },
  { id: 'phosphate', name: 'Thêm Na3PO4' },
  { id: 'nhua', name: 'Cho qua nhựa trao đổi ion' },
];

/**
 * @typedef {object} Step
 * @property {Water} water the water afterwards
 * @property {number} removed Ca2+ and Mg2+ taken out of the water
 * @property {string[]} equations what happened, as TeX
 * @property {string} text what happened, in words (rich text)
 */

/**
 * @param {Water} w
 * @param {Partial<Record<Trap, number>>} add
 */
function trapped(w, add) {
  const traps = { ...w.traps };
  for (const [k, v] of /** @type {Array<[Trap, number]>} */ (Object.entries(add)))
    if (v > 0) traps[k] = (traps[k] ?? 0) + v;
  return traps;
}

/** Takes up to `t` metal ions, calcium first. @param {Ions} ions @param {number} t */
function takeMetals(ions, t) {
  const ca = Math.min(ions.Ca, t);
  return { ca, mg: Math.min(ions.Mg, t - ca) };
}

const TEX = {
  boilCa:
    '\\mathrm{Ca(HCO_3)_2} \\xrightarrow{t^\\circ} \\mathrm{CaCO_3}\\downarrow + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}',
  boilMg:
    '\\mathrm{Mg(HCO_3)_2} \\xrightarrow{t^\\circ} \\mathrm{MgCO_3}\\downarrow + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}',
  limeCa:
    '\\mathrm{Ca(HCO_3)_2} + \\mathrm{Ca(OH)_2} \\longrightarrow 2\\mathrm{CaCO_3}\\downarrow + 2\\mathrm{H_2O}',
  limeMg:
    '\\mathrm{Mg(HCO_3)_2} + 2\\mathrm{Ca(OH)_2} \\longrightarrow \\mathrm{Mg(OH)_2}\\downarrow + 2\\mathrm{CaCO_3}\\downarrow + 2\\mathrm{H_2O}',
  sodaCa: '\\mathrm{Ca^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{CaCO_3}\\downarrow',
  sodaMg: '\\mathrm{Mg^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{MgCO_3}\\downarrow',
  phosCa:
    '3\\mathrm{Ca^{2+}} + 2\\mathrm{PO_4^{3-}} \\longrightarrow \\mathrm{Ca_3(PO_4)_2}\\downarrow',
  phosMg:
    '3\\mathrm{Mg^{2+}} + 2\\mathrm{PO_4^{3-}} \\longrightarrow \\mathrm{Mg_3(PO_4)_2}\\downarrow',
  resinCa: '2\\mathrm{NaR} + \\mathrm{Ca^{2+}} \\longrightarrow \\mathrm{CaR_2} + 2\\mathrm{Na^+}',
  resinMg: '2\\mathrm{NaR} + \\mathrm{Mg^{2+}} \\longrightarrow \\mathrm{MgR_2} + 2\\mathrm{Na^+}',
};

/**
 * Applies one softening method.
 * @param {Water} w
 * @param {Method} method
 * @returns {Step}
 */
export function apply(w, method) {
  const ions = { ...w.ions };
  const metal = ions.Ca + ions.Mg;
  if (metal === 0)
    return {
      water: w,
      removed: 0,
      equations: [],
      text: 'Nước đã mềm: không còn ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ để loại bỏ.',
    };
  /** @param {number} ca @param {number} mg @param {string} a @param {string} b */
  const eqs = (ca, mg, a, b) => [...(ca ? [a] : []), ...(mg ? [b] : [])];

  if (method === 'dun-soi' || method === 'voi') {
    const t = hardness(ions).temporary;
    if (t === 0)
      return {
        water: w,
        removed: 0,
        equations: [],
        text:
          method === 'dun-soi'
            ? 'Không có gì thay đổi: nước không còn ion $\\mathrm{HCO_3^-}$, nên đun sôi không tạo được kết tủa. Ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ đi cùng $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$ vẫn ở lại.'
            : 'Không có ion $\\mathrm{HCO_3^-}$ nên lượng $\\mathrm{Ca(OH)_2}$ vừa đủ bằng 0: cách này không làm mềm được nước cứng vĩnh cửu (thêm vào chỉ làm tăng $\\mathrm{Ca^{2+}}$).',
      };
    const { ca, mg } = takeMetals(ions, t);
    ions.Ca -= ca;
    ions.Mg -= mg;
    ions.HCO3 -= 2 * t;
    const left = hardness(ions).kind;
    const rest =
      left === 'mem'
        ? ' Nước đã mềm.'
        : ' Phần $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ đi cùng $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$ (tính cứng vĩnh cửu) vẫn còn.';
    if (method === 'dun-soi')
      return {
        water: { ions, traps: trapped(w, { CaCO3: ca, MgCO3: mg }) },
        removed: ca + mg,
        equations: eqs(ca, mg, TEX.boilCa, TEX.boilMg),
        text: `Đun sôi phân huỷ muối hydrogencarbonate: ${ca + mg} ion kim loại kết tủa thành carbonate.${rest}`,
      };
    return {
      water: { ions, traps: trapped(w, { CaCO3: 2 * ca + 2 * mg, 'Mg(OH)2': mg }) },
      removed: ca + mg,
      equations: eqs(ca, mg, TEX.limeCa, TEX.limeMg),
      text: `$\\mathrm{Ca(OH)_2}$ vừa đủ chuyển $\\mathrm{HCO_3^-}$ thành $\\mathrm{CO_3^{2-}}$; cả ion $\\mathrm{Ca^{2+}}$ thêm vào cũng kết tủa hết, ${ca + mg} ion kim loại bị loại khỏi nước.${rest}`,
    };
  }

  const ca = ions.Ca;
  const mg = ions.Mg;
  ions.Ca = 0;
  ions.Mg = 0;
  ions.Na += 2 * (ca + mg);
  const water = /** @type {(t: Partial<Record<Trap, number>>) => Water} */ (
    (t) => ({ ions, traps: trapped(w, t) })
  );
  if (method === 'soda')
    return {
      water: water({ CaCO3: ca, MgCO3: mg }),
      removed: ca + mg,
      equations: eqs(ca, mg, TEX.sodaCa, TEX.sodaMg),
      text: 'Ion $\\mathrm{CO_3^{2-}}$ kết tủa toàn bộ $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$, dù chúng đi cùng anion nào: $\\mathrm{Na_2CO_3}$ làm mềm được cả nước cứng tạm thời và vĩnh cửu. Trong nước còn lại ion $\\mathrm{Na^+}$, không gây cứng.',
    };
  if (method === 'phosphate')
    return {
      water: water({ 'Ca3(PO4)2': ca, 'Mg3(PO4)2': mg }),
      removed: ca + mg,
      equations: eqs(ca, mg, TEX.phosCa, TEX.phosMg),
      text: 'Ion $\\mathrm{PO_4^{3-}}$ kết tủa toàn bộ $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$: $\\mathrm{Na_3PO_4}$ làm mềm được mọi loại nước cứng.',
    };
  return {
    water: water({ resin: ca + mg }),
    removed: ca + mg,
    equations: eqs(ca, mg, TEX.resinCa, TEX.resinMg),
    text: 'Nhựa trao đổi cation giữ lại $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ và giải phóng $\\mathrm{Na^+}$ vào nước: nước ra khỏi cột đã mềm, không tạo kết tủa.',
  };
}
