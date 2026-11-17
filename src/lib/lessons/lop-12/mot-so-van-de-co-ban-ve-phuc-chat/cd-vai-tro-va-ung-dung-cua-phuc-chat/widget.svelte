<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { AREAS, CARDS, METALS, cardsOf, judgeMetal } from './engine.js';

  /** @typedef {import('./engine.js').Area} Area */

  const MODES = [
    { value: 'kham-pha', label: 'Khám phá' },
    { value: 'thu-tai', label: 'Đoán kim loại' },
  ];
  const AREA_COLOUR = /** @type {Record<Area, string>} */ ({
    'sinh-hoc': 'border-emerald-300 bg-emerald-50',
    'phan-tich': 'border-sky-300 bg-sky-50',
    'y-hoc': 'border-rose-300 bg-rose-50',
    'cong-nghiep': 'border-amber-300 bg-amber-50',
  });

  let mode = $state('kham-pha');
  let area = $state(/** @type {Area} */ ('sinh-hoc'));
  let openId = $state('hemoglobin');

  let round = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  /** @type {string[]} */
  let wrongPicks = $state([]);
  let firstTry = $state(0);
  let done = $state(0);

  const shown = $derived(cardsOf(area));
  const open = $derived(CARDS.find((c) => c.id === openId) ?? shown[0]);
  const quiz = $derived(CARDS[round % CARDS.length]);

  /** @param {string | number} next */
  function switchArea(next) {
    area = /** @type {Area} */ (next);
    openId = cardsOf(area)[0].id;
  }

  /** @param {string} metal */
  function guess(metal) {
    if (verdict?.ok || wrongPicks.includes(metal)) return;
    verdict = judgeMetal(quiz, metal);
    if (verdict.ok) {
      done += 1;
      if (wrongPicks.length === 0) firstTry += 1;
    } else wrongPicks = [...wrongPicks, metal];
  }

  function next() {
    round += 1;
    verdict = null;
    wrongPicks = [];
  }

  const note = $derived.by(() => {
    if (mode === 'thu-tai')
      return verdict
        ? {
            tone: verdict.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
            text: verdict.text,
          }
        : {
            tone: /** @type {const} */ ('info'),
            text: 'Đọc mô tả phức chất rồi chọn kim loại làm nguyên tử trung tâm.',
          };
    return {
      tone: /** @type {const} */ ('info'),
      text: `${open.title}: nguyên tử trung tâm ${open.metal}, số phối trí ${open.cn}. Bấm thẻ khác hoặc đổi lĩnh vực để so sánh.`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} />

  {#if mode === 'kham-pha'}
    <SegmentedControl label="Lĩnh vực" options={AREAS} bind:value={area} onchange={switchArea} />
    <div role="group" aria-label="Các phức chất" class="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {#each shown as c (c.id)}
        <button
          type="button"
          class="{button.quiet} h-auto text-left {openId === c.id ? 'ring-2 ring-indigo-500' : ''}"
          aria-pressed={openId === c.id}
          onclick={() => (openId = c.id)}
        >
          <span class="flex flex-col items-start">
            <span>{c.title}</span>
            <span class="text-xs font-normal text-slate-500">
              <ChemFormula formula={c.centre} />
            </span>
          </span>
        </button>
      {/each}
    </div>
    <article class="space-y-2 rounded-xl border p-4 {AREA_COLOUR[open.area]}" aria-live="polite">
      <h3 class="text-lg font-bold text-slate-800">{open.title}</h3>
      <p class="text-sm">
        <span class="font-semibold">Nguyên tử trung tâm:</span>
        <ChemFormula formula={open.centre} /> · <span class="font-semibold">Số phối trí:</span>
        {open.cn}
      </p>
      <p class="text-sm">
        <span class="font-semibold">Phối tử:</span>
        <LiveRichText text={open.ligands} />
      </p>
      <p class="text-sm">
        <span class="font-semibold">Vai trò:</span>
        <LiveRichText text={open.role} />
      </p>
    </article>
  {:else}
    <article class="space-y-2 rounded-xl border p-4 {AREA_COLOUR[quiz.area]}">
      <p class="text-xs font-semibold text-slate-500 uppercase">
        {AREAS.find((a) => a.value === quiz.area)?.label} · thẻ {(round % CARDS.length) +
          1}/{CARDS.length}
      </p>
      <p class="text-base text-slate-800">
        <LiveRichText text={quiz.clue} />
      </p>
    </article>
    <div role="group" aria-label="Kim loại làm nguyên tử trung tâm" class="flex flex-wrap gap-2">
      {#each METALS as m (m)}
        <button
          type="button"
          class="{verdict?.ok && m === quiz.metal
            ? button.primary
            : button.quiet} {wrongPicks.includes(m) ? 'line-through opacity-50' : ''}"
          aria-label={wrongPicks.includes(m) ? `${m}, đã chọn sai` : m}
          onclick={() => guess(m)}>{m}</button
        >
      {/each}
    </div>
    <div class="flex flex-wrap items-center gap-3">
      {#if verdict?.ok}
        <button type="button" class={button.secondary} onclick={next}>Thẻ tiếp theo</button>
      {/if}
      <span class="text-sm text-slate-600">Đúng ngay lần đầu: {firstTry}/{done}</span>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
