<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import {
    AXIS_MAX,
    AXIS_MIN,
    CLASS_NAMES,
    FLAMMABLE_LIMIT,
    LIQUIDS,
    axisPercent,
    liquidClass,
    liquidState,
    stateMessage,
  } from './engine.js';

  const SPARK = [
    { value: 'on', label: 'Có nguồn lửa' },
    { value: 'off', label: 'Không có nguồn lửa' },
  ];
  /** @type {Record<string, string>} */
  const ROW_TONE = {
    safe: 'border-slate-200 bg-white',
    vapour: 'border-amber-300 bg-amber-50',
    flash: 'border-orange-400 bg-orange-50',
    auto: 'border-red-500 bg-red-50',
  };
  /** @type {Record<string, string>} */
  const STATE_WORD = {
    safe: 'chưa đủ hơi',
    vapour: 'đủ hơi',
    flash: 'bắt lửa',
    auto: 'tự bốc cháy',
  };

  let temperature = $state(30);
  let spark = $state('on');
  let picked = $state('octane');

  const hasSpark = $derived(spark === 'on');
  const liquid = $derived(LIQUIDS.find((l) => l.id === picked) ?? LIQUIDS[0]);
  const message = $derived(stateMessage(liquid, temperature, hasSpark, (v) => formatNumber(v)));
  const pickedState = $derived(liquidState(liquid, temperature, hasSpark));
  const tone = $derived(pickedState === 'safe' ? 'ok' : pickedState === 'vapour' ? 'info' : 'warn');
</script>

<div class="space-y-3">
  <SliderField
    label="Nhiệt độ"
    bind:value={temperature}
    min={AXIS_MIN}
    max={AXIS_MAX}
    step={1}
    unit="°C"
  />
  <SegmentedControl label="Nguồn lửa gần chất lỏng" options={SPARK} bind:value={spark} />

  <FeedbackNote {tone} text={message} />

  <ul class="space-y-1.5">
    {#each LIQUIDS as item (item.id)}
      {@const state = liquidState(item, temperature, hasSpark)}
      <li>
        <button
          type="button"
          class="block w-full rounded-lg border p-2 text-left {ROW_TONE[state]} {focusRing}"
          aria-pressed={item.id === picked}
          aria-label="{item.name}: điểm chớp cháy {formatNumber(
            item.flash,
          )} độ C, nhiệt độ tự bốc cháy {formatNumber(item.ignite)} độ C, {CLASS_NAMES[
            liquidClass(item.flash)
          ]}, hiện {STATE_WORD[state]}."
          onclick={() => (picked = item.id)}
        >
          <span class="flex flex-wrap items-baseline justify-between gap-x-2 text-sm">
            <span class="font-semibold text-slate-800">
              {item.name}{item.id === picked ? ' ✓' : ''}
            </span>
            <span class="text-xs text-slate-600">{STATE_WORD[state]}</span>
          </span>
          <span class="relative mt-1 block h-4 rounded bg-slate-200" aria-hidden="true">
            <span
              class="absolute inset-y-0 rounded {liquidClass(item.flash) === 'flammable'
                ? 'bg-orange-400'
                : 'bg-sky-400'}"
              style:left="{axisPercent(item.flash)}%"
              style:width="{axisPercent(item.ignite) - axisPercent(item.flash)}%"
            ></span>
            <span
              class="absolute inset-y-[-3px] w-0.5 bg-slate-900"
              style:left="{axisPercent(temperature)}%"
            ></span>
          </span>
          <span class="mt-0.5 block text-xs text-slate-500">
            {formatNumber(item.flash)} °C → {formatNumber(item.ignite)} °C
          </span>
        </button>
      </li>
    {/each}
  </ul>

  <p class="text-xs text-slate-600">
    Mỗi thanh chạy từ điểm chớp cháy tới nhiệt độ tự bốc cháy, thang nhiệt độ từ {formatNumber(
      AXIS_MIN,
    )} °C đến {formatNumber(AXIS_MAX)} °C. Màu cam: chất lỏng dễ cháy (điểm chớp cháy dưới {formatNumber(
      FLAMMABLE_LIMIT,
    )} °C); màu xanh: chất lỏng có thể gây cháy. Vạch đen là nhiệt độ đang chọn. Số liệu là giá trị tham
    khảo, thay đổi theo phương pháp đo và thành phần nhiên liệu.
  </p>
</div>
