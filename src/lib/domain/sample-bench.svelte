<script>
  import { untrack } from 'svelte';
  import { rng } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import EquationLine from './equation-line.svelte';
  import TestTube from './test-tube.svelte';

  /**
   * What a test shows in the tube.
   * @typedef {{ text: string, liquid: string, precipitate?: string | null, amount?: number, equation?: string | null }} Observation
   */

  /**
   * A bench for telling unknown samples apart with reagents in a test tube:
   * the learner picks a sample and a reagent, runs the test, reads what
   * happens in the tube and in a results table, names every sample and checks.
   * "Bộ mẫu mới" deals the samples again. The lesson keeps the chemistry.
   *
   * - `labels`: the sample labels in order (X1…X5 or A…D); `sampleWord`
   *   prefixes them in the controls ("Mẫu A").
   * - `samples`: the substances to choose from, with an optional `state`
   *   shown in its own column when `showState`.
   * - `reagents`: each with its colour, and a precipitate shown before a test.
   * - `deal(rand)`: the sample id under each label; `observe(id, reagent)`:
   *   what the tube shows (`text`, `liquid`, `precipitate`, `amount`,
   *   `equation` shown once every sample is named right).
   * - `intro`, `solvedText(tested)` and `wrongText(right)`: the notes.
   * @type {{
   *   labels: string[];
   *   sampleWord?: string;
   *   samples: ReadonlyArray<{ id: string, name: string, state?: string }>;
   *   reagents: ReadonlyArray<{ id: string, name: string, liquid: string, precipitate?: string | null }>;
   *   deal: (rand: () => number) => string[];
   *   observe: (id: any, reagent: any) => Observation;
   *   intro: string;
   *   solvedText: (tested: number) => string;
   *   wrongText: (right: number) => string;
   *   firstReagent?: string;
   *   seed?: number;
   *   showState?: boolean;
   * }}
   */
  let {
    labels,
    sampleWord = '',
    samples,
    reagents,
    deal,
    observe,
    intro,
    solvedText,
    wrongText,
    firstReagent,
    seed: firstSeed = 1,
    showState = false,
  } = $props();

  const named = (/** @type {string} */ l) => (sampleWord ? `${sampleWord} ${l}` : l);
  const blank = () => labels.map(() => '');

  let seed = $state(untrack(() => firstSeed));
  let sampleIndex = $state(0);
  let reagentId = $state(untrack(() => firstReagent ?? reagents[0].id));
  let drip = $state(0);
  let current = $state(/** @type {Observation | null} */ (null));
  let log = $state(/** @type {Record<string, string>} */ ({}));
  let guesses = $state(untrack(blank));
  let checked = $state(false);
  let solved = $state(false);
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: untrack(() => intro),
    }),
  );

  const sampleOptions = $derived(labels.map((l, i) => ({ value: i, label: named(l) })));
  const reagentOptions = $derived(reagents.map((r) => ({ value: r.id, label: r.name })));
  const dealt = $derived(deal(rng(seed)));
  const reagent = $derived(reagents.find((r) => r.id === reagentId) ?? reagents[0]);
  const tested = $derived(Object.keys(log).length);
  const stateOf = (/** @type {string} */ id) => samples.find((s) => s.id === id)?.state ?? '';

  function run() {
    const obs = observe(dealt[sampleIndex], reagentId);
    current = obs;
    drip += 1;
    log = { ...log, [`${sampleIndex}:${reagentId}`]: obs.text };
    checked = false;
    note = { tone: 'info', text: `${named(labels[sampleIndex])} + ${reagent.name}: ${obs.text}.` };
  }

  function clearTube() {
    current = null;
  }

  function newSet() {
    seed += 1;
    current = null;
    log = {};
    guesses = blank();
    checked = false;
    solved = false;
    note = { tone: 'info', text: 'Đã đổi bộ mẫu. Bảng kết quả được xoá, hãy làm lại thí nghiệm.' };
  }

  function check() {
    if (guesses.some((g) => !g)) {
      note = { tone: 'warn', text: 'Hãy chọn tên chất cho tất cả các mẫu trước khi kiểm tra.' };
      return;
    }
    checked = true;
    const right = guesses.filter((g, i) => g === dealt[i]).length;
    solved = right === labels.length;
    note = solved
      ? { tone: 'ok', text: solvedText(tested) }
      : { tone: 'warn', text: wrongText(right) };
  }

  const tubeLabel = $derived(
    current
      ? `Ống nghiệm: ${named(labels[sampleIndex])} với ${reagent.name}, ${current.text}`
      : `Ống nghiệm chứa ${reagent.name}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Mẫu thử"
    options={sampleOptions}
    bind:value={sampleIndex}
    onchange={clearTube}
  />
  <SegmentedControl
    label="Thuốc thử"
    options={reagentOptions}
    bind:value={reagentId}
    onchange={clearTube}
  />

  <div class="flex items-center gap-4">
    <div class="w-20 shrink-0">
      <TestTube
        liquid={current ? current.liquid : reagent.liquid}
        precipitate={current ? (current.precipitate ?? null) : (reagent.precipitate ?? null)}
        amount={current
          ? (current.amount ?? (current.precipitate ? 0.6 : 0))
          : reagent.precipitate
            ? 0.4
            : 0}
        {drip}
        label={tubeLabel}
      />
    </div>
    <div class="min-w-0 space-y-2">
      <button type="button" class={button.primary} onclick={run}>Làm thí nghiệm</button>
      {#if showState}
        <p class="text-sm text-slate-600">
          Trạng thái của {named(labels[sampleIndex])}: {stateOf(dealt[sampleIndex])}
        </p>
      {/if}
      {#if solved && current?.equation}
        <p class="overflow-x-auto text-base"><EquationLine text={current.equation} /></p>
      {/if}
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="overflow-x-auto rounded-xl border border-slate-200">
    <table class="w-full min-w-[34rem] text-left text-sm">
      <caption class="sr-only">Bảng kết quả thí nghiệm và tên chất dự đoán</caption>
      <thead class="bg-slate-50 text-slate-700">
        <tr>
          <th scope="col" class="px-2 py-2">Mẫu</th>
          {#if showState}<th scope="col" class="px-2 py-2">Trạng thái</th>{/if}
          {#each reagents as r (r.id)}
            <th scope="col" class="px-2 py-2">{r.name}</th>
          {/each}
          <th scope="col" class="px-2 py-2">Chất</th>
        </tr>
      </thead>
      <tbody>
        {#each labels as label, i (label)}
          {@const wrong = checked && guesses[i] !== dealt[i]}
          <tr class="border-t border-slate-200 {wrong ? 'bg-amber-50' : ''}">
            <th scope="row" class="px-2 py-2 font-semibold">{label}</th>
            {#if showState}<td class="px-2 py-2">{stateOf(dealt[i])}</td>{/if}
            {#each reagents as r (r.id)}
              <td class="px-2 py-2 text-slate-700">{log[`${i}:${r.id}`] ?? '—'}</td>
            {/each}
            <td class="px-2 py-2">
              <select
                class="min-h-11 rounded-lg border border-slate-300 bg-white px-2 {focusRing}"
                aria-label="Tên chất của mẫu {label}"
                aria-invalid={wrong}
                bind:value={guesses[i]}
                onchange={() => (checked = false)}
              >
                <option value="">Chọn…</option>
                {#each samples as s (s.id)}
                  <option value={s.id}>{s.name}</option>
                {/each}
              </select>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={newSet}>Bộ mẫu mới</button>
  </div>
</div>
