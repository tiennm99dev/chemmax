/**
 * Layout, colouring and keyboard moves for the periodic table component.
 * Pure: the grid comes from `tablePosition` in elements.js.
 */
import { ELEMENTS, CATEGORY_LABELS, metalKind, tablePosition } from './elements.js';

/** @typedef {import('./elements.js').Element} Element */
/** @typedef {'category' | 'block' | 'metal' | 'electronegativity'} ColorMode */
/** @typedef {'up' | 'down' | 'left' | 'right'} Direction */

/** Fill colours per category, light enough for dark text. */
export const CATEGORY_COLORS = /** @type {Record<import('./elements.js').Category, string>} */ ({
  'alkali-metal': '#fecaca',
  'alkaline-earth-metal': '#fed7aa',
  'transition-metal': '#fde68a',
  'post-transition-metal': '#d9f99d',
  metalloid: '#a7f3d0',
  nonmetal: '#bae6fd',
  halogen: '#c7d2fe',
  'noble-gas': '#e9d5ff',
  lanthanide: '#fbcfe8',
  actinide: '#f5d0fe',
});

export const BLOCK_COLORS = /** @type {Record<import('./elements.js').Block, string>} */ ({
  s: '#fecaca',
  p: '#fde68a',
  d: '#bae6fd',
  f: '#bbf7d0',
});

export const METAL_COLORS = { 'kim-loai': '#bae6fd', 'phi-kim': '#fde68a', 'khi-hiem': '#e9d5ff' };

/** Colour for elements without a value in the current mode. */
export const NO_VALUE_COLOR = '#e2e8f0';

/**
 * Electronegativity colour: pale yellow at 0,7 to deep orange-red at 4,0.
 * @param {number | null} chi
 */
export function electronegativityColor(chi) {
  if (chi === null) return NO_VALUE_COLOR;
  const t = Math.min(1, Math.max(0, (chi - 0.7) / 3.3));
  const from = [254, 249, 195];
  const to = [234, 88, 12];
  const [r, g, b] = from.map((v, i) => Math.round(v + (to[i] - v) * t));
  return `rgb(${r} ${g} ${b})`;
}

/**
 * @param {Element} el
 * @param {ColorMode} mode
 */
export function cellColor(el, mode) {
  if (mode === 'block') return BLOCK_COLORS[el.block];
  if (mode === 'metal') return METAL_COLORS[metalKind(el)];
  if (mode === 'electronegativity') return electronegativityColor(el.electronegativity);
  return CATEGORY_COLORS[el.category];
}

/**
 * Legend entries for a colour mode.
 * @param {ColorMode} mode
 * @returns {Array<{ label: string, color: string }>}
 */
export function legend(mode) {
  if (mode === 'block') {
    return Object.entries(BLOCK_COLORS).map(([b, color]) => ({ label: `Khối ${b}`, color }));
  }
  if (mode === 'metal') {
    return [
      { label: 'Kim loại', color: METAL_COLORS['kim-loai'] },
      { label: 'Phi kim', color: METAL_COLORS['phi-kim'] },
      { label: 'Khí hiếm', color: METAL_COLORS['khi-hiem'] },
    ];
  }
  if (mode === 'electronegativity') {
    return [
      { label: 'χ thấp (0,7)', color: electronegativityColor(0.7) },
      { label: 'χ ≈ 2,3', color: electronegativityColor(2.35) },
      { label: 'χ cao (4,0)', color: electronegativityColor(4) },
      { label: 'Chưa xác định', color: NO_VALUE_COLOR },
    ];
  }
  return Object.entries(CATEGORY_COLORS).map(([c, color]) => ({
    label: CATEGORY_LABELS[/** @type {import('./elements.js').Category} */ (c)],
    color,
  }));
}

const CELLS = ELEMENTS.map((el) => ({ z: el.z, ...tablePosition(el) }));

/**
 * The element reached from `z` by one arrow key: the nearest cell in that
 * direction, preferring the same row (left/right) or the same column
 * (up/down), and skipping gaps. Returns `z` itself at an edge.
 * @param {number} z
 * @param {Direction} dir
 */
export function neighbor(z, dir) {
  const from = CELLS[z - 1];
  if (!from) return z;
  const horizontal = dir === 'left' || dir === 'right';
  const sign = dir === 'right' || dir === 'down' ? 1 : -1;
  let best = z;
  let bestScore = Infinity;
  for (const c of CELLS) {
    const along = horizontal ? (c.col - from.col) * sign : (c.row - from.row) * sign;
    if (along <= 0) continue;
    const across = horizontal ? Math.abs(c.row - from.row) : Math.abs(c.col - from.col);
    const score = across * 100 + along;
    if (score < bestScore) {
      bestScore = score;
      best = c.z;
    }
  }
  return best;
}
