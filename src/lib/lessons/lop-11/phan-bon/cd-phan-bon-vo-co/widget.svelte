<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    NUTRIENTS,
    NUTRIENT_TEX,
    NUTRIENT_TEXT,
    PLANS,
    PRODUCTS,
    fertiliserFor,
    planFeedback,
    supplied,
    verdict,
  } from './engine.js';

  const PLAN_OPTIONS = PLANS.map((p) => ({ value: p.id, label: p.name }));
  /** @type {Record<string, string>} */
  const BAR = { short: 'bg-amber-400', ok: 'bg-emerald-500', over: 'bg-rose-500' };
  /** @type {Record<string, string>} */
  const WORD = { short: 'thiếu', ok: 'đủ', over: 'thừa' };

  let planId = $state('lua');
  /** @type {Record<string, number>} */
  let masses = $state(Object.fromEntries(PRODUCTS.map((p) => [p.id, 0])));
  let showHow = $state(false);

  const plan = $derived(PLANS.find((p) => p.id === planId) ?? PLANS[0]);
  const needText = $derived(
    NUTRIENTS.map((k) => `$${numTex(plan.need[k])}$ kg $${NUTRIENT_TEX[k]}$`).join(', ') + '.',
  );
  const got = $derived(supplied(masses));
  const feedback = $derived(planFeedback(got, plan.need, (v) => formatNumber(v)));
  const total = $derived(PRODUCTS.reduce((s, p) => s + (masses[p.id] ?? 0), 0));
  /** Scale of the bars: the larger of the need and the supply, plus room. */
  const scale = $derived(Math.max(...NUTRIENTS.map((k) => Math.max(plan.need[k], got[k]))) * 1.15);
  /**
   * One line of the worked calculation with a straight fertiliser.
   * @param {string} name TeX subscript of the fertiliser
   * @param {number} need kg of nutrient
   * @param {number} grade percent
   */
  function howLine(name, need, grade) {
    const exact = fertiliserFor(need, grade);
    const shown = tidy(exact, 1);
    const sign = shown === exact ? '=' : '\\approx';
    return `$m_{${name}} = \\dfrac{${numTex(need)} \\cdot 100}{${grade}} ${sign} ${numTex(shown)}$ kg`;
  }
  const how = $derived([
    howLine('\\text{urea}', plan.need.N, 46),
    howLine('\\text{supe}', plan.need.P2O5, 16),
    howLine('\\mathrm{KCl}', plan.need.K2O, 60),
  ]);

  function reset() {
    for (const p of PRODUCTS) masses[p.id] = 0;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Cây trồng (nhu cầu cho 1 ha)"
    options={PLAN_OPTIONS}
    bind:value={planId}
  />
  <p class="text-sm text-slate-700">
    Cần bón: <LiveRichText text={needText} />
  </p>

  <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
    {#each NUTRIENTS as k (k)}
      {@const v = verdict(got[k], plan.need[k])}
      <div>
        <div class="flex justify-between text-sm">
          <span class="font-semibold"><LiveRichText text={`$${NUTRIENT_TEX[k]}$`} /></span>
          <span class="tabular-nums text-slate-700"
            >{formatNumber(got[k], 1)} / {formatNumber(plan.need[k])} kg · {WORD[v]}</span
          >
        </div>
        <div
          class="relative mt-0.5 h-4 rounded bg-slate-100"
          role="img"
          aria-label="{NUTRIENT_TEXT[k]}: đã có {formatNumber(got[k], 1)} kg trên {formatNumber(
            plan.need[k],
          )} kg cần, {WORD[v]}"
        >
          <div
            class="absolute inset-y-0 left-0 rounded {BAR[v]}"
            style:width="{Math.min(100, (got[k] / scale) * 100)}%"
          ></div>
          <div
            class="absolute inset-y-[-3px] w-0.5 bg-slate-900"
            style:left="{(plan.need[k] / scale) * 100}%"
          ></div>
        </div>
      </div>
    {/each}
    <p class="text-xs text-slate-500">
      Vạch đen là nhu cầu của cây. Tổng lượng phân: {formatNumber(total)} kg.
    </p>
  </div>

  <FeedbackNote tone={feedback.done ? 'ok' : 'info'} text={feedback.text} />

  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    {#each PRODUCTS as p (p.id)}
      <SliderField
        label={p.name}
        bind:value={masses[p.id]}
        min={0}
        max={p.max}
        step={5}
        unit="kg"
      />
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={reset}>Đặt lại</button>
    <button
      type="button"
      class={button.secondary}
      aria-expanded={showHow}
      onclick={() => (showHow = !showHow)}
      >{showHow ? 'Ẩn cách tính' : 'Xem cách tính với phân đơn'}</button
    >
  </div>
  {#if showHow}
    <ul class="list-disc space-y-1 pl-5 text-sm text-slate-700">
      {#each how as line (line)}
        <li><LiveRichText text={line} /></li>
      {/each}
    </ul>
  {/if}
</div>
