<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { ALKENES, addition, barrier, orderWord, profile } from './engine.js';

  const W = 340;
  const H = 200;
  const E_MIN = -55;
  const E_MAX = 125;
  const sx = (/** @type {number} */ s) => 16 + s * (W - 32);
  const sy = (/** @type {number} */ e) => 10 + ((E_MAX - e) / (E_MAX - E_MIN)) * (H - 20);

  const ALKENE_OPTIONS = ALKENES.map((a) => ({ value: a.id, label: a.name }));
  const REAGENTS = [
    { value: 'hbr', label: 'HBr' },
    { value: 'h2o', label: 'H₂O (xúc tác H⁺)' },
  ];

  let alkeneId = $state('propene');
  let reagent = $state('hbr');
  /** @type {0 | 1 | null} */
  let site = $state(null);

  const alkene = $derived(ALKENES.find((a) => a.id === alkeneId) ?? ALKENES[0]);
  const reagentKey = $derived(/** @type {'hbr' | 'h2o'} */ (reagent));
  const result = $derived(site === null ? null : addition(alkene, reagentKey, site));
  const tried = $derived(site === null ? null : 1 - site);

  /** @param {1 | 2 | 3} order */
  const path = (order) => pointsAttr(profile(order).map((p) => ({ x: sx(p.s), y: sy(p.e) })));

  /** @param {0 | 1} i */
  const siteLabel = (i) => `H⁺ vào $\\mathrm{${alkene.carbons[i]}}$ (C${i + 1})`;

  /** @type {Array<0 | 1>} */
  const SITES = [0, 1];

  function reset() {
    site = null;
  }
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Alkene"
      options={ALKENE_OPTIONS}
      bind:value={alkeneId}
      onchange={reset}
    />
    <SegmentedControl label="Tác nhân" options={REAGENTS} bind:value={reagent} onchange={reset} />
  </div>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-center text-base">
    <LiveRichText
      text={`$\\mathrm{${alkene.tex}} + ${reagent === 'hbr' ? '\\mathrm{HBr}' : '\\mathrm{H_2O}'}$`}
    />
  </p>

  <fieldset class="space-y-2">
    <legend class="text-sm font-semibold text-slate-700">
      Bước 1: H⁺ cộng vào nguyên tử carbon nào của liên kết đôi?
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each SITES as i (i)}
        <button
          type="button"
          class={site === i ? button.primary : button.quiet}
          aria-pressed={site === i}
          onclick={() => (site = i)}
        >
          <LiveRichText text={siteLabel(i)} />
        </button>
      {/each}
    </div>
  </fieldset>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50"
    role="img"
    aria-label={result && tried !== null
      ? `Giản đồ năng lượng: đường qua carbocation ${orderWord(result.order)} có đỉnh ${barrier(result.order)}, đường qua carbocation ${orderWord(alkene.sites[tried].order)} có đỉnh ${barrier(alkene.sites[tried].order)} (đơn vị minh hoạ).`
      : 'Giản đồ năng lượng của hai hướng cộng, hiện ra sau khi chọn carbon nhận H⁺.'}
  >
    <line x1="16" x2={W - 16} y1={sy(0)} y2={sy(0)} stroke="#cbd5e1" stroke-dasharray="4 4" />
    <text x="18" y={sy(0) + 14} font-size="11" font-weight="600" fill="#334155">Chất đầu</text>
    <text
      x={W - 18}
      y={sy(-40) + 14}
      font-size="11"
      font-weight="600"
      fill="#334155"
      text-anchor="end">Sản phẩm</text
    >
    {#if result && tried !== null}
      {@const other = alkene.sites[tried]}
      <polyline
        points={path(other.order)}
        fill="none"
        stroke="#94a3b8"
        stroke-width="2"
        stroke-dasharray="5 4"
      />
      <polyline
        points={path(result.order)}
        fill="none"
        stroke={result.main ? '#059669' : '#d97706'}
        stroke-width="3"
      />
      <text
        x={sx(0.5)}
        y={sy(barrier(result.order) - 25) + 16}
        font-size="11"
        font-weight="700"
        text-anchor="middle"
        fill={result.main ? '#047857' : '#b45309'}>Carbocation {orderWord(result.order)}</text
      >
      <text
        x={sx(0.5)}
        y={sy(barrier(other.order) - 25) - 8}
        font-size="11"
        text-anchor="middle"
        fill="#64748b">{orderWord(other.order)}</text
      >
    {/if}
  </svg>

  {#if result}
    <div class="space-y-1 rounded-xl border border-slate-200 p-3 text-sm" aria-live="polite">
      <p>
        <LiveRichText text={`Carbocation: $${result.cation}$ (${orderWord(result.order)}).`} />
      </p>
      <p>
        <LiveRichText
          text={`Bước 2: ${reagent === 'hbr' ? '$\\mathrm{Br^-}$' : '$\\mathrm{H_2O}$'} kết hợp với carbocation → $${result.product}$ (${result.name}).`}
        />
      </p>
    </div>
    <FeedbackNote tone={result.main ? 'ok' : 'warn'} text={result.text} />
  {:else}
    <p class="text-sm text-slate-600">
      Chọn nguyên tử carbon nhận H⁺ để xem carbocation tạo thành, rào năng lượng và sản phẩm.
    </p>
  {/if}
</div>
