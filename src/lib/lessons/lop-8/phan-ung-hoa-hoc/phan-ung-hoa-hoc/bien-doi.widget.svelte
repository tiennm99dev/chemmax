<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'vat-li', label: 'Biến đổi vật lí' },
    { id: 'hoa-hoc', label: 'Biến đổi hoá học' },
  ];

  const CARDS = [
    {
      id: 'da-tan',
      label: 'Nước đá để ngoài không khí tan thành nước lỏng',
      bin: 'vat-li',
      why: 'Nước chỉ chuyển từ thể rắn sang thể lỏng, vẫn là nước: không có chất mới.',
    },
    {
      id: 'dinh-gi',
      label: 'Đinh sắt để lâu ngoài không khí ẩm bị gỉ',
      bin: 'hoa-hoc',
      why: 'Gỉ sắt màu nâu đỏ là chất mới, khác hẳn sắt ban đầu.',
    },
    {
      id: 'muoi-tan',
      label: 'Hoà tan muối ăn vào nước, cô cạn lại thu được muối ăn',
      bin: 'vat-li',
      why: 'Muối ăn chỉ phân tán vào nước rồi được thu lại: vẫn là muối ăn.',
    },
    {
      id: 'dot-con',
      label: 'Đốt cồn trong đèn cồn',
      bin: 'hoa-hoc',
      why: 'Cồn cháy tạo ra khí carbon dioxide và hơi nước, là những chất mới.',
    },
    {
      id: 'con-bay-hoi',
      label: 'Mở nắp lọ cồn, cồn bay hơi',
      bin: 'vat-li',
      why: 'Cồn chỉ chuyển từ thể lỏng sang thể hơi, vẫn là cồn.',
    },
    {
      id: 'duong-chay',
      label: 'Đun đường đến khi chuyển thành chất màu đen có mùi khét',
      bin: 'hoa-hoc',
      why: 'Chất màu đen (than) và hơi nước là chất mới tạo thành từ đường.',
    },
    {
      id: 'day-dong',
      label: 'Kéo sợi đồng thành dây đồng mảnh',
      bin: 'vat-li',
      why: 'Chỉ hình dạng thay đổi, dây vẫn là đồng.',
    },
    {
      id: 'com-thiu',
      label: 'Cơm để lâu bị ôi thiu',
      bin: 'hoa-hoc',
      why: 'Thức ăn ôi thiu có mùi chua, mùi lạ: đã có chất mới sinh ra.',
    },
    {
      id: 'than-chay',
      label: 'Đốt than trong bếp than',
      bin: 'hoa-hoc',
      why: 'Than (carbon) cháy trong oxygen tạo ra khí carbon dioxide.',
    },
    {
      id: 'go-cua',
      label: 'Cưa gỗ thành mùn cưa',
      bin: 'vat-li',
      why: 'Gỗ bị chia nhỏ nhưng mùn cưa vẫn là gỗ.',
    },
  ];

  const DECK = shuffled(CARDS, 8);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp mỗi hiện tượng vào biến đổi vật lí hoặc biến đổi hoá học"
/>
