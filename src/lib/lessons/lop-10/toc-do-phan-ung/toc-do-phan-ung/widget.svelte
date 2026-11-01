<script>
  import { onDestroy } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed } from '#lib/core/number-format.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { button } from '#lib/core/ui.js';
  import RatePlot from '../_shared/rate-plot.svelte';
  import {
    DURATION,
    FIELD,
    RADIUS,
    advance,
    countOf,
    createSim,
    finish,
    runVerdict,
  } from './engine.js';

  const COLORS = { A: '#4F46E5', B: '#F46036', C: '#1B998B' };
  const CATALYST_OPTIONS = [
    { value: 'khong', label: 'Không xúc tác' },
    { value: 'co', label: 'Có xúc tác' },
  ];

  let concentration = $state(0.2);
  let temperature = $state(30);
  let catalyst = $state('khong');

  let seed = 1;
  /** @returns {import('./engine.js').Conditions} */
  const conditions = () => ({ concentration, temperature, catalyst: catalyst === 'co' });

  /** The run on screen; `frame` tells the markup it moved. */
  let sim = $state.raw(createSim(conditions(), seed));
  let frame = $state(0);
  let playing = $state(false);
  let previous = $state.raw(/** @type {import('./engine.js').RunSummary | null} */ (null));
  /** @type {(() => void) | null} */
  let stop = null;

  const view = $derived.by(() => {
    void frame;
    return {
      particles: sim.particles.map((p) => ({ id: p.id, kind: p.kind, x: p.x, y: p.y })),
      flashes: sim.flashes.map((f) => ({ x: f.x, y: f.y, age: f.age })),
      curve: /** @type {Array<[number, number]>} */ (sim.curve.map((p) => [p[0], p[1]])),
      collisions: sim.collisions,
      effective: sim.effective,
      left: countOf(sim, 'A'),
      t: sim.t,
      done: sim.done,
    };
  });

  let last = $state.raw(/** @type {import('./engine.js').RunSummary | null} */ (null));

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'info', text: string }} */ () => {
      if (view.done && last) return { tone: 'ok', text: runVerdict(last, previous) };
      if (playing) return { tone: 'info', text: 'Đang đếm các va chạm trong bình…' };
      return {
        tone: 'info',
        text: 'Chọn điều kiện rồi bấm “Chạy thí nghiệm”. Đường của lần chạy trước còn lại để so sánh.',
      };
    },
  );

  const series = $derived([
    ...(previous ? [{ points: previous.curve, color: '#94a3b8', dashed: true }] : []),
    { points: view.curve, color: COLORS.A },
  ]);

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function settle() {
    finish(sim);
    last = { conditions: sim.conditions, curve: sim.curve, end: sim.t };
    frame++;
    halt();
  }

  /** Conditions changed: the box shows the new start, and a finished run becomes the reference. */
  function prepare() {
    halt();
    if (last) previous = last;
    last = null;
    seed += 1;
    sim = createSim(conditions(), seed);
    frame++;
  }

  function run() {
    prepare();
    if (reducedMotion()) {
      settle();
      return;
    }
    playing = true;
    stop = frameLoop((dt) => {
      advance(sim, dt);
      frame++;
      if (sim.done) settle();
    });
  }

  onDestroy(halt);
</script>

<div class="space-y-4">
  <div class="grid gap-4 md:grid-cols-2">
    <div>
      <svg
        viewBox="0 0 {FIELD.w} {FIELD.h}"
        class="block w-full rounded-lg border-2 border-slate-400 bg-slate-50"
        role="img"
        aria-label="Bình phản ứng: còn {view.left} hạt A, đã tạo {view.effective} hạt C"
      >
        {#each view.particles as p (p.id)}
          {#if p.kind === 'C'}
            <circle cx={p.x - 3} cy={p.y} r={RADIUS - 1} fill={COLORS.A} />
            <circle cx={p.x + 3} cy={p.y} r={RADIUS - 1} fill={COLORS.B} />
          {:else}
            <circle cx={p.x} cy={p.y} r={RADIUS} fill={COLORS[p.kind]} />
            <text
              x={p.x}
              y={p.y + 3}
              text-anchor="middle"
              font-size="8"
              font-weight="700"
              fill="white">{p.kind}</text
            >
          {/if}
        {/each}
        {#each view.flashes as f, i (i)}
          <circle
            cx={f.x}
            cy={f.y}
            r={RADIUS + f.age * 28}
            fill="none"
            stroke="#E9B10A"
            stroke-width="2"
            opacity={1 - f.age * 2}
          />
        {/each}
      </svg>
      <p class="mt-1 text-center text-sm tabular-nums text-slate-700">
        Va chạm A–B: <strong>{view.collisions}</strong> · hiệu quả:
        <strong>{view.effective}</strong> · thời gian: <strong>{formatFixed(view.t, 1)} s</strong>
      </p>
      <p class="text-center text-xs text-slate-600">
        Chấm cam loé lên là một va chạm hiệu quả, tạo một phân tử sản phẩm C (hai màu).
      </p>
    </div>
    <RatePlot
      tMax={DURATION}
      tStep={5}
      yMax={0.3}
      yStep={0.05}
      tName="t (s)"
      yName="Nồng độ A (M)"
      label="Đồ thị nồng độ chất A theo thời gian"
      {series}
    />
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <SliderField
      label="Nồng độ đầu của A và B"
      min={0.1}
      max={0.3}
      step={0.05}
      unit="M"
      format={(v) => formatFixed(v, 2)}
      bind:value={concentration}
      oninput={prepare}
    />
    <SliderField
      label="Nhiệt độ"
      min={20}
      max={60}
      step={10}
      unit="°C"
      bind:value={temperature}
      oninput={prepare}
    />
  </div>
  <SegmentedControl
    label="Chất xúc tác"
    options={CATALYST_OPTIONS}
    value={catalyst}
    onchange={(choice) => {
      catalyst = String(choice);
      prepare();
    }}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={run}>
      {view.done ? 'Chạy lại' : 'Chạy thí nghiệm'}
    </button>
    <button type="button" class={button.quiet} disabled={!playing} onclick={settle}>
      Xem kết quả ngay
    </button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
  <p class="text-xs text-slate-600">
    Mỗi hạt tượng trưng cho 0,01 M. Mô hình phóng đại ảnh hưởng của nhiệt độ để quan sát được trong
    vài giây; các số đo là minh hoạ cho xu hướng, không phải số liệu thật.
  </p>
</div>
