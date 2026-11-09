<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'co', label: 'Có đồng phân hình học' },
    { id: 'khong', label: 'Không có' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'but-2-ene',
        label: 'CH₃–CH=CH–CH₃ (but-2-ene)',
        bin: 'co',
        why: 'Mỗi carbon của liên kết đôi mang H và CH₃, hai nhóm khác nhau.',
      },
      {
        id: 'pent-2-ene',
        label: 'CH₃–CH=CH–CH₂–CH₃ (pent-2-ene)',
        bin: 'co',
        why: 'Một carbon mang H và CH₃, carbon kia mang H và C₂H₅: đều khác nhau.',
      },
      {
        id: 'dichloro',
        label: 'CHCl=CHCl',
        bin: 'co',
        why: 'Mỗi carbon mang H và Cl, hai nhóm khác nhau.',
      },
      {
        id: 'propene',
        label: 'CH₂=CH–CH₃ (propene)',
        bin: 'khong',
        why: 'Carbon số 1 mang hai nguyên tử H giống nhau.',
      },
      {
        id: 'but-1-ene',
        label: 'CH₂=CH–CH₂–CH₃ (but-1-ene)',
        bin: 'khong',
        why: 'Carbon số 1 mang hai nguyên tử H giống nhau.',
      },
      {
        id: 'methylbutene',
        label: 'CH₃–C(CH₃)=CH–CH₃ (2-methylbut-2-ene)',
        bin: 'khong',
        why: 'Carbon số 2 mang hai nhóm CH₃ giống nhau.',
      },
      {
        id: 'but-2-yne',
        label: 'CH₃–C≡C–CH₃ (but-2-yne)',
        bin: 'khong',
        why: 'Phân tử alkyne thẳng ở liên kết ba, mỗi carbon chỉ còn một nhóm thế, nên không có đồng phân hình học.',
      },
    ],
    17,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Xếp các chất theo việc có đồng phân hình học hay không"
  hintOnWrong
/>
