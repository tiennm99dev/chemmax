<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script module>
  export const title = 'Lưới chấm theo hàng';
</script>

<script>
  import DotGrid from './dot-grid.svelte';

  let ringed = $state(3);
</script>

<div class="space-y-3">
  <DotGrid base={4} rows={6} {ringed} label="6 hàng, mỗi hàng 4 chấm; {ringed} hàng đã khoanh" />
  <input
    class="w-full"
    type="range"
    min="0"
    max="6"
    bind:value={ringed}
    aria-label="Số hàng đã khoanh"
  />
</div>
