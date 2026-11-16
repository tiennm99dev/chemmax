<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { amino, drift, isoelectric, mainForm, netCharge } from '../_shared/amino.js';

  /** @type {import('../_shared/amino.js').AminoId[]} */
  const LANES = ['gly', 'ala', 'glu', 'lys'];

  const W = 360;
  const LEFT = 44;
  const RIGHT = W - 44;
  const MID = W / 2;
  const SPAN = (RIGHT - LEFT) / 2 - 18;
  const ROW = 42;
  const TOP = 34;
  const H = TOP + ROW * LANES.length + 8;

  let pH = $state(6);
  let running = $state(false);

  const rows = $derived(
    LANES.map((id) => {
      const q = netCharge(id, pH);
      return {
        id,
        aa: amino(id),
        q,
        pI: isoelectric(id),
        form: mainForm(id, pH),
        way: drift(id, pH),
        x: running ? MID - (Math.max(-2, Math.min(2, q)) / 2) * SPAN : MID,
      };
    }),
  );

  /** @param {'am' | 'duong' | 'dung-yen'} way */
  const wayText = (way) =>
    way === 'am' ? 'về cực âm' : way === 'duong' ? 'về cực dương' : 'gần như đứng yên';

  /** @param {number} q */
  const chargeText = (q) => {
    const v = Math.abs(q) < 0.005 ? 0 : q;
    return `${v > 0 ? '+' : v < 0 ? '−' : ''}${formatFixed(Math.abs(v), 2)}`;
  };

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!running) {
        return {
          tone: 'info',
          text: `Ở pH = ${formatNumber(pH, 1)}, các amino acid nằm ở giữa băng giấy. Bấm "Bật nguồn điện" để xem mỗi chất di chuyển về cực nào.`,
        };
      }
      const parts = rows.map((r) => `${r.aa.symbol} ${wayText(r.way)}`);
      return {
        tone: 'ok',
        text: `pH = ${formatNumber(pH, 1)}: ${parts.join('; ')}. Ở pH nhỏ hơn điểm đẳng điện, amino acid tồn tại chủ yếu ở dạng cation, đi về cực âm; ở pH lớn hơn, dạng anion đi về cực dương. pH càng xa điểm đẳng điện, điện tích càng lớn và chất di chuyển càng xa; gần điểm đẳng điện, chất gần như đứng yên.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <SliderField
    label="pH của dung dịch đệm"
    bind:value={pH}
    min={1}
    max={12}
    step={0.5}
    format={(v) => formatNumber(v, 1)}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label={running
      ? `Điện di ở pH ${formatNumber(pH, 1)}: ${rows.map((r) => `${r.aa.symbol} ${wayText(r.way)}`).join(', ')}`
      : `Băng giấy điện di ở pH ${formatNumber(pH, 1)}, chưa bật nguồn điện`}
  >
    <rect
      x={LEFT}
      y={TOP - 14}
      width={RIGHT - LEFT}
      height={ROW * LANES.length + 4}
      rx="6"
      fill="#fff"
      stroke="#cbd5e1"
    />
    <rect x="8" y={TOP - 14} width="28" height={ROW * LANES.length + 4} rx="6" fill="#1e293b" />
    <text x="22" y={TOP - 20} text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b"
      >−</text
    >
    <rect
      x={W - 36}
      y={TOP - 14}
      width="28"
      height={ROW * LANES.length + 4}
      rx="6"
      fill="#b91c1c"
    />
    <text
      x={W - 22}
      y={TOP - 20}
      text-anchor="middle"
      font-size="14"
      font-weight="700"
      fill="#b91c1c">+</text
    >
    <line
      x1={MID}
      x2={MID}
      y1={TOP - 14}
      y2={TOP + ROW * LANES.length - 10}
      stroke="#94a3b8"
      stroke-dasharray="4 4"
    />
    {#each rows as r, i (r.id)}
      <line
        x1={LEFT + 6}
        x2={RIGHT - 6}
        y1={TOP + i * ROW + 8}
        y2={TOP + i * ROW + 8}
        stroke="#e2e8f0"
        stroke-width="10"
        stroke-linecap="round"
      />
      <g class="spot" style="transform: translate({r.x}px, {TOP + i * ROW + 8}px)">
        <ellipse rx="16" ry="9" fill={r.aa.color} opacity="0.85" />
        <text y="4" text-anchor="middle" font-size="10" font-weight="700" fill="#fff"
          >{r.aa.symbol}</text
        >
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={() => (running = !running)}>
      {running ? 'Tắt nguồn điện' : 'Bật nguồn điện'}
    </button>
  </div>

  <div class="overflow-x-auto rounded-xl border border-slate-200">
    <table class="w-full min-w-[30rem] text-left text-sm">
      <caption class="sr-only">Dạng tồn tại và hướng di chuyển của các amino acid</caption>
      <thead class="bg-slate-50 text-slate-700">
        <tr>
          <th scope="col" class="px-2 py-2">Amino acid</th>
          <th scope="col" class="px-2 py-2">Điểm đẳng điện</th>
          <th scope="col" class="px-2 py-2">Điện tích trung bình</th>
          <th scope="col" class="px-2 py-2">Dạng chủ yếu</th>
          <th scope="col" class="px-2 py-2">Di chuyển</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as r (r.id)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="px-2 py-2 font-semibold">{r.aa.name} ({r.aa.symbol})</th>
            <td class="px-2 py-2 tabular-nums">{formatNumber(r.pI, 2)}</td>
            <td class="px-2 py-2 tabular-nums">{chargeText(r.q)}</td>
            <td class="px-2 py-2">{r.form}</td>
            <td class="px-2 py-2">{running ? wayText(r.way) : '—'}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .spot {
    transition: transform 0.9s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .spot {
      transition: none;
    }
  }
</style>
