<script>
  import DrillBoard from '#lib/core/drill-board.svelte';
  import { answerText, readNumber } from '#lib/core/decimal.js';
  import { REVIEW_SKILLS } from '../_shared/skills.js';
</script>

<DrillBoard
  skills={REVIEW_SKILLS}
  perSkill={2}
  read={readNumber}
  format={answerText}
  invalidText="Hãy nhập một số, ví dụ −1559,7 hoặc 28,3."
  mapLabel="Bản đồ kĩ năng của chương"
/>
