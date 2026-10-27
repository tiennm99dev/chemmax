<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import EquationLine from '../_shared/equation-line.svelte';
  import { NAME, SERIES, predict, rank, solutionOf } from './engine.js';

  /** @typedef {import('./engine.js').MetalId} MetalId */
  /** @typedef {import('./engine.js').SeriesId} SeriesId */

  const METALS = /** @type {MetalId[]} */ (SERIES.filter((x) => x !== 'H'));
  /** Gold salts are left out: they are not a solution met at school. */
  const TARGETS = /** @type {SeriesId[]} */ (SERIES.filter((x) => x !== 'Au'));

  /** @type {MetalId} */
  let metal = $state(/** @type {MetalId} */ ('Zn'));
  /** @type {SeriesId} */
  let target = $state(/** @type {SeriesId} */ ('Cu'));
  /** @type {boolean | null} the learner's guess: does the metal free the element? */
  let guess = $state(null);
  let right = $state(0);
  let asked = $state(0);

  const p = $derived(predict(metal, target));
  const correct = $derived(guess !== null && guess === p.displaces);
  const what = $derived(target === 'H' ? 'hydrogen' : NAME[target]);

  /** @param {MetalId} m */
  function pickMetal(m) {
    metal = m;
    guess = null;
  }

  /** @param {SeriesId} t */
  function pickTarget(t) {
    target = t;
    guess = null;
  }

  /** @param {boolean} g */
  function answer(g) {
    if (guess !== null) return;
    guess = g;
    asked += 1;
    if (g === predict(metal, target).displaces) right += 1;
  }

  function randomPair() {
    let m = metal;
    let t = target;
    while ((m === metal && t === target) || m === t) {
      m = METALS[Math.floor(Math.random() * METALS.length)];
      t = TARGETS[Math.floor(Math.random() * TARGETS.length)];
    }
    metal = m;
    target = t;
    guess = null;
  }

  const tone = $derived(guess === null ? 'info' : correct ? 'ok' : /** @type {const} */ ('warn'));
  const note = $derived(
    guess === null
      ? `Cho ${NAME[metal]} vào dung dịch ${prettyFormula(solutionOf(target))}. Dựa vào vị trí trong dãy, ${NAME[metal]} có đẩy được ${what} ra không?`
      : `${correct ? 'Đúng!' : 'Chưa đúng.'} ${p.reason}`,
  );

  /** @param {SeriesId} id */
  function tileClass(id) {
    if (id === metal) return 'border-indigo-600 bg-indigo-600 text-white';
    if (id === target) return 'border-amber-500 bg-amber-400 text-slate-900';
    if (id === 'H') return 'border-dashed border-slate-400 bg-white text-slate-700';
    return 'border-slate-300 bg-white text-slate-700';
  }
</script>

<div class="space-y-4">
  <figure class="space-y-1">
    <ol
      class="grid grid-cols-6 gap-1 sm:grid-cols-12"
      aria-label="Dãy hoạt động hoá học, từ mạnh đến yếu"
    >
      {#each SERIES as id (id)}
        <li
          class="flex min-h-11 items-center justify-center rounded-lg border-2 text-base font-bold {tileClass(
            id,
          )}"
          aria-label="{id}, vị trí {rank(id) + 1}{id === metal
            ? ', kim loại đang chọn'
            : id === target
              ? ', nguyên tố trong dung dịch'
              : ''}"
        >
          {id}
        </li>
      {/each}
    </ol>
    <figcaption class="flex justify-between text-xs font-semibold text-slate-600">
      <span>← hoạt động mạnh hơn</span><span>hoạt động yếu hơn →</span>
    </figcaption>
  </figure>

  <div class="grid gap-3 md:grid-cols-2">
    <fieldset>
      <legend class="mb-1 text-sm font-semibold text-slate-700">Kim loại cho vào</legend>
      <div class="flex flex-wrap gap-1">
        {#each METALS as m (m)}
          <button
            type="button"
            class="min-h-11 min-w-11 rounded-lg border px-2 text-sm font-semibold {focusRing} {m ===
            metal
              ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
              : 'border-slate-300 bg-white text-slate-700'}"
            aria-pressed={m === metal}
            aria-label="Kim loại {NAME[m]} {m}"
            onclick={() => pickMetal(m)}
          >
            {m}
          </button>
        {/each}
      </div>
    </fieldset>
    <fieldset>
      <legend class="mb-1 text-sm font-semibold text-slate-700">Dung dịch</legend>
      <div class="flex flex-wrap gap-1">
        {#each TARGETS as t (t)}
          <button
            type="button"
            class="min-h-11 rounded-lg border px-2 text-sm font-semibold {focusRing} {t === target
              ? 'border-amber-500 bg-amber-50 text-amber-900'
              : 'border-slate-300 bg-white text-slate-700'}"
            aria-pressed={t === target}
            onclick={() => pickTarget(t)}
          >
            <ChemFormula formula={solutionOf(t)} />
          </button>
        {/each}
      </div>
    </fieldset>
  </div>

  <div class="rounded-xl bg-slate-50 p-3">
    <p class="mb-2 text-base font-semibold text-slate-800">
      {NAME[metal][0].toUpperCase() + NAME[metal].slice(1)} ({metal}) + dung dịch
      <ChemFormula formula={solutionOf(target)} />: có đẩy được {what} ra không?
    </p>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.secondary}
        disabled={guess !== null}
        onclick={() => answer(true)}
      >
        Có, đẩy được
      </button>
      <button
        type="button"
        class={button.secondary}
        disabled={guess !== null}
        onclick={() => answer(false)}
      >
        Không đẩy được
      </button>
      <button type="button" class={button.quiet} onclick={randomPair}>Cặp ngẫu nhiên</button>
    </div>
    {#if guess !== null}
      <div class="mt-3 text-base">
        {#if p.equation}
          <p class="mb-1 text-sm font-semibold text-slate-600">Phương trình hoá học</p>
          <EquationLine text={p.equation} />
        {:else}
          <p class="text-sm text-slate-700">Không có phản ứng hoá học xảy ra.</p>
        {/if}
      </div>
    {/if}
  </div>

  <FeedbackNote {tone} text={note} />
  <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
    Dự đoán đúng: {right}/{asked}
  </p>
</div>
