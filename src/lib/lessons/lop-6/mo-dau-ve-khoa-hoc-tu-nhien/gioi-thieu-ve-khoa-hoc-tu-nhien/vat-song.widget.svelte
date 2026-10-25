<script>
  import CardSorter from '#lib/core/card-sorter.svelte';

  const BINS = [
    { id: 'song', label: 'Vật sống' },
    { id: 'khong-song', label: 'Vật không sống' },
  ];

  const CARDS = [
    {
      id: 'meo',
      label: 'Con mèo',
      bin: 'song',
      why: 'Mèo ăn, lớn lên, sinh con và phản ứng khi bị chạm vào.',
    },
    {
      id: 'lua',
      label: 'Cây lúa',
      bin: 'song',
      why: 'Cây lúa lấy nước, chất khoáng, lớn lên, ra hoa và tạo hạt.',
    },
    {
      id: 'giun',
      label: 'Con giun đất',
      bin: 'song',
      why: 'Giun đất ăn, lớn lên, sinh sản và co mình khi bị chạm.',
    },
    {
      id: 'nam',
      label: 'Nấm rơm',
      bin: 'song',
      why: 'Nấm hút chất dinh dưỡng, lớn lên và sinh sản bằng bào tử.',
    },
    {
      id: 'da',
      label: 'Hòn đá',
      bin: 'khong-song',
      why: 'Hòn đá không trao đổi chất, không lớn lên và không sinh sản.',
    },
    {
      id: 'xe',
      label: 'Chiếc ô tô đang chạy',
      bin: 'khong-song',
      why: 'Ô tô chuyển động được nhưng không tự lớn lên, không sinh sản.',
    },
    {
      id: 'nen',
      label: 'Ngọn nến đang cháy',
      bin: 'khong-song',
      why: 'Ngọn lửa "lớn lên" được nhưng không có trao đổi chất, cảm ứng hay sinh sản.',
    },
    {
      id: 'ban',
      label: 'Cái bàn bằng gỗ',
      bin: 'khong-song',
      why: 'Gỗ lấy từ cây, nhưng cái bàn không còn biểu hiện sống nào.',
    },
  ];
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  hintOnWrong
  label="Xếp các vật vào nhóm vật sống và vật không sống"
/>
