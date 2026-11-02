<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { textInput } from '#lib/core/ui.js';
  import { balanceTemperature, gibbs, gibbsAxis, signCase, spontaneousSpans } from './engine.js';
  import { REACTIONS } from './reactions.js';

  const W = 340;
  const H = 230;
  const LEFT = 46;
  const RIGHT = 18;
  const TOP = 10;
  const BOTTOM = 34;
  const T_MAX = 2000;
  const X_TICKS = [0, 500, 1000, 1500, 2000];
  const CASES = [
    { key: 'always', dH: '$< 0$', dS: '$> 0$', text: 'Tự xảy ra ở mọi nhiệt độ' },
    { key: 'cold', dH: '$< 0$', dS: '$< 0$', text: 'Tự xảy ra khi nhiệt độ đủ thấp' },
    { key: 'hot', dH: '$> 0$', dS: '$> 0$', text: 'Tự xảy ra khi nhiệt độ đủ cao' },
    { key: 'never', dH: '$> 0$', dS: '$< 0$', text: 'Không tự xảy ra ở mọi nhiệt độ' },
  ];
  const MODES = [
    { value: 'book', label: 'Phản ứng theo Bảng 4.1' },
    { value: 'own', label: 'Tự chọn ΔH, ΔS' },
  ];

  let mode = $state('book');
  let id = $state('caco3');
  let ownH = $state(100);
  let ownS = $state(100);
  let temperature = $state(298);

  const reaction = $derived(REACTIONS.find((r) => r.id === id) ?? REACTIONS[0]);
  const dH = $derived(mode === 'book' ? reaction.dH : ownH);
  const dS = $derived(mode === 'book' ? reaction.dS : ownS);
  const dG = $derived(tidy(gibbs(dH, dS, temperature), 1));
  const tc = $derived(balanceTemperature(dH, dS));
  const spans = $derived(spontaneousSpans(dH, dS, T_MAX));
  const kase = $derived(signCase(dH, dS));
  const axis = $derived(gibbsAxis(dH, dS, T_MAX));

  const px = (/** @type {number} */ t) => LEFT + (t / T_MAX) * (W - LEFT - RIGHT);
  const py = $derived(
    (/** @type {number} */ g) =>
      TOP + ((axis.max - g) / (axis.max - axis.min)) * (H - TOP - BOTTOM),
  );

  const working = $derived(
    `$\\Delta_r G^\\circ_T = ${numTex(dH)} - ${temperature} \\cdot ${dS < 0 ? `(${numTex(dS / 1000)})` : numTex(dS / 1000)} = ${numTex(dG)}$ kJ`,
  );
  const verdict = $derived(
    dG < 0
      ? `$\\Delta_r G^\\circ_T < 0$: ở ${temperature} K phản ứng tự xảy ra.`
      : dG > 0
        ? `$\\Delta_r G^\\circ_T > 0$: ở ${temperature} K phản ứng không tự xảy ra.`
        : `$\\Delta_r G^\\circ_T = 0$: ở ${temperature} K phản ứng đạt trạng thái cân bằng.`,
  );
  const crossing = $derived.by(() => {
    if (tc === null)
      return 'Khi $\\Delta_r S^\\circ = 0$, dấu của $\\Delta_r G^\\circ$ chỉ phụ thuộc $\\Delta_r H^\\circ$.';
    if (tc <= 0) {
      return dH <= 0 && dS >= 0
        ? 'Đường $\\Delta_r G^\\circ$ luôn nằm dưới trục hoành: không có nhiệt độ đổi chiều.'
        : 'Đường $\\Delta_r G^\\circ$ luôn nằm trên trục hoành: không có nhiệt độ đổi chiều.';
    }
    const text = `$T = \\dfrac{\\Delta_r H^\\circ}{\\Delta_r S^\\circ} \\approx ${numTex(tidy(tc, 0))}$ K`;
    return tc > T_MAX
      ? `Đường cắt trục hoành ở ${text}, ngoài phạm vi đồ thị.`
      : `Đường cắt trục hoành ở ${text}: tại đó phản ứng đổi chiều.`;
  });
</script>

