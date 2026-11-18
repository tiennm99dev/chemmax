<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import GradeHub from '#lib/core/grade-hub.svelte';

  let { data } = $props();
</script>

<GradeHub grade={data.grade} />
