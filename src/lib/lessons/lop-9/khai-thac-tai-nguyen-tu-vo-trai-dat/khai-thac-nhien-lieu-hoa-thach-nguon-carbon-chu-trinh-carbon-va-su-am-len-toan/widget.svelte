<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { END_YEAR, FOREST, START_YEAR, simulate } from './engine.js';

  /** @typedef {import('./engine.js').ForestChoice} ForestChoice */

  let fuel = $state(100);
  let forest = $state(/** @type {ForestChoice} */ ('hien-nay'));
  let year = $state(END_YEAR);

  const run = $derived(simulate(fuel / 100, forest));
  const now = $derived(run[year - START_YEAR]);
  const end = $derived(run[run.length - 1]);

  const gt = (/** @type {number} */ v) => formatFixed(v, 1);
  const deg = (/** @type {number} */ v) => `${formatFixed(v, 1)} °C`;
  const ppm = (/** @type {number} */ v) => `${formatNumber(Math.round(v))} ppm`;

  const ARROWS = [
    { id: 'cc-red', colour: '#dc2626' },
    { id: 'cc-orange', colour: '#ea580c' },
    { id: 'cc-green', colour: '#16a34a' },
    { id: 'cc-blue', colour: '#2563eb' },
  ];

  /** Arrow stroke width for a flow in GtC per year. */
  const width = (/** @type {number} */ g) => Math.min(16, 1.5 + Math.abs(g) * 0.9);

  // chart frame
  const CX0 = 40;
  const CX1 = 340;
  const CY0 = 20;
  const CY1 = 150;
  const T_MAX = 3.5;
  const xOf = (/** @type {number} */ y) =>
    CX0 + ((y - START_YEAR) / (END_YEAR - START_YEAR)) * (CX1 - CX0);
  const yOf = (/** @type {number} */ t) =>
    CY1 - (Math.max(0, Math.min(T_MAX, t)) / T_MAX) * (CY1 - CY0);
  const tempLine = $derived(run.map((r) => `${xOf(r.year)},${yOf(r.temp)}`).join(' '));

  const feedback = $derived.by(() => {
    const t = end.temp;
    const base = `Nếu giữ mức này đến năm ${END_YEAR}: CO₂ trong không khí khoảng ${ppm(end.ppm)}, nhiệt độ trung bình Trái Đất cao hơn thời kì tiền công nghiệp khoảng ${deg(t)}.`;
    if (t < 1.5)
      return {
        tone: /** @type {const} */ ('ok'),
        text: `${base} Giữ được dưới mức 1,5 °C mà Thoả thuận Paris hướng tới.`,
      };
    if (t < 2)
      return {
        tone: /** @type {const} */ ('warn'),
        text: `${base} Vượt mức 1,5 °C: nắng nóng, hạn hán, mưa bão cực đoan tăng.`,
      };
    return {
      tone: /** @type {const} */ ('warn'),
      text: `${base} Vượt cả mức 2 °C: băng tan, nước biển dâng đe doạ vùng ven biển, nhiều hệ sinh thái bị phá huỷ.`,
    };
  });
</script>

