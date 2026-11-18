// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { grades, lesson as findLesson, lessonPath, lessonStatus } from '#lib/curriculum/index.js';
import { KID_MAX_GRADE } from './band.js';
import { fold } from './fold.js';
import { oldToneMarks } from './tone-marks.js';

export { fold };

/**
 * The "Thuật ngữ" glossary: one site-owned data file per grade,
 * `src/lib/glossary/lop-<N>.js`, each a default-exported array of entries.
 * Only server code (the glossary page and lesson loads) imports this module,
 * so glossary data never ships in a client chunk.
 */

/**
 * One glossary entry, as a data file writes it.
 * @typedef {object} GlossaryEntry
 * @property {string} id Kebab-case ASCII of the term, unique inside its file.
 * @property {string} term The Vietnamese term, lower case unless a proper name.
 * @property {string} en The standard English name, singular.
 * @property {string} def Plain text, one or two sentences, ending with a full stop.
 * @property {string} lesson `<chapter slug>/<lesson slug>` of the grade's lesson that defines it.
 * @property {string[]} [see] Related entries: an `id` of the same grade, or `lop-N/<id>`.
 * @property {string[]} [aka] Other names, symbols or abbreviations, searchable.
 */

/** @typedef {{ grade: number, entries: GlossaryEntry[] }} GlossaryFile */

/**
 * An entry ready for the page: links resolved, search key folded.
 * @typedef {object} GlossaryItem
 * @property {string} anchor `lop-N-<id>`, the element id on `/thuat-ngu/`.
 * @property {string} term
 * @property {string} en
 * @property {string} def
 * @property {string[]} aka
 * @property {string} key Folded term, English name and other names, for search.
 * @property {{ title: string, path: string }} lesson
 * @property {Array<{ anchor: string, term: string }>} see
 */

/** @typedef {{ grade: number, entries: GlossaryItem[] }} GlossarySection */

/** @typedef {{ anchor: string, term: string }} LessonTerm */

/** Longest definition, in characters; grades 1-5 get the shorter one. */
export const DEF_MAX = 240;
export const KID_DEF_MAX = 140;

/** Entries per grade file: the floor is `max(MIN_TERMS, ⌈theory lessons ÷ 3⌉)`. */
export const MIN_TERMS = 8;
export const MAX_TERMS = 60;
export const MAX_PER_LESSON = 4;

/** Keys an entry may have, with whether it must. */
const KEYS = { id: true, term: true, en: true, def: true, lesson: true, see: false, aka: false };

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SEE_RE = /^(?:lop-(\d+)\/)?([a-z0-9]+(?:-[a-z0-9]+)*)$/;

const collator = new Intl.Collator('vi');

const modules = /** @type {Record<string, GlossaryEntry[]>} */ (
  import.meta.glob('/src/lib/glossary/lop-*.js', { eager: true, import: 'default' })
);

/** Every glossary file on disk, by ascending grade. */
export const glossaryFiles = /** @type {GlossaryFile[]} */ (
  Object.entries(modules)
    .map(([path, entries]) => ({ grade: Number(/lop-(\d+)\.js$/.exec(path)?.[1]), entries }))
    .sort((a, b) => a.grade - b.grade)
);

/**
 * @param {number} grade
 * @param {string} id
 */
export function anchorOf(grade, id) {
  return `lop-${grade}-${id}`;
}

/**
 * The grade and id a `see` reference points at, from an entry of `grade`.
 * @param {number} grade
 * @param {string} ref
 * @returns {{ grade: number, id: string } | null}
 */
export function parseSee(grade, ref) {
  const m = SEE_RE.exec(ref);
  if (!m) return null;
  return { grade: m[1] ? Number(m[1]) : grade, id: m[2] };
}

/**
 * @param {GlossaryFile[]} files
 * @param {number} grade
 * @param {string} id
 */
function findEntry(files, grade, id) {
  return files.find((f) => f.grade === grade)?.entries.find((e) => e.id === id);
}

/** @param {GlossaryEntry[]} entries */
const sorted = (entries) => [...entries].sort((a, b) => collator.compare(a.term, b.term));

