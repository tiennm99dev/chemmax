<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { BINS, DIAGRAMS, asCard } from './cards.js';

  const cards = shuffled(DIAGRAMS.map(asCard), 5);

  /** @param {string} id */
  const diagram = (id) => DIAGRAMS.find((d) => d.id === id) ?? DIAGRAMS[0];
</script>

{#snippet face(/** @type {import('#lib/core/card-sorter.js').SortCard} */ c)}
  {@const d = diagram(c.id)}
  <span class="sr-only">{c.label}</span>
  <span aria-hidden="true" class="block">
    <span class="block"><LiveRichText text={`$${d.tex}$`} /></span>
    <svg viewBox="0 0 160 56" class="mt-1 block w-40">
      <line
        x1="8"
        x2="68"
        y1={d.dH < 0 ? 16 : 40}
        y2={d.dH < 0 ? 16 : 40}
        stroke="#4f46e5"
        stroke-width="4"
      />
      <text x="38" y={d.dH < 0 ? 11 : 52} text-anchor="middle" font-size="9" fill="#3730a3"
        >Chất đầu</text
      >
      <line
        x1="92"
        x2="152"
        y1={d.dH < 0 ? 40 : 16}
        y2={d.dH < 0 ? 40 : 16}
        stroke="#0f766e"
        stroke-width="4"
      />
      <text x="122" y={d.dH < 0 ? 52 : 11} text-anchor="middle" font-size="9" fill="#115e59"
        >Sản phẩm</text
      >
    </svg>
  </span>
{/snippet}

<CardSorter
  {cards}
  bins={BINS}
  label="Phân loại phản ứng theo giản đồ năng lượng"
  {face}
  hintOnWrong
/>
