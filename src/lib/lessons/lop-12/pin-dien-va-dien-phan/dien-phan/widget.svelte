<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import {
    ELECTROLYTES,
    FARADAY,
    amountOf,
    discharge,
    electrolyte,
    electronMoles,
    plain,
  } from '../_shared/electrochem.js';

  let id = $state('cuso4-dd');
  let current = $state(5);
  let minutes = $state(30);

  const options = ELECTROLYTES.map((e) => ({ value: e.id, label: e.label }));
  const e = $derived(electrolyte(id));
  const d = $derived(discharge(e));
  const seconds = $derived(minutes * 60);
  const ne = $derived(electronMoles(current, seconds));
  const atCathode = $derived(amountOf(d.cathode.chosen, ne));
  const atAnode = $derived(amountOf(d.anode.chosen, ne));

  /**
   * `= 0{,}2` for a value that is exact to the shown places, `\\approx 0{,}0933` otherwise.
   * @param {number} value
   * @param {number} places
   */
  const eq = (value, places) =>
    `${tidy(value, places) === tidy(value) ? '=' : '\\approx'} ${numTex(value, places)}`;

  /** @param {import('../_shared/electrochem.js').Amount} a @param {import('../_shared/electrochem.js').Species} s */
  function amountText(a, s) {
    const mol = formatNumber(a.mol, 4);
    if (s.state === 'gas') return `${mol} mol, ${formatNumber(a.volume, 3)} L (đkc)`;
    return `${mol} mol, ${formatNumber(a.mass, 3)} g`;
  }

  /** @param {import('../_shared/electrochem.js').Amount} a @param {import('../_shared/electrochem.js').Species} s */
  function amountTex(a, s) {
    const n = `n_{\\mathrm{${s.product}}} = \\dfrac{n_e}{${s.electrons}} ${eq(a.mol, 4)}\\ \\text{mol}`;
    if (s.state === 'gas') return `${n};\\ V = n \\cdot 24{,}79 ${eq(a.volume, 3)}\\ \\text{L}`;
    return `${n};\\ m = n \\cdot ${s.molar} ${eq(a.mass, 3)}\\ \\text{g}`;
  }

  const note = $derived(`Cathode: ${d.cathode.why} Anode: ${d.anode.why}`);

  const molten = $derived(e.medium === 'molten');
  const bubbles = $derived(Math.min(8, Math.max(1, Math.round(ne * 20))));
  const deposit = $derived(Math.min(14, 2 + ne * 30));
</script>

