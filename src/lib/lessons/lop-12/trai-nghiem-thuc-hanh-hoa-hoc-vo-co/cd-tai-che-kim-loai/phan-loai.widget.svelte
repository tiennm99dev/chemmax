<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { SCRAP_BINS, SCRAP_CARDS } from './engine.js';

  const cards = shuffled(SCRAP_CARDS, 12);
</script>

<CardSorter
  {cards}
  bins={SCRAP_BINS}
  label="Phân loại phế liệu kim loại: sắt thép, nhôm, đồng"
  hintOnWrong
/>
