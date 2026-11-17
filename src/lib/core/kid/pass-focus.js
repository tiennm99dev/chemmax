// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { tick } from 'svelte';

/** @typedef {HTMLElement | SVGElement | null | undefined} FocusTarget */

/**
 * A button that a press has just disabled drops keyboard focus to the page, so
 * hand it to the given element once the page has updated. `to` may be a getter,
 * read after the update, for a target that only renders then (a "Chơi lại"
 * button bound with `bind:this`).
 * @param {HTMLButtonElement | undefined} from
 * @param {FocusTarget | (() => FocusTarget)} to
 */
export async function passFocus(from, to) {
  await tick();
  if (!from?.disabled) return;
  const target = typeof to === 'function' ? to() : to;
  target?.focus();
}
