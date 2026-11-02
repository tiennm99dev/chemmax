<script>
  import { onDestroy } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber, tidy } from '#lib/core/number-format.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { rng } from '#lib/core/drill.js';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import CurvePlot from '../_shared/curve-plot.svelte';
  import {
    ACTION_NOTES,
    addGas,
    brownness,
    direction,
    isSettled,
    kc,
    pressure,
    rateShares,
    relax,
    setVolume,
    settled,
    unitsOf,
  } from './engine.js';

  const START_T = 25;
  const START_V = 1;
  const START_MOLES = 0.1;
  const DOSE = 0.02;
  const MOST_MOLES = 0.24;
  const WINDOW = 20;
  const COLORS = { no2: '#b45309', n2o4: '#4f46e5' };
  const DIRECTION_TEXT = {
    thuan: 'Đang chuyển dịch theo chiều thuận: $v_t > v_n$.',
    nghich: 'Đang chuyển dịch theo chiều nghịch: $v_n > v_t$.',
  };

  /** Fixed places for the drawn molecules, so they do not jump between frames. */
  const SPOTS = (() => {
    const rand = rng(23);
    return Array.from({ length: 60 }, () => ({ x: rand(), y: rand() }));
  })();

  let temperature = $state(START_T);
  let volume = $state(START_V);
  const START_GAS = settled(START_T, START_V, START_MOLES);
  let gas = $state.raw(START_GAS);
  let clock = $state(0);
  /** @type {Array<[number, number, number]>} */
  let trace = $state.raw([[0, START_GAS.no2, START_GAS.n2o4]]);
  let action = $state(/** @type {import('./engine.js').GasAction | null} */ (null));
  /** @type {(() => void) | null} */
  let stop = null;

  const dir = $derived(direction(gas));
  const shares = $derived(rateShares(gas));
  const k = $derived(kc(gas.tC));
  const windowStart = $derived(Math.max(0, clock - WINDOW));
  const shown = $derived(trace.filter((p) => p[0] >= windowStart));
  const peak = $derived(Math.max(0.1, ...shown.map((p) => Math.max(p[1], p[2]))));
  const yMax = $derived(tidy(Math.ceil(peak / 0.05) * 0.05));

  const series = $derived([
    {
      points: /** @type {Array<[number, number]>} */ (shown.map((p) => [p[0], p[1]])),
      color: COLORS.no2,
    },
    {
      points: /** @type {Array<[number, number]>} */ (shown.map((p) => [p[0], p[2]])),
      color: COLORS.n2o4,
      dashed: true,
    },
  ]);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'info', text: string }} */ () => {
      if (!action) {
        return {
          tone: 'info',
          text: 'Hệ đang cân bằng: $v_t = v_n$, nồng độ các khí không đổi. Hãy đổi nhiệt độ, đẩy piston hoặc thêm khí.',
        };
      }
      if (dir === 'can-bang') {
        return {
          tone: 'ok',
          text: `${ACTION_NOTES[action]} Cân bằng mới đã thiết lập: $v_t = v_n$.`,
        };
      }
      return { tone: 'info', text: `${DIRECTION_TEXT[dir]} ${ACTION_NOTES[action]}` };
    },
  );

  /** Piston height in the drawing: the gas column scales with the volume. */
  const BOX = { x: 30, w: 140, bottom: 196 };
  const columnH = $derived(gas.volume * 80);
  const columnTop = $derived(BOX.bottom - columnH);

  const counts = $derived({
    no2: Math.min(60, Math.round(gas.no2 * gas.volume * 400)),
    n2o4: Math.min(30, Math.round(gas.n2o4 * gas.volume * 400)),
  });
  const dots = $derived(
    SPOTS.slice(0, counts.no2 + counts.n2o4).map((s, i) => ({
      id: i,
      x: BOX.x + 10 + s.x * (BOX.w - 20),
      y: columnTop + 8 + s.y * (columnH - 16),
      pair: i >= counts.no2,
    })),
  );

  function halt() {
    stop?.();
    stop = null;
  }

  /** Records the state on the plot, thinning old points so the list stays short. */
  function record() {
    trace = [...trace.filter((p) => p[0] >= clock - WINDOW - 1), [clock, gas.no2, gas.n2o4]];
  }

  /** Lets the gas settle after a change: animated, or at once with reduced motion. */
  function settle() {
    record();
    if (reducedMotion()) {
      halt();
      clock += 6;
      gas = relax(gas, 60);
      record();
      return;
    }
    if (stop) return;
    stop = frameLoop((dt) => {
      clock += dt;
      gas = relax(gas, dt);
      record();
      if (isSettled(gas)) {
        // A short flat tail shows the new level on the plot.
        clock += 0.5;
        record();
        halt();
      }
    });
  }

  /** @param {number} value */
  function onTemperature(value) {
    if (value === gas.tC) return;
    action = value > gas.tC ? 'heat' : 'cool';
    gas = { ...gas, tC: value };
    settle();
  }

  /** @param {number} value */
  function onVolume(value) {
    if (value === gas.volume) return;
    action = value < gas.volume ? 'compress' : 'expand';
    gas = setVolume(gas, value);
    settle();
  }

  /** @param {'no2' | 'n2o4'} kind */
  function add(kind) {
    action = kind === 'no2' ? 'add-no2' : 'add-n2o4';
    gas = addGas(gas, kind, DOSE);
    settle();
  }

  function reset() {
    halt();
    temperature = START_T;
    volume = START_V;
    gas = START_GAS;
    clock = 0;
    action = null;
    trace = [[0, START_GAS.no2, START_GAS.n2o4]];
  }

  onDestroy(halt);
