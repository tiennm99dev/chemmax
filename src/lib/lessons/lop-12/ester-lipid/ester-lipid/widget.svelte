<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { ACID_PARTS, ALCOHOL_PARTS, ester } from '../_shared/ester.js';
  import { hydrolysis } from './engine.js';

  let acidId = $state('acetate');
  let alcoholId = $state('ethyl');
  let medium = $state('acid');
  let water = $state(5);
  let naoh = $state(1);
  let minutes = $state(0);

  const e = $derived(ester(acidId, alcoholId));
  const reagent = $derived(medium === 'acid' ? water : naoh);
  const run = $derived(hydrolysis(medium === 'acid' ? 'acid' : 'base', reagent, minutes));
  const percent = $derived(run.alcohol * 100);

  const MEDIA = [
    { value: 'acid', label: 'Acid (H₂SO₄ loãng, t°)' },
    { value: 'base', label: 'Kiềm (NaOH, t°)' },
  ];

  const rows = $derived([
    { id: 'ester', formula: e.formula, name: e.name, value: run.ester, color: 'bg-violet-500' },
    {
      id: 'acid',
      formula: medium === 'acid' ? e.acidFormula : e.saltFormula,
      name: medium === 'acid' ? e.acid.acid : e.acid.salt,
      value: run.acidPart,
      color: 'bg-rose-500',
    },
    {
      id: 'alcohol',
      formula: e.alcohol.formula,
      name: e.alcohol.alcohol,
      value: run.alcohol,
      color: 'bg-sky-500',
    },
    {
      id: 'reagent',
      formula: medium === 'acid' ? 'H2O' : 'NaOH',
      name: medium === 'acid' ? 'nước' : 'sodium hydroxide',
      value: run.reagentLeft,
      color: 'bg-slate-400',
    },
  ]);
  const scale = $derived(Math.max(1, reagent));

  /** @param {number} v */
  const mol = (v) => formatFixed(v, 2);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const h = formatNumber(percent, 1);
      if (minutes === 0) {
        return {
          tone: 'info',
          text: `Chưa đun: trong bình có $1$ mol ${e.name} và ${medium === 'acid' ? `${formatNumber(water)} mol nước (xúc tác $\\mathrm{H_2SO_4}$ loãng)` : `${formatNumber(naoh)} mol NaOH`}. Kéo thanh thời gian để đun nóng.`,
        };
      }
      if (!run.settled) {
        return {
          tone: 'info',
          text: `Sau ${minutes} phút, ${h}% ester đã bị thuỷ phân. Đun tiếp để xem phản ứng dừng ở đâu.`,
        };
      }
      if (medium === 'acid') {
        return {
          tone: 'warn',
          text: `Đã đạt cân bằng: chỉ ${h}% ester bị thuỷ phân, đun lâu hơn cũng không tăng. Thuỷ phân trong môi trường acid là phản ứng thuận nghịch (ngược với phản ứng ester hoá). Thêm nước làm cân bằng chuyển dịch sang phải nhưng không bao giờ đạt $100\\%$.`,
        };
      }
      if (naoh < 1) {
        return {
          tone: 'warn',
          text: `NaOH hết trước: chỉ ${h}% ester bị thuỷ phân. Phản ứng xà phòng hoá theo tỉ lệ mol ester : NaOH $= 1 : 1$, nên cần ít nhất $1$ mol NaOH.`,
        };
      }
      return {
        tone: 'ok',
        text: `Ester bị thuỷ phân hoàn toàn thành muối ${e.acid.salt} và ${e.alcohol.alcohol}. Trong môi trường kiềm, phản ứng xảy ra một chiều (phản ứng xà phòng hoá) vì muối carboxylate không phản ứng ngược với alcohol.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3">
    <SegmentedControl
      label="Gốc acid RCOO–"
      options={ACID_PARTS.map((p) => ({ value: p.id, label: p.name }))}
      bind:value={acidId}
    />
    <SegmentedControl
      label="Gốc alcohol R′"
      options={ALCOHOL_PARTS.map((p) => ({ value: p.id, label: p.name }))}
      bind:value={alcoholId}
    />
  </div>

  <div class="rounded-xl bg-violet-50 p-3 text-center">
    <p class="text-lg font-semibold"><ChemFormula formula={e.formula} /></p>
    <p class="text-slate-800">
      <span class="font-semibold">{e.name}</span> (<ChemFormula formula={e.molecular} />, M = {e.molar}
      g/mol)
    </p>
    {#if e.smell}<p class="text-sm text-slate-600">Có {e.smell}.</p>{/if}
    <p class="mt-2 overflow-x-auto text-base">
      <span class="rounded bg-rose-100 px-1"><ChemFormula formula="{e.acid.r}–CO" /></span><span
        class="mx-1 font-bold text-amber-700"
        aria-hidden="true">┊</span
      ><span class="rounded bg-sky-100 px-1"><ChemFormula formula="O–{e.alcohol.r}" /></span>
    </p>
    <p class="text-xs text-slate-600">
      Khi thuỷ phân, liên kết giữa C của nhóm C=O và O (vạch vàng) bị cắt: phần đỏ thành gốc acid,
      phần xanh thành alcohol.
    </p>
  </div>

  <SegmentedControl label="Môi trường thuỷ phân" options={MEDIA} bind:value={medium} />

  <div class="grid gap-x-4 gap-y-1 sm:grid-cols-2">
    {#if medium === 'acid'}
      <SliderField label="Nước ban đầu" bind:value={water} min={1} max={10} step={1} unit="mol" />
    {:else}
      <SliderField
        label="NaOH ban đầu"
        bind:value={naoh}
        min={0.5}
        max={2}
        step={0.25}
        unit="mol"
      />
    {/if}
    <SliderField label="Thời gian đun" bind:value={minutes} min={0} max={90} step={5} unit="phút" />
  </div>

  <p class="overflow-x-auto text-base">
    <EquationLine text={medium === 'acid' ? e.acidEquation : e.baseEquation} />
  </p>

  <div class="space-y-3 rounded-xl bg-slate-50 p-3">
    <p class="text-sm font-semibold text-slate-700">Số mol trong bình (ban đầu 1 mol ester)</p>
    {#each rows as r (r.id)}
      <div class="grid grid-cols-[minmax(0,9rem)_1fr_3rem] items-center gap-2 text-sm">
        <span class="min-w-0 truncate" title={r.name}><ChemFormula formula={r.formula} /></span>
        <div class="relative h-5 rounded bg-white" aria-hidden="true">
          <div
            class="bar absolute inset-y-1 left-0 rounded {r.color}"
            style="width: {(r.value / scale) * 100}%"
          ></div>
        </div>
        <span class="text-right tabular-nums">{mol(r.value)}</span>
      </div>
    {/each}
  </div>

  <div class="sr-only" aria-live="polite">
    Sau {minutes} phút: {rows.map((r) => `${r.name} ${mol(r.value)} mol`).join(', ')}.
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
