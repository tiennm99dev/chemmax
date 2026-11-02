<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { RATE_EXPERIMENTS, averageRate, balloonRadius, gasVolume } from './engine.js';

  const OPTIONS = RATE_EXPERIMENTS.map((e) => ({ value: e.id, label: e.label }));
  const COLORS = ['#2563eb', '#db2777'];
  const END = 60;
  /** Simulated seconds per real second. */
  const SPEED = 6;
  const CHART = { w: 340, h: 204, left: 44, right: 10, top: 24, bottom: 32 };
  const MAX_GAS = 250;
  const TICKS_T = [0, 20, 40, 60];
  const TICKS_V = [0, 50, 100, 150, 200, 250];

  let id = $state('concentration');
  let t = $state(0);
  let running = $state(false);

  const experiment = $derived(RATE_EXPERIMENTS.find((e) => e.id === id) ?? RATE_EXPERIMENTS[0]);
  const x = (/** @type {number} */ s) =>
    CHART.left + (s / END) * (CHART.w - CHART.left - CHART.right);
  const y = (/** @type {number} */ v) =>
    CHART.h - CHART.bottom - (v / MAX_GAS) * (CHART.h - CHART.top - CHART.bottom);

  const curves = $derived(
    experiment.tubes.map((tube) =>
      Array.from({ length: END + 1 }, (_, s) => ({ x: x(s), y: y(gasVolume(tube, s)) })),
    ),
  );
  const volumes = $derived(experiment.tubes.map((tube) => gasVolume(tube, t)));
  const rates = $derived(experiment.tubes.map((tube) => averageRate(tube, t)));
  const one = (/** @type {number} */ v) => formatNumber(v, 1);

  const note = $derived(
    t === 0
      ? 'Bấm Chạy, hoặc kéo thanh thời gian, rồi so sánh hai quả bóng.'
      : t >= END
        ? experiment.conclusion
        : `Sau ${one(t)} s: ống 1 thu ${one(volumes[0])} cm³ ${experiment.gas}, tốc độ trung bình ${one(rates[0])} cm³/s; ống 2 thu ${one(volumes[1])} cm³, tốc độ trung bình ${one(rates[1])} cm³/s.`,
  );

  /** @type {(() => void) | null} */
  let stopLoop = null;

  function halt() {
    stopLoop?.();
    stopLoop = null;
    running = false;
  }

  function run() {
    if (running) {
      halt();
      return;
    }
    if (t >= END) t = 0;
    if (reducedMotion()) {
      t = END;
      return;
    }
    running = true;
    stopLoop = frameLoop((dt) => {
      t = Math.min(END, t + dt * SPEED);
      if (t >= END) halt();
    });
  }

  function restart() {
    halt();
    t = 0;
  }

  $effect(() => halt);
</script>

<div class="space-y-3">
  <SegmentedControl label="Yếu tố khảo sát" options={OPTIONS} bind:value={id} onchange={restart} />
  <div class="overflow-x-auto text-center text-sm"><Tex math={experiment.equation} /></div>

  <div class="grid grid-cols-2 gap-2" aria-hidden="true">
    {#each experiment.tubes as tube, i (tube.label)}
      {@const r = balloonRadius(volumes[i])}
      <figure class="text-center">
        <svg viewBox="0 0 120 170" class="mx-auto block w-full max-w-[9rem]">
          <circle cx="60" cy={70 - r} {r} fill={COLORS[i]} opacity="0.55" stroke={COLORS[i]} />
          <path
            d="M 42 70 L 42 145 A 18 18 0 0 0 78 145 L 78 70"
            fill="#f8fafc"
            stroke="#475569"
            stroke-width="2.5"
          />
          <path d="M 44 112 L 44 145 A 16 16 0 0 0 76 145 L 76 112 Z" fill="#bfdbfe" />
          <line x1="38" y1="70" x2="82" y2="70" stroke="#475569" stroke-width="3" />
        </svg>
        <figcaption class="text-xs font-semibold text-slate-700">
          Ống {i + 1}: {tube.label}
        </figcaption>
      </figure>
    {/each}
  </div>

  <svg
    viewBox="0 0 {CHART.w} {CHART.h}"
    class="mx-auto block w-full max-w-md"
    role="img"
    aria-label="Đồ thị thể tích khí theo thời gian. {note}"
  >
    {#each TICKS_V as v (v)}
      <line x1={CHART.left} x2={CHART.w - CHART.right} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
      <text x={CHART.left - 6} y={y(v) + 4} text-anchor="end" font-size="11" fill="#475569">
        {v}
      </text>
    {/each}
    {#each TICKS_T as s (s)}
      <text
        x={x(s)}
        y={CHART.h - CHART.bottom + 15}
        text-anchor="middle"
        font-size="11"
        fill="#475569"
      >
        {s}
      </text>
    {/each}
    <text x={CHART.w - CHART.right} y={CHART.h - 3} text-anchor="end" font-size="11" fill="#475569">
      t (s)
    </text>
    <text x="2" y="11" font-size="11" fill="#475569">V (cm³)</text>
    {#each curves as curve, i (i)}
      <polyline
        points={pointsAttr(curve)}
        fill="none"
        stroke={COLORS[i]}
        stroke-width="2.5"
        stroke-dasharray={i === 1 ? '7 4' : undefined}
      />
      <circle cx={x(t)} cy={y(volumes[i])} r="5" fill={COLORS[i]} />
    {/each}
    <line x1={x(t)} x2={x(t)} y1={CHART.top} y2={y(0)} stroke="#64748b" stroke-dasharray="3 3" />
  </svg>

  <SliderField
    label="Thời gian"
    bind:value={t}
    min={0}
    max={END}
    step={1}
    unit="s"
    format={(v) => formatNumber(v, 0)}
    oninput={halt}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={run}>
      {running ? 'Tạm dừng' : 'Chạy'}
    </button>
    <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
  </div>
  <FeedbackNote tone={t >= END ? 'ok' : 'info'} text={note} />
  <p class="text-xs text-slate-600">
    Mô hình đơn giản: đá vôi lấy dư, tốc độ tỉ lệ với lượng chất còn lại, tăng gấp đôi khi nhiệt độ
    tăng 10 °C, thể tích khí tính ở 25 °C. Con số trên phần mềm khác sẽ khác, nhưng xu hướng là như
    nhau.
  </p>
</div>
