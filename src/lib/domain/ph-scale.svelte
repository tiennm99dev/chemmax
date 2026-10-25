<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import { clamp, linear, snap } from '#lib/core/visuals/svg-math.js';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    MEDIUM_LABELS,
    SUBSTANCES,
    UNIVERSAL_STOPS,
    formatScientific,
    hFromPh,
    litmus,
    medium,
    ohFromPh,
    phenolphthalein,
    pOH,
    universalColor,
  } from './ph.js';

  /**
   * The pH scale 0-14 coloured like universal indicator paper. Drag the
   * marker or focus it and use ←/→ (Shift for one whole unit) to set the
   * pH; the readout gives the medium, [H⁺], [OH⁻] (and pOH with `advanced`)
   * and the colour of litmus and phenolphthalein. Buttons under the scale
   * jump to everyday substances.
   *
   * - `ph` (bindable): the pH shown.
   * - `interactive`: allow dragging and the substance buttons.
   * - `step`: snap step of the marker.
   * - `advanced`: show pOH and [OH⁻] (grade 11 and up).
   * - `substances`: show the everyday-substance markers.
   *
   * @type {{
   *   ph?: number;
   *   interactive?: boolean;
   *   step?: number;
   *   advanced?: boolean;
   *   substances?: boolean;
   *   label?: string;
   *   onchange?: (ph: number) => void;
   * }}
   */
  let {
    ph = $bindable(7),
    interactive = true,
    step = 0.1,
    advanced = false,
    substances = true,
    label = 'Thang pH',
    onchange,
  } = $props();

  const W = 640;
  const H = 100;
  const BAR_Y = 34;
  const BAR_H = 30;
  const x = linear(0, 14, 24, W - 24);
  const gradientId = $props.id();

  const fmt = (/** @type {number} */ v) => formatNumber(v, 2);
  const kind = $derived(medium(ph));
  const paper = $derived(litmus(ph));
  const phth = $derived(phenolphthalein(ph));
  const reading = $derived(`pH = ${fmt(ph)}: ${MEDIUM_LABELS[kind].toLowerCase()}`);
  const near = $derived(SUBSTANCES.filter((s) => Math.abs(s.ph - ph) < 0.05).map((s) => s.name));

  /** @param {number} value */
  function setPh(value) {
    const next = Math.round(clamp(snap(value, step), 0, 14) * 100) / 100;
    if (next === ph) return;
    ph = next;
    onchange?.(ph);
  }

  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const scratch = { x: 0, y: 0 };
  const drag = $derived({
    point: scratch,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 0,
    onChange: () => setPh(x.invert(scratch.x)),
    /** @param {number} dx @param {number} dy @param {boolean} big */
    onKeyMove: (dx, dy, big) => setPh(ph + (dx || -dy) * (big ? 1 : step)),
  });
</script>

