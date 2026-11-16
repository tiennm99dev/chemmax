<script>
  import SampleBench from '#lib/domain/sample-bench.svelte';
  import { BENCH_REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';
</script>

<SampleBench
  labels={['A', 'B', 'C', 'D']}
  sampleWord="Mẫu"
  samples={SAMPLES}
  reagents={BENCH_REAGENTS}
  deal={dealSamples}
  {observe}
  seed={11}
  firstReagent="quy"
  intro="Bốn mẫu A, B, C, D là dung dịch methylamine, aniline, dung dịch glycine và dung dịch Gly-Ala-Gly, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;."
  solvedText={(tested) =>
    `Đúng cả bốn mẫu sau ${tested} thí nghiệm. Thứ tự gọn nhất: quỳ tím tìm methylamine (hoá xanh); nước bromine tìm aniline (kết tủa trắng); Cu(OH)₂/NaOH tách Gly-Ala-Gly (màu tím) khỏi glycine.`}
  wrongText={(right) =>
    `Đúng ${right}/4 mẫu. Các mẫu sai được đánh dấu; xem lại hiện tượng trong bảng. Nhớ rằng chỉ peptide có từ hai liên kết peptide trở lên mới cho màu tím.`}
/>
