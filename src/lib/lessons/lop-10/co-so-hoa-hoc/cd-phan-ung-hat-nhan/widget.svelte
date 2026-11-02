<script>
  import { onDestroy } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { countLeft, expectedLeft, lifetimes } from './engine.js';

  const ISOTOPES = [
    {
      value: 'i131',
      label: 'Iodine-131',
      tex: '{}^{131}_{53}\\mathrm{I}',
      halfLife: 8,
      unit: 'ngày',
    },
    {
      value: 'p32',
      label: 'Phosphorus-32',
      tex: '{}^{32}_{15}\\mathrm{P}',
      halfLife: 14.3,
      unit: 'ngày',
    },
    {
      value: 'co60',
      label: 'Cobalt-60',
      tex: '{}^{60}_{27}\\mathrm{Co}',
      halfLife: 5.27,
      unit: 'năm',
    },
    {
      value: 'c14',
      label: 'Carbon-14',
      tex: '{}^{14}_{6}\\mathrm{C}',
      halfLife: 5730,
      unit: 'năm',
    },
  ];
  const N0 = 400;
  const COLS = 20;
  const MAX_HALVES = 5;
  /** Half-lives played per second. */
  const SPEED = 0.6;

  const PW = 340;
  const PH = 210;
  const LEFT = 40;
  const RIGHT = 12;
  const TOP = 12;
  const BOTTOM = 34;
  const px = (/** @type {number} */ h) => LEFT + (h / MAX_HALVES) * (PW - LEFT - RIGHT);
  const py = (/** @type {number} */ c) => TOP + (1 - c / N0) * (PH - TOP - BOTTOM);
  const CURVE = Array.from({ length: 51 }, (_, i) => {
    const h = (i / 50) * MAX_HALVES;
    return { x: px(h), y: py(expectedLeft(N0, h, 1)) };
  });

  let id = $state('i131');
  let seed = $state(7);
  let halves = $state(0);
  let playing = $state(false);
  /** @type {(() => void) | null} */
  let stop = null;

  const iso = $derived(ISOTOPES.find((x) => x.value === id) ?? ISOTOPES[0]);
  const lives = $derived(lifetimes(N0, seed));
  const left = $derived(countLeft(lives, halves));
  const expected = $derived(expectedLeft(N0, halves, 1));
  const time = $derived(tidy(halves * iso.halfLife, 3));
  const walk = $derived(
    Array.from({ length: Math.round(halves * 10) + 1 }, (_, i) => {
      const h = i / 10;
      return { x: px(h), y: py(countLeft(lives, h)) };
    }),
  );

  const summary = $derived(
    `Sau $t = ${numTex(time)}$ ${iso.unit} ($${numTex(halves)}$ chu kì): công thức dự đoán còn $${numTex(expected, 1)}$ hạt nhân, mẫu này đếm được $${left}$ hạt nhân.`,
  );
  const insight = $derived.by(() => {
    if (halves === 0) return 'Bấm "Phát" hoặc kéo thanh thời gian để các hạt nhân bắt đầu phân rã.';
    if (Number.isInteger(halves)) {
      return `Đúng ${halves} chu kì bán rã: số hạt nhân dự đoán còn $\\dfrac{1}{${2 ** halves}}$ ban đầu. Không thể biết trước hạt nhân nào phân rã, nhưng cả mẫu đi rất sát đường cong.`;
    }
    return 'Mỗi chu kì, số hạt nhân còn lại giảm một nửa so với đầu chu kì đó, chứ không giảm đi một lượng cố định.';
  });

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function play() {
    if (playing) {
      halt();
      return;
    }
    if (halves >= MAX_HALVES) halves = 0;
    if (reducedMotion()) {
      halves = Math.min(MAX_HALVES, Math.floor(halves) + 1);
      return;
    }
    playing = true;
    stop = frameLoop((dt) => {
      const next = halves + dt * SPEED;
      if (next >= MAX_HALVES) {
        halves = MAX_HALVES;
        halt();
      } else {
        halves = tidy(next, 2);
      }
    });
  }

  function jump() {
    halt();
    halves = Math.min(MAX_HALVES, Math.floor(halves + 1e-9) + 1);
  }

  function fresh() {
    halt();
    seed += 1;
    halves = 0;
  }

  onDestroy(halt);
