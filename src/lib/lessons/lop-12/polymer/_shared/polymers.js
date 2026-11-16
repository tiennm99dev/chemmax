/**
 * The polymers of the chapter: how each is made, from which monomers, its
 * repeat unit and the molar masses the book's exercises use (C = 12, H = 1,
 * N = 14, O = 16, Cl = 35,5). Written the KNTT way: names in IUPAC English,
 * repeat units in brackets with the index n.
 */

export const M_WATER = 18;

/** @typedef {'trung-hop' | 'trung-ngung'} Method */

/**
 * @typedef {object} Monomer
 * @property {string} name     the book's name, such as "vinyl chloride"
 * @property {string} tex      condensed structural formula, TeX inside \mathrm
 * @property {string} molecular molecular formula in Unicode, such as "C₂H₃Cl"
 * @property {number} molar    g/mol
 */

/**
 * @typedef {object} Polymer
 * @property {string} id
 * @property {string} name       the polymer's name, such as "poly(vinyl chloride)"
 * @property {string} [abbr]     its usual abbreviation, such as "PVC"
 * @property {string} material   the material it makes, such as "chất dẻo"
 * @property {Method} method
 * @property {Monomer[]} monomers
 * @property {string} unitTex    the repeat unit, TeX inside \mathrm, without the brackets
 * @property {number} unitMolar  g/mol of one repeat unit
 * @property {number} water      water molecules split off per repeat unit
 */

/** @type {Record<string, Monomer>} */
export const MONOMERS = {
  ethylene: { name: 'ethylene', tex: 'CH_2{=}CH_2', molecular: 'C₂H₄', molar: 28 },
  propylene: { name: 'propylene', tex: 'CH_2{=}CH{-}CH_3', molecular: 'C₃H₆', molar: 42 },
  vinylChloride: { name: 'vinyl chloride', tex: 'CH_2{=}CHCl', molecular: 'C₂H₃Cl', molar: 62.5 },
  styrene: { name: 'styrene', tex: 'CH_2{=}CH{-}C_6H_5', molecular: 'C₈H₈', molar: 104 },
  methylMethacrylate: {
    name: 'methyl methacrylate',
    tex: 'CH_2{=}C(CH_3){-}COOCH_3',
    molecular: 'C₅H₈O₂',
    molar: 100,
  },
  acrylonitrile: { name: 'acrylonitrile', tex: 'CH_2{=}CH{-}CN', molecular: 'C₃H₃N', molar: 53 },
  butadiene: {
    name: 'buta-1,3-diene',
    tex: 'CH_2{=}CH{-}CH{=}CH_2',
    molecular: 'C₄H₆',
    molar: 54,
  },
  isoprene: {
    name: 'isoprene',
    tex: 'CH_2{=}C(CH_3){-}CH{=}CH_2',
    molecular: 'C₅H₈',
    molar: 68,
  },
  caprolactam: { name: 'caprolactam', tex: 'C_6H_{11}NO', molecular: 'C₆H₁₁NO', molar: 113 },
  aminocaproicAcid: {
    name: 'ε-aminocaproic acid',
    tex: 'H_2N{-}[CH_2]_5{-}COOH',
    molecular: 'C₆H₁₃NO₂',
    molar: 131,
  },
  hexamethylenediamine: {
    name: 'hexamethylenediamine',
    tex: 'H_2N{-}[CH_2]_6{-}NH_2',
    molecular: 'C₆H₁₆N₂',
    molar: 116,
  },
  adipicAcid: {
    name: 'adipic acid',
    tex: 'HOOC{-}[CH_2]_4{-}COOH',
    molecular: 'C₆H₁₀O₄',
    molar: 146,
  },
  ethyleneGlycol: {
    name: 'ethylene glycol',
    tex: 'HO{-}CH_2{-}CH_2{-}OH',
    molecular: 'C₂H₆O₂',
    molar: 62,
  },
  terephthalicAcid: {
    name: 'terephthalic acid',
    tex: 'HOOC{-}C_6H_4{-}COOH',
    molecular: 'C₈H₆O₄',
    molar: 166,
  },
};

const M = MONOMERS;

