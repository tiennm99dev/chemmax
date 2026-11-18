// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { error } from '@sveltejs/kit';
import { errorPage } from '#lib/core/copy.vi.js';
import { gradeSlug, grades, lesson } from '#lib/curriculum/index.js';
import { termsForLesson } from '#lib/core/glossary.js';
import { renderLesson } from '#lib/core/render-content.server.js';

/** @typedef {import('#lib/core/content-schema.js').LessonContent} LessonContent */

/**
 * Written lesson content, keyed by `lop-N/<chuong>/<bai>`. Eager, but this module
 * only runs on the server at prerender time, so lesson data never ships as code.
 */
const contents = /** @type {Record<string, LessonContent>} */ (
  Object.fromEntries(
    Object.entries(
      import.meta.glob('/src/lib/lessons/*/*/*/content.vi.js', { eager: true, import: 'default' }),
    ).map(([path, content]) => [
      path.replace(/^\/src\/lib\/lessons\//, '').replace(/\/content\.vi\.js$/, ''),
      content,
    ]),
  )
);

/**
 * Every curriculum lesson, written or not: unwritten ones prerender as stubs.
 * @type {import('./$types').EntryGenerator}
 */
export function entries() {
  return grades().flatMap((g) =>
    g.chapters.flatMap((c) =>
      c.lessons.map((l) => ({ grade: gradeSlug(g.grade), chapter: c.slug, lesson: l.slug })),
    ),
  );
}

/**
 * Renders the lesson's TeX to HTML here, so the client never loads KaTeX for
 * content, and picks the lesson's glossary entries, so glossary data never
 * ships to the client. A stub returns `content: null`.
 * @type {import('./$types').PageServerLoad}
 */
export function load({ params }) {
  if (!lesson(params.grade, params.chapter, params.lesson)) error(404, errorPage.notFound);
  const content = contents[`${params.grade}/${params.chapter}/${params.lesson}`];
  return {
    content: content ? renderLesson(content) : null,
    terms: termsForLesson(Number(params.grade.slice('lop-'.length)), params.chapter, params.lesson),
  };
}
