<script>
  import DrillBoard from '#lib/core/drill-board.svelte';
  import { REVIEW_SKILLS } from '../_shared/skills.js';
</script>

<DrillBoard skills={REVIEW_SKILLS} perSkill={3} mapLabel="Bản đồ kĩ năng của chương" />
