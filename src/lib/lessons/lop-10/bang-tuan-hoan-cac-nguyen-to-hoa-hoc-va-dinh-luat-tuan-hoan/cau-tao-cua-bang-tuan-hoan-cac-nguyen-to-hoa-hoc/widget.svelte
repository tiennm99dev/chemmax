<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import PeriodicTable from '#lib/domain/periodic-table.svelte';
  import { LAST_Z, challengeOrder, judgeTap, place } from './engine.js';

  const MODES = [
    { value: 'explore', label: 'Đọc vị trí' },
    { value: 'find', label: 'Tìm ô nguyên tố' },
  ];
  const ORDER = challengeOrder();

  let mode = $state('explore');
  /** @type {import('#lib/domain/periodic-table.js').ColorMode} */
  let colorBy = $state('block');
  /** @type {number | null} */
  let selected = $state(16);
  let round = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let score = $state(0);
  let tries = $state(0);
  let firstTry = $state(true);

  const reading = $derived(selected === null ? null : place(selected));
  const target = $derived(/** @type {import('./engine.js').Placement} */ (place(ORDER[round])));

  /** @param {number} z */
  function onselect(z) {
    if (mode !== 'find' || verdict?.ok) return;
    verdict = judgeTap(target.z, z);
    if (firstTry) {
      tries += 1;
      if (verdict.ok) score += 1;
    }
    firstTry = verdict.ok;
  }

  function next() {
    round = (round + 1) % ORDER.length;
    verdict = null;
    firstTry = true;
    selected = null;
  }

  /** @param {string | number} value */
  function switchMode(value) {
    verdict = null;
    firstTry = true;
    selected = value === 'find' ? null : 16;
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Hoạt động" options={MODES} bind:value={mode} onchange={switchMode} />

  {#if mode === 'find'}
    <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <p class="font-semibold text-indigo-900">
        Tìm nguyên tố ở chu kì {target.period}, nhóm {target.group}.
      </p>
      <p class="mt-1 text-sm text-indigo-800">
        Chu kì là hàng (đếm từ trên xuống), nhóm là cột. Bấm vào ô em chọn.
      </p>
    </div>
  {/if}

  <PeriodicTable
    bind:selected
    bind:colorBy
    details={mode === 'explore'}
    {onselect}
    label="Bảng tuần hoàn: chọn một nguyên tố"
  />

  {#if mode === 'explore'}
    <div class="rounded-xl border border-slate-200 p-4" aria-live="polite">
      <h3 class="font-semibold text-slate-800">Từ cấu hình electron suy ra vị trí</h3>
      {#if reading}
        <ol class="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          {#each reading.steps as step, i (i)}
            <li>{step}</li>
          {/each}
        </ol>
      {:else}
        <p class="mt-2 text-sm text-slate-600">
          Chọn một nguyên tố từ ô số 1 đến ô số {LAST_Z} (chu kì 1 – 4) để xem cách suy ra chu kì, khối
          và nhóm từ cấu hình electron.
        </p>
      {/if}
    </div>
  {:else}
    {#if verdict}
      <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
    {:else}
      <FeedbackNote tone="info" text="Chưa chọn ô nào." />
    {/if}
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class={button.secondary} onclick={next}>
        {verdict?.ok ? 'Câu tiếp theo' : 'Bỏ qua, câu khác'}
      </button>
      <p class="text-sm text-slate-600" aria-live="polite">
        Đúng ngay lần đầu: <strong class="tabular-nums">{score}/{tries}</strong>
      </p>
    </div>
  {/if}
</div>
