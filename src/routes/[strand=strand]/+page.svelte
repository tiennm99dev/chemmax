<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import StrandHub from '#lib/core/strand-hub.svelte';

  let { data } = $props();
</script>

<StrandHub strand={data.strand} />
