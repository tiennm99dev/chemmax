<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { flushSync } from 'svelte';
  import { resolve } from '$app/paths';
  import { t } from '#lib/i18n/index.js';
  import { gradeSlug } from '#lib/curriculum/index.js';
  import SiteShell from './site-shell.svelte';
  import { bandOf } from './band.js';
  import { glossary as copy } from './copy.vi.js';
  import { fold } from './fold.js';
  import { filterSections, searchKey, showsEnglish } from './glossary-search.js';
  import { card, focusRing, pageTitle, textInput } from './ui.js';

  /**
   * The "Thuật ngữ" page: one section per grade, each with its own band, terms
   * in Vietnamese alphabetical order. The search field filters on the folded
   * term, English name and other names; without JavaScript the full list shows.
   * The entry list carries almost no classes: the style block below styles it
   * from the `gl` class on each grade's list, with band differences on the
   * section's `data-band`, so the prerendered page stays small.
   * @type {{ sections: import('./glossary.js').GlossarySection[] }}
   */
  let { sections } = $props();

  const site = t();
  let query = $state('');
  const needle = $derived(fold(query));
  const keys = $derived(
    new Map(sections.flatMap((s) => s.entries.map((e) => [e.anchor, searchKey(e)]))),
  );
  const english = $derived(
    new Set(sections.flatMap((s) => s.entries.filter(showsEnglish).map((e) => e.anchor))),
  );
  const visible = $derived(filterSections(sections, keys, needle));
  const found = $derived(visible.reduce((n, s) => n + s.entries.length, 0));
  const total = $derived(sections.reduce((n, s) => n + s.entries.length, 0));

  /**
   * Clears the search before an in-page link is followed, so the grade or
   * term it points at is on the page when the browser scrolls to it.
   */
  function showAll() {
    if (query) flushSync(() => (query = ''));
  }

  /** @param {number} grade */
  const label = (grade) => site.grades[gradeSlug(grade)];

  /**
   * Type size and line height of a grade's band, and the height of its jump
   * link: large in tiểu học, compact in thpt. The rest of the band's density
   * is in the style block below, keyed on `data-band`.
   * @param {number} grade
   */
  function look(grade) {
    const band = bandOf(grade);
    if (band === 'tieu-hoc') return { text: 'text-[20px] leading-relaxed', target: 'min-h-12' };
    if (band === 'thpt') return { text: 'text-[15px] leading-snug', target: 'min-h-11' };
    return { text: 'text-base leading-relaxed', target: 'min-h-11' };
  }
</script>

<svelte:head>
  <title>{copy.title} — {site.site.title}</title>
  <meta name="description" content={copy.lead} />
</svelte:head>

