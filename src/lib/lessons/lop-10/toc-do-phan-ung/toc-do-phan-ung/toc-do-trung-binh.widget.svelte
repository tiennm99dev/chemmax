<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, numTex } from '#lib/core/number-format.js';
  import IntervalPlot from '../_shared/interval-plot.svelte';
  import { averageRate } from '../_shared/rate.js';

  /** Decomposition of hydrogen peroxide, the readings of the book's activity. */
  const READINGS = /** @type {Array<[number, number]>} */ ([
    [0, 1],
    [3, 0.707],
    [6, 0.5],
    [9, 0.354],
    [12, 0.25],
  ]);

  let from = $state(0);
  let to = $state(1);

  const rate = $derived(
    averageRate(READINGS[from][1], READINGS[to][1], READINGS[from][0], READINGS[to][0]),
  );
  const working = $derived.by(() => {
    const [t1, c1] = READINGS[from];
    const [t2, c2] = READINGS[to];
    return `$\\overline{v} = -\\dfrac{${numTex(c2, 3)} - ${numTex(c1, 3)}}{${t2} - ${t1}} \\approx ${numTex(rate, 3)}$ mol/(L·h)`;
  });
  const steps = READINGS.slice(1).map((reading, i) => ({
    label: `${READINGS[i][0]}–${reading[0]} h`,
    from: i,
    to: i + 1,
    rate: averageRate(READINGS[i][1], reading[1], READINGS[i][0], reading[0]),
  }));
  const note = $derived(
    to - from === 1 && from > 0
      ? `Khoảng này cùng độ dài $3$ h nhưng $\\mathrm{H_2O_2}$ giảm ít hơn khoảng $0$–$3$ h: dây cung thoải hơn, tốc độ nhỏ hơn.`
      : 'Dây cung càng dốc thì tốc độ trung bình càng lớn. Kéo hai chốt, hoặc chọn chốt rồi dùng phím mũi tên, sang các khoảng sau.',
  );
</script>

<div class="space-y-3">
  <IntervalPlot
    points={READINGS}
    bind:from
    bind:to
    tMax={12}
    tStep={3}
    yMax={1}
    yStep={0.25}
    tName="t (h)"
    yName="C (M)"
    timeUnit="giờ"
    label="Đồ thị nồng độ hydrogen peroxide theo thời gian, kéo hai chốt để chọn khoảng thời gian"
  />
  <p class="overflow-x-auto text-center" aria-live="polite">
    <LiveRichText text={working} />
  </p>
  <table class="w-full text-center text-sm">
    <caption class="pb-1 font-semibold text-slate-700">Tốc độ trung bình, mol/(L·h)</caption>
    <tbody>
      <tr>
        {#each steps as s (s.label)}
          <th
            scope="col"
            class="px-1 py-1 font-semibold {s.from === from && s.to === to
              ? 'bg-indigo-100 text-indigo-800'
              : 'text-slate-600'}">{s.label}</th
          >
        {/each}
      </tr>
      <tr>
        {#each steps as s (s.label)}
          <td class="px-1 py-1 tabular-nums">{formatFixed(s.rate, 3)}</td>
        {/each}
      </tr>
    </tbody>
  </table>
  <FeedbackNote tone="info" text={note} />
</div>
