<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { OXYGEN_AIR, SCENARIOS, SIDE_NAMES, fireMessage, fireState } from './engine.js';

  /** @typedef {import('./engine.js').Side} Side */

  /** @type {Side[]} */
  const SIDES = ['fuel', 'oxidiser', 'heat'];

  let fuel = $state(true);
  let oxidiser = $state(true);
  let heat = $state(true);
  let oxygen = $state(OXYGEN_AIR);

  const input = $derived({ fuel, oxidiser, heat, oxygen });
  const fire = $derived(fireState(input));
  const message = $derived(fireMessage(input));

  /** @param {Side} side */
  const isOn = (side) => (side === 'fuel' ? fuel : side === 'oxidiser' ? oxidiser : heat);

  /** @param {Side} side */
  function toggle(side) {
    if (side === 'fuel') fuel = !fuel;
    else if (side === 'oxidiser') oxidiser = !oxidiser;
    else heat = !heat;
  }

  let index = $state(0);
  /** @type {Side | null} */
  let answer = $state(null);
  let right = $state(0);

  const scenario = $derived(SCENARIOS[index]);
  const done = $derived(index >= SCENARIOS.length);

  /** @param {Side} side */
  function choose(side) {
    if (answer) return;
    answer = side;
    if (side === scenario.side) right += 1;
  }

  function next() {
    answer = null;
    index += 1;
  }

  function restart() {
    answer = null;
    index = 0;
    right = 0;
  }

  const sideLine = (/** @type {boolean} */ on) =>
    on ? { stroke: '#dc2626', dash: '' } : { stroke: '#cbd5e1', dash: '6 6' };
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 320 230"
    class="mx-auto block w-full max-w-sm rounded-xl bg-slate-50"
    role="img"
    aria-label="Tam giác cháy: {fuel ? 'có' : 'không có'} chất cháy, {oxidiser
      ? 'có'
      : 'không có'} chất oxi hoá, {heat ? 'có' : 'không có'} nguồn nhiệt. {fire.burning
      ? 'Lửa đang cháy.'
      : 'Lửa đã tắt.'}"
  >
    <line
      x1="160"
      y1="24"
      x2="50"
      y2="190"
      stroke={sideLine(fuel).stroke}
      stroke-dasharray={sideLine(fuel).dash}
      stroke-width="7"
      stroke-linecap="round"
    />
    <line
      x1="160"
      y1="24"
      x2="270"
      y2="190"
      stroke={sideLine(oxidiser).stroke}
      stroke-dasharray={sideLine(oxidiser).dash}
      stroke-width="7"
      stroke-linecap="round"
    />
    <line
      x1="50"
      y1="190"
      x2="270"
      y2="190"
      stroke={sideLine(heat).stroke}
      stroke-dasharray={sideLine(heat).dash}
      stroke-width="7"
      stroke-linecap="round"
    />
    <text x="92" y="88" font-size="14" font-weight="700" text-anchor="end" fill="#334155">
      Chất cháy
    </text>
    <text x="228" y="88" font-size="14" font-weight="700" fill="#334155">Chất oxi hoá</text>
    <text x="160" y="216" font-size="14" font-weight="700" text-anchor="middle" fill="#334155">
      Nguồn nhiệt
    </text>
    {#if fire.burning}
      <g class="motion-safe:animate-pulse">
        <path
          d="M160 92 C186 124 196 142 186 164 C180 178 170 182 160 182 C150 182 140 178 134 164 C124 142 134 124 146 112 C148 124 154 128 160 92 Z"
          fill="#f97316"
        />
        <path
          d="M160 130 C172 146 176 156 171 168 C168 175 164 178 160 178 C156 178 152 175 149 168 C144 156 150 146 160 130 Z"
          fill="#fde047"
        />
      </g>
    {:else}
      <text x="160" y="146" font-size="14" font-weight="600" text-anchor="middle" fill="#64748b">
        Lửa đã tắt
      </text>
    {/if}
  </svg>

  <div class="grid gap-2 sm:grid-cols-3">
    {#each SIDES as side (side)}
      <button
        type="button"
        class={isOn(side) ? button.primary : button.quiet}
        onclick={() => toggle(side)}
      >
        {isOn(side) ? 'Bỏ' : 'Thêm'}
        {SIDE_NAMES[side]}
      </button>
    {/each}
  </div>

  <SliderField
    label="Oxygen trong không khí"
    bind:value={oxygen}
    min={0}
    max={OXYGEN_AIR}
    unit="%"
  />

  <FeedbackNote tone={fire.burning ? 'warn' : 'ok'} text={message} />

  <div class="space-y-3 rounded-xl border border-slate-200 p-3">
    {#if done}
      <p class="font-semibold text-slate-800" aria-live="polite">
        Em đúng {right}/{SCENARIOS.length} tình huống. Mỗi cách dập lửa đều lấy đi một cạnh của tam giác
        cháy.
      </p>
      <button type="button" class={button.secondary} onclick={restart}>Làm lại</button>
    {:else}
      <p class="text-sm text-slate-600">Tình huống {index + 1}/{SCENARIOS.length}</p>
      <p class="font-semibold text-slate-800">{scenario.action} đã lấy đi yếu tố nào?</p>
      <div class="grid gap-2 sm:grid-cols-3">
        {#each SIDES as side (side)}
          <button
            type="button"
            class={answer === side ? button.primary : button.quiet}
            disabled={answer !== null}
            onclick={() => choose(side)}
          >
            {SIDE_NAMES[side]}
          </button>
        {/each}
      </div>
      {#if answer}
        <FeedbackNote
          tone={answer === scenario.side ? 'ok' : 'warn'}
          text={`${answer === scenario.side ? 'Đúng.' : `Chưa đúng: yếu tố bị lấy đi là ${SIDE_NAMES[scenario.side]}.`} ${scenario.why}`}
        />
        <button type="button" class={button.secondary} onclick={next}>Tình huống tiếp</button>
      {/if}
    {/if}
  </div>
</div>