/**
 * The page's sections: one per curriculum grade, in grade order, entries
 * sorted alphabetically in Vietnamese. A grade with no entries yet keeps its
 * (empty) section, so `/thuat-ngu/#lop-N` links from the grade hubs resolve.
 * @param {GlossaryFile[]} [files]
 * @returns {GlossarySection[]}
 */
export function termsByGrade(files = glossaryFiles) {
  return grades().map(({ grade }) => ({
    grade,
    entries: sorted(files.find((f) => f.grade === grade)?.entries ?? []).map((e) => {
      const [chapter, slug] = e.lesson.split('/');
      const l = findLesson(grade, chapter, slug);
      return {
        anchor: anchorOf(grade, e.id),
        term: e.term,
        en: e.en,
        def: e.def,
        aka: e.aka ?? [],
        key: fold([e.term, e.en, ...(e.aka ?? [])].join(' | ')),
        lesson: { title: l?.title ?? e.lesson, path: lessonPath(grade, chapter, slug) },
        see: (e.see ?? []).flatMap((ref) => {
          const to = parseSee(grade, ref);
          const target = to && findEntry(files, to.grade, to.id);
          return to && target ? [{ anchor: anchorOf(to.grade, to.id), term: target.term }] : [];
        }),
      };
    }),
  }));
}

/**
 * Entries a lesson defines, for its "Thuật ngữ trong bài" block.
 * @param {number} grade
 * @param {string} chapter chapter slug
 * @param {string} lesson lesson slug
 * @param {GlossaryFile[]} [files]
 * @returns {LessonTerm[]}
 */
export function termsForLesson(grade, chapter, lesson, files = glossaryFiles) {
  const entries = files.find((f) => f.grade === grade)?.entries ?? [];
  return sorted(entries.filter((e) => e.lesson === `${chapter}/${lesson}`)).map((e) => ({
    anchor: anchorOf(grade, e.id),
    term: e.term,
  }));
}

/** @param {unknown} v */
const isText = (v) => typeof v === 'string' && v.length > 0 && v === v.trim();

/**
 * What is wrong with a definition, or null.
 * @param {string} def
 * @param {string} term
 * @param {number} grade
 */