<div class="space-y-4">
  <SegmentedControl label="Chất điện phân" {options} bind:value={id} />

  <svg
    viewBox="0 0 360 230"
    class="w-full max-w-xl"
    role="img"
    aria-label={`Bình điện phân ${e.label}. Cathode nối cực âm của nguồn, tại đó ${plain(d.cathode.chosen.tex)} bị khử tạo ${d.cathode.chosen.productName}. Anode nối cực dương, tại đó ${plain(d.anode.chosen.tex)} bị oxi hoá tạo ${d.anode.chosen.productName}.`}
  >
    <!-- power supply -->
    <path d="M 110 70 L 110 25 L 160 25" fill="none" stroke="#334155" stroke-width="2.5" />
    <path d="M 200 25 L 250 25 L 250 70" fill="none" stroke="#334155" stroke-width="2.5" />
    <!-- short thick plate: negative terminal, to the cathode; long thin plate: positive, to the anode -->
    <line x1="160" y1="25" x2="172" y2="25" stroke="#334155" stroke-width="2.5" />
    <line x1="172" y1="18" x2="172" y2="32" stroke="#334155" stroke-width="5" />
    <line x1="186" y1="12" x2="186" y2="38" stroke="#334155" stroke-width="2" />
    <line x1="186" y1="25" x2="200" y2="25" stroke="#334155" stroke-width="2.5" />
    <text x="164" y="14" text-anchor="middle" font-size="10" fill="#4f46e5">−</text>
    <text x="195" y="14" text-anchor="middle" font-size="10" fill="#dc2626">+</text>
    <text x="180" y="52" text-anchor="middle" font-size="9" fill="#475569"
      >nguồn một chiều {formatNumber(current)} A</text
    >

    <!-- vessel and electrolyte -->
    <path
      d="M 60 80 L 60 200 Q 60 212 72 212 L 288 212 Q 300 212 300 200 L 300 80"
      fill="none"
      stroke="#475569"
      stroke-width="2"
    />
    <rect
      x="62"
      y="100"
      width="236"
      height="110"
      fill={molten ? '#fde68a' : id.startsWith('cu') ? '#bfdbfe' : '#e0f2fe'}
      opacity="0.8"
    />
    <text x="180" y="200" text-anchor="middle" font-size="10" fill="#334155">{e.label}</text>

    <!-- electrodes -->
    <rect x="100" y="66" width="20" height="120" fill="#475569" rx="2" />
    <rect x="240" y="66" width="20" height="120" fill="#475569" rx="2" />
    {#if d.cathode.chosen.state !== 'gas'}
      <rect
        x={100 - deposit / 2}
        y="104"
        width={20 + deposit}
        height="82"
        fill={d.cathode.chosen.id === 'Cu2+'
          ? '#c2410c'
          : d.cathode.chosen.id === 'Ag+'
            ? '#cbd5e1'
            : '#94a3b8'}
        opacity="0.9"
        rx="3"
      />
    {:else}
      {#each Array.from({ length: bubbles }, (_, i) => i) as i (i)}
        <circle
          class="bubble"
          style="animation-delay: {-i * 0.35}s"
          cx={126 + (i % 3) * 6}
          cy={180 - i * 9}
          r="3.5"
          fill="#fff"
          stroke="#64748b"
        />
      {/each}
    {/if}
    {#each Array.from({ length: bubbles }, (_, i) => i) as i (i)}
      <circle
        class="bubble"
        style="animation-delay: {-i * 0.35}s"
        cx={234 - (i % 3) * 6}
        cy={180 - i * 9}
        r="3.5"
        fill={d.anode.chosen.id === 'Cl-' ? '#d9f99d' : '#fff'}
        stroke="#64748b"
      />
    {/each}
    <text x="94" y="74" text-anchor="end" font-size="10" font-weight="700" fill="#4f46e5"
      >Cathode (−)</text
    >
    <text x="266" y="74" text-anchor="start" font-size="10" font-weight="700" fill="#dc2626"
      >Anode (+)</text
    >
    <text x="140" y="125" font-size="11" font-weight="700" fill="#1e3a8a"
      >{plain(d.cathode.chosen.product)}</text
    >
    <text x="220" y="125" text-anchor="end" font-size="11" font-weight="700" fill="#7f1d1d"
      >{plain(d.anode.chosen.product)}</text
    >

    <!-- migrating ions -->
    <text x="180" y="150" text-anchor="middle" font-size="10" fill="#1e3a8a"
      >← {plain(d.cathode.present.find((s) => s.id !== 'H2O')?.tex ?? '')}</text
    >
    <text x="180" y="168" text-anchor="middle" font-size="10" fill="#7f1d1d"
      >{plain(d.anode.present.find((s) => s.id !== 'H2O')?.tex ?? '')} →</text
    >
  </svg>

  <div class="grid gap-3 text-sm sm:grid-cols-2">
    {#each [{ side: 'Cathode (−): quá trình khử', r: d.cathode, tone: 'text-indigo-700' }, { side: 'Anode (+): quá trình oxi hoá', r: d.anode, tone: 'text-red-700' }] as col (col.side)}
      <div class="rounded-xl border border-slate-200 p-3">
        <p class="font-semibold {col.tone}">{col.side}</p>
        <ol class="mt-1 space-y-1" aria-label="Các tiểu phân ở điện cực, theo thứ tự ưu tiên">
          {#each col.r.present as s (s.id)}
            <li class={s.id === col.r.chosen.id ? 'font-semibold' : 'text-slate-500'}>
              <Tex math={`\\mathrm{${s.tex}}`} />
              {s.id === col.r.chosen.id
                ? '— phản ứng'
                : s.electrons === 0
                  ? '— không phản ứng'
                  : '— không phản ứng (yếu hơn)'}
            </li>
          {/each}
        </ol>
        <p class="mt-2 overflow-x-auto"><Tex math={col.r.chosen.half} /></p>
      </div>
    {/each}
  </div>

  <div class="overflow-x-auto rounded-xl border border-slate-200 p-3 text-sm">
    <Tex math={e.overall} display />
    {#if e.note}<p class="mt-1 text-slate-600">{e.note}</p>{/if}
  </div>

  <div class="space-y-3 rounded-xl bg-slate-50 p-3">
    <div class="grid gap-3 sm:grid-cols-2">
      <SliderField
        label="Cường độ dòng điện"
        bind:value={current}
        min={0.5}
        max={10}
        step={0.5}
        unit="A"
      />
      <SliderField label="Thời gian" bind:value={minutes} min={5} max={120} step={5} unit="phút" />
    </div>
    <p class="overflow-x-auto text-sm">
      <Tex
        math={`n_e = \\dfrac{It}{F} = \\dfrac{${numTex(current)} \\cdot ${numTex(seconds)}}{${numTex(FARADAY)}} ${eq(ne, 4)}\\ \\text{mol}`}
      />
    </p>
    <dl class="space-y-1 text-sm">
      <div class="overflow-x-auto">
        <dt class="inline font-semibold">Cathode, {d.cathode.chosen.productName}:</dt>
        <dd class="inline">
          <span class="sr-only">{amountText(atCathode, d.cathode.chosen)}</span><span
            aria-hidden="true"><Tex math={amountTex(atCathode, d.cathode.chosen)} /></span
          >
        </dd>
      </div>
      <div class="overflow-x-auto">
        <dt class="inline font-semibold">Anode, {d.anode.chosen.productName}:</dt>
        <dd class="inline">
          <span class="sr-only">{amountText(atAnode, d.anode.chosen)}</span><span aria-hidden="true"
            ><Tex math={amountTex(atAnode, d.anode.chosen)} /></span
          >
        </dd>
      </div>
    </dl>
    <p class="text-xs text-slate-600">
      Giả sử chất điện phân còn đủ trong suốt thời gian điện phân và hiệu suất 100%; thể tích khí đo
      ở điều kiện chuẩn (24,79 L/mol).
    </p>
  </div>

  <FeedbackNote tone="info" text={note} />
</div>

<style>
  .bubble {
    animation: rise 2.8s linear infinite;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-60px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bubble {
      animation: none;
    }
  }
</style>
