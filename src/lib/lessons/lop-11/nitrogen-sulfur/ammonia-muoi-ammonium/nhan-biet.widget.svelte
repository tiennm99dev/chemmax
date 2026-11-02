<script>
  import { rng, shuffle } from '#lib/core/drill.js';
  import UnknownBottles from '../_shared/unknown-bottles.svelte';
  import { SALTS, ammoniumLook } from './engine.js';

  /** @param {number} seed */
  const deal = (seed) => shuffle(rng(seed), SALTS);

  const DONE =
    'Đúng. Khí làm quỳ tím ẩm hoá xanh là ammonia, nên các lọ đó chứa ion ammonium: $\\mathrm{NH_4^+ + OH^- \\to NH_3 + H_2O}$.';
</script>

<UnknownBottles
  {deal}
  reagents={[{ id: 'naoh', formula: 'NaOH', label: 'Thêm dung dịch NaOH rồi đun nhẹ' }]}
  look={ammoniumLook}
  question="Thêm NaOH và đun nhẹ từng ống, đặt quỳ tím ẩm ở miệng ống. Đánh dấu các lọ chứa ion ammonium rồi bấm Kiểm tra."
  done={DONE}
/>
