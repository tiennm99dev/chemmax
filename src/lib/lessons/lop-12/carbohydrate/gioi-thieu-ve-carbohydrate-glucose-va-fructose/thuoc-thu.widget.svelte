<script>
  import ReagentLab from '#lib/domain/reagent-lab.svelte';
  import { REAGENTS, benchSugar, observe } from '../_shared/sugars.js';
</script>

<ReagentLab
  substances={['glucose', 'fructose']}
  substanceOf={benchSugar}
  reagentTable={REAGENTS}
  {observe}
  reagents={['cu-oh2', 'tollens', 'cu-oh2-nong', 'bromine']}
  intro="Chọn glucose hoặc fructose và một thuốc thử, rồi bấm &quot;Làm thí nghiệm&quot;. Thuốc thử nào phân biệt được hai chất?"
/>
