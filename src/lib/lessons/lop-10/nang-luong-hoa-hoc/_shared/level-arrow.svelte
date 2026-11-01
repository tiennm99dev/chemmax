<script>
  /**
   * A vertical arrow on an energy diagram, from `from` to `to` in SVG y.
   * @type {{ x: number, from: number, to: number, color: string }}
   */
  let { x, from, to, color } = $props();

  const up = $derived(to < from);
  const head = $derived(Math.min(6, Math.abs(to - from)));
  const tipBase = $derived(up ? to + head : to - head);
</script>

{#if from !== to}
  <line x1={x} y1={from} x2={x} y2={tipBase} stroke={color} stroke-width="2" />
  <polygon points="{x},{to} {x - 4},{tipBase} {x + 4},{tipBase}" fill={color} />
{/if}
