<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { K_ESTER, equilibrium } from './engine.js';

  const ACID = 1;
  const TARGET = 0.9;

  let alcohol = $state(1);
  let water = $state(0);

  const eq = $derived(equilibrium(ACID, alcohol, water));
  const percent = $derived(eq.yield * 100);
  const scale = $derived(Math.max(ACID, alcohol, eq.water));

  const ROWS = $derived([
    { formula: 'CH3COOH', name: 'acetic acid', before: ACID, after: eq.acid, color: 'bg-rose-500' },
    {
      formula: 'C2H5OH',
      name: 'ethanol',
      before: alcohol,
      after: eq.alcohol,
      color: 'bg-sky-500',
    },
    {
      formula: 'CH3COOC2H5',
      name: 'ethyl acetate',
      before: 0,
      after: eq.ester,
      color: 'bg-emerald-500',
    },
    { formula: 'H2O', name: 'nước', before: water, after: eq.water, color: 'bg-slate-400' },
  ]);

  /** @param {number} v */
  const mol = (v) => formatFixed(v, 2);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const h = formatNumber(percent, 1);
      const limiting = alcohol < ACID ? 'ethanol' : 'acetic acid';
      if (eq.yield >= TARGET) {
        return {
          tone: 'ok',
          text: `Hiệu suất ${h}%, đạt mục tiêu từ $90\\%$ trở lên. Dùng dư ${alcohol > ACID ? 'ethanol' : 'acetic acid'} và không thêm nước làm cân bằng chuyển dịch sang phải, tạo nhiều ester hơn.`,
        };
      }
      if (water > 0) {
        return {
          tone: 'warn',
          text: `Hiệu suất chỉ ${h}% (tính theo ${limiting}). Nước là sản phẩm, có sẵn nước làm cân bằng chuyển dịch sang trái. Vì vậy dùng $\\mathrm{H_2SO_4}$ đặc để hút nước và dùng acid, alcohol khan.`,
        };
      }
      if (alcohol === ACID) {
        return {
          tone: 'info',
          text: `Với $1$ mol acid và $1$ mol alcohol, cân bằng đạt khi hiệu suất ${h}%, tức khoảng $\\dfrac{2}{3}$. Tăng lượng ethanol để đạt hiệu suất từ $90\\%$ trở lên.`,
        };
      }
      return {
        tone: 'info',
        text: `Hiệu suất ${h}% (tính theo ${limiting}, chất hết trước nếu phản ứng hoàn toàn). Phản ứng thuận nghịch nên không chất nào phản ứng hết.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <p class="overflow-x-auto text-lg">
    <EquationLine text="CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O" />
  </p>
  <p class="text-sm text-slate-600">
    Ban đầu có {ACID} mol acetic acid, xúc tác H₂SO₄ đặc, đun nóng. Hằng số cân bằng ở nhiệt độ thí nghiệm
    khoảng {K_ESTER}.
  </p>

  <div class="grid gap-4 sm:grid-cols-2">
    <SliderField
      label="Ethanol ban đầu"
      bind:value={alcohol}
      min={0.5}
      max={5}
      step={0.5}
      unit="mol"
    />
    <SliderField
      label="Nước có sẵn ban đầu"
      bind:value={water}
      min={0}
      max={2}
      step={0.5}
      unit="mol"
    />
  </div>

  <div class="space-y-3 rounded-xl bg-slate-50 p-3">
    <p class="text-sm font-semibold text-slate-700">Số mol lúc cân bằng</p>
    {#each ROWS as r (r.formula)}
      <div class="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-2 text-sm">
        <span class="min-w-0 truncate"><ChemFormula formula={r.formula} /></span>
        <div class="relative h-5 rounded bg-white" aria-hidden="true">
          <div
            class="absolute inset-y-0 left-0 rounded border-r-2 border-dashed border-slate-500"
            style="width: {(r.before / scale) * 100}%"
          ></div>
          <div
            class="bar absolute inset-y-1 left-0 rounded {r.color}"
            style="width: {(r.after / scale) * 100}%"
          ></div>
        </div>
        <span class="text-right tabular-nums">{mol(r.after)}</span>
      </div>
    {/each}
    <p class="text-xs text-slate-600">Vạch đứt: số mol ban đầu. Thanh màu: số mol lúc cân bằng.</p>
  </div>

  <div>
    <div class="mb-1 flex justify-between text-sm font-semibold text-slate-700">
      <span>Hiệu suất phản ứng ester hoá</span>
      <span class="tabular-nums">{formatNumber(percent, 1)}%</span>
    </div>
    <div
      class="relative h-4 rounded-full bg-slate-200"
      role="meter"
      aria-label="Hiệu suất phản ứng ester hoá"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      aria-valuetext="{formatNumber(percent, 1)}%"
    >
      <div
        class="bar absolute inset-y-0 left-0 rounded-full {eq.yield >= TARGET
          ? 'bg-emerald-600'
          : 'bg-indigo-600'}"
        style="width: {percent}%"
      ></div>
      <div class="absolute inset-y-[-4px] w-0.5 bg-slate-800" style="left: {TARGET * 100}%"></div>
    </div>
  </div>

  <div aria-live="polite" class="sr-only">
    Lúc cân bằng: {ROWS.map((r) => `${r.name} ${mol(r.after)} mol`).join(', ')}. Hiệu suất {formatNumber(
      percent,
      1,
    )}%.
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .bar {
    transition: width 0.4s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .bar {
      transition: none;
    }
  }
</style>
