// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { error } from '@sveltejs/kit';
import { errorPage } from '#lib/core/copy.vi.js';
import { findRedirect, legacyRedirects } from '#lib/curriculum/legacy-redirects.js';

// A meta refresh does the redirect, so the page ships no script and needs no
// CSP hash.
export const csr = false;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return legacyRedirects.map(({ strand, slug }) => ({ strand, slug }));
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const redirect = findRedirect(params.strand, params.slug);
  if (!redirect) error(404, errorPage.notFound);
  return { to: redirect.to };
}
