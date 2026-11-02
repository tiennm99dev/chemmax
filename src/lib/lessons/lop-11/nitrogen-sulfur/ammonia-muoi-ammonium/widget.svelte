<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { approach, conversion, equilibriumShare, outletShare, verdict } from './engine.js';

  const T_MIN = 200;
  const T_MAX = 700;
  const BOX = { left: 40, right: 350, top: 14, bottom: 180 };
  const Y_MAX = 1;

  let temperature = $state(550);
  let pressure = $state(60);
  let catalyst = $state('fe');
  const hasCatalyst = $derived(catalyst === 'fe');

  const eq = $derived(equilibriumShare(temperature, pressure));
  const out = $derived(outletShare(temperature, pressure, hasCatalyst));
  const reached = $derived(approach(temperature, hasCatalyst));
  const note = $derived(verdict(temperature, pressure, hasCatalyst));

  /** @param {number} t */
  const sx = (t) => BOX.left + ((t - T_MIN) / (T_MAX - T_MIN)) * (BOX.right - BOX.left);
  /** @param {number} y */
  const sy = (y) => BOX.bottom - (y / Y_MAX) * (BOX.bottom - BOX.top);

  const TEMPS = Array.from({ length: 51 }, (_, i) => T_MIN + i * 10);
  const eqLine = $derived(
    TEMPS.map((t) => `${sx(t)},${sy(equilibriumShare(t, pressure))}`).join(' '),
  );
  const outLine = $derived(
    TEMPS.map((t) => `${sx(t)},${sy(outletShare(t, pressure, hasCatalyst))}`).join(' '),
  );

  /** @param {number} share */
  const pct = (share) => `${formatNumber(share * 100, 1)} %`;
</script>

<div class="space-y-4">
  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-3">
      <SliderField
        label="Nhiệt độ"
        bind:value={temperature}
        min={T_MIN}
        max={T_MAX}
        step={10}
        unit="°C"
      />
      <SliderField label="Áp suất" bind:value={pressure} min={20} max={500} step={10} unit="bar" />
      <SegmentedControl
        label="Xúc tác"
        bind:value={catalyst}
        options={[
          { value: 'fe', label: 'Bột sắt' },
          { value: 'none', label: 'Không có' },
        ]}
      />
    </div>

    <dl
      class="grid grid-cols-[1fr_auto] content-start gap-x-4 gap-y-2 rounded-lg bg-slate-50 p-3 text-sm tabular-nums"
    >
      <dt class="text-slate-600">Phần trăm số mol NH₃ lúc cân bằng</dt>
      <dd class="text-right font-semibold">{pct(eq)}</dd>
      <dt class="text-slate-600">Hiệu suất lúc cân bằng</dt>
      <dd class="text-right font-semibold">{pct(conversion(eq))}</dd>
      <dt class="text-slate-600">Một lượt qua bình đạt tới</dt>
      <dd class="text-right font-semibold">{formatFixed(reached * 100, 0)} % cân bằng</dd>
      <dt class="text-slate-600">NH₃ thu được sau một lượt</dt>
      <dd class="text-right font-semibold text-indigo-700">{pct(out)}</dd>
    </dl>
  </div>

  <svg
    viewBox="0 0 360 218"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Đồ thị phần trăm NH₃ theo nhiệt độ ở {formatNumber(
      pressure,
    )} bar. Tại {formatNumber(temperature)} độ C, lúc cân bằng {pct(eq)}, sau một lượt {pct(out)}."
  >
    <rect
      x={sx(400)}
      y={BOX.top}
      width={sx(450) - sx(400)}
      height={BOX.bottom - BOX.top}
      fill="#d1fae5"
    />
    {#each [0, 0.2, 0.4, 0.6, 0.8, 1] as y (y)}
      <line x1={BOX.left} x2={BOX.right} y1={sy(y)} y2={sy(y)} stroke="#e2e8f0" />
      <text x={BOX.left - 5} y={sy(y) + 4} text-anchor="end" font-size="11" fill="#475569"
        >{Math.round(y * 100)}</text
      >
    {/each}
    {#each [200, 300, 400, 500, 600, 700] as t (t)}
      <text x={sx(t)} y={BOX.bottom + 15} text-anchor="middle" font-size="11" fill="#475569"
        >{t}</text
      >
    {/each}
    <text x={BOX.right} y={BOX.bottom + 31} text-anchor="end" font-size="11" fill="#475569"
      >t (°C)</text
    >
    <text x={BOX.left} y={BOX.bottom + 31} font-size="11" fill="#475569">% NH₃</text>
    <line x1={BOX.left} x2={BOX.left} y1={BOX.top} y2={BOX.bottom} stroke="#475569" />
    <line x1={BOX.left} x2={BOX.right} y1={BOX.bottom} y2={BOX.bottom} stroke="#475569" />

    <polyline
      points={eqLine}
      fill="none"
      stroke="#b45309"
      stroke-width="2"
      stroke-dasharray="6 4"
    />
    <polyline points={outLine} fill="none" stroke="#4f46e5" stroke-width="2.5" />

    <line
      x1={sx(temperature)}
      x2={sx(temperature)}
      y1={BOX.top}
      y2={BOX.bottom}
      stroke="#94a3b8"
      stroke-dasharray="2 3"
    />
    <circle cx={sx(temperature)} cy={sy(eq)} r="5" fill="#b45309" />
    <circle cx={sx(temperature)} cy={sy(out)} r="5" fill="#4f46e5" />
  </svg>

  <p class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-600">
    <span
      ><span
        class="mr-1 inline-block h-0.5 w-5 border-t-2 border-dashed border-amber-700 align-middle"
      ></span>Lúc cân bằng</span
    >
    <span
      ><span class="mr-1 inline-block h-0.5 w-5 bg-indigo-600 align-middle"></span>Sau một lượt qua
      bình</span
    >
    <span
      ><span class="mr-1 inline-block h-3 w-3 bg-emerald-100 align-middle"></span>400 – 450 °C</span
    >
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
