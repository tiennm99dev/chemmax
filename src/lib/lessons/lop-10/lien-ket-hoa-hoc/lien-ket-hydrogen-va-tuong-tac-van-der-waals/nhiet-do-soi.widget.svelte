<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { MINUS } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { SERIES, judgeOutlier, tempText } from './engine.js';

  const W = 340;
  const H = 240;
  const LEFT = 42;
  const RIGHT = W - 16;
  const TOP = 30;
  const BOTTOM = H - 30;
  const T_MAX = 200;
  const T_MIN = -300;
  const GRID = [200, 100, 0, -100, -200, -300];

  let id = $state('via');
  /** @type {string | null} */
  let pick = $state(null);

  const series = $derived(SERIES.find((s) => s.id === id) ?? SERIES[0]);
  const verdict = $derived(pick === null ? null : judgeOutlier(series, pick));
  const options = SERIES.map((s) => ({ value: s.id, label: s.label }));

  /** @param {number} t */
  const yOf = (t) => TOP + ((T_MAX - t) / (T_MAX - T_MIN)) * (BOTTOM - TOP);
  const points = $derived(
    series.items.map((it, i) => ({
      ...it,
      x: LEFT + 18 + (i * (RIGHT - LEFT - 36)) / Math.max(1, series.items.length - 1),
      y: yOf(it.t),
    })),
  );
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chọn dãy chất"
    {options}
    bind:value={id}
    onchange={() => (pick = null)}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label="Nhiệt độ sôi của {series.label}: {series.items
      .map((it) => `${prettyFormula(it.formula)} ${tempText(it.t)}`)
      .join(', ')}."
  >
    {#each GRID as t (t)}
      <line x1={LEFT} y1={yOf(t)} x2={RIGHT} y2={yOf(t)} stroke="#e2e8f0" />
      <text x={LEFT - 6} y={yOf(t) + 4} text-anchor="end" font-size="11" fill="#475569"
        >{t < 0 ? `${MINUS}${-t}` : t}</text
      >
    {/each}
    <text x="6" y="14" font-size="11" fill="#475569">°C</text>
    <polyline
      points={points.map((p) => `${p.x},${p.y}`).join(' ')}
      fill="none"
      stroke="#4f46e5"
      stroke-width="2.5"
    />
    {#each points as p (p.formula)}
      <circle cx={p.x} cy={p.y} r="5" fill="#4f46e5" />
      <text
        x={p.x}
        y={p.y - 10}
        text-anchor="middle"
        font-size="11"
        fill="#0f172a"
        stroke="#f8fafc"
        stroke-width="3"
        paint-order="stroke">{tempText(p.t).replace(' °C', '')}</text
      >
      <text x={p.x} y={H - 10} text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a"
        >{prettyFormula(p.formula)}</text
      >
    {/each}
  </svg>

  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Chất nào trong dãy có nhiệt độ sôi cao bất thường so với xu hướng chung?
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each series.items as it (it.formula)}
        <button
          type="button"
          class={pick === it.formula ? button.primary : button.secondary}
          aria-pressed={pick === it.formula}
          onclick={() => (pick = it.formula)}><ChemFormula formula={it.formula} /></button
        >
      {/each}
      <button
        type="button"
        class={pick === 'none' ? button.primary : button.secondary}
        aria-pressed={pick === 'none'}
        onclick={() => (pick = 'none')}>Không có chất nào</button
      >
    </div>
  </fieldset>

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {:else}
    <FeedbackNote tone="info" text="So sánh chất đầu tiên trong dãy với các chất còn lại." />
  {/if}
</div>
