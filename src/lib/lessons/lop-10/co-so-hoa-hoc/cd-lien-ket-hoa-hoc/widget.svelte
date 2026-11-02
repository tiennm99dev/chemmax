<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import Stepper from '#lib/core/stepper.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { atomColor } from '#lib/domain/molecule.js';
  import { clampPitch, turnByKey, viewPoint, wrapYaw } from '#lib/geom-engine/solid.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { MODELS, arcBetween, modelFor, vseprTex } from './engine.js';

  const W = 340;
  const MID = W / 2;
  /** Distance from the central atom to a bonded atom, in SVG units. */
  const REACH = 112;
  const LOBE_REACH = 88;
  const LOBE_WIDTH = 19;
  const ARC_RADIUS = 46;

  let n = $state(4);
  let m = $state(0);
  let view = $state({ yaw: 25, pitch: 18 });
  /** @type {{ x: number, y: number } | null} */
  let press = null;

  const model = $derived(modelFor(n, m) ?? MODELS[0]);
  const domains = $derived(model.n + model.m);
  const pCount = $derived(domains - 1);

  /** @param {{ x: number, y: number, z: number }} p @param {number} reach */
  function screen(p, reach) {
    const v = viewPoint({ x: p.x * reach, y: p.y * reach, z: p.z * reach }, view);
    return { x: MID + v.x, y: MID + v.y, depth: v.depth };
  }

  /** @param {{ x: number, y: number }} tip */
  function lobe(tip) {
    const len = Math.hypot(tip.x - MID, tip.y - MID);
    return {
      cx: (tip.x + MID) / 2,
      cy: (tip.y + MID) / 2,
      rx: Math.max(len / 2, LOBE_WIDTH),
      turn: (Math.atan2(tip.y - MID, tip.x - MID) * 180) / Math.PI,
    };
  }

  const parts = $derived(
    [
      ...model.bonds.map((b, i) => {
        const tip = screen(b, REACH);
        return {
          kind: 'bond',
          key: `b${i}`,
          tip,
          lobe: lobe(screen(b, LOBE_REACH)),
          depth: tip.depth,
        };
      }),
      ...model.lones.map((b, i) => {
        const tip = screen(b, LOBE_REACH);
        return { kind: 'lone', key: `l${i}`, tip, lobe: lobe(tip), depth: tip.depth };
      }),
    ].sort((a, b) => a.depth - b.depth),
  );
  const behind = $derived(parts.filter((p) => p.depth < 0));
  const front = $derived(parts.filter((p) => p.depth >= 0));

  const arc = $derived(
    arcBetween(model.bonds[0], model.bonds[1], ARC_RADIUS).map((p) => {
      const v = viewPoint(p, view);
      return { x: MID + v.x, y: MID + v.y };
    }),
  );

  const note = $derived.by(() => {
    if (model.m === 0) {
      return `Mọi orbital lai hoá đều tạo liên kết nên các cặp electron đẩy nhau đều: góc liên kết đúng bằng $${formatNumber(model.angle)}^\\circ$.`;
    }
    const ideal = model.hybrid === 'sp^2' ? 120 : 109.5;
    return `${model.m === 1 ? 'Cặp' : 'Hai cặp'} electron chưa liên kết đẩy mạnh hơn cặp liên kết, ép góc liên kết từ $${formatNumber(ideal)}^\\circ$ xuống $${formatNumber(model.angle)}^\\circ$.`;
  });

  /** @param {PointerEvent} e */
  function down(e) {
    press = { x: e.clientX, y: e.clientY };
    /** @type {SVGSVGElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
  }

  /** @param {PointerEvent} e */
  function moveView(e) {
    if (!press) return;
    const dx = e.clientX - press.x;
    const dy = e.clientY - press.y;
    press = { x: e.clientX, y: e.clientY };
    view = { yaw: wrapYaw(view.yaw - dx * 0.6), pitch: clampPitch(view.pitch + dy * 0.6, -80) };
  }

  /** @param {KeyboardEvent} e */
  function key(e) {
    const next = turnByKey(view, e.key, e.shiftKey, -80);
    if (!next) return;
    e.preventDefault();
    view = next;
  }
</script>

{#snippet part(/** @type {(typeof parts)[number]} */ p)}
  <ellipse
    cx={p.lobe.cx}
    cy={p.lobe.cy}
    rx={p.lobe.rx}
    ry={LOBE_WIDTH}
    transform="rotate({p.lobe.turn} {p.lobe.cx} {p.lobe.cy})"
    fill={p.kind === 'bond' ? '#6366f1' : '#d946ef'}
    fill-opacity="0.35"
    stroke={p.kind === 'bond' ? '#4338ca' : '#a21caf'}
    stroke-width="1"
  />
  {#if p.kind === 'bond'}
    <line x1={MID} y1={MID} x2={p.tip.x} y2={p.tip.y} stroke="#475569" stroke-width="4" />
    <circle
      cx={p.tip.x}
      cy={p.tip.y}
      r="15"
      fill={atomColor(model.ligand)}
      stroke="#334155"
      stroke-width="1.5"
    />
    <text
      x={p.tip.x}
      y={p.tip.y + 4}
      text-anchor="middle"
      font-size="12"
      font-weight="700"
      fill="#0f172a"
    >
      {model.ligand}
    </text>
  {:else}
    <circle cx={p.lobe.cx - 4} cy={p.lobe.cy} r="2.5" fill="#701a75" />
    <circle cx={p.lobe.cx + 4} cy={p.lobe.cy} r="2.5" fill="#701a75" />
  {/if}
{/snippet}

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <Stepper label="Số nguyên tử liên kết n (X)" bind:value={n} min={2} max={4 - m} />
    <Stepper label="Số cặp electron chưa liên kết m (E)" bind:value={m} min={0} max={4 - n} />
  </div>

  <svg
    viewBox="0 0 {W} {W}"
    class="mx-auto block w-full max-w-sm rounded-xl bg-slate-50 select-none {focusRing}"
    style:touch-action="none"
    role="slider"
    tabindex="0"
    aria-valuemin="-180"
    aria-valuemax="180"
    aria-valuenow={Math.round(view.yaw)}
    aria-valuetext="Đã xoay {Math.round(view.yaw)} độ"
    aria-label="Mô hình lai hoá của nguyên tử trung tâm. Kéo hoặc dùng phím mũi tên để xoay."
    onpointerdown={down}
    onpointermove={moveView}
    onpointerup={() => (press = null)}
    onpointercancel={() => (press = null)}
    onkeydown={key}
  >
    {#each behind as p (p.key)}
      {@render part(p)}
    {/each}
    <circle
      cx={MID}
      cy={MID}
      r="19"
      fill={atomColor(model.center)}
      stroke="#0f172a"
      stroke-width="1.5"
    />
    {#each front as p (p.key)}
      {@render part(p)}
    {/each}
    <polyline points={pointsAttr(arc)} fill="none" stroke="#b45309" stroke-width="2.5" />
    <text
      x={MID}
      y={MID + 5}
      text-anchor="middle"
      font-size="13"
      font-weight="700"
      fill={model.center === 'C' || model.center === 'O' ? '#fff' : '#0f172a'}
    >
      {model.center}
    </text>
  </svg>
  <p class="text-center text-xs text-slate-500">
    Kéo mô hình hoặc dùng phím mũi tên để xoay. Cung màu cam là góc liên kết.
  </p>

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4" aria-live="polite">
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-slate-500">Công thức VSEPR</dt>
      <dd class="font-semibold"><LiveRichText text={`$${vseprTex(model.n, model.m)}$`} /></dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-slate-500">Lai hoá</dt>
      <dd class="font-semibold"><LiveRichText text={`$\\mathrm{${model.hybrid}}$`} /></dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-slate-500">Dạng phân tử</dt>
      <dd class="font-semibold">{model.shape}</dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-slate-500">Góc liên kết</dt>
      <dd class="font-semibold">{formatNumber(model.angle)}°</dd>
    </div>
  </dl>

  <p class="rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-900" aria-live="polite">
    <LiveRichText
      text={`Ví dụ: $${model.formula}$. Tổ hợp $1$ orbital s với $${pCount}$ orbital p được $${domains}$ orbital lai hoá $\\mathrm{${model.hybrid}}$. ${note}`}
    />
  </p>
</div>
