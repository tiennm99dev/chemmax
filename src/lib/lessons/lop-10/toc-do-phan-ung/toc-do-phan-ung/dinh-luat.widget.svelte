<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, numTex } from '#lib/core/number-format.js';
  import { rateLaw } from '../_shared/rate.js';

  /**
   * The two simple reactions compared, with the orders from their equations.
   * @type {Record<string, { tex: string, first: string, second: string, tA: string, tB: string, a: number, b: number }>}
   */
  const REACTIONS = {
    xy: {
      tex: '\\mathrm{X} + \\mathrm{Y} \\rightarrow \\mathrm{XY}',
      first: 'X',
      second: 'Y',
      tA: 'C_{\\mathrm{X}}',
      tB: 'C_{\\mathrm{Y}}',
      a: 1,
      b: 1,
    },
    no: {
      tex: '2\\mathrm{NO} + \\mathrm{O_2} \\rightarrow 2\\mathrm{NO_2}',
      first: 'NO',
      second: 'O₂',
      tA: 'C_{\\mathrm{NO}}',
      tB: 'C_{\\mathrm{O_2}}',
      a: 2,
      b: 1,
    },
  };
  const OPTIONS = [
    { value: 'xy', label: 'X + Y' },
    { value: 'no', label: '2NO + O₂' },
  ];
  const BASE = 0.1;

  let reaction = $state('no');
  let first = $state(0.1);
  let second = $state(0.1);
  let squeeze = $state(1);

  const r = $derived(REACTIONS[reaction]);
  const cA = $derived(first * squeeze);
  const cB = $derived(second * squeeze);
  /** Rate per k, so the widget compares without inventing a rate constant. */
  const vOverK = $derived(
    rateLaw(1, [
      [cA, r.a],
      [cB, r.b],
    ]),
  );
  const startOverK = $derived(
    rateLaw(1, [
      [BASE, r.a],
      [BASE, r.b],
    ]),
  );
  const times = $derived(Math.round(vOverK / startOverK));
  const power = (/** @type {number} */ n) => (n === 1 ? '' : `^${n}`);
  const law = $derived(`$v = k \\cdot ${r.tA}${power(r.a)} \\cdot ${r.tB}${power(r.b)}$`);
  const working = $derived(
    `$v = k \\cdot ${numTex(cA, 2)}${power(r.a)} \\cdot ${numTex(cB, 2)}${power(r.b)} = ${numTex(vOverK, 6)}\\,k$`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Phản ứng đơn giản" options={OPTIONS} bind:value={reaction} />
  <p class="text-center"><LiveRichText text={`$${r.tex}$`} /></p>
  <p class="text-center"><LiveRichText text={law} /></p>
  <div class="grid gap-4 md:grid-cols-3">
    <SliderField
      label="Lấy {r.first}"
      min={0.1}
      max={0.3}
      step={0.1}
      unit="M"
      format={(v) => formatFixed(v, 1)}
      bind:value={first}
    />
    <SliderField
      label="Lấy {r.second}"
      min={0.1}
      max={0.3}
      step={0.1}
      unit="M"
      format={(v) => formatFixed(v, 1)}
      bind:value={second}
    />
    <SliderField
      label="Nén bình khí: thể tích giảm"
      min={1}
      max={2}
      step={1}
      unit="lần"
      bind:value={squeeze}
    />
  </div>
  <p class="overflow-x-auto text-center" aria-live="polite">
    <LiveRichText text={working} />
    <br />
    <strong>So với lúc mọi nồng độ là 0,1 M, tốc độ gấp {times} lần.</strong>
  </p>
  <div class="flex flex-wrap justify-center gap-0.5" aria-hidden="true">
    {#each { length: times }, i (i)}
      <span class="block h-2.5 w-2.5 rounded-sm bg-indigo-500"></span>
    {/each}
  </div>
  <p class="text-center text-xs text-slate-600">Mỗi ô là một lần tốc độ ban đầu.</p>
</div>
