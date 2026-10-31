<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const CHANGE_BINS = [
    { id: 'vat-li', label: 'Biến đổi vật lí' },
    { id: 'hoa-hoc', label: 'Biến đổi hoá học' },
  ];

  const CHANGE_CARDS = [
    {
      id: 'nuoc-da',
      label: 'Nước đá tan thành nước lỏng',
      bin: 'vat-li',
      why: 'Chỉ đổi trạng thái từ rắn sang lỏng; chất vẫn là nước.',
    },
    {
      id: 'muoi-tan',
      label: 'Hoà tan muối ăn vào nước',
      bin: 'vat-li',
      why: 'Muối chỉ phân tán vào nước; cô cạn dung dịch lại thu được muối ăn.',
    },
    {
      id: 'day-dong',
      label: 'Kéo sợi đồng thành dây điện',
      bin: 'vat-li',
      why: 'Chỉ đổi hình dạng; dây vẫn là kim loại đồng.',
    },
    {
      id: 'xang-bay-hoi',
      label: 'Xăng để trong chậu hở bay hơi hết',
      bin: 'vat-li',
      why: 'Xăng chuyển từ lỏng sang hơi, không tạo ra chất mới.',
    },
    {
      id: 'cat-nuoc-bien',
      label: 'Phơi nước biển thu được muối',
      bin: 'vat-li',
      why: 'Nước bay hơi, muối có sẵn trong nước biển được tách ra; không có chất mới.',
    },
    {
      id: 'gas-chay',
      label: 'Đốt khí gas để nấu ăn',
      bin: 'hoa-hoc',
      why: 'Khí gas cháy tạo ra chất mới là carbon dioxide và hơi nước.',
    },
    {
      id: 'sat-gi',
      label: 'Cửa sắt để lâu ngoài trời bị gỉ',
      bin: 'hoa-hoc',
      why: 'Sắt tác dụng với oxygen và hơi nước tạo thành gỉ sắt, một chất mới.',
    },
    {
      id: 'com-chua',
      label: 'Cơm để lâu bị ôi thiu, có vị chua',
      bin: 'hoa-hoc',
      why: 'Vi khuẩn biến tinh bột thành các chất mới có vị chua, mùi khó chịu.',
    },
    {
      id: 'voi-toi',
      label: 'Cho vôi sống vào nước tạo thành vôi tôi, toả nhiều nhiệt',
      bin: 'hoa-hoc',
      why: 'Calcium oxide tác dụng với nước tạo thành chất mới là calcium hydroxide.',
    },
    {
      id: 'duong-chay',
      label: 'Đun đường quá lửa, đường chuyển thành màu đen',
      bin: 'hoa-hoc',
      why: 'Đường bị phân huỷ thành than (carbon) và hơi nước: có chất mới tạo thành.',
    },
  ];

  const FIELD_BINS = [
    { id: 'y-hoc', label: 'Y học, dược phẩm' },
    { id: 'nong-nghiep', label: 'Nông nghiệp, thực phẩm' },
    { id: 'nang-luong', label: 'Năng lượng, nhiên liệu' },
    { id: 'vat-lieu', label: 'Vật liệu, công nghiệp' },
    { id: 'moi-truong', label: 'Môi trường' },
  ];

  const FIELD_CARDS = [
    {
      id: 'thuoc',
      label: 'Tổng hợp thuốc kháng sinh, vaccine',
      bin: 'y-hoc',
      why: 'Hoá dược nghiên cứu, điều chế các chất dùng để phòng và chữa bệnh.',
    },
    {
      id: 'sat-khuan',
      label: 'Sản xuất cồn và nước sát khuẩn tay',
      bin: 'y-hoc',
      why: 'Các chất sát khuẩn giúp diệt vi khuẩn, virus, bảo vệ sức khoẻ.',
    },
    {
      id: 'phan-bon',
      label: 'Sản xuất phân đạm, phân lân cho cây trồng',
      bin: 'nong-nghiep',
      why: 'Phân bón hoá học cung cấp nguyên tố dinh dưỡng, tăng năng suất cây trồng.',
    },
    {
      id: 'bao-quan',
      label: 'Chất bảo quản giúp thực phẩm lâu hỏng',
      bin: 'nong-nghiep',
      why: 'Phụ gia thực phẩm làm chậm các quá trình hoá học, sinh học gây hỏng thực phẩm.',
    },
    {
      id: 'xang-dau',
      label: 'Chế biến dầu mỏ thành xăng, dầu diesel',
      bin: 'nang-luong',
      why: 'Lọc, chế biến dầu mỏ tạo ra nhiên liệu cho động cơ.',
    },
    {
      id: 'pin',
      label: 'Chế tạo pin lithium cho điện thoại, xe điện',
      bin: 'nang-luong',
      why: 'Pin biến năng lượng của phản ứng hoá học thành điện năng.',
    },
    {
      id: 'chat-deo',
      label: 'Sản xuất chất dẻo, cao su, tơ sợi tổng hợp',
      bin: 'vat-lieu',
      why: 'Công nghiệp hoá học tạo ra các vật liệu polymer dùng hằng ngày.',
    },
    {
      id: 'xi-mang',
      label: 'Sản xuất xi măng, thuỷ tinh, gốm sứ',
      bin: 'vat-lieu',
      why: 'Đây là các vật liệu xây dựng làm ra nhờ biến đổi hoá học của nguyên liệu khoáng.',
    },
    {
      id: 'nuoc-thai',
      label: 'Xử lí nước thải trước khi đổ ra sông',
      bin: 'moi-truong',
      why: 'Dùng các phản ứng hoá học để loại bỏ chất độc hại khỏi nước thải.',
    },
    {
      id: 'khi-thai',
      label: 'Bộ chuyển đổi xúc tác làm sạch khí thải ô tô',
      bin: 'moi-truong',
      why: 'Chất xúc tác chuyển các khí độc (CO, NO) thành khí ít độc hơn.',
    },
  ];

  const DECKS = {
    'bien-doi': {
      cards: shuffled(CHANGE_CARDS, 10),
      bins: CHANGE_BINS,
      label: 'Xếp quá trình vào biến đổi vật lí hay biến đổi hoá học',
      lead: 'Có chất mới tạo thành không? Có: biến đổi hoá học. Không (chỉ đổi trạng thái, hình dạng): biến đổi vật lí.',
    },
    'linh-vuc': {
      cards: shuffled(FIELD_CARDS, 11),
      bins: FIELD_BINS,
      label: 'Xếp ứng dụng vào lĩnh vực của đời sống và sản xuất',
      lead: 'Mỗi thẻ là một ứng dụng của hoá học. Hoá học giúp lĩnh vực nào?',
    },
  };

  /** @type {string | number} */
  let mode = $state('bien-doi');
  const deck = $derived(mode === 'linh-vuc' ? DECKS['linh-vuc'] : DECKS['bien-doi']);
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Bộ thẻ"
    options={[
      { value: 'bien-doi', label: 'Vật lí hay hoá học?' },
      { value: 'linh-vuc', label: 'Lĩnh vực ứng dụng' },
    ]}
    bind:value={mode}
  />
  <p class="text-sm text-slate-700">{deck.lead}</p>
  {#key mode}
    <CardSorter cards={deck.cards} bins={deck.bins} label={deck.label} hintOnWrong />
  {/key}
</div>
