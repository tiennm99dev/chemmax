<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { coagulation } from './engine.js';

  /** @typedef {import('./engine.js').Additive} Additive */

  let celsius = $state(25);
  // the hottest the egg white has been: coagulation does not undo on cooling
  let peak = $state(25);
  let additive = $state(/** @type {string | number} */ ('none'));

  const ADDITIVES = [
    { value: 'none', label: 'Chỉ đun nóng' },
    { value: 'lemon', label: 'Thêm nước chanh' },
    { value: 'alcohol', label: 'Thêm rượu' },
  ];

  const degree = $derived(coagulation(peak, /** @type {Additive} */ (additive)));

  function reset() {
    celsius = 25;
    peak = 25;
    additive = 'none';
  }
  // clumps of set protein, placed once so they do not jump around
  const CLUMPS = Array.from({ length: 14 }, (_, i) => ({
    x: 60 + ((i * 37) % 80),
    y: 120 + ((i * 23) % 70),
    r: 6 + (i % 4) * 2,
  }));

  const tone = $derived(degree >= 1 ? 'ok' : /** @type {const} */ ('info'));
  const note = $derived.by(() => {
    if (additive === 'lemon')
      return 'Acid trong nước chanh làm protein trong lòng trắng trứng đông tụ thành các mảng trắng, không cần đun nóng (giống sữa vón cục khi vắt chanh vào).';
    if (additive === 'alcohol')
      return 'Rượu (ethylic alcohol) cũng làm protein đông tụ: lòng trắng trứng vón trắng lại.';
    if (degree === 0)
      return `Ở ${celsius} °C lòng trắng trứng vẫn là chất lỏng trong suốt, nhớt. Kéo thanh trượt để đun nóng.`;
    const cooled =
      celsius < peak
        ? ` Đã đun tới ${peak} °C rồi để nguội xuống ${celsius} °C: phần đã đông tụ không trở lại trong suốt.`
        : '';
    if (degree < 1) return `Protein bắt đầu đông tụ: lòng trắng trứng đục dần và đặc lại.${cooled}`;
    return `Lòng trắng trứng đã đông tụ hoàn toàn thành khối trắng đục.${cooled || ' Thử kéo nhiệt độ xuống: nó không trở lại trong suốt.'}`;
  });
</script>

<div class="space-y-4">
  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,12rem)_1fr]">
    <svg
      viewBox="0 0 200 230"
      class="mx-auto block h-auto w-full max-w-48"
      role="img"
      aria-label="Cốc lòng trắng trứng, đông tụ {Math.round(degree * 100)}%"
    >
      <path
        d="M40 90 L160 90 L156 205 Q156 214 147 214 L53 214 Q44 214 44 205 Z"
        fill="#fef9c3"
        opacity="0.6"
      />
      <path
        d="M40 90 L160 90 L156 205 Q156 214 147 214 L53 214 Q44 214 44 205 Z"
        fill="#ffffff"
        opacity={degree * 0.9}
      />
      {#each CLUMPS as c, i (i)}
        <circle
          cx={c.x}
          cy={c.y}
          r={c.r * degree}
          fill="#f8fafc"
          stroke="#cbd5e1"
          opacity={degree}
        />
      {/each}
      <path
        d="M36 40 L40 205 Q40 218 53 218 L147 218 Q160 218 160 205 L164 40"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      <text x="100" y="30" font-size="14" fill="#334155" text-anchor="middle">{celsius} °C</text>
    </svg>
    <div class="space-y-3">
      <SegmentedControl
        label="Cách làm (mỗi cách dùng một cốc mới)"
        options={ADDITIVES}
        bind:value={additive}
        onchange={() => {
          celsius = 25;
          peak = 25;
        }}
      />
      <SliderField
        label="Nhiệt độ"
        bind:value={celsius}
        min={20}
        max={100}
        step={5}
        unit="°C"
        oninput={(v) => (peak = Math.max(peak, v))}
      />
      <div
        class="h-3 w-full overflow-hidden rounded-full bg-slate-200"
        role="meter"
        aria-label="Mức đông tụ"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(degree * 100)}
      >
        <div class="h-full bg-amber-500 transition-all" style:width="{degree * 100}%"></div>
      </div>
      <button type="button" class={button.quiet} onclick={reset}>Lấy cốc mới</button>
    </div>
  </div>
  <FeedbackNote {tone} text={note} />
</div>
