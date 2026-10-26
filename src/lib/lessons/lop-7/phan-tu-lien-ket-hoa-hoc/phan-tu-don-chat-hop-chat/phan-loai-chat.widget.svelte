<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'kim-loai', label: 'Đơn chất kim loại' },
    { id: 'phi-kim', label: 'Đơn chất phi kim' },
    { id: 'hop-chat', label: 'Hợp chất' },
  ];

  const CARDS = [
    {
      id: 'copper',
      label: 'Dây đồng – copper (Cu)',
      bin: 'kim-loai',
      why: 'Chỉ có nguyên tố Cu, là kim loại: có ánh kim, dẫn điện tốt.',
    },
    {
      id: 'iron',
      label: 'Đinh sắt – iron (Fe)',
      bin: 'kim-loai',
      why: 'Chỉ có nguyên tố Fe, là kim loại.',
    },
    {
      id: 'aluminium',
      label: 'Giấy bạc gói thực phẩm – aluminium (Al)',
      bin: 'kim-loai',
      why: 'Chỉ có nguyên tố Al, là kim loại dẫn nhiệt tốt.',
    },
    {
      id: 'oxygen',
      label: 'Khí oxygen (O₂)',
      bin: 'phi-kim',
      why: 'Chỉ có nguyên tố O, là phi kim; ở điều kiện thường là chất khí.',
    },
    {
      id: 'sulfur',
      label: 'Bột lưu huỳnh – sulfur (S)',
      bin: 'phi-kim',
      why: 'Chỉ có nguyên tố S, là phi kim; chất rắn màu vàng, không dẫn điện.',
    },
    {
      id: 'ozone',
      label: 'Khí ozone (O₃)',
      bin: 'phi-kim',
      why: 'Phân tử có 3 nguyên tử nhưng chỉ của một nguyên tố O: vẫn là đơn chất.',
    },
    {
      id: 'water',
      label: 'Nước (H₂O)',
      bin: 'hop-chat',
      why: 'Tạo nên từ hai nguyên tố H và O.',
    },
    {
      id: 'salt',
      label: 'Muối ăn – sodium chloride (NaCl)',
      bin: 'hop-chat',
      why: 'Tạo nên từ hai nguyên tố Na và Cl.',
    },
    {
      id: 'co2',
      label: 'Khí carbon dioxide (CO₂)',
      bin: 'hop-chat',
      why: 'Tạo nên từ hai nguyên tố C và O.',
    },
    {
      id: 'sugar',
      label: 'Đường mía – saccharose (C₁₂H₂₂O₁₁)',
      bin: 'hop-chat',
      why: 'Tạo nên từ ba nguyên tố C, H và O.',
    },
  ];

  const DECK = shuffled(CARDS, 7);
</script>

<CardSorter
  cards={DECK}
  bins={BINS}
  hintOnWrong
  label="Xếp mỗi chất vào nhóm đơn chất kim loại, đơn chất phi kim hoặc hợp chất"
/>
