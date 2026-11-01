<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script module>
  export const title = 'Đặt tính rồi tính';
</script>

<script>
  import ColumnBoard from './column-board.svelte';
  import ColumnQuiz from './column-quiz.svelte';
</script>

<div class="space-y-4">
  <ColumnBoard a={41} b={5} op="+" written={{ tens: null, ones: 6 }} active="tens" />
  <ColumnQuiz a={76} b={34} op="-" sticks />
</div>
