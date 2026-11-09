<script module>
  export const title = 'Đồ thị đường cong';
</script>

<script>
  import CurvePlot from './curve-plot.svelte';

  /** @type {Array<[number, number]>} */
  const fall = [0, 10, 20, 30, 40, 50, 60].map((t) => [t, 0.2 * Math.exp(-t / 15) + 0.05]);
  /** @type {Array<[number, number]>} */
  const rise = [0, 10, 20, 30, 40, 50, 60].map((t) => [t, 0.1 * (1 - Math.exp(-t / 15))]);
  /** @type {Array<[number, number]>} */
  const titration = [0, 5, 9, 9.8, 10, 10.2, 11, 15, 20].map((v) => [
    v,
    v < 10 ? 1 + 2 * (v / 10) ** 3 : v === 10 ? 7 : 12 - 1.5 / (v - 9.5),
  ]);
</script>

<div class="space-y-4">
  <CurvePlot
    xMax={60}
    xStep={10}
    yMax={0.3}
    yStep={0.05}
    xName="t (s)"
    yName="C (mol/L)"
    label="Nồng độ chất phản ứng giảm (nét liền), sản phẩm tăng (nét đứt) theo thời gian"
    series={[
      { points: fall, color: '#b45309' },
      { points: rise, color: '#4f46e5', dashed: true },
    ]}
  />
  <CurvePlot
    xMax={20}
    xStep={5}
    yMax={14}
    yStep={2}
    xName="V (mL)"
    yName="pH"
    label="pH theo thể tích base thêm vào, dải đổi màu của chỉ thị được tô"
    series={[{ points: titration, color: '#0f766e' }]}
    band={{ from: 8.2, to: 10, color: '#fbcfe8' }}
  />
</div>
