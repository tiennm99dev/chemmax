<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { OXIDE_NATURE, roman } from '#lib/domain/compounds.js';
  import { NATURE_CHOICES, PERIOD3, judgeNature, periodSentence } from './engine.js';

  /** @typedef {import('#lib/domain/compounds.js').Nature} Nature */

  let index = $state(0);
  /** @type {Record<number, Nature>} guesses by atomic number */
  let guesses = $state({});
  /** @type {HTMLButtonElement[]} */
  const cells = [];

  const entry = $derived(PERIOD3[index]);
  const guess = $derived(guesses[entry.z]);
  const verdict = $derived(guess ? judgeNature(entry, guess) : null);
  const done = $derived(Object.keys(guesses).length);
  const right = $derived(PERIOD3.filter((e) => guesses[e.z] === e.oxideNature).length);

  /** @param {number} i */
  function go(i) {
    index = Math.max(0, Math.min(PERIOD3.length - 1, i));
  }

  /** @param {KeyboardEvent} e */
  function onkeydown(e) {
    const step = { ArrowLeft: -1, ArrowRight: 1, Home: -99, End: 99 }[e.key];
    if (step === undefined) return;
    e.preventDefault();
    go(index + step);
    cells[index]?.focus();
  }

  /** @param {Nature} value */
  function choose(value) {
    if (guess) return;
    guesses = { ...guesses, [entry.z]: value };
  }

  /** Marker position (%) on the base → acid bar, scale −3 … +4. */
  const marker = $derived(((entry.scale + 3) / 7) * 100);
  const TONE = {
    base: 'bg-sky-100 text-sky-900',
    'luong-tinh': 'bg-violet-100 text-violet-900',
    acid: 'bg-rose-100 text-rose-900',
  };
</script>

<div class="space-y-4">
  <div role="group" aria-label="Các nguyên tố chu kì 3" class="grid grid-cols-7 gap-1">
    {#each PERIOD3 as e, i (e.z)}
      {@const seen = guesses[e.z]}
      <button
        bind:this={cells[i]}
        type="button"
        class="flex min-h-14 flex-col items-center justify-center rounded-lg border transition {focusRing} {i ===
        index
          ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
          : 'border-slate-200 bg-white'}"
        tabindex={i === index ? 0 : -1}
        aria-pressed={i === index}
        aria-label="{e.symbol}, nhóm {roman(e.valence)}A{seen
          ? `, ${OXIDE_NATURE[e.oxideNature]}`
          : ', chưa đoán'}"
        onclick={() => go(i)}
        {onkeydown}
      >
        <span class="text-[0.6rem] text-slate-500 tabular-nums">{e.z}</span>
        <span class="font-bold">{e.symbol}</span>
        <span class="text-[0.6rem] text-slate-500">{roman(e.valence)}A</span>
      </button>
    {/each}
  </div>
  <p class="text-xs text-slate-600">
    Bấm vào nguyên tố, hoặc dùng phím ← → để đi dọc chu kì 3. Argon (VIIIA) là khí hiếm, không có
    oxide cao nhất nên không có trong dải.
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <div class="rounded-xl bg-slate-50 p-4">
      <p class="text-sm text-slate-500">Hoá trị cao nhất với oxygen</p>
      <p class="text-2xl font-bold">{roman(entry.valence)}</p>
      <p class="mt-2 text-sm text-slate-500">Oxide cao nhất</p>
      <p class="text-xl font-semibold"><ChemFormula formula={entry.oxide} /></p>
    </div>
    <div class="rounded-xl bg-slate-50 p-4" aria-live="polite">
      <p class="text-sm text-slate-500">Hydroxide tương ứng</p>
      {#if guess}
        <p class="text-xl font-semibold"><ChemFormula formula={entry.hydroxide} /></p>
        <p
          class="mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold {TONE[
            entry.hydroxideNature
          ]}"
        >
          {entry.strength}
        </p>
      {:else}
        <p class="text-sm text-slate-600">Đoán tính chất của oxide trước để mở thẻ này.</p>
      {/if}
    </div>
  </div>

  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Oxide <ChemFormula formula={entry.oxide} /> thuộc loại nào?
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each NATURE_CHOICES as c (c.value)}
        <button
          type="button"
          class={guess === c.value ? button.primary : button.secondary}
          disabled={Boolean(guess)}
          aria-pressed={guess === c.value}
          onclick={() => choose(c.value)}>{c.label}</button
        >
      {/each}
    </div>
  </fieldset>

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
    <div class="space-y-2 rounded-xl border border-slate-200 p-4">
      <p class="text-sm text-slate-700"><LiveRichText text={entry.note} /></p>
      <ul class="space-y-1 text-sm">
        {#each entry.equations as eq (eq)}
          <li><EquationLine text={eq} /></li>
        {/each}
      </ul>
      <div class="pt-2">
        <div
          class="relative h-4 rounded-full bg-gradient-to-r from-sky-400 via-violet-300 to-rose-500"
          role="img"
          aria-label="Thang base – acid: {entry.hydroxide} là {entry.strength}"
        >
          <span
            class="absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-900 bg-white"
            style:left="{marker}%"
          ></span>
        </div>
        <div class="mt-1 flex justify-between text-xs text-slate-600">
          <span>base mạnh</span><span>lưỡng tính</span><span>acid rất mạnh</span>
        </div>
      </div>
      <p class="text-sm text-slate-700">{periodSentence(entry)}</p>
    </div>
  {:else}
    <FeedbackNote tone="info" text="Chọn một loại oxide để kiểm tra." />
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    <button
      type="button"
      class={button.quiet}
      disabled={index === PERIOD3.length - 1}
      onclick={() => go(index + 1)}>Nguyên tố tiếp theo →</button
    >
    <p class="text-sm text-slate-600" aria-live="polite">
      Đã đoán {done}/{PERIOD3.length}, đúng {right}.
    </p>
    {#if done > 0}
      <button type="button" class={button.quiet} onclick={() => ((guesses = {}), (index = 0))}
        >Làm lại</button
      >
    {/if}
  </div>
</div>
