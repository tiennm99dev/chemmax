<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'up', label: 'Entropy tăng (ΔS > 0)' },
    { id: 'down', label: 'Entropy giảm (ΔS < 0)' },
    { id: 'flat', label: 'Thay đổi rất ít (ΔS ≈ 0)' },
  ];
  const CARDS = shuffled(
    [
      {
        id: 'caco3',
        label: 'CaCO₃(s) → CaO(s) + CO₂(g)',
        bin: 'up',
        why: 'Từ chất rắn sinh ra chất khí: số mol khí tăng từ 0 lên 1.',
      },
      {
        id: 'h2o2',
        label: '2H₂O₂(l) → 2H₂O(l) + O₂(g)',
        bin: 'up',
        why: 'Từ chất lỏng sinh ra khí oxygen: số mol khí tăng.',
      },
      {
        id: 'n2o4',
        label: 'N₂O₄(g) → 2NO₂(g)',
        bin: 'up',
        why: 'Số mol khí tăng từ 1 lên 2.',
      },
      {
        id: 'nh3',
        label: 'N₂(g) + 3H₂(g) → 2NH₃(g)',
        bin: 'down',
        why: 'Số mol khí giảm từ 4 xuống 2.',
      },
      {
        id: 'co',
        label: '2CO(g) → C(s) + CO₂(g)',
        bin: 'down',
        why: 'Số mol khí giảm từ 2 xuống 1, lại sinh ra chất rắn.',
      },
      {
        id: 'agbr',
        label: 'Ag⁺(aq) + Br⁻(aq) → AgBr(s)',
        bin: 'down',
        why: 'Các ion chuyển động tự do trong dung dịch kết tủa thành tinh thể rắn trật tự.',
      },
      {
        id: 'no',
        label: 'N₂(g) + O₂(g) → 2NO(g)',
        bin: 'flat',
        why: 'Hai vế đều có 2 mol khí, nên entropy thay đổi rất ít.',
      },
      {
        id: 'hcl',
        label: 'H₂(g) + Cl₂(g) → 2HCl(g)',
        bin: 'flat',
        why: 'Hai vế đều có 2 mol khí, nên entropy thay đổi rất ít.',
      },
    ],
    41,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Phân loại phản ứng theo biến thiên entropy"
  hintOnWrong
/>
