<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import {
    MIXTURES,
    START_VOLUME,
    heat,
    isFinished,
    purity,
    startStill,
    stillNote,
    switchReceiver,
  } from './engine.js';

  const BOX = { left: 34, right: 350, top: 12, bottom: 150 };
  const T_MAX = 140;
  const MINUTES_SHOWN = 24;
  const OPTIONS = MIXTURES.map((m) => ({ value: m.id, label: `${m.first} – ${m.second}` }));

  let mixId = $state(MIXTURES[0].id);
  let still = $state(startStill());

  const mix = $derived(MIXTURES.find((m) => m.id === mixId) ?? MIXTURES[0]);
  const finished = $derived(isFinished(still));
  const note = $derived(stillNote(still, mix));

  /** @param {number} minute */
  const sx = (minute) => BOX.left + (minute / MINUTES_SHOWN) * (BOX.right - BOX.left);
  /** @param {number} t */
  const sy = (t) => BOX.bottom - (t / T_MAX) * (BOX.bottom - BOX.top);

  const curve = $derived(still.history.map((t, i) => `${sx(i)},${sy(t)}`).join(' '));

  function restart() {
    still = startStill();
  }

  /** @param {{ first: number, second: number }} r */
  function receiverText(r) {
    const p = purity(r);
    if (p === null) return 'chưa có gì';
    return `${formatNumber(r.first + r.second, 0)} mL, ${mix.first} chiếm ${formatNumber(p, 0)} %`;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hỗn hợp trong bình cầu"
    options={OPTIONS}
    bind:value={mixId}
    onchange={restart}
  />

  <svg
    viewBox="0 0 360 180"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Đồ thị nhiệt độ hơi theo thời gian. Phút {still.minute}, nhiệt độ {still.temperature} độ C."
  >
    {#each [0, 50, 100] as t (t)}
      <line x1={BOX.left} x2={BOX.right} y1={sy(t)} y2={sy(t)} stroke="#e2e8f0" />
      <text x={BOX.left - 5} y={sy(t) + 4} text-anchor="end" font-size="11" fill="#475569">{t}</text
      >
    {/each}
    {#each [mix.firstBoil, mix.secondBoil] as t (t)}
      <line
        x1={BOX.left}
        x2={BOX.right}
        y1={sy(t)}
        y2={sy(t)}
        stroke="#94a3b8"
        stroke-dasharray="3 4"
      />
      <text x={BOX.right} y={sy(t) - 3} text-anchor="end" font-size="11" fill="#475569">{t} °C</text
      >
    {/each}
    <line x1={BOX.left} x2={BOX.left} y1={BOX.top} y2={BOX.bottom} stroke="#475569" />
    <line x1={BOX.left} x2={BOX.right} y1={BOX.bottom} y2={BOX.bottom} stroke="#475569" />
    <text x={BOX.right} y={BOX.bottom + 16} text-anchor="end" font-size="11" fill="#475569"
      >Thời gian (phút)</text
    >
    <text x={BOX.left} y={BOX.bottom + 16} font-size="11" fill="#475569">t (°C)</text>
    <polyline points={curve} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <circle cx={sx(still.minute)} cy={sy(still.temperature)} r="4.5" fill="#4338ca" />
  </svg>

  <dl class="grid gap-2 rounded-lg bg-slate-50 p-3 text-sm sm:grid-cols-3">
    <div>
      <dt class="text-slate-600">Còn trong bình cầu</dt>
      <dd class="font-semibold">
        {mix.first}
        {still.first} mL, {mix.second}
        {still.second} mL
        <span class="sr-only">trên tổng {START_VOLUME * 2} mL ban đầu</span>
      </dd>
    </div>
    {#each still.receivers as r, i (i)}
      <div>
        <dt class="text-slate-600">
          Bình hứng {i + 1}{still.active === i ? ' (đang hứng)' : ''}
        </dt>
        <dd class="font-semibold">{receiverText(r)}</dd>
      </div>
    {/each}
  </dl>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      disabled={finished}
      onclick={() => (still = heat(still, mix))}
    >
      Đun thêm 1 phút
    </button>
    <button
      type="button"
      class={button.secondary}
      disabled={finished || still.active === 1}
      onclick={() => (still = switchReceiver(still))}
    >
      Đổi sang bình hứng 2
    </button>
    <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
