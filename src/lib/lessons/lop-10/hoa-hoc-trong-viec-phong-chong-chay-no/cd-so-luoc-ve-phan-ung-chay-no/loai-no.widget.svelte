<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'physical', label: 'Nổ vật lí' },
    { id: 'chemical', label: 'Nổ hoá học' },
  ];
  const CARDS = shuffled(
    [
      {
        id: 'balloon',
        label: 'Quả bóng bay bị bơm quá căng rồi vỡ',
        bin: 'physical',
        why: 'Áp suất vượt độ bền của vỏ bóng; không có chất mới tạo thành.',
      },
      {
        id: 'boiler',
        label: 'Nồi hơi quá áp làm vỡ thân nồi',
        bin: 'physical',
        why: 'Hơi nước bị nén quá mức làm vỡ vỏ; nước vẫn là nước.',
      },
      {
        id: 'tyre',
        label: 'Lốp xe bơm quá căng bị nổ khi chạy dưới trời nắng',
        bin: 'physical',
        why: 'Không khí nóng lên làm áp suất tăng; không có phản ứng hoá học.',
      },
      {
        id: 'hydrogen',
        label: 'Chùm bóng bay chứa khí hydrogen gặp lửa',
        bin: 'chemical',
        why: 'Hydrogen phản ứng rất nhanh với oxygen và toả nhiệt mạnh.',
      },
      {
        id: 'gas',
        label: 'Khí gas rò rỉ trong phòng kín gặp tia lửa điện',
        bin: 'chemical',
        why: 'Hỗn hợp gas và không khí cháy lan rất nhanh, khí nóng dãn nở đột ngột.',
      },
      {
        id: 'dust',
        label: 'Bụi than lơ lửng trong hầm lò bắt lửa',
        bin: 'chemical',
        why: 'Đây là nổ bụi: các hạt bụi có diện tích tiếp xúc lớn nên cháy gần như tức thời.',
      },
    ],
    51,
  );
</script>

<CardSorter cards={CARDS} bins={BINS} label="Xếp hiện tượng vào nổ vật lí hoặc nổ hoá học" />
