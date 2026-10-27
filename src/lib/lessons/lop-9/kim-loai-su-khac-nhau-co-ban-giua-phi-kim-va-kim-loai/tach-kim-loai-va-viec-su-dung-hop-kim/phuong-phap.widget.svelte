<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { METHODS, methodFor } from './engine.js';

  const BINS = METHODS.map((m) => ({ id: m.id, label: m.name }));

  /** @type {Record<string, string>} */
  const WHY = {
    Na: 'Sodium hoạt động rất mạnh, không chất khử thông thường nào lấy được nó ra khỏi hợp chất: phải điện phân NaCl nóng chảy.',
    Mg: 'Magnesium đứng trước Al trong dãy, rất mạnh: điện phân MgCl₂ nóng chảy.',
    Al: 'Nhôm hoạt động mạnh: điện phân Al₂O₃ nóng chảy (có cryolite) mới tách được nhôm.',
    Zn: 'Kẽm hoạt động trung bình: nung ZnS thành ZnO rồi dùng carbon khử ZnO ở nhiệt độ cao.',
    Fe: 'Sắt hoạt động trung bình: dùng CO khử oxide sắt ở nhiệt độ cao trong lò cao.',
    Pb: 'Chì hoạt động trung bình: dùng carbon khử PbO ở nhiệt độ cao.',
    Ag: 'Bạc hoạt động yếu: chuyển thành muối tan rồi dùng kim loại mạnh hơn đẩy bạc ra (thuỷ luyện).',
    Au: 'Vàng rất kém hoạt động, tồn tại dạng đơn chất: đãi, tách vật lí hoặc thuỷ luyện.',
  };

  /** @type {Record<string, string>} */
  const NAMES = {
    Na: 'Sodium (Na)',
    Mg: 'Magnesium (Mg)',
    Al: 'Nhôm (Al)',
    Zn: 'Kẽm (Zn)',
    Fe: 'Sắt (Fe)',
    Pb: 'Chì (Pb)',
    Ag: 'Bạc (Ag)',
    Au: 'Vàng (Au)',
  };

  const CARDS = shuffled(
    Object.keys(NAMES).map((id) => ({ id, label: NAMES[id], bin: methodFor(id), why: WHY[id] })),
    20,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Xếp mỗi kim loại vào phương pháp thường dùng để tách nó"
  hintOnWrong
/>