<div class="space-y-3">
  <SegmentedControl label="Dữ liệu" options={MODES} bind:value={mode} />

  {#if mode === 'book'}
    <label class="block">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Chọn phản ứng</span>
      <select class={textInput} bind:value={id}>
        {#each REACTIONS as r (r.id)}
          <option value={r.id}>{r.label}</option>
        {/each}
      </select>
    </label>
    <div class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center">
      <LiveRichText text={`$${reaction.tex}$`} />
    </div>
    <p class="text-sm text-slate-700">
      <LiveRichText
        text={`$\\Delta_r H^\\circ_{298} = ${numTex(dH)}$ kJ, $\\Delta_r S^\\circ_{298} = ${numTex(dS)}$ J/K.`}
      />
    </p>
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <SliderField label="ΔH" bind:value={ownH} min={-500} max={500} step={10} unit="kJ" />
      <SliderField label="ΔS" bind:value={ownS} min={-600} max={600} step={10} unit="J/K" />
    </div>
  {/if}

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl border border-slate-200 bg-white"
    role="img"
    aria-label="Đồ thị biến thiên năng lượng tự do Gibbs theo nhiệt độ. Ở {temperature} K giá trị là {formatNumber(
      dG,
    )} kJ."
  >
    <rect x={LEFT} y={TOP} width={W - LEFT - RIGHT} height={H - TOP - BOTTOM} fill="#fef2f2" />
    {#each spans as [from, to] (from)}
      <rect
        x={px(from)}
        y={TOP}
        width={px(to) - px(from)}
        height={H - TOP - BOTTOM}
        fill="#d1fae5"
      />
    {/each}
    {#each axis.ticks as g (g)}
      <line x1={LEFT} x2={W - RIGHT} y1={py(g)} y2={py(g)} stroke="#e2e8f0" />
      <text x={LEFT - 4} y={py(g) + 3} text-anchor="end" font-size="9" fill="#64748b">
        {formatNumber(g)}
      </text>
    {/each}
    {#each X_TICKS as t (t)}
      <text x={px(t)} y={H - BOTTOM + 13} text-anchor="middle" font-size="9" fill="#64748b">
        {t}
      </text>
    {/each}
    <text x={(W + LEFT) / 2} y={H - 6} text-anchor="middle" font-size="11" fill="#334155">
      Nhiệt độ T (K)
    </text>
    <line x1={LEFT} x2={W - RIGHT} y1={py(0)} y2={py(0)} stroke="#334155" stroke-width="1.5" />
    <line
      x1={px(0)}
      y1={py(gibbs(dH, dS, 0))}
      x2={px(T_MAX)}
      y2={py(gibbs(dH, dS, T_MAX))}
      stroke="#4f46e5"
      stroke-width="3"
    />
    <line
      x1={px(temperature)}
      x2={px(temperature)}
      y1={TOP}
      y2={H - BOTTOM}
      stroke="#0f172a"
      stroke-dasharray="3 3"
    />
    <circle cx={px(temperature)} cy={py(dG)} r="5" fill="#0f172a" />
  </svg>
  <p class="text-xs text-slate-500">
    Trục đứng là ΔG (kJ). Nền xanh: vùng phản ứng tự xảy ra. Nền hồng: vùng phản ứng không tự xảy
    ra.
  </p>

  <SliderField label="Nhiệt độ" bind:value={temperature} min={100} max={T_MAX} step={1} unit="K" />

  <div
    class="space-y-1 rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-900"
    aria-live="polite"
  >
    <p><LiveRichText text={working} /></p>
    <p class="font-semibold"><LiveRichText text={verdict} /></p>
    <p><LiveRichText text={crossing} /></p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="text-slate-500">
          <th class="p-2 font-semibold">ΔH</th>
          <th class="p-2 font-semibold">ΔS</th>
          <th class="p-2 font-semibold">Chiều phản ứng</th>
        </tr>
      </thead>
      <tbody>
        {#each CASES as c (c.key)}
          <tr class={kase === c.key ? 'bg-amber-100 font-semibold' : ''}>
            <td class="p-2"><LiveRichText text={c.dH} /></td>
            <td class="p-2"><LiveRichText text={c.dS} /></td>
            <td class="p-2">{c.text}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
