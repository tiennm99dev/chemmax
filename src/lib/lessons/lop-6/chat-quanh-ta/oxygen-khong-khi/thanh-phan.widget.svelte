<script>
  import PieChart from '#lib/core/visuals/pie-chart.svelte';
  import { button } from '#lib/core/ui.js';
  import { AIR, judgeAir } from './engine.js';

  const COLORS = ['#2563eb', '#16a34a', '#f59e0b'];
  const start = () => [
    { label: 'Nitrogen', value: 34, color: COLORS[0] },
    { label: 'Oxygen', value: 33, color: COLORS[1] },
    { label: 'Khí khác', value: 33, color: COLORS[2] },
  ];

  let data = $state(start());
  /** @type {{ ok: boolean, messages: string[] } | null} */
  let result = $state(null);

  const total = $derived(data.reduce((s, d) => s + d.value, 0));

  function check() {
    result = judgeAir(data.map((d) => (d.value / total) * 100));
  }
  function show() {
    data = AIR.map((g, i) => ({ ...g, color: COLORS[i] }));
    result = judgeAir(AIR.map((g) => g.value));
  }
  function reset() {
    data = start();
    result = null;
  }
</script>

<div class="space-y-4">
  <PieChart
    bind:data
    interactive
    title="Ước lượng thành phần không khí theo thể tích"
    onchange={() => (result = null)}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    <button type="button" class={button.secondary} onclick={show}>Xem thành phần thật</button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
  <div
    class="rounded-xl px-4 py-3 text-sm {result?.ok
      ? 'bg-emerald-50 text-emerald-900'
      : result
        ? 'bg-amber-50 text-amber-900'
        : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    {#if result}
      <ul class="list-disc space-y-1 pl-5">
        {#each result.messages as msg, i (i)}
          <li>{msg}</li>
        {/each}
      </ul>
    {:else}
      Kéo các ranh giới giữa hai phần (hoặc chọn ranh giới rồi dùng phím mũi tên) để chia hình tròn
      theo thành phần không khí mà em đoán, rồi bấm "Kiểm tra". Sai lệch đến 3% vẫn được tính là
      đúng.
    {/if}
  </div>
</div>
