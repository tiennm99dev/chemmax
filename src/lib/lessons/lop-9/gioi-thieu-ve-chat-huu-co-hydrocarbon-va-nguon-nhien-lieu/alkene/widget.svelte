<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemText from '../_shared/chem-text.svelte';
  import {
    GASES,
    MOLAR_VOLUME,
    PORTION_UMOL,
    PORTIONS_TO_CLEAR,
    bromineColour,
    bromineTest,
    mol,
  } from './engine.js';

  /** @typedef {import('./engine.js').Gas} Gas */

  /** @type {Gas} */
  let gas = $state(/** @type {Gas} */ ('c2h4'));
  let portions = $state(0);
  let bubbling = $state(false);

  const g = $derived(GASES[gas]);
  const t = $derived(bromineTest(gas, portions));
  const liquid = $derived(bromineColour(t.colour));

  const OPTIONS = [
    { value: 'c2h4', label: 'Ethylene' },
    { value: 'ch4', label: 'Methane' },
  ];

  const portionMl = formatNumber(mol(PORTION_UMOL) * MOLAR_VOLUME * 1000, 2);
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;

  function bubble() {
    portions += 1;
    bubbling = true;
    clearTimeout(timer);
    timer = setTimeout(() => (bubbling = false), 1200);
  }

  function reset() {
    portions = 0;
    bubbling = false;
  }

  /** @param {number} umol */
  const molText = (umol) => `${formatNumber(mol(umol), 4)} mol`;

  const BUBBLES = Array.from({ length: 8 }, (_, i) => ({
    x: 92 + ((i * 29) % 24),
    y: 210 - ((i * 23) % 70),
    r: 2.5 + (i % 3),
  }));

  const tone = $derived(portions === 0 ? 'info' : g.reacts ? 'ok' : /** @type {const} */ ('warn'));
  const note = $derived.by(() => {
    if (portions === 0)
      return `Ống nghiệm chứa ${molText(10_000)} bromine (Br₂) trong nước, màu vàng cam. Mỗi lần bấm “Sục khí” dẫn ${formatNumber(mol(PORTION_UMOL), 3)} mol khí (khoảng ${portionMl} mL ở điều kiện chuẩn) qua ống.`;
    if (!g.reacts)
      return `Đã sục ${molText(t.fed)} methane nhưng màu nước bromine không đổi: methane chỉ có liên kết đơn, không có phản ứng cộng với bromine. Khí thoát ra ngoài hết.`;
    if (t.bromineLeft > 0)
      return `Màu vàng cam nhạt dần: ${molText(t.reacted)} ethylene đã cộng với ${molText(t.reacted)} Br₂ (tỉ lệ 1 : 1). Còn ${molText(t.bromineLeft)} Br₂.`;
    return `Nước bromine đã mất màu hoàn toàn sau ${PORTIONS_TO_CLEAR} lần sục: ${molText(t.product)} BrCH₂–CH₂Br tạo thành.${t.escaped > 0 ? ` ${molText(t.escaped)} ethylene dư thoát ra vì hết bromine.` : ''}`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Khí dẫn vào nước bromine"
    options={OPTIONS}
    bind:value={gas}
    onchange={reset}
  />

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,13rem)_1fr]">
    <svg
      viewBox="0 0 200 260"
      class="mx-auto block h-auto w-full max-w-52"
      role="img"
      aria-label="Ống nghiệm chứa nước bromine, ống dẫn khí {g.name} cắm xuống đáy. Màu dung dịch còn {Math.round(
        t.colour * 100,
      )}% so với ban đầu."
    >
      <!-- gas delivery tube -->
      <path d="M40 20 L100 20 L100 222" fill="none" stroke="#64748b" stroke-width="5" />
      <text x="20" y="14" font-size="12" fill="#334155">{g.name}</text>
      <!-- liquid -->
      <path d="M72 120 L128 120 L128 214 A28 28 0 0 1 72 214 Z" fill={liquid} />
      {#if bubbling}
        {#each BUBBLES as b, i (i)}
          <circle
            cx={b.x}
            cy={b.y}
            r={b.r}
            fill="none"
            stroke="#0f172a"
            class="bubble"
            style:animation-delay="{(i % 4) * 0.25}s"
          />
        {/each}
      {/if}
      <!-- tube glass -->
      <path
        d="M68 60 L68 214 A32 32 0 0 0 132 214 L132 60"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      <line x1="62" x2="74" y1="60" y2="60" stroke="#334155" stroke-width="3" />
      <line x1="126" x2="138" y1="60" y2="60" stroke="#334155" stroke-width="3" />
    </svg>

    <div class="space-y-3">
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={bubble} disabled={portions >= 8}>
          Sục khí
        </button>
        <button type="button" class={button.quiet} onclick={reset} disabled={portions === 0}>
          Làm lại
        </button>
      </div>
      <table class="w-full border-collapse text-left text-sm">
        <caption class="sr-only">Lượng chất trong ống nghiệm</caption>
        <tbody>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">Khí đã sục</th>
            <td class="border border-slate-200 p-1 tabular-nums">{molText(t.fed)}</td>
          </tr>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">Br₂ còn lại</th>
            <td class="border border-slate-200 p-1 tabular-nums">{molText(t.bromineLeft)}</td>
          </tr>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">Khí thoát ra</th>
            <td class="border border-slate-200 p-1 tabular-nums">{molText(t.escaped)}</td>
          </tr>
        </tbody>
      </table>
      <div class="rounded-xl bg-slate-50 p-3">
        {#if g.reacts}
          <p class="text-sm font-semibold text-slate-600">Phản ứng cộng bromine</p>
          <p class="text-lg font-medium"><ChemText text="CH2=CH2 + Br2 → BrCH2–CH2Br" /></p>
        {:else}
          <p class="text-sm text-slate-700">
            <ChemText text="CH4" /> không phản ứng với nước bromine.
          </p>
        {/if}
      </div>
    </div>
  </div>

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .bubble {
    animation: rise 1.1s ease-in infinite;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-60px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bubble {
      animation: none;
    }
  }
</style>
