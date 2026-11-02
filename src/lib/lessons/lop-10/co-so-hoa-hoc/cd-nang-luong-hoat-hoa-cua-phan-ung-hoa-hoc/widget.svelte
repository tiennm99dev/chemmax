<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { arrhenius, boltzmannShare, energyProfile, sciTex } from './engine.js';

  const W = 340;
  const H = 240;
  const PAD_L = 14;
  const PAD_R = 14;
  const E_MIN = -70;
  const E_MAX = 185;
  const FACTOR = 1e11;
  /** How far the catalyst in this model lowers the barrier, in kJ/mol. */
  const CATALYST_DROP = 30;
  const LOG_MIN = -24;
  const LOG_MAX = 10;

  const sx = (/** @type {number} */ s) => PAD_L + s * (W - PAD_L - PAD_R);
  const sy = (/** @type {number} */ e) => 8 + ((E_MAX - e) / (E_MAX - E_MIN)) * (H - 16);

  const KINDS = [
    { value: -50, label: 'Toả nhiệt' },
    { value: 20, label: 'Thu nhiệt' },
  ];
  const CAT = [
    { value: 'off', label: 'Không xúc tác' },
    { value: 'on', label: 'Có xúc tác' },
  ];

  let ea = $state(100);
  let temperature = $state(300);
  let dH = $state(-50);
  let catalyst = $state('off');
  /** @type {{ ea: number, t: number, k: number } | null} */
  let pinned = $state(null);

  const eaNow = $derived(catalyst === 'on' ? ea - CATALYST_DROP : ea);
  const k = $derived(arrhenius(FACTOR, eaNow, temperature));
  const share = $derived(boltzmannShare(eaNow, temperature));
  const logK = $derived(Math.log10(k));
  const barWidth = $derived(`${((logK - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 100}%`);

  /** @param {number} barrier */
  const path = (barrier) =>
    pointsAttr(energyProfile(barrier, dH).map((p) => ({ x: sx(p.s), y: sy(p.e) })));

  const PEAK_X = sx(0.46);
  const END_X = sx(0.97);

  const compare = $derived.by(() => {
    if (!pinned)
      return 'Bấm "Ghim trạng thái này", rồi đổi $E_a$, $T$ hoặc thêm xúc tác để so sánh hằng số tốc độ.';
    const ratio = k / pinned.k;
    const head = `Đã ghim: $E_a = ${numTex(pinned.ea)}$ kJ/mol, $T = ${pinned.t}$ K.`;
    if (Math.abs(ratio - 1) < 1e-9) return `${head} Hiện tại $k$ chưa đổi so với lúc ghim.`;
    if (ratio > 1) return `${head} Hiện tại $k$ lớn gấp $${sciTex(ratio)}$ lần lúc ghim.`;
    return `${head} Hiện tại $k$ nhỏ đi $${sciTex(1 / ratio)}$ lần so với lúc ghim.`;
  });
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Loại phản ứng" options={KINDS} bind:value={dH} />
    <SegmentedControl label="Chất xúc tác" options={CAT} bind:value={catalyst} />
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label="Giản đồ năng lượng: chất đầu ở mức 0, đỉnh ở {formatNumber(
      eaNow,
    )} kJ/mol, sản phẩm ở {formatNumber(dH)} kJ/mol."
  >
    <line x1={PAD_L} x2={W - PAD_R} y1={sy(0)} y2={sy(0)} stroke="#cbd5e1" stroke-dasharray="4 4" />
    {#if catalyst === 'on'}
      <polyline
        points={path(ea)}
        fill="none"
        stroke="#94a3b8"
        stroke-width="2"
        stroke-dasharray="5 4"
      />
    {/if}
    <polyline points={path(eaNow)} fill="none" stroke="#4f46e5" stroke-width="3" />

    <line
      x1={PEAK_X}
      x2={PEAK_X}
      y1={sy(0)}
      y2={sy(eaNow) + 2}
      stroke="#dc2626"
      stroke-width="2"
      marker-end="url(#ea-arrow)"
    />
    <text x={PAD_L + 2} y="18" font-size="12" font-weight="700" fill="#b91c1c">
      Ea = {formatNumber(eaNow)} kJ/mol
    </text>

    <line x1={END_X} x2={END_X} y1={sy(0)} y2={sy(dH)} stroke="#0f766e" stroke-width="2" />
    <text
      x={END_X - 4}
      y={dH < 0 ? sy(dH) + 14 : sy(dH) - 6}
      font-size="11"
      font-weight="600"
      text-anchor="end"
      fill="#115e59"
    >
      ΔH = {formatNumber(dH)} kJ/mol
    </text>

    <text x={PAD_L + 2} y={sy(0) + 14} font-size="11" font-weight="600" fill="#334155">
      Chất đầu
    </text>
    <text
      x={END_X - 6}
      y={dH < 0 ? sy(dH) - 6 : sy(dH) + 14}
      font-size="11"
      font-weight="600"
      text-anchor="end"
      fill="#334155"
    >
      Sản phẩm
    </text>
    <defs>
      <marker
        id="ea-arrow"
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M0 0 L8 4 L0 8 Z" fill="#dc2626" />
      </marker>
    </defs>
  </svg>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Năng lượng hoạt hoá"
      bind:value={ea}
      min={60}
      max={160}
      step={5}
      unit="kJ/mol"
    />
    <SliderField label="Nhiệt độ" bind:value={temperature} min={250} max={800} step={10} unit="K" />
  </div>

  <div class="space-y-2 rounded-xl border border-slate-200 p-3">
    <p class="text-sm" aria-live="polite">
      <LiveRichText
        text={`$\\mathrm{e}^{-E_a/RT} = ${sciTex(share)}$, nên $k = 10^{11} \\cdot \\mathrm{e}^{-E_a/RT} = ${sciTex(k)}$.`}
      />
    </p>
    <div
      class="h-3 w-full overflow-hidden rounded-full bg-slate-200"
      role="img"
      aria-label="Độ lớn của k trên thang lôgarit"
    >
      <div class="h-full rounded-full bg-indigo-500" style:width={barWidth}></div>
    </div>
    <p class="text-xs text-slate-500">
      Thanh vẽ theo thang lôgarit: dài thêm một đoạn ngắn đã là k tăng rất nhiều lần.
    </p>
  </div>

  <div class="rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-900" aria-live="polite">
    <LiveRichText text={compare} />
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      onclick={() => (pinned = { ea: eaNow, t: temperature, k })}
    >
      Ghim trạng thái này
    </button>
    {#if pinned}
      <button type="button" class={button.quiet} onclick={() => (pinned = null)}>Bỏ ghim</button>
    {/if}
  </div>
  {#if catalyst === 'on'}
    <p class="text-sm text-slate-600">
      Xúc tác hạ đỉnh năng lượng nhưng giữ nguyên mức chất đầu và mức sản phẩm, nên biến thiên
      enthalpy không đổi.
    </p>
  {/if}
</div>
