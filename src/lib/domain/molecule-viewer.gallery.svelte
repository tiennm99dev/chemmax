<script module>
  export const title = 'Mô hình phân tử';
</script>

<script>
  import { textInput } from '#lib/core/ui.js';
  import MoleculeViewer from './molecule-viewer.svelte';
  import { MOLECULES } from './molecule.js';

  let id = $state('c2h5oh');
  let rotation = $state(0);
  const mol = $derived(MOLECULES.find((m) => m.id === id) ?? MOLECULES[0]);
</script>

<label class="block max-w-xs text-sm font-semibold text-slate-700">
  Phân tử
  <select class="{textInput} mt-1" bind:value={id}>
    {#each MOLECULES as m (m.id)}
      <option value={m.id}>{m.name} ({m.formula})</option>
    {/each}
  </select>
</label>
<MoleculeViewer molecule={mol} bind:rotation />
<p class="text-sm text-slate-600 tabular-nums">rotation = {rotation}°</p>
