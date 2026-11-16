<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { polymer, polymerTex } from '../_shared/polymers.js';

  /** The polymers to match, each with the monomer bin it comes from. */
  const IDS = ['pe', 'pvc', 'ps', 'buna', 'capron', 'nylon-6-6'];

  const BINS = IDS.map((id) => {
    const p = polymer(id);
    return { id, label: p.monomers.map((m) => m.name).join(' + ') };
  });

  /** @param {string} id */
  function cardsOf(id) {
    const p = polymer(id);
    const from = p.monomers.map((m) => m.name).join(' và ');
    const how = p.method === 'trung-hop' ? 'trùng hợp' : 'trùng ngưng';
    const title = p.abbr ? `${p.name} (${p.abbr})` : p.material;
    const unit =
      p.method === 'trung-hop'
        ? 'có cùng thành phần nguyên tố với monomer'
        : 'bằng các monomer trừ đi phân tử nước tách ra';
    return [
      {
        id: `${id}-name`,
        label: title,
        bin: id,
        why: `${title[0].toUpperCase()}${title.slice(1)} được tổng hợp bằng phản ứng ${how} từ ${from}.`,
      },
      {
        id: `${id}-unit`,
        label: `$${polymerTex(p)}$`,
        bin: id,
        why: `Mắt xích ${unit}; polymer này tạo từ ${from}.`,
      },
    ];
  }

  const CARDS = shuffled(IDS.flatMap(cardsOf), 4);
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  hintOnWrong
  label="Ghép mỗi polymer và mắt xích của nó với monomer tương ứng"
/>
