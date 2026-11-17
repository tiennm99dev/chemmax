<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import MechanismScene from '../_shared/mechanism-scene.svelte';
  import { BONDS, cleave } from './engine.js';

  const W = 360;
  const H = 150;
  const Y = 70;
  const MODES = [
    { value: 'homo', label: 'Đồng li' },
    { value: 'hetero', label: 'Dị li' },
  ];
  const BOND_OPTIONS = BONDS.map((b) => ({
    value: b.id,
    label: `${prettyFormula(b.left)}–${prettyFormula(b.right)}`,
  }));

  let bondId = $state('cl-cl');
  let mode = $state('homo');
  let toward = $state(/** @type {'left' | 'right'} */ ('right'));
  let split = $state(false);

  const bond = $derived(BONDS.find((b) => b.id === bondId) ?? BONDS[0]);
  const result = $derived(cleave(bond, mode === 'homo' ? 'homo' : 'hetero', toward));
  /** @param {string} label @param {string} side */
  const sideName = (label, side) =>
    bond.left === bond.right ? `${prettyFormula(label)} bên ${side}` : prettyFormula(label);
  const half = (/** @type {string} */ label) => 8 + label.length * 4.5;

  /** @type {import('../_shared/scene.js').Scene} */
  const scene = $derived.by(() => {
    if (!split) {
      const lx = W / 2 - 22 - half(bond.left);
      const rx = W / 2 + 22 + half(bond.right);
      const mid = (lx + half(bond.left) + rx - half(bond.right)) / 2;
      /** @type {import('../_shared/scene.js').SceneArrow[]} */
      const arrows =
        mode === 'homo'
          ? [
              { from: 'L~R', to: 'L', half: true, bend: -30 },
              { from: 'L~R', to: 'R', half: true, bend: 30 },
            ]
          : [
              {
                from: 'L~R',
                to: toward === 'left' ? 'L' : 'R',
                bend: toward === 'left' ? -34 : 34,
              },
            ];
      return {
        atoms: [
          { id: 'L', x: lx, y: Y, label: bond.left },
          { id: 'R', x: rx, y: Y, label: bond.right },
        ],
        bonds: [{ a: 'L', b: 'R' }],
        arrows,
        dots: [
          { id: 'e1', x: mid - 5, y: Y + 14 },
          { id: 'e2', x: mid + 5, y: Y + 14 },
        ],
      };
    }
    const lx = 70 + half(bond.left) / 2;
    const rx = W - 70 - half(bond.right) / 2;
    const homo = mode === 'homo';
    const leftTakes = toward === 'left';
    const dots = homo
      ? [
          { id: 'e1', x: lx, y: Y + 20 },
          { id: 'e2', x: rx, y: Y + 20 },
        ]
      : [
          { id: 'e1', x: (leftTakes ? lx : rx) - 5, y: Y + 20 },
          { id: 'e2', x: (leftTakes ? lx : rx) + 5, y: Y + 20 },
        ];
    return {
      atoms: [
        { id: 'L', x: lx, y: Y, label: bond.left, charge: result.left.charge },
        { id: 'R', x: rx, y: Y, label: bond.right, charge: result.right.charge },
      ],
      dots,
      notes: [
        { x: lx, y: Y + 44, text: result.left.kind },
        { x: rx, y: Y + 44, text: result.right.kind },
      ],
    };
  });

  const spoken = $derived(
    split
      ? `Sau phân cắt: ${bond.left} là ${result.left.kind}, ${bond.right} là ${result.right.kind}.`
      : `Liên kết ${bond.left}–${bond.right} với cặp electron chung; mũi tên cong cho thấy ${
          mode === 'homo'
            ? 'mỗi nguyên tử nhận một electron'
            : `cặp electron chuyển về ${toward === 'left' ? bond.left : bond.right}`
        }.`,
  );

  function reset() {
    split = false;
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Liên kết" options={BOND_OPTIONS} bind:value={bondId} onchange={reset} />
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Kiểu phân cắt" options={MODES} bind:value={mode} onchange={reset} />
    {#if mode === 'hetero'}
      <SegmentedControl
        label="Cặp electron chung về"
        options={[
          { value: 'left', label: sideName(bond.left, 'trái') },
          { value: 'right', label: sideName(bond.right, 'phải') },
        ]}
        bind:value={toward}
        onchange={reset}
      />
    {/if}
  </div>

  <MechanismScene {scene} width={W} height={H} label={spoken} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={split} onclick={() => (split = true)}>
      Phân cắt liên kết
    </button>
    <button type="button" class={button.quiet} disabled={!split} onclick={reset}>Nối lại</button>
  </div>

  {#if split}
    <FeedbackNote tone={result.tone} text={result.text} />
  {:else}
    <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700" aria-live="polite">
      <LiveRichText
        text={mode === 'homo'
          ? 'Mũi tên cong nửa đầu (móc câu) chuyển một electron: mỗi nguyên tử nhận một electron của cặp chung.'
          : 'Mũi tên cong đầy đủ chuyển cả cặp electron về một nguyên tử. Chọn nguyên tử nhận cặp electron rồi bấm "Phân cắt liên kết".'}
      />
    </p>
  {/if}
</div>
