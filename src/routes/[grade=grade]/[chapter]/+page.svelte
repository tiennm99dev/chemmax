<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import ChapterHub from '#lib/core/chapter-hub.svelte';

  let { data } = $props();
</script>

<ChapterHub grade={data.grade} chapter={data.chapter} />
