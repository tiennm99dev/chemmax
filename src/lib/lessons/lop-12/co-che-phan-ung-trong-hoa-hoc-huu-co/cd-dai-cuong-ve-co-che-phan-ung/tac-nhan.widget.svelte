<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'nu', label: 'Tác nhân nucleophile' },
    { id: 'e', label: 'Tác nhân electrophile' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'oh',
        label: '$\\mathrm{OH^-}$',
        bin: 'nu',
        why: 'Anion $\\mathrm{OH^-}$ giàu electron, có cặp electron tự do trên O.',
      },
      {
        id: 'cn',
        label: '$\\mathrm{CN^-}$',
        bin: 'nu',
        why: 'Anion $\\mathrm{CN^-}$ mang điện âm, có cặp electron tự do trên C.',
      },
      {
        id: 'nh3',
        label: '$\\mathrm{NH_3}$',
        bin: 'nu',
        why: 'Phân tử trung hoà nhưng N còn một cặp electron tự do để cho.',
      },
      {
        id: 'h2o',
        label: '$\\mathrm{H_2O}$',
        bin: 'nu',
        why: 'Nguyên tử O trong nước có hai cặp electron tự do.',
      },
      {
        id: 'ch3o',
        label: '$\\mathrm{CH_3O^-}$',
        bin: 'nu',
        why: 'Anion methoxide mang điện âm trên O, giàu electron.',
      },
      {
        id: 'h',
        label: '$\\mathrm{H^+}$',
        bin: 'e',
        why: '$\\mathrm{H^+}$ mang điện dương, có orbital trống để nhận cặp electron.',
      },
      {
        id: 'no2',
        label: '$\\mathrm{NO_2^+}$',
        bin: 'e',
        why: 'Cation nitronium thiếu electron, là tác nhân của phản ứng nitro hoá benzene.',
      },
      {
        id: 'br',
        label: '$\\mathrm{Br^+}$',
        bin: 'e',
        why: '$\\mathrm{Br^+}$ thiếu electron, tấn công vào vòng benzene khi bromine hoá có xúc tác.',
      },
      {
        id: 'carbocation',
        label: '$\\mathrm{CH_3^+}$',
        bin: 'e',
        why: 'Carbocation có nguyên tử C chỉ có $6$ electron hoá trị, thiếu electron.',
      },
      {
        id: 'alcl3',
        label: '$\\mathrm{AlCl_3}$',
        bin: 'e',
        why: 'Al trong $\\mathrm{AlCl_3}$ có orbital trống, nhận cặp electron.',
      },
    ],
    7,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Phân loại tác nhân nucleophile và electrophile"
  hintOnWrong
/>
