<script>
  import { onDestroy } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    MAX_TIME,
    OIL_WINDOW,
    STAGES,
    depthAt,
    fieldText,
    simulate,
    stageAt,
    tempAt,
    trap,
  } from './engine.js';

  const uid = $props.id();
  /** Top of the column (sea floor) and pixels per km of depth. */
  const FLOOR = 24;
  const PX_PER_KM = 34;
  /** The dome: left and right ends, how high its crest rises, layer thickness. */
  const DOME = { left: 120, right: 350, rise: 20, reservoir: 14, seal: 8 };

  let time = $state(0);
  let seal = $state(true);
  let playing = $state(false);
  /** @type {(() => void) | null} */
  let stop = null;

  const depth = $derived(depthAt(time));
  const temp = $derived(tempAt(time));
  const stage = $derived(stageAt(time));
  const amounts = $derived(simulate(time));
  const field = $derived(trap(time, seal));
  const feedback = $derived(fieldText(time, seal, (v) => formatNumber(v, 1)));

  /** y of the top of the source rock. */
  const sourceY = $derived(FLOOR + depth * PX_PER_KM);
  /** Bottom edge of the reservoir at its two ends, just above the source rock. */
  const baseY = $derived(sourceY - 4);
  /** The reservoir and the cap rock show once enough sediment covers the source rock. */
  const hasDome = $derived(baseY - DOME.reservoir - DOME.seal - DOME.rise >= FLOOR);
  const mid = (DOME.left + DOME.right) / 2;

  /**
   * A curved band from `from` to `to` px above `y`, arching up by
   * `DOME.rise` px at the middle.
   * @param {number} y @param {number} from @param {number} to
   */
  function band(y, from, to) {
    const lo = y - from;
    const hi = y - to;
    const c = 2 * DOME.rise;
    return `M ${DOME.left} ${lo} Q ${mid} ${lo - c} ${DOME.right} ${lo} L ${DOME.right} ${hi} Q ${mid} ${hi - c} ${DOME.left} ${hi} Z`;
  }

  const reservoirPath = $derived(band(baseY, 0, DOME.reservoir));
  const sealPath = $derived(band(baseY, DOME.reservoir, DOME.reservoir + DOME.seal));
  /** Crest of the reservoir top and the height of the fill area below it. */
  const crestY = $derived(baseY - DOME.reservoir - DOME.rise);
  const fillHeight = DOME.rise + DOME.reservoir;
  const full = $derived(Math.min(1, ((field.trappedOil + field.trappedGas) / 100) * 0.9));
  const gasH = $derived(
    fillHeight * full * (field.trappedGas / Math.max(1, field.trappedOil + field.trappedGas)),
  );
  const oilH = $derived(fillHeight * full - gasH);
  const leaking = $derived(!seal && amounts.oil + amounts.gas >= 1);

  /** Sediment stripes between the sea floor and the source rock. */
  const stripes = $derived(
    Array.from({ length: Math.floor(depth / 0.5) }, (_, i) => FLOOR + i * 0.5 * PX_PER_KM),
  );
  const KM_TICKS = [0, 1, 2, 3, 4, 5, 6];

  const label = $derived(
    `Mặt cắt địa tầng sau ${formatNumber(time)} triệu năm: lớp đá mẹ sâu ${formatNumber(depth, 1)} km, nhiệt độ ${formatNumber(temp)} độ C, giai đoạn ${STAGES[stage].name.toLowerCase()}. ` +
      (hasDome
        ? seal
          ? `Bẫy dưới lớp đá chắn chứa ${formatNumber(field.trappedOil, 1)}% dầu và ${formatNumber(field.trappedGas, 1)}% khí.`
          : 'Không có lớp đá chắn.'
        : 'Chưa có tầng đá chứa phía trên.'),
  );

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function play() {
    if (playing) return halt();
    if (time >= MAX_TIME) time = 0;
    if (reducedMotion()) {
      time = MAX_TIME;
      return;
    }
    playing = true;
    stop = frameLoop((dt) => {
      time = Math.min(MAX_TIME, Math.round((time + dt * 15) * 10) / 10);
      if (time >= MAX_TIME) halt();
    });
  }

  onDestroy(halt);
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 360 250"
    class="w-full rounded-xl border border-slate-200 bg-white"
    role="img"
    aria-label={label}
  >
    <defs>
      <clipPath id="{uid}-res"><path d={reservoirPath} /></clipPath>
    </defs>
    <rect x="0" y="0" width="360" height={FLOOR} fill="#bfdbfe" />
    <text x="356" y="16" text-anchor="end" font-size="11" fill="#1e3a8a">Biển</text>
    <rect x="40" y={FLOOR} width="320" height={Math.max(0, sourceY - FLOOR)} fill="#e7e5e4" />
    {#each stripes as y (y)}
      <line x1="40" x2="360" y1={y} y2={y} stroke="#d6d3d1" stroke-width="1" />
    {/each}
    <rect x="40" y={sourceY} width="320" height="10" fill="#57534e" />
    <text x="44" y={sourceY + 21} font-size="11" fill="#44403c">Đá mẹ (chứa xác sinh vật)</text>

    {#if hasDome}
      <path d={reservoirPath} fill="#fde68a" stroke="#b45309" stroke-width="1" />
      <g clip-path="url(#{uid}-res)">
        <rect
          x={DOME.left}
          y={crestY}
          width={DOME.right - DOME.left}
          height={gasH}
          fill="#f9a8d4"
        />
        <rect
          x={DOME.left}
          y={crestY + gasH}
          width={DOME.right - DOME.left}
          height={oilH}
          fill="#78350f"
        />
        <rect
          x={DOME.left}
          y={crestY + gasH + oilH}
          width={DOME.right - DOME.left}
          height={fillHeight}
          fill="#93c5fd"
          opacity="0.6"
        />
      </g>
      {#if seal}
        <path d={sealPath} fill="#64748b" />
        <text x={mid} y={crestY - DOME.seal - 4} text-anchor="middle" font-size="11" fill="#334155"
          >Đá chắn (đá sét)</text
        >
      {:else}
        <path d={sealPath} fill="none" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1" />
      {/if}
      {#if leaking}
        {#each [mid - 50, mid, mid + 50] as x (x)}
          <line
            x1={x}
            x2={x}
            y1={crestY}
            y2={FLOOR + 4}
            stroke="#78350f"
            stroke-width="2"
            stroke-dasharray="3 4"
          />
        {/each}
        <text x={mid} y={FLOOR + 14} text-anchor="middle" font-size="11" fill="#78350f"
          >dầu, khí thoát lên</text
        >
      {/if}
    {/if}

    <g font-size="10" fill="#475569">
      {#each KM_TICKS as km (km)}
        <line
          x1="34"
          x2="40"
          y1={FLOOR + km * PX_PER_KM}
          y2={FLOOR + km * PX_PER_KM}
          stroke="#475569"
        />
        <text x="31" y={FLOOR + km * PX_PER_KM + 3} text-anchor="end">{km} km</text>
      {/each}
    </g>
    <rect
      x="44"
      y={FLOOR + 4}
      width="72"
      height="20"
      rx="4"
      fill={temp >= OIL_WINDOW[1] ? '#fecaca' : temp >= OIL_WINDOW[0] ? '#fed7aa' : '#f1f5f9'}
    />
    <text x="80" y={FLOOR + 18} text-anchor="middle" font-size="12" font-weight="600" fill="#0f172a"
      >{formatNumber(temp)} °C</text
    >
  </svg>

  <div class="flex flex-wrap gap-2 text-xs" aria-hidden="true">
    <span class="rounded bg-[#f9a8d4] px-2 py-0.5 ring-1 ring-slate-300">Khí</span>
    <span class="rounded bg-[#78350f] px-2 py-0.5 text-white">Dầu</span>
    <span class="rounded bg-[#93c5fd] px-2 py-0.5">Nước mặn</span>
    <span class="rounded bg-[#fde68a] px-2 py-0.5">Đá chứa (cát kết)</span>
  </div>

  <SliderField
    label="Thời gian từ khi lắng đọng"
    bind:value={time}
    min={0}
    max={MAX_TIME}
    step={1}
    unit="triệu năm"
    format={(v) => formatNumber(Math.round(v))}
    oninput={halt}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={play}
      >{playing ? 'Tạm dừng' : 'Chạy thời gian'}</button
    >
    <button type="button" class={button.quiet} aria-pressed={seal} onclick={() => (seal = !seal)}
      >{seal ? 'Bỏ lớp đá chắn' : 'Thêm lớp đá chắn'}</button
    >
  </div>

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm">
    <p class="font-semibold text-slate-800">
      Giai đoạn: {STAGES[stage].name} · sâu {formatNumber(depth, 1)} km
    </p>
    <p class="mt-1 text-slate-700"><LiveRichText text={STAGES[stage].text} /></p>
    <p class="mt-1 text-slate-600">
      Kerogen còn {formatNumber(amounts.kerogen, 1)}%, đã sinh {formatNumber(amounts.oil, 1)}% dầu
      và
      {formatNumber(amounts.gas, 1)}% khí.
    </p>
  </div>

  <FeedbackNote
    tone={hasDome && seal && field.trappedOil + field.trappedGas >= 1
      ? 'ok'
      : leaking
        ? 'warn'
        : 'info'}
    text={feedback}
  />
</div>
