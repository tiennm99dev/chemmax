<script>
  import { untrack } from 'svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import {
    BOX,
    CURVE,
    HEAT_MAX,
    layout,
    liquidLevel,
    particleNote,
    processName,
    stateAt,
  } from './engine.js';

  let heat = $state(5);
  let up = $state(true);
  let time = $state(0);
  /** @type {1 | -1 | 0} */
  let auto = $state(0);
  let reduced = $state(false);

  const s = $derived(stateAt(heat));
  const points = $derived(layout(s, time));
  const level = $derived(liquidLevel(s));
  const process = $derived(processName(s.stage, up));
  const tempText = $derived(`${formatNumber(Math.round(s.temp))} °C`);

  $effect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = mq.matches;
    const on = () => (reduced = mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  });

  // Particle motion runs unless the reader prefers reduced motion.
  $effect(() => {
    if (reduced) return;
    let frame = 0;
    const start = performance.now() - untrack(() => time) * 1000;
    const tick = () => {
      time = (performance.now() - start) / 1000;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });

  // Automatic heating or cooling, started only by a button press.
  $effect(() => {
    if (auto === 0) return;
    const dir = auto;
    const id = setInterval(() => {
      const next = heat + dir * 0.5;
      if (next < 0 || next > HEAT_MAX) {
        auto = 0;
        return;
      }
      moveTo(next);
    }, 80);
    return () => clearInterval(id);
  });

  /** @param {number} v */
  function moveTo(v) {
    if (v !== heat) up = v > heat;
    heat = v;
  }

  /** @param {1 | -1} dir */
  function toggleAuto(dir) {
    auto = auto === dir ? 0 : dir;
  }

  const COLORS = { solid: '#7dd3fc', liquid: '#2563eb', gas: '#94a3b8' };

  // Heating curve geometry.
  const CW = 320;
  const CH = 150;
  const PAD = { l: 40, r: 10, t: 12, b: 26 };
  /** @param {number} q */
  const cx = (q) => PAD.l + (q / HEAT_MAX) * (CW - PAD.l - PAD.r);
  /** @param {number} t */
  const cy = (t) => CH - PAD.b - ((t + 30) / 150) * (CH - PAD.t - PAD.b);
  const curvePath = CURVE.map(([q, t], i) => `${i ? 'L' : 'M'}${cx(q)},${cy(t)}`).join(' ');

  const bubbles = $derived(
    s.stage === 'soi'
      ? [0, 1, 2, 3].map((i) => {
          const u = (time * 0.6 + i * 0.25) % 1;
          return { x: 140 + i * 40, y: BOX.bottom - 4 - u * Math.max(0, level - 10), r: 3 + u * 4 };
        })
      : [],
  );
</script>

<div class="space-y-4">
  <SliderField
    label="Nhiệt lượng cung cấp cho nước"
    min={0}
    max={HEAT_MAX}
    step={0.5}
    value={heat}
    format={() => `nhiệt độ ${tempText}`}
    oninput={moveTo}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={() => toggleAuto(1)}>
      {auto === 1 ? 'Dừng đun' : 'Đun nóng dần'}
    </button>
    <button type="button" class={button.quiet} onclick={() => toggleAuto(-1)}>
      {auto === -1 ? 'Dừng làm lạnh' : 'Làm lạnh dần'}
    </button>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <svg
      viewBox="0 0 320 220"
      class="block w-full rounded-xl bg-slate-50"
      role="img"
      aria-label="Các hạt nước trong bình: {s.solid} hạt ở thể rắn, {s.liquid} hạt ở thể lỏng, {s.gas} hạt ở thể hơi. Nhiệt độ {tempText}."
    >
      <rect
        x={BOX.left - 4}
        y={BOX.top - 4}
        width={BOX.right - BOX.left + 8}
        height={BOX.bottom - BOX.top + 8}
        rx="8"
        fill="none"
        stroke="#475569"
        stroke-width="2"
      />
      {#if level > 0}
        <rect
          x={BOX.left + Math.ceil(s.solid / 5) * 16}
          y={BOX.bottom - level}
          width={BOX.right - BOX.left - Math.ceil(s.solid / 5) * 16}
          height={level + 2}
          fill="#dbeafe"
        />
      {/if}
      {#each bubbles as b, i (i)}
        <circle cx={b.x} cy={b.y} r={b.r} fill="#fff" stroke="#93c5fd" />
      {/each}
      {#each points as p, i (i)}
        <circle
          cx={p.x}
          cy={p.y}
          r="6"
          fill={COLORS[p.phase]}
          stroke="#0f172a"
          stroke-width="0.6"
        />
      {/each}
      <rect x="236" y="12" width="74" height="22" rx="4" fill="#fff" opacity="0.85" />
      <text x="306" y="28" font-size="16" font-weight="700" text-anchor="end" fill="#b91c1c"
        >{tempText}</text
      >
    </svg>

    <svg
      viewBox="0 0 {CW} {CH}"
      class="block w-full"
      role="img"
      aria-label="Đồ thị nhiệt độ theo nhiệt lượng cung cấp, có hai đoạn nằm ngang ở 0 °C và 100 °C"
    >
      {#each [-30, 0, 50, 100] as t (t)}
        <line x1={PAD.l} x2={CW - PAD.r} y1={cy(t)} y2={cy(t)} stroke="#e2e8f0" />
        <text x={PAD.l - 4} y={cy(t) + 4} font-size="10" text-anchor="end" fill="#334155"
          >{formatNumber(t)}</text
        >
      {/each}
      <text x={PAD.l - 4} y="10" font-size="10" text-anchor="end" fill="#334155">°C</text>
      <text x={CW - PAD.r} y={CH - 6} font-size="10" text-anchor="end" fill="#334155"
        >nhiệt lượng cung cấp →</text
      >
      <path d={curvePath} fill="none" stroke="#6366f1" stroke-width="2.5" />
      <text x={cx(25)} y={cy(0) - 6} font-size="10" text-anchor="middle" fill="#0369a1"
        >nóng chảy</text
      >
      <text x={cx(75)} y={cy(100) - 6} font-size="10" text-anchor="middle" fill="#0369a1">sôi</text>
      <circle cx={cx(s.heat)} cy={cy(s.temp)} r="6" fill="#dc2626" stroke="#fff" stroke-width="2" />
    </svg>
  </div>

  <div class="flex flex-wrap gap-3 text-xs text-slate-600">
    <span
      ><span class="inline-block size-3 rounded-full" style:background={COLORS.solid}></span> hạt ở thể
      rắn</span
    >
    <span
      ><span class="inline-block size-3 rounded-full" style:background={COLORS.liquid}></span> hạt ở thể
      lỏng</span
    >
    <span
      ><span class="inline-block size-3 rounded-full" style:background={COLORS.gas}></span> hạt ở thể
      hơi</span
    >
  </div>

  <div class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800">
    <p>Nhiệt độ của nước: <strong>{tempText}</strong></p>
    <div aria-live="polite">
      <p><strong>{process}.</strong></p>
      <p class="mt-1">{particleNote(s)}</p>
    </div>
  </div>
</div>
