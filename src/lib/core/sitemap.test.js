// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { describe, expect, it } from 'vitest';
import { grades, lessonPath, strands } from '#lib/curriculum/index.js';
import { sitemapPaths, sitemapXml } from './sitemap.js';

describe('sitemap', () => {
  const paths = sitemapPaths();

  it('lists the home and glossary pages, every lesson, chapter, grade and strand hub once', () => {
    const lessons = grades().flatMap((g) =>
      g.chapters.flatMap((c) => c.lessons.map((l) => lessonPath(g.grade, c.slug, l.slug))),
    );
    for (const p of lessons) expect(paths).toContain(p);
    const chapters = grades().reduce((n, g) => n + g.chapters.length, 0);
    expect(paths).toContain('/thuat-ngu/');
    expect(paths).toHaveLength(2 + grades().length + chapters + lessons.length + strands().length);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('writes one url element per address', () => {
    const xml = sitemapXml(['https://example.com/a/', 'https://example.com/b/']);
    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
    expect(xml.match(/<url><loc>/g)).toHaveLength(2);
    expect(xml).toContain('<loc>https://example.com/b/</loc>');
  });
});
