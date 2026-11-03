<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'chung-cat', label: 'Chưng cất' },
    { id: 'chiet', label: 'Chiết' },
    { id: 'ket-tinh', label: 'Kết tinh' },
    { id: 'sac-ki', label: 'Sắc kí cột' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'ruou',
        label: 'Lấy ethanol từ cơm rượu đã lên men',
        bin: 'chung-cat',
        why: 'Ethanol sôi thấp hơn nước, nên bay hơi trước rồi ngưng tụ.',
      },
      {
        id: 'dau-mo',
        label: 'Tách dầu mỏ thành xăng, dầu hoả, dầu diesel',
        bin: 'chung-cat',
        why: 'Các phân đoạn có khoảng nhiệt độ sôi khác nhau: chưng cất phân đoạn.',
      },
      {
        id: 'tinh-dau',
        label: 'Lấy tinh dầu sả từ lá sả bằng hơi nước',
        bin: 'chung-cat',
        why: 'Tinh dầu sôi cao, không tan trong nước: chưng cất lôi cuốn hơi nước.',
      },
      {
        id: 'carotene',
        label: 'Lấy β-carotene từ nước ép cà rốt bằng hexane',
        bin: 'chiet',
        why: 'β-carotene tan tốt trong hexane, mà hexane không trộn lẫn với nước.',
      },
      {
        id: 'ruou-thuoc',
        label: 'Ngâm dược liệu trong rượu để làm rượu thuốc',
        bin: 'chiet',
        why: 'Hoạt chất tan vào ethanol: chiết lỏng – rắn.',
      },
      {
        id: 'cham',
        label: 'Ngâm lá chàm trong nước lấy dung dịch nhuộm vải',
        bin: 'chiet',
        why: 'Chất màu tan vào nước và tách khỏi bã lá: chiết lỏng – rắn.',
      },
      {
        id: 'duong',
        label: 'Tinh chế đường đỏ thành đường trắng',
        bin: 'ket-tinh',
        why: 'Đường là chất rắn, tan nhiều khi nóng và ít hơn khi nguội.',
      },
      {
        id: 'phen',
        label: 'Làm đường phèn từ nước mía',
        bin: 'ket-tinh',
        why: 'Cô đặc và để nguội, đường tách ra thành tinh thể.',
      },
      {
        id: 'la-cay',
        label: 'Tách riêng các chất màu của lá cây, có lượng nhỏ và rất giống nhau',
        bin: 'sac-ki',
        why: 'Các chất bị hấp phụ khác nhau nên đi xuống cột với tốc độ khác nhau.',
      },
      {
        id: 'duoc-chat',
        label: 'Tách một lượng rất nhỏ hoạt chất khó tách ra khỏi dịch chiết cây thuốc',
        bin: 'sac-ki',
        why: 'Lượng nhỏ, các chất khó tách khỏi nhau là chỗ mạnh của sắc kí cột.',
      },
    ],
    37,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Ghép hỗn hợp với phương pháp tách phù hợp"
  hintOnWrong
/>