<figure class="space-y-3">
  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="block w-full select-none"
    style:touch-action={interactive ? 'none' : null}
    role={interactive ? 'group' : 'img'}
    aria-label="{label}: {reading}"
  >
    <defs>
      <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
        {#each UNIVERSAL_STOPS as s (s.ph)}
          <stop offset={s.ph / 14} stop-color={s.color} />
        {/each}
      </linearGradient>
    </defs>
    <rect
      x={x.map(0)}
      y={BAR_Y}
      width={x.map(14) - x.map(0)}
      height={BAR_H}
      rx="8"
      fill="url(#{gradientId})"
    />
    {#each Array.from({ length: 15 }, (_, i) => i) as v (v)}
      <line
        x1={x.map(v)}
        x2={x.map(v)}
        y1={BAR_Y + BAR_H}
        y2={BAR_Y + BAR_H + 6}
        stroke="#334155"
      />
      <text x={x.map(v)} y={BAR_Y + BAR_H + 20} text-anchor="middle" font-size="13" fill="#334155"
        >{v}</text
      >
    {/each}
    <text x={x.map(0)} y={BAR_Y - 10} font-size="12" fill="#b91c1c" font-weight="700">Acid</text>
    <text x={x.map(7)} y={BAR_Y - 10} font-size="12" fill="#15803d" text-anchor="middle"
      >Trung tính</text
    >
    <text
      x={x.map(14)}
      y={BAR_Y - 10}
      font-size="12"
      fill="#4c1d95"
      text-anchor="end"
      font-weight="700">Base</text
    >
    {#if substances}
      {#each SUBSTANCES as s (s.name)}
        <circle cx={x.map(s.ph)} cy={BAR_Y + BAR_H - 4} r="2.5" fill="#fff" opacity="0.9" />
      {/each}
    {/if}
    {#snippet marker()}
      <rect x={x.map(ph) - 18} y={BAR_Y - 8} width="36" height={BAR_H + 16} fill="transparent" />
      <path
        d="M {x.map(ph) - 9} {BAR_Y - 9} L {x.map(ph) + 9} {BAR_Y - 9} L {x.map(ph)} {BAR_Y + 2} Z"
        fill="#0f172a"
      />
      <rect
        x={x.map(ph) - 4}
        y={BAR_Y - 2}
        width="8"
        height={BAR_H + 4}
        rx="3"
        fill="none"
        stroke="#0f172a"
        stroke-width="2.5"
      />
    {/snippet}
    {#if interactive}
      <g
        class="ph-marker"
        role="slider"
        tabindex="0"
        aria-label="Chỉnh pH — kéo hoặc dùng phím ← →"
        aria-valuemin={0}
        aria-valuemax={14}
        aria-valuenow={ph}
        aria-valuetext={reading}
        style="cursor:ew-resize; outline:none"
        use:draggable={drag}
      >
        {@render marker()}
      </g>
    {:else}
      <g>{@render marker()}</g>
    {/if}
  </svg>

  <div class="grid gap-3 sm:grid-cols-[auto_1fr]" aria-live="polite">
    <div
      class="flex size-20 items-center justify-center rounded-xl border border-black/10 text-lg font-bold text-white tabular-nums"
      style:background-color={universalColor(ph)}
      style:text-shadow="0 1px 2px rgb(0 0 0 / 0.5)"
    >
      {fmt(ph)}
    </div>
    <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
      <dt class="text-slate-500">Môi trường</dt>
      <dd class="font-semibold">
        {MEDIUM_LABELS[kind]}{#if near.length}<span class="font-normal"
            >{` · ≈ ${near.join(', ')}`}</span
          >{/if}
      </dd>
      <dt class="text-slate-500">[H⁺]</dt>
      <dd class="tabular-nums">{formatScientific(hFromPh(ph))} mol/L</dd>
      {#if advanced}
        <dt class="text-slate-500">[OH⁻]</dt>
        <dd class="tabular-nums">{formatScientific(ohFromPh(ph))} mol/L</dd>
        <dt class="text-slate-500">pOH</dt>
        <dd class="tabular-nums">{fmt(pOH(ph))}</dd>
      {/if}
      <dt class="text-slate-500">Quỳ tím</dt>
      <dd class="flex items-center gap-2">
        <span
          class="inline-block h-3 w-8 rounded-sm border border-black/10"
          style:background-color={paper.color}
        ></span>
        hoá {paper.name}
      </dd>
      <dt class="text-slate-500">Phenolphthalein</dt>
      <dd class="flex items-center gap-2">
        <span
          class="inline-block h-3 w-8 rounded-sm border border-black/20"
          style:background-color={phth.color}
        ></span>
        {phth.name}
      </dd>
    </dl>
  </div>

  {#if substances && interactive}
    <ul class="flex flex-wrap gap-1.5 text-xs" aria-label="Chất quen thuộc">
      {#each SUBSTANCES as s (s.name)}
        <li>
          <button
            type="button"
            class="rounded-full border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-100 {focusRing}"
            aria-pressed={Math.abs(s.ph - ph) < 0.05}
            onclick={() => setPh(s.ph)}
          >
            {s.name} <span class="tabular-nums text-slate-500">({fmt(s.ph)})</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</figure>

<style>
  .ph-marker:focus-visible rect:last-child {
    stroke: #4f46e5;
    stroke-width: 4;
  }
</style>
