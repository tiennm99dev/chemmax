<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { BOND_LABELS, BOND_ORDER, ION_LIMIT, NONPOLAR_LIMIT, chi } from '../_shared/bonds.js';
  import { BAR_MAX, FIRST_ATOMS, barPercent, judgeGuess, pairFacts, partnersOf } from './engine.js';

  /** @typedef {import('./engine.js').BondType} BondType */

  const LEFT = 90;
  const RIGHT = 270;

  let a = $state('H');
  let b = $state('Cl');
  /** @type {BondType | null} */
  let guess = $state(null);
  let tried = $state(0);
  let right = $state(0);

  const facts = $derived(pairFacts(a, b));
  const verdict = $derived(guess ? judgeGuess(a, b, guess) : null);
  const firstOptions = FIRST_ATOMS.map((s) => ({ value: s, label: s }));
  const secondOptions = $derived(partnersOf(a).map((s) => ({ value: s, label: s })));
  const mid = (LEFT + RIGHT) / 2;
  const half = (RIGHT - LEFT) / 2;
  const pairX = $derived(guess ? mid + facts.lean * half : mid);

  /** @param {string | number} next */
  function chooseFirst(next) {
    if (!partnersOf(String(next)).includes(b)) b = 'Cl';
    guess = null;
  }

  /** @param {BondType} value */
  function choose(value) {
    if (guess) return;
    guess = value;
    tried += 1;
    if (judgeGuess(a, b, value).ok) right += 1;
  }
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Nguyên tử thứ nhất"
      options={firstOptions}
      bind:value={a}
      onchange={chooseFirst}
    />
    <SegmentedControl
      label="Nguyên tử thứ hai"
      options={secondOptions}
      bind:value={b}
      onchange={() => (guess = null)}
    />
  </div>

  <svg
    viewBox="0 0 360 130"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label={guess
      ? `Liên kết ${a}–${b}: hiệu độ âm điện ${formatNumber(facts.delta)}, ${BOND_LABELS[facts.type]}.`
      : `Hai nguyên tử ${a} và ${b}, chưa có kết quả.`}
  >
    <line x1={LEFT} y1="65" x2={RIGHT} y2="65" stroke="#cbd5e1" stroke-width="3" />
    {#each [{ x: LEFT, s: a }, { x: RIGHT, s: b }] as atom (atom.x)}
      <circle cx={atom.x} cy="65" r="30" fill="#fff" stroke="#475569" stroke-width="2" />
      <text x={atom.x} y="71" text-anchor="middle" font-size="20" font-weight="700" fill="#0f172a"
        >{atom.s}</text
      >
      <text x={atom.x} y="118" text-anchor="middle" font-size="13" fill="#475569"
        >χ = {formatNumber(chi(atom.s))}</text
      >
      {#if guess && facts.type !== 'nonpolar'}
        {@const positive = atom.s === facts.small}
        <text
          x={atom.x}
          y="26"
          text-anchor="middle"
          font-size="18"
          font-weight="700"
          fill={positive ? '#dc2626' : '#2563eb'}
          >{facts.ionic ? (positive ? '+' : '−') : positive ? 'δ+' : 'δ−'}</text
        >
      {/if}
    {/each}
    <g class="pair" style:transform="translateX({pairX - mid}px)">
      <circle cx={mid - 6} cy="65" r="6" fill="#d97706" stroke="#fff" />
      <circle cx={mid + 6} cy="65" r="6" fill="#d97706" stroke="#fff" />
    </g>
  </svg>

  <div>
    <div class="relative mx-1 flex h-5 overflow-hidden rounded-full text-[0px]" aria-hidden="true">
      <span class="bg-sky-300" style:width="{(NONPOLAR_LIMIT / BAR_MAX) * 100}%"></span>
      <span class="bg-violet-300" style:width="{((ION_LIMIT - NONPOLAR_LIMIT) / BAR_MAX) * 100}%"
      ></span>
      <span class="flex-1 bg-rose-300"></span>
    </div>
    {#if guess}
      <div class="relative mx-1 h-6" aria-hidden="true">
        <span
          class="absolute -translate-x-1/2 text-lg font-bold text-slate-900"
          style:left="{barPercent(facts.delta)}%">▲</span
        >
      </div>
    {/if}
    <div class="relative mx-1 mt-1 h-4 text-xs text-slate-600 tabular-nums" aria-hidden="true">
      <span class="absolute left-0">0</span>
      <span class="absolute -translate-x-1/2" style:left="{barPercent(NONPOLAR_LIMIT)}%">0,4</span>
      <span class="absolute -translate-x-1/2" style:left="{barPercent(ION_LIMIT)}%">1,7</span>
      <span class="absolute right-0">3,3</span>
    </div>
    <ul class="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-700">
      <li class="flex items-center gap-1">
        <span class="inline-block size-3 rounded-full bg-sky-300"></span>Không phân cực
      </li>
      <li class="flex items-center gap-1">
        <span class="inline-block size-3 rounded-full bg-violet-300"></span>Phân cực
      </li>
      <li class="flex items-center gap-1">
        <span class="inline-block size-3 rounded-full bg-rose-300"></span>Ion
      </li>
    </ul>
  </div>

  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Liên kết {a}–{b} thuộc loại nào? Tính hiệu độ âm điện rồi đoán.
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each BOND_ORDER as t (t)}
        <button
          type="button"
          class={guess === t ? button.primary : button.secondary}
          disabled={Boolean(guess)}
          aria-pressed={guess === t}
          onclick={() => choose(t)}>{BOND_LABELS[t]}</button
        >
      {/each}
    </div>
  </fieldset>

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {:else}
    <FeedbackNote tone="info" text="Chọn loại liên kết để xem cặp electron dịch chuyển." />
  {/if}

  <p class="text-sm text-slate-600" aria-live="polite">Đã đoán {tried} cặp, đúng {right}.</p>
</div>

<style>
  .pair {
    transition: transform 0.6s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .pair {
      transition: none;
    }
  }
</style>
