<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    EYEPIECE,
    LIGHT_TEXT,
    MAX_GAP,
    OBJECTIVES,
    START_GAP,
    blurRadius,
    focusMessage,
    focusState,
    gapMm,
    lightState,
    totalMagnification,
    turn,
  } from './engine.js';

  const OPTIONS = OBJECTIVES.map((o, i) => ({ value: i, label: `Vật kính ${o.mag}x` }));
  let pick = $state(0);
  let gap = $state(START_GAP);
  let light = $state(20);

  const objective = $derived(OBJECTIVES[pick]);
  const total = $derived(totalMagnification(objective.mag));
  const focus = $derived(focusState(objective, gap));
  const focusText = $derived(focusMessage(objective, gap));
  const lit = $derived(lightState(objective, light));
  const blurPx = $derived(blurRadius(objective, gap));
  const visible = $derived(focus !== 'khong-thay');

  /** px per mm of the sample in a 180 px field: 40 px at 40x. */
  const k = $derived(total);
  const shade = $derived(
    lit === 'toi' ? 0.75 - light / 200 : lit === 'choi' ? 0.15 + (light - 50) / 250 : 0,
  );

  // Side view: the gap drawn on a square-root scale so 0,6 mm still shows.
  const SLIDE_Y = 150;
  const lensBottom = $derived(SLIDE_Y - 4 - 100 * Math.sqrt(gap / MAX_GAP));

  /** @param {'coarse' | 'fine'} knob @param {number} steps */
  function twist(knob, steps) {
    gap = turn(gap, knob, steps);
  }

  const id = $props.id();
  const knobBtn = `min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 ${focusRing}`;
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn vật kính" options={OPTIONS} bind:value={pick} />

  <div class="grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]">
    <svg
      viewBox="0 0 120 180"
      class="w-full"
      role="img"
      aria-label="Hình nhìn ngang: vật kính cách lá kính {formatNumber(gapMm(gap), 2)} mm"
    >
      <rect x="44" y="0" width="32" height={lensBottom - 22} fill="#94a3b8" />
      <rect x="50" y={lensBottom - 22} width="20" height="22" rx="3" fill="#475569" />
      <text x="60" y={lensBottom - 8} text-anchor="middle" font-size="9" fill="#fff"
        >{objective.mag}x</text
      >
      <rect x="10" y={SLIDE_Y} width="100" height="5" fill="#bae6fd" stroke="#0284c7" />
      <rect x="45" y={SLIDE_Y - 2} width="30" height="2" fill="#a855f7" />
      <rect x="0" y={SLIDE_Y + 5} width="120" height="10" fill="#334155" />
      <text x="60" y="176" text-anchor="middle" font-size="9" fill="#475569">bàn kính</text>
      {#if focus === 'cham'}
        <text x="60" y={SLIDE_Y - 8} text-anchor="middle" font-size="14" fill="#dc2626">!</text>
      {/if}
    </svg>

    <svg
      viewBox="0 0 200 200"
      class="mx-auto block w-full max-w-64"
      role="img"
      aria-label="Thị trường kính hiển vi, độ phóng đại {total} lần: {focusText}"
    >
      <defs>
        <clipPath id="{id}-thi-truong"><circle cx="100" cy="100" r="90" /></clipPath>
        <filter id="{id}-mo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={blurPx} />
        </filter>
        <pattern
          id="{id}-te-bao"
          patternUnits="userSpaceOnUse"
          width={0.3 * k}
          height={0.2 * k}
          x="100"
          y="100"
        >
          <rect width={0.3 * k} height={0.2 * k} fill="#f5f3ff" />
          <g fill="none" stroke="#7c3aed" stroke-width={Math.max(0.4, 0.004 * k)}>
            <rect x="0" y="0" width={0.3 * k} height={0.1 * k} />
            <rect x={-0.15 * k} y={0.1 * k} width={0.3 * k} height={0.1 * k} />
            <rect x={0.15 * k} y={0.1 * k} width={0.3 * k} height={0.1 * k} />
          </g>
          {#if k >= 100}
            <g fill="#6d28d9">
              <ellipse cx={0.12 * k} cy={0.05 * k} rx={0.012 * k} ry={0.01 * k} />
              <ellipse cx={0.02 * k} cy={0.15 * k} rx={0.012 * k} ry={0.01 * k} />
              <ellipse cx={0.24 * k} cy={0.15 * k} rx={0.012 * k} ry={0.01 * k} />
            </g>
          {/if}
        </pattern>
      </defs>
      <circle cx="100" cy="100" r="98" fill="#0f172a" />
      <g clip-path="url(#{id}-thi-truong)">
        <rect width="200" height="200" fill="#fefce8" />
        {#if visible}
          <g filter="url(#{id}-mo)" opacity={focus === 'mo' ? 0.5 : 1}>
            <rect x="-20" y="-20" width="240" height="240" fill="url(#{id}-te-bao)" />
          </g>
        {/if}
        {#if shade > 0}
          <rect
            width="200"
            height="200"
            fill={lit === 'toi' ? '#0f172a' : '#ffffff'}
            opacity={Math.min(0.85, shade)}
          />
        {/if}
      </g>
    </svg>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-2 text-sm font-semibold text-slate-700">Ốc to (mỗi nấc 1 mm)</p>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={knobBtn}
          aria-label="Vặn ốc to: hạ vật kính xuống gần tiêu bản"
          onclick={() => twist('coarse', -1)}>▼ Hạ xuống</button
        >
        <button
          type="button"
          class={knobBtn}
          aria-label="Vặn ốc to: nâng vật kính lên xa tiêu bản"
          onclick={() => twist('coarse', 1)}>▲ Nâng lên</button
        >
      </div>
    </div>
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-2 text-sm font-semibold text-slate-700">Ốc nhỏ (mỗi nấc 0,05 mm)</p>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={knobBtn}
          aria-label="Vặn ốc nhỏ: hạ vật kính xuống một chút"
          onclick={() => twist('fine', -1)}>▼ Hạ xuống</button
        >
        <button
          type="button"
          class={knobBtn}
          aria-label="Vặn ốc nhỏ: nâng vật kính lên một chút"
          onclick={() => twist('fine', 1)}>▲ Nâng lên</button
        >
      </div>
    </div>
  </div>

  <SliderField
    label="Màn chắn sáng (độ mở)"
    bind:value={light}
    min={0}
    max={100}
    step={5}
    unit="%"
  />

  <div
    class="rounded-xl px-4 py-3 text-sm {focus === 'net' && lit === 'vua'
      ? 'bg-emerald-50 text-emerald-900'
      : focus === 'cham'
        ? 'bg-rose-50 text-rose-900'
        : 'bg-amber-50 text-amber-900'}"
    aria-live="polite"
  >
    <p class="font-semibold">{focusText}</p>
    <p>{LIGHT_TEXT[lit]}</p>
    <p class="mt-1 text-slate-700">
      Độ phóng đại: {objective.mag} (vật kính) × {EYEPIECE} (thị kính) =
      <strong class="tabular-nums">{total}</strong> lần. Vật kính cách lá kính
      <span class="tabular-nums">{formatNumber(gapMm(gap), 2)}</span> mm.
    </p>
  </div>
</div>
