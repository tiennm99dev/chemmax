<script>
  import { readNumber } from '#lib/core/decimal.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatFixed, formatNumber, numTex, tidy } from '#lib/core/number-format.js';
  import { button, textInput } from '#lib/core/ui.js';
  import LabGlassware from '#lib/domain/lab-glassware.svelte';
  import CurvePlot from '../_shared/curve-plot.svelte';
  import {
    ACID_C,
    ACID_V,
    INDICATORS,
    MAX_V,
    SAMPLES,
    baseFromVolume,
    idealCurve,
    indicatorColor,
    judgeResult,
    overshot,
    phAfter,
    reachedEnd,
  } from './engine.js';

  const STEPS = [
    { amount: 1, label: 'Mở khoá: +1 mL' },
    { amount: 0.1, label: '+0,1 mL' },
    { amount: 0.05, label: '+1 giọt (0,05 mL)' },
  ];
  const INDICATOR_OPTIONS = INDICATORS.map((i) => ({ value: i.id, label: i.name }));
  const LAST_SAMPLE = SAMPLES.length - 1;

  let sample = $state(0);
  let indicatorId = $state(INDICATORS[0].id);
  let added = $state(0);
  /** @type {Array<[number, number]>} */
  let points = $state.raw([[0, phAfter(ACID_C, ACID_V, SAMPLES[0], 0)]]);
  let typed = $state('');
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let reply = $state(null);
  let solved = $state(false);

  const cb = $derived(SAMPLES[sample]);
  const indicator = $derived(INDICATORS.find((i) => i.id === indicatorId) ?? INDICATORS[0]);
  const ph = $derived(phAfter(ACID_C, ACID_V, cb, added));
  const color = $derived(indicatorColor(indicator, ph));
  const ended = $derived(reachedEnd(indicator, ph));
  const past = $derived(overshot(cb, added));

  const series = $derived([
    ...(solved ? [{ points: idealCurve(cb, MAX_V), color: '#94a3b8', dashed: true }] : []),
    { points, color: '#4f46e5' },
  ]);
  const band = $derived({ from: indicator.low, to: indicator.high, color: '#a78bfa' });

  const status = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (past) {
        return {
          tone: 'warn',
          text: `Đã nhỏ quá nhiều: dung dịch đã đổi màu hẳn và $\\mathrm{NaOH}$ dư. Bấm “Làm lại” rồi nhỏ từng giọt khi gần đến điểm cuối.`,
        };
      }
      if (ended) {
        return {
          tone: 'ok',
          text: `Dừng lại: chất chỉ thị vừa đổi màu từ ${indicator.change}. Đọc thể tích trên burette rồi tính nồng độ $\\mathrm{NaOH}$.`,
        };
      }
      if (added === 0) {
        return {
          tone: 'info',
          text: `Bình tam giác có $${ACID_V}$ mL $\\mathrm{HCl}$ $0{,}1$ M và chất chỉ thị. Burette chứa $\\mathrm{NaOH}$ chưa biết nồng độ. Hãy mở khoá burette để nhỏ dung dịch xuống.`,
        };
      }
      return {
        tone: 'info',
        text: 'Mỗi lần nhỏ, $\\mathrm{OH^-}$ trung hoà bớt $\\mathrm{H^+}$. Càng gần điểm tương đương, pH càng thay đổi nhanh, nên hãy nhỏ chậm lại.',
      };
    },
  );

  /** @param {number} amount */
  function pour(amount) {
    const next = Math.min(MAX_V, tidy(added + amount, 2));
    if (next === added) return;
    added = next;
    points = [...points, [added, phAfter(ACID_C, ACID_V, cb, added)]];
    reply = null;
  }

  function restart() {
    added = 0;
    points = [[0, phAfter(ACID_C, ACID_V, cb, 0)]];
    typed = '';
    reply = null;
    solved = false;
  }

  function nextSample() {
    sample = sample === LAST_SAMPLE ? 0 : sample + 1;
    restart();
  }

  function check() {
    const value = readNumber(typed);
    const verdict = judgeResult(cb, added, value, indicator);
    if (verdict === 'invalid') {
      reply = { tone: 'warn', text: 'Hãy nhập một số, ví dụ 0,12.' };
    } else if (verdict === 'too-early') {
      reply = {
        tone: 'warn',
        text: 'Chưa đến điểm cuối: chất chỉ thị chưa đổi màu, hãy nhỏ tiếp.',
      };
    } else if (verdict === 'overshot') {
      reply = {
        tone: 'warn',
        text: 'Số đọc này đã vượt điểm tương đương nên kết quả sai. Hãy làm lại.',
      };
    } else if (verdict === 'wrong') {
      reply = {
        tone: 'warn',
        text: 'Chưa đúng. Tại điểm tương đương, số mol $\\mathrm{HCl}$ bằng số mol $\\mathrm{NaOH}$: $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
      };
    } else {
      solved = true;
      const workedOut = `$C_{\\mathrm{NaOH}} = \\dfrac{C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}}}{V_{\\mathrm{NaOH}}} = \\dfrac{0{,}1 \\cdot ${ACID_V}}{${numTex(added, 2)}} \\approx ${numTex(baseFromVolume(added), 3)}$ M`;
      reply = {
        tone: 'ok',
        text: `Đúng. ${workedOut}. Đường nét đứt là đường chuẩn độ đầy đủ: pH nhảy rất nhanh quanh điểm tương đương.`,
      };
    }
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Chất chỉ thị" options={INDICATOR_OPTIONS} bind:value={indicatorId} />

  <div class="grid gap-4 md:grid-cols-2">
    <div class="grid grid-cols-2 items-end gap-2">
      <LabGlassware
        vessel="burette"
        volume={added}
        reading={false}
        liquid="#bae6fd"
        label="Burette chứa dung dịch NaOH"
      />
      <svg
        viewBox="0 0 120 130"
        class="mx-auto block w-full max-w-[9rem]"
        role="img"
        aria-label="Bình tam giác: dung dịch có màu theo chất chỉ thị {indicator.name}, pH {formatFixed(
          ph,
          2,
        )}"
      >
        <path
          d="M 14 118 Q 11 125 18 125 L 102 125 Q 109 125 106 118 L 77 62 L 43 62 Z"
          fill={color}
        />
        <path
          d="M 50 6 L 50 46 L 12 120 Q 10 126 18 126 L 102 126 Q 110 126 108 120 L 70 46 L 70 6"
          fill="none"
          stroke="#334155"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="space-y-3">
      <dl class="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-slate-50 p-3 text-sm tabular-nums">
        <dt class="text-slate-600">Số đọc burette</dt>
        <dd class="text-right font-semibold">{formatFixed(added, 2)} mL</dd>
        <dt class="text-slate-600">pH trong bình</dt>
        <dd class="text-right font-semibold">{formatFixed(ph, 2)}</dd>
        <dt class="text-slate-600">Khoảng đổi màu</dt>
        <dd class="text-right font-semibold">
          {formatNumber(indicator.low)} – {formatNumber(indicator.high)}
        </dd>
      </dl>
      <div class="flex flex-wrap gap-2">
        {#each STEPS as step (step.amount)}
          <button
            type="button"
            class={button.secondary}
            disabled={added >= MAX_V}
            onclick={() => pour(step.amount)}
          >
            {step.label}
          </button>
        {/each}
        <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
        <button type="button" class={button.quiet} onclick={nextSample}>Mẫu khác</button>
      </div>
      <form
        class="flex flex-wrap items-end gap-2"
        onsubmit={(e) => {
          e.preventDefault();
          check();
        }}
      >
        <label class="min-w-40 flex-1">
          <span class="mb-1 block text-sm font-semibold text-slate-700"
            >Nồng độ NaOH tính được (mol/L)</span
          >
          <input class={textInput} inputmode="decimal" autocomplete="off" bind:value={typed} />
        </label>
        <button type="submit" class={button.primary}>Kiểm tra</button>
      </form>
    </div>
  </div>

  <CurvePlot
    xMax={MAX_V}
    xStep={5}
    yMax={14}
    yStep={2}
    xName="V NaOH (mL)"
    yName="pH"
    label="Đường chuẩn độ: pH trong bình theo thể tích NaOH đã nhỏ, dải màu là khoảng đổi màu của {indicator.name}"
    {series}
    {band}
  />

  <FeedbackNote tone={status.tone} text={status.text} />
  {#if reply}
    <FeedbackNote tone={reply.tone} text={reply.text} />
  {/if}
</div>
