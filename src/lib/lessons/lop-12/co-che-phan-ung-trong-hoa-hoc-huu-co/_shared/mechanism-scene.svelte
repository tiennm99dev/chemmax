<script>
  import { fade } from 'svelte/transition';
  import { reducedMotion } from '#lib/core/motion.js';
  import { arrowPath, bondLines, labelSpans, sceneText } from './scene.js';

  /**
   * Draws one frame of a reaction mechanism: atoms and groups, bonds (dashed
   * while being made or broken), charges, unpaired electrons and the curved
   * arrows that move electrons (a full head for a pair, a fishhook for one
   * electron). Bonding electrons given as `dots` glide to their new place
   * when the scene changes; the rest fades in.
   *
   * @type {{
   *   scene: import('./scene.js').Scene;
   *   width?: number;
   *   height?: number;
   *   label?: string;
   * }}
   */
  let { scene, width = 360, height = 200, label = '' } = $props();

  const uid = $props.id();
  const still = reducedMotion();
  const spoken = $derived(label || sceneText(scene));

  /** @param {string | undefined} charge */
  const chargeText = (charge) => (charge === '-' ? '−' : charge === 'δ-' ? 'δ−' : charge);
</script>

<svg
  viewBox="0 0 {width} {height}"
  class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
  role="img"
  aria-label={spoken}
>
  <defs>
    <marker
      id="{uid}-full"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto"
    >
      <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
    </marker>
    <marker
      id="{uid}-half"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto"
    >
      <path d="M0 0 L10 5 L0 5 Z" fill="#dc2626" />
    </marker>
  </defs>

  {#key scene}
    <g in:fade={{ duration: still ? 0 : 300 }}>
      {#each scene.bonds ?? [] as bond, i (i)}
        {#each bondLines(scene, bond) as line, j (j)}
          <line
            {...line}
            stroke="#334155"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray={bond.partial ? '4 4' : undefined}
          />
        {/each}
      {/each}

      {#each scene.atoms as atom (atom.id)}
        {#if atom.label !== ''}
          <text
            x={atom.x}
            y={atom.y}
            dy="0.35em"
            text-anchor="middle"
            font-size="16"
            font-weight="700"
            fill={atom.tone ?? '#0f172a'}
            >{#each labelSpans(atom.label) as span, k (k)}<tspan
                font-size={span.small ? 11 : undefined}
                dy={span.dy || undefined}>{span.text}</tspan
              >{/each}</text
          >
        {/if}
        {#if atom.charge}
          {@const small = atom.charge.startsWith('δ')}
          <text
            x={atom.x + (atom.label === '' ? 0 : 6 + atom.label.length * 4.5)}
            y={atom.y - (atom.label === '' ? 0 : 12)}
            dy={atom.label === '' ? '0.35em' : undefined}
            text-anchor="middle"
            font-size={small ? 12 : 15}
            font-weight="700"
            fill={atom.charge.endsWith('+') ? '#1d4ed8' : '#b91c1c'}>{chargeText(atom.charge)}</text
          >
        {/if}
        {#if atom.radical}
          <circle cx={atom.x} cy={atom.y - 15} r="3" fill="#7c3aed" />
        {/if}
      {/each}

      {#each scene.notes ?? [] as note, i (i)}
        <text
          x={note.x}
          y={note.y}
          text-anchor="middle"
          font-size="12"
          font-weight="600"
          fill={note.tone ?? '#475569'}>{note.text}</text
        >
      {/each}

      {#each scene.arrows ?? [] as arrow, i (i)}
        <path
          d={arrowPath(scene, arrow)}
          fill="none"
          stroke="#dc2626"
          stroke-width="2"
          marker-end="url(#{uid}-{arrow.half ? 'half' : 'full'})"
        />
      {/each}
    </g>
  {/key}

  {#each scene.dots ?? [] as dot (dot.id)}
    <circle
      r="3.5"
      fill="#7c3aed"
      class="transition-transform duration-700 ease-in-out motion-reduce:transition-none"
      style:transform="translate({dot.x}px, {dot.y}px)"
    />
  {/each}
</svg>
