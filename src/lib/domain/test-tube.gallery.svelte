<script module>
  export const title = 'Ống nghiệm';
</script>

<script>
  import TestTube from './test-tube.svelte';
</script>

<div class="flex flex-wrap items-end gap-4">
  <TestTube liquid="#e2e8f0" label="Dung dịch NaCl" />
  <TestTube liquid="#e2e8f0" label="Có kết tủa AgCl trắng" precipitate="#f8fafc" amount={1} />
  <TestTube liquid="#fde68a" label="Có kết tủa AgI vàng" precipitate="#facc15" amount={0.6} />
</div>
