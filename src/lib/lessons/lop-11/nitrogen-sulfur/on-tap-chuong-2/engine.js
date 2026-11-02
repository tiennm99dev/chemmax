/**
 * Chapter review as two conversion maps, one for nitrogen and one for sulfur.
 * Every arrow carries the reagent and the conditions, so a hidden substance can
 * be worked out from its neighbours; a hidden substance never touches another
 * one, and each has wrong choices drawn from real mistakes with the reason.
 */
import { rng, shuffle } from '#lib/core/drill.js';
import { prettyFormula } from '#lib/domain/formula.js';

/**
 * @typedef {{ formula: string, why: string }} Trap
 * @typedef {{ id: string, formula: string, ox: string, x: number, y: number,
 *   traps: Trap[] }} MapNode
 * @typedef {{ from: string, to: string, label: string[], equation: string | null,
 *   tex?: string, path: [number, number, number, number],
 *   at: [number, number], anchor: 'start' | 'middle' | 'end' }} MapEdge
 * @typedef {{ id: 'n' | 's', name: string, nodes: MapNode[], edges: MapEdge[] }} ConversionMap
 */

/** How many substances each round hides. */
export const BLANKS = 3;

/** @type {Record<'n' | 's', ConversionMap>} */
export const MAPS = {
  n: {
    id: 'n',
    name: 'nitrogen',
    nodes: [
      {
        id: 'n2',
        formula: 'N2',
        ox: '0',
        x: 180,
        y: 26,
        traps: [
          {
            formula: 'NO2',
            why: 'N trong chất này đã có số oxi hoá $+4$, nên thêm $\\mathrm{O_2}$ không thể hạ xuống $+2$ của NO.',
          },
          {
            formula: 'HNO3',
            why: 'Hợp chất này đã ở số oxi hoá cao nhất, nên không thể tiếp tục bị $\\mathrm{O_2}$ oxi hoá thành NO.',
          },
        ],
      },
      {
        id: 'nh3',
        formula: 'NH3',
        ox: '−3',
        x: 68,
        y: 126,
        traps: [
          {
            formula: 'NO',
            why: 'Mũi tên vào ô này chỉ thêm $\\mathrm{H_2}$, không có oxygen để tạo NO.',
          },
          {
            formula: 'NH4Cl',
            why: 'Chất phản ứng với $\\mathrm{N_2}$ ở đây không chứa chlorine.',
          },
        ],
      },
      {
        id: 'no',
        formula: 'NO',
        ox: '+2',
        x: 292,
        y: 126,
        traps: [
          {
            formula: 'NO2',
            why: '$\\mathrm{NO_2}$ là sản phẩm của bước sau, khi NO gặp thêm oxygen. Tia lửa điện và xúc tác Pt chỉ dừng ở NO.',
          },
          {
            formula: 'N2',
            why: 'Đốt $\\mathrm{NH_3}$ không có xúc tác mới tạo $\\mathrm{N_2}$. Có xúc tác Pt thì sản phẩm khác.',
          },
        ],
      },
      {
        id: 'nh4cl',
        formula: 'NH4Cl',
        ox: '−3',
        x: 68,
        y: 226,
        traps: [
          {
            formula: 'NH4NO3',
            why: 'Muối này cần gốc nitrate, nhưng acid trên mũi tên là HCl.',
          },
          {
            formula: 'N2',
            why: 'HCl không oxi hoá $\\mathrm{NH_3}$. Ở đây $\\mathrm{NH_3}$ nhận proton, nên số oxi hoá của N không đổi.',
          },
        ],
      },
      {
        id: 'no2',
        formula: 'NO2',
        ox: '+4',
        x: 292,
        y: 226,
        traps: [
          {
            formula: 'HNO3',
            why: 'Chất phản ứng ở bước này chưa có hydrogen, nên chưa thể tạo acid. Phải qua thêm một bước có nước.',
          },
          {
            formula: 'N2',
            why: 'Oxygen là chất oxi hoá, nên số oxi hoá của N phải tăng, không thể giảm về $0$.',
          },
        ],
      },
      {
        id: 'nh4no3',
        formula: 'NH4NO3',
        ox: '−3 và +5',
        x: 68,
        y: 326,
        traps: [
          {
            formula: 'NH4Cl',
            why: 'Không có chlorine trong acid và base của mũi tên này.',
          },
          {
            formula: 'NO2',
            why: 'Đây là phản ứng acid – base tạo muối, không phải phản ứng oxi hoá – khử.',
          },
        ],
      },
      {
        id: 'hno3',
        formula: 'HNO3',
        ox: '+5',
        x: 292,
        y: 326,
        traps: [
          {
            formula: 'NO',
            why: 'Oxygen là chất oxi hoá, nên số oxi hoá của N phải tăng từ $+4$, không thể giảm về $+2$.',
          },
          {
            formula: 'NH3',
            why: 'Oxygen là chất oxi hoá, nên không thể đưa N xuống số oxi hoá $-3$.',
          },
        ],
      },
    ],
    edges: [
      {
        from: 'n2',
        to: 'nh3',
        label: ['+H₂ (Fe, t°, p)'],
        equation: 'N2 + 3H2 ⇌ 2NH3',
        path: [134, 42, 84, 102],
        at: [106, 66],
        anchor: 'end',
      },
      {
        from: 'n2',
        to: 'no',
        label: ['+O₂ (3000 °C)'],
        equation: 'N2 + O2 ⇌ 2NO',
        path: [226, 42, 276, 102],
        at: [256, 66],
        anchor: 'start',
      },
      {
        from: 'nh3',
        to: 'no',
        label: ['+O₂ (Pt, t°)'],
        equation: '4NH3 + 5O2 → 4NO + 6H2O',
        path: [114, 126, 244, 126],
        at: [180, 118],
        anchor: 'middle',
      },
      {
        from: 'nh3',
        to: 'nh4cl',
        label: ['+HCl'],
        equation: 'NH3 + HCl → NH4Cl',
        path: [56, 148, 56, 202],
        at: [50, 180],
        anchor: 'end',
      },
      {
        from: 'nh4cl',
        to: 'nh3',
        label: ['+NaOH, t°'],
        equation: 'NH4Cl + NaOH → NaCl + NH3↑ + H2O',
        path: [80, 204, 80, 150],
        at: [86, 180],
        anchor: 'start',
      },
      {
        from: 'no',
        to: 'no2',
        label: ['+O₂'],
        equation: '2NO + O2 → 2NO2',
        path: [292, 148, 292, 202],
        at: [286, 180],
        anchor: 'end',
      },
      {
        from: 'no2',
        to: 'hno3',
        label: ['+O₂, H₂O'],
        equation: '4NO2 + O2 + 2H2O → 4HNO3',
        path: [280, 248, 280, 302],
        at: [274, 280],
        anchor: 'end',
      },
      {
        from: 'hno3',
        to: 'no2',
        label: ['+Cu, đặc'],
        equation: 'Cu + 4HNO3 → Cu(NO3)2 + 2NO2↑ + 2H2O',
        path: [304, 304, 304, 250],
        at: [310, 280],
        anchor: 'start',
      },
      {
        from: 'hno3',
        to: 'nh4no3',
        label: ['+NH₃'],
        equation: 'NH3 + HNO3 → NH4NO3',
        path: [246, 326, 114, 326],
        at: [180, 318],
        anchor: 'middle',
      },
    ],
  },
  s: {
    id: 's',
    name: 'sulfur',
    nodes: [
      {
        id: 's',
        formula: 'S',
        ox: '0',
        x: 180,
        y: 26,
        traps: [
          {
            formula: 'SO3',
            why: 'S trong chất này đã có số oxi hoá $+6$, cao nhất, nên không thể cháy để tạo $\\mathrm{SO_2}$.',
          },
          {
            formula: 'H2SO4',
            why: 'S trong acid này đã có số oxi hoá $+6$, nên oxygen không thể oxi hoá nó thành $\\mathrm{SO_2}$.',
          },
        ],
      },
      {
        id: 'fes2',
        formula: 'FeS2',
        ox: '−1',
        x: 68,
        y: 126,
        traps: [
          {
            formula: 'CaCO3',
            why: 'Chất này không chứa sulfur, nên không thể tạo $\\mathrm{SO_2}$.',
          },
          {
            formula: 'Fe2O3',
            why: 'Đây là xỉ còn lại sau khi đốt quặng, và không chứa sulfur.',
          },
        ],
      },
      {
        id: 'so2',
        formula: 'SO2',
        ox: '+4',
        x: 292,
        y: 126,
        traps: [
          {
            formula: 'SO3',
            why: 'Đốt sulfur hay quặng chỉ tạo khí có số oxi hoá $+4$. Muốn lên $+6$ phải cần xúc tác $\\mathrm{V_2O_5}$.',
          },
          {
            formula: 'H2S',
            why: 'Oxygen là chất oxi hoá, nên số oxi hoá của S phải tăng, không thể xuống $-2$.',
          },
        ],
      },
      {
        id: 'baso4',
        formula: 'BaSO4',
        ox: '+6',
        x: 68,
        y: 226,
        traps: [
          {
            formula: 'BaSO3',
            why: 'Đây là phản ứng trao đổi nên số oxi hoá của S giữ nguyên $+6$. Muối này lại có S ở số oxi hoá $+4$.',
          },
          {
            formula: 'SO2',
            why: '$\\mathrm{BaCl_2}$ không khử được acid. Phản ứng trao đổi này tạo kết tủa trắng, không tạo khí.',
          },
        ],
      },
      {
        id: 'so3',
        formula: 'SO3',
        ox: '+6',
        x: 292,
        y: 226,
        traps: [
          {
            formula: 'S',
            why: 'Oxygen là chất oxi hoá, nên số oxi hoá của S phải tăng từ $+4$, không thể giảm về $0$.',
          },
          {
            formula: 'H2SO4',
            why: 'Chất phản ứng ở bước này chưa có hydrogen, nên chưa thể tạo acid.',
          },
        ],
      },
      {
        id: 'h2so4',
        formula: 'H2SO4',
        ox: '+6',
        x: 68,
        y: 326,
        traps: [
          {
            formula: 'H2SO3',
            why: 'Pha oleum vào nước không làm đổi số oxi hoá của S, vẫn là $+6$. Acid này lại có S ở số oxi hoá $+4$.',
          },
          {
            formula: 'SO3',
            why: 'Thêm nước vào oleum tạo dung dịch acid, không giải phóng lại oxide.',
          },
        ],
      },
      {
        id: 'oleum',
        formula: 'H2SO4·nSO3',
        ox: '+6',
        x: 292,
        y: 326,
        traps: [
          {
            formula: 'SO2',
            why: 'Không có chất khử nào ở bước hấp thụ, nên S giữ nguyên số oxi hoá $+6$.',
          },
          {
            formula: 'H2SO3',
            why: 'Acid này có S ở số oxi hoá $+4$, còn ở bước hấp thụ S vẫn là $+6$.',
          },
        ],
      },
    ],
    edges: [
      {
        from: 's',
        to: 'so2',
        label: ['+O₂, t°'],
        equation: 'S + O2 → SO2',
        path: [226, 42, 276, 102],
        at: [256, 66],
        anchor: 'start',
      },
      {
        from: 'fes2',
        to: 'so2',
        label: ['+O₂, t°'],
        equation: '4FeS2 + 11O2 → 2Fe2O3 + 8SO2',
        path: [114, 126, 244, 126],
        at: [180, 118],
        anchor: 'middle',
      },
      {
        from: 'so2',
        to: 'so3',
        label: ['+O₂', '(V₂O₅, t°)'],
        equation: '2SO2 + O2 ⇌ 2SO3',
        path: [292, 148, 292, 202],
        at: [298, 172],
        anchor: 'start',
      },
      {
        from: 'so3',
        to: 'oleum',
        label: ['+H₂SO₄', '98%'],
        equation: null,
        tex: '$\\mathrm{H_2SO_4} + \\mathrm{nSO_3} \\rightarrow \\mathrm{H_2SO_4 \\cdot nSO_3}$',
        path: [292, 248, 292, 302],
        at: [298, 272],
        anchor: 'start',
      },
      {
        from: 'oleum',
        to: 'h2so4',
        label: ['+H₂O'],
        equation: null,
        tex: '$\\mathrm{H_2SO_4 \\cdot nSO_3} + \\mathrm{nH_2O} \\rightarrow \\mathrm{(n+1)H_2SO_4}$',
        path: [246, 326, 114, 326],
        at: [180, 318],
        anchor: 'middle',
      },
      {
        from: 'h2so4',
        to: 'baso4',
        label: ['+BaCl₂'],
        equation: 'H2SO4 + BaCl2 → BaSO4↓ + 2HCl',
        path: [68, 304, 68, 250],
        at: [74, 280],
        anchor: 'start',
      },
      {
        from: 'h2so4',
        to: 'so2',
        label: ['+Cu, đặc, t°'],
        equation: 'Cu + 2H2SO4 → CuSO4 + SO2↑ + 2H2O',
        path: [114, 304, 258, 150],
        at: [160, 266],
        anchor: 'start',
      },
    ],
  },
};

