<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { t } from '#lib/i18n/index.js';
  import SiteShell from '#lib/core/site-shell.svelte';
  import { errorPage as copy } from '#lib/core/copy.vi.js';
  import { button, pageTitle } from '#lib/core/ui.js';

  const site = t().site;
  const missing = $derived(page.status === 404);
  const title = $derived(missing ? copy.notFound : copy.failed);
</script>

<svelte:head>
  <title>{title} — {site.title}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<SiteShell>
  <section class="py-10 text-center">
    <h1 class="mb-4 {pageTitle('chung')}">{title}</h1>
    <p class="mb-8 leading-relaxed text-slate-600">
      {missing ? copy.notFoundBody : copy.failedBody}
    </p>
    <a href={resolve('/')} class={button.primary}>{copy.home}</a>
  </section>
</SiteShell>
