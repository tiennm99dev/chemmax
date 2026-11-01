<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { numTex, tidy } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import {
    KIND_NAMES,
    groupedText,
    judgeLevel,
    kindOf,
    signedTex,
    signedText,
    snapLevel,
  } from '../_shared/energy.js';
  import LevelArrow from '../_shared/level-arrow.svelte';

  const W = 360;
  const H = 280;
  const MID = 140;
  const SCALE = 0.11;
  const LIMIT = 1000;
  const STEP = 50;
  const TOLERANCE = 30;
  const LEVEL_X = 250;
  const TICKS = [-1000, -750, -500, -250, 0, 250, 500, 750, 1000];

  const REACTIONS = [
    {
      id: 'caco3',
      tex: '\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}',
      label: 'Nung đá vôi',
      dH: 176,
      per: 'mol CaCO₃',
    },
    {
      id: 'c2h4',
      tex: '\\mathrm{C_2H_4(g)} + \\mathrm{H_2(g)} \\rightarrow \\mathrm{C_2H_6(g)}',
      label: 'Cộng hydrogen vào ethylene',
      dH: -137,
      per: 'mol C₂H₄',
    },
    {
      id: 'co',
      tex: '\\mathrm{CO(g)} + \\frac{1}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}',
      label: 'Đốt cháy CO',
      dH: -283,
      per: 'mol CO',
    },
    {
      id: 'no',
      tex: '\\mathrm{N_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2NO(g)}',
      label: 'Tạo NO từ N₂ và O₂',
      dH: 180.6,
      per: 'mol N₂',
    },
    {
      id: 'h2',
      tex: '\\mathrm{2H_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2H_2O(l)}',
      label: 'Đốt cháy H₂',
      dH: -571.6,
      per: 'mol O₂',
    },
    {
      id: 'thermite',
      tex: '\\mathrm{Fe_2O_3(s)} + \\mathrm{2Al(s)} \\rightarrow \\mathrm{Al_2O_3(s)} + \\mathrm{2Fe(s)}',
      label: 'Nhiệt nhôm',
      dH: -851.5,
      per: 'mol Fe₂O₃',
    },
  ];

  let id = $state(REACTIONS[0].id);
  let point = $state({ x: LEVEL_X, y: MID });
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let solved = $state(false);
  let moles = $state(1);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  const r = $derived(REACTIONS.find((x) => x.id === id) ?? REACTIONS[0]);
  const drawn = $derived(tidy((MID - point.y) / SCALE, 0));
  const heat = $derived(tidy(moles * Math.abs(r.dH), 6));

  /** @param {{ x: number, y: number }} p */
  function project(p) {
    const level = snapLevel((MID - p.y) / SCALE, STEP, LIMIT);
    return { x: LEVEL_X, y: MID - level * SCALE };
  }

  function reset() {
    point.x = LEVEL_X;
    point.y = MID;
    verdict = null;
    solved = false;
    moles = 1;
  }

  function check() {
    verdict = judgeLevel(drawn, r.dH, TOLERANCE);
    if (verdict.ok) solved = true;
  }

  // The button that called this goes away with the solved state, so focus moves on to the handle.
  async function next() {
    const at = REACTIONS.findIndex((x) => x.id === id);
    id = REACTIONS[(at + 1) % REACTIONS.length].id;
    reset();
    await tick();
    svgEl?.querySelector('circle')?.focus();
  }

  const live = $derived.by(() => {
    if (drawn === 0) return 'Hai mức đang bằng nhau.';
    return `Mức sản phẩm đang ${drawn < 0 ? 'thấp' : 'cao'} hơn mức chất đầu ${groupedText(Math.abs(drawn))} kJ: giản đồ của một phản ứng ${KIND_NAMES[kindOf(drawn)]}.`;
  });
</script>

<div class="space-y-4">
  <label class="block">
    <span class="mb-1 block text-sm font-semibold text-slate-700">Chọn phản ứng</span>
    <select class={textInput} bind:value={id} onchange={reset}>
      {#each REACTIONS as o (o.id)}
        <option value={o.id}>{o.label}</option>
      {/each}
    </select>
  </label>

  <div class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center">
    <p><LiveRichText text={`$${r.tex}$`} /></p>
    <p class="mt-1 font-semibold">
      <LiveRichText text={`$\\Delta_r H^\\circ_{298} = ${signedTex(r.dH)}$ kJ`} />
    </p>
  </div>

  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-50 select-none"
    style:touch-action="none"
    role="group"
    aria-label="Giản đồ năng lượng của phản ứng"
  >
    {#each TICKS as tick (tick)}
      <line
        x1="42"
        x2={W - 8}
        y1={MID - tick * SCALE}
        y2={MID - tick * SCALE}
        stroke="#e2e8f0"
        stroke-width="1"
      />
      <text x="38" y={MID - tick * SCALE + 3} text-anchor="end" font-size="10" fill="#64748b">
        {signedText(tick)}
      </text>
    {/each}

    <line x1="60" x2="150" y1={MID} y2={MID} stroke="#4f46e5" stroke-width="5" />
    <text x="105" y={MID - 8} text-anchor="middle" font-size="12" font-weight="600" fill="#3730a3">
      Chất đầu
    </text>

    <line
      x1="150"
      x2="205"
      y1={MID}
      y2={MID}
      stroke="#94a3b8"
      stroke-width="1"
      stroke-dasharray="4 3"
    />
    <LevelArrow x={205} from={MID} to={point.y} color={drawn < 0 ? '#dc2626' : '#0284c7'} />

    <line
      x1={LEVEL_X - 45}
      x2={LEVEL_X + 45}
      y1={point.y}
      y2={point.y}
      stroke="#0f766e"
      stroke-width="5"
    />
    <text
      x={LEVEL_X}
      y={point.y < MID ? point.y - 16 : point.y + 26}
      text-anchor="middle"
      font-size="12"
      font-weight="600"
      fill="#115e59"
    >
      Sản phẩm
    </text>
    <circle
      class="drag-handle"
      cx={point.x}
      cy={point.y}
      r="10"
      fill="#0f766e"
      stroke="#fff"
      stroke-width="2"
      style="cursor:grab"
      role="slider"
      tabindex="0"
      aria-label="Mức sản phẩm so với chất đầu"
      aria-valuemin={-LIMIT}
      aria-valuemax={LIMIT}
      aria-valuenow={drawn}
      aria-valuetext="{signedText(drawn)} kJ"
      use:draggable={{
        point,
        svg: () => svgEl ?? null,
        viewBox: { w: W, h: H },
        pad: 0,
        projector: project,
        keyStep: STEP * SCALE,
        keyShiftStep: 4 * STEP * SCALE,
        onChange: () => (verdict = null),
      }}
    />
  </svg>

  <p class="text-sm text-slate-600" aria-live="polite">{live}</p>

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    {#if solved}
      <button type="button" class={button.secondary} onclick={next}>Phản ứng tiếp theo</button>
    {/if}
  </div>

  {#if solved}
    <div class="space-y-2 rounded-xl border border-slate-200 p-3">
      <SliderField
        label="Lượng chất phản ứng ({r.per})"
        bind:value={moles}
        min={0.5}
        max={3}
        step={0.5}
      />
      <p class="text-sm font-semibold text-slate-700" aria-live="polite">
        <LiveRichText
          text={`Nhiệt lượng ${r.dH < 0 ? 'toả ra' : 'cần cung cấp'}: $${numTex(moles)} \\cdot ${numTex(Math.abs(r.dH))} = ${numTex(heat)}$ kJ.`}
        />
      </p>
    </div>
  {/if}
</div>
