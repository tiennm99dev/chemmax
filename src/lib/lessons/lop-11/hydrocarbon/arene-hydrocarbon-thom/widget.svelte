<script>
  import { turnSolid } from '#lib/actions/turn-solid.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { viewPoint } from '#lib/geom-engine/solid.js';
  import {
    CC_SINGLE,
    CH_LENGTH,
    REACTIONS,
    RING_RADIUS,
    cloudPoint,
    groupsOf,
    relationTo1,
    ringPoint,
    substitute,
  } from './engine.js';

  /** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */

  const W = 320;
  const H = 260;
  const S = 48;
  const TURN = { minPitch: -60, maxPitch: 88 };
  const POSITIONS = [1, 2, 3, 4, 5, 6];
  const PI_TEXT =
    'Sáu electron π không thuộc riêng liên kết nào mà trải đều trên cả vòng, thành hai đám mây phía trên và phía dưới mặt phẳng vòng. Vì vậy sáu liên kết C–C dài bằng nhau ($0{,}139$ nm) và vòng rất bền. Nghiêng mô hình về $0^\\circ$ để thấy vòng phẳng.';
  const RELATION_WORDS = { ortho: 'ortho', meta: 'meta', para: 'para' };

  let view = $state({ yaw: 15, pitch: 32 });
  let mode = $state('pi');
  let arene = $state(/** @type {import('./engine.js').AreneId} */ ('benzene'));
  let reaction = $state(/** @type {import('./engine.js').ReactionId} */ ('brom'));
  let picked = $state(/** @type {number | null} */ (null));

  const groups = $derived(groupsOf(arene));
  const outcome = $derived(picked === null ? null : substitute(arene, reaction, picked));
  const placed = $derived(outcome?.ok ? picked : null);

  /** @param {P3} p */
  function screen(p) {
    const v = viewPoint(p, view);
    return { x: W / 2 + S * v.x, y: H / 2 + S * v.y, depth: v.depth };
  }

  /** @param {1 | -1} side */
  function cloudPath(side) {
    const pts = Array.from({ length: 48 }, (_, i) => screen(cloudPoint(i / 48, side)));
    return `M ${pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')} Z`;
  }

  const clouds = $derived(
    /** @type {(1 | -1)[]} */ ([1, -1])
      .map((side) => ({ side, depth: screen({ x: 0, y: 0, z: side }).depth, d: cloudPath(side) }))
      .sort((a, b) => a.depth - b.depth),
  );

  const atoms = $derived.by(() => {
    const list = POSITIONS.flatMap((pos) => {
      const i = pos - 1;
      const carbon = { ...screen(ringPoint(pos)), kind: 'C', text: 'C', pos };
      const group = placed === pos ? REACTIONS[reaction].group : groups[i];
      const reach = group === 'H' ? CH_LENGTH : group === 'CH3' ? CC_SINGLE : 1.55;
      const outer = {
        ...screen(ringPoint(pos, RING_RADIUS + reach)),
        kind: group,
        text: group,
        pos,
      };
      return [carbon, outer];
    });
    return list.sort((a, b) => a.depth - b.depth);
  });

  const ringBonds = $derived(
    POSITIONS.map((pos) => {
      const next = (pos % 6) + 1;
      const a = screen(ringPoint(pos));
      const b = screen(ringPoint(next));
      const ai = screen(ringPoint(pos, RING_RADIUS * 0.78));
      const bi = screen(ringPoint(next, RING_RADIUS * 0.78));
      return { pos, a, b, ai, bi, double: pos % 2 === 1 };
    }),
  );
  const outerBonds = $derived(
    POSITIONS.map((pos) => ({
      pos,
      a: screen(ringPoint(pos)),
      b: screen(ringPoint(pos, RING_RADIUS + 0.9)),
    })),
  );
  const innerCircle = $derived(
    Array.from({ length: 36 }, (_, i) => {
      const a = (2 * Math.PI * i) / 36;
      const p = screen({ x: 0.85 * Math.cos(a), y: 0.85 * Math.sin(a), z: 0 });
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }).join(' '),
  );

  /** @param {string} kind */
  const radius = (kind) => (kind === 'C' ? 11 : kind === 'H' ? 7 : 15);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!outcome || picked === null) {
        return {
          tone: 'info',
          text: 'Chọn chất và phản ứng, rồi bấm số của một vị trí trên vòng để thay nguyên tử H ở đó.',
        };
      }
      if (!outcome.ok) return { tone: 'warn', text: outcome.reason };
      if (outcome.kind === 'only') {
        return {
          tone: 'ok',
          text: `Được ${outcome.name}. Sáu nguyên tử H của benzene tương đương nhau, thay H ở vị trí nào cũng ra cùng một chất. Thử vị trí khác để kiểm chứng.`,
        };
      }
      const rel = RELATION_WORDS[/** @type {import('./engine.js').Relation} */ (outcome.relation)];
      return outcome.kind === 'main'
        ? {
            tone: 'ok',
            text: `Vị trí ${picked} là vị trí ${rel} so với nhóm $\\mathrm{CH_3}$: được ${outcome.name}, một sản phẩm chính. Nhóm $\\mathrm{CH_3}$ định hướng thế vào ortho và para.`,
          }
        : {
            tone: 'warn',
            text: `Vị trí ${picked} là vị trí meta so với nhóm $\\mathrm{CH_3}$: ${outcome.name} chỉ tạo thành rất ít. Hãy thử vị trí ortho hoặc para.`,
          };
    },
  );

  /** @param {number} pos */
  function posLabel(pos) {
    if (groups[pos - 1] === 'CH3') return `Vị trí ${pos}, mang nhóm CH₃`;
    if (arene === 'toluene') return `Thế H ở vị trí ${pos} (${relationTo1(pos)})`;
    return `Thế H ở vị trí ${pos}`;
  }

  function resetPick() {
    picked = null;
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Chất"
      options={[
        { value: 'benzene', label: 'Benzene' },
        { value: 'toluene', label: 'Toluene' },
      ]}
      bind:value={arene}
      onchange={resetPick}
    />
    <SegmentedControl
      label="Cách vẽ"
      options={[
        { value: 'kekule', label: 'Kekulé' },
        { value: 'pi', label: 'Đám mây π' },
      ]}
      bind:value={mode}
    />
  </div>

  <div
    role="slider"
    tabindex="0"
    aria-label="Mô hình phân tử {arene}. Kéo hoặc dùng phím mũi tên để xoay và nghiêng."
    aria-valuemin={-180}
    aria-valuemax={180}
    aria-valuenow={Math.round(view.yaw)}
    aria-valuetext="Xoay {Math.round(view.yaw)} độ, nghiêng {Math.round(view.pitch)} độ"
    class="mx-auto max-w-md cursor-grab touch-none rounded-xl bg-slate-50 {focusRing}"
    use:turnSolid={{ view: () => view, onturn: (v) => (view = v), options: TURN }}
  >
    <svg viewBox="0 0 {W} {H}" class="block w-full" aria-hidden="true">
      {#if mode === 'pi'}
        <path
          d={clouds[0].d}
          fill="none"
          stroke="#6366f1"
          stroke-opacity="0.25"
          stroke-width="20"
          stroke-linejoin="round"
        />
      {/if}
      {#each outerBonds as b (b.pos)}
        <line x1={b.a.x} y1={b.a.y} x2={b.b.x} y2={b.b.y} stroke="#64748b" stroke-width="3" />
      {/each}
      {#each ringBonds as b (b.pos)}
        <line x1={b.a.x} y1={b.a.y} x2={b.b.x} y2={b.b.y} stroke="#334155" stroke-width="3.5" />
        {#if mode === 'kekule' && b.double}
          <line x1={b.ai.x} y1={b.ai.y} x2={b.bi.x} y2={b.bi.y} stroke="#334155" stroke-width="3" />
        {/if}
      {/each}
      {#if mode === 'pi'}
        <polygon
          points={innerCircle}
          fill="none"
          stroke="#4f46e5"
          stroke-width="2.5"
          stroke-dasharray="5 4"
        />
      {/if}
      {#each atoms as a (`${a.kind}-${a.pos}-${a.text}`)}
        <circle
          cx={a.x}
          cy={a.y}
          r={radius(a.kind)}
          fill={a.kind === 'C'
            ? '#334155'
            : a.kind === 'H'
              ? '#fff'
              : a.kind === 'CH3'
                ? '#e2e8f0'
                : a.kind === 'Br'
                  ? '#b45309'
                  : '#2563eb'}
          stroke={a.pos === placed && a.kind !== 'C' ? '#059669' : '#475569'}
          stroke-width={a.pos === placed && a.kind !== 'C' ? 3 : 1.5}
        />
        {#if a.kind === 'C'}
          <text
            x={a.x}
            y={a.y + 4}
            text-anchor="middle"
            font-size="11"
            font-weight="700"
            fill="#fff">{a.pos}</text
          >
        {:else if a.kind !== 'H'}
          <text
            x={a.x}
            y={a.y + 4}
            text-anchor="middle"
            font-size="10"
            font-weight="700"
            fill={a.kind === 'CH3' ? '#0f172a' : '#fff'}
            >{a.kind === 'CH3' ? 'CH₃' : a.kind === 'NO2' ? 'NO₂' : a.kind}</text
          >
        {/if}
      {/each}
      {#if mode === 'pi'}
        <path
          d={clouds[1].d}
          fill="none"
          stroke="#6366f1"
          stroke-opacity="0.3"
          stroke-width="20"
          stroke-linejoin="round"
        />
      {/if}
    </svg>
  </div>

  <p class="text-sm text-slate-700">
    {#if mode === 'pi'}
      <LiveRichText text={PI_TEXT} />
    {:else}
      Công thức Kekulé vẽ ba liên kết đôi xen kẽ ba liên kết đơn. Thực tế không có liên kết đôi
      riêng lẻ: chuyển sang “Đám mây π” để xem electron π dàn đều cả vòng.
    {/if}
  </p>

  <SegmentedControl
    label="Phản ứng thế"
    options={[
      { value: 'brom', label: 'Bromine hoá' },
      { value: 'nitro', label: 'Nitro hoá' },
    ]}
    bind:value={reaction}
    onchange={resetPick}
  />

  <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Chọn vị trí thế">
    {#each POSITIONS as pos (pos)}
      <button
        type="button"
        class="min-h-11 min-w-11 rounded-lg border px-3 font-semibold {picked === pos
          ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
        aria-pressed={picked === pos}
        aria-label={posLabel(pos)}
        onclick={() => (picked = pos)}>{pos}{groups[pos - 1] === 'CH3' ? ' (CH₃)' : ''}</button
      >
    {/each}
    <button type="button" class={button.quiet} onclick={resetPick}>Bỏ chọn</button>
  </div>

  {#if outcome?.ok}
    <div class="space-y-1 rounded-xl border border-slate-200 p-3">
      <p class="text-sm text-slate-600"><LiveRichText text={REACTIONS[reaction].condition} /></p>
      <p class="text-lg"><EquationLine text={outcome.equation} /></p>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
