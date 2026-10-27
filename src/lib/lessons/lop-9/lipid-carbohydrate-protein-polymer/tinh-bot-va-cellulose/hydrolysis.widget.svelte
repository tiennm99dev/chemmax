<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { CUT_ORDER, fragments, glucoseFromStarch, iodineStage } from './engine.js';

  let cuts = $state(0);
  let starch = $state(81);
  let yieldPercent = $state(100);

  const pieces = $derived(fragments(cuts));
  const stage = $derived(iodineStage(pieces));
  const done = $derived(cuts >= CUT_ORDER.length);
  const glucose = $derived(glucoseFromStarch(starch, yieldPercent));

  function heat() {
    cuts = Math.min(CUT_ORDER.length, cuts + 2);
  }

  const tone = $derived(done ? 'ok' : 'info');
  const note = $derived.by(() => {
    if (cuts === 0)
      return 'Mạch tinh bột (mô hình 12 mắt xích) còn nguyên: nhỏ iodine thấy màu xanh tím. Bấm “Đun với acid” để thuỷ phân dần.';
    if (!done)
      return `Nước cắt mạch ở ${cuts} chỗ, còn ${pieces.length} đoạn, đoạn dài nhất có ${Math.max(...pieces)} mắt xích. Màu với iodine: ${stage.label}.`;
    return 'Mọi mắt xích đã tách thành phân tử glucose C₆H₁₂O₆: iodine không còn đổi màu. Lấy dung dịch này thử tráng bạc sẽ thấy lớp bạc sáng.';
  });
</script>

<div class="space-y-4">
  <div class="flex items-start gap-4">
    <div
      class="flex min-w-0 flex-1 flex-wrap items-center gap-y-2"
      role="img"
      aria-label="Các đoạn mạch: {pieces.join(', ')} mắt xích"
    >
      {#each pieces as len, i (i)}
        <span class="mr-3 flex flex-wrap items-center gap-y-1" aria-hidden="true">
          {#each Array.from({ length: len }, (_, k) => k) as k (k)}
            {#if k > 0}<span class="h-0.5 w-1 bg-slate-500 sm:w-2"></span>{/if}
            <span
              class="inline-flex size-5 items-center sm:size-7 justify-center rounded-full text-[0.6rem] font-bold text-white {len ===
              1
                ? 'bg-emerald-600'
                : 'bg-amber-600'}">{len === 1 ? 'G' : ''}</span
            >
          {/each}
        </span>
      {/each}
    </div>
    <svg
      viewBox="0 0 60 90"
      class="w-12 shrink-0"
      role="img"
      aria-label="Ống thử iodine: {stage.label}"
    >
      <path d="M12 30 L48 30 L48 72 A18 18 0 0 1 12 72 Z" fill={stage.color} opacity="0.85" />
      <path
        d="M10 8 L10 72 A20 20 0 0 0 50 72 L50 8"
        fill="none"
        stroke="#334155"
        stroke-width="2.5"
      />
    </svg>
  </div>
  <p class="text-xs text-slate-500">
    Hạt cam: mắt xích C₆H₁₀O₅ trong mạch; hạt xanh G: phân tử glucose đã tách rời.
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={done} onclick={heat}>Đun với acid</button
    >
    <button type="button" class={button.quiet} disabled={cuts === 0} onclick={() => (cuts = 0)}
      >Làm lại</button
    >
  </div>

  <FeedbackNote {tone} text={note} />

  <div class="space-y-3 rounded-xl border border-slate-200 p-3">
    <p class="text-sm font-semibold text-slate-700">Tính khối lượng glucose thu được</p>
    <div class="grid gap-3 sm:grid-cols-2">
      <SliderField label="Tinh bột" bind:value={starch} min={81} max={810} step={81} unit="g" />
      <SliderField
        label="Hiệu suất"
        bind:value={yieldPercent}
        min={50}
        max={100}
        step={5}
        unit="%"
      />
    </div>
    <p class="text-sm text-slate-700" aria-live="polite">
      Cứ 162 g tinh bột tạo 180 g glucose: m = {starch} × 180 : 162 × {yieldPercent}% =
      <strong>{formatNumber(glucose, 2)} g</strong> glucose.
    </p>
  </div>
</div>
