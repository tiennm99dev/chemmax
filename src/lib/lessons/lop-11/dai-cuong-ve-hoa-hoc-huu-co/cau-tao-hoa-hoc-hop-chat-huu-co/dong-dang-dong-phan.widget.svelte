<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'dong-dang', label: 'Đồng đẳng' },
    { id: 'dong-phan', label: 'Đồng phân' },
    { id: 'khong', label: 'Không phải cả hai' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'a',
        label: 'CH₄ và C₂H₆',
        bin: 'dong-dang',
        why: 'Cùng là alkane, hơn kém một nhóm CH₂.',
      },
      {
        id: 'b',
        label: 'CH₃OH và C₂H₅OH',
        bin: 'dong-dang',
        why: 'Cùng là alcohol có một nhóm –OH, hơn kém một nhóm CH₂.',
      },
      {
        id: 'c',
        label: 'C₂H₄ và C₃H₆ (CH₂=CH–CH₃)',
        bin: 'dong-dang',
        why: 'Cùng có một liên kết đôi, hơn kém một nhóm CH₂.',
      },
      {
        id: 'd',
        label: 'CH₃COOH và C₂H₅COOH',
        bin: 'dong-dang',
        why: 'Cùng là carboxylic acid, hơn kém một nhóm CH₂.',
      },
      {
        id: 'e',
        label: 'C₂H₅OH và CH₃–O–CH₃',
        bin: 'dong-phan',
        why: 'Cùng C₂H₆O, khác nhóm chức.',
      },
      {
        id: 'f',
        label: 'CH₃–CH₂–CH₂–CH₃ và CH₃–CH(CH₃)–CH₃',
        bin: 'dong-phan',
        why: 'Cùng C₄H₁₀, khác mạch carbon.',
      },
      {
        id: 'g',
        label: 'CH₃–CH₂–CH₂–OH và CH₃–CH(OH)–CH₃',
        bin: 'dong-phan',
        why: 'Cùng C₃H₈O, khác vị trí nhóm –OH.',
      },
      {
        id: 'h',
        label: 'C₂H₅OH và CH₃–O–C₂H₅',
        bin: 'khong',
        why: 'Hơn kém một nhóm CH₂ nhưng khác loại chất (alcohol, ether), và cũng khác công thức phân tử.',
      },
      {
        id: 'i',
        label: 'CH₄ và CH₃Cl',
        bin: 'khong',
        why: 'Khác thành phần nguyên tố, không hơn kém nhóm CH₂.',
      },
    ],
    23,
  );
</script>

<CardSorter cards={CARDS} bins={BINS} label="Xếp các cặp chất theo quan hệ" hintOnWrong />
