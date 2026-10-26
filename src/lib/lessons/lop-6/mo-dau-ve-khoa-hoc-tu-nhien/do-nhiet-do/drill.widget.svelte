<script>
  import DrillBoard from '#lib/core/drill-board.svelte';
  import { TEMPERATURE_SKILLS } from '#lib/core/measure-skills.js';
</script>

<DrillBoard skills={TEMPERATURE_SKILLS} perSkill={3} />
