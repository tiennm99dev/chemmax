<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { MATERIAL_BINS, MATERIAL_CARDS } from './engine.js';

  const cards = shuffled(MATERIAL_CARDS, 32);
</script>

<CardSorter
  {cards}
  bins={MATERIAL_BINS}
  label="Xếp đồ vật vào nhóm vật liệu polymer: chất dẻo, tơ, cao su, composite"
  hintOnWrong
/>
