<script>
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { viewPoint } from '#lib/geom-engine/solid.js';
  import { CHAINS, chainModel, iodineNote } from './engine.js';

  /** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */

  const W = 360;
  const H = 250;
  const S = 58;
  const TURN = { minPitch: -60, maxPitch: 88 };

  let chain = $state(/** @type {import('./engine.js').ChainId} */ ('amylose'));
  let view = $state({ yaw: 20, pitch: 20 });
  let iodine = $state(false);
  let heated = $state(false);
  let drip = $state(0);

  const model = $derived(chainModel(chain, { heated, iodine }));
  const facts = $derived(CHAINS[chain]);

  /** @param {P3} p */
  function screen(p) {
    const v = viewPoint(p, view);
    return { x: W / 2 + S * v.x, y: H / 2 + S * v.y, depth: v.depth };
  }

  const balls = $derived(
    model.units.map((u, i) => ({ ...u, i, s: screen(u.p) })).sort((a, b) => a.s.depth - b.s.depth),
  );
  const pts = $derived(model.units.map((u) => screen(u.p)));
  const iodinePts = $derived(model.iodines.map(screen));

  /** @param {{ branch: boolean, flipped: boolean }} u @param {number} depth */
  function fill(u, depth) {
    const shade = Math.max(0.55, Math.min(1, 0.8 + depth * 0.12));
    if (chain === 'cellulose')
      return u.flipped ? `rgba(22,163,74,${shade})` : `rgba(74,222,128,${shade})`;
    return u.branch ? `rgba(234,88,12,${shade})` : `rgba(37,99,235,${shade})`;
  }

  function addIodine() {
    iodine = true;
    drip += 1;
  }

  function pick() {
    heated = false;
  }

  const spoken = $derived(
    `${facts.name}: ${facts.shape}.${iodine ? (model.colour ? ' Có màu xanh tím.' : ' Không có màu xanh tím.') : ''}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chuỗi polysaccharide"
    options={[
      { value: 'amylose', label: 'Amylose' },
      { value: 'amylopectin', label: 'Amylopectin' },
      { value: 'cellulose', label: 'Cellulose' },
    ]}
    bind:value={chain}
    onchange={pick}
  />

  <div
    role="slider"
    tabindex="0"
    aria-label="Mô hình 3D của {facts.name}, mỗi quả cầu là một gốc glucose. Kéo hoặc dùng phím mũi tên để xoay và nghiêng."
    aria-valuemin={-180}
    aria-valuemax={180}
    aria-valuenow={Math.round(view.yaw)}
    aria-valuetext="Xoay {Math.round(view.yaw)} độ, nghiêng {Math.round(view.pitch)} độ"
    class="mx-auto max-w-md cursor-grab touch-none rounded-xl {model.colour
      ? 'bg-violet-100'
      : 'bg-slate-50'} {focusRing}"
    use:turnSolid={{ view: () => view, onturn: (v) => (view = v), options: TURN }}
  >
    <svg viewBox="0 0 {W} {H}" class="block w-full" aria-hidden="true">
      {#each model.links as l (`${l.a}-${l.b}-${l.kind}`)}
        <line
          x1={pts[l.a].x}
          y1={pts[l.a].y}
          x2={pts[l.b].x}
          y2={pts[l.b].y}
          stroke={l.kind === '1,6' ? '#ea580c' : l.kind === 'H' ? '#64748b' : '#334155'}
          stroke-width={l.kind === 'H' ? 1.5 : 3}
          stroke-dasharray={l.kind === 'H' ? '3 3' : undefined}
        />
      {/each}
      {#each iodinePts as p, k (k)}
        <circle cx={p.x} cy={p.y} r="5" fill="#7c3aed" stroke="#4c1d95" />
      {/each}
      {#each balls as b (b.i)}
        <circle
          cx={b.s.x}
          cy={b.s.y}
          r="9"
          fill={fill(b, b.s.depth)}
          stroke="#1e293b"
          stroke-width="1"
        />
      {/each}
    </svg>
  </div>
  <p class="text-center text-xs text-slate-600">
    Mỗi quả cầu là một gốc {facts.unit}{chain === 'cellulose'
      ? '; hai màu xanh lá xen kẽ: gốc sau lật ngược so với gốc trước; nét đứt là liên kết hydrogen giữa các mạch'
      : chain === 'amylopectin'
        ? '; nhánh màu cam nối bằng liên kết α-1,6-glycoside'
        : ''}{iodine ? '; chấm tím là phân tử iodine' : ''}.
  </p>
  <p class="sr-only" aria-live="polite">{spoken}</p>

  <dl class="grid gap-1 rounded-xl bg-slate-50 p-3 text-sm sm:grid-cols-[8rem_1fr]">
    <dt class="font-semibold text-slate-700">Liên kết</dt>
    <dd>{facts.bonds}</dd>
    <dt class="font-semibold text-slate-700">Mạch</dt>
    <dd>{facts.shape}</dd>
    <dt class="font-semibold text-slate-700">Ghi chú</dt>
    <dd><LiveRichText text={facts.share} /></dd>
  </dl>

  <div class="flex items-center gap-4">
    <div class="w-16 shrink-0">
      <TestTube
        liquid={model.colour ? '#4c1d95' : iodine ? '#fcd34d' : '#f8fafc'}
        {drip}
        label={model.colour ? 'Ống nghiệm màu xanh tím' : 'Ống nghiệm không có màu xanh tím'}
      />
    </div>
    <div class="flex min-w-0 flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={addIodine} disabled={iodine}
        >Nhỏ dung dịch iodine</button
      >
      {#if chain !== 'cellulose'}
        <button type="button" class={button.secondary} onclick={() => (heated = !heated)}
          >{heated ? 'Để nguội' : 'Đun nóng'}</button
        >
      {/if}
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          iodine = false;
          heated = false;
        }}
        disabled={!iodine && !heated}>Làm lại</button
      >
    </div>
  </div>

  <FeedbackNote tone={model.colour ? 'ok' : 'info'} text={iodineNote(chain, heated, iodine)} />
</div>
