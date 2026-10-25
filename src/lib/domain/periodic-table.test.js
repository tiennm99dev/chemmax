import { describe, expect, it } from 'vitest';
import { ELEMENTS, element } from './elements.js';
import {
  CATEGORY_COLORS,
  NO_VALUE_COLOR,
  cellColor,
  electronegativityColor,
  legend,
  neighbor,
} from './periodic-table.js';

/** @param {string} symbol */
const z = (symbol) => element(symbol)?.z ?? 0;

describe('periodic table keyboard moves', () => {
  it('moves along a row, skipping the gap in periods 1-3', () => {
    expect(neighbor(z('H'), 'right')).toBe(z('He'));
    expect(neighbor(z('Be'), 'right')).toBe(z('B'));
    expect(neighbor(z('B'), 'left')).toBe(z('Be'));
    expect(neighbor(z('Fe'), 'right')).toBe(z('Co'));
  });

  it('moves along a column', () => {
    expect(neighbor(z('H'), 'down')).toBe(z('Li'));
    expect(neighbor(z('He'), 'down')).toBe(z('Ne'));
    expect(neighbor(z('Na'), 'up')).toBe(z('Li'));
    expect(neighbor(z('Fe'), 'down')).toBe(z('Ru'));
    expect(neighbor(z('Hf'), 'down')).toBe(z('Rf'));
    expect(neighbor(z('Ce'), 'down')).toBe(z('Th'));
  });

  it('stays put at an edge', () => {
    expect(neighbor(z('H'), 'up')).toBe(z('H'));
    expect(neighbor(z('H'), 'left')).toBe(z('H'));
    expect(neighbor(z('Og'), 'right')).toBe(z('Og'));
    expect(neighbor(z('Lr'), 'down')).toBe(z('Lr'));
  });

  it('reaches every element from hydrogen', () => {
    const seen = new Set([1]);
    const queue = [1];
    while (queue.length) {
      const at = /** @type {number} */ (queue.shift());
      for (const dir of /** @type {const} */ (['up', 'down', 'left', 'right'])) {
        const next = neighbor(at, dir);
        if (!seen.has(next)) {
          seen.add(next);
          queue.push(next);
        }
      }
    }
    expect(seen.size).toBe(118);
  });
});

describe('periodic table colours', () => {
  it('colours by category, block, metal kind and electronegativity', () => {
    const fe = ELEMENTS[25];
    expect(cellColor(fe, 'category')).toBe(CATEGORY_COLORS['transition-metal']);
    expect(cellColor(ELEMENTS[0], 'block')).not.toBe(cellColor(fe, 'block'));
    expect(cellColor(ELEMENTS[1], 'electronegativity')).toBe(NO_VALUE_COLOR);
    expect(cellColor(ELEMENTS[16], 'metal')).toBe(cellColor(ELEMENTS[7], 'metal'));
  });

  it('runs electronegativity from pale to deep', () => {
    expect(electronegativityColor(0.7)).toBe('rgb(254 249 195)');
    expect(electronegativityColor(4)).toBe('rgb(234 88 12)');
    expect(electronegativityColor(9)).toBe('rgb(234 88 12)');
  });

  it('builds a legend for each mode', () => {
    expect(legend('category')).toHaveLength(10);
    expect(legend('block').map((l) => l.label)).toEqual(['Khối s', 'Khối p', 'Khối d', 'Khối f']);
    expect(legend('metal')).toHaveLength(3);
    expect(legend('electronegativity').at(-1)?.color).toBe(NO_VALUE_COLOR);
  });
});
