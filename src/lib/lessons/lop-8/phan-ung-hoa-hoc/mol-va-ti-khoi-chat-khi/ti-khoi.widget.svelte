<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { GASES, balloonIn, gasMass, relativeDensity } from './engine.js';

  let a = $state('CO2');
  let b = $state('kk');

  const d = $derived(relativeDensity(a, b));
  const label = (/** @type {string} */ f) => (f === 'kk' ? 'không khí' : prettyFormula(f));
  const vsAir = $derived(a === 'kk' ? null : balloonIn(a));
  /** Balloon height above the floor, in drawing units. */
  const lift = $derived(vsAir === 'bay-len' ? 76 : vsAir === 'chim-xuong' ? 0 : 40);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const text = `d = M(${label(a)}) : M(${label(b)}) = ${formatNumber(gasMass(a))} : ${formatNumber(gasMass(b))} ≈ ${formatNumber(d, 3)}.`;
      if (a === b) return { tone: 'info', text: `${text} Hai khí như nhau.` };
      if (Math.abs(d - 1) < 0.05)
        return { tone: 'info', text: `${text} Khí ${label(a)} nặng xấp xỉ khí ${label(b)}.` };
      return d > 1
        ? {
            tone: 'ok',
            text: `${text} Khí ${label(a)} nặng hơn khí ${label(b)} ${formatNumber(d, 2)} lần.`,
          }
        : { tone: 'ok', text: `${text} Khí ${label(a)} nhẹ hơn khí ${label(b)} (d < 1).` };
    },
  );

  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <label class="block text-sm font-semibold text-slate-700">
      Khí A
      <select class={select} bind:value={a}>
        {#each GASES as g (g.formula)}
          <option value={g.formula}
            >{g.formula === 'kk' ? '' : `${prettyFormula(g.formula)} – `}{g.name} (M = {formatNumber(
              gasMass(g.formula),
            )})</option
          >
        {/each}
      </select>
    </label>
    <label class="block text-sm font-semibold text-slate-700">
      So với khí B
      <select class={select} bind:value={b}>
        {#each GASES as g (g.formula)}
          <option value={g.formula}
            >{g.formula === 'kk' ? '' : `${prettyFormula(g.formula)} – `}{g.name} (M = {formatNumber(
              gasMass(g.formula),
            )})</option
          >
        {/each}
      </select>
    </label>
  </div>

  {#if vsAir}
    <svg
      viewBox="0 0 240 170"
      class="mx-auto block h-auto w-full max-w-sm rounded-xl bg-sky-50"
      role="img"
      aria-label="Quả bóng chứa khí {label(a)} thả trong không khí: {vsAir === 'bay-len'
        ? 'bay lên'
        : vsAir === 'chim-xuong'
          ? 'rơi xuống sàn'
          : 'lơ lửng'}"
    >
      <rect x="0" y="160" width="240" height="10" fill="#cbd5e1" />
      <g transform="translate(0 {-lift})">
        <line x1="120" y1="158" x2="120" y2="130" stroke="#64748b" />
        <ellipse
          cx="120"
          cy="110"
          rx="22"
          ry="26"
          fill="#fca5a5"
          stroke="#b91c1c"
          stroke-width="2"
        />
        <text x="120" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#7f1d1d"
          >{a}</text
        >
      </g>
    </svg>
    <p class="text-center text-xs text-slate-600">
      Bóng chứa khí {label(a)} thả trong không khí: d(A/kk) = {formatNumber(gasMass(a))} : 29 ≈ {formatNumber(
        gasMass(a) / 29,
        2,
      )}
    </p>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
