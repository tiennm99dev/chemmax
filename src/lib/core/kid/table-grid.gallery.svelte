<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script module>
  export const title = 'Bảng nhân, bảng chia';
</script>

<script>
  import TableGrid from './table-grid.svelte';

  let active = $state(4);
</script>

<div class="grid gap-4 sm:grid-cols-2">
  <TableGrid base={6} found={(n) => n <= active} {active} onpick={(n) => (active = n)} />
  <TableGrid base={6} op="chia" found={(n) => n < 6} active={6} />
</div>
