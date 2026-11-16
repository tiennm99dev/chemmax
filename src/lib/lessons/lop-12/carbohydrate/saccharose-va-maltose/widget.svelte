<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { numTex } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { M_AG } from '../_shared/sugars.js';
  import {
    LINKS,
    SECOND_UNITS,
    build,
    hydrolysisProducts,
    hydrolysisTex,
    silverMol,
  } from './engine.js';

  const W = 360;
  const H = 190;
  const RX = 52;
  const RY = 26;
  const MOL = 0.1;

  let second = $state(/** @type {import('./engine.js').UnitId} */ ('fructose'));
  let link = $state(2);
  let hydrolysed = $state(false);
  let tested = $state(false);
  let drip = $state(0);

  const made = $derived(build(second, link));
  const shift = $derived(hydrolysed ? 34 : 0);

  /**
   * Ring atoms of a unit drawn flat (Haworth view), ring oxygen first.
   * @param {number} cx @param {number} cy @param {{ label: string, angle: number }[]} members
   */
  function ring(cx, cy, members) {
    return members.map((m) => {
      const a = (m.angle * Math.PI) / 180;
      return { label: m.label, x: cx + RX * Math.cos(a), y: cy + RY * Math.sin(a) };
    });
  }

  const GLUCOSE = [
    { label: 'O', angle: -60 },
    { label: 'C1', angle: 0 },
    { label: 'C2', angle: 60 },
    { label: 'C3', angle: 120 },
    { label: 'C4', angle: 180 },
    { label: 'C5', angle: 240 },
  ];
  const FRUCTOSE = [
    { label: 'O', angle: -90 },
    { label: 'C5', angle: -18 },
    { label: 'C4', angle: 54 },
    { label: 'C3', angle: 126 },
    { label: 'C2', angle: 198 },
  ];

  const left = ring(92, 92, GLUCOSE);
  const right = $derived(ring(268, 92, second === 'fructose' ? FRUCTOSE : GLUCOSE));
  const leftC1 = left[1];
  const target = $derived(right.find((a) => a.label === `C${link}`) ?? right[1]);
  const bridge = { x: 180, y: 128 };
  const freeOH = $derived(second === 'glucose' ? right.find((a) => a.label === 'C1') : undefined);

  function reset() {
    hydrolysed = false;
    tested = false;
  }

  function hydrolyse() {
    hydrolysed = true;
    tested = false;
  }

  function test() {
    tested = true;
    drip += 1;
  }

  const ag = $derived(made.id ? silverMol(made.id, hydrolysed, MOL) : 0);
  const products = $derived(made.id ? [...new Set(hydrolysisProducts(made.id))].join(' và ') : '');

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!made.id) return { tone: 'warn', text: made.text };
      if (tested) {
        const what = hydrolysed ? `${made.id} đã thuỷ phân hết (thành ${products})` : made.id;
        if (ag === 0) {
          return {
            tone: 'info',
            text: `Không có lớp bạc: ${what} không khử được thuốc thử Tollens vì không còn nhóm OH hemiacetal hay hemiketal để mở vòng.`,
          };
        }
        return {
          tone: 'ok',
          text: `Có lớp bạc: từ $${numTex(MOL)}$ mol ${what} thu được $${numTex(ag)}$ mol Ag ($${numTex(ag * M_AG)}$ g).${hydrolysed ? ' Mỗi mol monosaccharide tạo $2$ mol Ag.' : ' Chỉ gốc glucose còn nhóm OH hemiacetal tự do phản ứng, mỗi mol maltose tạo $2$ mol Ag.'}`,
        };
      }
      if (hydrolysed) {
        return {
          tone: 'ok',
          text: `Liên kết glycoside bị cắt, một phân tử nước cộng vào: thu được ${products}. Thử lại với thuốc thử Tollens.`,
        };
      }
      return { tone: 'ok', text: made.text };
    },
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Đơn vị thứ hai"
      options={SECOND_UNITS}
      bind:value={second}
      onchange={reset}
    />
    <SegmentedControl
      label="C1 của α-glucose nối với"
      options={LINKS.map((c) => ({ value: c, label: `C${c} của đơn vị thứ hai` }))}
      bind:value={link}
      onchange={reset}
    />
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label={hydrolysed
      ? `Các phân tử ${products} tách rời sau thuỷ phân`
      : `α-glucose nối với ${second === 'fructose' ? 'β-fructose' : 'α-glucose'} qua nguyên tử O giữa C1 và C${link}${made.bond ? `, liên kết ${made.bond}` : ''}`}
  >
    <polygon points={pointsAttr(left)} fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
    <g class="unit" style="transform: translateX({shift}px)">
      <polygon
        points={pointsAttr(right)}
        fill={second === 'fructose' ? '#fce7f3' : '#dbeafe'}
        stroke={second === 'fructose' ? '#be185d' : '#1d4ed8'}
        stroke-width="2"
      />
      {#each right as a (a.label)}
        <text
          x={a.x}
          y={a.y + (a.label === 'O' ? -6 : 14)}
          text-anchor="middle"
          font-size="11"
          font-weight={a.label === `C${link}` ? 700 : 400}
          fill={a.label === 'O' ? '#b91c1c' : '#334155'}>{a.label}</text
        >
      {/each}
      {#if made.freeHemi && freeOH}
        <line
          x1={freeOH.x}
          y1={freeOH.y}
          x2={freeOH.x}
          y2={freeOH.y + 30}
          stroke="#334155"
          stroke-width="2"
        />
        <rect x={freeOH.x - 16} y={freeOH.y + 30} width="32" height="18" rx="6" fill="#fde68a" />
        <text
          x={freeOH.x}
          y={freeOH.y + 43}
          text-anchor="middle"
          font-size="11"
          font-weight="700"
          fill="#92400e">OH</text
        >
      {/if}
      {#if hydrolysed}
        <text
          x={target.x - 26}
          y={target.y + 38}
          text-anchor="middle"
          font-size="11"
          font-weight="700"
          fill="#b91c1c">HO</text
        >
        <line
          x1={target.x}
          y1={target.y}
          x2={target.x - 20}
          y2={target.y + 26}
          stroke="#334155"
          stroke-width="2"
        />
      {/if}
      <text x="268" y="176" text-anchor="middle" font-size="12" font-weight="600" fill="#334155"
        >{second === 'fructose' ? 'β-fructose' : 'α-glucose'}</text
      >
    </g>
    {#each left as a (a.label)}
      <text
        x={a.x}
        y={a.y + (a.label === 'O' ? -6 : 14)}
        text-anchor="middle"
        font-size="11"
        font-weight={a.label === 'C1' ? 700 : 400}
        fill={a.label === 'O' ? '#b91c1c' : '#334155'}>{a.label}</text
      >
    {/each}
    <text x="92" y="176" text-anchor="middle" font-size="12" font-weight="600" fill="#334155"
      >α-glucose</text
    >

    <line
      x1={leftC1.x}
      y1={leftC1.y}
      x2={bridge.x}
      y2={bridge.y}
      stroke="#334155"
      stroke-width="2"
    />
    {#if !hydrolysed}
      <line
        x1={bridge.x}
        y1={bridge.y}
        x2={target.x}
        y2={target.y}
        stroke={made.id ? '#334155' : '#94a3b8'}
        stroke-width="2"
        stroke-dasharray={made.id ? undefined : '5 4'}
      />
    {/if}
    <circle cx={bridge.x} cy={bridge.y} r="11" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" />
    <text
      x={bridge.x}
      y={bridge.y + 4}
      text-anchor="middle"
      font-size="10"
      font-weight="700"
      fill="#991b1b">{hydrolysed ? 'OH' : 'O'}</text
    >
    {#if made.bond && !hydrolysed}
      <text x={bridge.x} y={bridge.y + 30} text-anchor="middle" font-size="11" fill="#475569"
        >{made.bond}</text
      >
    {/if}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      onclick={hydrolyse}
      disabled={!made.id || hydrolysed}>Thuỷ phân (H⁺, t°)</button
    >
    <button type="button" class={button.secondary} onclick={test} disabled={!made.id}
      >Thử với thuốc thử Tollens</button
    >
    <button type="button" class={button.quiet} onclick={reset} disabled={!hydrolysed && !tested}
      >Làm lại</button
    >
  </div>

  {#if made.id && hydrolysed}
    <div class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-sm">
      <Tex math={hydrolysisTex(made.id)} display />
    </div>
  {/if}

  <div class="flex items-center gap-4">
    <div class="w-16 shrink-0">
      <TestTube
        liquid={tested ? '#e2e8f0' : '#f1f5f9'}
        precipitate={tested && ag > 0 ? '#94a3b8' : null}
        amount={tested ? ag / (4 * MOL) : 0}
        {drip}
        label={tested
          ? ag > 0
            ? 'Ống nghiệm có lớp bạc'
            : 'Ống nghiệm không có bạc'
          : 'Ống nghiệm chưa làm thí nghiệm'}
      />
    </div>
    <div class="min-w-0 flex-1">
      <FeedbackNote tone={note.tone} text={note.text} />
    </div>
  </div>
</div>

<style>
  .unit {
    transition: transform 0.6s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .unit {
      transition: none;
    }
  }
</style>
