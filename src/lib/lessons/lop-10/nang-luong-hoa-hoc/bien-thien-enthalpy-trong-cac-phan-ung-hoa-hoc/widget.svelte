<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import BondPanel from './bond-panel.svelte';
  import FormationPanel from './formation-panel.svelte';

  let mode = $state('formation');
  const MODES = [
    { value: 'formation', label: 'Theo nhiệt tạo thành' },
    { value: 'bond', label: 'Theo năng lượng liên kết' },
  ];
</script>

<div class="space-y-4">
  <SegmentedControl label="Cách tính" options={MODES} bind:value={mode} />
  {#if mode === 'formation'}
    <FormationPanel />
  {:else}
    <BondPanel />
  {/if}
</div>
