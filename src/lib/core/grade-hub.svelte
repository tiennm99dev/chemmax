<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { t } from '#lib/i18n/index.js';
  import { gradeSlug } from '#lib/curriculum/index.js';
  import SiteShell from './site-shell.svelte';
  import Breadcrumbs from './breadcrumbs.svelte';
  import ChapterCard from './chapter-card.svelte';
  import { crumbs } from './crumbs.js';
  import { hub as copy } from './copy.vi.js';
  import { bandOf } from './band.js';
  import { pageTitle } from './ui.js';

  /**
   * A grade's chapters grouped by volume (Tập 1, Tập 2, Chuyên đề), in book order.
   * @type {{ grade: import('#lib/curriculum/index.js').Grade }}
   */
  let { grade } = $props();

  const site = t();
  const label = $derived(site.grades[gradeSlug(grade.grade)]);
  const volumes = $derived.by(() => {
    const names = [...grade.volumes];
    for (const c of grade.chapters) if (!names.includes(c.volume)) names.push(c.volume);
    return names
      .map((name) => ({ name, chapters: grade.chapters.filter((c) => c.volume === name) }))
      .filter((v) => v.chapters.length > 0);
  });
</script>

<svelte:head>
  <title>{label} — {site.site.title}</title>
  <meta
    name="description"
    content={`${site.site.title} ${label}: ${copy.chapters.toLowerCase()}.`}
  />
</svelte:head>

<SiteShell width="wide" grade={grade.grade} spot>
  <Breadcrumbs items={crumbs(grade)} />
  <h1 class="mb-6 {pageTitle(bandOf(grade.grade))}">{label}</h1>

  <div class="clear-both space-y-10">
    {#each volumes as volume, v (volume.name)}
      <section aria-labelledby="volume-{v}">
        <h2 id="volume-{v}" class="mb-4 text-xl font-bold text-slate-800">{volume.name}</h2>
        <ul class="grid gap-[var(--hub-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {#each volume.chapters as chapter (chapter.slug)}
            <li><ChapterCard {grade} {chapter} /></li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</SiteShell>
