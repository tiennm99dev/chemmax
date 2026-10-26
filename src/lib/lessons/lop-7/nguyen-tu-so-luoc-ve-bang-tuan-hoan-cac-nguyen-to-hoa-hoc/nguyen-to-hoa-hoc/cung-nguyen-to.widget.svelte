<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ATOM_CARDS, ELEMENT_BINS } from './engine.js';

  const cards = shuffled(ATOM_CARDS, 7);
</script>

<CardSorter {cards} bins={ELEMENT_BINS} label="Xếp các nguyên tử vào đúng nguyên tố" hintOnWrong />
