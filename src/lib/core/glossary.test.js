// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/// <reference types="node" />
import { describe, expect, it } from 'vitest';
import { readdirSync, statSync } from 'node:fs';
import { grades, lessonStatus } from '#lib/curriculum/index.js';
import { KID_MAX_GRADE } from './band.js';
import {
  DEF_MAX,
  KID_DEF_MAX,
  MAX_PER_LESSON,
  MIN_TERMS,
  anchorOf,
  fold,
  glossaryErrors,
  glossaryFiles,
  termsByGrade,
  termsForLesson,
} from './glossary.js';

/** @typedef {import('./glossary.js').GlossaryEntry} GlossaryEntry */

const KB = 1024;
const dataDir = new URL('../glossary/', import.meta.url);
const dataFiles = (() => {
  try {
    return readdirSync(dataDir);
  } catch {
    return [];
  }
})();

describe('glossary data files', () => {
  it('follow every entry rule', () => {
    expect(glossaryErrors()).toEqual([]);
  });

  it('exist only as lop-N.js for grades in the curriculum', () => {
    const known = new Set(grades().map((g) => `lop-${g.grade}.js`));
    for (const name of dataFiles) expect(known.has(name), name).toBe(true);
    expect(glossaryFiles).toHaveLength(dataFiles.length);
  });

  it('cover every grade in the curriculum', () => {
    expect(glossaryFiles.filter((f) => f.entries.length > 0).map((f) => f.grade)).toEqual(
      grades().map((g) => g.grade),
    );
  });

  it('stay inside the size budgets', () => {
    let total = 0;
    for (const name of dataFiles) {
      const bytes = statSync(new URL(name, dataDir)).size;
      total += bytes;
      expect(bytes, name).toBeLessThanOrEqual(16 * KB);
    }
    expect(total).toBeLessThanOrEqual(180 * KB);
  });
});

describe('fold', () => {
  it('drops case, diacritics and đ for search', () => {
    expect(fold('Số hữu tỉ')).toBe('so huu ti');
    expect(fold('  Đường   THẲNG ')).toBe('duong thang');
    expect(fold('Phân số')).toBe(fold('phan so'));
  });
});

/** The highest grade and its live theory lessons, as `<chapter>/<lesson>`. */
const top = grades()[grades().length - 1];
const liveTheory = (/** @type {import('#lib/curriculum/index.js').Grade} */ g) =>
  g.chapters.flatMap((c) =>
    c.lessons
      .filter((l) => l.kind === 'theory' && lessonStatus(g.grade, c.slug, l.slug) === 'live')
      .map((l) => `${c.slug}/${l.slug}`),
  );
const floorOf = (/** @type {import('#lib/curriculum/index.js').Grade} */ g) =>
  Math.max(
    MIN_TERMS,
    Math.ceil(g.chapters.flatMap((c) => c.lessons).filter((l) => l.kind === 'theory').length / 3),
  );

/**
 * A valid file of `n` entries for grade `g`, spread over its live lessons.
 * @param {import('#lib/curriculum/index.js').Grade} g
 * @param {number} [n]
 * @returns {GlossaryEntry[]}
 */
function validEntries(g, n = floorOf(g)) {
  const lessons = liveTheory(g);
  return Array.from({ length: n }, (_, i) => ({
    id: `muc-${i + 1}`,
    term: `mục thử ${i + 1}`,
    en: `test term ${i + 1}`,
    def: `Khái niệm dùng để kiểm thử, lớp ${g.grade}, số ${i + 1}.`,
    lesson: lessons[i % lessons.length],
  }));
}

/**
 * Errors of one grade's file after a change to its first entry.
 * @param {Record<string, unknown>} change
 */
function errorsWith(change) {
  const entries = validEntries(top);
  entries[0] = /** @type {GlossaryEntry} */ ({ ...entries[0], ...change });
  return glossaryErrors([{ grade: top.grade, entries }]);
}

