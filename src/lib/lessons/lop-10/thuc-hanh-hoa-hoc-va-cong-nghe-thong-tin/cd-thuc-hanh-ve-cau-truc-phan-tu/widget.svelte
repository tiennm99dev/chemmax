<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { atomColor, bondSegments, covalentRadius } from '#lib/domain/molecule.js';
  import { clampPitch, turnByKey, viewPoint, wrapYaw } from '#lib/geom-engine/solid.js';
  import { clientToSvg } from '#lib/utils/svg.js';
  import {
    MODELS,
    centroid,
    fitScale,
    measure,
    nearestAtom,
    togglePick,
  } from '../_shared/molecule-3d.js';

  const W = 340;
  const MID = W / 2;
  const TAP_REACH = 22;
  const TAP_SLOP = 5;
  const FLAT_VIEW = { yaw: 0, pitch: 90 };
  const MODE_OPTIONS = [
    { value: '3d', label: 'Mô hình 3D' },
    { value: '2d', label: 'Công thức 2D' },
  ];
  const MOLECULE_OPTIONS = MODELS.map((m) => ({ value: m.id, label: m.name }));

  let id = $state('ch4');
  let mode = $state(/** @type {'3d' | '2d'} */ ('3d'));
  let view = $state({ yaw: 25, pitch: 15 });
  /** @type {number[]} */
  let picked = $state([]);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  /** @type {{ x: number, y: number, moved: boolean } | null} */
  let press = null;

  const m = $derived(MODELS.find((x) => x.id === id) ?? MODELS[0]);
  const source = $derived(mode === '3d' ? m.solid : m.flat);
  const scale = $derived(fitScale(source, MID - 34));
  const center = $derived(centroid(source));
  const shown = $derived(mode === '3d' ? view : FLAT_VIEW);

  const atoms = $derived(
    source.map((p, i) => {
      const v = viewPoint(
        { x: (p.x - center.x) * scale, y: (p.y - center.y) * scale, z: (p.z - center.z) * scale },
        shown,
      );
      return {
        i,
        el: m.els[i],
        x: MID + v.x,
        y: MID + v.y,
        depth: v.depth,
        r: Math.max(9, scale * (0.14 + 0.2 * covalentRadius(m.els[i]))),
      };
    }),
  );

  /** Atoms and bonds drawn far to near, so nearer ones cover farther ones. */
  const parts = $derived(
    [
      ...m.bonds.map((b, i) => ({
        kind: /** @type {const} */ ('bond'),
        key: `b${i}`,
        depth: (atoms[b.a].depth + atoms[b.b].depth) / 2 - 0.5,
        segments: bondSegments(atoms[b.a], atoms[b.b], b.order, 7),
      })),
      ...atoms.map((a) => ({
        kind: /** @type {const} */ ('atom'),
        key: `a${a.i}`,
        depth: a.depth,
        atom: a,
      })),
    ].sort((p, q) => p.depth - q.depth),
  );

  /** Labels sit above the ruler; an atom hidden behind a nearer ball shows none. */
  const visibleLabels = $derived(
    atoms.filter(
      (a) =>
        !atoms.some(
          (other) =>
            other.depth > a.depth && Math.hypot(other.x - a.x, other.y - a.y) < other.r - 2,
        ),
    ),
  );

  const ruler = $derived(
    picked.slice(1).map((atom, k) => ({ from: atoms[picked[k]], to: atoms[atom] })),
  );
  const here = $derived(measure(m, mode, picked));
  const solid = $derived(measure(m, '3d', picked));
  const flat = $derived(measure(m, '2d', picked));

  const len = (/** @type {number} */ v) => formatNumber(v, 2);
  const deg = (/** @type {number} */ v) => formatNumber(v, 1);

  const result = $derived.by(() => {
    if (here.kind === 'length') {
      return here.bonded
        ? `Độ dài liên kết ${here.name} = ${len(here.value)} Å.`
        : `Hai nguyên tử ${m.els[picked[0]]} và ${m.els[picked[1]]} không liên kết trực tiếp, chúng cách nhau ${len(here.value)} Å.`;
    }
    if (here.kind === 'angle') {
      return here.bonded
        ? `Góc liên kết ${here.name} = ${deg(here.value)}°.`
        : `Góc ${here.name} = ${deg(here.value)}°, nhưng đây không phải góc liên kết vì có cặp nguyên tử không liên kết với nhau.`;
    }
    if (picked.length === 1) {
      return `Đã chọn nguyên tử ${m.els[picked[0]]}. Chọn thêm một nguyên tử để đo độ dài.`;
    }
    return m.tip;
  });

  const warning = $derived.by(() => {
    if (mode !== '2d' || here.kind === 'none') return '';
    if (here.kind === 'angle' && Math.abs(flat.value - solid.value) > 3) {
      return `Trên hình phẳng đo được ${deg(flat.value)}°, còn trong phân tử thật là ${deg(solid.value)}°. Công thức cấu tạo chỉ cho biết nguyên tử nào liên kết với nguyên tử nào, không cho biết góc thật.`;
    }
    if (here.kind === 'length' && Math.abs(flat.value - solid.value) > 0.15) {
      return `Trên hình phẳng đo được ${len(flat.value)} Å, còn trong phân tử thật là ${len(solid.value)} Å.`;
    }
    return '';
  });

  /** @param {string | number} next */
  function changeMolecule(next) {
    id = String(next);
    picked = [];
  }

  /** @param {number} atom */
  function pick(atom) {
    picked = togglePick(picked, atom);
  }

  /** @param {PointerEvent} e */
  function down(e) {
    press = { x: e.clientX, y: e.clientY, moved: false };
    /** @type {SVGSVGElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
  }

  /** @param {PointerEvent} e */
  function moveView(e) {
    if (!press) return;
    const dx = e.clientX - press.x;
    const dy = e.clientY - press.y;
    if (!press.moved && Math.hypot(dx, dy) < TAP_SLOP) return;
    press = { x: e.clientX, y: e.clientY, moved: true };
    if (mode !== '3d') return;
    view = { yaw: wrapYaw(view.yaw - dx * 0.6), pitch: clampPitch(view.pitch + dy * 0.6, -80) };
  }

  /** @param {PointerEvent} e */
  function up(e) {
    const tapped = press && !press.moved;
    press = null;
    if (!tapped || !svgEl) return;
    const p = clientToSvg(svgEl, e.clientX, e.clientY, W, W);
    const atom = nearestAtom(atoms, p.x, p.y, TAP_REACH);
    if (atom >= 0) pick(atom);
  }

  /** @param {KeyboardEvent} e */
  function key(e) {
    if (mode !== '3d') return;
    const next = turnByKey(view, e.key, e.shiftKey, -80);
    if (!next) return;
    e.preventDefault();
    view = next;
  }
</script>

<div class="space-y-3">
  <label class="block max-w-xs text-sm font-semibold text-slate-700">
    Phân tử
    <select
      class="mt-1 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 {focusRing}"
      value={id}
      onchange={(e) => changeMolecule(e.currentTarget.value)}
    >
      {#each MOLECULE_OPTIONS as o (o.value)}
        <option value={o.value}>{o.label}</option>
      {/each}
    </select>
  </label>

  <SegmentedControl label="Cách biểu diễn" options={MODE_OPTIONS} bind:value={mode} />

  <p class="text-sm text-slate-700">
    <ChemFormula formula={m.formula} class="font-semibold" /> · Dạng hình học: {m.shape}.
  </p>

  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {W}"
    class="mx-auto block w-full max-w-sm rounded-xl bg-slate-50 select-none {focusRing}"
    style:touch-action="none"
    role="slider"
    tabindex="0"
    aria-valuemin="-180"
    aria-valuemax="180"
    aria-valuenow={Math.round(shown.yaw)}
    aria-valuetext={mode === '3d'
      ? `Đã xoay ${Math.round(view.yaw)} độ`
      : 'Công thức phẳng, không xoay được'}
    aria-label="Phân tử {m.name}. Kéo hoặc dùng phím mũi tên để xoay; chạm nguyên tử, hoặc dùng các nút bên dưới, để đo."
    onpointerdown={down}
    onpointermove={moveView}
    onpointerup={up}
    onpointercancel={() => (press = null)}
    onkeydown={key}
  >
    {#each parts as part (part.key)}
      {#if part.kind === 'bond'}
        {#each part.segments as s, k (k)}
          <line
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke="#475569"
            stroke-width="4"
            stroke-linecap="round"
          />
        {/each}
      {:else}
        {@const a = part.atom}
        {@const order = picked.indexOf(a.i)}
        <circle
          cx={a.x}
          cy={a.y}
          r={a.r}
          fill={atomColor(a.el)}
          stroke={order >= 0 ? '#4f46e5' : '#334155'}
          stroke-width={order >= 0 ? 4 : 1.5}
        />
      {/if}
    {/each}
    {#each ruler as r, k (k)}
      <line
        x1={r.from.x}
        y1={r.from.y}
        x2={r.to.x}
        y2={r.to.y}
        stroke="#4f46e5"
        stroke-width="2.5"
        stroke-dasharray="6 4"
      />
    {/each}
    {#each visibleLabels as a (a.i)}
      <text
        x={a.x}
        y={a.y + 4}
        text-anchor="middle"
        font-size="12"
        font-weight="700"
        fill={a.el === 'H' || a.el === 'S' ? '#0f172a' : '#fff'}
      >
        {a.el}
      </text>
    {/each}
  </svg>
  <p class="text-center text-xs text-slate-600">
    {mode === '3d'
      ? 'Kéo để xoay, chạm nguyên tử để đo. Hai nguyên tử: độ dài. Ba nguyên tử: góc tại nguyên tử giữa.'
      : 'Hình phẳng không xoay được. Chạm nguyên tử để đo thử.'}
  </p>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nguyên tử để đo">
    {#each m.els as el, i (i)}
      <button
        type="button"
        class="min-h-11 min-w-11 rounded-lg border px-2 text-sm font-semibold {focusRing} {picked.includes(
          i,
        )
          ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
          : 'border-slate-300 bg-white text-slate-700'}"
        aria-pressed={picked.includes(i)}
        aria-label="Nguyên tử {el} số {i + 1}"
        onclick={() => pick(i)}
      >
        {el}<sub>{i + 1}</sub>
      </button>
    {/each}
    <button type="button" class={button.quiet} onclick={() => (picked = [])}>Xoá phép đo</button>
  </div>

  <FeedbackNote tone={here.kind === 'none' ? 'info' : 'ok'} text={result} />
  {#if warning}
    <FeedbackNote tone="warn" text={warning} />
  {/if}
</div>
