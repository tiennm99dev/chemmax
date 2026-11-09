<script>
  import { rng } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';

  /** @typedef {import('./engine.js').SampleId} SampleId */
  /** @typedef {import('./engine.js').ReagentId} ReagentId */

  const LABELS = ['X1', 'X2', 'X3', 'X4', 'X5'];
  const SAMPLE_OPTIONS = LABELS.map((l, i) => ({ value: i, label: l }));
  const REAGENT_OPTIONS = REAGENTS.map((r) => ({ value: r.id, label: r.name }));

  let seed = $state(4);
  let sampleIndex = $state(0);
  let reagentId = $state(/** @type {ReagentId} */ ('bromine'));
  let drip = $state(0);
  let current = $state(/** @type {import('./engine.js').Observation | null} */ (null));
  let log = $state(/** @type {Record<string, string>} */ ({}));
  let guesses = $state(/** @type {string[]} */ (['', '', '', '', '']));
  let checked = $state(false);
  let note = $state(
    /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */ ({
      tone: 'info',
      text: 'Năm mẫu X1 đến X5 là methane, ethylene, acetylene, benzene và toluene, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm "Làm thí nghiệm".',
    }),
  );

  const dealt = $derived(dealSamples(rng(seed)));
  const reagent = $derived(REAGENTS.find((r) => r.id === reagentId) ?? REAGENTS[0]);

  function run() {
    const obs = observe(dealt[sampleIndex], reagentId);
    current = obs;
    drip += 1;
    log = { ...log, [`${sampleIndex}:${reagentId}`]: obs.text };
    checked = false;
    note = { tone: 'info', text: `${LABELS[sampleIndex]} + ${reagent.name}: ${obs.text}.` };
  }

  function clearTube() {
    current = null;
  }

  function newSet() {
    seed += 1;
    current = null;
    log = {};
    guesses = ['', '', '', '', ''];
    checked = false;
    note = { tone: 'info', text: 'Đã đổi bộ mẫu. Bảng kết quả được xoá, hãy làm lại thí nghiệm.' };
  }

  function check() {
    if (guesses.some((g) => !g)) {
      note = { tone: 'warn', text: 'Hãy chọn tên chất cho cả năm mẫu trước khi kiểm tra.' };
      return;
    }
    checked = true;
    const right = guesses.filter((g, i) => g === dealt[i]).length;
    note =
      right === LABELS.length
        ? {
            tone: 'ok',
            text: 'Đúng cả năm mẫu. Thứ tự gọn nhất: $\\mathrm{AgNO_3/NH_3}$ tìm acetylene, nước bromine tìm ethylene, $\\mathrm{KMnO_4}$ đun nóng tìm toluene; còn lại khí là methane, lỏng là benzene.',
          }
        : {
            tone: 'warn',
            text: `Đúng ${right}/5 mẫu. Các mẫu sai được đánh dấu; xem lại hiện tượng trong bảng và trạng thái của từng mẫu.`,
          };
  }

  const tubeLabel = $derived(
    current
      ? `Ống nghiệm: ${LABELS[sampleIndex]} với ${reagent.name}, ${current.text}`
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
        precipitate={current?.precipitate ?? null}
        amount={current?.precipitate ? 0.6 : 0}
        {drip}
        label={tubeLabel}
      />
    </div>
    <div class="space-y-2">
      <button type="button" class={button.primary} onclick={run}>Làm thí nghiệm</button>
      <p class="text-sm text-slate-600">
        Trạng thái của {LABELS[sampleIndex]}: {SAMPLES.find((s) => s.id === dealt[sampleIndex])
          ?.state}
      </p>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="overflow-x-auto rounded-xl border border-slate-200">
    <table class="w-full min-w-[34rem] text-left text-sm">
      <caption class="sr-only">Bảng kết quả thí nghiệm và tên chất dự đoán</caption>
      <thead class="bg-slate-50 text-slate-700">
        <tr>
          <th scope="col" class="px-2 py-2">Mẫu</th>
          <th scope="col" class="px-2 py-2">Trạng thái</th>
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
            <td class="px-2 py-2">{SAMPLES.find((s) => s.id === dealt[i])?.state}</td>
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