<SiteShell width="wide" spot>
  <h1 class="mb-3 {pageTitle('chung')}">{copy.title}</h1>
  <p class="mb-6 text-lg leading-relaxed text-slate-600">{copy.lead}</p>

  <div class="clear-both space-y-8">
    <nav aria-label={copy.jump}>
      <ul class="flex flex-wrap gap-2">
        {#each sections as s (s.grade)}
          <li>
            <a
              href="#lop-{s.grade}"
              onclick={showAll}
              class="inline-flex {look(s.grade)
                .target} items-center rounded-[var(--btn-radius)] border border-slate-300 bg-white px-3 text-indigo-700 underline underline-offset-2 hover:bg-indigo-50 {focusRing}"
              >{label(s.grade)}</a
            >
          </li>
        {/each}
      </ul>
    </nav>

    {#if total === 0}
      <p class="{card} p-4 text-slate-700">{copy.empty}</p>
    {:else}
      <div>
        <label for="glossary-search" class="mb-1 block font-semibold text-slate-800"
          >{copy.search}</label
        >
        <input
          id="glossary-search"
          type="search"
          autocomplete="off"
          spellcheck="false"
          bind:value={query}
          class="{textInput} max-w-md"
        />
        <p role="status" aria-live="polite" class="mt-2 min-h-6 text-sm text-slate-600">
          {needle ? (found ? copy.found(found) : copy.none) : ''}
        </p>
      </div>
    {/if}

    {#each visible as s (s.grade)}
      <section
        id="lop-{s.grade}"
        data-band={bandOf(s.grade)}
        aria-labelledby="glossary-lop-{s.grade}"
        class="scroll-mt-4 {look(s.grade).text}"
      >
        <h2 id="glossary-lop-{s.grade}" class="mb-3 text-2xl font-bold text-slate-900">
          {label(s.grade)}
          {#if s.entries.length}
            <span class="text-base font-normal text-slate-500"
              >· {copy.count(s.entries.length)}</span
            >
          {/if}
        </h2>
        {#if s.entries.length === 0}
          <p class="text-slate-600">{copy.empty}</p>
        {:else}
          <dl class="gl">
            {#each s.entries as e (e.anchor)}
              <div id={e.anchor}>
                <dt>
                  {e.term}
                  {#if english.has(e.anchor)}<span lang="en">({e.en})</span>{/if}
                </dt>
                <dd>{e.def}</dd>
                {#if e.aka.length}
                  <dd>{copy.aka} {e.aka.join(', ')}</dd>
                {/if}
                <dd class="in">
                  <span>{copy.learnedIn}</span>
                  <a href={resolve(/** @type {import('$app/types').Path} */ (e.lesson.path))}
                    >{e.lesson.title}</a
                  >
                </dd>
                {#if e.see.length}
                  <dd class="see">
                    <span>{copy.seeAlso}</span>
                    {#each e.see as ref (ref.anchor)}
                      <a href="#{ref.anchor}" onclick={showAll}>{ref.term}</a>
                    {/each}
                  </dd>
                {/if}
              </div>
            {/each}
          </dl>
        {/if}
      </section>
    {/each}
  </div>
</SiteShell>

<style>
  /*
   * One rule set per element kind of the entry list, matching the utilities it
   * used to carry: a card per entry, the band's padding, row gap and link
   * heights, the indigo link with its focus ring, and the `:target` highlight.
   */
  .gl {
    display: grid;
    gap: var(--hub-gap);
    --pad: var(--hub-pad);
    --row: calc(var(--spacing) * 1);
    --see-gap: calc(var(--spacing) * 3);
    --link-h: calc(var(--spacing) * 11);
  }
  [data-band='tieu-hoc'] .gl {
    --link-h: calc(var(--spacing) * 12);
  }
  [data-band='thpt'] .gl {
    --pad: calc(var(--spacing) * 2);
    --row: calc(var(--spacing) * 0.5);
    --see-gap: calc(var(--spacing) * 2);
    --link-h: calc(var(--spacing) * 8);
  }
  .gl > :global(div) {
    scroll-margin-top: calc(var(--spacing) * 4);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--card-radius);
    background-color: var(--color-white);
    padding: var(--pad);
  }
  .gl > :global(div:target) {
    border-left-width: 4px;
    border-left-color: var(--color-indigo-600);
    background-color: var(--color-indigo-50);
  }
  .gl :global(dt) {
    font-weight: 700;
    color: var(--color-slate-900);
  }
  .gl :global(dt span) {
    margin-left: calc(var(--spacing) * 1);
    font-weight: 400;
    color: var(--color-slate-600);
  }
  .gl :global(dd) {
    margin-top: var(--row);
    color: var(--color-slate-600);
  }
  .gl :global(dt + dd) {
    color: var(--color-slate-800);
  }
  .gl :global(dd.in) {
    display: flex;
    align-items: center;
    column-gap: calc(var(--spacing) * 2);
  }
  .gl :global(dd.in span) {
    flex-shrink: 0;
  }
  .gl :global(dd.see) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: var(--see-gap);
    margin-top: 0;
  }
  .gl :global(a) {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    min-height: var(--link-h);
    border-radius: 0.25rem;
    color: var(--color-indigo-700);
    text-decoration-line: underline;
    text-underline-offset: 2px;
  }
  .gl :global(a:hover) {
    color: var(--color-indigo-900);
  }
  .gl :global(a:focus-visible) {
    outline-style: none;
    box-shadow:
      0 0 0 2px var(--color-white),
      0 0 0 4px var(--color-indigo-500);
  }
</style>
