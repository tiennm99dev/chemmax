<script>
  /**
   * A test tube holding a liquid, with an optional layer of precipitate at the
   * bottom. Colours and the precipitate's height fade in, unless the visitor
   * asked for less motion. `drip` counts drops: each new value lets one drop
   * fall into the tube.
   *
   * @type {{
   *   liquid: string;
   *   label: string;
   *   precipitate?: string | null;
   *   amount?: number;
   *   drip?: number;
   * }}
   */
  let { liquid, label, precipitate = null, amount = 0, drip = 0 } = $props();

  const TOP = 40;
  const BOTTOM = 170;
  const LEFT = 18;
  const RIGHT = 62;
  const SURFACE = 76;
  const RADIUS = (RIGHT - LEFT) / 2;
  const clipId = $props.id();

  const layer = $derived(Math.max(0, Math.min(1, amount)) * 48);
  const wall = `M ${LEFT} ${TOP} L ${LEFT} ${BOTTOM - RADIUS} A ${RADIUS} ${RADIUS} 0 0 0 ${RIGHT} ${BOTTOM - RADIUS} L ${RIGHT} ${TOP}`;
</script>

<svg viewBox="0 0 80 180" class="mx-auto block w-full max-w-[6rem]" role="img" aria-label={label}>
  <defs>
    <clipPath id={clipId}><path d="{wall} Z" /></clipPath>
  </defs>
  {#key drip}
    {#if drip > 0}
      <circle class="drop" cx="40" cy="6" r="3.5" fill="#94a3b8" />
    {/if}
  {/key}
  <g clip-path="url(#{clipId})">
    <rect
      class="fade"
      x={LEFT}
      y={SURFACE}
      width={RIGHT - LEFT}
      height={BOTTOM - SURFACE}
      fill={liquid}
    />
    {#if precipitate}
      <rect
        class="fade"
        x={LEFT}
        y={BOTTOM - layer}
        width={RIGHT - LEFT}
        height={layer}
        fill={precipitate}
      />
    {/if}
  </g>
  <path d={wall} fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round" />
  <line x1={LEFT - 5} y1={TOP} x2={RIGHT + 5} y2={TOP} stroke="#475569" stroke-width="2.5" />
</svg>

<style>
  .fade {
    transition:
      fill 0.6s ease,
      y 0.6s ease,
      height 0.6s ease;
  }
  .drop {
    animation: fall 0.5s ease-in forwards;
  }
  @keyframes fall {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(70px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
    .drop {
      display: none;
    }
  }
</style>
