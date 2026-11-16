<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { DROPLETS, H, STAGES, TAIL, W, explain, scene } from './engine.js';

  let stage = $state(0);
  let agentChoice = $state('soap');
  let waterChoice = $state('soft');

  const agent = $derived(agentChoice === 'soap' ? 'soap' : 'detergent');
  const water = $derived(waterChoice === 'hard' ? 'hard' : 'soft');
  const s = $derived(scene(stage, agent, water));
  const note = $derived(explain(stage, agent, water));

  const AGENTS = [
    { value: 'soap', label: 'Xà phòng' },
    { value: 'detergent', label: 'Chất giặt rửa tổng hợp' },
  ];
  const WATERS = [
    { value: 'soft', label: 'Nước mềm' },
    { value: 'hard', label: 'Nước cứng' },
  ];

  const headTitle = $derived(agent === 'soap' ? '–COO⁻ Na⁺' : '–SO₃⁻ Na⁺');

  const picture = $derived(
    [
      `${STAGES[stage].label}.`,
      `${s.molecules.length} phân tử ${agent === 'soap' ? 'xà phòng' : 'chất giặt rửa'} đang thấy trên hình.`,
      s.lost > 0 ? `${s.scum.length} cụm kết tủa nổi trên mặt nước.` : '',
      s.droplets.length > 0 ? `${s.droplets.length} hạt dầu được bao quanh, tách khỏi vải.` : '',
      s.stain ? 'Vết dầu vẫn còn trên vải.' : 'Vải sạch, không còn vết dầu.',
    ]
      .filter(Boolean)
      .join(' '),
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl label="Chất giặt rửa" options={AGENTS} bind:value={agentChoice} />
    <SegmentedControl label="Loại nước" options={WATERS} bind:value={waterChoice} />
  </div>

  <SegmentedControl label="Giai đoạn giặt" options={STAGES} bind:value={stage} />

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full rounded-xl border border-slate-200"
    role="img"
    aria-label={picture}
  >
    <rect x="0" y="0" width={W} height={H} fill="#e0f2fe" />
    <rect x="0" y="0" width={W} height="18" fill="#bae6fd" />
    <rect x="0" y="212" width={W} height="28" fill="#cbd5e1" />
    {#each Array.from({ length: 18 }, (_, i) => i) as i (i)}
      <line x1={i * 20 + 4} y1="214" x2={i * 20 + 14} y2="238" stroke="#94a3b8" stroke-width="1" />
    {/each}
    <text x="8" y="232" font-size="11" fill="#334155">vải</text>

    {#if s.stain}
      <ellipse
        cx={s.stain.x}
        cy={s.stain.y}
        rx={s.stain.rx}
        ry={s.stain.ry}
        fill="#facc15"
        fill-opacity="0.85"
        stroke="#ca8a04"
      />
    {/if}

    {#each s.droplets as d (d.id)}
      <circle cx={d.x} cy={d.y} r={d.r} fill="#facc15" stroke="#ca8a04" />
    {/each}

    {#each s.scum as c (c.id)}
      <g transform="translate({c.x} {c.y})">
        <ellipse rx="14" ry="6" fill="#64748b" />
        <circle cx="-6" cy="-2" r="3" fill="#94a3b8" />
        <circle cx="5" cy="1" r="3" fill="#94a3b8" />
      </g>
    {/each}

    {#each s.molecules as m (m.id)}
      <g class="move" style="transform: translate({m.x}px, {m.y}px) rotate({m.angle}rad)">
        <line x1="0" y1="0" x2={TAIL} y2="0" stroke="#1e293b" stroke-width="2" />
        <circle r="4.5" fill="#dc2626" />
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-700">
    <span class="inline-flex items-center gap-1"
      ><svg width="14" height="14" aria-hidden="true"
        ><circle cx="7" cy="7" r="5" fill="#dc2626" /></svg
      >
      đầu ưa nước ({headTitle})</span
    >
    <span class="inline-flex items-center gap-1"
      ><svg width="20" height="14" aria-hidden="true"
        ><line x1="0" y1="7" x2="20" y2="7" stroke="#1e293b" stroke-width="2" /></svg
      >
      đuôi kị nước (gốc hydrocarbon dài)</span
    >
    <span class="inline-flex items-center gap-1"
      ><svg width="14" height="14" aria-hidden="true"
        ><circle cx="7" cy="7" r="6" fill="#facc15" /></svg
      >
      dầu mỡ</span
    >
  </div>

  <p class="text-sm font-semibold text-slate-700">
    Vết bẩn đã sạch: {Math.round(s.cleaned * DROPLETS)}/{DROPLETS} phần
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <button type="button" class={button.primary} onclick={() => (stage = stage >= 3 ? 0 : stage + 1)}
    >{stage >= 3 ? 'Giặt lại từ đầu' : 'Giai đoạn tiếp theo'}</button
  >
</div>

<style>
  .move {
    transition: transform 0.6s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .move {
      transition: none;
    }
  }
</style>
