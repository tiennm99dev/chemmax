// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * For tests of generated questions: finds the TeX KaTeX refuses in strict mode,
 * under the page's own policy (`texStrict`): a Vietnamese letter inside a
 * formula passes, as it renders on the page, and any other warning fails.
 * Each distinct span is rendered once and failures come back as a list for one
 * `expect`, so a large sample stays fast when the suite runs under load.
 */
import katex from 'katex';
import { texSource, texStrict } from './katex-options.js';

/**
 * Strict mode as the page applies it, with every warning made an error.
 * @param {string} code
 * @param {string} message
 * @returns {'ignore'}
 */
function pageStrict(code, message) {
  if (texStrict(code, message) === 'ignore') return 'ignore';
  throw new Error(`${message} [${code}]`);
}

/**
 * Every `$...$` span of a rich text.
 * @param {string} text
 * @returns {string[]}
 */
export function texSpans(text) {
  return [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);
}

/**
 * The distinct TeX spans in `texts` that strict mode rejects, each with its error.
 * @param {readonly string[]} texts rich texts
 * @returns {string[]}
 */
export function strictTexFailures(texts) {
  const failures = [];
  for (const tex of new Set(texts.flatMap(texSpans))) {
    try {
      katex.renderToString(texSource(tex), { strict: pageStrict, throwOnError: true });
    } catch (e) {
      failures.push(`${tex}: ${/** @type {Error} */ (e).message}`);
    }
  }
  return failures;
}
