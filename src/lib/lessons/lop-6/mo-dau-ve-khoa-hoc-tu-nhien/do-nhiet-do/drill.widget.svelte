<script>
  import DrillBoard from '#lib/core/drill-board.svelte';
  import { TEMPERATURE_SKILLS } from '../_shared/skills.js';
</script>

<DrillBoard skills={TEMPERATURE_SKILLS} perSkill={3} />