</script>

<div class="space-y-3">
  <SegmentedControl label="Đồng vị phóng xạ" options={ISOTOPES} bind:value={id} onchange={fresh} />
  <p class="text-sm text-slate-700">
    <LiveRichText
      text={`Chu kì bán rã của $${iso.tex}$: $T = ${numTex(iso.halfLife)}$ ${iso.unit}. Mẫu có $N_0 = ${N0}$ hạt nhân.`}
    />
  </p>

  <div class="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
    <svg
      viewBox="0 0 {COLS * 8} {COLS * 8}"
      class="mx-auto block w-40 rounded-lg bg-slate-900"
      role="img"
      aria-label="Mẫu {N0} hạt nhân, còn {left} hạt nhân chưa phân rã"
    >
      {#each lives as l, i (i)}
        <circle
          cx={(i % COLS) * 8 + 4}
          cy={Math.floor(i / COLS) * 8 + 4}
          r="3"
          fill={l > halves ? '#fbbf24' : '#475569'}
        />
      {/each}
    </svg>

    <svg
      viewBox="0 0 {PW} {PH}"
      class="block w-full rounded-lg border border-slate-200 bg-white"
      role="img"
      aria-label="Đồ thị số hạt nhân còn lại theo thời gian. Đang ở {formatNumber(
        halves,
      )} chu kì, còn {left} hạt nhân."
    >
      {#each [0, 1, 2, 3, 4, 5] as h (h)}
        <line x1={px(h)} x2={px(h)} y1={TOP} y2={PH - BOTTOM} stroke="#e2e8f0" />
        <text x={px(h)} y={PH - BOTTOM + 13} text-anchor="middle" font-size="10" fill="#64748b">
          {formatNumber(tidy(h * iso.halfLife, 3))}
        </text>
      {/each}
      {#each [400, 200, 100, 50, 25] as c (c)}
        <line x1={LEFT} x2={PW - RIGHT} y1={py(c)} y2={py(c)} stroke="#e2e8f0" />
        {#if c >= 50}
          <text x={LEFT - 5} y={py(c) + 3} text-anchor="end" font-size="10" fill="#64748b">{c}</text
          >
        {/if}
      {/each}
      <line x1={LEFT} x2={PW - RIGHT} y1={PH - BOTTOM} y2={PH - BOTTOM} stroke="#334155" />
      <line x1={LEFT} x2={LEFT} y1={TOP} y2={PH - BOTTOM} stroke="#334155" />
      <text x={(PW + LEFT) / 2} y={PH - 6} text-anchor="middle" font-size="11" fill="#334155">
        Thời gian ({iso.unit})
      </text>
      <polyline points={pointsAttr(CURVE)} fill="none" stroke="#6366f1" stroke-width="2" />
      <polyline points={pointsAttr(walk)} fill="none" stroke="#d97706" stroke-width="2" />
      <line
        x1={px(halves)}
        x2={px(halves)}
        y1={TOP}
        y2={PH - BOTTOM}
        stroke="#0f172a"
        stroke-dasharray="3 3"
      />
      <circle cx={px(halves)} cy={py(left)} r="4" fill="#d97706" />
    </svg>
  </div>
  <p class="text-xs text-slate-500">
    <LiveRichText
      text={'Đường tím: công thức $N = \\dfrac{N_0}{2^{t/T}}$ tính ra. Đường cam: số đếm được của mẫu này.'}
    />
  </p>

  <SliderField
    label="Thời gian đã trôi qua"
    bind:value={halves}
    min={0}
    max={MAX_HALVES}
    step={0.1}
    format={(h) => `${formatNumber(tidy(h * iso.halfLife, 3))} ${iso.unit}`}
    oninput={halt}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={play}>
      {playing ? 'Tạm dừng' : 'Phát'}
    </button>
    <button type="button" class={button.secondary} onclick={jump}>Thêm 1 chu kì</button>
    <button type="button" class={button.quiet} onclick={fresh}>Mẫu mới</button>
  </div>

  <div class="space-y-1 rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
    <p aria-live="polite"><LiveRichText text={summary} /></p>
    <p><LiveRichText text={insight} /></p>
  </div>
</div>
