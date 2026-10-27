<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { EQUATIONS, SAMPLES, silverFromGlucose, silverMirror, tubeContents } from './engine.js';

  /** @typedef {import('./engine.js').SampleId} SampleId */

  let sample = $state(/** @type {string | number} */ ('glucose'));
  let hydrolysed = $state(false);
  let tested = $state(false);
  let grams = $state(18);

  const id = $derived(/** @type {SampleId} */ (sample));
  const info = $derived(SAMPLES.find((s) => s.id === id) ?? SAMPLES[0]);
  const contents = $derived(tubeContents(id, hydrolysed));
  const mirror = $derived(tested && silverMirror(id, hydrolysed));

  const OPTIONS = SAMPLES.map((s) => ({ value: s.id, label: s.name }));
  const NAMES = /** @type {Record<string, string>} */ ({
    glucose: 'glucose',
    fructose: 'fructose',
    saccharose: 'saccharose',
  });

  function reset() {
    hydrolysed = false;
    tested = false;
  }

  const solutesText = $derived(
    contents.solutes.length === 0
      ? 'chỉ có nước'
      : contents.solutes.map((s) => NAMES[s]).join(' và '),
  );

  const tone = $derived(!tested ? 'info' : mirror ? 'ok' : /** @type {const} */ ('warn'));
  const note = $derived.by(() => {
    if (!tested) {
      const pre = hydrolysed
        ? id === 'saccharose'
          ? 'Đã đun với dung dịch acid: saccharose bị thuỷ phân thành glucose và fructose (acid đã được trung hoà).'
          : 'Đã đun với dung dịch acid, nhưng chất trong ống không bị thuỷ phân.'
        : `Ống nghiệm chứa ${info.name.charAt(0).toLowerCase()}${info.name.slice(1)}.`;
      return `${pre} Bấm “Thêm AgNO₃/NH₃, đun nóng” để thử phản ứng tráng bạc.`;
    }
    if (mirror)
      return id === 'glucose'
        ? 'Thành ống nghiệm phủ một lớp bạc sáng như gương: glucose đã khử silver oxide trong dung dịch ammonia thành bạc kim loại.'
        : 'Có lớp bạc sáng bám trên thành ống: sau khi thuỷ phân, dung dịch có glucose nên cho phản ứng tráng bạc.';
    if (id === 'saccharose')
      return 'Không có lớp bạc: saccharose không có phản ứng tráng bạc. Hãy làm lại, lần này đun với dung dịch acid trước để thuỷ phân saccharose.';
    return 'Không có hiện tượng: nước cất không có chất khử nên không tạo lớp bạc. Đây là ống đối chứng.';
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chất trong ống nghiệm"
    options={OPTIONS}
    bind:value={sample}
    onchange={reset}
  />

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,11rem)_1fr]">
    <svg
      viewBox="0 0 200 250"
      class="mx-auto block h-auto w-full max-w-44"
      role="img"
      aria-label="Ống nghiệm chứa {solutesText}{tested
        ? mirror
          ? ', thành ống phủ lớp bạc sáng'
          : ', không có lớp bạc'
        : ''}"
    >
      <defs>
        <linearGradient id="silver-wall" x1="0" x2="1">
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#f8fafc" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
      </defs>
      <path
        d="M72 100 L128 100 L128 210 A28 28 0 0 1 72 210 Z"
        fill={tested ? '#e0e7ff' : '#f1f5f9'}
      />
      {#if mirror}
        <path
          class="mirror"
          d="M70 60 L70 210 A30 30 0 0 0 130 210 L130 60 L124 60 L124 210 A24 24 0 0 1 76 210 L76 60 Z"
          fill="url(#silver-wall)"
        />
      {/if}
      <path
        d="M68 40 L68 210 A32 32 0 0 0 132 210 L132 40"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      {#if hydrolysed}
        <text x="100" y="24" font-size="12" fill="#334155" text-anchor="middle">đã thuỷ phân</text>
      {/if}
    </svg>

    <div class="space-y-3">
      <p class="text-sm text-slate-600">Trong ống: <strong>{solutesText}</strong></p>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.secondary}
          disabled={hydrolysed || tested || id === 'water'}
          onclick={() => (hydrolysed = true)}
        >
          Đun với H₂SO₄ loãng
        </button>
        <button
          type="button"
          class={button.primary}
          disabled={tested}
          onclick={() => (tested = true)}
        >
          Thêm AgNO₃/NH₃, đun nóng
        </button>
        <button
          type="button"
          class={button.quiet}
          disabled={!tested && !hydrolysed}
          onclick={reset}
        >
          Làm lại
        </button>
      </div>
      {#if hydrolysed && id === 'saccharose'}
        <div class="rounded-xl bg-slate-50 p-3 text-sm">
          <EquationLine text={EQUATIONS.hydrolysis} />
          <p class="mt-1 text-slate-600">saccharose → glucose + fructose (acid, đun nóng)</p>
        </div>
      {/if}
      {#if mirror}
        <div class="rounded-xl bg-slate-50 p-3 text-sm">
          <EquationLine text={EQUATIONS.mirror} />
          <p class="mt-1 text-slate-600">Điều kiện: dung dịch NH₃, đun nóng.</p>
        </div>
      {/if}
    </div>
  </div>

  <FeedbackNote {tone} text={note} />

  <div class="space-y-3 rounded-xl border border-slate-200 p-3">
    <p class="text-sm font-semibold text-slate-700">Tráng gương: lượng bạc tạo ra từ glucose</p>
    <SliderField label="Khối lượng glucose" bind:value={grams} min={9} max={90} step={9} unit="g" />
    <p class="text-sm text-slate-700" aria-live="polite">
      n(glucose) = {grams} : 180 = {formatNumber(grams / 180, 2)} mol → n(Ag) = 2 × {formatNumber(
        grams / 180,
        2,
      )} = {formatNumber(grams / 90, 2)} mol → m(Ag) = {formatNumber(grams / 90, 2)} × 108 =
      <strong>{formatNumber(silverFromGlucose(grams), 2)} g</strong>.
    </p>
  </div>
</div>

<style>
  .mirror {
    animation: shine 0.8s ease-out both;
  }
  @keyframes shine {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .mirror {
      animation: none;
    }
  }
</style>