function defError(def, term, grade) {
  const max = grade <= KID_MAX_GRADE ? KID_DEF_MAX : DEF_MAX;
  if (def.length > max) return `def is ${def.length} characters, over ${max}`;
  if (!def.endsWith('.')) return 'def must end with a full stop';
  if (/[$\\]/.test(def)) return 'def must be plain text, without TeX';
  if (/<\/?[a-z!]/i.test(def) || /&[a-z#0-9]+;/i.test(def)) return 'def must not hold HTML';
  if (/\*\*|__|`|\[[^\]]*\]\(/.test(def)) return 'def must not hold Markdown';
  if (/\s{2,}/.test(def)) return 'def has a run of spaces';
  const sentences = def.split(/[.!?…]\s+(?=\p{Lu})/u).length;
  if (sentences > 2) return `def has ${sentences} sentences, at most 2`;
  if (fold(def).startsWith(fold(term))) return 'def must not open by repeating the term';
  return null;
}

/**
 * Every rule a set of glossary files breaks, as `lop-N/<id>: message` lines.
 * An empty file is allowed (its grade is not written yet); a written file must
 * meet the per-grade count.
 * @param {GlossaryFile[]} [files]
 * @returns {string[]}
 */
export function glossaryErrors(files = glossaryFiles) {
  /** @type {string[]} */
  const errors = [];
  const byGrade = new Map(grades().map((g) => [g.grade, g]));
  /** @type {Map<string, Array<{ grade: number, def: string }>>} */
  const defsByTerm = new Map();

  for (const { grade, entries } of files) {
    const at = (/** @type {string} */ where, /** @type {string} */ msg) =>
      errors.push(`lop-${grade}${where ? `/${where}` : ''}: ${msg}`);
    const g = byGrade.get(grade);
    if (!g) {
      at('', 'this grade is not in the curriculum');
      continue;
    }
    if (!Array.isArray(entries)) {
      at('', 'the default export must be an array');
      continue;
    }

    const ids = new Set();
    const terms = new Set();
    /** @type {Map<string, number>} */
    const perLesson = new Map();

    entries.forEach((e, i) => {
      const where = typeof e?.id === 'string' ? e.id : `#${i}`;
      if (!e || typeof e !== 'object') return at(where, 'entry must be an object');
      for (const key of Object.keys(e)) {
        if (!(key in KEYS)) at(where, `unknown key "${key}"`);
      }
      for (const [key, required] of Object.entries(KEYS)) {
        if (required && !isText(/** @type {any} */ (e)[key])) {
          at(where, `"${key}" must be a non-empty trimmed string`);
        }
      }
      for (const key of /** @type {const} */ (['see', 'aka'])) {
        const list = e[key];
        if (list !== undefined && (!Array.isArray(list) || !list.every(isText) || !list.length)) {
          at(where, `"${key}" must be a non-empty array of non-empty strings`);
        }
      }
      if (!isText(e.id) || !isText(e.term) || !isText(e.en)) return;
      if (!isText(e.def) || !isText(e.lesson)) return;

      if (!ID_RE.test(e.id)) at(where, 'id must be kebab-case ASCII');
      if (ids.has(e.id)) at(where, 'id is used twice in this file');
      ids.add(e.id);

      const folded = fold(e.term);
      if (terms.has(folded)) at(where, `term "${e.term}" appears twice in this file`);
      terms.add(folded);
      const sameTerm = defsByTerm.get(folded) ?? [];
      sameTerm.push({ grade, def: e.def });
      defsByTerm.set(folded, sameTerm);

      if (!/^[\x20-\x7e]+$/.test(e.en)) at(where, 'en must be ASCII');

      for (const [key, text] of /** @type {const} */ ([
        ['term', e.term],
        ['def', e.def],
        ...(e.aka ?? []).map((a) => /** @type {const} */ (['aka', a])),
      ])) {
        if (text.normalize('NFC') !== text) at(where, `${key} must be NFC`);
        const old = oldToneMarks(text);
        if (old.length) at(where, `${key} uses old-style tone marks: ${old.join(', ')}`);
      }
      const bad = defError(e.def, e.term, grade);
      if (bad) at(where, bad);

      const [chapter, slug, extra] = e.lesson.split('/');
      if (extra !== undefined || !slug || !findLesson(grade, chapter, slug)) {
        at(where, `lesson "${e.lesson}" is not a lesson of lop-${grade}`);
      } else if (lessonStatus(grade, chapter, slug) !== 'live') {
        at(where, `lesson "${e.lesson}" is not live`);
      }
      perLesson.set(e.lesson, (perLesson.get(e.lesson) ?? 0) + 1);

      for (const ref of e.see ?? []) {
        const to = parseSee(grade, ref);
        if (!to) at(where, `see "${ref}" must be an id or lop-N/<id>`);
        else if (!findEntry(files, to.grade, to.id)) at(where, `see "${ref}" has no entry`);
        else if (to.grade === grade && to.id === e.id) at(where, 'see points at itself');
      }
    });

    for (const [lessonRef, n] of perLesson) {
      if (n > MAX_PER_LESSON) at('', `${n} entries for ${lessonRef}, at most ${MAX_PER_LESSON}`);
    }
    if (entries.length > 0) {
      const theory = g.chapters.flatMap((c) => c.lessons).filter((l) => l.kind === 'theory');
      const floor = Math.max(MIN_TERMS, Math.ceil(theory.length / 3));
      if (entries.length < floor) at('', `${entries.length} entries, at least ${floor}`);
      if (entries.length > MAX_TERMS) at('', `${entries.length} entries, at most ${MAX_TERMS}`);
    }
  }

  for (const list of defsByTerm.values()) {
    for (let i = 1; i < list.length; i++) {
      const twin = list.slice(0, i).find((d) => d.def === list[i].def);
      if (twin) {
        errors.push(
          `lop-${list[i].grade}: repeats the definition of lop-${twin.grade} word for word`,
        );
      }
    }
  }
  return errors;
}
