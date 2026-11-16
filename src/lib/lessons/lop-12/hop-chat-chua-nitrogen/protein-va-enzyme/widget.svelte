<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import CurvePlot from '#lib/domain/curve-plot.svelte';
  import {
    DENATURE_T,
    ENZYMES,
    SUBSTRATES,
    activity,
    curve,
    denatures,
    enzyme,
    fits,
    substrate,
  } from './engine.js';

  /** @typedef {import('./engine.js').EnzymeId} EnzymeId */
  /** @typedef {import('./engine.js').SubstrateId} SubstrateId */
  /** @typedef {import('./engine.js').Shape} Shape */

  let enzymeId = $state(/** @type {EnzymeId} */ ('amylase'));
  let substrateId = $state(/** @type {SubstrateId} */ ('tinh-bot'));
  let t = $state(25);
  let pH = $state(7);
  let ruined = $state(false);

  const e = $derived(enzyme(enzymeId));
  const s = $derived(substrate(substrateId));
  const match = $derived(fits(enzymeId, substrateId));
  const broken = $derived(ruined || denatures(t));
  const rate = $derived(activity(enzymeId, substrateId, t, pH, ruined));
  const bound = $derived(match && !broken && rate >= 5);

  function check() {
    if (denatures(t)) ruined = true;
  }

  function freshEnzyme() {
    ruined = false;
    t = 37;
    pH = enzyme(enzymeId).pH;
  }

  function pickEnzyme() {
    ruined = denatures(t);
  }

  /**
   * The top edge of the enzyme with its active site.
   * @param {Shape} shape
   * @param {boolean} warped
   */
  function sitePath(shape, warped) {
    if (warped) return 'L 150 110 Q 160 92 172 112 Q 184 128 196 104 Q 204 96 210 110';
    if (shape === 'circle') return 'L 158 110 A 22 22 0 0 0 202 110';
    if (shape === 'triangle') return 'L 156 110 L 180 140 L 204 110';
    return 'L 160 110 L 160 138 L 200 138 L 200 110';
  }

  /**
   * The substrate drawn around (cx, cy).
   * @param {Shape} shape @param {number} cx @param {number} cy
   */
  function substratePath(shape, cx, cy) {
    if (shape === 'circle') {
      return `M ${cx - 20} ${cy} A 20 20 0 1 0 ${cx + 20} ${cy} A 20 20 0 1 0 ${cx - 20} ${cy} Z`;
    }
    if (shape === 'triangle')
      return `M ${cx - 22} ${cy - 14} L ${cx + 22} ${cy - 14} L ${cx} ${cy + 16} Z`;
    return `M ${cx - 18} ${cy - 14} L ${cx + 18} ${cy - 14} L ${cx + 18} ${cy + 14} L ${cx - 18} ${cy + 14} Z`;
  }

  const subY = $derived(bound ? 118 : 50);
  const subX = $derived(bound || match ? 180 : 250);

  const series = $derived([
    { points: curve(enzymeId, pH), color: '#4f46e5' },
    {
      points: /** @type {Array<[number, number]>} */ ([
        [t, 0],
        [t, 100],
      ]),
      color: '#dc2626',
      dashed: true,
    },
  ]);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!match) {
        return {
          tone: 'warn',
          text: `${s.name} không khớp với trung tâm hoạt động của ${e.name}: enzyme có tính chọn lọc cao, ${e.name} chỉ xúc tác cho phản ứng thuỷ phân ${substrate(e.substrate).name}.`,
        };
      }
      if (broken) {
        return {
          tone: 'warn',
          text: `Enzyme đã bị biến tính: từ ${DENATURE_T} °C trở lên, cấu trúc không gian của protein thay đổi, trung tâm hoạt động biến dạng nên ${s.name} không gắn vào được. ${denatures(t) ? '' : 'Làm nguội trở lại cũng không làm enzyme hoạt động lại. '}Bấm "Enzyme mới".`,
        };
      }
      const r = Math.round(rate);
      if (r < 5) {
        return {
          tone: 'info',
          text: `${s.name} khớp với ${e.name}, nhưng ở pH ${formatNumber(pH, 1)} enzyme gần như không hoạt động: pH thích hợp của ${e.name} là khoảng ${formatNumber(e.pH, 1)}.`,
        };
      }
      const how =
        r >= 80
          ? 'gần tốc độ lớn nhất'
          : t < 37 - 5
            ? 'nhiệt độ thấp nên phản ứng chậm'
            : Math.abs(pH - e.pH) > 1
              ? 'pH lệch khỏi pH thích hợp nên phản ứng chậm'
              : 'nhiệt độ cao làm enzyme bắt đầu mất hoạt tính';
      return {
        tone: r >= 50 ? 'ok' : 'info',
        text: `${s.name} khớp với trung tâm hoạt động của ${e.name} như chìa với khoá và bị thuỷ phân thành ${s.products}. Tốc độ bằng ${r}% tốc độ lớn nhất: ${how}.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Enzyme"
      options={ENZYMES.map((x) => ({ value: x.id, label: `${x.name} (${x.where})` }))}
      bind:value={enzymeId}
      onchange={pickEnzyme}
    />
    <SegmentedControl
      label="Cơ chất"
      options={SUBSTRATES.map((x) => ({ value: x.id, label: x.name }))}
      bind:value={substrateId}
    />
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Nhiệt độ" bind:value={t} min={0} max={80} unit="°C" oninput={check} />
    <SliderField
      label="pH"
      bind:value={pH}
      min={1}
      max={12}
      step={0.5}
      format={(v) => formatNumber(v, 1)}
      oninput={check}
    />
  </div>

  <svg
    viewBox="0 0 360 180"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label={`${e.name}${broken ? ' đã biến tính' : ''}, cơ chất ${s.name} ${bound ? 'nằm trong trung tâm hoạt động' : 'nằm ngoài enzyme'}`}
  >
    <path
      d="M 90 110 {sitePath(e.shape, broken)} L 270 110 L 270 170 L 90 170 Z"
      fill={broken ? '#e2e8f0' : '#c7d2fe'}
      stroke={broken ? '#64748b' : '#4338ca'}
      stroke-width="2"
    />
    <text x="180" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#312e81"
      >{e.name}</text
    >
    <g class="sub">
      <path
        d={substratePath(s.shape, subX, subY)}
        fill={match ? '#fde68a' : '#fecaca'}
        stroke={match ? '#b45309' : '#b91c1c'}
        stroke-width="2"
      />
      {#if bound}
        <line
          x1={subX}
          x2={subX}
          y1={subY - 16}
          y2={subY + 16}
          stroke="#b91c1c"
          stroke-width="2"
          stroke-dasharray="3 3"
        />
      {/if}
    </g>
    <text x={subX} y={bound ? 94 : 22} text-anchor="middle" font-size="12" fill="#334155"
      >{s.name}</text
    >
    {#if bound}
      <text x="300" y="60" text-anchor="middle" font-size="12" font-weight="600" fill="#047857"
        >→ {s.products}</text
      >
    {/if}
  </svg>

  <div class="rounded-xl border border-slate-200 p-2">
    <CurvePlot
      xMax={80}
      xStep={10}
      yMax={100}
      yStep={20}
      xName="t (°C)"
      yName="tốc độ (%)"
      label={`Tốc độ phản ứng theo nhiệt độ của ${e.name} ở pH ${formatNumber(pH, 1)}; vạch đỏ là nhiệt độ đang chọn`}
      {series}
    />
  </div>

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.quiet} onclick={freshEnzyme}>Enzyme mới</button>
    <span class="text-sm text-slate-600">Đưa về 37 °C và pH thích hợp của enzyme.</span>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
