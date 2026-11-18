<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script module>
  export const title = 'Đặt tính có nhớ';
</script>

<script>
  import CarryQuiz from './carry-quiz.svelte';
</script>

<div class="space-y-4">
  <CarryQuiz a={36} b={28} op="+" sticks />
  <CarryQuiz a={42} b={7} op="-" />
</div>
