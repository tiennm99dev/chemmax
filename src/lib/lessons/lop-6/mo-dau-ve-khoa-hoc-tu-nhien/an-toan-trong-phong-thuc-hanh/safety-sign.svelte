<script>
  /**
   * One safety sign drawn in SVG: the frame (shape and colours) comes from the
   * sign's kind, the pictogram from its picture name.
   * @type {{ kind: import('./engine.js').SignKind, picture: import('./engine.js').Pictogram, label: string, size?: number }}
   */
  let { kind, picture, label, size = 120 } = $props();

  const ink = $derived(kind === 'cam' || kind === 'nguy-hiem' ? '#111827' : '#ffffff');
</script>

<svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={label}>
  {#if kind === 'cam'}
    <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="9" />
  {:else if kind === 'nguy-hiem'}
    <polygon
      points="50,6 96,90 4,90"
      fill="#facc15"
      stroke="#111827"
      stroke-width="6"
      stroke-linejoin="round"
    />
  {:else if kind === 'bat-buoc'}
    <circle cx="50" cy="50" r="46" fill="#2563eb" />
  {:else}
    <rect x="4" y="4" width="92" height="92" rx="6" fill="#16a34a" />
  {/if}

  <g
    transform={kind === 'nguy-hiem'
      ? 'translate(50 60) scale(0.62)'
      : 'translate(50 50) scale(0.8)'}
    fill={ink}
    stroke={ink}
  >
    {#if picture === 'lua'}
      <path
        d="M0 -38 C 14 -18 26 -8 22 12 C 19 28 8 36 0 36 C -8 36 -21 28 -22 12 C -24 -4 -10 -10 -6 -24 C -2 -14 2 -12 4 -8 C 8 -18 4 -28 0 -38 Z"
        stroke="none"
      />
    {:else if picture === 'an-uong'}
      <path d="M-24 -20 h22 l-3 44 h-16 z" stroke="none" />
      <rect x="8" y="-30" width="4" height="60" stroke="none" />
      <path d="M2 -30 v18 a8 8 0 0 0 16 0 v-18" fill="none" stroke-width="4" />
    {:else if picture === 'nuoc'}
      <path
        d="M-6 -34 h-14 v18 h22 a10 10 0 0 1 10 10 v4 h12 v-6 a20 20 0 0 0 -20 -20 h-10 z"
        stroke="none"
      />
      <path d="M8 16 c 0 0 -8 10 -8 15 a8 8 0 0 0 16 0 c 0 -5 -8 -15 -8 -15 z" stroke="none" />
    {:else if picture === 'set'}
      <polygon points="8,-40 -18,6 0,6 -10,40 20,-8 2,-8 14,-40" stroke="none" />
    {:else if picture === 'doc'}
      <circle cx="0" cy="-14" r="20" stroke="none" />
      <rect x="-12" y="2" width="24" height="12" rx="3" stroke="none" />
      <circle
        cx="-8"
        cy="-14"
        r="5"
        fill={kind === 'nguy-hiem' ? '#facc15' : '#2563eb'}
        stroke="none"
      />
      <circle
        cx="8"
        cy="-14"
        r="5"
        fill={kind === 'nguy-hiem' ? '#facc15' : '#2563eb'}
        stroke="none"
      />
      <path d="M-30 22 L30 40 M30 22 L-30 40" stroke-width="7" stroke-linecap="round" />
    {:else if picture === 'an-mon'}
      <path d="M-30 -36 h22 l-4 12 h-14 z" stroke="none" />
      <path d="M-20 -18 v8 M-16 -16 v10" stroke-width="3" />
      <path d="M10 -36 h22 l-4 12 h-14 z" stroke="none" />
      <path d="M20 -18 v8 M24 -16 v10" stroke-width="3" />
      <rect x="-34" y="22" width="26" height="12" stroke="none" />
      <path d="M8 34 h28 v-8 h-20 l-8 -6 z" stroke="none" />
      <path d="M-40 40 h80" stroke-width="4" />
    {:else if picture === 'kinh'}
      <circle cx="-16" cy="0" r="13" fill="none" stroke-width="6" />
      <circle cx="16" cy="0" r="13" fill="none" stroke-width="6" />
      <path d="M-3 -2 h6 M-29 -2 l-11 -6 M29 -2 l11 -6" stroke-width="6" />
    {:else if picture === 'gang-tay'}
      <path
        d="M-18 34 v-34 h-6 v-26 a4 4 0 0 1 8 0 v20 v-30 a4 4 0 0 1 8 0 v28 v-32 a4 4 0 0 1 8 0 v32 v-28 a4 4 0 0 1 8 0 v30 v-14 a4 4 0 0 1 8 0 v28 c 0 10 -6 16 -12 16 z"
        stroke="none"
      />
    {:else if picture === 'thoat-hiem'}
      <rect x="10" y="-36" width="26" height="72" fill="none" stroke-width="5" />
      <circle cx="-14" cy="-26" r="7" stroke="none" />
      <path
        d="M-16 -16 l-10 18 l12 6 l-6 26 M-16 -16 l12 14 l12 -2 M-22 -6 l-14 6"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
      />
    {:else}
      <rect x="-9" y="-32" width="18" height="64" stroke="none" />
      <rect x="-32" y="-9" width="64" height="18" stroke="none" />
    {/if}
  </g>

  {#if kind === 'cam'}
    <line x1="19" y1="19" x2="81" y2="81" stroke="#dc2626" stroke-width="9" />
  {/if}
</svg>
