<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import { vantHoff } from '../_shared/rate.js';

  const GAMMAS = [
    { value: 2, label: 'γ = 2' },
    { value: 3, label: 'γ = 3' },
    { value: 4, label: 'γ = 4' },
  ];
  const BASE_TEMPERATURE = 20;
  /** Time the reaction takes at the base temperature, in minutes. */
  const BASE_TIME = 256;

  let gamma = $state(2);
  let temperature = $state(40);

  const factor = $derived(vantHoff(gamma, temperature - BASE_TEMPERATURE));
  const bars = $derived.by(() => {
    const out = [];
    for (let t = BASE_TEMPERATURE; t <= temperature; t += 10) {
      out.push({ t, factor: vantHoff(gamma, t - BASE_TEMPERATURE) });
    }
    return out;
  });
  const working = $derived(
    `$\\dfrac{v_2}{v_1} = ${gamma}^{\\frac{${temperature} - ${BASE_TEMPERATURE}}{10}} = ${numTex(factor)}$`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Hệ số nhiệt độ Van't Hoff" options={GAMMAS} bind:value={gamma} />
  <SliderField
    label="Đun nóng từ 20 °C đến"
    min={30}
    max={70}
    step={10}
    unit="°C"
    bind:value={temperature}
  />
  <div class="flex h-40 items-end gap-1" aria-hidden="true">
    {#each bars as bar (bar.t)}
      <div class="flex min-w-0 flex-1 flex-col items-center justify-end">
        <span class="text-xs tabular-nums text-slate-700">×{formatNumber(bar.factor)}</span>
        <span
          class="block w-full rounded-t bg-indigo-500"
          style:height="{Math.max(2, (bar.factor / factor) * 110)}px"
        ></span>
        <span class="mt-1 text-xs text-slate-600">{bar.t} °C</span>
      </div>
    {/each}
  </div>
  <p class="text-center" aria-live="polite">
    <LiveRichText text={working} />
    <br />
    Phản ứng hết {BASE_TIME} phút ở 20 °C chỉ còn khoảng
    <strong>{formatNumber(BASE_TIME / factor, 2)} phút</strong> ở {temperature} °C.
  </p>
</div>
