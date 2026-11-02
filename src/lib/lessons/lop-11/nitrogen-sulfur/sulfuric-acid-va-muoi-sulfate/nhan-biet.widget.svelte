<script>
  import { rng, shuffle } from '#lib/core/drill.js';
  import UnknownBottles from '../_shared/unknown-bottles.svelte';
  import { BOTTLES, sulfateLook } from './engine.js';

  /** @param {number} seed */
  const deal = (seed) => shuffle(rng(seed), BOTTLES);

  const DONE =
    'Đúng. Kết tủa trắng không tan trong acid là $\\mathrm{BaSO_4}$: $\\mathrm{Ba^{2+} + SO_4^{2-} \\to BaSO_4}$. Kết tủa $\\mathrm{BaCO_3}$ thì tan trong acid.';
</script>

<UnknownBottles
  {deal}
  reagents={[
    { id: 'bacl2', formula: 'BaCl2', label: 'Nhỏ dung dịch BaCl₂' },
    { id: 'hcl', formula: 'HCl', label: 'Thêm dung dịch HCl', needs: 'bacl2' },
  ]}
  look={sulfateLook}
  question="Nhỏ BaCl₂ vào từng ống, rồi thêm HCl vào ống có kết tủa. Đánh dấu các lọ chứa ion sulfate rồi bấm Kiểm tra."
  done={DONE}
/>
