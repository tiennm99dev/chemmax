<script>
  import { untrack } from 'svelte';
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { REAGENTS, observe, reason, sugar } from './sugars.js';

  /**
   * A test-tube bench for the carbohydrates of the chapter: pick a substance
   * and a reagent, run the test, read what happens and why, and fill a
   * results table. The chemistry lives in sugars.js.
   *
   * - `sugars`: the substances on the bench, in order.
   * - `reagents`: the reagents offered (all of them by default).
   * - `intro`: the first note.
   * @type {{
   *   sugars: import('./sugars.js').SugarId[];
   *   reagents?: import('./sugars.js').ReagentId[];
   *   intro: string;
   * }}
   */
  let { sugars, reagents = REAGENTS.map((r) => r.id), intro } = $props();

  let sugarId = $state(untrack(() => sugars[0]));
  let reagentId = $state(untrack(() => reagents[0]));
  let drip = $state(0);
  let current = $state(/** @type {import('./sugars.js').Observation | null} */ (null));
  let log = $state(/** @type {Record<string, { reacts: boolean, short: string }>} */ ({}));
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: untrack(() => intro),
    }),
  );

  const offered = $derived(REAGENTS.filter((r) => reagents.includes(r.id)));
  const reagent = $derived(offered.find((r) => r.id === reagentId) ?? offered[0]);
  const s = $derived(sugar(sugarId));

  function run() {
    const obs = observe(sugarId, reagentId);
    current = obs;
    drip += 1;
    log = { ...log, [`${sugarId}:${reagentId}`]: { reacts: obs.reacts, short: obs.short } };
    note = {
      tone: obs.reacts ? 'ok' : 'info',
      text: `${s.name} + ${reagent.name}: ${obs.text}. ${reason(sugarId, reagentId)}`,
    };
  }

  function clearTube() {
    current = null;
  }

  const tubeLabel = $derived(
    current
      ? `Ống nghiệm: ${s.name} với ${reagent.name}, ${current.text.replace(/\$[^$]*\$/g, '').trim()}`
      : `Ống nghiệm chứa ${s.name}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chất thử"
    options={sugars.map((id) => ({ value: id, label: sugar(id).name }))}
    bind:value={sugarId}
    onchange={clearTube}
  />
  <SegmentedControl
    label="Thuốc thử"
    options={offered.map((r) => ({ value: r.id, label: r.name }))}
    bind:value={reagentId}
    onchange={clearTube}
  />

  <div class="flex items-center gap-4">
    <div class="w-20 shrink-0">
      <TestTube
        liquid={current ? current.liquid : reagent.liquid}
        precipitate={current ? current.precipitate : (reagent.precipitate ?? null)}
        amount={current ? current.amount : reagent.precipitate ? 0.4 : 0}
        {drip}
        label={tubeLabel}
      />
    </div>
    <div class="min-w-0 space-y-2">
      <p class="text-sm text-slate-700">
        Ống nghiệm: {s.name} (<Tex math={`\\mathrm{${s.formula}}`} />) và {reagent.name}.
      </p>
      <button type="button" class={button.primary} onclick={run}>Làm thí nghiệm</button>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if current?.tex}
    <div class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-sm">
      <Tex math={current.tex} display />
    </div>
  {/if}

  <div class="overflow-x-auto rounded-xl border border-slate-200">
    <table class="w-full min-w-[30rem] text-left text-sm">
      <caption class="sr-only">Bảng kết quả các thí nghiệm đã làm</caption>
      <thead class="bg-slate-50 text-slate-700">
        <tr>
          <th scope="col" class="px-2 py-2">Chất</th>
          {#each offered as r (r.id)}
            <th scope="col" class="px-2 py-2">{r.name}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each sugars as id (id)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="px-2 py-2 font-semibold">{sugar(id).name}</th>
            {#each offered as r (r.id)}
              {@const seen = log[`${id}:${r.id}`]}
              <td
                class="px-2 py-2 {seen?.reacts
                  ? 'font-semibold text-emerald-700'
                  : 'text-slate-600'}"
              >
                {seen ? seen.short : '—'}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