</script>

<div class="space-y-4">
  <p class="text-center text-lg">
    <span>2<ChemFormula formula="NO2" /> (nâu đỏ)</span>
    <span class="mx-1" aria-label="thuận nghịch">⇌</span>
    <span><ChemFormula formula="N2O4" /> (không màu)</span>
    <span class="block text-sm text-slate-600">Chiều thuận toả nhiệt.</span>
  </p>

  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-3">
      <svg
        viewBox="0 0 200 210"
        class="mx-auto block w-full max-w-xs"
        role="img"
        aria-label="Xi lanh chứa hỗn hợp khí: nồng độ NO2 {formatNumber(
          gas.no2,
          3,
        )} mol/L, N2O4 {formatNumber(gas.n2o4, 3)} mol/L"
      >
        <rect
          x={BOX.x}
          y={columnTop}
          width={BOX.w}
          height={columnH}
          fill="#92400e"
          opacity={brownness(gas.no2)}
        />
        {#each dots as d (d.id)}
          {#if d.pair}
            <circle cx={d.x - 2.5} cy={d.y} r="3" fill={COLORS.n2o4} />
            <circle cx={d.x + 2.5} cy={d.y} r="3" fill={COLORS.n2o4} />
          {:else}
            <circle cx={d.x} cy={d.y} r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.7" />
          {/if}
        {/each}
        <rect x={BOX.x - 2} y={columnTop - 9} width={BOX.w + 4} height="9" fill="#475569" />
        <rect
          x={BOX.x + BOX.w / 2 - 4}
          y="0"
          width="8"
          height={Math.max(0, columnTop - 9)}
          fill="#64748b"
        />
        <path
          d="M {BOX.x} 6 L {BOX.x} {BOX.bottom} L {BOX.x + BOX.w} {BOX.bottom} L {BOX.x + BOX.w} 6"
          fill="none"
          stroke="#334155"
          stroke-width="3"
        />
      </svg>
      <p class="text-center text-xs text-slate-600">
        <span class="mr-3"
          ><span class="mr-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400"></span>phân tử
          <ChemFormula formula="NO2" /></span
        >
        <span
          ><span class="mr-1 inline-block h-2.5 w-4 rounded-full bg-indigo-600"></span>phân tử
          <ChemFormula formula="N2O4" /></span
        >
      </p>
      <div class="space-y-2">
        <div>
          <div class="mb-1 text-sm font-semibold text-slate-700">
            Tốc độ phản ứng thuận v<sub>t</sub>
          </div>
          <div class="h-3 overflow-hidden rounded bg-slate-100">
            <div class="h-full bg-indigo-500" style:width="{shares.forward * 100}%"></div>
          </div>
        </div>
        <div>
          <div class="mb-1 text-sm font-semibold text-slate-700">
            Tốc độ phản ứng nghịch v<sub>n</sub>
          </div>
          <div class="h-3 overflow-hidden rounded bg-slate-100">
            <div class="h-full bg-amber-500" style:width="{shares.reverse * 100}%"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-3">
      <SliderField
        label="Nhiệt độ"
        bind:value={temperature}
        min={0}
        max={100}
        step={5}
        unit="°C"
        oninput={onTemperature}
      />
      <SliderField
        label="Thể tích xi lanh (đẩy piston để đổi áp suất)"
        bind:value={volume}
        min={0.5}
        max={2}
        step={0.1}
        unit="L"
        oninput={onVolume}
      />
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.secondary}
          disabled={unitsOf(gas) + DOSE > MOST_MOLES}
          onclick={() => add('no2')}
        >
          Thêm <ChemFormula formula="NO2" />
        </button>
        <button
          type="button"
          class={button.secondary}
          disabled={unitsOf(gas) + 2 * DOSE > MOST_MOLES}
          onclick={() => add('n2o4')}
        >
          Thêm <ChemFormula formula="N2O4" />
        </button>
        <button type="button" class={button.quiet} onclick={reset}>Đặt lại</button>
      </div>
      <dl class="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-slate-50 p-3 text-sm tabular-nums">
        <dt class="text-slate-600">[<ChemFormula formula="NO2" />]</dt>
        <dd class="text-right font-semibold">{formatFixed(gas.no2, 3)} mol/L</dd>
        <dt class="text-slate-600">[<ChemFormula formula="N2O4" />]</dt>
        <dd class="text-right font-semibold">{formatFixed(gas.n2o4, 3)} mol/L</dd>
        <dt class="text-slate-600">Áp suất</dt>
        <dd class="text-right font-semibold">{formatFixed(pressure(gas), 2)} bar</dd>
        <dt class="text-slate-600">
          <span>K</span><sub>C</sub> ở {formatNumber(gas.tC)} °C
        </dt>
        <dd class="text-right font-semibold">≈ {formatNumber(k, 1)}</dd>
      </dl>
    </div>
  </div>

  <CurvePlot
    xMax={WINDOW}
    xStart={windowStart}
    xStep={5}
    {yMax}
    yStep={0.05}
    xName="t (s)"
    yName="C (mol/L)"
    label="Nồng độ NO2 (nét liền) và N2O4 (nét đứt) theo thời gian"
    {series}
  />

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
