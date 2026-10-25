<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'dung', label: 'Bảo quản đúng cách' },
    { id: 'sai', label: 'Dễ làm thực phẩm hỏng' },
  ];

  const CARDS = [
    {
      id: 'gao-kin',
      label: 'Đựng gạo trong thùng kín, để nơi khô ráo, thoáng mát',
      bin: 'dung',
      why: 'Gạo khô, kín thì ít bị ẩm mốc, mọt và chuột bọ.',
    },
    {
      id: 'com-ngoai',
      label: 'Để cơm, canh thừa ngoài bàn qua đêm mùa hè',
      bin: 'sai',
      why: 'Trời nóng ẩm, vi khuẩn phát triển nhanh làm cơm, canh bị ôi thiu.',
    },
    {
      id: 'ca-dong',
      label: 'Cá tươi rửa sạch, cho vào ngăn đá tủ lạnh',
      bin: 'dung',
      why: 'Nhiệt độ thấp làm chậm sự phát triển của vi khuẩn, giữ cá tươi lâu hơn.',
    },
    {
      id: 'lac-am',
      label: 'Để lạc, ngô ở nơi ẩm thấp',
      bin: 'sai',
      why: 'Ẩm làm lạc, ngô bị mốc; lạc mốc sinh ra chất độc rất có hại cho gan.',
    },
    {
      id: 'ca-kho',
      label: 'Phơi hoặc sấy khô cá, mực',
      bin: 'dung',
      why: 'Làm khô lấy đi nước, vi khuẩn và nấm mốc khó phát triển.',
    },
    {
      id: 'dua-muoi',
      label: 'Muối dưa cải, ướp muối thịt cá',
      bin: 'dung',
      why: 'Muối (hoặc đường, giấm) làm vi khuẩn khó phát triển, giữ thực phẩm được lâu.',
    },
    {
      id: 'tu-lanh-mo',
      label: 'Để thức ăn chín và thịt sống chung không đậy trong tủ lạnh',
      bin: 'sai',
      why: 'Vi khuẩn từ thực phẩm sống có thể nhiễm sang thức ăn chín; cần đậy kín, để riêng.',
    },
    {
      id: 'hut-chan-khong',
      label: 'Đóng gói hút chân không xúc xích, thịt nguội',
      bin: 'dung',
      why: 'Không có không khí, nhiều loại vi khuẩn và nấm mốc không phát triển được.',
    },
  ];

  const DECK = shuffled(CARDS, 6);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp các cách xử lí thực phẩm vào bảo quản đúng cách hoặc dễ làm thực phẩm hỏng"
/>
