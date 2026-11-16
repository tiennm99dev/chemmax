<script module>
  export const title = 'Bàn thí nghiệm nhận biết mẫu chưa biết';
</script>

<script>
  import SampleBench from './sample-bench.svelte';

  const SAMPLES = [
    { id: 'acid', name: 'Dung dịch HCl' },
    { id: 'base', name: 'Dung dịch NaOH' },
  ];
  const REAGENTS = [{ id: 'litmus', name: 'Quỳ tím', liquid: '#a855f7' }];
  /** @param {string} id */
  const observe = (id) =>
    id === 'acid'
      ? { text: 'quỳ tím hoá đỏ', liquid: '#ef4444' }
      : { text: 'quỳ tím hoá xanh', liquid: '#3b82f6' };
</script>

<SampleBench
  labels={['A', 'B']}
  sampleWord="Mẫu"
  samples={SAMPLES}
  reagents={REAGENTS}
  deal={(rand) => (rand() < 0.5 ? ['acid', 'base'] : ['base', 'acid'])}
  {observe}
  intro="Hai mẫu là HCl và NaOH. Thử bằng quỳ tím rồi gọi tên từng mẫu."
  solvedText={() => 'Đúng cả hai mẫu.'}
  wrongText={(right) => `Đúng ${right}/2 mẫu.`}
/>
