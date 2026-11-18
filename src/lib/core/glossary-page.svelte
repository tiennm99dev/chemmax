<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { resolve } from '$app/paths';
  import { t } from '#lib/i18n/index.js';
  import { gradeSlug } from '#lib/curriculum/index.js';
  import SiteShell from './site-shell.svelte';
  import { bandOf } from './band.js';
  import { glossary as copy } from './copy.vi.js';
  import { fold } from './fold.js';
  import { card, focusRing, pageTitle, textInput } from './ui.js';

  /**
   * The "Thuật ngữ" page: one section per grade, each with its own band, terms
   * in Vietnamese alphabetical order. The search field filters on the folded
   * term, English name and other names; without JavaScript the full list shows.
   * @type {{ sections: import('./glossary.js').GlossarySection[] }}
   */
  let { sections } = $props();

  const site = t();
  let query = $state('');
  const needle = $derived(fold(query));
  const visible = $derived(
    needle
      ? sections
          .map((s) => ({ ...s, entries: s.entries.filter((e) => e.key.includes(needle)) }))
          .filter((s) => s.entries.length > 0)
      : sections,
  );
  const found = $derived(visible.reduce((n, s) => n + s.entries.length, 0));
  const total = $derived(sections.reduce((n, s) => n + s.entries.length, 0));

  /** @param {number} grade */
  const label = (grade) => site.grades[gradeSlug(grade)];

  const link = `rounded text-indigo-700 underline underline-offset-2 hover:text-indigo-900 ${focusRing}`;

  /**
   * Type size, density and touch-target height of a grade's band: large and
   * roomy in tiểu học, compact rows in thpt.
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
      {@const { text, target } = look(s.grade)}
      <section
        id="lop-{s.grade}"
        data-band={bandOf(s.grade)}
        aria-labelledby="glossary-lop-{s.grade}"
        class="scroll-mt-4 {text}"
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
          <dl class="grid gap-[var(--hub-gap)]">
            {#each s.entries as e (e.anchor)}
              <div
                id={e.anchor}
                class="scroll-mt-4 {card} border-l-4 p-[var(--hub-pad)] target:border-l-indigo-600 target:bg-indigo-50"
              >
                <dt class="font-bold text-slate-900">
                  {e.term}
                  <span lang="en" class="ml-1 font-normal text-slate-600">{e.en}</span>
                </dt>
                <dd class="mt-1 text-slate-800">{e.def}</dd>
                {#if e.aka.length}
                  <dd class="mt-1 text-slate-600">{copy.aka} {e.aka.join(', ')}</dd>
                {/if}
                <dd class="mt-1 flex flex-wrap items-center gap-x-2 text-slate-600">
                  <span>{copy.learnedIn}</span>
                  <a
                    href={resolve(/** @type {import('$app/types').Path} */ (e.lesson.path))}
                    class="inline-flex {target} items-center {link}">{e.lesson.title}</a
                  >
                </dd>
                {#if e.see.length}
                  <dd class="flex flex-wrap items-center gap-x-3 text-slate-600">
                    <span>{copy.seeAlso}</span>
                    {#each e.see as ref (ref.anchor)}
                      <a href="#{ref.anchor}" class="inline-flex {target} items-center {link}"
                        >{ref.term}</a
                      >
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
