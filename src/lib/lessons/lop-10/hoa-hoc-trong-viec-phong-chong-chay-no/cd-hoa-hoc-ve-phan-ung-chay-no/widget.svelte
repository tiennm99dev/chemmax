<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    GASES,
    axisTop,
    explosionZone,
    oxygenInMixture,
    stoichiometricPercent,
  } from './engine.js';

  const OPTIONS = GASES.map((g) => ({ value: g.id, label: g.name }));
  const one = (/** @type {number} */ v) => formatNumber(v, 1);

  let gasId = $state('methane');
  let percent = $state(3);

  const gas = $derived(GASES.find((g) => g.id === gasId) ?? GASES[0]);
  const top = $derived(axisTop(gas));
  const zone = $derived(explosionZone(gas, percent));
  const exact = $derived(stoichiometricPercent(gas));

  /** @param {number} value */
  const place = (value) => `${(value / top) * 100}%`;

  /** @param {string | number} id */
  function changeGas(id) {
    const next = GASES.find((g) => g.id === id);
    if (next) percent = Math.min(percent, axisTop(next));
  }

  function leak() {
    percent = Math.min(top, tidy(percent + Math.max(0.5, top / 20), 1));
  }

  function ventilate() {
    percent = tidy(percent * 0.7, 1);
  }

  const message = $derived.by(() => {
    if (zone === 'lean')
      return `${gas.name} ${one(percent)}%: dưới giới hạn nổ dưới (${one(gas.lower)}%). Hỗn hợp quá loãng nên ngọn lửa không lan đi được.`;
    if (zone === 'rich')
      return `${gas.name} ${one(percent)}%: trên giới hạn nổ trên (${one(gas.upper)}%). Hỗn hợp thiếu oxygen nên không nổ, nhưng khi không khí tràn vào, nồng độ sẽ đi ngược xuống vùng nổ.`;
    return `${gas.name} ${one(percent)}%: trong vùng nổ (${one(gas.lower)}% đến ${one(gas.upper)}%). Một tia lửa có thể gây nổ. Oxygen trong hỗn hợp còn ${one(oxygenInMixture(percent))}%.`;
  });
</script>

<div class="space-y-3">
  <SegmentedControl label="Chất khí" options={OPTIONS} bind:value={gasId} onchange={changeGas} />

  <div
    class="relative mt-6 h-10 overflow-visible rounded-lg bg-slate-200"
    role="img"
    aria-label="{gas.name}: vùng nổ từ {one(gas.lower)}% đến {one(gas.upper)}%, hiện {one(
      percent,
    )}%."
  >
    <div
      class="absolute inset-y-0 bg-red-400"
      style:left={place(gas.lower)}
      style:width={place(gas.upper - gas.lower)}
    ></div>
    <div
      class="absolute inset-y-0 w-0.5 bg-red-900"
      style:left={place(exact)}
      title="Tỉ lệ vừa đủ"
    ></div>
    <div
      class="absolute -top-2 bottom-[-8px] w-1 -translate-x-1/2 rounded bg-indigo-700"
      style:left={place(percent)}
    ></div>
  </div>
  <div class="flex justify-between text-xs text-slate-600" aria-hidden="true">
    <span>0%</span>
    <span>{formatNumber(top)}%</span>
  </div>
  <p class="text-xs text-slate-600">
    Vùng đỏ: {one(gas.lower)}% – {one(gas.upper)}%. Vạch sẫm: tỉ lệ vừa đủ để cháy hết, {one(
      exact,
    )}%.
  </p>

  <SliderField
    label="Nồng độ khí trong không khí"
    bind:value={percent}
    min={0}
    max={top}
    step={0.1}
    unit="%"
    format={one}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={leak}>Khí rò rỉ thêm</button>
    <button type="button" class={button.secondary} onclick={ventilate}>Mở cửa thông gió</button>
  </div>

  <FeedbackNote
    tone={zone === 'inside' ? 'warn' : zone === 'rich' ? 'info' : 'ok'}
    text={message}
  />
</div>
