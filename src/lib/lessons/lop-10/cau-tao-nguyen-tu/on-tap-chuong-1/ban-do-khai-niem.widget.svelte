<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { CONCEPT_BINS, CONCEPT_CARDS } from './engine.js';

  const cards = shuffled(CONCEPT_CARDS, 11);
</script>

<CardSorter
  {cards}
  bins={CONCEPT_BINS}
  label="Xếp các kiến thức vào bản đồ khái niệm cấu tạo nguyên tử"
  hintOnWrong
/>
