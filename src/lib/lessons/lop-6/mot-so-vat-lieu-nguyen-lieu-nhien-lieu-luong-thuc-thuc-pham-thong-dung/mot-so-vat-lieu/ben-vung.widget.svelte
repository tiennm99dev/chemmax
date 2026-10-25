<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'nen', label: 'Nên làm' },
    { id: 'khong-nen', label: 'Không nên làm' },
  ];

  const CARDS = [
    {
      id: 'binh-thuy-tinh',
      label: 'Dùng bình thuỷ tinh đựng nước uống thay cho chai nhựa dùng một lần',
      bin: 'nen',
      why: 'Thuỷ tinh dùng được lâu, không thôi chất độc vào nước và giảm rác thải nhựa.',
    },
    {
      id: 'hop-nhua-nong',
      label: 'Cho hộp nhựa đựng thức ăn vào lò vi sóng hoặc đổ canh nóng vào',
      bin: 'khong-nen',
      why: 'Nhiều loại nhựa không chịu nhiệt, khi nóng có thể biến dạng và thôi chất độc hại vào thức ăn.',
    },
    {
      id: 'phan-loai',
      label: 'Phân loại rác: giấy, nhựa, kim loại để riêng trước khi bỏ đi',
      bin: 'nen',
      why: 'Rác được phân loại thì dễ thu gom để tái chế, giảm lượng rác chôn lấp.',
    },
    {
      id: 'tai-su-dung',
      label: 'Dùng chai nhựa cũ làm chậu trồng cây',
      bin: 'nen',
      why: 'Tái sử dụng đồ cũ cho mục đích khác giúp tiết kiệm vật liệu và giảm rác.',
    },
    {
      id: 'cao-su-nang',
      label: 'Phơi đồ cao su ngoài nắng gắt nhiều ngày',
      bin: 'khong-nen',
      why: 'Cao su để nơi quá nóng (hoặc quá lạnh) sẽ nhanh bị lão hoá, nứt và hỏng.',
    },
    {
      id: 'sat-am',
      label: 'Để dao, kéo bằng sắt ướt ở nơi ẩm',
      bin: 'khong-nen',
      why: 'Sắt dễ bị gỉ trong không khí ẩm; nên lau khô và cất nơi khô ráo.',
    },
    {
      id: 'tui-vai',
      label: 'Mang túi vải khi đi chợ',
      bin: 'nen',
      why: 'Túi vải dùng được nhiều lần, giảm số túi nylon (nhựa) khó phân huỷ.',
    },
    {
      id: 'dot-nhua',
      label: 'Đốt rác nhựa ở sân nhà',
      bin: 'khong-nen',
      why: 'Đốt nhựa tạo ra khói và khí độc gây ô nhiễm không khí, hại sức khoẻ.',
    },
    {
      id: 'gach-khong-nung',
      label: 'Xây nhà bằng gạch không nung',
      bin: 'nen',
      why: 'Gạch không nung là vật liệu xanh: làm ra không cần nung đốt, tiết kiệm năng lượng và đất sét.',
    },
  ];

  const DECK = shuffled(CARDS, 12);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp các việc làm vào nên làm hoặc không nên làm khi sử dụng vật liệu"
/>
