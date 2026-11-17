// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { scrollFocus } from './scroll-focus.js';

/**
 * Just enough of an element for the action: its widths and its tabindex.
 * @param {number} scrollWidth
 * @param {number} clientWidth
 */
function box(scrollWidth, clientWidth) {
  return {
    scrollWidth,
    clientWidth,
    tabIndex: -1,
    removed: false,
    removeAttribute(/** @type {string} */ name) {
      if (name === 'tabindex') this.removed = true;
    },
  };
}

describe('scrollFocus', () => {
  it('makes a box that overflows focusable', () => {
    const node = box(600, 300);
    scrollFocus(/** @type {any} */ (node)).destroy();
    expect(node.tabIndex).toBe(0);
    expect(node.removed).toBe(false);
  });

  it('leaves a box whose content fits out of the tab order', () => {
    const node = box(300, 300);
    scrollFocus(/** @type {any} */ (node)).destroy();
    expect(node.removed).toBe(true);
  });
});
