/**
 * Two monosaccharide units joined by a glycoside bond. The first unit is
 * always α-glucose bonded through C1; the learner picks the second unit and
 * which of its carbons takes the bond:
 * - α-glucose C1 – β-fructose C2 (α-1,2-glycoside) is saccharose: both the
 *   hemiacetal –OH of glucose and the hemiketal –OH of fructose are used up,
 *   so no ring can open and saccharose has no reducing power;
 * - α-glucose C1 – α-glucose C4 (α-1,4-glycoside) is maltose: the second
 *   glucose keeps its hemiacetal –OH at C1, its ring opens to an aldehyde
 *   group, so maltose reduces the Tollens reagent.
 * Hydrolysis (H⁺ or enzyme) breaks the glycoside bond with one water
 * molecule. Each mole of glucose or fructose then gives 2 mol of silver.
 */

/** @typedef {'glucose' | 'fructose'} UnitId */
/** @typedef {'saccharose' | 'maltose'} DisaccharideId */

export const SECOND_UNITS = [
  { value: 'fructose', label: 'β-fructose' },
  { value: 'glucose', label: 'α-glucose' },
];

export const LINKS = [2, 4];

/**
 * The compound built from α-glucose (C1) and the chosen second unit.
 * @param {UnitId} second
 * @param {number} link carbon of the second unit
 * @returns {{ id: DisaccharideId | null, bond: string, freeHemi: boolean, text: string }}
 */
export function build(second, link) {
  if (second === 'fructose' && link === 2) {
    return {
      id: 'saccharose',
      bond: 'α-1,2-glycoside',
      freeHemi: false,
      text: 'Đây là saccharose: gốc α-glucose và gốc β-fructose nối với nhau qua nguyên tử O giữa C1 của glucose và C2 của fructose (liên kết α-1,2-glycoside). Cả nhóm OH hemiacetal và nhóm OH hemiketal đã tham gia liên kết, nên không vòng nào mở ra được.',
    };
  }
  if (second === 'glucose' && link === 4) {
    return {
      id: 'maltose',
      bond: 'α-1,4-glycoside',
      freeHemi: true,
      text: 'Đây là maltose: hai gốc α-glucose nối với nhau qua nguyên tử O giữa C1 của gốc thứ nhất và C4 của gốc thứ hai (liên kết α-1,4-glycoside). Gốc thứ hai còn nhóm OH hemiacetal tự do ở C1 (tô vàng), vòng này mở ra được.',
    };
  }
  const hemi = second === 'fructose' ? 'C2 (nhóm OH hemiketal)' : 'C4';
  return {
    id: null,
    bond: '',
    freeHemi: false,
    text: `Chất này không có trong bài. Saccharose nối C1 của α-glucose với C2 của β-fructose; maltose nối C1 của α-glucose với C4 của α-glucose thứ hai. Với ${second === 'fructose' ? 'β-fructose' : 'α-glucose'}, hãy chọn ${hemi}.`,
  };
}

/**
 * Monosaccharides formed by hydrolysis.
 * @param {DisaccharideId} id
 * @returns {UnitId[]}
 */
export function hydrolysisProducts(id) {
  return id === 'saccharose' ? ['glucose', 'fructose'] : ['glucose', 'glucose'];
}

/**
 * The hydrolysis equation as TeX.
 * @param {DisaccharideId} id
 */
export function hydrolysisTex(id) {
  return id === 'saccharose'
    ? '\\underset{\\text{saccharose}}{\\mathrm{C_{12}H_{22}O_{11}}} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ \\text{ hoặc enzyme}} \\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}} + \\underset{\\text{fructose}}{\\mathrm{C_6H_{12}O_6}}'
    : '\\underset{\\text{maltose}}{\\mathrm{C_{12}H_{22}O_{11}}} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ \\text{ hoặc enzyme}} 2\\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}}';
}

/**
 * Moles of silver from `mol` of the disaccharide with excess Tollens
 * reagent, before or after complete hydrolysis.
 * @param {DisaccharideId} id
 * @param {boolean} hydrolysed
 * @param {number} mol
 */
export function silverMol(id, hydrolysed, mol) {
  if (hydrolysed) return 4 * mol;
  return id === 'maltose' ? 2 * mol : 0;
}
