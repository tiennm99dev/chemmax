<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber, numTex } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import {
    CRUDES,
    DENSITY_NAMES,
    SOUR_LIMIT,
    apiGravity,
    densityClass,
    sulfurClass,
  } from './engine.js';

  let sg = $state(CRUDES[0].sg);
  let sulfur = $state(CRUDES[0].sulfur);

  const api = $derived(apiGravity(sg));
  const kind = $derived(densityClass(api));
  const sour = $derived(sulfurClass(sulfur));
  const picked = $derived(CRUDES.find((c) => c.sg === sg && c.sulfur === sulfur)?.id ?? null);
  const math = $derived(
    `\\text{API} = \\dfrac{141{,}5}{${numTex(sg)}} - 131{,}5 \\approx ${numTex(api, 1)}`,
  );
  const verdict = $derived(
    `${formatNumber(api, 1)} độ API: ${DENSITY_NAMES[kind]}; lưu huỳnh ${formatNumber(sulfur, 2)}% ${sulfur > SOUR_LIMIT ? 'lớn hơn' : 'không quá'} $0{,}5\\%$: ${sour}. ` +
      (kind === 'light' && sour === 'dầu ngọt'
        ? 'Dầu nhẹ, ngọt cho nhiều xăng, dầu, ít phải xử lí lưu huỳnh nên có giá trị cao.'
        : kind === 'light' || kind === 'medium'
          ? 'Dầu này cho nhiều sản phẩm nhẹ, nhưng cần xử lí bớt lưu huỳnh trước khi dùng.'
          : 'Dầu nặng nhớt, nhiều nhựa, cặn và kim loại nặng, cho ít xăng hơn nên giá trị thấp hơn.'),
  );
  /** Position of the API value on the 0 – 50 scale, in percent. */
  const marker = $derived(Math.min(100, Math.max(0, (api / 50) * 100)));
  const ZONES = [
    { from: 0, to: 10, name: 'Siêu nặng', color: 'bg-stone-700 text-white' },
    { from: 10, to: 22.3, name: 'Nặng', color: 'bg-stone-500 text-white' },
    { from: 22.3, to: 31.1, name: 'Trung bình', color: 'bg-amber-300' },
    { from: 31.1, to: 50, name: 'Nhẹ', color: 'bg-yellow-100' },
  ];

  const TICKS = [
    { value: 10, text: '10' },
    { value: 22.3, text: '22,3' },
    { value: 31.1, text: '31,1' },
  ];

  /** @param {import('./engine.js').Crude} c */
  function choose(c) {
    sg = c.sg;
    sulfur = c.sulfur;
  }
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-1.5" role="group" aria-label="Chọn mẫu dầu thô">
    {#each CRUDES as c (c.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 text-sm {c.id === picked
          ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-800'
          : 'border-slate-300 bg-white text-slate-700'} {focusRing}"
        aria-pressed={c.id === picked}
        onclick={() => choose(c)}>{c.name}</button
      >
    {/each}
  </div>

  <SliderField
    label="Tỉ trọng d (so với nước, ở 15,6 °C)"
    bind:value={sg}
    min={0.78}
    max={1.05}
    step={0.002}
    format={(v) => formatFixed(v, 3)}
  />
  <SliderField
    label="Hàm lượng lưu huỳnh"
    bind:value={sulfur}
    min={0}
    max={5}
    step={0.01}
    unit="%"
    format={(v) => formatNumber(v, 2)}
  />

  <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white p-3">
    <Tex {math} display />
  </div>

  <div aria-hidden="true">
    <div class="relative flex h-7 overflow-hidden rounded text-[11px]">
      {#each ZONES as z (z.name)}
        <div
          class="flex items-center justify-center {z.color}"
          style:width="{((z.to - z.from) / 50) * 100}%"
        >
          {z.name}
        </div>
      {/each}
      <div class="absolute inset-y-0 w-1 bg-rose-600" style:left="calc({marker}% - 2px)"></div>
    </div>
    <div class="relative mt-0.5 h-4 text-[11px] text-slate-500">
      {#each TICKS as t (t.value)}
        <span class="absolute -translate-x-1/2" style:left="{(t.value / 50) * 100}%">{t.text}</span>
      {/each}
    </div>
    <p class="text-right text-[11px] text-slate-500">độ API</p>
  </div>

  <FeedbackNote tone="info" text={verdict} />
</div>
