// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * `use:scrollFocus` puts a horizontally scrolling box in the tab order while
 * its content is wider than the box, so a keyboard user can focus it and
 * scroll it with the arrow keys; once everything fits it leaves the tab order
 * again. Pair it with `focusRing` so the focused box shows a ring.
 * @param {HTMLElement} node
 */
export function scrollFocus(node) {
  const update = () => {
    if (node.scrollWidth > node.clientWidth) node.tabIndex = 0;
    else node.removeAttribute('tabindex');
  };
  update();
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
  observer?.observe(node);
  return {
    destroy() {
      observer?.disconnect();
    },
  };
}
