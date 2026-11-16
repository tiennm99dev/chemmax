<script>
  import SampleBench from '#lib/domain/sample-bench.svelte';
  import { REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';
</script>

<SampleBench
  labels={['X1', 'X2', 'X3', 'X4', 'X5']}
  samples={SAMPLES}
  reagents={REAGENTS}
  deal={dealSamples}
  {observe}
  seed={4}
  firstReagent="bromine"
  showState
  intro="Năm mẫu X1 đến X5 là methane, ethylene, acetylene, benzene và toluene, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;."
  solvedText={() =>
    'Đúng cả năm mẫu. Thứ tự gọn nhất: $\\mathrm{AgNO_3/NH_3}$ tìm acetylene, nước bromine tìm ethylene, $\\mathrm{KMnO_4}$ đun nóng tìm toluene; còn lại khí là methane, lỏng là benzene.'}
  wrongText={(right) =>
    `Đúng ${right}/5 mẫu. Các mẫu sai được đánh dấu; xem lại hiện tượng trong bảng và trạng thái của từng mẫu.`}
/>
