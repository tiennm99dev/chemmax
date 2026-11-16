<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'tu-nhien', label: 'Tơ tự nhiên' },
    { id: 'tong-hop', label: 'Tơ tổng hợp' },
    { id: 'ban-tong-hop', label: 'Tơ bán tổng hợp' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'bong',
        label: 'Sợi bông',
        bin: 'tu-nhien',
        why: 'Sợi bông có sẵn trong quả bông, thành phần chính là cellulose.',
      },
      {
        id: 'len',
        label: 'Len lông cừu',
        bin: 'tu-nhien',
        why: 'Len lấy từ lông cừu, dê, lạc đà; thành phần chính là protein.',
      },
      {
        id: 'tam',
        label: 'Tơ tằm',
        bin: 'tu-nhien',
        why: 'Tơ tằm lấy từ kén tằm, là chuỗi protein có sẵn trong tự nhiên.',
      },
      {
        id: 'nylon',
        label: 'Nylon-6,6',
        bin: 'tong-hop',
        why: 'Nylon-6,6 trùng ngưng từ hexamethylenediamine và adipic acid, hai chất tổng hợp.',
      },
      {
        id: 'capron',
        label: 'Tơ capron',
        bin: 'tong-hop',
        why: 'Tơ capron trùng hợp mở vòng từ caprolactam, một chất tổng hợp.',
      },
      {
        id: 'nitron',
        label: 'Tơ nitron (olon)',
        bin: 'tong-hop',
        why: 'Tơ nitron trùng hợp từ acrylonitrile $\\mathrm{CH_2{=}CH{-}CN}$.',
      },
      {
        id: 'visco',
        label: 'Tơ visco',
        bin: 'ban-tong-hop',
        why: 'Tơ visco chế biến hoá học từ cellulose của gỗ, tre, nứa.',
      },
      {
        id: 'acetate',
        label: 'Tơ cellulose acetate',
        bin: 'ban-tong-hop',
        why: 'Cellulose acetate tạo từ cellulose thiên nhiên qua phản ứng với acetic anhydride.',
      },
    ],
    7,
  );
</script>

<CardSorter cards={CARDS} bins={BINS} hintOnWrong label="Phân loại tơ theo nguồn gốc" />
