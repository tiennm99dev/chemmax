<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { richText } from '#lib/core/tex-text.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { METALS, ionText, metal, outcome, potentialText, reagent } from '../_shared/metals.js';

  const PICKED = ['K', 'Na', 'Mg', 'Al', 'Zn', 'Fe', 'Ni', 'Sn', 'Cu', 'Ag'];
  const metalOptions = PICKED.map((id) => ({ value: id, label: id }));
  const reagentOptions = ['H2O', 'HCl', 'FeSO4', 'CuSO4', 'AgNO3'].map((id) => ({
    value: id,
    label: reagent(id).label,
  }));
  /** The series strip: the metals of the book's table with 2H+/H2 in place. */
  const SERIES = [...METALS.slice(0, 9).map((m) => m.id), 'H', 'Cu', 'Ag'];

  let metalId = $state('Zn');
  let reagentId = $state('CuSO4');
  /** @type {boolean | null} */
  let guess = $state(null);
  let right = $state(0);
  let tried = $state(0);
  const still = reducedMotion();
  const clipId = $props.id();

  const r = $derived(reagent(reagentId));
  const o = $derived(outcome(metalId, reagentId));
  const shown = $derived(guess !== null);
  /** Symbol on the strip that the reagent brings: H for water and acid, else the salt's metal. */
  const partner = $derived(r.ion ? r.ion.id : 'H');

  function reset() {
    guess = null;
  }

  /** @param {boolean} value */
  function predict(value) {
    guess = value;
    tried += 1;
    if (value === o.reacts) right += 1;
  }

  const note = $derived.by(() => {
    if (!shown)
      return {
        tone: /** @type {const} */ ('info'),
        text: `Cho ${metalId} vào ${reagentId === 'H2O' ? 'nước' : `dung dịch $${r.tex}$`}. Dự đoán trước: có phản ứng hay không?`,
      };
    const ok = guess === o.reacts;
    return {
      tone: ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
      text: `${ok ? 'Dự đoán đúng.' : 'Chưa đúng.'} ${o.why}`,
    };
  });

  const BUBBLES = [
    { x: 34, d: 0 },
    { x: 46, d: 0.6 },
    { x: 40, d: 1.2 },
    { x: 50, d: 1.7 },
  ];
</script>

<div class="space-y-4">
  <SegmentedControl label="Kim loại" options={metalOptions} bind:value={metalId} onchange={reset} />
  <SegmentedControl
    label="Cho vào"
    options={reagentOptions}
    bind:value={reagentId}
    onchange={reset}
  />

  <svg
    viewBox="0 0 360 44"
    class="w-full max-w-xl"
    role="img"
    aria-label={`Dãy điện hoá: ${metalId} có thế điện cực chuẩn ${potentialText(metal(metalId).E)}; ${partner === 'H' ? 'cặp 2H⁺/H₂ có 0 V' : `cặp ${ionText(metal(partner))}/${partner} có ${potentialText(metal(partner).E)}`}.`}
  >
    <text x="4" y="41" font-size="9" fill="#64748b">tính khử của kim loại giảm dần →</text>
    {#each SERIES as id, i (id)}
      {@const x = 15 + i * 30}
      {@const isMetal = id === metalId}
      {@const isPartner = id === partner}
      <rect
        x={x - 13}
        y="4"
        width="26"
        height="22"
        rx="5"
        fill={isMetal ? '#4f46e5' : isPartner ? '#dc2626' : '#f1f5f9'}
        stroke="#94a3b8"
      />
      <text
        {x}
        y="19"
        text-anchor="middle"
        font-size="10"
        font-weight="700"
        fill={isMetal || isPartner ? '#fff' : '#334155'}>{id}</text
      >
    {/each}
  </svg>

  <div class="grid items-start gap-4 sm:grid-cols-[150px_1fr]">
    <svg
      viewBox="0 0 90 200"
      class="mx-auto w-28"
      role="img"
      aria-label={shown
        ? `Ống nghiệm: ${richText(o.observation)}`
        : `Ống nghiệm chứa ${r.label}, thả ${metalId} vào. Hãy dự đoán.`}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 22 30 L 22 170 A 23 23 0 0 0 68 170 L 68 30 Z" />
        </clipPath>
      </defs>
      <g clip-path="url(#{clipId})">
        <rect
          x="20"
          y="70"
          width="50"
          height="130"
          fill={shown ? (o.after ?? r.color) : r.color}
          class="liquid"
        />
        {#if shown && o.precipitate}
          <rect x="20" y="168" width="50" height="30" fill={o.precipitate} opacity="0.9" />
        {/if}
      </g>
      <path
        d="M 22 22 L 22 170 A 23 23 0 0 0 68 170 L 68 22"
        fill="none"
        stroke="#475569"
        stroke-width="2.5"
      />
      {#if o.show !== 'gas-precipitate' || !shown}
        <rect x="38" y="20" width="14" height="140" rx="2" fill="#94a3b8" stroke="#475569" />
        <text x="45" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a"
          >{metalId}</text
        >
        {#if shown && o.deposit}
          <rect x="36" y="100" width="18" height="60" rx="3" fill={o.deposit} opacity="0.95" />
        {/if}
      {:else}
        <ellipse cx="45" cy="72" rx="9" ry="4" fill="#94a3b8" stroke="#475569" />
        <text x="45" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a"
          >{metalId}</text
        >
      {/if}
      {#if shown && (o.show === 'gas' || o.show === 'gas-precipitate')}
        {#each BUBBLES as b, i (i)}
          <circle
            class={still ? '' : 'bubble'}
            style="animation-delay: {b.d}s"
            cx={b.x}
            cy={still ? 150 - i * 20 : 160}
            r="3"
            fill="#fff"
            stroke="#64748b"
          />
        {/each}
      {/if}
    </svg>

    <div class="space-y-3">
      {#if !shown}
        <div class="flex flex-wrap gap-2">
          <button type="button" class={button.primary} onclick={() => predict(true)}
            >Có phản ứng</button
          >
          <button type="button" class={button.quiet} onclick={() => predict(false)}
            >Không phản ứng</button
          >
        </div>
      {:else}
        <div class="space-y-2 rounded-xl border border-slate-200 p-3 text-sm">
          <p>
            <span class="font-semibold">Hiện tượng:</span>
            <LiveRichText text={o.observation} />
          </p>
          {#if o.equations.length}
            <div class="space-y-1 overflow-x-auto">
              {#each o.equations as eq (eq)}
                <EquationLine text={eq} />
              {/each}
            </div>
          {/if}
          {#if o.note}
            <p class="text-slate-600"><LiveRichText text={o.note} /></p>
          {/if}
        </div>
        <button type="button" class={button.quiet} onclick={reset}>Làm lại thí nghiệm này</button>
      {/if}
      <p class="text-sm text-slate-600" aria-live="polite">
        Dự đoán đúng {right}/{tried} lần.
      </p>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .bubble {
    animation: rise 2.2s linear infinite;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-85px);
      opacity: 0;
    }
  }
</style>
