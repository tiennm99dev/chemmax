// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { termsByGrade } from '#lib/core/glossary.js';

/**
 * The glossary is built here at prerender time, so its data reaches the page
 * as `__data.json` and never as a client chunk.
 * @type {import('./$types').PageServerLoad}
 */
export function load() {
  return { sections: termsByGrade() };
}