describe('glossaryErrors', () => {
  it('accepts a valid file and an empty one', () => {
    expect(liveTheory(top).length * MAX_PER_LESSON).toBeGreaterThanOrEqual(floorOf(top));
    expect(glossaryErrors([{ grade: top.grade, entries: validEntries(top) }])).toEqual([]);
    expect(glossaryErrors([{ grade: top.grade, entries: [] }])).toEqual([]);
  });

  it('rejects a grade outside the curriculum', () => {
    expect(glossaryErrors([{ grade: 99, entries: [] }])).toEqual([
      'lop-99: this grade is not in the curriculum',
    ]);
  });

  it('checks keys, types and ids', () => {
    expect(errorsWith({ extra: 1 }).join()).toMatch(/unknown key "extra"/);
    expect(errorsWith({ en: '' }).join()).toMatch(/"en" must be a non-empty/);
    expect(errorsWith({ term: ' có cách ' }).join()).toMatch(/"term" must be a non-empty trimmed/);
    expect(errorsWith({ id: 'Muc_1' }).join()).toMatch(/kebab-case/);
    expect(errorsWith({ id: 'muc-2' }).join()).toMatch(/id is used twice/);
    expect(errorsWith({ term: 'Mục thu 2' }).join()).toMatch(/appears twice/);
    expect(errorsWith({ en: 'số' }).join()).toMatch(/en must be ASCII/);
    expect(errorsWith({ aka: [] }).join()).toMatch(/"aka" must be a non-empty array/);
    expect(errorsWith({ see: 'muc-2' }).join()).toMatch(/"see" must be a non-empty array/);
  });

  it('checks the definition', () => {
    const at = (/** @type {string} */ def) => errorsWith({ def }).join();
    expect(at(`${'a'.repeat(DEF_MAX)}.`)).toMatch(/over 240/);
    expect(at('Không có dấu chấm')).toMatch(/full stop/);
    expect(at('Số $x^2$ của một số.')).toMatch(/TeX/);
    expect(at('Một <b>số</b> đậm.')).toMatch(/HTML/);
    expect(at('Một **số** đậm.')).toMatch(/Markdown/);
    expect(at('Câu một. Câu hai. Câu ba.')).toMatch(/3 sentences/);
    expect(at('Mục thử 1 là một khái niệm.')).toMatch(/repeating the term/);
    // The old-style word is escaped, so the site-wide tone-mark scan passes this file.
    expect(at('Phép h\u00f3a giải một bài.')).toMatch(/old-style tone marks/);
    expect(at('Một khái niệm. Ví dụ: 2 + 3 = 5.')).toBe('');
    expect(at('Số viết được dưới dạng a/b với b ≠ 0.')).toBe('');
  });

  it.runIf(grades()[0].grade <= KID_MAX_GRADE)('keeps grade 1-5 definitions short', () => {
    const kid = grades()[0];
    const entries = validEntries(kid);
    entries[0] = { ...entries[0], def: `${'a'.repeat(KID_DEF_MAX)}.` };
    expect(glossaryErrors([{ grade: kid.grade, entries }]).join()).toMatch(/over 140/);
  });

  it('checks lessons and see links', () => {
    expect(errorsWith({ lesson: 'khong-co/bai-nao' }).join()).toMatch(/is not a lesson/);
    expect(errorsWith({ lesson: liveTheory(top)[0].split('/')[0] }).join()).toMatch(
      /is not a lesson/,
    );
    expect(errorsWith({ see: ['muc-2'] })).toEqual([]);
    expect(errorsWith({ see: ['muc-404'] }).join()).toMatch(/see "muc-404" has no entry/);
    expect(errorsWith({ see: ['muc-1'] }).join()).toMatch(/points at itself/);
    expect(errorsWith({ see: ['lop-x/muc'] }).join()).toMatch(/must be an id or lop-N/);
  });

  it('checks counts per file and per lesson', () => {
    const few = validEntries(top, floorOf(top) - 1);
    expect(glossaryErrors([{ grade: top.grade, entries: few }]).join()).toMatch(/at least/);
    const crowded = validEntries(top).map((e) => ({ ...e, lesson: liveTheory(top)[0] }));
    expect(glossaryErrors([{ grade: top.grade, entries: crowded }]).join()).toMatch(
      new RegExp(`at most ${MAX_PER_LESSON}`),
    );
  });

  it.runIf(grades().length > 1)('resolves see across grades and rejects copied definitions', () => {
    const other = grades()[grades().length - 2];
    const a = validEntries(other);
    const b = validEntries(top);
    b[0] = { ...b[0], see: [`lop-${other.grade}/muc-1`] };
    expect(
      glossaryErrors([
        { grade: other.grade, entries: a },
        { grade: top.grade, entries: b },
      ]),
    ).toEqual([]);
    b[0] = { ...b[0], def: a[0].def };
    expect(
      glossaryErrors([
        { grade: other.grade, entries: a },
        { grade: top.grade, entries: b },
      ]).join(),
    ).toMatch(/repeats the definition/);
  });
});

describe('termsByGrade and termsForLesson', () => {
  const entries = validEntries(top);
  entries[0] = { ...entries[0], term: 'đường thẳng', aka: ['d'], see: ['muc-2'] };
  entries[1] = { ...entries[1], term: 'ánh xạ' };
  const files = [
    { grade: top.grade, entries },
    { grade: top.grade - 1, entries: [] },
  ];

  it('keeps a section per grade, sorts in Vietnamese order and resolves links', () => {
    const sections = termsByGrade(files);
    expect(sections.map((s) => s.grade)).toEqual(grades().map((g) => g.grade));
    expect(sections.filter((s) => s.entries.length).map((s) => s.grade)).toEqual([top.grade]);
    const own = sections.find((s) => s.grade === top.grade);
    const terms = (own?.entries ?? []).map((e) => e.term);
    expect(terms.indexOf('ánh xạ')).toBeLessThan(terms.indexOf('đường thẳng'));
    expect(terms.indexOf('đường thẳng')).toBeLessThan(terms.indexOf('mục thử 3'));
    const line = own?.entries.find((e) => e.term === 'đường thẳng');
    expect(line).toMatchObject({
      anchor: anchorOf(top.grade, 'muc-1'),
      key: 'duong thang | test term 1 | d',
      see: [{ anchor: anchorOf(top.grade, 'muc-2'), term: 'ánh xạ' }],
    });
    expect(line?.lesson.path).toBe(`/lop-${top.grade}/${entries[0].lesson}/`);
  });

  it('lists the entries of one lesson', () => {
    const [chapter, lesson] = entries[0].lesson.split('/');
    const terms = termsForLesson(top.grade, chapter, lesson, files);
    expect(terms).toContainEqual({ anchor: anchorOf(top.grade, 'muc-1'), term: 'đường thẳng' });
    expect(termsForLesson(top.grade, 'khong-co', 'bai-nao', files)).toEqual([]);
  });
});
