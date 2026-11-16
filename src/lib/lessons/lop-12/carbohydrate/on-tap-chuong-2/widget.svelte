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
  seed={7}
  firstReagent="iodine"
  intro="Bốn mẫu A, B, C, D là dung dịch glucose, dung dịch fructose, dung dịch saccharose và hồ tinh bột, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;."
  solvedText={(tested) =>
    `Đúng cả bốn mẫu sau ${tested} thí nghiệm. Thứ tự gọn nhất: iodine tìm hồ tinh bột (xanh tím); thuốc thử Tollens tách saccharose (không tạo bạc); nước bromine tách glucose (mất màu) với fructose (không mất màu).`}
  wrongText={(right) =>
    `Đúng ${right}/4 mẫu. Các mẫu sai được đánh dấu; xem lại hiện tượng trong bảng. Nhớ rằng fructose cũng tráng bạc.`}
/>
