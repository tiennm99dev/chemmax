<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import { viewPoint } from '#lib/geom-engine/solid.js';
  import { LATTICES, cellAtoms, cellEdges, lattice, neighbours } from './engine.js';

  /** @typedef {import('./engine.js').LatticeId} LatticeId */
  /** @typedef {import('./engine.js').P3} P3 */

  const W = 340;
  const latticeOptions = LATTICES.map((l) => ({ value: l.id, label: l.name }));
  const modeOptions = [
    { value: 'cell', label: 'Ô mạng' },
    { value: 'near', label: 'Nguyên tử gần nhất' },
  ];

  let id = $state(/** @type {LatticeId} */ ('bcc'));
  let mode = $state('cell');
  let view = $state({ yaw: 30, pitch: 20 });
  let count = $state(6);
  /** @type {boolean | null} */
  let checked = $state(null);

  const info = $derived(lattice(id));
  const scale = $derived(id === 'hcp' ? 88 : 150);

  /** @param {P3} p */
  const toScreen = (p) => {
    const v = viewPoint({ x: p.x * scale, y: p.y * scale, z: p.z * scale }, view);
    return { x: W / 2 + v.x, y: W / 2 + v.y, depth: v.depth };
  };

  const atoms = $derived.by(() => {
    if (mode === 'cell')
      return cellAtoms(id).map((p) => ({ p, role: /** @type {const} */ ('cell') }));
    return [
      { p: { x: 0, y: 0, z: 0 }, role: /** @type {const} */ ('centre') },
      ...neighbours(id).map((p) => ({ p, role: /** @type {const} */ ('near') })),
    ];
  });
  const drawn = $derived(
    atoms.map((a, i) => ({ ...a, i, s: toScreen(a.p) })).sort((a, b) => a.s.depth - b.s.depth),
  );
  const lines = $derived(
    mode === 'cell'
      ? cellEdges(id).map(([a, b]) => [toScreen(a), toScreen(b)])
      : neighbours(id).map((p) => [toScreen({ x: 0, y: 0, z: 0 }), toScreen(p)]),
  );

  /** @param {string | number} next */
  function chooseLattice(next) {
    id = /** @type {LatticeId} */ (next);
    checked = null;
  }

  function check() {
    checked = count === info.coordination;
  }

  const note = $derived.by(() => {
    if (mode === 'cell')
      return {
        tone: /** @type {const} */ ('info'),
        text: `${info.name}: các ion dương kim loại nằm ở nút mạng (${id === 'bcc' ? '8 đỉnh và tâm của hình lập phương' : id === 'fcc' ? '8 đỉnh và tâm 6 mặt của hình lập phương' : 'các đỉnh, tâm hai đáy của lăng trụ lục giác và 3 nguyên tử ở lớp giữa'}). Độ đặc khít ${info.packing}%, ví dụ: ${info.examples}. Chuyển sang "Nguyên tử gần nhất" để đếm số phối trí.`,
      };
    if (checked === null)
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Xoay mô hình và đếm các nguyên tử (màu cam) ở gần nguyên tử trung tâm nhất, rồi bấm Kiểm tra.',
      };
    return checked
      ? {
          tone: /** @type {const} */ ('ok'),
          text: `Đúng: trong mạng ${info.name.toLowerCase()}, mỗi nguyên tử có ${info.coordination} nguyên tử gần nhất (số phối trí ${info.coordination}), độ đặc khít ${info.packing}%.`,
        }
      : {
          tone: /** @type {const} */ ('warn'),
          text: 'Chưa đúng. Xoay mô hình thêm: một số nguyên tử có thể bị che phía sau. Đếm cả lớp trên và lớp dưới.',
        };
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Kiểu mạng tinh thể"
    options={latticeOptions}
    bind:value={id}
    onchange={chooseLattice}
  />
  <SegmentedControl label="Hiển thị" options={modeOptions} bind:value={mode} />

  <div
    class="mx-auto w-full max-w-sm touch-none rounded-xl bg-slate-50 select-none {focusRing}"
    role="slider"
    tabindex="0"
    aria-valuemin="-180"
    aria-valuemax="180"
    aria-valuenow={Math.round(view.yaw)}
    aria-valuetext="Đã xoay {Math.round(view.yaw)} độ"
    aria-label="Mô hình {info.name.toLowerCase()}{mode === 'near'
      ? `: một nguyên tử và ${neighbours(id).length} nguyên tử gần nhất`
      : `: ${cellAtoms(id).length} nguyên tử trong hình vẽ ô mạng`}. Kéo hoặc dùng phím mũi tên để xoay."
    use:turnSolid={{ view: () => view, onturn: (v) => (view = v) }}
  >
    <svg viewBox="0 0 {W} {W}" class="block w-full" aria-hidden="true">
      {#each lines as [a, b], i (i)}
        <line
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={mode === 'cell' ? '#94a3b8' : '#fdba74'}
          stroke-width="2"
        />
      {/each}
      {#each drawn as d (d.i)}
        <circle
          cx={d.s.x}
          cy={d.s.y}
          r={(id === 'hcp' ? 15 : 14) + d.s.depth * 0.02}
          fill={d.role === 'centre' ? '#4f46e5' : d.role === 'near' ? '#f97316' : '#94a3b8'}
          stroke="#334155"
          stroke-width="1"
          opacity="0.95"
        />
        <text
          x={d.s.x}
          y={d.s.y + 4}
          text-anchor="middle"
          font-size="11"
          font-weight="700"
          fill="#fff">+</text
        >
      {/each}
    </svg>
  </div>

  {#if mode === 'near'}
    <div class="flex flex-wrap items-end gap-3">
      <Stepper
        label="Số nguyên tử gần nhất"
        bind:value={count}
        min={1}
        max={14}
        onchange={() => (checked = null)}
      />
      <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
