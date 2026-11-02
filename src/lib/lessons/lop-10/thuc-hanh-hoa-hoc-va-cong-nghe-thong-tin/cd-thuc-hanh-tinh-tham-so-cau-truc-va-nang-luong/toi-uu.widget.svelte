<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { MINUS, formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    atMinimum,
    hasConverged,
    inputFile,
    optimiseStep,
    WATER_MINIMUM,
    waterHeat,
  } from './engine.js';

  const W = 300;
  const H = 150;
  /** Pixels per ångström in the drawing. */
  const SCALE = 75;
  const MAX_STEPS = 40;

  let startR = $state(1.1);
  let startAngle = $state(90);
  let freeR = $state(true);
  let freeAngle = $state(true);
  let current = $state(/** @type {import('./engine.js').OptState | null} */ (null));

  const now = $derived(current ?? { r: startR, angle: startAngle, freeR, freeAngle, steps: 0 });
  const done = $derived(current !== null && hasConverged(now));
  const heat = $derived(waterHeat(now.r, now.angle));
  const file = $derived(inputFile(now));

  const half = $derived((now.angle / 2) * (Math.PI / 180));
  const o = { x: W / 2, y: 40 };
  const h1 = $derived({
    x: o.x - SCALE * now.r * Math.sin(half),
    y: o.y + SCALE * now.r * Math.cos(half),
  });
  const h2 = $derived({
    x: o.x + SCALE * now.r * Math.sin(half),
    y: o.y + SCALE * now.r * Math.cos(half),
  });

  /** @param {number} v */
  const signed = (v) => (v < 0 ? `${MINUS}${formatNumber(Math.abs(v), 2)}` : formatNumber(v, 2));

  const note = $derived.by(() => {
    if (!current) {
      return 'Chọn giá trị ban đầu và cờ tối ưu, rồi bấm Chạy một bước. Mỗi bước, chương trình thay đổi các tham số có cờ 1 để nhiệt tạo thành giảm.';
    }
    if (!done) {
      return `Bước ${now.steps}: nhiệt tạo thành còn giảm, chưa dừng được.`;
    }
    if (!atMinimum(now)) {
      const gap = heat - WATER_MINIMUM.heat;
      return `Dừng sau ${now.steps} bước, nhưng nhiệt tạo thành còn cao hơn cực tiểu ${formatNumber(gap, 3)} kcal/mol, vì có tham số bị giữ cố định (cờ 0) ở giá trị chưa đúng.`;
    }
    return `Hội tụ sau ${now.steps} bước: O–H = ${formatNumber(now.r, 3)} Å, góc H–O–H = ${formatNumber(now.angle, 1)}°, khớp kết quả AM1 trong file.`;
  });

  function step() {
    current = optimiseStep(now);
  }

  function runAll() {
    let s = now;
    let n = 0;
    while ((n === 0 || !hasConverged(s)) && n < MAX_STEPS) {
      s = optimiseStep(s);
      n += 1;
    }
    current = s;
  }

  function reset() {
    current = null;
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Độ dài O–H ban đầu"
      bind:value={startR}
      min={0.8}
      max={1.3}
      step={0.01}
      unit="Å"
      format={(v) => formatNumber(v, 2)}
      oninput={reset}
    />
    <SliderField
      label="Góc H–O–H ban đầu"
      bind:value={startAngle}
      min={80}
      max={130}
      step={0.5}
      unit="°"
      format={(v) => formatNumber(v, 1)}
      oninput={reset}
    />
  </div>
  <div class="flex flex-wrap gap-4 text-sm text-slate-700">
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class={focusRing} bind:checked={freeR} onchange={reset} />
      Tối ưu độ dài (cờ {freeR ? 1 : 0})
    </label>
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class={focusRing} bind:checked={freeAngle} onchange={reset} />
      Tối ưu góc (cờ {freeAngle ? 1 : 0})
    </label>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <svg
      viewBox="0 0 {W} {H}"
      class="w-full rounded-xl bg-slate-50"
      role="img"
      aria-label="Phân tử nước: O–H {formatNumber(now.r, 3)} ångström, góc {formatNumber(
        now.angle,
        1,
      )} độ."
    >
      <line x1={o.x} y1={o.y} x2={h1.x} y2={h1.y} stroke="#475569" stroke-width="5" />
      <line x1={o.x} y1={o.y} x2={h2.x} y2={h2.y} stroke="#475569" stroke-width="5" />
      <circle cx={o.x} cy={o.y} r="20" fill="#dc2626" stroke="#334155" />
      <text x={o.x} y={o.y + 5} text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
        O
      </text>
      {#each [h1, h2] as h, i (i)}
        <circle cx={h.x} cy={h.y} r="13" fill="#f8fafc" stroke="#334155" />
        <text x={h.x} y={h.y + 5} text-anchor="middle" font-size="13" font-weight="700">H</text>
      {/each}
    </svg>
    <div>
      <p class="mb-1 text-xs font-semibold text-slate-600">File đầu vào (H2O_AM1.mop)</p>
      <pre class="overflow-x-auto rounded-xl bg-slate-900 p-3 text-xs text-slate-100">{file}</pre>
    </div>
  </div>

  <p class="text-sm font-semibold text-slate-700 tabular-nums" aria-live="polite">
    Nhiệt tạo thành: {signed(heat)} kcal/mol · O–H = {formatNumber(now.r, 3)} Å · góc = {formatNumber(
      now.angle,
      1,
    )}°
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={done} onclick={step}>
      Chạy một bước
    </button>
    <button type="button" class={button.secondary} disabled={done} onclick={runAll}>
      Chạy đến khi dừng
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Về giá trị ban đầu</button>
  </div>
  <FeedbackNote tone={done ? 'ok' : 'info'} text={note} />
  <p class="text-xs text-slate-600">
    Đây là mô hình lò xo quanh cực tiểu của AM1 để thấy cách tối ưu hoá hoạt động, không phải một
    phép tính AM1 thật. MOPAC mới giải các phương trình của phương pháp.
  </p>
</div>
