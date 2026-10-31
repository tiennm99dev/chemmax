<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatFixed, formatNumber, sup, texNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { element, formatMass } from '#lib/domain/elements.js';
  import { PRESETS, averageMass, averageNote } from './engine.js';

  const OPTIONS = PRESETS.map((p, i) => ({ value: i, label: `${p.symbol} (${p.name})` }));
  let which = $state(0);
  let share = $state(50);

  const preset = $derived(PRESETS[Number(which)]);
  const a1 = $derived(preset.massNumbers[0]);
  const a2 = $derived(preset.massNumbers[1]);
  const avg = $derived(averageMass([a1, a2], [share, 100 - share]));
  const note = $derived(averageNote(preset, share));
  const tableMass = $derived(
    formatMass(/** @type {import('#lib/domain/elements.js').Element} */ (element(preset.z))),
  );
  const iso = (/** @type {number} */ a) => `${sup(a)}${preset.symbol}`;

  const feedback = $derived.by(() => {
    const avgText = formatFixed(avg, 2);
    if (note.kind === 'natural') {
      return `Đúng tỉ lệ trong tự nhiên: $\\overline{A}_{\\mathrm{${preset.symbol}}} \\approx ${texNumber(avgText)}$, gần với nguyên tử khối ${tableMass} ghi trong bảng tuần hoàn (lệch một chút vì ta coi nguyên tử khối mỗi đồng vị bằng số khối).`;
    }
    if (note.kind === 'single') {
      return `Chỉ có một đồng vị: nguyên tử khối trung bình bằng đúng số khối ${share === 100 ? a1 : a2}.`;
    }
    if (note.kind === 'middle') {
      return `Hai đồng vị bằng nhau, nên $\\overline{A} = ${texNumber(avgText)}$ nằm chính giữa hai số khối.`;
    }
    const near = note.kind === 'lighter' ? iso(a1) : iso(a2);
    return `$\\overline{A} = ${texNumber(avgText)}$ lệch về phía ${near}, đồng vị chiếm nhiều hơn.`;
  });

  const formula = $derived(
    `$\\overline{A} = \\dfrac{${a1} \\cdot ${texNumber(formatNumber(share, 2))} + ${a2} \\cdot ${texNumber(
      formatNumber(100 - share, 2),
    )}}{100} \\approx ${texNumber(formatNumber(avg, 4))}$`,
  );

  // The spectrum: one bar per isotope, height by share, and the average marked.
  const W = 320;
  const H = 170;
  const BASE = 130;
  const x = (/** @type {number} */ a) => 50 + ((a - a1) / (a2 - a1)) * (W - 100);
  const bar = (/** @type {number} */ p) => (p / 100) * 100;

  /** @param {string | number} value */
  function pick(value) {
    which = Number(value);
    share = 50;
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Nguyên tố" options={OPTIONS} bind:value={which} onchange={pick} />

  <SliderField
    label="Phần trăm số nguyên tử {iso(a1)}"
    bind:value={share}
    min={0}
    max={100}
    step={0.01}
    format={(v) => `${formatNumber(v, 2)} %`}
  />
  <p class="text-sm text-slate-600">
    Phần trăm số nguyên tử {iso(a2)}:
    <strong class="tabular-nums">{formatNumber(100 - share, 2)} %</strong>
  </p>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label="Phổ khối lượng: {iso(a1)} chiếm {formatNumber(share, 2)} %, {iso(
      a2,
    )} chiếm {formatNumber(100 - share, 2)} %; nguyên tử khối trung bình {formatFixed(avg, 2)}."
  >
    <line x1="20" y1={BASE} x2={W - 20} y2={BASE} stroke="#64748b" stroke-width="1.5" />
    {#each [{ a: a1, p: share }, { a: a2, p: 100 - share }] as b (b.a)}
      <rect
        x={x(b.a) - 14}
        y={BASE - bar(b.p)}
        width="28"
        height={bar(b.p)}
        rx="3"
        fill={b.a === a1 ? '#6366f1' : '#f59e0b'}
      />
      <text x={x(b.a)} y={BASE + 16} text-anchor="middle" font-size="12" fill="#334155">{b.a}</text>
      <text x={x(b.a)} y={BASE - bar(b.p) - 5} text-anchor="middle" font-size="11" fill="#334155"
        >{formatNumber(b.p, 1)}%</text
      >
    {/each}
    <line
      x1={x(avg)}
      y1="18"
      x2={x(avg)}
      y2={BASE + 4}
      stroke="#dc2626"
      stroke-width="2"
      stroke-dasharray="4 3"
    />
    <polygon
      points="{x(avg) - 6},{BASE + 22} {x(avg) + 6},{BASE + 22} {x(avg)},{BASE + 10}"
      fill="#dc2626"
    />
    <text x={x(avg)} y="13" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c"
      >Ā = {formatFixed(avg, 2)}</text
    >
    <text x={W - 20} y={H - 4} text-anchor="end" font-size="10" fill="#64748b">số khối</text>
  </svg>

  <FeedbackNote tone={note.tone} text={feedback} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={() => (share = preset.natural)}>
      Đặt tỉ lệ trong tự nhiên
    </button>
    <button type="button" class={button.quiet} onclick={() => (share = 50)}>Về 50 %</button>
  </div>
  <p class="text-sm text-slate-700">
    <LiveRichText text={formula} />
  </p>
</div>
