<script>
  import ReagentLab from '#lib/domain/reagent-lab.svelte';
  import { REAGENTS, benchSugar, observe } from '../_shared/sugars.js';
</script>

<ReagentLab
  substances={['saccharose', 'maltose', 'glucose']}
  substanceOf={benchSugar}
  reagentTable={REAGENTS}
  {observe}
  reagents={['cu-oh2', 'tollens', 'cu-oh2-nong']}
  intro="So sánh saccharose, maltose và glucose: chọn chất và thuốc thử rồi bấm &quot;Làm thí nghiệm&quot;. Chất nào hoà tan được copper(II) hydroxide, chất nào có tính khử?"
/>
