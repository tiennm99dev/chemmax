<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import LessonPage from '#lib/core/lesson-page.svelte';
  import StubPage from '#lib/core/stub-page.svelte';

  let { data } = $props();
</script>

{#if data.content}
  <LessonPage
    content={data.content}
    grade={data.grade}
    chapter={data.chapter}
    lesson={data.lesson}
    prev={data.prev}
    next={data.next}
    widget={data.widget}
    widgets={data.widgets}
  />
{:else}
  <StubPage
    grade={data.grade}
    chapter={data.chapter}
    lesson={data.lesson}
    prev={data.prev}
    next={data.next}
  />
{/if}