/**
 * @param {ConversionMap} map
 * @param {string} id
 * @returns {MapNode}
 */
export function nodeOf(map, id) {
  const found = map.nodes.find((n) => n.id === id);
  if (!found) throw new Error(`Không có chất: ${id}`);
  return found;
}

/**
 * Whether two substances are joined by an arrow.
 * @param {ConversionMap} map
 * @param {string} a
 * @param {string} b
 */
function touching(map, a, b) {
  return map.edges.some((e) => (e.from === a && e.to === b) || (e.from === b && e.to === a));
}

/**
 * All the ways to hide `BLANKS` substances of which no two share an arrow, so
 * each one can be worked out from substances still on show.
 * @param {ConversionMap} map
 * @returns {string[][]}
 */
export function blankSets(map) {
  const ids = map.nodes.map((n) => n.id);
  /** @type {string[][]} */
  const sets = [];
  /**
   * @param {number} start
   * @param {string[]} chosen
   */
  const grow = (start, chosen) => {
    if (chosen.length === BLANKS) {
      sets.push(chosen);
      return;
    }
    for (let i = start; i < ids.length; i++) {
      if (!chosen.some((c) => touching(map, c, ids[i]))) grow(i + 1, [...chosen, ids[i]]);
    }
  };
  grow(0, []);
  return sets;
}

