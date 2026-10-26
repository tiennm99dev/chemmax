<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'nong-do', label: 'Nồng độ' },
    { id: 'nhiet-do', label: 'Nhiệt độ' },
    { id: 'be-mat', label: 'Diện tích bề mặt tiếp xúc' },
    { id: 'xuc-tac', label: 'Chất xúc tác' },
  ];

  const CARDS = [
    {
      id: 'quat-bep',
      label: 'Quạt gió vào bếp than để than cháy mạnh hơn',
      bin: 'nong-do',
      why: 'Quạt gió đưa thêm không khí, làm tăng nồng độ oxygen quanh than.',
    },
    {
      id: 'que-dom',
      label: 'Que đóm còn tàn đỏ bùng cháy khi đưa vào bình khí oxygen',
      bin: 'nong-do',
      why: 'Trong bình, nồng độ oxygen lớn hơn nhiều so với trong không khí (khoảng 21%).',
    },
    {
      id: 'acid-dac',
      label: 'Dùng dung dịch HCl 1 M thay cho HCl 0,1 M để đinh sắt tan nhanh hơn',
      bin: 'nong-do',
      why: 'Dung dịch HCl 1 M có nồng độ acid lớn hơn.',
    },
    {
      id: 'tu-lanh',
      label: 'Để thực phẩm trong tủ lạnh cho lâu hỏng',
      bin: 'nhiet-do',
      why: 'Nhiệt độ thấp làm chậm các phản ứng gây ôi thiu.',
    },
    {
      id: 'noi-ap-suat',
      label: 'Nấu thức ăn bằng nồi áp suất cho nhanh chín',
      bin: 'nhiet-do',
      why: 'Trong nồi áp suất, nước sôi ở nhiệt độ cao hơn 100 °C.',
    },
    {
      id: 'vien-sui-nong',
      label: 'Viên C sủi tan nhanh hơn trong cốc nước nóng',
      bin: 'nhiet-do',
      why: 'Nước nóng làm tăng nhiệt độ của các chất phản ứng.',
    },
    {
      id: 'che-cui',
      label: 'Chẻ nhỏ củi để nhóm bếp',
      bin: 'be-mat',
      why: 'Củi nhỏ có diện tích bề mặt tiếp xúc với oxygen lớn hơn.',
    },
    {
      id: 'dap-da-voi',
      label: 'Đập nhỏ đá vôi trước khi cho vào lò nung vôi',
      bin: 'be-mat',
      why: 'Đá vôi nhỏ có diện tích bề mặt tiếp xúc lớn hơn nên phân huỷ nhanh hơn.',
    },
    {
      id: 'nhai-ki',
      label: 'Nhai kĩ thức ăn để tiêu hoá nhanh hơn',
      bin: 'be-mat',
      why: 'Thức ăn được nghiền nhỏ, diện tích tiếp xúc với dịch tiêu hoá tăng.',
    },
    {
      id: 'mno2',
      label: 'Thêm một ít bột MnO₂ vào nước oxi già, khí thoát ra mạnh',
      bin: 'xuc-tac',
      why: 'MnO₂ làm H₂O₂ phân huỷ nhanh hơn và vẫn còn nguyên sau phản ứng.',
    },
    {
      id: 'v2o5',
      label: 'Dùng vanadium(V) oxide khi sản xuất sulfur trioxide từ SO₂ và O₂',
      bin: 'xuc-tac',
      why: 'V₂O₅ là chất xúc tác, làm phản ứng 2SO₂ + O₂ → 2SO₃ xảy ra nhanh hơn.',
    },
    {
      id: 'men',
      label: 'Cho men vào cơm nếp để ủ rượu nếp',
      bin: 'xuc-tac',
      why: 'Enzyme trong men là chất xúc tác sinh học cho quá trình lên men.',
    },
  ];

  const DECK = shuffled(CARDS, 7);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp mỗi ví dụ trong đời sống vào yếu tố làm thay đổi tốc độ phản ứng"
/>
