<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import StrandHub from '#lib/core/strand-hub.svelte';

  let { data } = $props();
</script>

<StrandHub strand={data.strand} />
