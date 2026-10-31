<script>
  import EquationLine from '#lib/domain/equation-line.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { LINES, burnLimestone } from './engine.js';

  let lineId = $state('voi');
  let step = $state(0);
  let rock = $state(10);
  let purity = $state(90);

  const line = $derived(LINES.find((l) => l.id === lineId) ?? LINES[0]);
  const stage = $derived(line.stages[step]);
  const last = $derived(step === line.stages.length - 1);
  const burns = $derived(stage.equations?.some((e) => e.startsWith('CaCO3')) ?? false);
  const mass = $derived(burnLimestone(rock, purity));
  const t = (/** @type {number} */ v) => formatNumber(v, 2);

  /** @param {string | number} value */
  function chooseLine(value) {
    lineId = String(value);
    step = 0;
  }

  const note = $derived(
    `Công đoạn ${step + 1}/${line.stages.length}: ${stage.name}. Thu được: ${stage.output}.${
      last ? ` Đây là công đoạn cuối của dây chuyền ${line.label.toLowerCase()}.` : ''
    }`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Dây chuyền sản xuất"
    options={LINES.map((l) => ({ value: l.id, label: l.label }))}
    value={lineId}
    onchange={chooseLine}
  />

  <p class="text-sm text-slate-700">
    <span class="font-semibold">Nguyên liệu:</span>
    {line.inputs}. <span class="font-semibold">Sản phẩm:</span>
    {line.product}.
  </p>

  <ol class="flex flex-wrap items-stretch gap-1" aria-label="Các công đoạn">
    {#each line.stages as s, i (s.name)}
      <li class="flex items-center gap-1">
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm {i === step
            ? 'border-indigo-500 bg-indigo-600 font-semibold text-white'
            : i < step
              ? 'border-indigo-200 bg-indigo-50 text-indigo-900'
              : 'border-slate-200 bg-white text-slate-700'} {focusRing}"
          aria-current={i === step ? 'step' : undefined}
          onclick={() => (step = i)}
        >
          <span class="block text-xs opacity-80">Bước {i + 1}</span>
          {s.name}
        </button>
        {#if i < line.stages.length - 1}
          <span aria-hidden="true" class="text-slate-400">→</span>
        {/if}
      </li>
    {/each}
  </ol>

  <div class="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
    <p class="text-base font-bold text-slate-900">{stage.name}</p>
    <p class="text-sm text-slate-700">{stage.detail}</p>
    {#if stage.temp}
      <p class="text-sm">
        <span aria-hidden="true">🔥</span>
        <span class="font-semibold">Nhiệt độ:</span>
        {stage.temp}
      </p>
    {/if}
    {#if stage.equations}
      <ul class="space-y-1 rounded-lg bg-slate-50 px-3 py-2">
        {#each stage.equations as eq (eq)}
          <li><EquationLine text={eq} /></li>
        {/each}
      </ul>
    {/if}

    {#if burns}
      <div class="space-y-3 border-t border-slate-200 pt-3">
        <p class="text-sm font-semibold text-slate-800">
          Nung bao nhiêu đá vôi, thải ra bao nhiêu CO₂?
        </p>
        <SliderField label="Khối lượng đá vôi" bind:value={rock} min={1} max={100} unit="tấn" />
        <SliderField
          label="Hàm lượng CaCO₃ trong đá"
          bind:value={purity}
          min={70}
          max={100}
          unit="%"
        />
        <div class="grid grid-cols-3 gap-2 text-center text-sm">
          <div class="rounded-lg bg-amber-50 p-2">
            <span class="block text-slate-600">CaCO₃ phân huỷ</span>
            <span class="font-bold tabular-nums">{t(mass.caco3)} tấn</span>
          </div>
          <div class="rounded-lg bg-slate-100 p-2">
            <span class="block text-slate-600">CaO tạo thành</span>
            <span class="font-bold tabular-nums">{t(mass.cao)} tấn</span>
          </div>
          <div class="rounded-lg bg-rose-50 p-2">
            <span class="block text-slate-600">CO₂ thải ra</span>
            <span class="font-bold tabular-nums">{t(mass.co2)} tấn</span>
          </div>
        </div>
        <p class="text-xs text-slate-600">
          Cứ 100 tấn CaCO₃ cho 56 tấn CaO và 44 tấn CO₂ (theo định luật bảo toàn khối lượng: 100 =
          56 + 44).
        </p>
      </div>
    {/if}
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.quiet}
      disabled={step === 0}
      onclick={() => (step = Math.max(0, step - 1))}>← Công đoạn trước</button
    >
    <button
      type="button"
      class={button.primary}
      disabled={last}
      onclick={() => (step = Math.min(line.stages.length - 1, step + 1))}>Công đoạn tiếp →</button
    >
  </div>

  <FeedbackNote tone={last ? 'ok' : 'info'} text={note} />
  {#if last}
    <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <span class="font-semibold">Ảnh hưởng tới môi trường:</span>
      {line.impact}
    </p>
  {/if}
</div>
