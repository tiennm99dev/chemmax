<script>
  import SortCards from '../_shared/sort-cards.svelte';

  const BINS = [
    { id: 'song', label: 'Vật sống' },
    { id: 'khong-song', label: 'Vật không sống' },
  ];

  const CARDS = [
    {
      id: 'meo',
      text: 'Con mèo',
      bin: 'song',
      why: 'Mèo ăn, lớn lên, sinh con và phản ứng khi bị chạm vào.',
    },
    {
      id: 'lua',
      text: 'Cây lúa',
      bin: 'song',
      why: 'Cây lúa lấy nước, chất khoáng, lớn lên, ra hoa và tạo hạt.',
    },
    {
      id: 'giun',
      text: 'Con giun đất',
      bin: 'song',
      why: 'Giun đất ăn, lớn lên, sinh sản và co mình khi bị chạm.',
    },
    {
      id: 'nam',
      text: 'Nấm rơm',
      bin: 'song',
      why: 'Nấm hút chất dinh dưỡng, lớn lên và sinh sản bằng bào tử.',
    },
    {
      id: 'da',
      text: 'Hòn đá',
      bin: 'khong-song',
      why: 'Hòn đá không trao đổi chất, không lớn lên và không sinh sản.',
    },
    {
      id: 'xe',
      text: 'Chiếc ô tô đang chạy',
      bin: 'khong-song',
      why: 'Ô tô chuyển động được nhưng không tự lớn lên, không sinh sản.',
    },
    {
      id: 'nen',
      text: 'Ngọn nến đang cháy',
      bin: 'khong-song',
      why: 'Ngọn lửa "lớn lên" được nhưng không có trao đổi chất, cảm ứng hay sinh sản.',
    },
    {
      id: 'ban',
      text: 'Cái bàn bằng gỗ',
      bin: 'khong-song',
      why: 'Gỗ lấy từ cây, nhưng cái bàn không còn biểu hiện sống nào.',
    },
  ];
</script>

<SortCards cards={CARDS} bins={BINS} label="Xếp các vật vào nhóm vật sống và vật không sống" />
