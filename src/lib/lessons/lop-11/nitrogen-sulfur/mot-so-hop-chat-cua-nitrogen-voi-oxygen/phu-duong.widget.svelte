<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { pond } from './engine.js';

  let load = $state(30);
  let treated = $state(false);
  let aerated = $state(false);

  const now = $derived(pond(load, treated, aerated));
  const water = $derived(now.oxygen >= 5 ? '#7dd3fc' : now.oxygen >= 2 ? '#86a98b' : '#6b7c5a');
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-600">
    Tăng lượng phân bón và nước thải, rồi thử xử lí nước thải hoặc sục khí. Các số là mô hình đơn
    giản hoá để minh hoạ.
  </p>
  <div class="grid gap-4 md:grid-cols-2">
    <svg
      viewBox="0 0 320 120"
      class="block w-full"
      role="img"
      aria-label="Ao nước: tảo che {formatNumber(
        now.algae,
        0,
      )} phần trăm mặt nước, oxygen hoà tan {formatFixed(
        now.oxygen,
        1,
      )} mg/L, còn {now.fish} con cá."
    >
      <rect width="320" height="120" rx="12" fill={water} />
      <rect width={(320 * now.algae) / 100} height="12" fill="#15803d" />
      {#each Array.from({ length: now.fish }, (_, i) => i) as i (i)}
        <g transform="translate({50 + i * 54} {i % 2 === 0 ? 62 : 90})">
          <ellipse rx="12" ry="6" fill="#f97316" />
          <path d="M -11 0 L -19 -6 L -19 6 Z" fill="#f97316" />
        </g>
      {/each}
    </svg>
    <div class="space-y-3">
      <SliderField
        label="Phân bón và nước thải chảy vào ao"
        bind:value={load}
        min={0}
        max={100}
        step={5}
        unit="%"
      />
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.secondary}
          aria-pressed={treated}
          onclick={() => (treated = !treated)}
        >
          {treated ? 'Bỏ xử lí nước thải' : 'Xử lí nước thải'}
        </button>
        <button
          type="button"
          class={button.secondary}
          aria-pressed={aerated}
          onclick={() => (aerated = !aerated)}
        >
          {aerated ? 'Tắt sục khí' : 'Sục khí'}
        </button>
      </div>
      <dl class="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-slate-50 p-3 text-sm tabular-nums">
        <dt class="text-slate-600">Tảo che mặt nước</dt>
        <dd class="text-right font-semibold">{formatNumber(now.algae, 0)} %</dd>
        <dt class="text-slate-600">Oxygen hoà tan</dt>
        <dd class="text-right font-semibold">{formatFixed(now.oxygen, 1)} mg/L</dd>
      </dl>
    </div>
  </div>
  <FeedbackNote tone={now.tone} text={now.text} />
</div>
