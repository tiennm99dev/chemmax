<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { KINDS, OXIDES } from './engine.js';

  const cards = shuffled(
    OXIDES.map((o) => ({
      id: o.formula,
      label: `${prettyFormula(o.formula)} (${o.name})`,
      bin: o.kind,
      why: o.why,
    })),
    8,
  );
  const bins = KINDS.map((k) => ({ id: k.id, label: k.label }));
</script>

<CardSorter
  {cards}
  {bins}
  hintOnWrong
  label="Phân loại oxide theo khả năng phản ứng với acid, base"
/>
