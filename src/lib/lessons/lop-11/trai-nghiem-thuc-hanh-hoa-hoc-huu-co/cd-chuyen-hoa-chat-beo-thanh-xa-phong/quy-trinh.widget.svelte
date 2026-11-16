<script>
  import StepQuiz from '../_shared/step-quiz.svelte';
  import { SOAP_STEPS } from './engine.js';
</script>

<StepQuiz
  steps={SOAP_STEPS}
  label="Quy trình làm xà phòng từng bước"
  doneText="Hoàn thành quy trình: xà phòng đã được đổ khuôn và chờ hoàn thiện."
/>
