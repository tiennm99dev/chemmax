<script>
  import { onDestroy } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { ATTACKS, H, SUGARS, W, formName, frame, ringPlaces, verdict } from './engine.js';

  let sugarId = $state(/** @type {import('./engine.js').SugarId} */ ('glucose'));
  let attack = $state(5);
  let anomer = $state(/** @type {import('./engine.js').Anomer} */ ('alpha'));
  let progress = $state(0);
  /** @type {(() => void) | null} */
  let stop = null;

  const f = $derived(frame(sugarId, attack, anomer, progress / 100));
  const byId = $derived(Object.fromEntries(f.atoms.map((a) => [a.id, a])));
  const sugar = $derived(SUGARS[sugarId]);
  const plane = $derived(pointsAttr(ringPlaces(f.ring.size)));

  /** @param {string} id @param {string} id2 */
  function offset(id, id2) {
    const a = byId[id];
    const b = byId[id2];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: (-dy / len) * 3, y: (dx / len) * 3 };
  }

  function halt() {
    stop?.();
    stop = null;
  }

  /** @param {number} target */
  function play(target) {
    halt();
    if (reducedMotion()) {
      progress = target;
      return;
    }
    const dir = target > progress ? 1 : -1;
    stop = frameLoop((dt) => {
      progress = Math.max(0, Math.min(100, progress + dir * dt * 45));
      if ((dir > 0 && progress >= target) || (dir < 0 && progress <= target)) {
        progress = target;
        halt();
      }
    });
  }

  function restart() {
    halt();
    progress = 0;
  }

  onDestroy(halt);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      const at = `C${sugar.carbonyl}`;
      const group =
        sugar.group === 'aldehyde'
          ? 'nhóm aldehyde $\\mathrm{{-}CHO}$'
          : 'nhóm ketone $\\mathrm{{>}C{=}O}$';
      if (progress === 0) {
        return {
          tone: 'info',
          text: `Dạng mạch hở: ${sugar.name} có ${group} ở ${at} và năm nhóm $\\mathrm{{-}OH}$ (hình chỉ vẽ nhóm $\\mathrm{{-}OH}$ ở C${attack}). Bấm "Đóng vòng" hoặc kéo thanh tiến trình.`,
        };
      }
      if (progress < 100) {
        return {
          tone: 'info',
          text: `Nhóm $\\mathrm{{-}OH}$ ở C${attack} tiến lại gần ${at}: nguyên tử O của nó sắp liên kết với ${at}, nguyên tử H chuyển sang nguyên tử O của nhóm $\\mathrm{C{=}O}$.`,
        };
      }
      return verdict(sugarId, attack, anomer);
    },
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Chất"
      options={[
        { value: 'glucose', label: 'Glucose' },
        { value: 'fructose', label: 'Fructose' },
      ]}
      bind:value={sugarId}
      onchange={restart}
    />
    <SegmentedControl
      label="Nhóm –OH cộng vào nhóm C=O"
      options={ATTACKS.map((c) => ({ value: c, label: `Ở C${c}` }))}
      bind:value={attack}
      onchange={restart}
    />
    <SegmentedControl
      label="Nhóm –OH mới nằm"
      options={[
        { value: 'alpha', label: 'Phía dưới vòng (α)' },
        { value: 'beta', label: 'Phía trên vòng (β)' },
      ]}
      bind:value={anomer}
    />
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label={progress === 100
      ? `Dạng vòng ${f.ring.size} cạnh của ${sugar.name}, nhóm OH mới ở C${sugar.carbonyl} nằm ${anomer === 'alpha' ? 'phía dưới' : 'phía trên'} vòng`
      : `Mạch hở của ${sugar.name}, tiến trình đóng vòng ${Math.round(progress)}%`}
  >
    {#if progress === 100}
      <polygon points={plane} fill="#c7d2fe" fill-opacity="0.45" />
    {/if}
    {#each f.bonds as b (b.a + b.b)}
      {@const p = byId[b.a]}
      {@const q = byId[b.b]}
      {#if b.order === 2}
        {@const o = offset(b.a, b.b)}
        <line
          x1={p.x + o.x}
          y1={p.y + o.y}
          x2={q.x + o.x}
          y2={q.y + o.y}
          stroke="#334155"
          stroke-width="2"
        />
        <line
          x1={p.x - o.x}
          y1={p.y - o.y}
          x2={q.x - o.x}
          y2={q.y - o.y}
          stroke="#334155"
          stroke-width="2"
        />
      {:else}
        <line
          x1={p.x}
          y1={p.y}
          x2={q.x}
          y2={q.y}
          stroke={b.style === 'dashed' ? '#dc2626' : '#334155'}
          stroke-width={b.style === 'dashed' ? 2.5 : 2}
          stroke-dasharray={b.style === 'dashed' ? '5 4' : undefined}
          opacity={b.opacity}
        />
      {/if}
    {/each}
    {#each f.atoms as a (a.id)}
      <circle
        cx={a.x}
        cy={a.y}
        r={a.kind === 'O' ? 15 : 14}
        fill={a.kind === 'O'
          ? a.highlight
            ? '#fecaca'
            : '#fee2e2'
          : a.highlight
            ? '#fde68a'
            : '#e2e8f0'}
        stroke={a.kind === 'O' ? '#dc2626' : '#475569'}
        stroke-width="1.5"
      />
      <text
        x={a.x}
        y={a.y + 4}
        text-anchor="middle"
        font-size="11"
        font-weight="600"
        fill={a.kind === 'O' ? '#991b1b' : '#1e293b'}>{a.label}</text
      >
    {/each}
  </svg>

  <SliderField
    label="Tiến trình đóng vòng"
    bind:value={progress}
    min={0}
    max={100}
    step={5}
    unit="%"
    oninput={halt}
  />

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      onclick={() => play(100)}
      disabled={progress === 100}>Đóng vòng</button
    >
    <button type="button" class={button.secondary} onclick={() => play(0)} disabled={progress === 0}
      >Mở vòng</button
    >
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if progress === 100 && f.ring.book}
    <p class="text-sm text-slate-600">
      Trong dung dịch, {formName(sugarId, 'alpha')} và {formName(sugarId, 'beta')} chuyển hoá qua lại
      với nhau qua dạng mạch hở; dạng vòng chiếm phần lớn.
    </p>
  {/if}
</div>
