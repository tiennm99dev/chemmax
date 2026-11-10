<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CASES, GROUP_NAMES, GROUP_NOTES, caseAt, inGroup, judge, nutrient } from './engine.js';

  const MODES = [
    { value: 'look', label: 'Tra cứu' },
    { value: 'guess', label: 'Bắt bệnh cho cây' },
  ];
  /** @type {Record<string, string>} */
  const GROUP_TONE = {
    da: 'border-emerald-400 bg-emerald-50 text-emerald-900',
    trung: 'border-sky-400 bg-sky-50 text-sky-900',
    vi: 'border-amber-400 bg-amber-50 text-amber-900',
  };
  const GROUPS = /** @type {const} */ (['da', 'trung', 'vi']);

  let mode = $state('look');
  let picked = $state('N');
  let round = $state(0);
  /** @type {string | null} */
  let guess = $state(null);
  let score = $state(0);
  let tries = $state(0);

  const shown = $derived(nutrient(picked));
  const answer = $derived(caseAt(round));
  const verdict = $derived(guess === null ? null : judge(answer, guess));

  /** @param {string} symbol */
  function tryGuess(symbol) {
    if (verdict?.ok) return;
    const first = guess === null;
    guess = symbol;
    if (first) {
      tries += 1;
      if (symbol === answer) score += 1;
    }
  }

  function next() {
    round += 1;
    guess = null;
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} />

  {#if mode === 'look'}
    {#each GROUPS as g (g)}
      <section class="rounded-xl border-l-4 p-2 {GROUP_TONE[g]}">
        <h4 class="text-sm font-bold">{GROUP_NAMES[g]}</h4>
        <p class="text-xs"><LiveRichText text={GROUP_NOTES[g]} /></p>
        <div class="mt-1.5 flex flex-wrap gap-1.5">
          {#each inGroup(g) as n (n.symbol)}
            <button
              type="button"
              class="min-h-11 min-w-11 rounded-lg border bg-white px-2 font-bold text-slate-800 aria-pressed:bg-slate-800 aria-pressed:text-white {focusRing}"
              aria-pressed={n.symbol === picked}
              aria-label="{n.name}, {GROUP_NAMES[n.group].toLowerCase()}"
              onclick={() => (picked = n.symbol)}>{n.symbol}</button
            >
          {/each}
        </div>
      </section>
    {/each}

    <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
      <p class="font-bold text-slate-800">
        {shown.name} ({shown.symbol}) · {GROUP_NAMES[shown.group]}
      </p>
      <p class="mt-1">
        <span class="font-semibold">Cây hấp thụ dạng:</span>
        <LiveRichText text={shown.form} />
      </p>
      <p class="mt-1"><span class="font-semibold">Vai trò:</span> {shown.role}</p>
      <p class="mt-1"><span class="font-semibold">Khi thiếu:</span> {shown.lack}</p>
    </div>
  {:else}
    <div class="rounded-xl border border-slate-200 bg-white p-3">
      <p class="text-xs font-semibold text-slate-500">
        Ca {(round % CASES.length) + 1}/{CASES.length} · Đúng ngay lần đầu: {score}/{tries}
      </p>
      <p class="mt-1 text-sm font-semibold text-slate-800">
        Một ruộng có cây biểu hiện: “{nutrient(answer).lack}” Cây đang thiếu nguyên tố nào?
      </p>
      <div
        class="mt-2 grid grid-cols-3 gap-1.5 sm:grid-cols-5"
        role="group"
        aria-label="Chọn nguyên tố"
      >
        {#each CASES as s (s)}
          <button
            type="button"
            class="min-h-11 rounded-lg border font-bold {guess === s
              ? verdict?.ok
                ? 'border-emerald-500 bg-emerald-100 text-emerald-900'
                : 'border-amber-500 bg-amber-100 text-amber-900'
              : 'border-slate-300 bg-white text-slate-800'} {focusRing}"
            aria-label={nutrient(s).name}
            onclick={() => tryGuess(s)}>{s}</button
          >
        {/each}
      </div>
    </div>
    <FeedbackNote
      tone={verdict === null ? 'info' : verdict.ok ? 'ok' : 'warn'}
      text={verdict === null
        ? 'Gợi ý: nguyên tố dễ di chuyển trong cây (N, P, K, Mg) được chuyển từ lá già sang lá non, nên triệu chứng thiếu hiện ở lá già trước.'
        : verdict.text}
    />
    <button type="button" class={button.secondary} onclick={next}>Ca tiếp theo</button>
  {/if}
</div>
