<script>
  import { onDestroy } from 'svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import {
    DURATION,
    REACTIONS,
    SURFACES,
    TEMPERATURE,
    axisTop,
    compareRuns,
    concentrationText,
    defaultRun,
    finalVolume,
    gasRate,
    gasVolume,
    remaining,
  } from './engine.js';

  /** Simulated seconds per real second. */
  const SPEED = 4;
  /** Bubbles drawn per mL of gas, and the most kept on screen. */
  const BUBBLES_PER_ML = 1.2;
  const MAX_BUBBLES = 70;

  /** @type {import('./engine.js').ReactionId} */
  let reactionId = $state('da-voi');
  /** @type {import('./engine.js').Run} */
  let draft = $state(defaultRun('da-voi'));
  /** @type {import('./engine.js').Run | null} */
  let current = $state(null);
  /** @type {import('./engine.js').Run | null} */
  let previous = $state(null);
  let t = $state(0);
  let playing = $state(false);
  /** @type {Array<{ id: number, x: number, y: number, r: number }>} */
  let bubbles = $state([]);
  /** @type {(() => void) | null} */
  let stop = null;
  let nextId = 0;
  let pending = 0;

  const info = $derived(REACTIONS[reactionId]);
  const conc = $derived(info.concentration);

  /** @param {import('./engine.js').Run} a @param {import('./engine.js').Run} b */
  const same = (a, b) =>
    a.reaction === b.reaction &&
    a.temperature === b.temperature &&
    a.concentration === b.concentration &&
    (a.reaction === 'da-voi' ? a.surface === b.surface : a.catalyst === b.catalyst);

  /** What the tube shows: the run in progress or done, or the new set-up before it starts. */
  const fresh = $derived(current === null || !same(current, draft));
  const shown = $derived(fresh || !current ? draft : current);
  const shownT = $derived(fresh ? 0 : t);
  const left = $derived(remaining(shown, shownT));
  const collected = $derived(fresh ? 0 : gasVolume(shown, t));
  const finished = $derived(current !== null && t >= DURATION);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (playing) return { tone: 'info', text: 'Đang theo dõi lượng khí thoát ra…' };
      if (current && finished) return compareRuns(previous, current);
      return {
        tone: 'info',
        text: 'Chọn điều kiện rồi bấm “Tiến hành thí nghiệm”. Mỗi lần chỉ đổi một yếu tố để so sánh.',
      };
    },
  );

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function start() {
    halt();
    if (current && finished) previous = current;
    current = { ...draft };
    t = 0;
    bubbles = [];
    pending = 0;
    if (reducedMotion()) {
      t = DURATION;
      return;
    }
    playing = true;
    const run = current;
    stop = frameLoop((dt) => {
      const before = t;
      t = Math.min(DURATION, t + dt * SPEED);
      pending += (gasVolume(run, t) - gasVolume(run, before)) * BUBBLES_PER_ML;
      const moved = bubbles
        .map((b) => ({ ...b, y: b.y - (55 + b.r * 6) * dt, x: b.x + Math.sin(b.y / 9) * 0.4 }))
        .filter((b) => b.y > 62);
      while (pending >= 1 && moved.length < MAX_BUBBLES) {
        pending -= 1;
        moved.push({
          id: nextId++,
          x: 52 + Math.random() * 36,
          y: 196 - Math.random() * 10,
          r: 1.8 + Math.random() * 2.2,
        });
      }
      pending = Math.min(pending, 3);
      bubbles = moved;
      if (t >= DURATION) {
        halt();
        bubbles = [];
      }
    });
  }

  function skip() {
    halt();
    bubbles = [];
    t = DURATION;
  }

  /** @param {string | number} id */
  function chooseReaction(id) {
    halt();
    const r = id === 'oxi-gia' ? 'oxi-gia' : 'da-voi';
    draft = defaultRun(r);
    current = null;
    previous = null;
    bubbles = [];
    t = 0;
  }

  onDestroy(halt);

  const reactionOptions = Object.entries(REACTIONS).map(([value, r]) => ({
    value,
    label: r.label,
  }));
  const surfaceOptions = SURFACES.map((s) => ({ value: s.value, label: s.label }));
  const catalystOptions = [
    { value: 'khong', label: 'Không có' },
    { value: 'co', label: 'Có MnO₂' },
  ];
  let catalystChoice = $state('khong');
  let surfaceChoice = $state('vien');

  /** Rock pieces of the limestone, before they shrink. */
  const PIECES = /** @type {const} */ ({
    vien: [{ x: 70, y: 198, r: 13 }],
    manh: [
      { x: 58, y: 203, r: 6.5 },
      { x: 72, y: 205, r: 6.5 },
      { x: 85, y: 202, r: 6 },
      { x: 64, y: 193, r: 6 },
      { x: 79, y: 193, r: 6.5 },
    ],
    bot: Array.from({ length: 28 }, (_, i) => ({
      x: 52 + (i % 10) * 4 + (Math.floor(i / 10) % 2) * 2,
      y: 207 - Math.floor(i / 10) * 3.5,
      r: 2,
    })),
  });

  /** Water-bath colour from cold blue to hot red. */
  const bath = $derived.by(() => {
    const f = (draft.temperature - TEMPERATURE.min) / (TEMPERATURE.max - TEMPERATURE.min);
    const from = [191, 219, 254];
    const to = [254, 202, 202];
    return `rgb(${from.map((c, i) => Math.round(c + (to[i] - c) * f)).join(',')})`;
  });

  // Gas-volume chart.
  const CW = 300;
  const CH = 170;
  const PAD = { l: 40, r: 10, t: 22, b: 34 };
  const yTop = $derived(
    axisTop(
      Math.max(finalVolume(draft), ...[current, previous].map((r) => (r ? finalVolume(r) : 0))),
    ),
  );
  /** @param {number} s */
  const cx = (s) => PAD.l + (s / DURATION) * (CW - PAD.l - PAD.r);
  /** @param {number} v */
  const cy = (v) => CH - PAD.b - (v / yTop) * (CH - PAD.t - PAD.b);
  /** @param {import('./engine.js').Run} run @param {number} until */
  function curve(run, until) {
    /** @type {string[]} */
    const pts = [];
    for (let s = 0; s <= until + 1e-9; s += 0.5) pts.push(`${cx(s)},${cy(gasVolume(run, s))}`);
    if (until % 0.5) pts.push(`${cx(until)},${cy(gasVolume(run, until))}`);
    return pts.join(' ');
  }
  const yTicks = $derived([0, 0.2, 0.4, 0.6, 0.8, 1].map((f) => Math.round(f * yTop)));

  /** @param {import('./engine.js').Run} run */
  function describe(run) {
    const factor =
      run.reaction === 'da-voi'
        ? `đá vôi dạng ${SURFACES.find((s) => s.value === run.surface)?.label.toLowerCase()}`
        : run.catalyst
          ? 'có MnO₂'
          : 'không có xúc tác';
    return `${concentrationText(run)}, ${formatNumber(run.temperature)} °C, ${factor}`;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Phản ứng"
    options={reactionOptions}
    bind:value={reactionId}
    onchange={(v) => {
      chooseReaction(v);
      catalystChoice = 'khong';
      surfaceChoice = 'vien';
    }}
  />

  <p class="text-center text-sm font-semibold text-slate-700">
    {#if reactionId === 'da-voi'}
      <ChemFormula formula="CaCO3" /> + 2<ChemFormula formula="HCl" /> → <ChemFormula
        formula="CaCl2"
      /> + <ChemFormula formula="CO2" />↑ + <ChemFormula formula="H2O" />
      <span class="block font-normal text-slate-600"
        >0,1 g đá vôi trong 10 mL dung dịch HCl (acid dư)</span
      >
    {:else}
      2<ChemFormula formula="H2O2" /> → 2<ChemFormula formula="H2O" /> + <ChemFormula
        formula="O2"
      />↑
      <span class="block font-normal text-slate-600">5 mL dung dịch nước oxi già</span>
    {/if}
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label={conc.label}
      bind:value={draft.concentration}
      min={conc.min}
      max={conc.max}
      step={conc.step}
      format={(v) => concentrationText({ ...draft, concentration: v })}
    />
    <SliderField
      label="Nhiệt độ"
      bind:value={draft.temperature}
      min={TEMPERATURE.min}
      max={TEMPERATURE.max}
      step={TEMPERATURE.step}
      format={(v) => `${formatNumber(v)} °C`}
    />
    {#if reactionId === 'da-voi'}
      <SegmentedControl
        label="Dạng đá vôi (diện tích bề mặt tiếp xúc)"
        options={surfaceOptions}
        bind:value={surfaceChoice}
        onchange={(v) => {
          draft.surface = v === 'bot' ? 'bot' : v === 'manh' ? 'manh' : 'vien';
        }}
      />
    {:else}
      <SegmentedControl
        label="Chất xúc tác manganese dioxide"
        options={catalystOptions}
        bind:value={catalystChoice}
        onchange={(v) => {
          draft.catalyst = v === 'co';
        }}
      />
    {/if}
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={start}>
      {current && !fresh ? 'Làm lại thí nghiệm' : 'Tiến hành thí nghiệm'}
    </button>
    <button type="button" class={button.quiet} onclick={skip} disabled={!playing}>
      Xem ngay kết quả
    </button>
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
    <svg
      viewBox="0 0 200 252"
      class="mx-auto block h-auto w-full max-w-64"
      role="img"
      aria-label="Ống nghiệm trong cốc nước {formatNumber(
        draft.temperature,
      )} °C. {shown.reaction === 'da-voi'
        ? `Đá vôi còn khoảng ${formatNumber(left * 100, 0)}%`
        : `H₂O₂ còn khoảng ${formatNumber(left * 100, 0)}%${shown.catalyst ? ', có MnO₂ ở đáy ống' : ''}`}. Đã thu được {formatNumber(
        collected,
        1,
      )} mL khí."
    >
      <!-- water bath -->
      <rect x="20" y="110" width="100" height="120" rx="8" fill={bath} opacity="0.7" />
      <path d="M20 100 L20 230 L120 230 L120 100" fill="none" stroke="#64748b" stroke-width="2" />
      <text x="70" y="246" text-anchor="middle" font-size="11" fill="#334155"
        >{formatNumber(draft.temperature)} °C</text
      >
      <!-- liquid in the tube -->
      <path
        d="M48 70 L48 200 A22 22 0 0 0 92 200 L92 70 Z"
        fill={shown.reaction === 'da-voi' ? '#e0f2fe' : '#f0fdfa'}
      />
      {#if shown.reaction === 'da-voi'}
        {#each PIECES[shown.surface] as p, i (i)}
          <circle
            cx={p.x}
            cy={p.y}
            r={Math.max(0, p.r * Math.sqrt(left))}
            fill="#e7e5e4"
            stroke="#78716c"
            stroke-width="1"
          />
        {/each}
      {:else if shown.catalyst}
        {#each PIECES.bot.slice(0, 18) as p, i (i)}
          <circle cx={p.x + 4} cy={p.y} r="1.8" fill="#1f2937" />
        {/each}
      {/if}
      {#each fresh ? [] : bubbles as b (b.id)}
        <circle cx={b.x} cy={b.y} r={b.r} fill="white" stroke="#0ea5e9" stroke-width="0.8" />
      {/each}
      <!-- tube glass -->
      <path
        d="M44 30 L48 34 L48 200 A22 22 0 0 0 92 200 L92 34 L96 30"
        fill="none"
        stroke="#334155"
        stroke-width="2.5"
        stroke-linejoin="round"
      />
      <!-- stopper and delivery tube -->
      <rect x="50" y="34" width="40" height="14" rx="2" fill="#a16207" />
      <path d="M70 34 L70 16 L150 16 L150 70" fill="none" stroke="#64748b" stroke-width="3" />
      <!-- gas collected in an inverted measuring cylinder -->
      <rect
        x="135"
        y="60"
        width="30"
        height="170"
        fill="#f8fafc"
        stroke="#334155"
        stroke-width="2"
      />
      <rect
        x="136"
        y="61"
        width="28"
        height={(Math.min(collected, yTop) / yTop) * 168}
        fill="#fde68a"
      />
      {#each [0.25, 0.5, 0.75] as f (f)}
        <line x1="155" x2="165" y1={61 + f * 168} y2={61 + f * 168} stroke="#64748b" />
      {/each}
      <text x="150" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#334155"
        >{formatNumber(collected, 1)} mL</text
      >
    </svg>

    <div class="space-y-2">
      <svg
        viewBox="0 0 {CW} {CH}"
        class="block h-auto w-full"
        role="img"
        aria-label="Đồ thị thể tích khí thu được theo thời gian.{current
          ? ` Lần này (${describe(current)}): ${formatNumber(gasVolume(current, t), 1)} mL sau ${formatNumber(t, 0)} giây.`
          : ''}{previous
          ? ` Lần trước (${describe(previous)}): ${formatNumber(gasVolume(previous, DURATION), 1)} mL sau ${DURATION} giây.`
          : ''}"
      >
        {#each yTicks as v (v)}
          <line x1={PAD.l} x2={CW - PAD.r} y1={cy(v)} y2={cy(v)} stroke="#e2e8f0" />
          <text x={PAD.l - 4} y={cy(v) + 3} text-anchor="end" font-size="9" fill="#475569"
            >{formatNumber(v, 1)}</text
          >
        {/each}
        {#each [0, 10, 20, 30, 40, 50, 60] as s (s)}
          <text x={cx(s)} y={CH - PAD.b + 12} text-anchor="middle" font-size="9" fill="#475569"
            >{s}</text
          >
        {/each}
        <text
          x={(PAD.l + CW - PAD.r) / 2}
          y={CH - 6}
          text-anchor="middle"
          font-size="9"
          fill="#334155">Thời gian (giây)</text
        >
        <text x="4" y="8" font-size="9" fill="#334155">V khí (mL)</text>
        <line x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={CH - PAD.b} stroke="#64748b" />
        <line x1={PAD.l} x2={CW - PAD.r} y1={CH - PAD.b} y2={CH - PAD.b} stroke="#64748b" />
        {#if previous}
          <polyline
            points={curve(previous, DURATION)}
            fill="none"
            stroke="#94a3b8"
            stroke-width="2"
            stroke-dasharray="5 4"
          />
        {/if}
        {#if current}
          <polyline points={curve(current, t)} fill="none" stroke="#4f46e5" stroke-width="2.5" />
        {/if}
      </svg>
      <ul class="space-y-1 text-sm text-slate-700">
        {#if current}
          <li>
            <span class="font-bold text-indigo-700">━ Lần này</span>: {describe(current)} · lúc đầu
            {formatNumber(gasRate(current, 0), 2)} mL/giây
          </li>
        {/if}
        {#if previous}
          <li>
            <span class="font-bold text-slate-500">┅ Lần trước</span>: {describe(previous)} · lúc đầu
            {formatNumber(gasRate(previous, 0), 2)} mL/giây
          </li>
        {/if}
        {#if current}
          <li class="tabular-nums">
            t = {formatNumber(t, 0)} giây; đã thu được {formatNumber(gasVolume(current, t), 1)} mL khí
          </li>
        {/if}
      </ul>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
