<script>
  import { untrack } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import TestTube from './test-tube.svelte';

  /**
   * What a test tube shows. `text` and `why` are rich text, `short` a few
   * plain words for the results table and the tube's spoken name, `reacts`
   * marks a change the eye can see; `tex` is the equation, if any.
   * @typedef {{ text: string, short: string, why: string, liquid: string, precipitate: string | null, amount: number, reacts: boolean, tex: string | null }} Observation
   */

  /**
   * A test-tube bench for known substances: pick a substance and a reagent,
   * run the test, read what happens and why, and fill a results table. The
   * lesson keeps the chemistry.
   *
   * - `substances`: the substance ids on the bench, in order;
   *   `substanceOf(id)` gives its `name` and `formula` (rich text).
   * - `reagentTable`: every reagent of the chapter with its colour and a
   *   precipitate shown before a test; `reagents`: the ids offered (shown in
   *   table order, the first one listed is picked at the start).
   * - `observe(substance, reagent)`: what the tube shows.
   * - `intro`: the first note.
   * @type {{
   *   substances: string[];
   *   substanceOf: (id: any) => { name: string, formula: string };
   *   reagentTable: ReadonlyArray<{ id: string, name: string, liquid: string, precipitate?: string | null }>;
   *   reagents: string[];
   *   observe: (id: any, reagent: any) => Observation;
   *   intro: string;
   * }}
   */
  let { substances, substanceOf, reagentTable, reagents, observe, intro } = $props();

  let substanceId = $state(untrack(() => substances[0]));
  let reagentId = $state(untrack(() => reagents[0]));
  let drip = $state(0);
  let current = $state(/** @type {Observation | null} */ (null));
  let log = $state(/** @type {Record<string, { reacts: boolean, short: string }>} */ ({}));
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: untrack(() => intro),
    }),
  );

  const offered = $derived(reagentTable.filter((r) => reagents.includes(r.id)));
  const reagent = $derived(offered.find((r) => r.id === reagentId) ?? offered[0]);
  const s = $derived(substanceOf(substanceId));

  function run() {
    const obs = observe(substanceId, reagentId);
    current = obs;
    drip += 1;
    log = { ...log, [`${substanceId}:${reagentId}`]: { reacts: obs.reacts, short: obs.short } };
    note = {
      tone: obs.reacts ? 'ok' : 'info',
      text: `${s.name} + ${reagent.name}: ${obs.text}. ${obs.why}`,
    };
  }

  function clearTube() {
    current = null;
  }

  const tubeLabel = $derived(
    current
      ? `Ống nghiệm: ${s.name} với ${reagent.name}, ${current.short}`
      : `Ống nghiệm chứa ${s.name}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chất thử"
    options={substances.map((id) => ({ value: id, label: substanceOf(id).name }))}
    bind:value={substanceId}
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
        Ống nghiệm: {s.name} (<LiveRichText text={s.formula} />) và {reagent.name}.
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
        {#each substances as id (id)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="px-2 py-2 font-semibold">{substanceOf(id).name}</th>
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
