<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { readNumber } from '#lib/core/decimal.js';
  import { formatNumber, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import LabGlassware from '#lib/domain/lab-glassware.svelte';
  import {
    ACID_VOLUME,
    BASE_CONCENTRATION,
    BENCH_ITEMS,
    DROP,
    SAMPLES,
    SLOTS,
    STAGE_COLORS,
    acidConcentration,
    benchReady,
    emptyBench,
    flaskFill,
    flaskPh,
    itemsLeft,
    meanOf,
    placeItem,
    titrationStage,
  } from './engine.js';

  const STEPS = [
    { amount: 5, label: '+ 5 mL' },
    { amount: 1, label: '+ 1 mL' },
    { amount: 0.1, label: '+ 0,1 mL' },
    { amount: DROP, label: '+ 1 giọt' },
  ];
  const MAX_TRIALS = 3;
  const CAPACITY = 50;
  const SAMPLE_OPTIONS = SAMPLES.map((s) => ({ value: s.id, label: s.label }));
  const DRAG_SLOP = 6;
  const FLASK = 'M 66 8 L 66 70 L 12 190 L 148 190 L 94 70 L 94 8 Z';
  const FLASK_BOTTOM = 190;
  const FLASK_HEIGHT = 182;
  const clipId = $props.id();

  let bench = $state(emptyBench());
  let message = $state('Kéo một vật lên đúng chỗ, hoặc chạm vật rồi chạm chỗ đặt.');
  let messageOk = $state(true);
  /** @type {string | null} */
  let chosen = $state(null);
  /** @type {{ id: string, x: number, y: number, startX: number, startY: number, moved: boolean } | null} */
  let dragging = $state(null);
  /**
   * A drag that ends on the shelf is followed by a click on the same button,
   * which must not also choose it. A placed item is gone, so its id never clicks.
   * @type {string | null}
   */
  let justDragged = null;

  let sampleId = $state('a');
  let added = $state(0);
  /** @type {Array<{ reading: number, past: boolean }>} */
  let trials = $state([]);
  let answer = $state('');
  let checked = $state(/** @type {null | 'ok' | 'bad' | 'invalid'} */ (null));

  const sample = $derived(SAMPLES.find((s) => s.id === sampleId) ?? SAMPLES[0]);
  const ready = $derived(benchReady(bench));
  const shelf = $derived(BENCH_ITEMS.filter((x) => bench[x.id] === undefined));
  const stage = $derived(titrationStage(sample.concentration, added));
  const ph = $derived(flaskPh(sample.concentration, added));
  const goodReadings = $derived(trials.filter((t) => !t.past).map((t) => t.reading));
  const mean = $derived(meanOf(goodReadings));
  const expected = $derived(mean === null ? null : acidConcentration(mean));

  const ml = (/** @type {number} */ v) => formatNumber(v, 2);

  const stageText = $derived.by(() => {
    if (stage === 'past') {
      return `Màu hồng đậm: đã quá điểm cuối, số đọc ${ml(added)} mL lớn hơn thể tích cần. Hãy làm lại lần mới, nhỏ từng giọt khi gần tới.`;
    }
    if (stage === 'end') {
      return `Màu hồng nhạt bền: đã đến điểm cuối ở ${ml(added)} mL. Hãy ghi số liệu.`;
    }
    return added === 0
      ? 'Bình không màu vì môi trường acid. Mở khoá burette để thêm NaOH.'
      : `Đã thêm ${ml(added)} mL, bình vẫn không màu. Tiếp tục lắc đều và nhỏ thêm.`;
  });

  /** @param {string} id @param {'stand' | 'bench'} slot */
  function put(id, slot) {
    const r = placeItem(bench, id, slot);
    bench = r.bench;
    messageOk = r.ok;
    message = benchReady(r.bench)
      ? 'Đã lắp xong. Bắt đầu chuẩn độ ở bên dưới.'
      : r.ok
        ? `${r.message} Còn ${itemsLeft(r.bench).length} vật cần đặt.`
        : r.message;
    chosen = null;
  }

  /** @param {PointerEvent} e @param {string} id */
  function grab(e, id) {
    dragging = {
      id,
      x: e.clientX,
      y: e.clientY,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
    /** @type {HTMLElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
  }

  /** @param {PointerEvent} e */
  function drag(e) {
    if (!dragging) return;
    const moved =
      dragging.moved ||
      Math.hypot(e.clientX - dragging.startX, e.clientY - dragging.startY) >= DRAG_SLOP;
    dragging = { ...dragging, x: e.clientX, y: e.clientY, moved };
  }

  /** @param {PointerEvent} e @param {string} id */
  function drop(e, id) {
    const wasDrag = dragging?.moved ?? false;
    dragging = null;
    if (!wasDrag) return;
    justDragged = id;
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const slot = under?.closest('[data-slot]')?.getAttribute('data-slot');
    if (slot === 'stand' || slot === 'bench') put(id, slot);
  }

  /** @param {string} id */
  function choose(id) {
    const fromDrag = justDragged === id;
    justDragged = null;
    if (!fromDrag) chosen = chosen === id ? null : id;
  }

  /** @param {'stand' | 'bench'} slot */
  function slotTap(slot) {
    if (chosen) put(chosen, slot);
  }

  /** @param {number} amount */
  function pour(amount) {
    added = Math.min(CAPACITY, tidy(added + amount, 2));
    checked = null;
  }

  function record() {
    if (stage === 'before' || trials.length >= MAX_TRIALS) return;
    trials = [...trials, { reading: added, past: stage === 'past' }];
    added = 0;
    checked = null;
  }

  function newSample() {
    added = 0;
    trials = [];
    answer = '';
    checked = null;
  }

  function check() {
    const v = readNumber(answer);
    if (v === null || expected === null) checked = 'invalid';
    else checked = Math.abs(v - expected) <= 0.002 ? 'ok' : 'bad';
  }

  const checkText = $derived.by(() => {
    if (checked === 'invalid') return 'Hãy nhập một số, ví dụ 0,1.';
    if (checked === 'bad') {
      return `Chưa đúng. Dùng $C_{HCl} = \\dfrac{C_{NaOH} \\cdot V_{NaOH}}{V_{HCl}}$ với $V_{NaOH}$ là thể tích trung bình.`;
    }
    return `Đúng. Mô phỏng đặt ${sample.label} ở ${formatNumber(sample.concentration, 2)} M; sai lệch đến từ giọt cuối cùng làm dung dịch đổi màu.`;
  });
</script>

<div class="space-y-4">
  <section class="space-y-2" aria-label="Lắp dụng cụ và lấy hoá chất">
    <h4 class="text-sm font-semibold text-slate-700">Bước 1. Lắp dụng cụ và lấy hoá chất</h4>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Kệ dụng cụ và hoá chất">
      {#each shelf as item (item.id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border bg-white px-3 py-2 text-sm font-semibold select-none {focusRing} {chosen ===
          item.id
            ? 'border-indigo-600 text-indigo-800 ring-2 ring-indigo-200'
            : 'border-slate-300 text-slate-700'}"
          style:touch-action="none"
          aria-pressed={chosen === item.id}
          onpointerdown={(e) => grab(e, item.id)}
          onpointermove={drag}
          onpointerup={(e) => drop(e, item.id)}
          onpointercancel={() => (dragging = null)}
          onclick={() => choose(item.id)}
        >
          {item.label}
        </button>
      {/each}
    </div>
    <div class="grid gap-2 sm:grid-cols-2">
      {#each SLOTS as slot (slot.id)}
        <button
          type="button"
          data-slot={slot.id}
          class="min-h-20 rounded-xl border-2 border-dashed p-3 text-left text-sm {focusRing} {chosen
            ? 'border-indigo-400 bg-indigo-50'
            : 'border-slate-300 bg-slate-50'}"
          aria-label="Đặt vào: {slot.label}"
          onclick={() => slotTap(slot.id)}
        >
          <span class="block font-semibold text-slate-700">{slot.label}</span>
          <span class="block text-slate-600">
            {BENCH_ITEMS.filter((x) => bench[x.id] === slot.id)
              .map((x) => x.label)
              .join(' · ') || 'Còn trống'}
          </span>
        </button>
      {/each}
    </div>
    <FeedbackNote tone={messageOk ? 'info' : 'warn'} text={message} />
  </section>

  {#if dragging?.moved}
    <div
      class="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow"
      style:left="{dragging.x}px"
      style:top="{dragging.y}px"
      aria-hidden="true"
    >
      {BENCH_ITEMS.find((x) => x.id === dragging?.id)?.label}
    </div>
  {/if}

  {#if ready}
    <section class="space-y-3" aria-label="Chuẩn độ">
      <h4 class="text-sm font-semibold text-slate-700">Bước 2. Chuẩn độ</h4>
      <SegmentedControl
        label="Mẫu HCl chưa biết nồng độ"
        options={SAMPLE_OPTIONS}
        bind:value={sampleId}
        onchange={newSample}
      />
      <div class="grid grid-cols-2 items-end gap-2">
        <LabGlassware
          vessel="burette"
          volume={added}
          liquid="#bfdbfe"
          reading={false}
          label="Burette chứa NaOH"
        />
        <figure class="text-center">
          <svg
            viewBox="0 0 160 200"
            class="mx-auto block w-full max-w-[9rem]"
            role="img"
            aria-label="Bình tam giác chứa HCl và phenolphthalein, {stage === 'before'
              ? 'không màu'
              : stage === 'end'
                ? 'màu hồng nhạt'
                : 'màu hồng đậm'}"
          >
            <clipPath id={clipId}>
              <path d={FLASK} />
            </clipPath>
            <rect
              x="0"
              y={FLASK_BOTTOM - FLASK_HEIGHT * flaskFill(added)}
              width="160"
              height={FLASK_HEIGHT * flaskFill(added)}
              fill={STAGE_COLORS[stage]}
              clip-path="url(#{clipId})"
            />
            <path d={FLASK} fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round" />
          </svg>
          <figcaption class="text-xs font-semibold text-slate-700">Bình tam giác</figcaption>
        </figure>
      </div>
      <p class="text-center text-sm font-semibold text-slate-700 tabular-nums" aria-live="polite">
        NaOH đã dùng: {ml(added)} mL · pH ≈ {formatNumber(ph, 1)}
      </p>
      <div class="flex flex-wrap gap-2">
        {#each STEPS as s (s.label)}
          <button
            type="button"
            class={button.secondary}
            disabled={added >= CAPACITY}
            onclick={() => pour(s.amount)}
          >
            {s.label}
          </button>
        {/each}
      </div>
      <FeedbackNote
        tone={stage === 'past' ? 'warn' : stage === 'end' ? 'ok' : 'info'}
        text={stageText}
      />
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.primary}
          disabled={stage === 'before' || trials.length >= MAX_TRIALS}
          onclick={record}
        >
          Ghi số liệu, làm lần mới
        </button>
        <button type="button" class={button.quiet} onclick={newSample}>Xoá số liệu</button>
      </div>
    </section>

    {#if trials.length > 0}
      <section class="space-y-2" aria-label="Ghi nhận và báo cáo">
        <h4 class="text-sm font-semibold text-slate-700">Bước 3. Ghi nhận và báo cáo</h4>
        <table class="w-full text-sm">
          <thead>
            <tr class="text-left text-slate-600">
              <th class="py-1 pr-2 font-semibold">Lần</th>
              <th class="py-1 pr-2 font-semibold">Thể tích NaOH (mL)</th>
              <th class="py-1 font-semibold">Đánh giá</th>
            </tr>
          </thead>
          <tbody class="tabular-nums">
            {#each trials as t, i (i)}
              <tr class="border-t border-slate-200">
                <td class="py-1 pr-2">{i + 1}</td>
                <td class="py-1 pr-2">{ml(t.reading)}</td>
                <td class="py-1">{t.past ? 'Quá điểm cuối, loại' : 'Dùng được'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if mean === null}
          <FeedbackNote
            tone="warn"
            text="Chưa có lần đo nào dùng được. Hãy nhỏ từng giọt khi gần tới điểm cuối."
          />
        {:else}
          <p class="text-sm text-slate-700">
            Thể tích trung bình: {ml(mean)} mL. Biết thể tích HCl là {ACID_VOLUME} mL, NaOH {formatNumber(
              BASE_CONCENTRATION,
              1,
            )} M, nồng độ HCl bằng bao nhiêu mol/L?
          </p>
          <div class="flex flex-wrap items-center gap-2">
            <input
              class="{textInput} max-w-40"
              inputmode="decimal"
              aria-label="Nồng độ HCl tính được, mol/L"
              bind:value={answer}
            />
            <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
          </div>
          {#if checked}
            <FeedbackNote tone={checked === 'ok' ? 'ok' : 'warn'} text={checkText} />
          {/if}
        {/if}
      </section>
    {/if}
  {/if}
</div>
