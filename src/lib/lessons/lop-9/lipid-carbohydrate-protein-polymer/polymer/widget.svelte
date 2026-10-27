<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import { MONOMERS, monomer, polymerMass, unitMass } from './engine.js';

  /** Units drawn one by one before the chain is summarised with an ellipsis. */
  const SHOWN = 6;

  let monomerId = $state(/** @type {string | number} */ ('ethylene'));
  let linked = $state(0);
  let n = $state(1000);

  const m = $derived(monomer(String(monomerId)));
  const M = $derived(unitMass(m.id));
  const OPTIONS = MONOMERS.map((x) => ({ value: x.id, label: x.name }));

  function link() {
    linked = Math.min(SHOWN, linked + 1);
  }

  const tone = $derived(linked >= SHOWN ? 'ok' : 'info');
  const note = $derived.by(() => {
    if (linked === 0)
      return `Mỗi phân tử ${m.name.toLowerCase()} ${m.monomer} có một liên kết đôi C=C. Bấm “Nối thêm 1 monomer”: liên kết đôi mở ra, các phân tử nối với nhau thành mạch.`;
    if (linked === 1)
      return `Một monomer mở liên kết đôi thành mắt xích ${m.unit}. Nối thêm để mạch dài ra.`;
    if (linked < SHOWN)
      return `Đã nối ${linked} mắt xích ${m.unit}: phân tử khối của mạch là ${linked} × ${formatNumber(M)} = ${formatNumber(polymerMass(m.id, linked))} amu.`;
    return `Một phân tử ${m.polymer} (${m.short}) thật có hàng nghìn đến hàng chục nghìn mắt xích như thế. Kéo thanh trượt hệ số polymer hoá n để xem phân tử khối lớn đến mức nào.`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Monomer"
    options={OPTIONS}
    bind:value={monomerId}
    onchange={() => (linked = 0)}
  />

  <div class="space-y-2 rounded-xl bg-slate-50 p-3">
    <p class="flex flex-wrap items-center gap-2">
      <span class="text-sm text-slate-600">Còn chờ nối:</span>
      {#each Array.from({ length: SHOWN - linked }, (_, i) => i) as i (i)}
        <span class="rounded-lg bg-sky-100 px-2 py-1 text-sm font-semibold text-sky-900"
          >{m.monomer}</span
        >
      {/each}
    </p>
    <p
      class="flex min-h-11 flex-wrap items-center gap-y-1 font-semibold text-emerald-900"
      aria-live="polite"
    >
      <span class="sr-only"
        >{linked === 0
          ? 'Mạch polymer chưa có mắt xích'
          : `Mạch có ${linked} mắt xích ${m.unit}`}</span
      >
      {#if linked > 0}
        <span aria-hidden="true">···</span>
        {#each Array.from({ length: linked }, (_, i) => i) as i (i)}
          <span class="unit rounded-lg bg-emerald-100 px-1 py-1" aria-hidden="true">{m.unit}</span>
        {/each}
        <span aria-hidden="true">···</span>
      {/if}
    </p>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={linked >= SHOWN} onclick={link}>
      Nối thêm 1 monomer
    </button>
    <button type="button" class={button.quiet} disabled={linked === 0} onclick={() => (linked = 0)}>
      Làm lại
    </button>
  </div>

  <FeedbackNote {tone} text={note} />

  <div class="space-y-3 rounded-xl border border-slate-200 p-3">
    <p class="text-base font-semibold text-slate-800">
      n {m.monomer} <span class="text-slate-500">→ (t°, p, xt)</span> ({m.unit})<sub>n</sub>
    </p>
    <SliderField
      label="Hệ số polymer hoá n"
      bind:value={n}
      min={500}
      max={20000}
      step={500}
      format={(v) => fmt(v)}
    />
    <p class="text-sm text-slate-700" aria-live="polite">
      Phân tử khối của {m.short}: {fmt(n)} × {formatNumber(M)} =
      <strong>{fmt(polymerMass(m.id, n))} amu</strong>. Dùng làm: {m.uses}.
    </p>
  </div>
</div>

<style>
  .unit {
    animation: snap 0.35s ease-out both;
  }
  @keyframes snap {
    from {
      transform: translateY(-0.75rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .unit {
      animation: none;
    }
  }
</style>
