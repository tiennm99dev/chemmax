<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script module>
  export const title = 'Tờ tiền Việt Nam';
</script>

<script>
  import Banknote from './banknote.svelte';
  import { NOTES } from './money.js';
</script>

<div class="flex flex-wrap gap-2">
  {#each NOTES as value (value)}
    <Banknote {value} small grouped={value >= 10000} />
  {/each}
</div>
