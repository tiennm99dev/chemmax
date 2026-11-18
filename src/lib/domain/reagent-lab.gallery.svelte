<script module>
  export const title = 'Bàn thử chất với thuốc thử';
</script>

<script>
  import ReagentLab from './reagent-lab.svelte';

  /** @type {Record<string, { name: string, formula: string }>} */
  const SUBSTANCES = {
    hcl: { name: 'dung dịch HCl', formula: '$\\mathrm{HCl}$' },
    naoh: { name: 'dung dịch NaOH', formula: '$\\mathrm{NaOH}$' },
  };
  const REAGENTS = [{ id: 'quy', name: 'Quỳ tím', liquid: '#c4b5fd' }];
  /** @param {string} id */
  const observe = (id) => ({
    reacts: true,
    short: id === 'hcl' ? 'quỳ hoá đỏ' : 'quỳ hoá xanh',
    text: id === 'hcl' ? 'quỳ tím hoá đỏ' : 'quỳ tím hoá xanh',
    why:
      id === 'hcl' ? 'Dung dịch acid làm quỳ tím hoá đỏ.' : 'Dung dịch base làm quỳ tím hoá xanh.',
    liquid: id === 'hcl' ? '#ef4444' : '#3b82f6',
    precipitate: null,
    amount: 0,
    tex: null,
  });
</script>

<ReagentLab
  substances={['hcl', 'naoh']}
  substanceOf={(id) => SUBSTANCES[id]}
  reagentTable={REAGENTS}
  reagents={['quy']}
  {observe}
  intro="Chọn một chất, thử bằng quỳ tím và đọc kết quả."
/>
