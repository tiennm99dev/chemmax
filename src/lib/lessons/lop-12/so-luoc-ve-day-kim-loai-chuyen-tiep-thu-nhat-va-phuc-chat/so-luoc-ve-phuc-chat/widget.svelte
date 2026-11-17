<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import { viewPoint } from '#lib/geom-engine/solid.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import {
    CENTRES,
    GEOMETRIES,
    KNOWN,
    LIGANDS,
    centre,
    formulaTex,
    ligand,
  } from '../_shared/complexes.js';
  import {
    POSITIONS,
    TARGETS,
    bondAngle,
    buildCharge,
    buildFormula,
    judgeBuild,
    outlineEdges,
  } from './engine.js';

  /** @typedef {import('../_shared/complexes.js').Geometry} Geometry */

  const MODES = [
    { value: 'tu-do', label: 'Dựng tự do' },
    { value: 'thu-thach', label: 'Dựng theo công thức' },
  ];
  const geometryOptions = Object.entries(GEOMETRIES).map(([value, g]) => ({
    value,
    label: `${g.name} (${g.count})`,
  }));

  let mode = $state('tu-do');
  let centreId = $state('Co3');
  let ligandId = $state('NH3');
  let geometry = $state(/** @type {Geometry} */ ('bat-dien'));
  let view = $state({ yaw: 25, pitch: 20 });

  let round = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let right = $state(0);
  let tries = $state(0);
  const target = $derived(TARGETS[round % TARGETS.length]);

  const build = $derived({ centre: centreId, ligand: ligandId, geometry });
  const formula = $derived(buildFormula(build));
  const charge = $derived(buildCharge(build));
  const c = $derived(centre(centreId));
  const L = $derived(ligand(ligandId));

  const W = 320;
  const R = 110;
  /** @param {{ x: number, y: number, z: number }} p */
  const toScreen = (p) => {
    const v = viewPoint({ x: p.x * R, y: p.y * R, z: p.z * R }, view);
    return { x: W / 2 + v.x, y: W / 2 + v.y, depth: v.depth };
  };
  const ligands = $derived(
    POSITIONS[geometry]
      .map((p, i) => ({ i, s: toScreen(p) }))
      .sort((a, b) => a.s.depth - b.s.depth),
  );
  const edges = $derived(
    outlineEdges(geometry).map(([i, j]) => [
      toScreen(POSITIONS[geometry][i]),
      toScreen(POSITIONS[geometry][j]),
    ]),
  );
  const centreScreen = $derived(toScreen({ x: 0, y: 0, z: 0 }));
  /** Arrow from a ligand towards the centre, stopping short of the centre ball. */
  const arrows = $derived(
    POSITIONS[geometry].map((p) => {
      const from = toScreen({ x: p.x * 0.8, y: p.y * 0.8, z: p.z * 0.8 });
      const to = toScreen({ x: p.x * 0.3, y: p.y * 0.3, z: p.z * 0.3 });
      return { from, to };
    }),
  );

  function changed() {
    verdict = null;
  }

  function check() {
    verdict = judgeBuild(target, build);
    tries += 1;
    if (verdict.ok) right += 1;
  }

  function next() {
    round += 1;
    verdict = null;
  }

  /** @param {string | number} next */
  function switchMode(next) {
    mode = String(next);
    verdict = null;
  }

  /** @param {number} q */
  const chargeText = (q) => (q === 0 ? '0' : q > 0 ? `+${q}` : `−${-q}`);

  const note = $derived.by(() => {
    if (mode === 'thu-thach' && verdict)
      return {
        tone: verdict.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
        text: verdict.text,
      };
    if (mode === 'thu-thach')
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Chọn ion trung tâm, phối tử và dạng hình học để dựng đúng phức chất ở trên, rồi bấm Kiểm tra.',
      };
    const n = GEOMETRIES[geometry].count;
    const known = KNOWN.find((k) => k.formula === formula);
    const real = !known
      ? ' Tổ hợp tự do này dùng để luyện cách tính: không phải tổ hợp ion trung tâm – phối tử – dạng hình học nào cũng là một phức chất có thật.'
      : known.geometry === geometry
        ? ` Phức chất $${formulaTex(formula)}$ có thật và đúng có dạng ${GEOMETRIES[geometry].name}.`
        : ` Thực tế, phức chất $${formulaTex(formula)}$ có dạng ${GEOMETRIES[known.geometry].name}.`;
    return {
      tone: /** @type {const} */ ('info'),
      text: `Mỗi phối tử $${formulaTex(L.ion)}$ cho một cặp electron chưa liên kết của nguyên tử ${L.donor} vào orbital trống của $\\mathrm{${c.symbol}^{${c.charge}+}}$: ${n} liên kết cho – nhận (mũi tên). Điện tích phức chất: $${c.charge} + ${n} \\cdot (${L.charge}) = ${charge}$. Dạng ${GEOMETRIES[geometry].name}, góc giữa hai phối tử cạnh nhau ${formatNumber(bondAngle(geometry), 1)}°.${real}`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={switchMode} />

  {#if mode === 'thu-thach'}
    <div
      class="flex flex-wrap items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/50 p-3"
    >
      <span class="text-sm text-slate-600">Hãy dựng:</span>
      <ChemFormula formula={target.formula} class="text-lg font-bold" />
      <span class="ml-auto text-sm text-slate-600">Đúng {right}/{tries} lần kiểm tra</span>
    </div>
  {/if}

  <div class="grid gap-4 sm:grid-cols-[1fr_minmax(0,20rem)]">
    <div class="space-y-3">
      <div role="group" aria-label="Ion trung tâm" class="space-y-1">
        <p class="text-sm font-semibold text-slate-700">Ion trung tâm</p>
        <div class="flex flex-wrap gap-2">
          {#each CENTRES as ce (ce.id)}
            <button
              type="button"
              class={centreId === ce.id ? button.primary : button.quiet}
              aria-pressed={centreId === ce.id}
              onclick={() => {
                centreId = ce.id;
                changed();
              }}><ChemFormula formula={`${ce.symbol}^${ce.charge}+`} /></button
            >
          {/each}
        </div>
      </div>
      <div role="group" aria-label="Phối tử" class="space-y-1">
        <p class="text-sm font-semibold text-slate-700">Phối tử</p>
        <div class="flex flex-wrap gap-2">
          {#each LIGANDS as l (l.id)}
            <button
              type="button"
              class={ligandId === l.id ? button.primary : button.quiet}
              aria-pressed={ligandId === l.id}
              onclick={() => {
                ligandId = l.id;
                changed();
              }}><ChemFormula formula={l.ion} /></button
            >
          {/each}
        </div>
      </div>
      <SegmentedControl
        label="Dạng hình học (số phối tử)"
        options={geometryOptions}
        bind:value={geometry}
        onchange={changed}
      />
      <p class="text-base">
        Công thức: <ChemFormula {formula} class="font-bold" /> · điện tích {chargeText(charge)}
      </p>
      {#if mode === 'thu-thach'}
        <div class="flex flex-wrap gap-2">
          <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
          {#if verdict?.ok}
            <button type="button" class={button.secondary} onclick={next}>Phức chất khác</button>
          {/if}
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
      aria-label="Mô hình phức chất {prettyFormula(formula)}, dạng {GEOMETRIES[geometry]
        .name}: ion trung tâm {c.symbol} và {GEOMETRIES[geometry]
        .count} phối tử. Kéo hoặc dùng phím mũi tên để xoay."
      use:turnSolid={{ view: () => view, onturn: (v) => (view = v) }}
    >
      <svg viewBox="0 0 {W} {W}" class="block w-full" aria-hidden="true">
        <defs>
          <marker
            id="donate"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#334155" />
          </marker>
        </defs>
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
        {#each ligands as l (l.i)}
          {@const behind = l.s.depth < 0}
          {#if behind}
            <line
              x1={centreScreen.x}
              y1={centreScreen.y}
              x2={l.s.x}
              y2={l.s.y}
              stroke="#94a3b8"
              stroke-width="3"
            />
            <line
              x1={arrows[l.i].from.x}
              y1={arrows[l.i].from.y}
              x2={arrows[l.i].to.x}
              y2={arrows[l.i].to.y}
              stroke="#334155"
              stroke-width="1.5"
              marker-end="url(#donate)"
            />
            <circle cx={l.s.x} cy={l.s.y} r="17" fill={L.colour} opacity="0.75" />
            <text
              x={l.s.x}
              y={l.s.y + 4}
              text-anchor="middle"
              font-size="11"
              font-weight="700"
              fill="#fff">{L.donor}</text
            >
          {/if}
        {/each}
        <circle
          cx={centreScreen.x}
          cy={centreScreen.y}
          r="26"
          fill="#a16207"
          stroke="#713f12"
          stroke-width="2"
        />
        <text
          x={centreScreen.x}
          y={centreScreen.y + 5}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill="#fff">{c.symbol}</text
        >
        {#each ligands as l (l.i)}
          {#if l.s.depth >= 0}
            <line
              x1={arrows[l.i].to.x}
              y1={arrows[l.i].to.y}
              x2={l.s.x}
              y2={l.s.y}
              stroke="#64748b"
              stroke-width="3"
            />
            <line
              x1={arrows[l.i].from.x}
              y1={arrows[l.i].from.y}
              x2={arrows[l.i].to.x}
              y2={arrows[l.i].to.y}
              stroke="#0f172a"
              stroke-width="1.5"
              marker-end="url(#donate)"
            />
            <circle
              cx={l.s.x}
              cy={l.s.y}
              r="19"
              fill={L.colour}
              stroke="#1e293b"
              stroke-width="1"
            />
            <text
              x={l.s.x}
              y={l.s.y + 4}
              text-anchor="middle"
              font-size="12"
              font-weight="700"
              fill="#fff">{L.donor}</text
            >
          {/if}
        {/each}
      </svg>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
