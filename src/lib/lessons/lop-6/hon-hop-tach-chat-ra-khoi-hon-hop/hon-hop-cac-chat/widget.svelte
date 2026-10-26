<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { SUBSTANCES, TEMPERATURES, dissolve, observe, substanceById } from './engine.js';

  /** @typedef {import('./engine.js').Phase} Phase */
  /** @typedef {import('./engine.js').Temperature} Temperature */

  const SUB_OPTIONS = SUBSTANCES.map((s) => ({ value: s.id, label: s.name }));
  const TEMP_OPTIONS = [
    { value: 'lanh', label: `Nước ${TEMPERATURES.lanh} °C` },
    { value: 'nong', label: `Nước ${TEMPERATURES.nong} °C` },
  ];

  let id = $state('muoi');
  /** @type {Temperature} */
  let temp = $state('lanh');
  let amount = $state(20);
  /** @type {Phase | null} */
  let phase = $state(null);
  /** @type {Array<{ name: string, title: string, homogeneous: boolean | null }>} */
  let log = $state([]);

  const sub = $derived(substanceById(id));
  const unit = $derived(sub.state === 'long' ? 'mL' : 'g');
  const obs = $derived(phase ? observe(id, amount, temp, phase) : null);
  const left = $derived(dissolve(id, amount, temp).excess);

  /** @param {string | number} v */
  function chooseSubstance(v) {
    id = String(v);
    const s = substanceById(id);
    amount = Math.min(s.max, Math.max(s.step, Math.round(s.max / 3 / s.step) * s.step));
    phase = null;
  }
  /** @param {string | number} v */
  function chooseTemp(v) {
    temp = v === 'nong' ? 'nong' : 'lanh';
    phase = null;
  }
  /** @param {Phase} p */
  function go(p) {
    phase = p;
    const o = observe(id, amount, temp, p);
    if (p !== 'them') {
      const entry = {
        name: `${sub.name} (${formatNumber(amount)} ${unit}, nước ${TEMPERATURES[temp]} °C), ${p === 'khuay' ? 'khuấy' : 'để yên'}`,
        title: o.title,
        homogeneous: o.homogeneous,
      };
      log = [entry, ...log.filter((e) => e.name !== entry.name)].slice(0, 6);
    }
  }

  // ---- drawing ----
  const L = 90;
  const R = 230;
  const TOP = 60;
  const WATER = 90;
  const BOTTOM = 250;
  const kind = $derived(obs?.kind ?? 'dung-dich');
  const added = $derived(phase !== null && amount > 0);

  // Fixed pseudo-random spots so the picture does not jump between renders.
  const rand = (/** @type {number} */ n) => {
    const v = Math.sin(n * 12.9898) * 43758.5453;
    return v - Math.floor(v);
  };
  const SPOTS = Array.from({ length: 60 }, (_, i) => ({
    x: L + 6 + rand(i + 1) * (R - L - 12),
    y: WATER + 8 + rand(i + 101) * (BOTTOM - WATER - 16),
    r: 1.5 + rand(i + 201) * 1.5,
  }));

  const waterFill = $derived.by(() => {
    if (!added) return '#dbeafe';
    if (kind === 'huyen-phu') return '#e2e8f0';
    if (kind === 'nhu-tuong') return '#fef9c3';
    if (id === 'giam' || (id === 'duong' && amount > 100)) return '#fef3c7';
    return '#dbeafe';
  });
  /** Height of the pile at the bottom, in pixels. */
  const pile = $derived.by(() => {
    if (!added) return 0;
    if (kind === 'chua-tan') return 10;
    if (kind === 'dung-dich-du') return Math.min(30, 4 + left / (sub.max / 40));
    if (kind === 'lang') return id === 'cat' ? 8 + amount / 3 : 5 + amount / 5;
    return 0;
  });
  const oilLayer = $derived(added && kind === 'tach-lop' ? 6 + amount / 2 : 0);
  const label = $derived(
    `Cốc 100 g nước ở ${TEMPERATURES[temp]} °C${added ? ` có ${formatNumber(amount)} ${unit} ${sub.name.toLowerCase()}` : ''}. ${obs ? `${obs.title}. ${obs.text}` : 'Chưa cho chất vào cốc.'}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chất cho vào nước"
    options={SUB_OPTIONS}
    value={id}
    onchange={chooseSubstance}
  />
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Nhiệt độ nước"
      options={TEMP_OPTIONS}
      value={temp}
      onchange={chooseTemp}
    />
    <SliderField
      label="Lượng chất"
      bind:value={amount}
      min={sub.step}
      max={sub.max}
      step={sub.step}
      {unit}
      oninput={() => (phase = null)}
    />
  </div>

  <svg viewBox="0 0 320 270" class="block w-full max-w-sm" role="img" aria-label={label}>
    <!-- water -->
    <rect x={L} y={WATER} width={R - L} height={BOTTOM - WATER} fill={waterFill} class="mix" />
    {#if oilLayer > 0}
      <rect x={L} y={WATER} width={R - L} height={oilLayer} fill="#facc15" opacity="0.85" />
    {/if}
    {#if added && (kind === 'huyen-phu' || kind === 'nhu-tuong')}
      {#each SPOTS as s, i (i)}
        <circle
          cx={s.x}
          cy={s.y}
          r={kind === 'nhu-tuong' ? s.r + 0.8 : s.r}
          fill={kind === 'nhu-tuong' ? '#eab308' : '#94a3b8'}
          opacity="0.8"
        />
      {/each}
    {/if}
    {#if added && kind === 'chua-tan'}
      {#each SPOTS.slice(0, 18) as s, i (i)}
        <rect x={s.x - 1.5} y={BOTTOM - 22 + (i % 4) * 3} width="3" height="3" fill="#94a3b8" />
      {/each}
    {/if}
    {#if pile > 0}
      <path
        d="M{L} {BOTTOM} Q {(L + R) / 2} {BOTTOM - pile * 2} {R} {BOTTOM} Z"
        fill={id === 'cat' ? '#d97706' : id === 'phan' ? '#cbd5e1' : '#e5e7eb'}
        stroke="#94a3b8"
      />
    {/if}
    {#if phase === 'khuay'}
      <line
        x1="200"
        y1="30"
        x2="150"
        y2="235"
        stroke="#64748b"
        stroke-width="4"
        stroke-linecap="round"
      />
    {/if}
    <!-- beaker -->
    <path
      d="M{L - 6} {TOP} L{L} {TOP + 6} L{L} {BOTTOM} L{R} {BOTTOM} L{R} {TOP + 6} L{R + 6} {TOP}"
      fill="none"
      stroke="#334155"
      stroke-width="3"
    />
    <text x={R + 10} y={WATER + 4} font-size="11" fill="#334155">100 g nước</text>
    {#if obs}
      <text x="160" y="266" text-anchor="middle" font-size="13" font-weight="600" fill="#1e293b"
        >{obs.title}</text
      >
    {/if}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={() => go('them')}>Cho vào cốc</button>
    <button type="button" class={button.secondary} onclick={() => go('khuay')} disabled={!phase}>
      Khuấy mạnh
    </button>
    <button type="button" class={button.quiet} onclick={() => go('de-yen')} disabled={!phase}>
      Để yên một lúc
    </button>
  </div>

  <div class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {#if obs}
      <p class="font-semibold">
        {obs.title}{obs.homogeneous === null
          ? ''
          : obs.homogeneous
            ? ': hỗn hợp đồng nhất'
            : ': hỗn hợp không đồng nhất'}
      </p>
      <p>{obs.text}</p>
    {:else}
      <p>Chọn chất, nhiệt độ nước và lượng chất, rồi bấm "Cho vào cốc".</p>
    {/if}
  </div>

  {#if log.length > 0}
    <table class="w-full text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">Kết quả em đã quan sát</caption>
      <thead>
        <tr class="text-left text-slate-600">
          <th class="py-1">Thí nghiệm</th>
          <th class="py-1">Thu được</th>
          <th class="py-1">Loại hỗn hợp</th>
        </tr>
      </thead>
      <tbody>
        {#each log as e (e.name)}
          <tr class="border-t border-slate-200">
            <td class="py-1 pr-2">{e.name}</td>
            <td class="py-1 pr-2">{e.title}</td>
            <td class="py-1"
              >{e.homogeneous === null ? '—' : e.homogeneous ? 'Đồng nhất' : 'Không đồng nhất'}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  @media (prefers-reduced-motion: no-preference) {
    .mix {
      transition: fill 0.6s ease;
    }
  }
</style>
