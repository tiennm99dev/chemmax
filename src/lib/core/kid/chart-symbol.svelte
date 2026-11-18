<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import Picture from './picture.svelte';

  /**
   * The picture of a data category: a kid picture, a colour or an emoji. A
   * colour is drawn as a ball (`swatch` 'ball', one thing of a picture chart)
   * or as a rounded tile (`swatch` 'tile', the swatch beside a name in a
   * table). Decorative, because the chart, cell or button around it carries
   * the name.
   * @type {{
   *   symbol: import('./tally.js').ChartSymbol;
   *   size?: number;
   *   swatch?: 'ball' | 'tile';
   * }}
   */
  let { symbol, size = 28, swatch = 'ball' } = $props();
</script>

{#if 'picture' in symbol}
  <Picture name={symbol.picture} {size} decorative />
{:else if 'color' in symbol}
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" class="shrink-0">
    {#if swatch === 'tile'}
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="8"
        fill={symbol.color}
        stroke="#334155"
        stroke-width="2"
      />
    {:else}
      <circle cx="20" cy="20" r="17" fill={symbol.color} stroke="#334155" stroke-width="2" />
      <circle cx="14" cy="14" r="4" fill="#ffffff" opacity="0.7" />
    {/if}
  </svg>
{:else}
  <span aria-hidden="true" class="leading-none" style:font-size="{Math.round(size * 0.85)}px"
    >{symbol.emoji}</span
  >
{/if}
