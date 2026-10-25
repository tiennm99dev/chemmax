<script module>
  export const title = 'Mô hình nguyên tử Bohr';
</script>

<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import AtomModel from './atom-model.svelte';

  let z = $state(11);
  let charge = $state(0);
</script>

<div class="grid gap-3 sm:grid-cols-2">
  <SliderField label="Số proton Z" bind:value={z} min={1} max={36} />
  <SliderField label="Điện tích ion" bind:value={charge} min={-3} max={3} />
</div>
<div class="grid gap-6 sm:grid-cols-2">
  <AtomModel {z} {charge} animate />
  <AtomModel z={26} charge={2} label="Mô hình ion Fe²⁺" />
</div>
