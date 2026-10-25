/**
 * Old URLs of this site, each prerendered as a meta-refresh page pointing at its
 * new curriculum path. Site-owned: sync-core.sh only creates this file.
 */

/** @typedef {{ strand: string, slug: string, to: string }} LegacyRedirect */

/** @type {LegacyRedirect[]} */
export const legacyRedirects = [];

/**
 * @param {string} strand
 * @param {string} slug
 * @returns {LegacyRedirect | undefined}
 */
export function findRedirect(strand, slug) {
  return legacyRedirects.find((r) => r.strand === strand && r.slug === slug);
}
