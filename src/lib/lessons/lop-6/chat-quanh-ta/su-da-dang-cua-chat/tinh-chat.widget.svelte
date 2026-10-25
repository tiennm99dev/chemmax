<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'vat-li', label: 'Tính chất vật lí' },
    { id: 'hoa-hoc', label: 'Tính chất hoá học' },
  ];

  const CARDS = [
    {
      id: 'duong-trang',
      label: 'Đường là chất rắn, màu trắng, vị ngọt',
      bin: 'vat-li',
      why: 'Thể, màu, vị quan sát được mà đường vẫn là đường: không có chất mới.',
    },
    {
      id: 'muoi-tan',
      label: 'Muối ăn tan trong nước',
      bin: 'vat-li',
      why: 'Muối tan vào nước vẫn là muối; cô cạn nước lại thu được muối.',
    },
    {
      id: 'dong-dan-dien',
      label: 'Đồng dẫn điện tốt',
      bin: 'vat-li',
      why: 'Dòng điện chạy qua, đồng vẫn là đồng: tính dẫn điện là tính chất vật lí.',
    },
    {
      id: 'nuoc-soi',
      label: 'Nước sôi ở 100 °C',
      bin: 'vat-li',
      why: 'Nước sôi thành hơi nước, vẫn là nước: nhiệt độ sôi là tính chất vật lí.',
    },
    {
      id: 'nen-chay-long',
      label: 'Sáp nến nóng chảy khi bị đun nóng',
      bin: 'vat-li',
      why: 'Sáp chỉ chuyển từ rắn sang lỏng, để nguội lại đông đặc thành sáp: không có chất mới.',
    },
    {
      id: 'duong-than',
      label: 'Đun nóng đường, đường hoá đen thành than',
      bin: 'hoa-hoc',
      why: 'Than là chất mới, khác đường: đây là khả năng bị phân huỷ của đường.',
    },
    {
      id: 'than-chay',
      label: 'Than cháy tạo ra khí carbon dioxide',
      bin: 'hoa-hoc',
      why: 'Carbon dioxide là chất mới: khả năng cháy là tính chất hoá học.',
    },
    {
      id: 'sat-gi',
      label: 'Sắt để lâu trong không khí ẩm bị gỉ',
      bin: 'hoa-hoc',
      why: 'Gỉ sắt màu nâu đỏ, giòn, là chất mới tạo thành từ sắt.',
    },
    {
      id: 'nuoc-voi',
      label: 'Khí carbon dioxide làm đục nước vôi trong',
      bin: 'hoa-hoc',
      why: 'Chất rắn trắng làm đục nước vôi là chất mới, tạo thành do carbon dioxide tác dụng với nước vôi.',
    },
    {
      id: 'gas',
      label: 'Gas (khí đốt) cháy được trong không khí',
      bin: 'hoa-hoc',
      why: 'Khi cháy, gas biến thành carbon dioxide và hơi nước: có chất mới.',
    },
  ];

  const DECK = shuffled(CARDS, 4);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp thông tin vào tính chất vật lí hoặc tính chất hoá học"
/>
