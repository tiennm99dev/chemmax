<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { resolve } from '$app/paths';
  import { t } from '#lib/i18n/index.js';
  import { gradeSlug, grades, strands } from '#lib/curriculum/index.js';
  import SiteShell from '#lib/core/site-shell.svelte';
  import { bandOf } from '#lib/core/band.js';
  import { hubCard, hubCardShape } from '#lib/core/ui.js';

  const copy = t();
  const levels = copy.levels
    .map((level) => ({
      ...level,
      grades: grades().filter((g) => g.grade >= level.from && g.grade <= level.to),
    }))
    .filter((level) => level.grades.length > 0);
  const strandList = strands().map((s) => ({
    slug: s.slug,
    title: copy.strands[s.slug]?.title ?? s.slug,
    blurb: copy.strands[s.slug]?.blurb ?? '',
  }));

  /** @param {import('#lib/curriculum/index.js').Grade} g */
  const lessonCount = (g) => g.chapters.reduce((n, c) => n + c.lessons.length, 0);

  const cardLayout = 'flex h-full min-h-12 flex-col gap-1';
  const cardClass = `${cardLayout} ${hubCard}`;

  /** Tiểu học grade cards cycle these pastels, each with a border one step darker. */
  const pastels = [
    'border-2 border-rose-300 bg-rose-100',
    'border-2 border-amber-300 bg-amber-100',
    'border-2 border-lime-300 bg-lime-100',
    'border-2 border-sky-300 bg-sky-100',
    'border-2 border-violet-300 bg-violet-100',
  ];
</script>

<svelte:head>
  <title>{copy.site.title} — {copy.site.tagline}</title>
  <meta name="description" content={copy.site.description} />
</svelte:head>

<SiteShell width="wide">
  <header class="py-6 text-center sm:py-10">
    <div class="decor-spot mx-auto mb-4 size-24" aria-hidden="true"></div>
    <h1 class="mb-3 text-4xl font-bold text-slate-900 sm:text-5xl">{copy.site.title}</h1>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
      {copy.site.description}
    </p>
  </header>

  <section aria-labelledby="grades" class="mb-12">
    <h2 id="grades" class="mb-6 text-2xl font-bold text-slate-900">{copy.home.gradesTitle}</h2>
    <div class="space-y-8">
      {#each levels as level (level.title)}
        {@const band = bandOf(level.from)}
        {@const kid = band === 'tieu-hoc'}
        <section aria-labelledby="level-{level.from}" data-band={band}>
          <div class="mb-3 flex items-center gap-3">
            {#if kid}
              <div class="decor-spot size-[120px] shrink-0" aria-hidden="true"></div>
            {/if}
            <h3
              id="level-{level.from}"
              class="font-bold text-slate-700 {kid ? 'text-2xl' : 'text-lg'}"
            >
              {level.title}
            </h3>
          </div>
          <ul class="grid grid-cols-2 gap-[var(--hub-gap)] sm:grid-cols-3 lg:grid-cols-5">
            {#each level.grades as g, i (g.grade)}
              <li>
                <a
                  href={resolve(
                    /** @type {import('$app/types').Path} */ (`/${gradeSlug(g.grade)}/`),
                  )}
                  class={kid
                    ? `${cardLayout} ${hubCardShape} ${pastels[i % pastels.length]}`
                    : cardClass}
                >
                  <span class="text-xl font-bold {kid ? 'text-slate-900' : 'text-indigo-700'}"
                    >{copy.grades[gradeSlug(g.grade)]}</span
                  >
                  <span class="text-sm {kid ? 'text-slate-700' : 'text-slate-500'}"
                    >{copy.home.gradeSummary(g.chapters.length, lessonCount(g))}</span
                  >
                </a>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </section>

  <section aria-labelledby="strands" class="pb-6">
    <h2 id="strands" class="mb-6 text-2xl font-bold text-slate-900">{copy.home.strandsTitle}</h2>
    <ul class="grid gap-[var(--hub-gap)] sm:grid-cols-2 lg:grid-cols-3">
      {#each strandList as s (s.slug)}
        <li>
          <a
            href={resolve(/** @type {import('$app/types').Path} */ (`/${s.slug}/`))}
            class={cardClass}
          >
            <span class="font-bold text-slate-900">{s.title}</span>
            {#if s.blurb}<span class="text-sm text-slate-500">{s.blurb}</span>{/if}
          </a>
        </li>
      {/each}
    </ul>
  </section>
</SiteShell>
