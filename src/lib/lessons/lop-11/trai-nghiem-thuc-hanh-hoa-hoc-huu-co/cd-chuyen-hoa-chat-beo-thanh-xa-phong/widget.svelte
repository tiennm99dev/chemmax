<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { FATS, NAOH_MOLARITY, baseFor, makeBatch, verdict } from './engine.js';

  let fatId = $state('dua');
  let fat = $state(50);
  let percent = $state(100);

  const chosen = $derived(FATS.find((f) => f.id === fatId) ?? FATS[0]);
  const need = $derived(baseFor(chosen.sap, fat));
  const batch = $derived(makeBatch({ sap: chosen.sap, fat, percent }));
  const result = $derived(verdict(percent));
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chất béo"
    options={FATS.map((f) => ({ value: f.id, label: f.name }))}
    bind:value={fatId}
  />
  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    <SliderField
      label="Khối lượng chất béo"
      bind:value={fat}
      min={20}
      max={200}
      step={10}
      unit="g"
    />
    <SliderField
      label="NaOH dùng so với tính toán"
      bind:value={percent}
      min={80}
      max={115}
      unit="%"
    />
  </div>

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-800">
      {chosen.name}: chỉ số xà phòng hoá {chosen.sap} mg KOH/g
    </p>
    <ol class="mt-1 list-decimal space-y-0.5 pl-5 text-slate-700">
      <li>
        KOH tương đương: {chosen.sap} · {fat} = {formatNumber(chosen.sap * fat)} mg = {formatNumber(
          need.koh,
          2,
        )} g, tức {formatNumber(need.mol, 4)} mol.
      </li>
      <li>
        NaOH cần (cùng số mol): {formatNumber(need.mol, 4)} · 40 ≈ {formatNumber(need.naoh, 2)} g, hay
        {formatNumber(need.ml, 1)} mL dung dịch NaOH {NAOH_MOLARITY} M.
      </li>
      <li>
        Dùng {percent}%: {formatNumber(batch.naoh, 2)} g NaOH ({formatNumber(batch.ml, 1)} mL dung dịch).
      </li>
    </ol>
    <p class="mt-2 text-slate-700">
      Thu được khoảng {formatNumber(batch.soap, 1)} g muối của acid béo (xà phòng) và {formatNumber(
        batch.glycerol,
        1,
      )} g glycerol{#if batch.leftoverFat > 0}; còn {formatNumber(batch.leftoverFat, 1)} g chất béo chưa
        phản ứng{/if}{#if batch.leftoverNaoh > 0}; dư {formatNumber(batch.leftoverNaoh, 2)} g NaOH{/if}.
    </p>
  </div>

  <FeedbackNote tone={result.tone} text={result.text} />
</div>
