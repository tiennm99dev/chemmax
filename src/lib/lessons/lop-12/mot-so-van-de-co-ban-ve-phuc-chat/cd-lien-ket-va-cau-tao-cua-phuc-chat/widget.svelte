<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Tex from '#lib/components/tex.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import { viewPoint } from '#lib/geom-engine/solid.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { formulaTex } from '../_shared/complex-data.js';
  import {
    COMPLEXES,
    HYBRIDS,
    ISOMER_SETS,
    POSITIONS,
    SHAPE_NAMES,
    configTex,
    isomerOf,
    orbitals,
    outlineEdges,
  } from './engine.js';

  /** @typedef {import('./engine.js').Shape} Shape */
  /** @typedef {import('./engine.js').Row} Row */

  const MODES = [
    { value: 'lai-hoa', label: 'Lai hoá' },
    { value: 'dong-phan', label: 'Đồng phân' },
  ];
  const DONOR_COLOUR = /** @type {Record<string, string>} */ ({
    N: '#3b82f6',
    O: '#ef4444',
    Cl: '#16a34a',
    F: '#0d9488',
    C: '#475569',
  });

  let mode = $state('lai-hoa');
  let index = $state(3);
  let setId = $state('MA2B2');
  /** @type {number[]} */
  let picked = $state([0, 1]);
  let view = $state({ yaw: 25, pitch: 20 });

  const complex = $derived(COMPLEXES[index]);
  const hybrid = $derived(HYBRIDS[complex.hybrid]);
  const boxes = $derived(orbitals(complex));
  const set = $derived(ISOMER_SETS.find((s) => s.id === setId) ?? ISOMER_SETS[0]);

  const shape = $derived(/** @type {Shape} */ (mode === 'lai-hoa' ? hybrid.shape : set.shape));
  const centreSymbol = $derived(mode === 'lai-hoa' ? complex.ion.replace(/\^.*/, '') : set.centre);
  /** Label and colour of the donor atom at each position. */
  const atoms = $derived(
    POSITIONS[shape].map((_, i) => {
      if (mode === 'lai-hoa') return { label: complex.donor, colour: DONOR_COLOUR[complex.donor] };
      const isB = picked.includes(i);
      return isB
        ? { label: 'Cl', colour: DONOR_COLOUR.Cl }
        : { label: 'N', colour: DONOR_COLOUR.N };
    }),
  );

  const W = 320;
  const R = 105;
  /** @param {{ x: number, y: number, z: number }} p */
  const toScreen = (p) => {
    const v = viewPoint({ x: p.x * R, y: p.y * R, z: p.z * R }, view);
    return { x: W / 2 + v.x, y: W / 2 + v.y, depth: v.depth };
  };
  const placed = $derived(
    POSITIONS[shape].map((p, i) => ({ i, s: toScreen(p) })).sort((a, b) => a.s.depth - b.s.depth),
  );
  const edges = $derived(
    outlineEdges(shape).map(([i, j]) => [
      toScreen(POSITIONS[shape][i]),
      toScreen(POSITIONS[shape][j]),
    ]),
  );
  const middle = $derived(toScreen({ x: 0, y: 0, z: 0 }));

  /** @param {Row} row */
  const rowLabel = (row) =>
    `${row.label}: ${row.boxes
      .map((b) =>
        b.ligand
          ? 'cặp electron của phối tử'
          : b.e === 2
            ? 'cặp electron'
            : b.e === 1
              ? '1 electron'
              : 'trống',
      )
      .join(', ')}`;

  /** @param {string | number} next */
  function switchMode(next) {
    mode = String(next);
  }

  /** @param {number} i */
  function toggle(i) {
    if (picked.includes(i)) picked = picked.filter((x) => x !== i);
    else if (picked.length < 2) picked = [...picked, i];
    else picked = [picked[1], i];
  }

  /** @param {string | number} id */
  function switchSet(id) {
    setId = String(id);
    picked = [0, 1];
  }

  const isomer = $derived(isomerOf(set.shape, picked));
  const isomerFormula = $derived(set.id === 'MA2B2' ? '[PtCl2(NH3)2]' : '[CoCl2(NH3)4]^+');

  const note = $derived.by(() => {
    if (mode === 'dong-phan') {
      if (isomer.kind === null)
        return {
          tone: /** @type {const} */ ('info'),
          text: `Chọn đúng 2 vị trí cho hai phối tử $\\mathrm{Cl^-}$ (đang chọn ${picked.length}).`,
        };
      const extra =
        set.id === 'MA2B2'
          ? isomer.kind === 'cis'
            ? ' Đồng phân cis này là cisplatin, một thuốc chữa ung thư.'
            : ' Đồng phân trans không có tác dụng chữa ung thư như cisplatin.'
          : '';
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Hai phối tử $\\mathrm{Cl^-}$ tạo với nguyên tử trung tâm góc ${isomer.angle}°: đồng phân ${isomer.kind}-$${formulaTex(isomerFormula)}$ (${isomer.kind === 'cis' ? 'hai Cl cùng phía, kề nhau' : 'hai Cl ở hai phía đối diện'}). Mọi cách đặt khác chỉ là xoay của một trong hai đồng phân này.${extra}`,
      };
    }
    const inner = hybrid.d > 0;
    const outer = hybrid.outerD > 0;
    const used = [
      hybrid.d ? `${hybrid.d} orbital ${complex.n}d` : '',
      `1 orbital ${complex.n + 1}s`,
      `${hybrid.p} orbital ${complex.n + 1}p`,
      outer ? `${hybrid.outerD} orbital ${complex.n + 1}d` : '',
    ]
      .filter(Boolean)
      .join(', ');
    const pairing =
      inner && boxes.unpaired < boxes.unpairedFree
        ? ` Để giải phóng orbital ${complex.n}d trống, các electron ${complex.n}d dồn lại ghép đôi (số electron độc thân giảm từ ${boxes.unpairedFree} xuống ${boxes.unpaired}).`
        : '';
    return {
      tone: /** @type {const} */ ('info'),
      text: `Ion $${formulaTex(complex.ion)}$ ($${configTex(complex)}$) dùng ${used} trống lai hoá $${hybrid.tex}$, tạo ${boxes.ligands} orbital lai hoá hướng về các đỉnh của hình ${SHAPE_NAMES[hybrid.shape]}.${pairing} Mỗi phối tử $${formulaTex(complex.ligand)}$ cho một cặp electron của nguyên tử ${complex.donor} vào một orbital lai hoá. Phức chất có ${boxes.unpaired} electron độc thân.`,
    };
  });
</script>

{#snippet orbitalRows(/** @type {Row[]} */ rows, /** @type {string} */ title)}
  <div class="space-y-1">
    <p class="text-sm font-semibold text-slate-700">{title}</p>
    <div class="flex flex-wrap items-end gap-x-3 gap-y-2">
      {#each rows as row (row.label)}
        <div role="img" aria-label={rowLabel(row)}>
          <div class="flex" aria-hidden="true">
            {#each row.boxes as b, i (i)}
              <span
                class="-ml-px flex h-9 w-8 items-center justify-center border text-sm font-bold first:ml-0 {b.ligand
                  ? 'border-indigo-500 bg-indigo-100 text-indigo-700'
                  : 'border-slate-400 bg-white text-slate-800'}"
                >{b.ligand ? '↑↓' : b.e === 2 ? '↑↓' : b.e === 1 ? '↑' : ''}</span
              >
            {/each}
          </div>
          <p class="text-center text-xs text-slate-600" aria-hidden="true">{row.label}</p>
        </div>
      {/each}
    </div>
  </div>
{/snippet}

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={switchMode} />

  <div class="grid gap-4 sm:grid-cols-[1fr_minmax(0,18rem)]">
    <div class="min-w-0 space-y-3">
      {#if mode === 'lai-hoa'}
        <div role="group" aria-label="Phức chất" class="flex flex-wrap gap-2">
          {#each COMPLEXES as c, i (c.formula)}
            <button
              type="button"
              class={index === i ? button.primary : button.quiet}
              aria-pressed={index === i}
              onclick={() => (index = i)}><ChemFormula formula={c.formula} /></button
            >
          {/each}
        </div>
        <p class="text-base">
          <ChemFormula formula={complex.formula} class="font-bold" />: lai hoá
          <Tex math={hybrid.tex} />, dạng {SHAPE_NAMES[hybrid.shape]}
        </p>
        {@render orbitalRows(boxes.free, `Ion ${prettyFormula(complex.ion)} tự do`)}
        {@render orbitalRows(
          boxes.bound,
          'Trong phức chất (ô xanh: orbital lai hoá nhận cặp electron của phối tử)',
        )}
      {:else}
        <SegmentedControl
          label="Kiểu phức chất"
          options={ISOMER_SETS.map((s) => ({ value: s.id, label: s.label }))}
          bind:value={setId}
          onchange={switchSet}
        />
        <p class="text-sm text-slate-700">
          <ChemFormula formula={isomerFormula} class="font-semibold" />: chọn 2 vị trí đặt phối tử
          Cl (các vị trí còn lại là NH₃).
        </p>
        <div role="group" aria-label="Vị trí của phối tử Cl" class="flex flex-wrap gap-2">
          {#each POSITIONS[set.shape].map((_, k) => k) as i (i)}
            <button
              type="button"
              class={picked.includes(i) ? button.primary : button.quiet}
              aria-pressed={picked.includes(i)}
              onclick={() => toggle(i)}>Vị trí {i + 1}</button
            >
          {/each}
        </div>
      {/if}
    </div>

    <div
      class="mx-auto w-full max-w-xs touch-none rounded-xl bg-slate-50 select-none {focusRing}"
      role="slider"
      tabindex="0"
      aria-valuemin="-180"
      aria-valuemax="180"
      aria-valuenow={Math.round(view.yaw)}
      aria-valuetext="Đã xoay {Math.round(view.yaw)} độ"
      aria-label="Mô hình dạng {SHAPE_NAMES[
        shape
      ]}: nguyên tử trung tâm {centreSymbol} và {POSITIONS[shape].length} nguyên tử cho {atoms
        .map((a) => a.label)
        .join(', ')}. Kéo hoặc dùng phím mũi tên để xoay."
      use:turnSolid={{ view: () => view, onturn: (v) => (view = v) }}
    >
      <svg viewBox="0 0 {W} {W}" class="block w-full" aria-hidden="true">
        {#each edges as [a, b], i (i)}
          <line
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#cbd5e1"
            stroke-width="1.5"
            stroke-dasharray="4 4"
          />
        {/each}
        {#each placed as p (p.i)}
          {#if p.s.depth < 0}
            <line
              x1={middle.x}
              y1={middle.y}
              x2={p.s.x}
              y2={p.s.y}
              stroke="#94a3b8"
              stroke-width="3"
            />
            <circle cx={p.s.x} cy={p.s.y} r="17" fill={atoms[p.i].colour} opacity="0.75" />
            <text
              x={p.s.x}
              y={p.s.y + 4}
              text-anchor="middle"
              font-size="11"
              font-weight="700"
              fill="#fff"
              >{mode === 'dong-phan' ? `${atoms[p.i].label}${p.i + 1}` : atoms[p.i].label}</text
            >
          {/if}
        {/each}
        <circle
          cx={middle.x}
          cy={middle.y}
          r="24"
          fill="#a16207"
          stroke="#713f12"
          stroke-width="2"
        />
        <text
          x={middle.x}
          y={middle.y + 5}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill="#fff">{centreSymbol}</text
        >
        {#each placed as p (p.i)}
          {#if p.s.depth >= 0}
            <line
              x1={middle.x}
              y1={middle.y}
              x2={p.s.x}
              y2={p.s.y}
              stroke="#64748b"
              stroke-width="3"
            />
            <circle
              cx={p.s.x}
              cy={p.s.y}
              r="19"
              fill={atoms[p.i].colour}
              stroke="#1e293b"
              stroke-width="1"
            />
            <text
              x={p.s.x}
              y={p.s.y + 4}
              text-anchor="middle"
              font-size="11"
              font-weight="700"
              fill="#fff"
              >{mode === 'dong-phan' ? `${atoms[p.i].label}${p.i + 1}` : atoms[p.i].label}</text
            >
          {/if}
        {/each}
      </svg>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