<div class="space-y-4">
  <SliderField
    label="Lượng nhiên liệu hoá thạch đốt mỗi năm (so với hiện nay)"
    bind:value={fuel}
    min={0}
    max={200}
    step={10}
    unit="%"
  />
  <SegmentedControl
    label="Rừng"
    options={Object.entries(FOREST).map(([value, f]) => ({ value, label: f.label }))}
    bind:value={forest}
  />

  <svg
    viewBox="0 0 360 210"
    class="mx-auto block w-full max-w-[34rem] select-none"
    role="img"
    aria-label="Sơ đồ chu trình carbon năm {year}: đốt nhiên liệu thải {gt(
      now.emission - FOREST[forest].gtc,
    )} tỉ tấn carbon mỗi năm, đại dương và cây xanh hấp thụ {gt(now.uptake)}; khí quyển chứa {ppm(
      now.ppm,
    )} CO₂."
  >
    <defs>
      {#each ARROWS as a (a.id)}
        <marker
          id={a.id}
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="3"
          markerHeight="3"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={a.colour} />
        </marker>
      {/each}
    </defs>
    <!-- atmosphere -->
    <rect x="100" y="6" width="160" height="56" rx="12" fill="#e0f2fe" stroke="#0369a1" />
    <text x="180" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#0c4a6e"
      >Khí quyển (CO₂)</text
    >
    <text x="180" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#0c4a6e"
      >{ppm(now.ppm)}</text
    >
    <text x="180" y="56" text-anchor="middle" font-size="10" fill="#b91c1c">+{deg(now.temp)}</text>

    <!-- fossil fuels -->
    <rect x="6" y="150" width="104" height="54" rx="10" fill="#e7e5e4" stroke="#44403c" />
    <text x="58" y="166" text-anchor="middle" font-size="10" font-weight="700" fill="#1c1917"
      >Nhiên liệu</text
    >
    <text x="58" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="#1c1917"
      >hoá thạch</text
    >
    <text x="58" y="194" text-anchor="middle" font-size="9" fill="#44403c">than, dầu mỏ, khí</text>
    {#if fuel > 0}
      <line
        x1="58"
        y1="148"
        x2="120"
        y2="68"
        stroke="#dc2626"
        stroke-width={width(now.emission - FOREST[forest].gtc)}
        marker-end="url(#cc-red)"
      />
    {/if}
    <text x="8" y="92" font-size="9" fill="#b91c1c">Đốt cháy</text>
    <text x="8" y="104" font-size="9" fill="#b91c1c"
      >{gt(now.emission - FOREST[forest].gtc)} GtC/năm</text
    >

    <!-- forests -->
    <rect x="128" y="150" width="104" height="54" rx="10" fill="#dcfce7" stroke="#15803d" />
    <text x="180" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d"
      >Thực vật, đất</text
    >
    <text x="180" y="188" text-anchor="middle" font-size="9" fill="#15803d">quang hợp, hô hấp</text>
    {#if FOREST[forest].gtc > 0}
      <line
        x1="180"
        y1="148"
        x2="180"
        y2="70"
        stroke="#ea580c"
        stroke-width={width(FOREST[forest].gtc)}
        marker-end="url(#cc-orange)"
      />
      <text x="174" y="104" text-anchor="end" font-size="9" fill="#c2410c">Phá, đốt rừng</text>
      <text x="174" y="116" text-anchor="end" font-size="9" fill="#c2410c"
        >+{gt(FOREST[forest].gtc)} GtC/năm</text
      >
    {:else}
      <line
        x1="180"
        y1="70"
        x2="180"
        y2="148"
        stroke="#16a34a"
        stroke-width={width(FOREST[forest].gtc)}
        marker-end="url(#cc-green)"
      />
      <text x="174" y="104" text-anchor="end" font-size="9" fill="#15803d">Trồng rừng</text>
      <text x="174" y="116" text-anchor="end" font-size="9" fill="#15803d"
        >−{gt(-FOREST[forest].gtc)} GtC/năm</text
      >
    {/if}

    <!-- ocean and land uptake -->
    <rect x="250" y="150" width="104" height="54" rx="10" fill="#dbeafe" stroke="#1d4ed8" />
    <text x="302" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a"
      >Đại dương</text
    >
    <text x="302" y="188" text-anchor="middle" font-size="9" fill="#1d4ed8">hoà tan CO₂</text>
    <line
      x1="240"
      y1="68"
      x2="302"
      y2="148"
      stroke="#2563eb"
      stroke-width={width(now.uptake)}
      marker-end="url(#cc-blue)"
    />
    <text x="300" y="96" font-size="9" fill="#1d4ed8">Hấp thụ</text>
    <text x="300" y="108" font-size="9" fill="#1d4ed8">{gt(now.uptake)}</text>
    <text x="300" y="120" font-size="9" fill="#1d4ed8">GtC/năm</text>
  </svg>

  <SliderField
    label="Xem năm"
    bind:value={year}
    min={START_YEAR}
    max={END_YEAR}
    format={(v) => String(v)}
  />

  <svg
    viewBox="0 0 360 175"
    class="mx-auto block w-full max-w-[34rem]"
    role="img"
    aria-label="Đồ thị mức tăng nhiệt độ từ {START_YEAR} đến {END_YEAR}: từ {deg(
      run[0].temp,
    )} lên {deg(end.temp)}."
  >
    <line x1={CX0} y1={CY1} x2={CX1} y2={CY1} stroke="#94a3b8" />
    <line x1={CX0} y1={CY0} x2={CX0} y2={CY1} stroke="#94a3b8" />
    {#each [0, 1, 2, 3] as t (t)}
      <text x={CX0 - 6} y={yOf(t) + 3} text-anchor="end" font-size="9" fill="#475569">{t} °C</text>
    {/each}
    {#each [1.5, 2] as t (t)}
      <line x1={CX0} y1={yOf(t)} x2={CX1} y2={yOf(t)} stroke="#f59e0b" stroke-dasharray="4 3" />
      <text x={CX1} y={yOf(t) - 3} text-anchor="end" font-size="9" fill="#b45309"
        >{formatNumber(t)} °C</text
      >
    {/each}
    {#each [2024, 2050, 2075, 2100] as y (y)}
      <text x={xOf(y)} y={CY1 + 14} text-anchor="middle" font-size="9" fill="#475569">{y}</text>
    {/each}
    <polyline points={tempLine} fill="none" stroke="#dc2626" stroke-width="2.5" />
    <line x1={xOf(year)} y1={CY0} x2={xOf(year)} y2={CY1} stroke="#4f46e5" stroke-dasharray="2 2" />
    <circle cx={xOf(year)} cy={yOf(now.temp)} r="4.5" fill="#4f46e5" />
    <text x={CX0 + 4} y={CY0 - 6} font-size="9" fill="#475569"
      >Mức tăng nhiệt độ so với thời kì tiền công nghiệp</text
    >
  </svg>

  <FeedbackNote tone={feedback.tone} text={feedback.text} />
  <p class="text-xs text-slate-500">
    Mô hình đơn giản hoá để học tập (GtC: tỉ tấn carbon; ppm: phần triệu thể tích), không phải dự
    báo khí hậu.
  </p>
</div>
