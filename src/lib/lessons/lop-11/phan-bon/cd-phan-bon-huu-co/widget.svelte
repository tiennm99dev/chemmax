<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import CurvePlot from '#lib/domain/curve-plot.svelte';
  import {
    BROWN,
    DAYS,
    GREEN,
    PHASE_NAMES,
    advice,
    hotDays,
    mixRatio,
    simulate,
  } from './engine.js';

  const TURNS = [
    { value: 0, label: 'Không đảo' },
    { value: 3, label: '3 ngày' },
    { value: 7, label: '7 ngày' },
    { value: 14, label: '14 ngày' },
  ];

  let brown = $state(10);
  let green = $state(5);
  let moisture = $state(55);
  let turnEvery = $state(7);
  let day = $state(10);

  const cn = $derived(mixRatio(brown, green));
  const setup = $derived({ cn, moisture, turnEvery: Number(turnEvery) });
  const run = $derived(simulate(setup));
  const now = $derived(run[day]);
  const tip = $derived(advice(setup, run));
  /** @type {Array<[number, number]>} */
  const curve = $derived(run.map((d) => [d.day, d.temp]));
  /** @type {Array<[number, number]>} */
  const marker = $derived([
    [day, 0],
    [day, 80],
  ]);
  const hot = $derived(hotDays(run));
</script>

<div class="space-y-3">
  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    <SliderField
      label="{BROWN.name} (vật liệu nâu)"
      bind:value={brown}
      min={1}
      max={20}
      unit="kg"
    />
    <SliderField
      label="{GREEN.name} (vật liệu xanh)"
      bind:value={green}
      min={1}
      max={20}
      unit="kg"
    />
    <SliderField label="Độ ẩm đống ủ" bind:value={moisture} min={30} max={80} step={5} unit="%" />
    <SegmentedControl label="Đảo trộn sau mỗi" options={TURNS} bind:value={turnEvery} />
  </div>
  <p class="text-sm text-slate-700">
    Tỉ lệ C/N của hỗn hợp: <strong class="tabular-nums">{formatNumber(cn, 1)}</strong> (nên khoảng 25
    – 30).
  </p>

  <CurvePlot
    xMax={DAYS}
    xStep={10}
    yMax={80}
    yStep={10}
    xName="ngày"
    yName="t (°C)"
    label="Nhiệt độ đống ủ theo thời gian, cao nhất {formatNumber(
      Math.max(...run.map((d) => d.temp)),
      0,
    )} độ C, {hot} ngày từ 55 độ C trở lên. Vạch đứt là ngày đang xem."
    series={[
      { points: curve, color: '#b45309' },
      { points: marker, color: '#334155', dashed: true },
    ]}
    band={{ from: 55, to: 70, color: '#fca5a5' }}
  />
  <p class="text-xs text-slate-500">
    Dải tô đỏ: 55 – 70 °C, vùng nhiệt diệt phần lớn mầm bệnh và hạt cỏ dại. Nhiệt độ không khí 30
    °C.
  </p>

  <SliderField label="Ngày thứ" bind:value={day} min={0} max={DAYS} />
  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-800">
      Ngày {day}: {formatNumber(now.temp, 0)} °C · {PHASE_NAMES[now.phase]}
    </p>
    <p class="mt-1 text-slate-700">
      Chất hữu cơ dễ phân huỷ còn lại: {formatNumber(now.left * 100, 0)}%. Oxygen trong đống ủ: {formatNumber(
        now.oxygen * 100,
        0,
      )}% so với lúc mới đảo.
    </p>
  </div>

  <FeedbackNote tone={tip.ok ? 'ok' : 'warn'} text={tip.text} />
</div>
