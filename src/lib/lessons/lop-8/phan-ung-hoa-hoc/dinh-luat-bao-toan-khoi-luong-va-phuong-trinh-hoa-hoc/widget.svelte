<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { EXPERIMENTS, experiment, panMasses, tilt, total } from './engine.js';

  let id = $state('bari');
  /** @type {'kin' | 'ho'} */
  let vessel = $state('kin');
  let reacted = $state(false);

  const e = $derived(experiment(id));
  const closed = $derived(vessel === 'kin');
  const pans = $derived(panMasses(e, closed));
  const left = $derived(reacted ? pans.after : pans.before);
  const angle = $derived(tilt(left, pans.before));
  const rad = $derived((angle * Math.PI) / 180);
  /** Beam ends, pivot at (160, 50), half-length 100. */
  const ends = $derived({
    l: [160 - 100 * Math.cos(rad), 50 - 100 * Math.sin(rad)],
    r: [160 + 100 * Math.cos(rad), 50 + 100 * Math.sin(rad)],
  });

  const OPTIONS = EXPERIMENTS.map((x) => ({ value: x.id, label: x.label }));
  const VESSELS = [
    { value: 'kin', label: 'Bình kín' },
    { value: 'ho', label: 'Bình hở' },
  ];

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const sumR = formatNumber(total(e.reactants), 2);
      const sumP = formatNumber(total(e.products), 2);
      if (!reacted) {
        return {
          tone: 'info',
          text: `Trước phản ứng: đĩa trái nặng ${formatNumber(pans.before, 2)} g (tính theo các chất), cân thăng bằng với quả cân bên phải. Bấm “Cho phản ứng xảy ra”.`,
        };
      }
      const law = `Tổng khối lượng chất tham gia = ${sumR} g = tổng khối lượng sản phẩm ${sumP} g.`;
      if (pans.change === 0) {
        return { tone: 'ok', text: `${e.sign} Cân vẫn thăng bằng. ${law}` };
      }
      if (pans.change < 0) {
        return {
          tone: 'warn',
          text: `${e.sign} Bình hở nên ${formatNumber(-pans.change, 2)} g khí thoát ra ngoài, đĩa trái nhẹ đi và bị nâng lên. Tính cả khí thoát ra thì định luật vẫn đúng: ${law}`,
        };
      }
      return {
        tone: 'warn',
        text: `${e.sign} ${formatNumber(pans.change, 2)} g oxygen từ không khí kết hợp vào sản phẩm, đĩa trái nặng thêm và bị hạ xuống. Tính cả oxygen đã phản ứng thì: ${law}`,
      };
    },
  );

  function reset() {
    reacted = false;
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Thí nghiệm" options={OPTIONS} bind:value={id} onchange={reset} />
  <SegmentedControl label="Dụng cụ" options={VESSELS} bind:value={vessel} onchange={reset} />

  <p class="text-center text-sm text-slate-700">{e.words}</p>

  <svg
    viewBox="0 0 320 200"
    class="mx-auto block h-auto w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label={angle === 0
      ? 'Cân thăng bằng'
      : angle > 0
        ? 'Cân lệch: đĩa trái nhẹ hơn, bị nâng lên'
        : 'Cân lệch: đĩa trái nặng hơn, bị hạ xuống'}
  >
    <rect x="130" y="186" width="60" height="8" rx="2" fill="#475569" />
    <line x1="160" y1="186" x2="160" y2="50" stroke="#475569" stroke-width="5" />
    <line
      x1={ends.l[0]}
      y1={ends.l[1]}
      x2={ends.r[0]}
      y2={ends.r[1]}
      stroke="#1e293b"
      stroke-width="5"
      stroke-linecap="round"
    />
    <circle cx="160" cy="50" r="5" fill="#f59e0b" />
    {#each [/** @type {const} */ ('l'), /** @type {const} */ ('r')] as side (side)}
      {@const [x, y] = ends[side]}
      <line x1={x} y1={y} x2={x - 28} y2={y + 70} stroke="#94a3b8" />
      <line x1={x} y1={y} x2={x + 28} y2={y + 70} stroke="#94a3b8" />
      <path d="M{x - 34} {y + 70} h68 l-8 8 h-52 z" fill="#64748b" />
      {#if side === 'l'}
        <!-- reaction vessel -->
        <path
          d="M{x - 8} {y + 34} v10 l-14 24 h44 l-14 -24 v-10 z"
          fill={reacted ? '#e0f2fe' : '#f1f5f9'}
          stroke="#334155"
          stroke-width="1.5"
        />
        {#if closed}
          <rect x={x - 10} y={y + 30} width="20" height="6" rx="2" fill="#b45309" />
        {/if}
        {#if reacted && e.id === 'magnesium'}
          <circle cx={x} cy={y + 60} r="6" fill="#ffffff" stroke="#94a3b8" />
        {/if}
        {#if reacted && e.id === 'bari'}
          <rect x={x - 16} y={y + 64} width="32" height="4" fill="#ffffff" stroke="#94a3b8" />
        {/if}
        {#if reacted && !closed && e.id === 'da-voi'}
          <circle cx={x - 4} cy={y + 22} r="3" fill="none" stroke="#64748b" />
          <circle cx={x + 5} cy={y + 12} r="4" fill="none" stroke="#64748b" />
          <circle cx={x - 2} cy={y + 2} r="3" fill="none" stroke="#64748b" />
        {/if}
      {:else}
        <rect x={x - 14} y={y + 50} width="28" height="20" rx="3" fill="#a16207" />
        <text {x} y={y + 64} text-anchor="middle" font-size="9" fill="#ffffff" font-weight="700"
          >{formatNumber(pans.before, 1)} g</text
        >
      {/if}
    {/each}
  </svg>

  <div class="flex flex-wrap justify-center gap-2">
    <button type="button" class={button.primary} onclick={() => (reacted = true)} disabled={reacted}
      >Cho phản ứng xảy ra</button
    >
    <button type="button" class={button.quiet} onclick={reset} disabled={!reacted}>Làm lại</button>
  </div>

  <div class="grid gap-3 text-sm sm:grid-cols-2">
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-1 font-semibold text-slate-700">Chất tham gia</p>
      <ul class="space-y-1 tabular-nums">
        {#each e.reactants as p (p.formula)}
          <li>
            <ChemFormula formula={p.formula} />: {formatNumber(p.mass, 2)} g{#if p.gas && !closed}<span
                class="ml-1">(lấy từ không khí)</span
              >{/if}
          </li>
        {/each}
        <li class="font-semibold">Tổng: {formatNumber(total(e.reactants), 2)} g</li>
      </ul>
    </div>
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-1 font-semibold text-slate-700">Sản phẩm</p>
      {#if reacted}
        <ul class="space-y-1 tabular-nums">
          {#each e.products as p (p.formula)}
            <li>
              <ChemFormula formula={p.formula} />: {formatNumber(p.mass, 2)} g{#if p.gas && !closed}<span
                  class="ml-1">(thoát ra ngoài)</span
                >{/if}
            </li>
          {/each}
          <li class="font-semibold">Tổng: {formatNumber(total(e.products), 2)} g</li>
        </ul>
      {:else}
        <p class="text-slate-600">Chưa phản ứng.</p>
      {/if}
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
