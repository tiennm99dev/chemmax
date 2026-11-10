<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { GROUP_NAMES, NUTRIENTS } from './engine.js';

  const BINS = [
    { id: 'da', label: GROUP_NAMES.da },
    { id: 'trung', label: GROUP_NAMES.trung },
    { id: 'vi', label: GROUP_NAMES.vi },
  ];

  const CARDS = shuffled(
    NUTRIENTS.map((n) => ({
      id: n.symbol,
      label: `${n.symbol} (${n.name})`,
      bin: n.group,
      why: `${n.name} thuộc nhóm ${GROUP_NAMES[n.group].toLowerCase()}.`,
    })),
    11,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Xếp các nguyên tố dinh dưỡng vào nhóm đa lượng, trung lượng, vi lượng"
  hintOnWrong
/>
