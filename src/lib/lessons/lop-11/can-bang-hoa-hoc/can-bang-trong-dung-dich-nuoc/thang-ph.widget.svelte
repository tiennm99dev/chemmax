<script>
  import PhScale from '#lib/domain/ph-scale.svelte';

  let ph = $state(2.4);
</script>

<PhScale bind:ph advanced label="Thang pH của các dung dịch thường gặp" />
