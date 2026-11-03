<script>
  import DrillBoard from '#lib/core/drill-board.svelte';
  import { answerText, readNumber } from '#lib/core/decimal.js';
  import { REVIEW_SKILLS } from './skills.js';
</script>

<DrillBoard
  skills={REVIEW_SKILLS}
  perSkill={2}
  read={readNumber}
  format={answerText}
  invalidText="Hãy nhập một số, ví dụ 4 hoặc 2,4."
  mapLabel="Bản đồ kĩ năng của chương"
/>
