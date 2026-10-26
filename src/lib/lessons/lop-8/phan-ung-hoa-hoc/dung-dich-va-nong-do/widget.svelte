<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { SOLUTES, approxMolarity, dissolve, molarity, shade, solute } from './engine.js';

  let formula = $state('CuSO4');
  /** @type {'phan-tram' | 'mol'} */
  let mode = $state('phan-tram');
  let mSolute = $state(10);
  let mWater = $state(90);
  let volume = $state(250);

  const s = $derived(solute(formula));
  const MODES = [
    { value: 'phan-tram', label: 'Nồng độ phần trăm' },
    { value: 'mol', label: 'Nồng độ mol' },
  ];
  /** Mass slider range in molarity mode: stays well below saturation. */
  const molMax = $derived(Math.round(s.maxMass / 2.5));

  const mix = $derived(dissolve(s, mSolute, mWater));
  const mol = $derived(molarity(s, Math.min(mSolute, molMax), volume));
  const strength = $derived(
    mode === 'phan-tram'
      ? approxMolarity(s, mix.percent) / s.maxMolarity
      : mol.molarity / s.maxMolarity,
  );
  const fill = $derived(shade(s, strength));
  /** Liquid height in the drawing, 0..120. */
  const level = $derived(
    mode === 'phan-tram' ? 40 + (mix.mSolution / 260) * 80 : 30 + (volume / 500) * 90,
  );
  const crystals = $derived(mode === 'phan-tram' ? Math.min(14, Math.ceil(mix.excess / 2)) : 0);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (mode === 'mol') {
        return {
          tone: 'ok',
          text: `n = ${formatNumber(Math.min(mSolute, molMax), 2)} : ${formatNumber(mol.M)} ≈ ${formatNumber(mol.n, 4)} mol; C_M = n : V = ${formatNumber(mol.n, 4)} : ${formatNumber(volume / 1000, 3)} ≈ ${formatNumber(mol.molarity, 3)} M.`,
        };
      }
      if (mSolute === 0) return { tone: 'info', text: 'Chưa có chất tan: trong cốc chỉ có nước.' };
      if (mix.excess > 0) {
        return {
          tone: 'warn',
          text: `Dung dịch đã bão hoà: ${formatNumber(mWater)} g nước chỉ hoà tan tối đa ${formatNumber(mix.capacity, 2)} g ${prettyFormula(s.formula)}, còn ${formatNumber(mix.excess, 2)} g không tan lắng ở đáy cốc. Thêm nước để hoà tan hết.`,
        };
      }
      if (mix.saturated)
        return { tone: 'warn', text: 'Vừa đủ bão hoà: không hoà tan thêm được chất tan.' };
      return {
        tone: 'ok',
        text: `Dung dịch chưa bão hoà: còn hoà tan thêm được ${formatNumber(mix.capacity - mix.dissolved, 2)} g ${prettyFormula(s.formula)}.`,
      };
    },
  );

  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <label class="block text-sm font-semibold text-slate-700">
      Chất tan
      <select
        class={select}
        bind:value={formula}
        onchange={() => {
          if (mode === 'mol') mSolute = Math.min(mSolute, molMax);
        }}
      >
        {#each SOLUTES as sol (sol.formula)}
          <option value={sol.formula}>{prettyFormula(sol.formula)} – {sol.name}</option>
        {/each}
      </select>
    </label>
    <SegmentedControl
      label="Đại lượng cần xem"
      options={MODES}
      bind:value={mode}
      onchange={(v) => {
        if (v === 'mol') mSolute = Math.min(mSolute, molMax);
      }}
    />
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
    <svg
      viewBox="0 0 160 160"
      class="mx-auto block h-auto w-full max-w-60"
      role="img"
      aria-label="Cốc dung dịch {s.formula}{crystals ? ', có chất rắn chưa tan ở đáy' : ''}"
    >
      <rect x="30" y={150 - level} width="100" height={level} {fill} />
      {#each Array.from({ length: crystals }, (_, i) => i) as i (i)}
        <rect
          x={36 + (i % 7) * 13}
          y={142 - Math.floor(i / 7) * 7}
          width="9"
          height="6"
          rx="1"
          fill={s.formula === 'NaCl' ? '#f8fafc' : `rgb(${s.rgb.join(',')})`}
          stroke="#475569"
          stroke-width="0.8"
        />
      {/each}
      <path
        d="M26 14 L30 18 L30 150 L130 150 L130 18 L134 14"
        fill="none"
        stroke="#334155"
        stroke-width="3"
        stroke-linejoin="round"
      />
      {#each [40, 80, 120] as h (h)}
        <line x1="118" x2="130" y1={150 - h} y2={150 - h} stroke="#64748b" />
      {/each}
    </svg>

    <div class="space-y-3">
      {#if mode === 'phan-tram'}
        <SliderField
          label="Khối lượng chất tan"
          bind:value={mSolute}
          min={0}
          max={s.maxMass}
          step={1}
          unit="g"
        />
        <SliderField
          label="Khối lượng nước (dung môi)"
          bind:value={mWater}
          min={20}
          max={200}
          step={5}
          unit="g"
        />
        <div class="rounded-xl bg-slate-50 p-3 text-sm tabular-nums">
          <p>
            Độ tan của <ChemFormula formula={s.formula} /> ở 20 °C: S ≈ {formatNumber(s.solubility)} g/100
            g nước
          </p>
          <p>
            m<sub>dd</sub> = m<sub>ct</sub> + m<sub>nước</sub> = {formatNumber(mix.dissolved, 2)} + {formatNumber(
              mWater,
            )} = {formatNumber(mix.mSolution, 2)} g
          </p>
          <p class="text-base font-bold text-indigo-700">
            C% = {formatNumber(mix.dissolved, 2)} : {formatNumber(mix.mSolution, 2)} × 100% ≈ {formatNumber(
              mix.percent,
              2,
            )}%
          </p>
        </div>
      {:else}
        <SliderField
          label="Khối lượng chất tan"
          bind:value={mSolute}
          min={0}
          max={molMax}
          step={0.5}
          unit="g"
        />
        <SliderField
          label="Thể tích dung dịch"
          bind:value={volume}
          min={50}
          max={500}
          step={10}
          unit="mL"
        />
        <div class="rounded-xl bg-slate-50 p-3 text-sm tabular-nums">
          <p><ChemFormula formula={s.formula} />: M = {formatNumber(mol.M)} g/mol</p>
          <p class="text-base font-bold text-indigo-700">
            C<sub>M</sub> ≈ {formatNumber(mol.molarity, 3)} mol/L
          </p>
        </div>
      {/if}
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
