// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { describe, expect, it, vi } from 'vitest';
import { passFocus } from './pass-focus.js';

/** @param {boolean} disabled */
const button = (disabled) =>
  /** @type {HTMLButtonElement} */ (/** @type {unknown} */ ({ disabled }));
const target = () =>
  /** @type {HTMLElement & { focus: import('vitest').Mock }} */ (
    /** @type {unknown} */ ({ focus: vi.fn() })
  );

describe('passFocus', () => {
  it('focuses the target once the pressed button is disabled', async () => {
    const to = target();
    await passFocus(button(true), to);
    expect(to.focus).toHaveBeenCalledOnce();
  });

  it('leaves focus alone while the button stays enabled', async () => {
    const to = target();
    await passFocus(button(false), to);
    expect(to.focus).not.toHaveBeenCalled();
  });

  it('reads a getter only after the update', async () => {
    /** @type {ReturnType<typeof target> | undefined} */
    let later;
    const pending = passFocus(button(true), () => later);
    later = target();
    await pending;
    expect(later.focus).toHaveBeenCalledOnce();
  });
});
