// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { fold } from './fold.js';

/**
 * Search on the "Thuật ngữ" page. The page gets entries without a search key
 * (it would double the inline hydration data), so the client derives it here,
 * once per entry.
 */

/** @typedef {{ term: string, en: string, aka: string[] }} Searchable */

/**
 * Folded term, English name and other names of an entry, for search.
 * @param {Searchable} e
 */
export function searchKey(e) {
  return fold([e.term, e.en, ...e.aka].join(' | '));
}

/**
 * Whether the English name says something the term does not, so the page shows it.
 * @param {{ term: string, en: string }} e
 */
export function showsEnglish(e) {
  return fold(e.en) !== fold(e.term);
}

/**
 * The sections with only the entries whose key holds `needle`, dropping empty
 * ones; all sections for an empty needle.
 * @template {{ anchor: string }} E
 * @template {{ entries: E[] }} S
 * @param {S[]} sections
 * @param {Map<string, string>} keys search key by entry anchor, from `searchKey`
 * @param {string} needle already folded
 * @returns {S[]}
 */
export function filterSections(sections, keys, needle) {
  if (!needle) return sections;
  return sections
    .map((s) => ({ ...s, entries: s.entries.filter((e) => keys.get(e.anchor)?.includes(needle)) }))
    .filter((s) => s.entries.length > 0);
}
