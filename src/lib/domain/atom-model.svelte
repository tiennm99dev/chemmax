<script>
  import { electronConfiguration, element, formatConfiguration } from './elements.js';
  import {
    atomShells,
    chargeLabel,
    electronPositions,
    ionConfiguration,
    typicalMassNumber,
  } from './atom.js';

  /**
   * Bohr model of an atom or ion: a nucleus labelled with its protons and
   * neutrons, electrons on concentric shells, and a caption with the
   * electron count per shell and the configuration.
   *
   * - `z`: atomic number (number of protons), 1-118.
   * - `massNumber`: A = Z + N; defaults to the mass number nearest the atomic weight.
   * - `charge`: ion charge (Na⁺ is 1, O²⁻ is −2). Electrons = Z − charge.
   * - `electrons`: override the electron count directly (takes precedence over
   *   `charge`), for build-an-atom widgets where the learner adds electrons.
   * - `animate`: electrons orbit slowly, unless the reader prefers reduced motion.
   * - `caption`: show the particle and shell counts under the drawing.
   * - `configuration`: add the electron configuration to the caption.
   *
   * @type {{
   *   z: number;
   *   massNumber?: number;
   *   charge?: number;
   *   electrons?: number;
   *   animate?: boolean;
   *   caption?: boolean;
   *   configuration?: boolean;
   *   size?: number;
   *   label?: string;
   * }}
   */
  let {
    z,
    massNumber,
    charge = 0,
    electrons,
    animate = false,
    caption = true,
    configuration = true,
    size = 320,
    label,
  } = $props();

  const el = $derived(element(z));
  const A = $derived(massNumber ?? typicalMassNumber(z));
  const ionCharge = $derived(electrons === undefined ? charge : z - electrons);
  const count = $derived(Math.max(0, z - ionCharge));
  const shells = $derived(count === 0 ? [] : atomShells(z, ionCharge));
  const C = 160;
  const NUCLEUS = $derived(z > 54 ? 30 : z > 18 ? 26 : 22);
  const dr = $derived(shells.length ? Math.min(34, (C - 12 - NUCLEUS - 10) / shells.length) : 0);
  const r0 = $derived(NUCLEUS + 10 + dr * 0.6);
  const dots = $derived(electronPositions(shells, { cx: C, cy: C, r0, dr }));
  const dotR = $derived(shells.length > 4 ? 3.5 : 5);
  const config = $derived(
    count === 0
      ? ''
      : ionCharge === 0
        ? formatConfiguration(electronConfiguration(z), { core: z > 36 })
        : formatConfiguration(ionConfiguration(z, ionCharge), { core: count > 36 }),
  );
  const name = $derived(
    el
      ? `${el.symbol}${chargeLabel(ionCharge) ? ` (ion ${el.symbol}${chargeLabel(ionCharge)})` : ''}`
      : '?',
  );
  const described = $derived(
    label ??
      `Mô hình nguyên tử ${name}: hạt nhân có ${z} proton và ${A - z} neutron; ${count} electron xếp thành ${shells.length} lớp: ${shells.join(', ')}.`,
  );
</script>

<figure class="space-y-2">
  <svg
    viewBox="0 0 {2 * C} {2 * C}"
    class="mx-auto block w-full select-none"
    style:max-width="{size}px"
    role="img"
    aria-label={described}
  >
    {#each shells as _, k (k)}
      <circle
        cx={C}
        cy={C}
        r={r0 + k * dr}
        fill="none"
        stroke="#94a3b8"
        stroke-width="1.5"
        stroke-dasharray="4 3"
      />
    {/each}
    <circle cx={C} cy={C} r={NUCLEUS} fill="#fee2e2" stroke="#D7263D" stroke-width="2" />
    <text x={C} y={C - 3} text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b"
      >{z}p</text
    >
    <text x={C} y={C + 11} text-anchor="middle" font-size="11" font-weight="700" fill="#334155"
      >{A - z}n</text
    >
    {#each shells as _, k (k)}
      <g class={animate ? 'orbit' : ''} style:animation-duration="{18 + k * 8}s">
        {#each dots.filter((d) => d.shell === k) as d (d.index)}
          <circle cx={d.x} cy={d.y} r={dotR} fill="#2E86AB" stroke="#fff" stroke-width="1" />
        {/each}
      </g>
    {/each}
  </svg>
  {#if caption}
    <figcaption class="space-y-0.5 text-center text-sm text-slate-700" aria-live="polite">
      <p class="font-semibold">
        {#if el}<span class="capitalize">{el.name}</span>
          <sup class="tabular-nums">{A}</sup><span class="font-bold">{el.symbol}</span
          >{#if ionCharge !== 0}<sup>{chargeLabel(ionCharge)}</sup>{/if}{/if}
        · {z} p · {A - z} n · {count} e
      </p>
      {#if shells.length}
        <p class="tabular-nums">Số e mỗi lớp: {shells.join(', ')}</p>
        {#if configuration}<p class="tabular-nums">{config}</p>{/if}
      {/if}
    </figcaption>
  {/if}
</figure>

<style>
  .orbit {
    transform-box: view-box;
    transform-origin: 50% 50%;
    animation-name: orbit;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .orbit {
      animation: none;
    }
  }
</style>
