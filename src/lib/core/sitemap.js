// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { gradeSlug, grades, lessonPath, strands } from '#lib/curriculum/index.js';

/**
 * Every page a search engine should index, root-relative with the trailing slash the
 * prerendered directories need. Legacy redirect pages are left out on purpose.
 * @returns {string[]}
 */
export function sitemapPaths() {
  return [
    '/',
    ...grades().flatMap((g) => [
      `/${gradeSlug(g.grade)}/`,
      ...g.chapters.flatMap((c) => [
        `/${gradeSlug(g.grade)}/${c.slug}/`,
        ...c.lessons.map((l) => lessonPath(g.grade, c.slug, l.slug)),
      ]),
    ]),
    ...strands().map((s) => `/${s.slug}/`),
  ];
}

/**
 * The sitemap XML for the given absolute page URLs.
 * @param {string[]} urls
 */
export function sitemapXml(urls) {
  const entries = urls.map((u) => `  <url><loc>${u}</loc></url>\n`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}</urlset>\n`;
}
