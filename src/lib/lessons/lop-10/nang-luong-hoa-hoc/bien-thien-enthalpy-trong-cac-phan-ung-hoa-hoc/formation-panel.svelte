<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { numTex } from '#lib/core/number-format.js';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import {
    FORMATION_REACTIONS,
    KIND_NAMES,
    coefTex,
    equationTex,
    equationText,
    formationLevels,
    formationOf,
    formationRows,
    formationSteps,
    formationSum,
    fromFormation,
    kindOf,
    signedText,
    speciesTex,
  } from '../_shared/energy.js';
  import LevelArrow from '../_shared/level-arrow.svelte';

  const W = 360;
  const H = 280;
  const TOP = 34;
  const BOTTOM = 34;
  const KINDS = /** @type {const} */ (['toa', 'thu']);
  const GRID = { left: [70, 150], right: [210, 290] };

  let id = $state(FORMATION_REACTIONS[0].id);
  /** @type {string[]} */
  let added = $state([]);
  /** @type {'toa' | 'thu' | null} */
  let guess = $state(null);

  const r = $derived(FORMATION_REACTIONS.find((x) => x.id === id) ?? FORMATION_REACTIONS[0]);
  const rows = $derived(formationRows(r));
  const levels = $derived(formationLevels(r, added));
  const ready = $derived(added.length === rows.length);
  const dH = $derived(fromFormation(r));
  const right = $derived(guess === kindOf(dH));
  const range = $derived.by(() => {
    const values = [0, formationSum(r.left), formationSum(r.right)];
    return { hi: Math.max(...values), lo: Math.min(...values) };
  });

  /** @param {number} v */
  function y(v) {
    const span = range.hi - range.lo || 1;
    return TOP + ((range.hi - v) / span) * (H - TOP - BOTTOM);
  }

  function reset() {
    added = [];
    guess = null;
  }

  /** @param {string} rowId */
  function toggle(rowId) {
    added = added.includes(rowId) ? added.filter((x) => x !== rowId) : [...added, rowId];
    guess = null;
  }

  const note = $derived.by(() => {
    if (!ready) {
      return {
        tone: /** @type {const} */ ('info'),
        text: `Chạm vào từng chất để cộng nhiệt tạo thành của nó, đã nhân hệ số, vào mức của vế đó. Còn ${rows.length - added.length} chất chưa tính.`,
      };
    }
    if (guess === null) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Đủ cả hai mức. Nhìn giản đồ: phản ứng này toả nhiệt hay thu nhiệt?',
      };
    }
    if (!right) {
      return {
        tone: /** @type {const} */ ('warn'),
        text: 'Chưa đúng. So sánh độ cao hai mức: mức sản phẩm thấp hơn thì phản ứng toả nhiệt, cao hơn thì thu nhiệt.',
      };
    }
    return {
      tone: /** @type {const} */ ('ok'),
      text: `Đúng: mức sản phẩm ${dH < 0 ? 'thấp' : 'cao'} hơn mức chất đầu, phản ứng ${KIND_NAMES[kindOf(dH)]}, $\\Delta_r H^\\circ_{298} ${dH < 0 ? '< 0' : '> 0'}$.`,
    };
  });
</script>

<div class="space-y-4">
  <label class="block">
    <span class="mb-1 block text-sm font-semibold text-slate-700">Chọn phản ứng</span>
    <select class={textInput} bind:value={id} onchange={reset}>
      {#each FORMATION_REACTIONS as x (x.id)}
        <option value={x.id}>{equationText(x)}</option>
      {/each}
    </select>
  </label>

  <p class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center">
    <LiveRichText text={`$${equationTex(r)}$`} />
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    {#each ['left', 'right'] as side (side)}
      <div>
        <p class="mb-1 text-sm font-semibold text-slate-700">
          {side === 'left' ? 'Chất đầu' : 'Sản phẩm'}
        </p>
        <ul class="space-y-2">
          {#each rows.filter((x) => x.side === side) as row (row.id)}
            {@const on = added.includes(row.id)}
            <li>
              <button
                type="button"
                aria-pressed={on}
                class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm {focusRing} {on
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
                onclick={() => toggle(row.id)}
              >
                <LiveRichText
                  text={`$${coefTex(row.term.n)}${speciesTex(row.term.s)}$: $${numTex(formationOf(row.term.s))}$ kJ/mol`}
                />
              </button>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50 select-none"
    role="img"
    aria-label="Giản đồ enthalpy so với các đơn chất bền: mức chất đầu {signedText(
      levels.left,
    )} kJ, mức sản phẩm {signedText(levels.right)} kJ."
  >
    <line
      x1="8"
      y1={y(0)}
      x2={W - 8}
      y2={y(0)}
      stroke="#94a3b8"
      stroke-width="1"
      stroke-dasharray="5 4"
    />
    <text x={W - 8} y={y(0) - 5} text-anchor="end" font-size="10" fill="#64748b">
      đơn chất bền: 0
    </text>

    <line
      x1={GRID.left[0]}
      x2={GRID.left[1]}
      y1={y(levels.left)}
      y2={y(levels.left)}
      stroke="#4f46e5"
      stroke-width="4"
    />
    <text
      x={(GRID.left[0] + GRID.left[1]) / 2}
      y={y(levels.left) + 16}
      text-anchor="middle"
      font-size="11"
      font-weight="600"
      fill="#3730a3"
    >
      Chất đầu {signedText(levels.left)}
    </text>
    <line
      x1={GRID.right[0]}
      x2={GRID.right[1]}
      y1={y(levels.right)}
      y2={y(levels.right)}
      stroke="#0f766e"
      stroke-width="4"
    />
    <text
      x={(GRID.right[0] + GRID.right[1]) / 2}
      y={y(levels.right) + 16}
      text-anchor="middle"
      font-size="11"
      font-weight="600"
      fill="#115e59"
    >
      Sản phẩm {signedText(levels.right)}
    </text>

    {#if ready && right}
      <line
        x1={GRID.left[1]}
        x2="180"
        y1={y(levels.left)}
        y2={y(levels.left)}
        stroke="#94a3b8"
        stroke-dasharray="3 3"
      />
      <LevelArrow
        x={180}
        from={y(levels.left)}
        to={y(levels.right)}
        color={dH < 0 ? '#dc2626' : '#0284c7'}
      />
      <text
        x="180"
        y={Math.min(y(levels.left), y(levels.right)) - 6}
        text-anchor="middle"
        font-size="11"
        font-weight="700"
        fill="#334155"
      >
        {signedText(dH)} kJ
      </text>
    {/if}
  </svg>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if ready}
    <div class="flex flex-wrap gap-2">
      {#each KINDS as kind (kind)}
        <button
          type="button"
          class={guess === kind ? button.primary : button.secondary}
          aria-pressed={guess === kind}
          onclick={() => (guess = kind)}
        >
          Phản ứng {KIND_NAMES[kind]}
        </button>
      {/each}
    </div>
  {/if}

  {#if ready && right}
    <ul class="space-y-1 rounded-xl bg-slate-50 p-3 text-sm">
      {#each formationSteps(r) as line (line)}
        <li><LiveRichText text={line} /></li>
      {/each}
    </ul>
  {/if}

  <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
</div>
