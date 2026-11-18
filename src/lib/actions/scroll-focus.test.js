// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { scrollFocus, updateRegion } from './scroll-focus.js';

/**
 * Just enough of an element for the action: its sizes and its tabindex.
 * @param {number} scrollWidth
 * @param {number} clientWidth
 * @param {number} [scrollHeight]
 * @param {number} [clientHeight]
 */
function box(scrollWidth, clientWidth, scrollHeight = 100, clientHeight = 100) {
  return {
    scrollWidth,
    clientWidth,
    scrollHeight,
    clientHeight,
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

  it('makes a box that scrolls up and down focusable', () => {
    const node = box(300, 300, 900, 250);
    scrollFocus(/** @type {any} */ (node)).destroy();
    expect(node.tabIndex).toBe(0);
  });

  it('leaves a box whose content fits out of the tab order', () => {
    const node = box(300, 300);
    scrollFocus(/** @type {any} */ (node)).destroy();
    expect(node.removed).toBe(true);
  });
});

/**
 * A scrolling box for `updateRegion`: sizes, class, attributes and whether it
 * holds a focusable element.
 * @param {number} scrollWidth
 * @param {number} clientWidth
 * @param {{ control?: boolean; attrs?: Record<string, string>; className?: string; scrollHeight?: number; clientHeight?: number }} [opts]
 */
function region(
  scrollWidth,
  clientWidth,
  {
    control = false,
    attrs = {},
    className = 'overflow-x-auto',
    scrollHeight = 100,
    clientHeight = 100,
  } = {},
) {
  /** @type {Record<string, string>} */
  const attributes = { ...attrs };
  return {
    scrollWidth,
    clientWidth,
    scrollHeight,
    clientHeight,
    attributes,
    matches: (/** @type {string} */ selector) =>
      selector.split(',').some((s) => s.trim() === `.${className}`),
    get tabIndex() {
      return 'tabindex' in attributes ? Number(attributes.tabindex) : -1;
    },
    set tabIndex(v) {
      attributes.tabindex = String(v);
    },
    hasAttribute: (/** @type {string} */ n) => n in attributes,
    setAttribute: (/** @type {string} */ n, /** @type {string} */ v) => (attributes[n] = v),
    removeAttribute: (/** @type {string} */ n) => delete attributes[n],
    querySelector: () => (control ? {} : null),
  };
}

describe('updateRegion', () => {
  it('gives an overflowing box with nothing focusable a tab stop', () => {
    const node = region(600, 300);
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBe('0');
  });

  it('leaves a box with a button inside alone', () => {
    const node = region(600, 300, { control: true });
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBeUndefined();
  });

  it('leaves a box that fits alone', () => {
    const node = region(300, 300);
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBeUndefined();
  });

  it('never removes a tabindex an author set', () => {
    const node = region(300, 300, { attrs: { tabindex: '0' } });
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBe('0');
  });

  it('takes back its own tab stop once the box fits', () => {
    const node = region(600, 300);
    updateRegion(/** @type {any} */ (node));
    node.scrollWidth = 300;
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBeUndefined();
  });

  it('leaves a box that scrollFocus manages to it', () => {
    const node = region(300, 300, { attrs: { 'data-scroll-focus': '', tabindex: '0' } });
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBe('0');
  });

  it('gives a tall box that scrolls up and down a tab stop', () => {
    const node = region(300, 300, {
      className: 'overflow-y-auto',
      scrollHeight: 900,
      clientHeight: 250,
    });
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBe('0');
  });

  it('ignores the height of a sideways box that fits sideways', () => {
    const node = region(300, 300, {
      className: 'overflow-x-auto',
      scrollHeight: 900,
      clientHeight: 250,
    });
    updateRegion(/** @type {any} */ (node));
    expect(node.attributes.tabindex).toBeUndefined();
  });
});
