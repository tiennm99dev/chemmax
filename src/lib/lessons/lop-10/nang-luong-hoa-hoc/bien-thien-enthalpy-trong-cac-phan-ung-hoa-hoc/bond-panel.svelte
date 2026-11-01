<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import {
    BOND_REACTIONS,
    KIND_NAMES,
    bondRows,
    bondSteps,
    equationTex,
    equationText,
    fromBonds,
    kindOf,
    ladder,
    ladderMove,
    signedTex,
    signedText,
  } from '../_shared/energy.js';
  import LevelArrow from '../_shared/level-arrow.svelte';

  const W = 360;
  const H = 300;
  const TOP = 40;
  const BOTTOM = 50;
  const LEFT = 30;
  const BAR = 30;
  const BREAK = '#d97706';
  const FORM = '#0284c7';

  let id = $state(BOND_REACTIONS[0].id);
  /** @type {string[]} */
  let order = $state([]);
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Chạm vào từng loại liên kết: phá hết liên kết của chất đầu để leo lên mức các nguyên tử, rồi tạo liên kết của sản phẩm để đi xuống.',
  });

  const r = $derived(BOND_REACTIONS.find((x) => x.id === id) ?? BOND_REACTIONS[0]);
  const rows = $derived(bondRows(r));
  const steps = $derived(ladder(r, order));
  const done = $derived(order.length === rows.length);
  const dH = $derived(fromBonds(r));
  const peak = $derived(
    rows.filter((x) => x.kind === 'break').reduce((sum, x) => sum + x.total, 0),
  );
  const low = $derived(Math.min(0, dH));
  const brokenAll = $derived(rows.every((x) => x.kind !== 'break' || order.includes(x.id)));
  const pitch = $derived((W - LEFT - 54) / (rows.length + 0.5));

  /** @param {number} v */
  function y(v) {
    return TOP + ((peak - v) / (peak - low)) * (H - TOP - BOTTOM);
  }

  /** @param {number} i column of the bar, 0 for the reactants */
  function x(i) {
    return LEFT + i * pitch;
  }

  function reset() {
    order = [];
    note = {
      tone: 'info',
      text: 'Chạm vào từng loại liên kết: phá hết liên kết của chất đầu để leo lên mức các nguyên tử, rồi tạo liên kết của sản phẩm để đi xuống.',
    };
  }

  /** @param {string} rowId */
  function take(rowId) {
    const move = ladderMove(r, order, rowId);
    if (!move.ok) {
      note = { tone: 'warn', text: move.text };
      return;
    }
    order = [...order, rowId];
    note =
      order.length === rows.length
        ? {
            tone: 'ok',
            text: `Xong: năng lượng tạo liên kết ${dH < 0 ? 'lớn hơn' : 'nhỏ hơn'} năng lượng phá liên kết, phản ứng ${KIND_NAMES[kindOf(dH)]} với $\\Delta_r H^\\circ_{298} = ${signedTex(dH)}$ kJ.`,
          }
        : { tone: 'info', text: move.text };
  }
</script>

<div class="space-y-4">
  <label class="block">
    <span class="mb-1 block text-sm font-semibold text-slate-700"
      >Chọn phản ứng (các chất ở thể khí)</span
    >
    <select class={textInput} bind:value={id} onchange={reset}>
      {#each BOND_REACTIONS as o (o.id)}
        <option value={o.id}>{equationText(o)}</option>
      {/each}
    </select>
  </label>

  <p class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center">
    <LiveRichText text={`$${equationTex(r)}$`} />
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    {#each ['break', 'form'] as kind (kind)}
      <div>
        <p
          class="mb-1 text-sm font-semibold {kind === 'break' ? 'text-amber-800' : 'text-sky-800'}"
        >
          {kind === 'break' ? 'Phá liên kết (chất đầu)' : 'Tạo liên kết (sản phẩm)'}
        </p>
        <ul class="space-y-2">
          {#each rows.filter((o) => o.kind === kind) as row (row.id)}
            {@const on = order.includes(row.id)}
            <li>
              <button
                type="button"
                disabled={on}
                class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm tabular-nums {focusRing} {on
                  ? 'border-slate-300 bg-slate-100 text-slate-500'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
                onclick={() => take(row.id)}
              >
                {formatNumber(row.count)} × {row.bond} ({row.energy} kJ/mol) = {signedText(
                  kind === 'break' ? row.total : -row.total,
                )} kJ
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
    aria-label="Thang năng lượng: mức hiện tại {signedText(
      steps.at(-1)?.to ?? 0,
    )} kJ so với chất đầu."
  >
    <line
      x1="8"
      x2={W - 8}
      y1={y(0)}
      y2={y(0)}
      stroke="#94a3b8"
      stroke-width="1"
      stroke-dasharray="5 4"
    />
    <line
      x1={x(0) - BAR / 2}
      x2={x(0) + BAR / 2}
      y1={y(0)}
      y2={y(0)}
      stroke="#4f46e5"
      stroke-width="4"
    />
    <text x={x(0) - BAR / 2} y={y(0) + 14} font-size="10" font-weight="600" fill="#3730a3">
      Chất đầu
    </text>

    {#each steps as step, i (step.row.id)}
      {@const color = step.row.kind === 'break' ? BREAK : FORM}
      <line
        x1={x(i) + BAR / 2}
        x2={x(i + 1)}
        y1={y(step.from)}
        y2={y(step.from)}
        stroke={color}
        stroke-width="1"
        stroke-dasharray="3 3"
      />
      <LevelArrow x={x(i + 1)} from={y(step.from)} to={y(step.to)} {color} />
      <line
        x1={x(i + 1) - BAR / 2}
        x2={x(i + 1) + BAR / 2}
        y1={y(step.to)}
        y2={y(step.to)}
        stroke={color}
        stroke-width="4"
      />
      <text
        x={x(i + 1)}
        y={step.row.kind === 'break' ? y(step.to) - 6 : y(step.to) + 15}
        text-anchor="middle"
        font-size="10"
        font-weight="600"
        fill="#334155"
      >
        {step.row.bond}
      </text>
    {/each}

    {#if brokenAll}
      <text x="8" y="16" font-size="11" font-weight="600" fill="#92400e">
        Mức các nguyên tử: {signedText(peak)} kJ
      </text>
    {/if}

    {#if done}
      {@const end = x(rows.length)}
      <line
        x1={x(0) + BAR / 2}
        x2={W - 18}
        y1={y(0)}
        y2={y(0)}
        stroke="#475569"
        stroke-width="1"
        stroke-dasharray="3 3"
      />
      <line
        x1={end + BAR / 2}
        x2={W - 18}
        y1={y(dH)}
        y2={y(dH)}
        stroke="#475569"
        stroke-width="1"
        stroke-dasharray="3 3"
      />
      <LevelArrow x={W - 18} from={y(0)} to={y(dH)} color={dH < 0 ? '#dc2626' : '#0f766e'} />
      <text x={W - 6} y={H - 12} text-anchor="end" font-size="11" font-weight="700" fill="#334155">
        Sản phẩm: {signedText(dH)} kJ
      </text>
    {/if}
  </svg>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if done}
    <ul class="space-y-1 rounded-xl bg-slate-50 p-3 text-sm">
      {#each bondSteps(r) as line (line)}
        <li><LiveRichText text={line} /></li>
      {/each}
    </ul>
  {/if}

  <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
</div>
