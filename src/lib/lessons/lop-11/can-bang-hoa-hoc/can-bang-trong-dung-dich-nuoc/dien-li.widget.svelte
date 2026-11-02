<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'manh', label: 'Chất điện li mạnh' },
    { id: 'yeu', label: 'Chất điện li yếu' },
    { id: 'khong', label: 'Chất không điện li' },
  ];
  const CARDS = shuffled(
    [
      {
        id: 'hcl',
        label: 'HCl',
        bin: 'manh',
        why: 'Acid mạnh, phân li hoàn toàn: HCl → H⁺ + Cl⁻.',
      },
      {
        id: 'naoh',
        label: 'NaOH',
        bin: 'manh',
        why: 'Base mạnh, phân li hoàn toàn: NaOH → Na⁺ + OH⁻.',
      },
      {
        id: 'nacl',
        label: 'NaCl',
        bin: 'manh',
        why: 'Muối tan phân li hoàn toàn: NaCl → Na⁺ + Cl⁻.',
      },
      {
        id: 'ch3cooh',
        label: 'CH₃COOH',
        bin: 'yeu',
        why: 'Acid yếu, chỉ phân li một phần: CH₃COOH ⇌ CH₃COO⁻ + H⁺.',
      },
      {
        id: 'hf',
        label: 'HF',
        bin: 'yeu',
        why: 'Acid yếu, chỉ phân li một phần: HF ⇌ H⁺ + F⁻.',
      },
      {
        id: 'nh3',
        label: 'NH₃',
        bin: 'yeu',
        why: 'Base yếu: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, chỉ một phần phân tử nhận proton.',
      },
      {
        id: 'saccharose',
        label: 'Saccharose',
        bin: 'khong',
        why: 'Tan trong nước ở dạng phân tử, không tạo ion nên dung dịch không dẫn điện.',
      },
      {
        id: 'ethanol',
        label: 'Ethanol',
        bin: 'khong',
        why: 'Tan trong nước ở dạng phân tử, không tạo ion nên dung dịch không dẫn điện.',
      },
    ],
    5,
  );
</script>

<CardSorter cards={CARDS} bins={BINS} label="Xếp chất theo khả năng điện li" hintOnWrong />
