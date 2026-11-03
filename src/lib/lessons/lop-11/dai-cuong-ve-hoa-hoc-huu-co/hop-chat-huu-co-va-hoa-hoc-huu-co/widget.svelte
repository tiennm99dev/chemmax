<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { BANDS, CLASS_NAMES, SAMPLES, judge, transmittance } from './engine.js';

  const BOX = { left: 38, right: 352, top: 34, bottom: 180 };
  const V_HIGH = 4000;
  const V_LOW = 500;
  const OPTIONS = SAMPLES.map((s, i) => ({ value: s.id, label: `Mẫu ${i + 1}` }));
  const CLASS_IDS = /** @type {(keyof typeof CLASS_NAMES)[]} */ (Object.keys(CLASS_NAMES));

  let sampleId = $state(SAMPLES[0].id);
  let peakIndex = $state(/** @type {number | null} */ (null));
  let verdict = $state(/** @type {{ correct: boolean, text: string } | null} */ (null));
  let solved = $state(/** @type {string[]} */ ([]));

  const sample = $derived(SAMPLES.find((s) => s.id === sampleId) ?? SAMPLES[0]);
  const isSolved = $derived(solved.includes(sampleId));
  const peak = $derived(peakIndex === null ? null : sample.peaks[peakIndex]);
  const band = $derived(peak ? BANDS[peak.band] : null);

  /** @param {number} v */
  const sx = (v) => BOX.left + ((V_HIGH - v) / (V_HIGH - V_LOW)) * (BOX.right - BOX.left);
  /** @param {number} t */
  const sy = (t) => BOX.bottom - (t / 100) * (BOX.bottom - BOX.top);

  const WAVENUMBERS = Array.from({ length: 351 }, (_, i) => V_HIGH - i * 10);
  const curve = $derived(
    WAVENUMBERS.map((v) => `${sx(v)},${sy(transmittance(sample, v))}`).join(' '),
  );

  /** Pointer zones split halfway between neighbouring peaks. */
  const zones = $derived.by(() => {
    const xs = sample.peaks.map((p) => sx(p.at));
    return xs.map((x, i) => {
      const from = i === 0 ? Math.max(BOX.left, x - 26) : Math.max((xs[i - 1] + x) / 2, x - 26);
      const to =
        i === xs.length - 1 ? Math.min(BOX.right, x + 26) : Math.min((x + xs[i + 1]) / 2, x + 26);
      return { from, to };
    });
  });

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (verdict) return { tone: verdict.correct ? 'ok' : 'warn', text: verdict.text };
      if (band) return { tone: 'info', text: 'Đọc thêm các đỉnh khác rồi chọn loại hợp chất.' };
      return {
        tone: 'info',
        text: `Bấm từng đỉnh để biết liên kết hấp thụ, rồi chọn loại hợp chất. Đã nhận ra ${solved.length}/${SAMPLES.length} mẫu.`,
      };
    },
  );

  function changeSample() {
    peakIndex = null;
    verdict = null;
  }

  /** @param {keyof typeof CLASS_NAMES} id */
  function choose(id) {
    verdict = judge(sample, id);
    if (verdict.correct && !isSolved) solved = [...solved, sample.id];
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn phổ của mẫu chưa biết"
    options={OPTIONS}
    bind:value={sampleId}
    onchange={changeSample}
  />

  <svg
    viewBox="0 0 360 218"
    class="mx-auto block w-full max-w-2xl"
    role="img"
    aria-label="Phổ hồng ngoại của mẫu đang chọn, có {sample.peaks.length} đỉnh tại {sample.peaks
      .map((p) => fmt(p.at))
      .join(', ')} trên centimet."
  >
    {#each [0, 50, 100] as t (t)}
      <line x1={BOX.left} x2={BOX.right} y1={sy(t)} y2={sy(t)} stroke="#e2e8f0" />
      <text x={BOX.left - 5} y={sy(t) + 4} text-anchor="end" font-size="11" fill="#475569">{t}</text
      >
    {/each}
    {#each [4000, 3000, 2000, 1000] as v (v)}
      <line x1={sx(v)} x2={sx(v)} y1={BOX.bottom} y2={BOX.bottom + 4} stroke="#475569" />
      <text x={sx(v)} y={BOX.bottom + 16} text-anchor="middle" font-size="11" fill="#475569"
        >{fmt(v)}</text
      >
    {/each}
    <text x={BOX.right} y={BOX.bottom + 32} text-anchor="end" font-size="11" fill="#475569"
      >Số sóng (cm⁻¹)</text
    >
    <text x={BOX.left} y={BOX.bottom + 32} font-size="11" fill="#475569">Độ truyền qua (%)</text>
    <line x1={BOX.left} x2={BOX.left} y1={BOX.top} y2={BOX.bottom} stroke="#475569" />
    <line x1={BOX.left} x2={BOX.right} y1={BOX.bottom} y2={BOX.bottom} stroke="#475569" />

    <polyline points={curve} fill="none" stroke="#4f46e5" stroke-width="2" />

    {#each sample.peaks as p, i (p.at)}
      {@const x = sx(p.at)}
      {@const y = sy(transmittance(sample, p.at))}
      {@const on = peakIndex === i}
      <!-- A pointer shortcut only: the buttons under the chart are the keyboard route to the same peaks. -->
      <g class="cursor-pointer" aria-hidden="true" onclick={() => (peakIndex = i)}>
        <rect
          x={zones[i].from}
          y={BOX.top - 16}
          width={zones[i].to - zones[i].from}
          height={BOX.bottom - BOX.top + 16}
          fill={on ? '#e0e7ff' : 'transparent'}
          fill-opacity="0.6"
        />
        <circle cx={x} cy={y} r={on ? 5.5 : 4} fill={on ? '#4338ca' : '#818cf8'} />
        <text
          {x}
          y={BOX.top - (i % 2 === 0 ? 4 : 13)}
          text-anchor="middle"
          font-size="11"
          font-weight="700"
          fill="#3730a3">{i + 1}</text
        >
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Các đỉnh hấp thụ">
    {#each sample.peaks as p, i (p.at)}
      <button
        type="button"
        class={peakIndex === i ? button.primary : button.quiet}
        aria-pressed={peakIndex === i}
        onclick={() => (peakIndex = i)}
      >
        Đỉnh {i + 1}: {fmt(p.at)} cm⁻¹
      </button>
    {/each}
  </div>

  {#if band && peak}
    <p class="rounded-lg bg-indigo-50 p-3 text-sm text-indigo-950" aria-live="polite">
      <strong>{fmt(peak.at)} cm⁻¹ là liên kết {band.bond}</strong> (vùng {fmt(band.low)} – {fmt(
        band.high,
      )} cm⁻¹). {band.note}
    </p>
  {/if}

  <fieldset>
    <legend class="mb-2 text-sm font-semibold text-slate-700">Mẫu này thuộc loại nào?</legend>
    <div class="flex flex-wrap gap-2">
      {#each CLASS_IDS as id (id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 {focusRing}"
          onclick={() => choose(id)}
        >
          {CLASS_NAMES[id]}
        </button>
      {/each}
    </div>
  </fieldset>

  {#if isSolved}
    <p class="text-sm text-slate-700">
      Công thức của mẫu: <ChemFormula formula={sample.formula} class="font-semibold" />
    </p>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
