<script module>
  export const title = 'Dụng cụ thí nghiệm';
</script>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import LabGlassware from './lab-glassware.svelte';
  import { VESSELS } from './glassware.js';

  let vessel = $state('binh-tam-giac');
  /** @type {Record<string, number>} */
  let volumes = $state({
    'ong-nghiem': 5,
    'coc-thuy-tinh': 120,
    'binh-tam-giac': 150,
    'ong-dong': 37,
    'binh-dinh-muc': 80,
    burette: 12.5,
  });
  const options = Object.values(VESSELS).map((v) => ({ value: v.id, label: v.name }));
</script>

<SegmentedControl label="Dụng cụ" {options} bind:value={vessel} />
<div class="grid gap-6 sm:grid-cols-2">
  <LabGlassware {vessel} bind:volume={volumes[vessel]} interactive />
  <LabGlassware
    vessel="burette"
    volume={volumes.burette}
    liquid="#f472b6"
    step={0.5}
    label="Burette chứa dung dịch"
  />
</div>
<p class="text-sm text-slate-600 tabular-nums">volume = {volumes[vessel]}</p>
