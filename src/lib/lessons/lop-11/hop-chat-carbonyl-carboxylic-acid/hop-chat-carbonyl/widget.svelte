<script>
  import { rng } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';

  /** @typedef {import('./engine.js').ReagentId} ReagentId */

  const LABELS = ['A', 'B', 'C', 'D'];
  const SAMPLE_OPTIONS = LABELS.map((l, i) => ({ value: i, label: `Mẫu ${l}` }));
  const REAGENT_OPTIONS = REAGENTS.map((r) => ({ value: r.id, label: r.name }));

  let seed = $state(3);
  let sampleIndex = $state(0);
  let reagentId = $state(/** @type {ReagentId} */ ('tollens'));
  let drip = $state(0);
  let current = $state(/** @type {import('./engine.js').Observation | null} */ (null));
  let log = $state(/** @type {Record<string, string>} */ ({}));
  let guesses = $state(/** @type {string[]} */ (['', '', '', '']));
  let checked = $state(false);
  let solved = $state(false);
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: 'Bốn mẫu A đến D là acetaldehyde, propanal, acetone và pentan-3-one, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm "Làm thí nghiệm".',
    }),
  );

  const dealt = $derived(dealSamples(rng(seed)));
  const reagent = $derived(REAGENTS.find((r) => r.id === reagentId) ?? REAGENTS[0]);
  const tested = $derived(Object.keys(log).length);

  function run() {
    const obs = observe(dealt[sampleIndex], reagentId);
    current = obs;
    drip += 1;
    log = { ...log, [`${sampleIndex}:${reagentId}`]: obs.text };
    checked = false;
    note = {
      tone: 'info',
      text: `Mẫu ${LABELS[sampleIndex]} + ${reagent.name}: ${obs.text}.`,
    };
  }

  function clearTube() {
    current = null;
  }

  function newSet() {
    seed += 1;
    current = null;
    log = {};
    guesses = ['', '', '', ''];
    checked = false;
    solved = false;
    note = { tone: 'info', text: 'Đã đổi bộ mẫu. Bảng kết quả được xoá, hãy làm lại thí nghiệm.' };
  }

  function check() {
    if (guesses.some((g) => !g)) {
      note = { tone: 'warn', text: 'Hãy chọn tên chất cho cả bốn mẫu trước khi kiểm tra.' };
      return;
    }
    checked = true;
    const right = guesses.filter((g, i) => g === dealt[i]).length;
    if (right === LABELS.length) {
      solved = true;
      note = {
        tone: 'ok',
        text:
          tested <= 8
            ? `Đúng cả bốn mẫu sau ${tested} thí nghiệm. Thuốc thử Tollens tách aldehyde khỏi ketone, phản ứng iodoform tìm ra chất có nhóm $\\mathrm{CH_3CO{-}}$. Làm lại thí nghiệm để xem phương trình.`
            : `Đúng cả bốn mẫu, nhưng dùng tới ${tested} thí nghiệm. Chỉ cần Tollens và $\\mathrm{I_2/NaOH}$: hai phép thử đủ phân biệt bốn chất. Làm lại thí nghiệm để xem phương trình.`,
      };
    } else {
      note = {
        tone: 'warn',
        text: `Đúng ${right}/4 mẫu. Các mẫu sai được đánh dấu. Aldehyde cho kết quả dương tính với Tollens; chất có nhóm $\\mathrm{CH_3CO{-}}$ cho kết tủa vàng với $\\mathrm{I_2/NaOH}$.`,
      };
    }
  }

  const tubeLabel = $derived(
    current
      ? `Ống nghiệm: mẫu ${LABELS[sampleIndex]} với ${reagent.name}, ${current.text}`
      : `Ống nghiệm chứa ${reagent.name}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Mẫu thử"
    options={SAMPLE_OPTIONS}
    bind:value={sampleIndex}
    onchange={clearTube}
  />
  <SegmentedControl
    label="Thuốc thử"
    options={REAGENT_OPTIONS}
    bind:value={reagentId}
    onchange={clearTube}
  />

  <div class="flex items-center gap-4">
    <div class="w-20 shrink-0">
      <TestTube
        liquid={current ? current.liquid : reagent.liquid}
        precipitate={current ? current.precipitate : reagent.precipitate}
        amount={current ? current.amount : reagent.precipitate ? 0.4 : 0}
        {drip}
        label={tubeLabel}
      />
    </div>
    <div class="min-w-0 space-y-2">
      <button type="button" class={button.primary} onclick={run}>Làm thí nghiệm</button>
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
          {#each REAGENTS as r (r.id)}
            <th scope="col" class="px-2 py-2">{r.name}</th>
          {/each}
          <th scope="col" class="px-2 py-2">Chất</th>
        </tr>
      </thead>
      <tbody>
        {#each LABELS as label, i (label)}
          {@const wrong = checked && guesses[i] !== dealt[i]}
          <tr class="border-t border-slate-200 {wrong ? 'bg-amber-50' : ''}">
            <th scope="row" class="px-2 py-2 font-semibold">{label}</th>
            {#each REAGENTS as r (r.id)}
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
                {#each SAMPLES as s (s.id)}
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
