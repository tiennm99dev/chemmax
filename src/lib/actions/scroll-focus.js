// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Keyboard access to boxes that scroll. A box whose content is wider or taller
 * than it can only be scrolled by keyboard once it can take focus, and Safari
 * does not focus such a box by itself.
 *
 * `use:scrollFocus` puts one box in the tab order while its content is wider
 * or taller than the box, so a keyboard user can focus it and scroll it with
 * the arrow keys; once everything fits it leaves the tab order again. Pair it with
 * `focusRing` so the focused box shows a ring.
 *
 * `use:scrollRegions` does the same for every scrolling box inside a lesson
 * (`.overflow-x-auto`, `.overflow-y-auto`, `.overflow-auto`) and every display
 * formula (`.katex-display`), so widget boxes need no action of their own.
 * Height counts only for boxes meant to scroll up and down (`.overflow-y-auto`,
 * `.overflow-auto`): a tall glyph in a sideways box or a formula is not a
 * reason to stop there. A box that holds a control already has a focus stop
 * and is left alone, and so is a tabindex an author or `scrollFocus` set.
 */

/** Marks a box whose tabindex `scrollFocus` manages. */
const OWNED_BY_BOX = 'data-scroll-focus';
/** Marks a box whose tabindex `scrollRegions` set. */
const OWNED_BY_REGIONS = 'data-scroll-region';

const SCROLLERS = '.overflow-x-auto, .overflow-y-auto, .overflow-auto, .katex-display';
/** Boxes meant to scroll up and down, whose height counts as overflow. */
const TALL_SCROLLERS = '.overflow-y-auto, .overflow-auto';
const FOCUSABLE = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Runs `update` again once web fonts have loaded: a formula drawn in the
 * KaTeX fonts can grow wider than it was in the fallback font.
 * @param {() => void} update
 */
function afterFonts(update) {
  /** @type {FontFaceSet | undefined} */
  const fonts = typeof document === 'undefined' ? undefined : document.fonts;
  fonts?.ready.then(update, () => {});
}

/**
 * @param {HTMLElement} node
 */
export function scrollFocus(node) {
  node.setAttribute?.(OWNED_BY_BOX, '');
  const update = () => {
    if (node.scrollWidth > node.clientWidth || node.scrollHeight > node.clientHeight) {
      node.tabIndex = 0;
    } else node.removeAttribute('tabindex');
  };
  update();
  afterFonts(update);
  // The box keeps its size when its content grows wider, so watch the content too.
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
  observer?.observe(node);
  const content = node.firstElementChild;
  if (content) observer?.observe(content);
  return {
    destroy() {
      observer?.disconnect();
    },
  };
}

/**
 * Gives one scrolling box a tab stop while it overflows and holds nothing
 * focusable, and takes away only a tab stop this action set.
 * @param {Element} box
 */
export function updateRegion(box) {
  const el = /** @type {HTMLElement} */ (box);
  if (el.hasAttribute(OWNED_BY_BOX)) return;
  const owned = el.hasAttribute(OWNED_BY_REGIONS);
  if (!owned && el.hasAttribute('tabindex')) return;
  const tall = el.matches(TALL_SCROLLERS) && el.scrollHeight > el.clientHeight;
  const needs = (el.scrollWidth > el.clientWidth || tall) && !el.querySelector(FOCUSABLE);
  if (needs) {
    el.tabIndex = 0;
    el.setAttribute(OWNED_BY_REGIONS, '');
  } else if (owned) {
    el.removeAttribute('tabindex');
    el.removeAttribute(OWNED_BY_REGIONS);
  }
}

/**
 * @param {HTMLElement} root
 */
export function scrollRegions(root) {
  let queued = false;
  const update = () => {
    queued = false;
    root.querySelectorAll(SCROLLERS).forEach(updateRegion);
  };
  const schedule = () => {
    if (queued) return;
    queued = true;
    (typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame)(update);
  };
  update();
  afterFonts(update);
  const mutations = typeof MutationObserver === 'undefined' ? null : new MutationObserver(schedule);
  mutations?.observe(root, { childList: true, subtree: true });
  const hasWindow = typeof window !== 'undefined';
  if (hasWindow) window.addEventListener('resize', schedule);
  return {
    destroy() {
      mutations?.disconnect();
      if (hasWindow) window.removeEventListener('resize', schedule);
    },
  };
}
