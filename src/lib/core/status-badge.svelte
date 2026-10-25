<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { hub as copy } from './copy.vi.js';

  /** @type {{ status: 'live' | 'stub' }} */
  let { status } = $props();
</script>

{#if status === 'live'}
  <span
    class="inline-block whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700"
    >{copy.live}</span
  >
{:else}
  <span
    class="inline-block whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700"
    >{copy.comingSoon}</span
  >
{/if}
