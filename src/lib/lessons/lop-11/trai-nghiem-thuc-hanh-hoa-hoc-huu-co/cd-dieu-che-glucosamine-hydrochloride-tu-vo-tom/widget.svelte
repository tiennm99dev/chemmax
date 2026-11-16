<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import StepQuiz from '../_shared/step-quiz.svelte';
  import {
    GLUCOSAMINE_STEPS,
    PART_COLORS,
    PART_NAMES,
    SHELL,
    co2From,
    glucosamineFrom,
    stageOf,
  } from './engine.js';

  let done = $state(0);
  let shell = $state(100);
  let yieldPct = $state(50);

  const stage = $derived(stageOf(done, shell, yieldPct));
  const total = $derived(stage.parts.reduce((s, p) => s + p.mass, 0));
  const k = $derived(shell / 100);
  const co2 = $derived(co2From(SHELL.caco3 * k));
  const theory = $derived(glucosamineFrom(SHELL.chitin * k));
</script>

<div class="space-y-3">
  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    <SliderField label="Vỏ tôm khô" bind:value={shell} min={50} max={200} step={10} unit="g" />
    <SliderField
      label="Hiệu suất kết tinh"
      bind:value={yieldPct}
      min={20}
      max={90}
      step={5}
      unit="%"
    />
  </div>

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-800">{stage.state}: {formatNumber(total, 1)} g</p>
    <div class="mt-2 flex h-6 w-full overflow-hidden rounded-md bg-slate-100" aria-hidden="true">
      {#each stage.parts as p (p.key)}
        <div style="width: {(p.mass / shell) * 100}%; background: {PART_COLORS[p.key]}"></div>
      {/each}
    </div>
    <ul class="mt-2 space-y-0.5 text-slate-700">
      {#each stage.parts as p (p.key)}
        <li class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-sm" style="background: {PART_COLORS[p.key]}"
          ></span>
          {PART_NAMES[p.key]}: {formatNumber(p.mass, 1)} g
        </li>
      {/each}
    </ul>
    {#if done >= 1}
      <p class="mt-2 text-slate-600">
        Khí CO₂ thoát ra khi khử khoáng: khoảng {formatNumber(co2, 2)} L (đkc).
      </p>
    {/if}
    {#if done >= 4}
      <p class="mt-1 text-slate-600">
        Theo lí thuyết: {formatNumber(SHELL.chitin * k, 1)} g chitin · 215,5 : 203 ≈ {formatNumber(
          theory,
          2,
        )} g glucosamine hydrochloride.
      </p>
    {/if}
  </div>

  <StepQuiz
    steps={GLUCOSAMINE_STEPS}
    label="Quy trình điều chế glucosamine hydrochloride từ vỏ tôm"
    doneText="Hoàn thành: từ vỏ tôm đã thu được tinh thể glucosamine hydrochloride."
    onstep={(i) => (done = i)}
  />
</div>
