<script>
  import { onDestroy } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { TUBES, gasMmol, outcome, tubeColor, turned } from './engine.js';

  /** @typedef {import('./engine.js').Fuel} Fuel */
  /** @typedef {import('./engine.js').Tube} Tube */

  const BURN_SECONDS = 2.5;

  let fuel = $state(/** @type {Fuel} */ ('s'));
  let tube = $state(/** @type {Tube} */ ('kmno4'));
  let mg = $state(8);
  let gas = $state(0);
  let running = $state(false);
  let finished = $state(false);
  /** @type {(() => void) | null} */
  let stop = null;

  const share = $derived(turned(fuel, tube, gas));
  const color = $derived(tubeColor(tube, share));
  const flame = $derived(fuel === 's' ? '#60a5fa' : '#fb923c');
  const total = $derived(gasMmol(fuel, mg));
  const gasName = $derived(fuel === 's' ? 'SO₂' : 'CO₂');
  const result = $derived(outcome(fuel, tube, mg));
  const note = $derived(
    finished
      ? result
      : {
          tone: /** @type {const} */ ('info'),
          text: running
            ? `Khí ${gasName} đang đi vào ống nghiệm.`
            : `Đã chọn ${formatNumber(mg)} mg, tạo ra được ${formatNumber(total, 2)} mmol khí. Hãy dự đoán màu ống nghiệm rồi bấm Đốt.`,
          equation: '',
        },
  );

  function halt() {
    stop?.();
    stop = null;
    running = false;
  }

  /** Puts the tube back to the start after any change of set-up. */
  function reset() {
    halt();
    gas = 0;
    finished = false;
  }

  function burn() {
    reset();
    if (mg === 0) {
      finished = true;
      return;
    }
    if (reducedMotion()) {
      gas = total;
      finished = true;
      return;
    }
    running = true;
    let time = 0;
    const amount = total;
    stop = frameLoop((dt) => {
      time += dt;
      gas = (amount * Math.min(time, BURN_SECONDS)) / BURN_SECONDS;
      if (time >= BURN_SECONDS) {
        halt();
        finished = true;
      }
    });
  }

  onDestroy(halt);
</script>

<div class="space-y-4">
  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-3">
      <SegmentedControl
        label="Chất đốt trong oxygen"
        bind:value={fuel}
        onchange={reset}
        options={[
          { value: 's', label: 'Sulfur' },
          { value: 'c', label: 'Carbon' },
        ]}
      />
      <SegmentedControl
        label="Dung dịch trong ống nghiệm"
        bind:value={tube}
        onchange={reset}
        options={[
          { value: 'kmno4', label: 'Thuốc tím' },
          { value: 'br2', label: 'Nước bromine' },
          { value: 'quy', label: 'Quỳ tím' },
        ]}
      />
      <SliderField
        label="Khối lượng chất đốt"
        bind:value={mg}
        min={0}
        max={32}
        step={4}
        unit="mg"
        oninput={reset}
      />
      <p class="text-sm text-slate-600">
        {TUBES[tube].name}: {TUBES[tube].detail}.
      </p>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} disabled={running} onclick={burn}
          >Đốt và dẫn khí</button
        >
        <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
      </div>
    </div>

    <div class="flex items-end justify-center gap-2">
      <svg
        viewBox="0 0 170 180"
        class="w-40"
        role="img"
        aria-label="Bình oxygen có muôi {fuel === 's' ? 'sulfur' : 'carbon'}{running
          ? ' đang cháy'
          : ''}, ống dẫn khí sang ống nghiệm"
      >
        <path
          d="M 30 50 L 30 165 Q 30 174 40 174 L 100 174 Q 110 174 110 165 L 110 50"
          fill="#f0f9ff"
          stroke="#475569"
          stroke-width="2.5"
        />
        <rect x="24" y="38" width="92" height="12" rx="3" fill="#94a3b8" />
        <line x1="70" y1="38" x2="70" y2="110" stroke="#475569" stroke-width="3" />
        <path
          d="M 58 110 Q 70 124 82 110 Z"
          fill={fuel === 's' ? '#facc15' : '#334155'}
          stroke="#475569"
        />
        {#if running}
          <path
            d="M 70 72 Q 56 96 62 108 Q 70 114 78 108 Q 84 96 70 72 Z"
            fill={flame}
            opacity="0.85"
          />
        {/if}
        <path d="M 95 38 L 95 18 L 168 18" fill="none" stroke="#475569" stroke-width="4" />
        {#if running}
          <path
            d="M 95 38 L 95 18 L 168 18"
            fill="none"
            stroke="#94a3b8"
            stroke-width="2"
            stroke-dasharray="4 6"
            class="flow"
          />
        {/if}
      </svg>
      <div class="w-24">
        <TestTube
          liquid={color}
          label="{TUBES[tube].name}, đã đổi màu {Math.round(share * 100)} phần trăm"
        />
      </div>
    </div>
  </div>

  {#if note.equation}
    <p class="overflow-x-auto rounded-lg bg-slate-50 p-3 text-center text-lg">
      <EquationLine text={note.equation} />
    </p>
  {/if}
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .flow {
    animation: flow 0.6s linear infinite;
  }
  @keyframes flow {
    to {
      stroke-dashoffset: -10;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .flow {
      animation: none;
    }
  }
</style>
