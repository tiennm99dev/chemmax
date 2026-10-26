<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'toa', label: 'Phản ứng toả nhiệt' },
    { id: 'thu', label: 'Phản ứng thu nhiệt' },
  ];

  const CARDS = [
    {
      id: 'gas',
      label: 'Đốt khí gas để nấu ăn',
      bin: 'toa',
      why: 'Gas cháy giải phóng năng lượng dưới dạng nhiệt và ánh sáng.',
    },
    {
      id: 'da-voi',
      label: 'Nung đá vôi thành vôi sống trong lò vôi',
      bin: 'thu',
      why: 'Phải đun nóng liên tục; ngừng cấp nhiệt thì phản ứng dừng lại.',
    },
    {
      id: 'voi-song',
      label: 'Cho vôi sống vào nước để tôi vôi',
      bin: 'toa',
      why: 'Hỗn hợp nóng lên rất mạnh, có khi sôi lên: phản ứng giải phóng nhiệt.',
    },
    {
      id: 'kmno4',
      label: 'Đun nóng thuốc tím để điều chế oxygen',
      bin: 'thu',
      why: 'Thuốc tím chỉ phân huỷ khi được đun nóng; phản ứng nhận nhiệt từ ngọn lửa.',
    },
    {
      id: 'xang',
      label: 'Xăng cháy trong động cơ xe máy',
      bin: 'toa',
      why: 'Nhiệt toả ra khi xăng cháy được dùng để làm động cơ hoạt động.',
    },
    {
      id: 'banh-mi',
      label: 'Nướng bánh mì: bột nhào chín và nở dưới nhiệt của lò',
      bin: 'thu',
      why: 'Các biến đổi hoá học trong bột chỉ xảy ra khi nhận nhiệt từ lò nướng.',
    },
    {
      id: 'con',
      label: 'Cồn cháy trong đèn cồn',
      bin: 'toa',
      why: 'Đèn cồn dùng nhiệt do cồn cháy toả ra để đun nóng.',
    },
    {
      id: 'cu-oh',
      label: 'Đun nóng copper(II) hydroxide thành copper(II) oxide màu đen',
      bin: 'thu',
      why: 'Phản ứng phân huỷ này cần được đun nóng mới xảy ra.',
    },
  ];

  const DECK = shuffled(CARDS, 5);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp mỗi phản ứng vào phản ứng toả nhiệt hoặc phản ứng thu nhiệt"
/>
