// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { error } from '@sveltejs/kit';
import { errorPage } from '#lib/core/copy.vi.js';
import { grade, gradeSlug, grades } from '#lib/curriculum/index.js';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return grades().map((g) => ({ grade: gradeSlug(g.grade) }));
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const g = grade(params.grade);
  if (!g) error(404, errorPage.notFound);
  return { grade: g };
}
