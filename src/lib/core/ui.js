// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Shared Tailwind class strings for core components, so focus rings and
 * buttons look the same everywhere. Tailwind scans this file for classes.
 */

export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2';

const buttonBase = `inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--btn-radius)] px-4 py-2 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${focusRing}`;

export const button = {
  primary: `${buttonBase} bg-indigo-600 text-white hover:bg-indigo-700`,
  secondary: `${buttonBase} border border-indigo-600 bg-white text-indigo-700 hover:bg-indigo-50`,
  quiet: `${buttonBase} border border-slate-300 bg-white text-slate-700 hover:bg-slate-100`,
};

export const textInput = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-lg tabular-nums ${focusRing}`;

/** Surfaces take the band's radius (`--card-radius` in app.css). */
export const card = 'rounded-[var(--card-radius)] border border-slate-200 bg-white';

/** Shape of a hub link card: the band's radius and padding, with no colours. */
export const hubCardShape = `rounded-[var(--card-radius)] p-[var(--hub-pad)] transition hover:border-indigo-400 hover:shadow-sm ${focusRing}`;

/** A hub link card on white. */
export const hubCard = `${hubCardShape} border border-slate-200 bg-white`;

/**
 * Class of a page's `h1`: bold and large up to grade 9, calmer in thpt.
 * @param {import('./band.js').Band} band
 */
export const pageTitle = (band) =>
  band === 'thpt'
    ? 'text-3xl font-semibold tracking-tight text-slate-900'
    : 'text-3xl font-bold text-slate-900 sm:text-4xl';