/** @type {Polymer[]} */
export const POLYMERS = [
  {
    id: 'pe',
    name: 'polyethylene',
    abbr: 'PE',
    material: 'chất dẻo',
    method: 'trung-hop',
    monomers: [M.ethylene],
    unitTex: '{-}CH_2{-}CH_2{-}',
    unitMolar: 28,
    water: 0,
  },
  {
    id: 'pp',
    name: 'polypropylene',
    abbr: 'PP',
    material: 'chất dẻo',
    method: 'trung-hop',
    monomers: [M.propylene],
    unitTex: '{-}CH_2{-}CH(CH_3){-}',
    unitMolar: 42,
    water: 0,
  },
  {
    id: 'pvc',
    name: 'poly(vinyl chloride)',
    abbr: 'PVC',
    material: 'chất dẻo',
    method: 'trung-hop',
    monomers: [M.vinylChloride],
    unitTex: '{-}CH_2{-}CHCl{-}',
    unitMolar: 62.5,
    water: 0,
  },
  {
    id: 'ps',
    name: 'polystyrene',
    abbr: 'PS',
    material: 'chất dẻo',
    method: 'trung-hop',
    monomers: [M.styrene],
    unitTex: '{-}CH_2{-}CH(C_6H_5){-}',
    unitMolar: 104,
    water: 0,
  },
  {
    id: 'pmma',
    name: 'poly(methyl methacrylate)',
    abbr: 'PMMA',
    material: 'chất dẻo (thuỷ tinh hữu cơ)',
    method: 'trung-hop',
    monomers: [M.methylMethacrylate],
    unitTex: '{-}CH_2{-}C(CH_3)(COOCH_3){-}',
    unitMolar: 100,
    water: 0,
  },
  {
    id: 'nitron',
    name: 'polyacrylonitrile',
    material: 'tơ nitron',
    method: 'trung-hop',
    monomers: [M.acrylonitrile],
    unitTex: '{-}CH_2{-}CH(CN){-}',
    unitMolar: 53,
    water: 0,
  },
  {
    id: 'buna',
    name: 'polybuta-1,3-diene',
    material: 'cao su buna',
    method: 'trung-hop',
    monomers: [M.butadiene],
    unitTex: '{-}CH_2{-}CH{=}CH{-}CH_2{-}',
    unitMolar: 54,
    water: 0,
  },
  {
    id: 'isoprene',
    name: 'polyisoprene',
    material: 'cao su isoprene',
    method: 'trung-hop',
    monomers: [M.isoprene],
    unitTex: '{-}CH_2{-}C(CH_3){=}CH{-}CH_2{-}',
    unitMolar: 68,
    water: 0,
  },
  {
    id: 'capron',
    name: 'capron (nylon-6)',
    material: 'tơ capron',
    method: 'trung-hop',
    monomers: [M.caprolactam],
    unitTex: '{-}NH{-}[CH_2]_5{-}CO{-}',
    unitMolar: 113,
    water: 0,
  },
  {
    id: 'nylon-6',
    name: 'nylon-6',
    material: 'tơ capron',
    method: 'trung-ngung',
    monomers: [M.aminocaproicAcid],
    unitTex: '{-}NH{-}[CH_2]_5{-}CO{-}',
    unitMolar: 113,
    water: 1,
  },
  {
    id: 'nylon-6-6',
    name: 'nylon-6,6',
    material: 'tơ nylon-6,6',
    method: 'trung-ngung',
    monomers: [M.hexamethylenediamine, M.adipicAcid],
    unitTex: '{-}NH{-}[CH_2]_6{-}NH{-}CO{-}[CH_2]_4{-}CO{-}',
    unitMolar: 226,
    water: 2,
  },
  {
    id: 'pet',
    name: 'poly(ethylene terephthalate)',
    abbr: 'PET',
    material: 'chất dẻo, tơ polyester',
    method: 'trung-ngung',
    monomers: [M.terephthalicAcid, M.ethyleneGlycol],
    unitTex: '{-}CO{-}C_6H_4{-}CO{-}O{-}CH_2{-}CH_2{-}O{-}',
    unitMolar: 192,
    water: 2,
  },
];

/**
 * The polymer with this id.
 * @param {string} id
 */
export function polymer(id) {
  const p = POLYMERS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown polymer ${id}`);
  return p;
}

/**
 * The polymer written the book's way, `(–CH₂–CH₂–)ₙ`, as TeX.
 * @param {Polymer} p
 */
export function polymerTex(p) {
  return `\\mathrm{(${p.unitTex})_n}`;
}

/**
 * The book's equation for making the polymer from n of each monomer, with
 * n H₂O (or 2n H₂O) split off in a condensation; chain ends are ignored.
 * @param {Polymer} p
 */
export function equationTex(p) {
  const left = p.monomers.map((m) => `n\\,\\mathrm{${m.tex}}`).join(' + ');
  const over =
    p.id === 'capron'
      ? 't^\\circ,\\,\\mathrm{xt}'
      : p.method === 'trung-hop'
        ? 't^\\circ,\\,p,\\,\\mathrm{xt}'
        : 't^\\circ';
  const water = p.water === 0 ? '' : ` + ${p.water === 1 ? '' : p.water}n\\,\\mathrm{H_2O}`;
  const caprolactam = p.id === 'capron' ? 'n\\,\\text{caprolactam}' : left;
  return `${caprolactam} \\xrightarrow{${over}} ${polymerTex(p)}${water}`;
}

/**
 * The sum of the monomer molar masses that make one repeat unit; it equals
 * the unit's molar mass plus the water split off.
 * @param {Polymer} p
 */
export function monomerMolar(p) {
  return p.monomers.reduce((s, m) => s + m.molar, 0);
}
