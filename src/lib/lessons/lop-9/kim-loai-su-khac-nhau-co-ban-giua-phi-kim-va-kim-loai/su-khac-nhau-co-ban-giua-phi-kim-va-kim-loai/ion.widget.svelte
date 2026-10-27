<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '../_shared/equation-line.svelte';
  import { METAL_LOSS, NONMETAL_OUTER, compound, gain, ionText, transfer } from './engine.js';

  /** @typedef {import('./engine.js').MetalId} MetalId */
  /** @typedef {import('./engine.js').NonmetalId} NonmetalId */

  /** @type {MetalId} */
  let metal = $state('Na');
  /** @type {NonmetalId} */
  let nonmetal = $state('Cl');
  let steps = $state(0);

  const c = $derived(compound(metal, nonmetal));
  const t = $derived(transfer(metal, nonmetal, steps));
  const lose = $derived(METAL_LOSS[metal]);
  const take = $derived(gain(nonmetal));

  const METAL_OPTIONS = Object.keys(METAL_LOSS).map((m) => ({ value: m, label: m }));
  const NONMETAL_OPTIONS = Object.keys(NONMETAL_OUTER).map((n) => ({ value: n, label: n }));

  const W = 360;
  /** @param {number} i @param {number} count */
  const xAt = (i, count) => (W / (count + 1)) * (i + 1);
  const MY = 62;
  const NY = 168;
  const R = 22;

  /**
   * Dots on the outer shell of an atom.
   * @param {number} cx @param {number} cy @param {number} count
   */
  function shell(cx, cy, count) {
    return Array.from({ length: count }, (_, k) => {
      const a = (Math.PI * 2 * k) / Math.max(count, 1) - Math.PI / 2;
      return { x: cx + (R + 9) * Math.cos(a), y: cy + (R + 9) * Math.sin(a) };
    });
  }

  function reset() {
    steps = 0;
  }

  const last = $derived(t.moves.length ? t.moves[t.moves.length - 1] : null);
  const tone = $derived(t.done ? 'ok' : 'info');
  const note = $derived(
    t.done
      ? `Xong! Mỗi nguyên tử ${metal} nhường ${lose} electron thành ion dương ${ionText(metal, lose)}; mỗi nguyên tử ${nonmetal} nhận ${take} electron thành ion âm ${ionText(nonmetal, -take)}. Các ion trái dấu hút nhau tạo thành ${c.formula}.`
      : steps === 0
        ? `Nguyên tử ${metal} có ${lose} electron lớp ngoài cùng, nguyên tử ${nonmetal} có ${NONMETAL_OUTER[nonmetal]}. Bấm “Chuyển 1 electron” để kim loại nhường electron cho phi kim.`
        : `Đã chuyển ${steps}/${c.electrons} electron. Nguyên tử ${metal} thứ ${(last?.[0] ?? 0) + 1} vừa nhường 1 electron cho nguyên tử ${nonmetal} thứ ${(last?.[1] ?? 0) + 1}.`,
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Kim loại"
      options={METAL_OPTIONS}
      bind:value={metal}
      onchange={reset}
    />
    <SegmentedControl
      label="Phi kim"
      options={NONMETAL_OPTIONS}
      bind:value={nonmetal}
      onchange={reset}
    />
  </div>

  <svg
    viewBox="0 0 {W} 230"
    class="mx-auto block h-auto w-full max-w-md"
    role="img"
    aria-label="{c.metals} nguyên tử {metal} ở trên, {c.nonmetals} nguyên tử {nonmetal} ở dưới. Đã chuyển {steps} trên {c.electrons} electron."
  >
    {#each t.moves as [i, j], k (k)}
      <line
        x1={xAt(i, c.metals)}
        y1={MY + R}
        x2={xAt(j, c.nonmetals)}
        y2={NY - R}
        stroke="#a5b4fc"
        stroke-width="1.5"
        stroke-dasharray="4 3"
      />
    {/each}
    {#each t.lost as l, i (i)}
      {@const cx = xAt(i, c.metals)}
      <circle
        {cx}
        cy={MY}
        r={R}
        fill={l === lose ? '#fde68a' : '#fef3c7'}
        stroke="#b45309"
        stroke-width="2"
      />
      <text x={cx} y={MY + 5} text-anchor="middle" font-size="15" font-weight="700" fill="#78350f"
        >{l === lose ? ionText(metal, lose) : metal}</text
      >
      {#each shell(cx, MY, lose - l) as d, k (k)}
        <circle cx={d.x} cy={d.y} r="4" fill="#0f172a" />
      {/each}
    {/each}
    {#each t.gained as g, j (j)}
      {@const cx = xAt(j, c.nonmetals)}
      {@const own = NONMETAL_OUTER[nonmetal]}
      <circle
        {cx}
        cy={NY}
        r={R}
        fill={g === take ? '#bfdbfe' : '#e0f2fe'}
        stroke="#1d4ed8"
        stroke-width="2"
      />
      <text x={cx} y={NY + 5} text-anchor="middle" font-size="15" font-weight="700" fill="#1e3a8a"
        >{g === take ? ionText(nonmetal, -take) : nonmetal}</text
      >
      {#each shell(cx, NY, own + g) as d, k (k)}
        <circle cx={d.x} cy={d.y} r="4" fill={k >= own ? '#4f46e5' : '#0f172a'} />
      {/each}
    {/each}
    <text x="6" y="16" font-size="11" fill="#475569">Kim loại (nhường electron)</text>
    <text x="6" y="224" font-size="11" fill="#475569">Phi kim (nhận electron, chấm tím)</text>
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={t.done} onclick={() => (steps += 1)}>
      Chuyển 1 electron
    </button>
    <button type="button" class={button.quiet} disabled={steps === 0} onclick={reset}
      >Làm lại</button
    >
  </div>

  {#if t.done}
    <div class="rounded-xl bg-slate-50 p-3 text-base">
      <p class="mb-1 text-sm font-semibold text-slate-600">Phương trình hoá học (t°)</p>
      <EquationLine text={c.equation} />
    </div>
  {/if}

  <FeedbackNote {tone} text={note} />
</div>
