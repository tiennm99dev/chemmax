<script module>
  export const title = 'Bảng tuần hoàn';
</script>

<script>
  import PeriodicTable from './periodic-table.svelte';

  let selected = $state(/** @type {number | null} */ (26));
  let colorBy = $state(/** @type {import('./periodic-table.js').ColorMode} */ ('category'));
</script>

<PeriodicTable bind:selected bind:colorBy />
<p class="text-sm text-slate-600 tabular-nums">selected = {selected} · colorBy = {colorBy}</p>
<PeriodicTable
  colorBy="metal"
  controls={false}
  details={false}
  highlight={(el) => el.period === 3}
  label="Bảng tuần hoàn, làm nổi chu kì 3"
/>
