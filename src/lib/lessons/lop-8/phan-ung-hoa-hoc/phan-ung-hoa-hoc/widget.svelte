<script>
  import { onDestroy } from 'svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { atomColor } from '#lib/domain/molecule.js';
  import {
    PHASE_TEXT,
    REACTIONS,
    atomTally,
    bondsAt,
    nextStop,
    phaseAt,
    positionsAt,
    prevStop,
    reactionById,
    speciesAt,
  } from './engine.js';

  /** Seconds one full run of the animation takes. */
  const DURATION = 6;
  const RADIUS = /** @type {Record<string, number>} */ ({ H: 11, C: 15, O: 15, Cl: 18 });

  let reactionId = $state('h2o');
  /** Progress in percent, 0 to 100. */
  let progress = $state(0);
  let playing = $state(false);
  /** @type {(() => void) | null} */
  let stop = null;

  const reaction = $derived(reactionById(reactionId));
  const t = $derived(progress / 100);
  const phase = $derived(phaseAt(t));
  const points = $derived(positionsAt(reaction, t));
  const bonds = $derived(bondsAt(reaction, t));
  const species = $derived(speciesAt(reaction, t));
  const tally = $derived(atomTally(reaction));
  const options = REACTIONS.map((r) => ({ value: r.id, label: r.label }));

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function play() {
    if (playing) {
      halt();
      return;
    }
    if (progress >= 100) progress = 0;
    if (reducedMotion()) {
      progress = nextStop(t) * 100;
      return;
    }
    playing = true;
    stop = frameLoop((dt) => {
      progress = Math.min(100, progress + (dt / DURATION) * 100);
      if (progress >= 100) halt();
    });
  }

  /** @param {number} to */
  function jump(to) {
    halt();
    progress = to * 100;
  }

  onDestroy(halt);

  const flash = $derived(phase === 'sau' ? 1 : 0);
</script>

<div class="space-y-4">
  <SegmentedControl label="Phản ứng" {options} bind:value={reactionId} onchange={() => jump(0)} />

  <p class="text-center text-sm font-semibold text-slate-700">
    Phương trình chữ: {reaction.words}
  </p>

  <div class="rounded-xl border border-slate-200 bg-slate-50 p-2">
    <svg
      viewBox="0 0 320 200"
      class="mx-auto block h-auto w-full max-w-md"
      role="img"
      aria-label="Mô hình phân tử: {PHASE_TEXT[phase]}"
    >
      <circle
        cx="236"
        cy="110"
        r="80"
        fill="#fde68a"
        opacity={flash * 0.45}
        style="transition: opacity 0.4s"
      />
      <line x1="160" y1="12" x2="160" y2="188" stroke="#cbd5e1" stroke-dasharray="4 4" />
      <text x="80" y="16" text-anchor="middle" font-size="11" fill="#64748b">Chất phản ứng</text>
      <text x="240" y="16" text-anchor="middle" font-size="11" fill="#64748b">Sản phẩm</text>
      {#each bonds as [a, b] (`${a}-${b}`)}
        <line
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="#475569"
          stroke-width="5"
          stroke-linecap="round"
        />
      {/each}
      {#each reaction.atoms as at, i (i)}
        <g transform="translate({points[i][0]} {points[i][1]})">
          <circle
            r={RADIUS[at.el] ?? 14}
            fill={atomColor(at.el)}
            stroke="#334155"
            stroke-width="1.5"
          />
          <text
            text-anchor="middle"
            dominant-baseline="central"
            font-size="11"
            font-weight="700"
            fill={at.el === 'H' ? '#0f172a' : '#ffffff'}>{at.el}</text
          >
        </g>
      {/each}
    </svg>
  </div>

  <SliderField
    label="Diễn biến phản ứng"
    bind:value={progress}
    min={0}
    max={100}
    step={1}
    format={(v) => `${Math.round(v)}%`}
    oninput={halt}
  />

  <div class="flex flex-wrap justify-center gap-2">
    <button type="button" class={button.quiet} onclick={() => jump(prevStop(t))}
      >← Bước trước</button
    >
    <button type="button" class={button.primary} onclick={play}
      >{playing ? 'Tạm dừng' : progress >= 100 ? 'Chạy lại' : 'Chạy hoạt cảnh'}</button
    >
    <button type="button" class={button.quiet} onclick={() => jump(nextStop(t))}>Bước sau →</button>
  </div>

  <p
    class="rounded-xl px-4 py-3 text-sm font-semibold {phase === 'sau'
      ? 'bg-emerald-50 text-emerald-800'
      : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    {PHASE_TEXT[phase]}
    {#if phase === 'sau'}
      Phản ứng này toả nhiệt và phát sáng: năng lượng được giải phóng ra môi trường.
    {/if}
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <div class="rounded-xl bg-slate-50 p-3 text-sm">
      <p class="mb-1 font-semibold text-slate-700">Phân tử đang có</p>
      {#if species.length}
        <ul class="space-y-1">
          {#each species as s (s.formula)}
            <li>{s.count} phân tử <ChemFormula formula={s.formula} /></li>
          {/each}
        </ul>
      {:else}
        <p class="text-slate-600">Các nguyên tử đang tách rời, chưa có phân tử mới.</p>
      {/if}
    </div>
    <div class="rounded-xl bg-slate-50 p-3 text-sm">
      <p class="mb-1 font-semibold text-slate-700">Số nguyên tử (không đổi)</p>
      <ul class="space-y-1">
        {#each tally as row (row.el)}
          <li class="tabular-nums">{row.count} nguyên tử {row.el}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
