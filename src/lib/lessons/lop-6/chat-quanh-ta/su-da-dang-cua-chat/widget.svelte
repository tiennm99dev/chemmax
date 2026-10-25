<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'tu-nhien', label: 'Vật thể tự nhiên' },
    { id: 'nhan-tao', label: 'Vật thể nhân tạo' },
    { id: 'chat', label: 'Chất' },
  ];

  const CARDS = [
    {
      id: 'cay-mia',
      label: 'Cây mía',
      bin: 'tu-nhien',
      why: 'Cây mía mọc trong tự nhiên, là vật sống; trong nó có đường, nước, cellulose.',
    },
    {
      id: 'duong',
      label: 'Đường',
      bin: 'chat',
      why: 'Đường là chất có trong cây mía, trong bánh kẹo; nó không phải một đồ vật cụ thể.',
    },
    {
      id: 'dinh-sat',
      label: 'Đinh sắt',
      bin: 'nhan-tao',
      why: 'Chiếc đinh do con người làm ra; chất tạo nên nó là sắt.',
    },
    {
      id: 'sat',
      label: 'Sắt',
      bin: 'chat',
      why: 'Sắt là chất làm nên đinh, dao, cầu sắt.',
    },
    {
      id: 'nui-da',
      label: 'Núi đá vôi',
      bin: 'tu-nhien',
      why: 'Núi đá có sẵn trong tự nhiên, là vật không sống; chất chính tạo nên nó là calcium carbonate.',
    },
    {
      id: 'coc',
      label: 'Cốc thuỷ tinh',
      bin: 'nhan-tao',
      why: 'Cái cốc do con người làm ra từ chất thuỷ tinh.',
    },
    {
      id: 'thuy-tinh',
      label: 'Thuỷ tinh',
      bin: 'chat',
      why: 'Thuỷ tinh là chất làm nên cốc, cửa kính, chai lọ.',
    },
    {
      id: 'con-ca',
      label: 'Con cá',
      bin: 'tu-nhien',
      why: 'Con cá là vật sống có sẵn trong tự nhiên.',
    },
    {
      id: 'xe-dap',
      label: 'Xe đạp',
      bin: 'nhan-tao',
      why: 'Xe đạp do con người chế tạo, làm từ sắt, nhôm, cao su,...',
    },
    {
      id: 'nhom',
      label: 'Nhôm',
      bin: 'chat',
      why: 'Nhôm là chất làm nên nồi, xoong, khung cửa.',
    },
    {
      id: 'qua-cam',
      label: 'Quả cam',
      bin: 'tu-nhien',
      why: 'Quả cam có sẵn trong tự nhiên; trong nó có nước, đường, vitamin C.',
    },
    {
      id: 'chai-nhua',
      label: 'Chai nhựa',
      bin: 'nhan-tao',
      why: 'Chai nhựa do con người làm ra từ chất dẻo.',
    },
  ];

  const DECK = shuffled(CARDS, 9);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp thẻ vào vật thể tự nhiên, vật thể nhân tạo hoặc chất"
/>
