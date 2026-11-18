<script>
  import ReagentLab from '#lib/domain/reagent-lab.svelte';
  import { REAGENTS, observe, substance } from '../_shared/lab.js';
</script>

<ReagentLab
  substances={['methylamine', 'aniline']}
  substanceOf={substance}
  reagentTable={REAGENTS}
  {observe}
  reagents={['quy', 'hcl', 'cuso4', 'bromine']}
  intro="So sánh methylamine và aniline: chọn chất và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;. Chất nào làm quỳ tím hoá xanh, chất nào tạo kết tủa trắng với nước bromine?"
/>
