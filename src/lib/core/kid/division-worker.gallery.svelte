<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script module>
  export const title = 'Chia theo cột: bảng chia, hạ chữ số và lời nhắc';
</script>

<script>
  import DivisionWorker from './division-worker.svelte';

  /**
   * A four-digit division by a digit, evenly or with a remainder.
   * @param {'exact' | 'rest'} kind
   * @param {{ n: number, d: number }} previous
   */
  function draw(kind, previous) {
    for (;;) {
      const d = 2 + Math.floor(Math.random() * 8);
      const n = 1000 + Math.floor(Math.random() * 9000);
      const fits = kind === 'exact' ? n % d === 0 : n % d > 0;
      if (fits && n !== previous.n) return { n, d };
    }
  }
</script>

<DivisionWorker
  {draw}
  kinds={[
    { value: 'exact', label: 'Chia hết', first: { n: 6369, d: 3 } },
    { value: 'rest', label: 'Có dư', first: { n: 2487, d: 2 } },
  ]}
/>
