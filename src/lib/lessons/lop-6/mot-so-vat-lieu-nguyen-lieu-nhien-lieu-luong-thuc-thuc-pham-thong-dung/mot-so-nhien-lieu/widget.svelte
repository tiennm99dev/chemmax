<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import {
    FUELS,
    airAdvice,
    carbonDioxide,
    co2For,
    fuel,
    heat,
    massFor,
    smoky,
    usefulHeat,
  } from './engine.js';

  /** @typedef {import('./engine.js').Air} Air */

  const FUEL_OPTIONS = FUELS.map((f) => ({ value: f.id, label: f.label }));
  /** @type {Array<{ value: Air, label: string }>} */
  const AIR_OPTIONS = [
    { value: 'thieu', label: 'Thiếu không khí' },
    { value: 'vua', label: 'Vừa đủ' },
    { value: 'thua', label: 'Quá nhiều' },
  ];

  const MAX_HEAT = 140 * 5;
  const MAX_CO2 = 3.1 * 5;
  const SAME_HEAT = 100;

  let fuelId = $state('cui');
  let mass = $state(1);
  let air = $state(/** @type {Air} */ ('vua'));

  const f = $derived(fuel(fuelId));
  const full = $derived(heat(fuelId, mass));
  const useful = $derived(usefulHeat(fuelId, mass, air));
  const co2 = $derived(carbonDioxide(fuelId, mass, air));
  const smoke = $derived(smoky(fuelId, air));

  // flame drawing: height grows with useful heat; colour shows how well it burns
  const flameH = $derived(30 + 90 * Math.sqrt(useful / MAX_HEAT));
  const flameColor = $derived(
    air === 'thieu'
      ? '#f97316'
      : air === 'thua'
        ? '#93c5fd'
        : f.state === 'khí'
          ? '#3b82f6'
          : '#f59e0b',
  );

  const status = $derived(
    `Đốt ${formatNumber(mass)} kg ${f.label.toLowerCase()} (thể ${f.state}). Nếu cháy hoàn toàn: Q = ${formatNumber(f.q)} MJ/kg × ${formatNumber(mass)} kg = ${formatNumber(full, 1)} MJ. Nhiệt có ích cho nồi: khoảng ${formatNumber(useful, 1)} MJ. Khí carbon dioxide: khoảng ${formatNumber(co2, 1)} kg. ${airAdvice(fuelId, air)}`,
  );

  /** @param {string | number} v */
  function chooseFuel(v) {
    fuelId = String(v);
  }
  /** @param {string | number} v */
  function chooseAir(v) {
    air = /** @type {Air} */ (v);
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nhiên liệu"
    options={FUEL_OPTIONS}
    value={fuelId}
    onchange={chooseFuel}
  />
  <SliderField
    label="Khối lượng nhiên liệu"
    bind:value={mass}
    min={0.5}
    max={5}
    step={0.5}
    unit="kg"
  />
  <SegmentedControl
    label="Lượng không khí cấp cho ngọn lửa"
    options={AIR_OPTIONS}
    value={air}
    onchange={chooseAir}
  />

  <div class="grid gap-4 sm:grid-cols-2">
    <svg viewBox="0 0 200 200" class="mx-auto block w-full max-w-60" role="img" aria-label={status}>
      <!-- pot -->
      <rect x="45" y="20" width="110" height="34" rx="4" fill="#94a3b8" />
      <rect x="35" y="18" width="130" height="6" rx="3" fill="#64748b" />
      {#if smoke}
        {#each [0, 1, 2] as k (k)}
          <circle cx={70 + 30 * k} cy={12 - 4 * (k % 2)} r="9" fill="#1f2937" opacity="0.55" />
        {/each}
      {/if}
      <!-- flame -->
      <path
        d="M100 {180 - flameH} C 125 {180 - flameH * 0.55}, 130 168, 100 180 C 70 168, 75 {180 -
          flameH * 0.55}, 100 {180 - flameH} Z"
        fill={flameColor}
        opacity="0.9"
      />
      {#if smoke}
        <path d="M100 {180 - flameH * 0.6} l -6 12 l 12 0 Z" fill="#1f2937" opacity="0.5" />
      {/if}
      <!-- burner -->
      <rect x="60" y="180" width="80" height="12" rx="3" fill="#334155" />
    </svg>

    <div class="space-y-3 text-sm">
      <div>
        <div class="flex justify-between">
          <span class="font-semibold text-slate-700">Nhiệt có ích cho nồi</span>
          <span class="font-semibold tabular-nums text-orange-700"
            >{formatNumber(useful, 1)} MJ</span
          >
        </div>
        <div class="mt-1 h-4 overflow-hidden rounded bg-slate-200" aria-hidden="true">
          <div class="h-full bg-orange-500" style="width: {(100 * useful) / MAX_HEAT}%"></div>
        </div>
        <p class="mt-1 text-slate-600">
          Cháy hoàn toàn: {formatNumber(f.q)} MJ/kg × {formatNumber(mass)} kg = {formatNumber(
            full,
            1,
          )} MJ
        </p>
      </div>
      <div>
        <div class="flex justify-between">
          <span class="font-semibold text-slate-700">Khí carbon dioxide thải ra</span>
          <span class="font-semibold tabular-nums text-slate-800">{formatNumber(co2, 1)} kg</span>
        </div>
        <div class="mt-1 h-4 overflow-hidden rounded bg-slate-200" aria-hidden="true">
          <div class="h-full bg-slate-600" style="width: {(100 * co2) / MAX_CO2}%"></div>
        </div>
        <p class="mt-1 text-slate-600">
          {smoke ? 'Có khói đen (muội than) và khí carbon monoxide độc.' : 'Không có khói đen.'}
        </p>
      </div>
    </div>
  </div>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {airAdvice(fuelId, air)}
    {f.note}
  </p>

  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">
        Để thu được {SAME_HEAT} MJ (cháy hoàn toàn) cần đốt
      </caption>
      <thead>
        <tr class="text-left text-slate-600">
          <th scope="col" class="py-1">Nhiên liệu</th>
          <th scope="col" class="py-1">q (MJ/kg)</th>
          <th scope="col" class="py-1">Khối lượng</th>
          <th scope="col" class="py-1">Carbon dioxide</th>
        </tr>
      </thead>
      <tbody>
        {#each FUELS as x (x.id)}
          <tr
            class="border-t border-slate-200 {x.id === fuelId ? 'bg-indigo-50 font-semibold' : ''}"
          >
            <th scope="row" class="py-1 text-left font-medium">{x.label}</th>
            <td class="py-1 tabular-nums">{formatNumber(x.q)}</td>
            <td class="py-1 tabular-nums">{formatNumber(massFor(x.id, SAME_HEAT), 2)} kg</td>
            <td class="py-1 tabular-nums">{formatNumber(co2For(x.id, SAME_HEAT), 1)} kg</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="mt-1 text-xs text-slate-500">
      Số liệu khí thải là giá trị gần đúng; nhiệt có ích là mô phỏng để so sánh các cách cấp không
      khí.
    </p>
  </div>
</div>
