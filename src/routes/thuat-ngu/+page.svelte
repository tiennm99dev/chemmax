<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import GlossaryPage from '#lib/core/glossary-page.svelte';

  let { data } = $props();
</script>

<GlossaryPage sections={data.sections} />
