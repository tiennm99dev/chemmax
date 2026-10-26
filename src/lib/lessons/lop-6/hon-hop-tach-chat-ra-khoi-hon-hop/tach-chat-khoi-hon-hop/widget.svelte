<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { METHODS, MIXTURES, WATER_SHARE, judge, judgeTap, mixtureById } from './engine.js';

  /** @typedef {import('./engine.js').Method} Method */

  // The draining funnel is the learner's own action, so it runs even under
  // prefers-reduced-motion; the other scenes then jump straight to the end.

  const MIX_OPTIONS = MIXTURES.map((m) => ({ value: m.id, label: m.name }));
  const DURATION = 2500;
  /** Share of the funnel's liquid that runs out per second while the tap is open. */
  const DRAIN_RATE = 0.1;

  let mixId = $state(MIXTURES[0].id);
  let stepIndex = $state(0);
  let running = $state(/** @type {Method | null} */ (null));
  let t = $state(0);
  let finished = $state(false);
  let message = $state('');
  let ok = $state(/** @type {boolean | null} */ (null));
  let drained = $state(0);
  let tapOpen = $state(false);
  let reduced = $state(false);

  const mix = $derived(mixtureById(mixId));
  const step = $derived(mix.steps[stepIndex]);
  /** Colour of the liquid shown before a step, and whether sand lies at the bottom. */
  const look = $derived.by(() => {
    if (mixId === 'muoi-cat') {
      if (stepIndex === 0) return { fill: '#ffffff', grains: true, sand: false };
      return { fill: '#e0f2fe', grains: false, sand: stepIndex === 1 };
    }
    if (mixId === 'dau-nuoc') return { fill: '#bfdbfe', grains: false, sand: false };
    if (mixId === 'nuoc-bien') return { fill: '#dbeafe', grains: false, sand: false };
    return {
      fill: mixId === 'phan-nuoc' ? '#cbd5e1' : '#d6b98c',
      grains: false,
      sand: mixId === 'nuoc-cat',
    };
  });

  $effect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = mq.matches;
    const on = () => (reduced = mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  });

  // Plays a filtering, evaporating or dissolving scene once.
  $effect(() => {
    if (!running || running === 'chiet' || t >= 1) return;
    if (reduced) {
      t = 1;
      return;
    }
    const start = performance.now() - t * DURATION;
    let frame = 0;
    const tick = () => {
      t = Math.min(1, (performance.now() - start) / DURATION);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });

  // Drains the separating funnel while its tap is open.
  $effect(() => {
    if (!tapOpen) return;
    let last = performance.now();
    let frame = 0;
    const tick = () => {
      const now = performance.now();
      drained = Math.min(1, drained + ((now - last) / 1000) * DRAIN_RATE);
      last = now;
      if (drained >= 1) {
        tapOpen = false;
        const r = judgeTap(1);
        ok = false;
        message = r.message;
      } else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });

  /** @param {string | number} v */
  function chooseMixture(v) {
    mixId = String(v);
    restart();
  }
  function restart() {
    stepIndex = 0;
    running = null;
    t = 0;
    finished = false;
    message = '';
    ok = null;
    drained = 0;
    tapOpen = false;
  }

  /** @param {Method} method */
  function choose(method) {
    const r = judge(mixId, stepIndex, method);
    ok = r.ok;
    if (!r.ok) {
      message = `${METHODS.find((m) => m.id === method)?.name}: chưa phù hợp. ${r.message}`;
      return;
    }
    running = method;
    t = 0;
    drained = 0;
    message =
      method === 'chiet'
        ? 'Đúng, dùng phễu chiết. Để hỗn hợp tách lớp, mở khoá cho lớp nước ở dưới chảy xuống và đóng khoá khi lớp dầu chạm tới khoá.'
        : `Đúng, dùng cách ${METHODS.find((m) => m.id === method)?.name.toLowerCase()}. Quan sát thí nghiệm.`;
  }

  $effect(() => {
    if (running && running !== 'chiet' && t >= 1 && !finished) finishStep();
  });

  function finishStep() {
    finished = true;
    message = step.result;
  }

  function closeTap() {
    tapOpen = false;
    const r = judgeTap(drained);
    ok = r.ok;
    message = r.message;
    if (r.ok) finished = true;
  }

  function next() {
    if (stepIndex < mix.steps.length - 1) {
      stepIndex += 1;
      running = null;
      t = 0;
      finished = false;
      ok = null;
      message = '';
    }
  }

  const last = $derived(stepIndex === mix.steps.length - 1);
  const allDone = $derived(finished && last);

  // ---- drawing helpers ----
  const lerp = (/** @type {number} */ a, /** @type {number} */ b, /** @type {number} */ k) =>
    a + (b - a) * k;
  const muddy = $derived(mixId === 'phan-nuoc' ? '#cbd5e1' : '#d6b98c');
  const solidColor = $derived(mixId === 'phan-nuoc' ? '#e2e8f0' : '#d97706');
  const filtrate = $derived(mixId === 'muoi-cat' ? '#e0f2fe' : '#bfdbfe');

  // Separating funnel: its straight body holds all the liquid.
  const BODY_TOP = 24;
  const BODY_BOTTOM = 140;
  const FLASK = 'M128 196 L128 214 L92 256 L188 256 L152 214 L152 196';
  /** Height in the flask that the whole funnel's liquid would fill. */
  const FLASK_H = 50;
  const bodyH = BODY_BOTTOM - BODY_TOP;
  const waterLeft = $derived(Math.max(0, WATER_SHARE - drained));
  const oilLeft = $derived(Math.min(1 - WATER_SHARE, 1 - drained));
  const oilDown = $derived(Math.max(0, drained - WATER_SHARE));
  const waterDown = $derived(Math.min(drained, WATER_SHARE));

  const scene = $derived(running ?? 'none');
  const sceneLabel = $derived.by(() => {
    if (scene === 'loc')
      return `Phễu lọc có giấy lọc đặt trên cốc. Đã lọc khoảng ${formatNumber(Math.round(t * 100))}% hỗn hợp.`;
    if (scene === 'co-can')
      return `Bát sứ đun trên đèn cồn. Nước đã bay hơi khoảng ${formatNumber(Math.round(t * 100))}%.`;
    if (scene === 'hoa-tan') return 'Cốc nước, khuấy hỗn hợp muối ăn lẫn cát.';
    if (scene === 'chiet')
      return `Phễu chiết chứa dầu ăn ở trên và nước ở dưới; khoá đang ${tapOpen ? 'mở' : 'đóng'}. Đã xả ${formatNumber(Math.round(drained * 100))}% chất lỏng; nước chiếm ${formatNumber(WATER_SHARE * 100)}%.`;
    return `${step.have}. Chọn cách tách.`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hỗn hợp cần tách"
    options={MIX_OPTIONS}
    value={mixId}
    onchange={chooseMixture}
  />

  <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
    <p><span class="font-semibold">Mục tiêu:</span> {mix.goal}</p>
    <p>
      <span class="font-semibold">Bước {stepIndex + 1}/{mix.steps.length}:</span> trong dụng cụ đang
      có
      {step.have.toLowerCase()}.
    </p>
  </div>

  <svg viewBox="0 0 320 260" class="block w-full max-w-sm" role="img" aria-label={sceneLabel}>
    {#if scene === 'loc'}
      <!-- funnel with filter paper over a beaker -->
      <path
        d="M90 40 L230 40 L170 130 L150 130 Z"
        fill="#f8fafc"
        stroke="#334155"
        stroke-width="2"
      />
      <path
        d="M100 44 L220 44 L162 126 L158 126 Z"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="4 3"
      />
      {#if t < 1}
        <path
          d="M{lerp(100, 140, t)} {lerp(50, 104, t)} L{lerp(220, 180, t)} {lerp(
            50,
            104,
            t,
          )} L162 120 L158 120 Z"
          fill={muddy}
        />
        {#if !reduced}
          <circle cx="160" cy={150 + ((t * 2000) % 40)} r="3" fill={filtrate} stroke="#60a5fa" />
        {/if}
      {/if}
      <path d="M140 108 L180 108 L163 124 L157 124 Z" fill={solidColor} opacity={0.3 + 0.7 * t} />
      <rect
        x="150"
        y="130"
        width="20"
        height="30"
        fill="#f8fafc"
        stroke="#334155"
        stroke-width="2"
      />
      <rect x="112" y={248 - 60 * t} width="96" height={60 * t} fill={filtrate} />
      <path
        d="M108 170 L112 174 L112 248 L208 248 L208 174 L212 170"
        fill="none"
        stroke="#334155"
        stroke-width="2.5"
      />
      <text x="232" y="116" font-size="11" fill="#334155">giấy lọc</text>
      <text x="216" y="240" font-size="11" fill="#334155">nước lọc</text>
    {:else if scene === 'co-can'}
      <!-- porcelain dish on a stand over a spirit lamp -->
      <path d="M100 120 Q160 175 220 120 Z" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
      {#if t < 1}
        <path
          d="M{lerp(106, 140, t)} {lerp(126, 145, t)} Q160 {lerp(166, 152, t)} {lerp(
            214,
            180,
            t,
          )} {lerp(126, 145, t)} Z"
          fill="#bfdbfe"
        />
        {#if !reduced}
          {#each [130, 160, 190] as x, i (x)}
            <path
              d="M{x} {110 - ((t * 300 + i * 20) % 50)} q-6 -8 0 -16 q6 -8 0 -16"
              fill="none"
              stroke="#cbd5e1"
              stroke-width="2"
            />
          {/each}
        {/if}
      {/if}
      {#each [140, 150, 160, 170, 180] as x, i (x)}
        <rect
          x={x - 3}
          y={146 + (i % 2) * 2}
          width="6"
          height="6"
          fill="#ffffff"
          stroke="#94a3b8"
          opacity={t > 0.6 ? (t - 0.6) / 0.4 : 0}
        />
      {/each}
      <line x1="96" y1="150" x2="224" y2="150" stroke="#475569" stroke-width="3" />
      <line x1="110" y1="150" x2="100" y2="250" stroke="#475569" stroke-width="3" />
      <line x1="210" y1="150" x2="220" y2="250" stroke="#475569" stroke-width="3" />
      <path
        d="M140 250 L140 215 L180 215 L180 250 Z"
        fill="#e0f2fe"
        stroke="#334155"
        stroke-width="2"
      />
      <rect x="157" y="205" width="6" height="10" fill="#64748b" />
      <ellipse cx="160" cy="190" rx="8" ry="15" fill="#f59e0b" opacity={t < 1 ? 0.9 : 0.3} />
      <text x="226" y="128" font-size="11" fill="#334155">bát sứ</text>
      <text x="186" y="240" font-size="11" fill="#334155">đèn cồn</text>
    {:else if scene === 'hoa-tan'}
      <rect x="90" y="80" width="140" height="170" fill="#e0f2fe" />
      <path d="M90 250 Q160 {250 - 26} 230 250 Z" fill="#d97706" />
      <path d="M100 250 Q160 {250 - 40 * (1 - t)} 220 250 Z" fill="#f8fafc" opacity={1 - t} />
      <line
        x1="200"
        y1="40"
        x2={lerp(150, 170, (t * 6) % 1)}
        y2="236"
        stroke="#64748b"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M84 60 L90 66 L90 250 L230 250 L230 66 L236 60"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      <text x="238" y="244" font-size="11" fill="#334155">cát</text>
      <text x="238" y="94" font-size="11" fill="#334155">nước muối</text>
    {:else if scene === 'chiet'}
      <!-- separating funnel held above a conical flask -->
      <rect x="130" y="4" width="20" height="10" fill="#94a3b8" />
      {#if oilLeft > 0}
        <rect
          x="110"
          y={BODY_BOTTOM - (waterLeft + oilLeft) * bodyH}
          width="60"
          height={oilLeft * bodyH}
          fill="#facc15"
        />
      {/if}
      {#if waterLeft > 0}
        <rect
          x="110"
          y={BODY_BOTTOM - waterLeft * bodyH}
          width="60"
          height={waterLeft * bodyH}
          fill="#60a5fa"
        />
      {/if}
      <path
        d="M112 {BODY_BOTTOM} L136 {BODY_BOTTOM + 20} L144 {BODY_BOTTOM + 20} L168 {BODY_BOTTOM} Z"
        fill={waterLeft > 0 ? '#60a5fa' : drained < 1 ? '#facc15' : 'none'}
      />
      <path
        d="M134 14 L110 {BODY_TOP} L110 {BODY_BOTTOM} L134 {BODY_BOTTOM + 22} L146 {BODY_BOTTOM +
          22} L170 {BODY_BOTTOM} L170 {BODY_TOP} L146 14"
        fill="none"
        stroke="#334155"
        stroke-width="2.5"
      />
      <rect x="137" y={BODY_BOTTOM + 22} width="6" height="30" fill="#f8fafc" stroke="#334155" />
      <rect
        x="128"
        y={BODY_BOTTOM + 30}
        width="24"
        height="8"
        rx="2"
        fill={tapOpen ? '#16a34a' : '#dc2626'}
        transform={tapOpen ? `rotate(90 140 ${BODY_BOTTOM + 34})` : ''}
      />
      {#if tapOpen}
        <line
          x1="140"
          y1={BODY_BOTTOM + 52}
          x2="140"
          y2="250"
          stroke={waterLeft > 0 ? '#60a5fa' : '#facc15'}
          stroke-width="3"
        />
      {/if}
      <!-- conical flask -->
      <clipPath id="separating-flask-clip">
        <path d={FLASK} />
      </clipPath>
      <g clip-path="url(#separating-flask-clip)">
        <rect
          x="80"
          y={256 - waterDown * FLASK_H}
          width="120"
          height={waterDown * FLASK_H}
          fill="#60a5fa"
          opacity="0.85"
        />
        {#if oilDown > 0}
          <rect
            x="80"
            y={256 - (waterDown + oilDown) * FLASK_H}
            width="120"
            height={oilDown * FLASK_H}
            fill="#facc15"
            opacity="0.9"
          />
        {/if}
      </g>
      <path d={FLASK} fill="none" stroke="#334155" stroke-width="2.5" />
      {#if oilLeft > 0.05}
        <text
          x="176"
          y={BODY_BOTTOM - (waterLeft + oilLeft / 2) * bodyH + 4}
          font-size="11"
          fill="#334155">dầu ăn</text
        >
      {/if}
      {#if waterLeft > 0.05}
        <text x="176" y={BODY_BOTTOM - (waterLeft / 2) * bodyH + 4} font-size="11" fill="#334155"
          >nước</text
        >
      {/if}
      <text x="124" y={BODY_BOTTOM + 37} text-anchor="end" font-size="11" fill="#334155">khoá</text>
      <text x="200" y="250" font-size="11" fill="#334155">bình hứng</text>
    {:else}
      <rect x="90" y="80" width="140" height="170" fill={look.fill} />
      {#if look.sand}
        <path d="M90 250 Q160 220 230 250 Z" fill="#d97706" />
      {/if}
      {#if mixId === 'dau-nuoc'}
        <rect x="90" y="80" width="140" height="50" fill="#facc15" />
      {:else if look.grains}
        {#each Array.from({ length: 40 }, (_, i) => i) as i (i)}
          <rect
            x={96 + ((i * 29) % 128)}
            y={200 + ((i * 17) % 44)}
            width="5"
            height="5"
            fill={i % 2 ? '#d97706' : '#f1f5f9'}
            stroke="#94a3b8"
            stroke-width="0.5"
          />
        {/each}
      {/if}
      <path
        d="M84 60 L90 66 L90 250 L230 250 L230 66 L236 60"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      <text x="160" y="40" text-anchor="middle" font-size="13" font-weight="600" fill="#1e293b"
        >{step.have}</text
      >
    {/if}
  </svg>

  {#if !running}
    <fieldset>
      <legend class="mb-1 text-sm font-semibold text-slate-700">Chọn cách tách cho bước này</legend>
      <div class="flex flex-wrap gap-2">
        {#each METHODS as m (m.id)}
          <button type="button" class={button.secondary} onclick={() => choose(m.id)}
            >{m.name}</button
          >
        {/each}
      </div>
    </fieldset>
  {/if}

  {#if running === 'chiet' && !finished}
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        onclick={() => ((tapOpen = true), (ok = null))}
        disabled={tapOpen || drained >= 1}
      >
        Mở khoá phễu
      </button>
      <button type="button" class={button.secondary} onclick={closeTap} disabled={!tapOpen}>
        Đóng khoá
      </button>
      <button
        type="button"
        class={button.quiet}
        onclick={() => ((drained = 0), (tapOpen = false), (ok = null))}
        disabled={drained === 0}
      >
        Đổ lại hỗn hợp
      </button>
    </div>
  {/if}

  <p
    class="rounded-xl px-4 py-3 text-sm {ok === false
      ? 'bg-amber-50 text-amber-900'
      : ok
        ? 'bg-emerald-50 text-emerald-900'
        : 'bg-slate-100 text-slate-800'}"
    aria-live="polite"
  >
    {message || 'Hãy chọn một cách tách phù hợp với hỗn hợp trong dụng cụ.'}
    {#if allDone}
      <strong> Em đã tách xong hỗn hợp {mix.name.toLowerCase()}.</strong>
    {/if}
  </p>

  <div class="flex flex-wrap gap-2">
    {#if finished && !last}
      <button type="button" class={button.primary} onclick={next}>Sang bước tiếp theo</button>
    {/if}
    {#if running || stepIndex > 0}
      <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
    {/if}
  </div>
</div>
