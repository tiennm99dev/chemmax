<script>
  import { fmt } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { FLAMES } from './engine.js';

  const OXIDISER = [
    { value: 'air', label: 'Trong không khí' },
    { value: 'oxygen', label: 'Trong oxygen tinh khiết' },
  ];
  const TOP = 3600;

  let oxidiser = $state('air');
  const inOxygen = $derived(oxidiser === 'oxygen');
</script>

<div class="space-y-3 rounded-xl border border-slate-200 p-3">
  <SegmentedControl label="Đốt khí" options={OXIDISER} bind:value={oxidiser} />
  <ul class="space-y-2" aria-live="polite">
    {#each FLAMES as flame (flame.id)}
      {@const value = inOxygen ? flame.oxygen : flame.air}
      <li>
        <div class="flex justify-between text-sm">
          <span class="font-semibold text-slate-800">{flame.name}</span>
          <span class="tabular-nums text-slate-700">khoảng {fmt(value)} °C</span>
        </div>
        <div class="h-3 rounded bg-slate-200" aria-hidden="true">
          <div
            class="h-3 rounded {inOxygen
              ? 'bg-red-500'
              : 'bg-orange-400'} transition-[width] motion-reduce:transition-none"
            style:width="{(value / TOP) * 100}%"
          ></div>
        </div>
      </li>
    {/each}
  </ul>
  <p class="text-sm text-slate-700">
    {inOxygen
      ? 'Toàn bộ nhiệt chỉ làm nóng sản phẩm cháy nên ngọn lửa nóng hơn nhiều.'
      : 'Mỗi mol oxygen đi kèm khoảng 3,76 mol nitrogen. Nitrogen không cháy nhưng vẫn hút nhiệt, làm ngọn lửa nguội đi.'}
  </p>
  <p class="text-xs text-slate-600">
    Giá trị tính lí thuyết khi không mất nhiệt ra môi trường; ngọn lửa thực tế thấp hơn.
  </p>
</div>
