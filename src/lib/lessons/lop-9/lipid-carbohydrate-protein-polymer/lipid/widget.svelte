<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { fmt } from '#lib/core/number-format.js';
  import {
    FATTY_ACIDS,
    acidFormula,
    fatMass,
    fattyAcid,
    saltFormula,
    saponifyEquation,
    saponifyMasses,
    saponifyStep,
  } from './engine.js';

  let chosen = $state(['stearic', 'stearic', 'stearic']);
  let cuts = $state(0);

  const rs = $derived(chosen.map((id) => fattyAcid(id).r));
  const step = $derived(saponifyStep(rs, cuts));
  const masses = $derived(saponifyMasses(rs));
  const equation = $derived(saponifyEquation(rs));
  const backbone = ['CH₂', 'CH', 'CH₂'];

  /**
   * @param {number} i
   * @param {string} id
   */
  function choose(i, id) {
    chosen[i] = id;
    cuts = 0;
  }

  const tone = $derived(step.done ? 'ok' : 'info');
  const note = $derived.by(() => {
    if (cuts === 0)
      return `Phân tử chất béo có 3 liên kết ester nối gốc glycerol với 3 gốc acid béo (M = ${fmt(fatMass(rs))} g/mol). Chọn acid béo cho từng gốc, rồi bấm “Thêm 1 NaOH” và quan sát.`;
    if (!step.done)
      return `Đã có ${cuts} phân tử NaOH phản ứng: ${cuts} liên kết ester bị cắt, ${cuts} gốc acid béo tách ra thành muối sodium. Còn ${3 - cuts} liên kết ester.`;
    return `Xà phòng hoá hoàn toàn: 1 phân tử chất béo cần 3 phân tử NaOH, tạo 3 phân tử muối sodium của acid béo (thành phần chính của xà phòng) và 1 phân tử glycerol C₃H₅(OH)₃.`;
  });
</script>

<div class="space-y-4">
  <div class="space-y-2" role="group" aria-label="Phân tử chất béo">
    {#each backbone as part, i (i)}
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="w-12 rounded-lg bg-amber-100 px-2 py-1 text-center font-semibold text-amber-900"
          >{part}</span
        >
        {#if step.cut[i]}
          <span class="rounded-lg bg-amber-100 px-2 py-1 font-semibold text-amber-900">–OH</span>
          <span
            class="salt ml-auto rounded-lg bg-sky-100 px-2 py-1 font-semibold text-sky-900"
            aria-label="Muối tách ra"
          >
            <ChemFormula formula={saltFormula(rs[i])} />
          </span>
        {:else}
          <span
            class="rounded-lg bg-rose-100 px-2 py-1 font-semibold text-rose-900"
            title="Liên kết ester">–O–CO–</span
          >
          <label class="sr-only" for="fa-{i}">Gốc acid béo thứ {i + 1}</label>
          <select
            id="fa-{i}"
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-2 text-sm {focusRing}"
            value={chosen[i]}
            onchange={(e) => choose(i, e.currentTarget.value)}
          >
            {#each FATTY_ACIDS as a (a.id)}
              <option value={a.id}>{a.r} ({a.name})</option>
            {/each}
          </select>
        {/if}
      </div>
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={step.done} onclick={() => (cuts += 1)}>
      Thêm 1 NaOH (đun nóng)
    </button>
    <button type="button" class={button.quiet} disabled={cuts === 0} onclick={() => (cuts = 0)}>
      Làm lại
    </button>
    <span class="self-center text-sm text-slate-600"
      >Số NaOH đã dùng: <strong>{step.naoh}</strong> / 3</span
    >
  </div>

  <FeedbackNote {tone} text={note} />

  {#if step.done}
    <div class="space-y-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
      {#if equation}
        <p class="text-base"><EquationLine text={equation} /></p>
      {:else}
        <p>
          Chất béo có ba gốc acid béo khác nhau nên tạo ba muối khác nhau:
          {#each rs as r, i (i)}{#if i > 0},
            {/if}<ChemFormula formula={saltFormula(r)} /> (từ <ChemFormula
              formula={acidFormula(r)}
            />){/each}.
        </p>
      {/if}
      <p>
        Bảo toàn khối lượng cho 1 mol chất béo:
        <span class="whitespace-nowrap">{fmt(masses.fat)} g</span> +
        <span class="whitespace-nowrap">{fmt(masses.naoh)} g NaOH</span> =
        <span class="whitespace-nowrap">{fmt(masses.salts)} g muối</span> +
        <span class="whitespace-nowrap">{fmt(masses.glycerol)} g glycerol</span>
        (<strong>{fmt(masses.fat + masses.naoh)} g</strong> mỗi vế).
      </p>
    </div>
  {/if}
</div>

<style>
  .salt {
    animation: slide 0.5s ease-out both;
  }
  @keyframes slide {
    from {
      transform: translateX(-2rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .salt {
      animation: none;
    }
  }
</style>
