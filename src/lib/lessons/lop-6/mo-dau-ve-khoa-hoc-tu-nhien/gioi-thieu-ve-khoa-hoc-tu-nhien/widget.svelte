<script>
  import CardSorter from '#lib/core/card-sorter.svelte';

  const BINS = [
    { id: 'vat-li', label: 'Vật lí học' },
    { id: 'hoa-hoc', label: 'Hoá học' },
    { id: 'sinh-hoc', label: 'Sinh học' },
    { id: 'trai-dat', label: 'Khoa học Trái Đất' },
    { id: 'thien-van', label: 'Thiên văn học' },
  ];

  const CARDS = [
    {
      id: 'tao-roi',
      label: 'Quả táo rơi từ trên cây xuống đất',
      bin: 'vat-li',
      why: 'Đây là chuyển động của vật do lực hút của Trái Đất, đối tượng của vật lí học.',
    },
    {
      id: 'bong-den',
      label: 'Bóng đèn sáng khi có dòng điện chạy qua',
      bin: 'vat-li',
      why: 'Điện năng chuyển hoá thành quang năng: vật lí học nghiên cứu năng lượng.',
    },
    {
      id: 'dinh-gi',
      label: 'Đinh sắt để lâu ngoài không khí ẩm bị gỉ',
      bin: 'hoa-hoc',
      why: 'Sắt biến đổi thành chất mới là gỉ sắt: hoá học nghiên cứu sự biến đổi của chất.',
    },
    {
      id: 'nen-chay',
      label: 'Cây nến cháy tạo ra khí carbon dioxide và hơi nước',
      bin: 'hoa-hoc',
      why: 'Sáp nến biến đổi thành chất mới khi cháy: đó là hiện tượng hoá học.',
    },
    {
      id: 'hat-nay-mam',
      label: 'Hạt đậu nảy mầm thành cây con',
      bin: 'sinh-hoc',
      why: 'Sinh trưởng và phát triển là biểu hiện của vật sống, đối tượng của sinh học.',
    },
    {
      id: 'trinh-nu',
      label: 'Lá cây trinh nữ cụp lại khi bị chạm vào',
      bin: 'sinh-hoc',
      why: 'Cảm ứng là một đặc điểm của vật sống, đối tượng của sinh học.',
    },
    {
      id: 'nui-lua',
      label: 'Núi lửa phun trào dung nham',
      bin: 'trai-dat',
      why: 'Hiện tượng xảy ra trong lòng và trên bề mặt Trái Đất.',
    },
    {
      id: 'bao',
      label: 'Cơn bão hình thành trên biển rồi đổ bộ vào đất liền',
      bin: 'trai-dat',
      why: 'Mưa, gió, bão diễn ra trong bầu khí quyển của Trái Đất.',
    },
    {
      id: 'nhat-thuc',
      label: 'Nhật thực: Mặt Trăng che khuất Mặt Trời',
      bin: 'thien-van',
      why: 'Thiên văn học nghiên cứu sự vận động của các vật thể trên bầu trời.',
    },
    {
      id: 'trang',
      label: 'Mặt Trăng lúc tròn, lúc khuyết trong tháng',
      bin: 'thien-van',
      why: 'Hình dạng nhìn thấy của Mặt Trăng thay đổi theo vị trí của nó quanh Trái Đất.',
    },
  ];
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  hintOnWrong
  label="Xếp hiện tượng vào lĩnh vực khoa học tự nhiên"
/>
