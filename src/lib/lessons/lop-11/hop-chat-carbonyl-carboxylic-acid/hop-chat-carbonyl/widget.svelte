<script>
  import SampleBench from '#lib/domain/sample-bench.svelte';
  import { REAGENTS, SAMPLES, dealSamples, observe } from './engine.js';

  /** @param {number} tested */
  function solvedText(tested) {
    if (tested === 0) {
      return 'Đúng cả bốn mẫu, nhưng chưa làm thí nghiệm nào. Hãy kiểm chứng: thuốc thử Tollens tách aldehyde khỏi ketone, phản ứng iodoform tìm ra chất có nhóm $\\mathrm{CH_3CO{-}}$.';
    }
    if (tested <= 8) {
      return `Đúng cả bốn mẫu sau ${tested} thí nghiệm. Thuốc thử Tollens tách aldehyde khỏi ketone, phản ứng iodoform tìm ra chất có nhóm $\\mathrm{CH_3CO{-}}$. Làm lại thí nghiệm để xem phương trình.`;
    }
    return `Đúng cả bốn mẫu, nhưng dùng tới ${tested} thí nghiệm. Chỉ cần Tollens và $\\mathrm{I_2/NaOH}$: hai phép thử đủ phân biệt bốn chất. Làm lại thí nghiệm để xem phương trình.`;
  }
</script>

<SampleBench
  labels={['A', 'B', 'C', 'D']}
  sampleWord="Mẫu"
  samples={SAMPLES}
  reagents={REAGENTS}
  deal={dealSamples}
  {observe}
  seed={3}
  firstReagent="tollens"
  intro="Bốn mẫu A đến D là acetaldehyde, propanal, acetone và pentan-3-one, chưa biết mẫu nào là chất nào. Chọn mẫu và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;."
  {solvedText}
  wrongText={(right) =>
    `Đúng ${right}/4 mẫu. Các mẫu sai được đánh dấu. Aldehyde cho kết quả dương tính với Tollens; chất có nhóm $\\mathrm{CH_3CO{-}}$ cho kết tủa vàng với $\\mathrm{I_2/NaOH}$.`}
/>
