<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import ChapterHub from '#lib/core/chapter-hub.svelte';

  let { data } = $props();
</script>

<ChapterHub grade={data.grade} chapter={data.chapter} />
