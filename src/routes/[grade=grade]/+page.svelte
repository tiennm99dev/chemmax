<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import GradeHub from '#lib/core/grade-hub.svelte';

  let { data } = $props();
</script>

<GradeHub grade={data.grade} />
