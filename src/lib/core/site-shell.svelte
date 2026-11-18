<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { resolve } from '$app/paths';
  import { t } from '#lib/i18n/index.js';
  import { bandOf } from './band.js';
  import { nav } from './copy.vi.js';
  import { focusRing } from './ui.js';

  /**
   * Header, decoration ribbon, main area and footer shared by every page. The
   * root carries the page's age band (`band.js`), so tokens and decoration
   * follow the grade. `spot` floats the hub illustration beside the header
   * block from `sm` up; a hub clears it before its card list.
   * @type {{
   *   children: import('svelte').Snippet;
   *   width?: 'narrow' | 'wide';
   *   grade?: number;
   *   spot?: boolean;
   * }}
   */
  let { children, width = 'narrow', grade, spot = false } = $props();

  const site = t().site;
  const inner = $derived(width === 'wide' ? 'max-w-5xl' : 'max-w-3xl');
  const band = $derived(bandOf(grade));
</script>

<div data-band={band} class="contents">
  <a
    href="#main"
    class="sr-only rounded bg-white px-3 py-2 text-indigo-700 focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-10 {focusRing}"
    >{nav.skip}</a
  >

  <header class="border-b border-slate-200 bg-white">
    <div class="mx-auto flex {inner} items-center justify-between px-4 py-3">
      <a
        href={resolve('/')}
        class="rounded text-xl font-bold tracking-tight text-indigo-600 {focusRing}">{site.title}</a
      >
      <nav aria-label={nav.main}>
        <a
          href={resolve('/')}
          class="rounded px-2 py-2 text-sm text-slate-600 hover:underline {focusRing}">{nav.home}</a
        >
      </nav>
    </div>
  </header>

  <div class="decor-ribbon" aria-hidden="true"></div>

  <main id="main" class="decor-surface flex min-h-screen flex-col">
    <div class="decor-layer" aria-hidden="true"></div>
    <div class="decor-column mx-auto w-full flex-1 {inner} px-4 py-6 sm:py-8">
      {#if spot}
        <div
          class="decor-spot float-right mb-2 ml-4 hidden size-[120px] sm:block"
          aria-hidden="true"
        ></div>
      {/if}
      {@render children()}
    </div>
  </main>

  <footer class="border-t border-slate-200 bg-white">
    <div class="mx-auto {inner} px-4 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} ·
      <!-- eslint-disable svelte/no-navigation-without-resolve -- external repository URL -->
      <a
        href={site.repo}
        class="rounded text-indigo-600 hover:underline {focusRing}"
        target="_blank"
        rel="noopener noreferrer">{nav.source}</a
      >
      <!-- eslint-enable svelte/no-navigation-without-resolve -->
    </div>
  </footer>
</div>