/**
 * The substances a round hides.
 * @param {ConversionMap} map
 * @param {number} seed
 * @returns {string[]}
 */
export function blanksFor(map, seed) {
  const sets = blankSets(map);
  return sets[Math.floor(rng(seed)() * sets.length)];
}

/**
 * The formulas offered for one hidden substance, in an order fixed by the seed.
 * @param {MapNode} node
 * @param {number} seed
 * @returns {string[]}
 */
export function optionsFor(node, seed) {
  return shuffle(rng(seed), [node.formula, ...node.traps.map((t) => t.formula)]);
}

/**
 * Why a wrong formula does not fit, or null for the right one.
 * @param {MapNode} node
 * @param {string} formula
 * @returns {string | null}
 */
export function whyWrong(node, formula) {
  if (formula === node.formula) return null;
  return (
    node.traps.find((t) => t.formula === formula)?.why ?? 'Chất này không phù hợp với mũi tên.'
  );
}

/**
 * The arrows at a substance.
 * @param {ConversionMap} map
 * @param {string} id
 * @returns {MapEdge[]}
 */
export function edgesAt(map, id) {
  return map.edges.filter((e) => e.from === id || e.to === id);
}

/**
 * An arrow as a line of text, with '?' for a substance still hidden; it also
 * gives screen readers what the drawing shows.
 * @param {ConversionMap} map
 * @param {MapEdge} edge
 * @param {readonly string[]} open ids still hidden
 */
export function clueText(map, edge, open) {
  const name = (/** @type {string} */ id) =>
    open.includes(id) ? '?' : prettyFormula(nodeOf(map, id).formula);
  return `${name(edge.from)} ${edge.label.join(' ')} → ${name(edge.to)}`;
}
