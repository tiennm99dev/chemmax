<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const BINS = [
    { id: 'kim-loai', label: 'Kim loại' },
    { id: 'phi-kim', label: 'Phi kim' },
  ];

  const CARDS = shuffled(
    [
      {
        id: 'dan-dien',
        label: 'Dẫn điện, dẫn nhiệt tốt',
        bin: 'kim-loai',
        why: 'Kim loại dẫn điện, dẫn nhiệt tốt; bạc và đồng dẫn điện tốt nhất.',
      },
      {
        id: 'khong-dan',
        label: 'Thường không dẫn điện, dẫn nhiệt kém',
        bin: 'phi-kim',
        why: 'Phần lớn phi kim không dẫn điện; than chì dẫn điện kém hơn kim loại, silicon tinh khiết là chất bán dẫn.',
      },
      {
        id: 'anh-kim',
        label: 'Có ánh kim, dát mỏng, kéo sợi được',
        bin: 'kim-loai',
        why: 'Ánh kim và tính dẻo là tính chất vật lí chung của kim loại.',
      },
      {
        id: 'the',
        label: 'Ở nhiệt độ thường có thể là chất rắn, lỏng hoặc khí',
        bin: 'phi-kim',
        why: 'Phi kim có thể ở thể khí (O₂, N₂, Cl₂), lỏng (Br₂) hoặc rắn (C, S, P).',
      },
      {
        id: 'ran',
        label: 'Hầu hết ở thể rắn ở nhiệt độ thường (trừ thuỷ ngân)',
        bin: 'kim-loai',
        why: 'Các kim loại ở thể rắn, riêng thuỷ ngân ở thể lỏng.',
      },
      {
        id: 'nong-chay-thap',
        label: 'Nhiệt độ nóng chảy, khối lượng riêng phần lớn thấp',
        bin: 'phi-kim',
        why: 'Phần lớn phi kim có nhiệt độ nóng chảy, nhiệt độ sôi và khối lượng riêng thấp hơn kim loại.',
      },
      {
        id: 'nhuong-e',
        label: 'Dễ nhường electron, tạo ion dương',
        bin: 'kim-loai',
        why: 'Ví dụ Na → Na⁺ + 1e: kim loại nhường electron lớp ngoài cùng.',
      },
      {
        id: 'nhan-e',
        label: 'Dễ nhận electron, tạo ion âm',
        bin: 'phi-kim',
        why: 'Ví dụ Cl + 1e → Cl⁻: phi kim nhận thêm electron cho đủ 8 electron lớp ngoài cùng.',
      },
      {
        id: 'oxide-base',
        label: 'Tác dụng với oxygen thường tạo oxide base',
        bin: 'kim-loai',
        why: 'Ví dụ 2Mg + O₂ → 2MgO; MgO là oxide base.',
      },
      {
        id: 'oxide-acid',
        label: 'Tác dụng với oxygen thường tạo oxide acid',
        bin: 'phi-kim',
        why: 'Ví dụ S + O₂ → SO₂; SO₂ là oxide acid.',
      },
      {
        id: 'acid-h2',
        label: 'Nhiều chất tác dụng với dung dịch HCl giải phóng H₂',
        bin: 'kim-loai',
        why: 'Kim loại đứng trước H trong dãy hoạt động tác dụng với dung dịch acid tạo muối và H₂.',
      },
      {
        id: 'hidro',
        label: 'Tác dụng với hydrogen tạo hợp chất khí (HCl, H₂S)',
        bin: 'phi-kim',
        why: 'Một số phi kim như Cl₂, S tác dụng với hydrogen tạo hợp chất khí.',
      },
    ],
    21,
  );
</script>

<CardSorter
  cards={CARDS}
  bins={BINS}
  label="Xếp mỗi tính chất vào cột kim loại hoặc phi kim"
  hintOnWrong
/>
