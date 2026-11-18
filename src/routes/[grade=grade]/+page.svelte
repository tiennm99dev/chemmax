<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import GradeHub from '#lib/core/grade-hub.svelte';

  let { data } = $props();
</script>

<GradeHub grade={data.grade} />
