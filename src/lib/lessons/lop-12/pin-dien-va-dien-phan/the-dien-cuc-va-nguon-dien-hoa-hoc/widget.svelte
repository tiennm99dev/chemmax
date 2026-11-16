<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import {
    CELL_METALS,
    cell,
    couple,
    coupleTex,
    oxidationTex,
    plain,
    reductionTex,
  } from '../_shared/electrochem.js';

  let left = $state('Zn');
  let right = $state('Cu');

  const options = CELL_METALS.map((id) => ({
    value: id,
    label: id === 'H' ? 'H₂ (Pt)' : id,
  }));

  const c = $derived(cell(left, right));
  const leftIsAnode = $derived(c !== null && c.anode.id === left);

  /** Plain text of a couple for labels: "Zn²⁺/Zn". @param {string} id */
  function coupleText(id) {
    const x = couple(id);
    return `${plain(x.ion)}/${plain(x.metal)}`;
  }

  /** @param {number} E */
  const volts = (E) => `${E > 0 ? '+' : E < 0 ? '−' : ''}${formatNumber(Math.abs(E), 3)} V`;

  // Electrochemical series strip, from -2.5 V to +1 V.
  const X0 = 20;
  const X1 = 340;
  /** @param {number} E */
  const sx = (E) => X0 + ((E + 2.5) / 3.5) * (X1 - X0);
  const TICKS = [-2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1];

  const note = $derived.by(() => {
    if (!c)
      return {
        tone: /** @type {const} */ ('warn'),
        text: 'Hai điện cực giống nhau: không có chênh lệch thế điện cực nên không có dòng điện. Hãy chọn hai cặp khác nhau.',
      };
    return {
      tone: /** @type {const} */ ('ok'),
      text: `Cặp $${coupleTex(c.anode)}$ có thế điện cực chuẩn nhỏ hơn nên $\\mathrm{${c.anode.metal}}$ là anode (cực âm), bị oxi hoá; electron đi qua dây dẫn sang cathode (cực dương), nơi $\\mathrm{${c.cathode.ion.replace(/^2/, '')}}$ bị khử. Sức điện động chuẩn $E^\\circ_{\\text{pin}} = ${numTex(c.emf, 3)}$ V.`,
    };
  });

  const COLORS = {
    anode: { fill: '#e0e7ff', stroke: '#4f46e5' },
    cathode: { fill: '#fee2e2', stroke: '#dc2626' },
    none: { fill: '#f1f5f9', stroke: '#64748b' },
  };
  const leftColor = $derived(c ? (leftIsAnode ? COLORS.anode : COLORS.cathode) : COLORS.none);
  const rightColor = $derived(c ? (leftIsAnode ? COLORS.cathode : COLORS.anode) : COLORS.none);
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl label="Điện cực trái" {options} bind:value={left} />
    <SegmentedControl label="Điện cực phải" {options} bind:value={right} />
  </div>

  <svg
    viewBox="0 0 360 230"
    class="w-full max-w-xl"
    role="img"
    aria-label={c
      ? `Pin Galvani: điện cực trái ${coupleText(left)} là ${leftIsAnode ? 'anode, cực âm' : 'cathode, cực dương'}; điện cực phải ${coupleText(right)} là ${leftIsAnode ? 'cathode, cực dương' : 'anode, cực âm'}. Electron đi từ ${leftIsAnode ? 'trái sang phải' : 'phải sang trái'} qua dây dẫn. Vôn kế chỉ ${volts(c.emf)}.`
      : `Hai điện cực ${coupleText(left)} giống nhau, vôn kế chỉ 0 V.`}
  >
    <!-- wire and voltmeter -->
    <path d="M 90 70 L 90 30 L 270 30 L 270 70" fill="none" stroke="#334155" stroke-width="2.5" />
    <circle cx="180" cy="30" r="20" fill="#fff" stroke="#334155" stroke-width="2" />
    <text x="180" y="27" text-anchor="middle" font-size="9" fill="#334155">V</text>
    <text x="180" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a"
      >{c ? formatNumber(c.emf, 3) : '0'}</text
    >
    {#if c}
      <g class={leftIsAnode ? 'flow-right' : 'flow-left'}>
        {#each [0, 1, 2, 3] as i (i)}
          <circle
            class="electron"
            style="animation-delay: {-i * 0.5}s"
            cx="0"
            cy="0"
            r="4"
            fill="#f59e0b"
          />
        {/each}
      </g>
      <text x={leftIsAnode ? 120 : 240} y="20" text-anchor="middle" font-size="10" fill="#b45309"
        >e {leftIsAnode ? '→' : '←'}</text
      >
    {/if}

    <!-- beakers -->
    {#each [{ x: 40, id: left, color: leftColor }, { x: 220, id: right, color: rightColor }] as b (b.x)}
      <path
        d="M {b.x} 90 L {b.x} 190 Q {b.x} 200 {b.x + 10} 200 L {b.x + 90} 200 Q {b.x +
          100} 200 {b.x + 100} 190 L {b.x + 100} 90"
        fill="none"
        stroke="#475569"
        stroke-width="2"
      />
      <rect x={b.x + 2} y="115" width="96" height="83" fill={b.color.fill} opacity="0.8" />
      {#if b.id === 'H'}
        <rect x={b.x + 44} y="70" width="12" height="105" fill="#cbd5e1" stroke="#64748b" />
        <rect x={b.x + 40} y="165" width="20" height="14" fill="#e2e8f0" stroke="#64748b" />
        <text x={b.x + 50} y="176" text-anchor="middle" font-size="8">Pt</text>
        <text x={b.x + 75} y="105" font-size="9" fill="#334155">H₂</text>
      {:else}
        <rect
          x={b.x + 40}
          y="70"
          width="20"
          height="110"
          fill={b.color.stroke}
          opacity="0.85"
          rx="2"
        />
        <text x={b.x + 50} y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#fff"
          >{b.id}</text
        >
      {/if}
      <text x={b.x + 50} y="215" text-anchor="middle" font-size="10" fill="#334155"
        >{coupleText(b.id)} 1 M</text
      >
    {/each}

    <!-- salt bridge -->
    <path
      d="M 120 140 L 120 100 Q 120 85 135 85 L 225 85 Q 240 85 240 100 L 240 140"
      fill="none"
      stroke="#a3a3a3"
      stroke-width="12"
      stroke-linecap="round"
    />
    <text x="180" y="80" text-anchor="middle" font-size="9" fill="#525252">cầu muối</text>

    {#if c}
      <text
        x="56"
        y="62"
        text-anchor="middle"
        font-size="10"
        font-weight="700"
        fill={leftColor.stroke}>{leftIsAnode ? 'Anode (−)' : 'Cathode (+)'}</text
      >
      <text
        x="304"
        y="62"
        text-anchor="middle"
        font-size="10"
        font-weight="700"
        fill={rightColor.stroke}>{leftIsAnode ? 'Cathode (+)' : 'Anode (−)'}</text
      >
    {/if}
  </svg>

  <svg
    viewBox="0 0 360 70"
    class="w-full max-w-xl"
    role="img"
    aria-label={`Dãy điện hoá: ${coupleText(left)} có E° = ${volts(couple(left).E)}, ${coupleText(right)} có E° = ${volts(couple(right).E)}.`}
  >
    <line x1={X0} y1="40" x2={X1} y2="40" stroke="#334155" stroke-width="1.5" />
    {#each TICKS as t (t)}
      <line x1={sx(t)} y1="36" x2={sx(t)} y2="44" stroke="#334155" />
      <text x={sx(t)} y="58" text-anchor="middle" font-size="9" fill="#475569"
        >{t < 0 ? '−' : ''}{formatNumber(Math.abs(t))}</text
      >
    {/each}
    <text x={X1} y="68" text-anchor="end" font-size="8" fill="#475569">E° (V)</text>
    {#if c}
      <line
        x1={sx(c.anode.E)}
        y1="22"
        x2={sx(c.cathode.E)}
        y2="22"
        stroke="#f59e0b"
        stroke-width="3"
      />
      <text
        x={(sx(c.anode.E) + sx(c.cathode.E)) / 2}
        y="16"
        text-anchor="middle"
        font-size="9"
        font-weight="700"
        fill="#b45309">E°pin = {formatNumber(c.emf, 3)} V</text
      >
    {/if}
    {#each [left, right] as id, i (i)}
      <circle
        cx={sx(couple(id).E)}
        cy="40"
        r="5"
        fill={c && c.anode.id === id ? '#4f46e5' : c ? '#dc2626' : '#64748b'}
      />
      <text x={sx(couple(id).E)} y="31" text-anchor="middle" font-size="8" fill="#0f172a"
        >{id === 'H' ? 'H' : id}</text
      >
    {/each}
  </svg>

  {#if c}
    <dl class="grid gap-2 rounded-xl border border-slate-200 p-3 text-sm sm:grid-cols-2">
      <div>
        <dt class="font-semibold text-indigo-700">Anode (cực âm): quá trình oxi hoá</dt>
        <dd><Tex math={oxidationTex(c.anode)} /></dd>
      </div>
      <div>
        <dt class="font-semibold text-red-700">Cathode (cực dương): quá trình khử</dt>
        <dd><Tex math={reductionTex(c.cathode)} /></dd>
      </div>
      <div class="sm:col-span-2">
        <dt class="font-semibold text-slate-700">Phản ứng xảy ra trong pin</dt>
        <dd class="overflow-x-auto"><Tex math={c.overall} /></dd>
      </div>
      <div class="sm:col-span-2">
        <dt class="font-semibold text-slate-700">Sức điện động chuẩn</dt>
        <dd class="overflow-x-auto"><Tex math={c.emfTex} /></dd>
      </div>
    </dl>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .electron {
    offset-rotate: 0deg;
    animation: run 2s linear infinite;
  }
  .flow-right .electron {
    offset-path: path('M 90 70 L 90 30 L 270 30 L 270 70');
  }
  .flow-left .electron {
    offset-path: path('M 270 70 L 270 30 L 90 30 L 90 70');
  }
  @keyframes run {
    from {
      offset-distance: 0%;
    }
    to {
      offset-distance: 100%;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .electron {
      animation: none;
      offset-distance: 50%;
    }
  }
</style>
