<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script module>
  export const title = 'Đồng hồ có vạch phút';
</script>

<script>
  import MinuteClock from './minute-clock.svelte';

  let minutes = $state(8 * 60 + 32);
</script>

<div class="space-y-3">
  <MinuteClock {minutes} />
  <input
    class="w-full"
    type="range"
    min="0"
    max="719"
    bind:value={minutes}
    aria-label="Giờ trên đồng hồ"
  />
</div>
