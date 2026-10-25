<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatFixed } from '#lib/core/number-format.js';
  import {
    MARK_A,
    MARK_B,
    SLOPES,
    TRACK,
    elapsed,
    gateInterval,
    judgeTrial,
    mean,
    position,
    reading,
    reset,
    secondsText,
    start,
    stop,
    stopwatch,
    timeAt,
  } from './engine.js';

  // The rolling ball is the thing being timed, so it moves even under
  // prefers-reduced-motion; it only moves when the learner releases it.

  const SLOPE_OPTIONS = SLOPES.map((s) => ({ value: s.id, label: s.name }));
  const MAX_TRIALS = 5;

  let slopeId = $state(SLOPES[0].id);
  /** @type {number | null} */
  let releasedAt = $state(null);
  let now = $state(0);
  let sw = $state(stopwatch());
  let fromZero = $state(true);
  /** @type {Array<{ measured: number, ok: boolean, message: string }>} */
  let trials = $state([]);
  let note = $state(
    'Bấm "Thả bi". Bấm Start khi bi qua vạch A, bấm Stop khi bi qua vạch B rồi ghi kết quả.',
  );

  const slope = $derived(SLOPES.find((s) => s.id === slopeId) ?? SLOPES[0]);
  const truth = $derived(gateInterval(slope.accel));
  const t = $derived(releasedAt === null ? 0 : (now - releasedAt) / 1000);
  const s = $derived(position(slope.accel, t));
  const ballDone = $derived(releasedAt !== null && s >= TRACK);
  const passedB = $derived(releasedAt !== null && t >= timeAt(slope.accel, MARK_B));
  const shown = $derived(reading(elapsed(sw, now)));
  const average = $derived(mean(trials.filter((x) => x.ok).map((x) => x.measured)));

  const X0 = 24;
  const Y0 = 34;
  const X1 = 336;
  const Y1 = 112;
  /** @param {number} d metres along the track */
  const along = (d) => ({
    x: X0 + (d / TRACK) * (X1 - X0),
    y: Y0 + (d / TRACK) * (Y1 - Y0),
  });
  const ball = $derived(along(s));
  const gateA = along(MARK_A);
  const gateB = along(MARK_B);

  // Keep `now` ticking while the ball rolls or the stopwatch runs.
  $effect(() => {
    const moving = (releasedAt !== null && !ballDone) || sw.running;
    if (!moving) return;
    let frame = 0;
    const tickNow = () => {
      now = performance.now();
      frame = requestAnimationFrame(tickNow);
    };
    frame = requestAnimationFrame(tickNow);
    return () => cancelAnimationFrame(frame);
  });

  function release() {
    now = performance.now();
    releasedAt = now;
    note = 'Bi đang lăn. Theo dõi vạch A và vạch B.';
  }
  function pressStart() {
    if (sw.running) return;
    now = performance.now();
    fromZero = sw.base === 0;
    sw = start(sw, now);
  }
  function pressStop() {
    now = performance.now();
    sw = stop(sw, now);
  }
  function pressReset() {
    if (sw.running) {
      note = 'Đồng hồ đang chạy: bấm Stop trước, rồi mới bấm Reset.';
      return;
    }
    sw = reset(sw);
    fromZero = true;
    note = 'Đồng hồ đã về 0,00 s.';
  }
  function record() {
    if (sw.running) {
      note = 'Bấm Stop trước khi ghi kết quả.';
      return;
    }
    if (sw.base === 0) {
      note = 'Đồng hồ đang chỉ 0,00 s: hãy đo trước rồi mới ghi.';
      return;
    }
    const r = judgeTrial({ measured: shown, truth, fromZero });
    trials = [...trials, { measured: shown, ...r }].slice(-MAX_TRIALS);
    note = `Lần ${trials.length}: ${secondsText(shown)} s. ${r.message}`;
  }
  /** @param {string | number} id */
  function chooseSlope(id) {
    slopeId = String(id);
    releasedAt = null;
    trials = [];
    note = 'Đã đổi máng: các lần đo cũ được xoá. Bấm "Thả bi" để đo lại.';
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Độ nghiêng của máng"
    options={SLOPE_OPTIONS}
    value={slopeId}
    onchange={chooseSlope}
  />

  <svg
    viewBox="0 0 360 150"
    class="block w-full"
    role="img"
    aria-label="Viên bi trên máng nghiêng, vạch A và vạch B có gắn cổng quang điện"
  >
    <line x1={X0} y1={Y0 + 10} x2={X1} y2={Y1 + 10} stroke="#475569" stroke-width="4" />
    <line x1={X1} y1={Y1 - 6} x2={X1} y2={Y1 + 14} stroke="#475569" stroke-width="4" />
    {#each [{ p: gateA, name: 'A' }, { p: gateB, name: 'B' }] as g (g.name)}
      <line
        x1={g.p.x}
        y1={g.p.y - 16}
        x2={g.p.x}
        y2={g.p.y + 14}
        stroke="#7c3aed"
        stroke-width="2"
      />
      <rect x={g.p.x - 6} y={g.p.y - 22} width="12" height="8" rx="2" fill="#7c3aed" />
      <text x={g.p.x} y={g.p.y + 30} font-size="12" text-anchor="middle" fill="#4c1d95"
        >{g.name}</text
      >
    {/each}
    <circle cx={ball.x} cy={ball.y + 1} r="8" fill="#2563eb" stroke="#1e3a8a" />
    <text x="356" y="16" font-size="11" text-anchor="end" fill="#334155">
      Cổng quang điện: {passedB ? `${formatFixed(truth, 3)} s` : 'đang chờ'}
    </text>
  </svg>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      onclick={release}
      disabled={releasedAt !== null && !ballDone}
    >
      Thả bi
    </button>
  </div>

  <div class="rounded-2xl border border-slate-300 bg-slate-800 p-4 text-center text-white">
    <p class="text-xs uppercase tracking-wide text-slate-300">Đồng hồ bấm giây (ĐCNN 0,01 s)</p>
    <p class="font-mono text-4xl tabular-nums" aria-hidden="true">{secondsText(shown)} s</p>
    <div class="mt-3 flex flex-wrap justify-center gap-2">
      <button type="button" class={button.primary} onclick={pressStart}>Start</button>
      <button type="button" class={button.primary} onclick={pressStop}>Stop</button>
      <button type="button" class={button.quiet} onclick={pressReset}>Reset</button>
    </div>
  </div>

  <button type="button" class={button.secondary} onclick={record}>Ghi kết quả</button>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">{note}</p>

  {#if trials.length > 0}
    <table class="w-full text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700"
        >Kết quả các lần đo (cổng quang điện: {formatFixed(truth, 3)} s)</caption
      >
      <thead>
        <tr class="border-b border-slate-300 text-left">
          <th class="py-1">Lần đo</th>
          <th class="py-1">Thời gian (s)</th>
          <th class="py-1">Nhận xét</th>
        </tr>
      </thead>
      <tbody>
        {#each trials as trial, i (i)}
          <tr class="border-b border-slate-100">
            <td class="py-1">{i + 1}</td>
            <td class="py-1 tabular-nums">{secondsText(trial.measured)}</td>
            <td class="py-1 {trial.ok ? 'text-emerald-700' : 'text-amber-700'}"
              >{trial.ok ? 'Dùng được' : 'Đo lại'}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="text-sm text-slate-700">
      {#if Number.isFinite(average)}
        Trung bình các lần đo dùng được: <strong>{formatFixed(average, 2)} s</strong>. Đo nhiều lần
        rồi lấy trung bình giúp giảm sai lệch do phản xạ của tay.
      {:else}
        Chưa có lần đo nào dùng được để tính trung bình.
      {/if}
    </p>
  {/if}
</div>
