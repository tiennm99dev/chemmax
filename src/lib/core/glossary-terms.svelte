<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import { resolve } from '$app/paths';
  import { glossary as copy } from './copy.vi.js';
  import { card, focusRing } from './ui.js';

  /**
   * "Thuật ngữ trong bài": the glossary entries a lesson defines, each linking
   * to its anchor on `/thuat-ngu/`. Renders nothing when the lesson has none.
   * `kid` gives grades 1-5 their larger heading and 48 px targets. Term links
   * load the page natively, since a client-side hash navigation never sets
   * `:target`, which highlights the entry.
   * @type {{ terms: import('./glossary.js').LessonTerm[], kid?: boolean }}
   */
  let { terms, kid = false } = $props();

  const page = resolve(/** @type {import('$app/types').Path} */ ('/thuat-ngu/'));
  const link = $derived(
    `inline-flex ${kid ? 'min-h-12' : 'min-h-11'} items-center rounded text-indigo-700 underline underline-offset-2 hover:text-indigo-900 ${focusRing}`,
  );
</script>

{#if terms.length}
  <section class="{card} p-4 sm:p-5" aria-labelledby="lesson-terms">
    <h2 id="lesson-terms" class="mb-1 font-bold text-slate-900 {kid ? 'text-2xl' : 'text-lg'}">
      {copy.inLesson}
    </h2>
    <ul class="flex flex-wrap gap-x-4">
      {#each terms as term (term.anchor)}
        <li><a href="{page}#{term.anchor}" class={link} data-sveltekit-reload>{term.term}</a></li>
      {/each}
    </ul>
    <a href={page} class="{link} text-sm">{copy.all}</a>
  </section>
{/if}
