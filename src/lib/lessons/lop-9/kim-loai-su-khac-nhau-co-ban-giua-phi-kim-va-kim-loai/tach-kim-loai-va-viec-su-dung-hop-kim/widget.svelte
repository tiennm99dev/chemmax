<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { ZONES, temperatureAt, zoneAt } from './engine.js';

  /** Depth of the probe in percent of the furnace height, 0 at the top. */
  let depth = $state(30);

  const zone = $derived(zoneAt(depth / 100));
  const temp = $derived(temperatureAt(depth / 100));

  const TOP = 40;
  const H = 320;
  const CX = 150;
  /** Half width of the furnace at a depth (0-1): narrow throat, wide belly, hearth. */
  const SHAPE = [
    [0, 38],
    [0.5, 78],
    [0.62, 80],
    [0.86, 56],
    [1, 56],
  ];

  /** @param {number} d */
  function half(d) {
    for (let i = 1; i < SHAPE.length; i++) {
      const [d1, w1] = SHAPE[i];
      const [d0, w0] = SHAPE[i - 1];
      if (d <= d1) return w0 + ((w1 - w0) * (d - d0)) / (d1 - d0);
    }
    return SHAPE[SHAPE.length - 1][1];
  }

  /** @param {number} d */
  const y = (d) => TOP + d * H;

  /**
   * Outline of the part of the furnace between two depths.
   * @param {number} a @param {number} b
   */
  function band(a, b) {
    const ds = [a, ...SHAPE.map((s) => s[0]).filter((d) => d > a && d < b), b];
    const right = ds.map((d) => `${CX + half(d)},${y(d)}`);
    const left = [...ds].reverse().map((d) => `${CX - half(d)},${y(d)}`);
    return [...right, ...left].join(' ');
  }

  /** Colour of a temperature: pale yellow when cool, deep red at 1 900 °C. */
  /** @param {number} t */
  function heat(t) {
    const k = Math.max(0, Math.min(1, (t - 250) / 1650));
    const r = Math.round(254 - 34 * k);
    const g = Math.round(240 - 202 * k);
    const b = Math.round(138 - 100 * k);
    return `rgb(${r}, ${g}, ${b})`;
  }

  /** @param {string} id */
  function goTo(id) {
    const z = ZONES.find((x) => x.id === id);
    if (z) depth = Math.round(((z.top + z.bottom) / 2) * 100);
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goTo(id);
    }
  }

  const probeY = $derived(y(depth / 100));
  const probeHalf = $derived(half(depth / 100));
  const note = $derived(`${zone.name} (${zone.temperature}). ${zone.note}`);
</script>

<div class="space-y-4">
  <div class="grid items-start gap-4 md:grid-cols-[minmax(0,20rem)_1fr]">
    <svg
      viewBox="0 0 300 400"
      class="mx-auto block h-auto w-full max-w-80"
      role="group"
      aria-label="Sơ đồ lò cao luyện gang. Đầu dò đang ở {zone.name}, khoảng {fmt(temp)} độ C."
    >
      {#each ZONES as z (z.id)}
        <polygon
          points={band(z.top, z.bottom)}
          fill={heat(temperatureAt((z.top + z.bottom) / 2))}
          stroke={z.id === zone.id ? '#1e293b' : '#94a3b8'}
          stroke-width={z.id === zone.id ? 2.5 : 1}
          role="button"
          tabindex="0"
          aria-label="{z.name}, {z.temperature}"
          aria-pressed={z.id === zone.id}
          class="zone"
          onclick={() => goTo(z.id)}
          onkeydown={(e) => onKey(e, z.id)}
        />
      {/each}
      <!-- molten iron and slag in the hearth -->
      <rect x={CX - 55} y={y(0.95)} width="110" height={y(1) - y(0.95)} fill="#ea580c" />
      <rect x={CX - 55} y={y(0.91)} width="110" height={y(0.95) - y(0.91)} fill="#a8a29e" />

      <!-- inputs and outputs -->
      <g font-size="11" fill="#0f172a">
        <text x={CX - 34} y="14">Quặng, than cốc,</text>
        <text x={CX - 20} y="27">đá vôi ↓</text>
        <text x={CX + 48} y="52">Khí lò ↑</text>
        <text x="4" y={y(0.79) + 4}>Không khí</text>
        <text x="4" y={y(0.79) + 17}>nóng →</text>
        <text x={CX + 60} y={y(0.93) + 4}>→ Xỉ</text>
        <text x={CX + 60} y={y(0.98) + 4}>→ Gang</text>
      </g>
      <line
        x1="60"
        x2={CX - half(0.79)}
        y1={y(0.79)}
        y2={y(0.79)}
        stroke="#0369a1"
        stroke-width="3"
      />

      <!-- probe -->
      <line
        x1={CX - probeHalf}
        x2={CX + probeHalf}
        y1={probeY}
        y2={probeY}
        stroke="#4338ca"
        stroke-width="2"
        stroke-dasharray="5 3"
        pointer-events="none"
      />
      <circle cx={CX - probeHalf} cy={probeY} r="6" fill="#4338ca" pointer-events="none" />
      <text
        x={CX}
        y={probeY - 5}
        text-anchor="middle"
        font-size="12"
        font-weight="700"
        fill="#1e1b4b"
        pointer-events="none">{fmt(temp)} °C</text
      >
    </svg>

    <div class="space-y-3">
      <SliderField
        label="Độ sâu đầu dò (tính từ miệng lò)"
        bind:value={depth}
        min={0}
        max={100}
        unit="%"
      />
      <div class="rounded-xl bg-slate-50 p-3">
        <p class="font-semibold text-slate-800">{zone.name}: {zone.temperature}</p>
        <dl class="mt-2 space-y-1 text-sm text-slate-700">
          <div>
            <dt class="inline font-semibold">Chất rắn đi xuống:</dt>
            <dd class="inline">{zone.solid}</dd>
          </div>
          <div>
            <dt class="inline font-semibold">Khí đi lên:</dt>
            <dd class="inline">{zone.gas}</dd>
          </div>
        </dl>
        <div class="mt-3 text-base">
          {#if zone.equations.length}
            <p class="mb-1 text-sm font-semibold text-slate-600">Phản ứng (nhiệt độ cao, t°)</p>
            <ul class="space-y-1">
              {#each zone.equations as eq (eq)}
                <li><EquationLine text={eq} /></li>
              {/each}
            </ul>
          {:else}
            <p class="text-sm text-slate-600">Vùng này không có phản ứng chính cần ghi nhớ.</p>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <FeedbackNote tone="info" text={note} />
</div>

<style>
  .zone {
    cursor: pointer;
  }
  .zone:focus-visible {
    outline: none;
    stroke: #4f46e5;
    stroke-width: 3;
  }
</style>
