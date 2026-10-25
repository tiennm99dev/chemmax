<script module>
  export const title = 'Thang pH';
</script>

<script>
  import PhScale from './ph-scale.svelte';

  let ph = $state(2.9);
</script>

<PhScale bind:ph advanced />
<p class="text-sm text-slate-600 tabular-nums">ph = {ph}</p>
<PhScale ph={12.4} interactive={false} substances={false} label="Thang pH của nước vôi trong" />
