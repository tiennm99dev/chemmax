<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script module>
  export const title = 'Đặt tính theo cột: bảng tính, bàn phím chữ số và lời nhắc';
</script>

<script>
  import ColumnWorker from './column-worker.svelte';
  import { carriesOf } from './column-steps.js';

  const KINDS = { plain: [0, 0], one: [1, 1], many: [2, 4] };

  /**
   * A five-digit addition with the number of carries of a kind.
   * @param {'plain' | 'one' | 'many'} kind
   * @param {{ a: number, b: number }} previous
   */
  function draw(kind, previous) {
    const [lo, hi] = KINDS[kind];
    for (;;) {
      const a = 10000 + Math.floor(Math.random() * 50000);
      const b = 10000 + Math.floor(Math.random() * (89999 - a));
      const c = carriesOf(a, b, '+');
      if (c >= lo && c <= hi && a !== previous.a) return { a, b };
    }
  }
</script>

<ColumnWorker
  op="+"
  columns={5}
  {draw}
  switchLabel="Chọn loại phép cộng"
  nextLabel="Phép cộng khác"
  kinds={[
    { value: 'plain', label: 'Không nhớ', first: { a: 23415, b: 51362 } },
    { value: 'one', label: 'Nhớ một lần', first: { a: 34528, b: 21345 } },
    { value: 'many', label: 'Nhớ nhiều lần', first: { a: 45637, b: 28485 } },
  ]}
/>
