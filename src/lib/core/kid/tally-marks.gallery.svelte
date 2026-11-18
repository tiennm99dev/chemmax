<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script module>
  export const title = 'Vạch kiểm đếm';
</script>

<script>
  import TallyMarks from './tally-marks.svelte';
  import { tallyWords } from './tally.js';

  let count = $state(7);
</script>

<div class="space-y-3">
  <TallyMarks {count} settled />
  <p class="text-lg font-semibold">{tallyWords(count)}</p>
  <input class="w-full" type="range" min="0" max="20" bind:value={count} aria-label="Số vạch" />
</div>
