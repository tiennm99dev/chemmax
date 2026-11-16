<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import {
    AMMONIA_PKA,
    FIRST_PLACE,
    GROUPS,
    OTHER_PLACES,
    describe,
    kbRatio,
    litmus,
  } from './engine.js';

  /** @typedef {import('./engine.js').Group} Group */

  let first = $state(/** @type {Group} */ ('CH3'));
  let second = $state(/** @type {Group} */ ('H'));
  let third = $state(/** @type {Group} */ ('H'));

  const a = $derived(describe([first, second, third]));

  /** @param {Group} g */
  const optionLabel = (g) => (g === 'H' ? 'H' : g.replace(/(\d)/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[+d]));
  /** @param {Group[]} list */
  const options = (list) => list.map((g) => ({ value: g, label: optionLabel(g) }));

  const W = 360;
  const scaleX = linear(4, 12, 24, W - 24).map;

  const ends = [
    { x: 70, y: 70 },
    { x: 290, y: 70 },
    { x: 180, y: 160 },
  ];
  const N = { x: 180, y: 96 };
  const places = $derived([first, second, third]);
  const anchor = $derived.by(() => {
    if (a.pka === null) return 'middle';
    const x = scaleX(a.pka);
    return x < 110 ? 'start' : x > W - 110 ? 'end' : 'middle';
  });
  const labelShift = $derived(anchor === 'start' ? -8 : anchor === 'end' ? 8 : 0);

  /** @param {number} r */
  function times(r) {
    if (r >= 1) return formatNumber(r >= 10 ? Math.round(r) : r, 1);
    const inv = 1 / r;
    const rounded = inv >= 1000 ? Math.round(inv / 1000) * 1000 : Math.round(inv);
    return formatNumber(rounded, 0);
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!a.isAmine) {
        return {
          tone: 'info',
          text: 'Chưa có gốc hydrocarbon nào trên nguyên tử N: đây là ammonia $\\mathrm{NH_3}$. Hãy thay một nguyên tử H bằng gốc hydrocarbon.',
        };
      }
      const base = `Amine bậc ${a.order} (${a.order} gốc hydrocarbon gắn với N), loại ${a.type}. Dung dịch ${litmus(a)}.`;
      if (a.pka === null) {
        return {
          tone: 'info',
          text: `${base} Bài không đặt amine này lên thang so sánh tính base.`,
        };
      }
      const r = kbRatio(a.pka);
      if (r >= 1) {
        return {
          tone: 'ok',
          text: `${base} Gốc alkyl đẩy electron về phía N, cặp electron chưa liên kết dễ nhận proton hơn: $K_b$ lớn gấp khoảng ${times(r)} lần của ammonia.`,
        };
      }
      return {
        tone: 'warn',
        text: `${base} Vòng benzene hút cặp electron của N, nên tính base yếu hơn ammonia rất nhiều: $K_b$ nhỏ hơn khoảng ${times(r)} lần.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-3">
    <SegmentedControl label="Vị trí thứ nhất" options={options(FIRST_PLACE)} bind:value={first} />
    <SegmentedControl label="Vị trí thứ hai" options={options(OTHER_PLACES)} bind:value={second} />
    <SegmentedControl label="Vị trí thứ ba" options={options(OTHER_PLACES)} bind:value={third} />
  </div>

  <svg
    viewBox="0 0 {W} 190"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Nguyên tử N liên kết với {places
      .map((g) => (g === 'H' ? 'H' : GROUPS[g].name))
      .join(', ')}, còn một cặp electron chưa liên kết"
  >
    {#each places as g, i (i)}
      <line x1={N.x} y1={N.y} x2={ends[i].x} y2={ends[i].y} stroke="#334155" stroke-width="2.5" />
      <rect
        x={ends[i].x - 34}
        y={ends[i].y - 16}
        width="68"
        height="32"
        rx="10"
        fill={g === 'H' ? '#f1f5f9' : g === 'C6H5' ? '#fef3c7' : '#dcfce7'}
        stroke={g === 'H' ? '#94a3b8' : g === 'C6H5' ? '#b45309' : '#15803d'}
        stroke-width="1.5"
      />
      <text
        x={ends[i].x}
        y={ends[i].y + 5}
        text-anchor="middle"
        font-size="15"
        font-weight="600"
        fill="#1e293b">{optionLabel(g)}</text
      >
    {/each}
    <circle cx={N.x} cy={N.y} r="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
    <text x={N.x} y={N.y + 6} text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a"
      >N</text
    >
    <circle cx={N.x - 5} cy={N.y - 28} r="3" fill="#1d4ed8" />
    <circle cx={N.x + 5} cy={N.y - 28} r="3" fill="#1d4ed8" />
    <text x={N.x} y={N.y - 40} text-anchor="middle" font-size="11" fill="#475569"
      >cặp electron chưa liên kết</text
    >
  </svg>

  <dl class="grid gap-x-4 gap-y-1 rounded-xl border border-slate-200 p-3 text-sm sm:grid-cols-2">
    <div>
      <dt class="inline font-semibold">Công thức:</dt>
      <dd class="inline">
        <Tex math={`\\mathrm{${a.formulaTex}}`} /> (<Tex math={`\\mathrm{${a.molecularTex}}`} />)
      </dd>
    </div>
    <div>
      <dt class="inline font-semibold">Bậc:</dt>
      <dd class="inline">{a.isAmine ? `amine bậc ${a.order}` : 'không phải amine'}</dd>
    </div>
    <div>
      <dt class="inline font-semibold">Tên gốc chức:</dt>
      <dd class="inline">{a.radicalName}</dd>
    </div>
    <div>
      <dt class="inline font-semibold">Tên thay thế:</dt>
      <dd class="inline">{a.substitutionName}</dd>
    </div>
    {#if a.commonName}
      <div>
        <dt class="inline font-semibold">Tên thông thường:</dt>
        <dd class="inline">{a.commonName}</dd>
      </div>
    {/if}
  </dl>

  <svg
    viewBox="0 0 {W} 86"
    class="block w-full"
    role="img"
    aria-label={a.pka === null
      ? 'Thang tính base: chỉ có ammonia'
      : `Thang tính base: ${a.isAmine ? a.radicalName : 'ammonia'} ${a.pka > AMMONIA_PKA ? 'mạnh hơn' : a.pka < AMMONIA_PKA ? 'yếu hơn' : 'bằng'} ammonia`}
  >
    <defs>
      <linearGradient id="amine-base-scale" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="#e0e7ff" />
        <stop offset="1" stop-color="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="24" y="40" width={W - 48} height="12" rx="6" fill="url(#amine-base-scale)" />
    <text x="24" y="72" font-size="11" fill="#475569">base yếu hơn</text>
    <text x={W - 24} y="72" text-anchor="end" font-size="11" fill="#475569">base mạnh hơn</text>
    <line
      x1={scaleX(AMMONIA_PKA)}
      x2={scaleX(AMMONIA_PKA)}
      y1="34"
      y2="58"
      stroke="#475569"
      stroke-width="2"
    />
    <text x={scaleX(AMMONIA_PKA)} y="84" text-anchor="middle" font-size="11" fill="#334155"
      >NH₃</text
    >
    {#if a.isAmine && a.pka !== null}
      <g class="marker" style="transform: translateX({scaleX(a.pka)}px)">
        <path d="M 0 36 L -7 24 L 7 24 Z" fill="#b91c1c" />
        <text
          x={labelShift}
          y="18"
          text-anchor={anchor}
          font-size="12"
          font-weight="700"
          fill="#b91c1c">{a.radicalName}</text
        >
      </g>
    {/if}
  </svg>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .marker {
    transition: transform 0.4s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .marker {
      transition: none;
    }
  }
</style>
