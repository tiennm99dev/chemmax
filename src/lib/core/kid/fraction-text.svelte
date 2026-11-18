<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import Frac from '../frac.svelte';
  import { fractionParts } from './fraction-text.js';

  /**
   * Plain kid text with its fractions drawn stacked, as the primary books
   * print them, with no KaTeX: '1/2 giờ' shows 1 over 2, and '2 3/4' a mixed
   * number. Each fraction keeps its spoken text for screen readers. Engines
   * keep writing plain strings, so read-aloud and tests are unchanged.
   * @type {{ text: string; size?: 'md' | 'lg' }}
   */
  let { text, size = 'md' } = $props();

  const parts = $derived(fractionParts(text));
</script>

{#each parts as part, i (i)}{#if part.kind === 'frac'}<Frac
      n={part.n}
      d={part.d}
      whole={part.whole}
      {size}
    />{:else}{part.text}{/if}{/each}
