<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { ACID_CHOICES, ACIDS, BASES, acid, base, react, spread } from './engine.js';

  const W = 340;
  const H = 360;
  const AXIS_X = 96;
  const TOP = 24;
  const BOTTOM = H - 24;
  const y = linear(4, 16, TOP, BOTTOM).map;
  const labelYs = spread(
    ACIDS.map((a) => y(a.pKa)),
    24,
    TOP,
    BOTTOM,
  );
  const TICKS = [4, 6, 8, 10, 12, 14, 16];

  const ACID_OPTIONS = ACID_CHOICES.map((id) => ({ value: id, label: acid(id).name }));
  const BASE_OPTIONS = BASES.map((b) => ({ value: b.id, label: prettyFormula(b.formula) }));

  let acidId = $state('phenol');
  let baseId = $state('NaOH');
  let guess = $state(/** @type {boolean | null} */ (null));

  const outcome = $derived(react(acidId, baseId));
  const baseFormula = $derived(prettyFormula(base(baseId).formula));
  const acidFormula = $derived(
    outcome.acid.formula
      .split(' + ')
      .map((f) => prettyFormula(f))
      .join(' + '),
  );

  /** @param {number} v */
  const pk = (v) => formatNumber(v, 2);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const a = outcome.acid;
      const p = outcome.partner;
      if (outcome.result === 'same') {
        return {
          tone: 'info',
          text: `${baseFormula} ứng với chính ${a.label}, nên không có phản ứng nào để xét. Chọn một muối hoặc base khác.`,
        };
      }
      if (guess === null) {
        return {
          tone: 'info',
          text: `${baseFormula} ứng với acid ${p.label}. Dựa vào thang pKa, dự đoán ${acidFormula} có phản ứng với ${baseFormula} không.`,
        };
      }
      const why =
        outcome.result === 'yes'
          ? `pKa của ${a.label} (${pk(a.pKa)}) nhỏ hơn pKa của ${p.label} (${pk(p.pKa)}): acid mạnh hơn đẩy acid yếu hơn ra khỏi muối.`
          : `pKa của ${a.label} (${pk(a.pKa)}) lớn hơn pKa của ${p.label} (${pk(p.pKa)}): acid yếu hơn không đẩy được acid mạnh hơn ra khỏi muối.`;
      const right = guess === (outcome.result === 'yes');
      return { tone: right ? 'ok' : 'warn', text: `${right ? 'Đúng.' : 'Chưa đúng.'} ${why}` };
    },
  );

  function resetGuess() {
    guess = null;
  }

  /** @param {string} id */
  const role = (id) =>
    id === outcome.acid.id ? 'acid' : id === outcome.partner.id ? 'partner' : 'other';
</script>

<div class="space-y-4">
  <SegmentedControl label="Acid" options={ACID_OPTIONS} bind:value={acidId} onchange={resetGuess} />
  <SegmentedControl
    label="Muối hoặc base"
    options={BASE_OPTIONS}
    bind:value={baseId}
    onchange={resetGuess}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-sm"
    role="img"
    aria-label="Thang pKa: {ACIDS.map((a) => `${a.label} ${pk(a.pKa)}`).join(
      ', ',
    )}. Đang xét {outcome.acid.label} và {outcome.partner.label}."
  >
    <defs>
      <marker
        id="pka-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L10,5 L0,10 z" fill="#047857" />
      </marker>
    </defs>
    <line x1={AXIS_X} y1={TOP} x2={AXIS_X} y2={BOTTOM} stroke="#64748b" stroke-width="3" />
    {#each TICKS as t (t)}
      <line x1={AXIS_X - 6} y1={y(t)} x2={AXIS_X} y2={y(t)} stroke="#64748b" />
      <text x={AXIS_X - 10} y={y(t) + 4} text-anchor="end" font-size="12" fill="#475569">{t}</text>
    {/each}
    <text x={AXIS_X} y="14" text-anchor="middle" font-size="12" font-weight="600" fill="#334155"
      >pKa</text
    >
    {#each ACIDS as a, i (a.id)}
      {@const r = role(a.id)}
      {@const color = r === 'acid' ? '#be123c' : r === 'partner' ? '#0369a1' : '#475569'}
      <circle cx={AXIS_X} cy={y(a.pKa)} r={r === 'other' ? 4 : 6} fill={color} />
      <line
        x1={AXIS_X + 6}
        y1={y(a.pKa)}
        x2={AXIS_X + 24}
        y2={labelYs[i]}
        stroke={color}
        stroke-width="1"
      />
      <text
        x={AXIS_X + 28}
        y={labelYs[i] + 5}
        font-size="15"
        font-weight={r === 'other' ? '400' : '700'}
        fill={color}>{a.label} ({pk(a.pKa)})</text
      >
    {/each}
    {#if guess !== null && outcome.result === 'yes'}
      <path
        d="M {AXIS_X - 36} {y(outcome.acid.pKa)} Q {AXIS_X - 84} {(y(outcome.acid.pKa) +
          y(outcome.partner.pKa)) /
          2} {AXIS_X - 36} {y(outcome.partner.pKa)}"
        fill="none"
        stroke="#047857"
        stroke-width="2"
        marker-end="url(#pka-arrow)"
      />
    {/if}
  </svg>

  <p class="text-center text-sm text-slate-600">
    pKa càng nhỏ, acid càng mạnh. Mũi tên xanh chỉ từ acid mạnh hơn đến acid yếu hơn bị đẩy ra.
  </p>

  {#if outcome.result !== 'same'}
    <div class="grid grid-cols-2 gap-2" role="group" aria-label="Dự đoán">
      {#each [true, false] as g (g)}
        <button
          type="button"
          class="min-h-12 rounded-lg border-2 px-2 font-semibold {guess === g
            ? 'border-indigo-600 bg-indigo-50'
            : 'border-slate-300 bg-white hover:bg-slate-50'} {focusRing}"
          aria-pressed={guess === g}
          onclick={() => (guess = g)}>{g ? 'Có phản ứng' : 'Không phản ứng'}</button
        >
      {/each}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if guess !== null && outcome.equation}
    <p class="text-lg"><EquationLine text={outcome.equation} /></p>
  {/if}
</div>
