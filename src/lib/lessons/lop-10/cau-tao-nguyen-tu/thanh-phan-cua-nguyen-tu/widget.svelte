<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    ATOM_DIAMETER,
    NUCLEUS_DIAMETER,
    SIZE_RATIO,
    STAGE_TEXT,
    ZOOM_MAX,
    ZOOM_MIN,
    formatMetres,
    nucleonCluster,
    onScreen,
    scaledAtom,
    stage,
    viewWidth,
  } from './engine.js';

  const VIEW = 320;
  const C = VIEW / 2;
  let zoom = $state(ZOOM_MIN);

  const atomPx = $derived(onScreen(ATOM_DIAMETER, zoom, VIEW));
  const nucleusPx = $derived(onScreen(NUCLEUS_DIAMETER, zoom, VIEW));
  const now = $derived(stage(zoom, VIEW));
  const nucleons = $derived(nucleonCluster(12, nucleusPx / 5));
  const neighbours = $derived.by(() => {
    if (now !== 'atoms') return [];
    const n = Math.ceil(VIEW / atomPx / 2) + 1;
    /** @type {Array<{ x: number, y: number }>} */
    const out = [];
    for (let i = -n; i <= n; i++) {
      for (let j = -n; j <= n; j++) out.push({ x: C + i * atomPx, y: C + j * atomPx });
    }
    return out;
  });
  /** Electrons of carbon, drawn at a fixed size: they are far smaller than any pixel. */
  const electrons = $derived(
    Array.from({ length: 6 }, (_, i) => {
      const r = (i < 2 ? 0.18 : 0.4) * atomPx;
      const a = (i < 2 ? Math.PI * i : (Math.PI / 2) * (i - 2)) + 0.5;
      return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
    }).filter((p) => p.x > -10 && p.x < VIEW + 10 && p.y > -10 && p.y < VIEW + 10),
  );

  const MODELS = [
    { value: 0.005, label: 'Hạt đậu (5 mm)' },
    { value: 0.04, label: 'Quả bóng bàn (4 cm)' },
    { value: 0.22, label: 'Quả bóng đá (22 cm)' },
  ];
  let model = $state(0.04);
  const modelName = $derived(MODELS.find((m) => m.value === model)?.label ?? '');
  const atomModel = $derived(scaledAtom(model));
  const fmtLength = (/** @type {number} */ m) =>
    m >= 1000 ? `${formatNumber(m / 1000, 2)} km` : `${formatNumber(m, 2)} m`;
</script>

<div class="space-y-4">
  <SliderField
    label="Phóng to"
    bind:value={zoom}
    min={ZOOM_MIN}
    max={ZOOM_MAX}
    step={0.05}
    format={(e) => `khung rộng ${formatMetres(viewWidth(e))}`}
  />

  <svg
    viewBox="0 0 {VIEW} {VIEW}"
    class="mx-auto block w-full max-w-xs rounded-xl bg-slate-900"
    role="img"
    aria-label="Khung nhìn rộng {formatMetres(viewWidth(zoom))}. {STAGE_TEXT[now]}"
  >
    <defs>
      <radialGradient id="dam-may-electron">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
        <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
      </radialGradient>
      <clipPath id="khung-nhin"><rect width={VIEW} height={VIEW} rx="12" /></clipPath>
    </defs>
    <g clip-path="url(#khung-nhin)">
      {#if now === 'atoms'}
        {#each neighbours as p, i (i)}
          <circle cx={p.x} cy={p.y} r={atomPx / 2} fill="url(#dam-may-electron)" />
        {/each}
      {:else}
        <circle cx={C} cy={C} r={atomPx / 2} fill="url(#dam-may-electron)" />
        {#each electrons as p, i (i)}
          <circle cx={p.x} cy={p.y} r="3" fill="#7dd3fc" />
        {/each}
        {#if now === 'nucleons'}
          {#each nucleons as p, i (i)}
            <circle
              cx={C + p.x}
              cy={C + p.y}
              r={nucleusPx / 10}
              fill={p.kind === 'p' ? '#ef4444' : '#94a3b8'}
              stroke="#0f172a"
              stroke-width="1"
            />
          {/each}
        {:else if nucleusPx >= 1}
          <circle cx={C} cy={C} r={nucleusPx / 2} fill="#f87171" />
        {:else}
          <circle cx={C} cy={C} r="6" fill="none" stroke="#fca5a5" stroke-dasharray="2 2" />
        {/if}
      {/if}
    </g>
    <text x="10" y={VIEW - 10} font-size="12" fill="#e2e8f0">{formatMetres(viewWidth(zoom))}</text>
  </svg>

  <p
    class="rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700"
    aria-live="polite"
  >
    {STAGE_TEXT[now]}
    {#if now === 'nucleons'}
      <span class="font-normal">(đỏ: proton, xám: neutron)</span>
    {/if}
  </p>

  <div class="space-y-2">
    <SegmentedControl label="Nếu phóng to hạt nhân thành" options={MODELS} bind:value={model} />
    <p class="text-sm text-slate-700" aria-live="polite">
      Hạt nhân to bằng {modelName.toLowerCase()} thì nguyên tử có đường kính khoảng
      <strong class="tabular-nums">{fmtLength(atomModel)}</strong>, gấp {formatNumber(SIZE_RATIO)} lần.
    </p>
  </div>
</div>
