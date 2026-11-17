<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { SETTINGS, setting, stateAt } from './engine.js';

  const TUBE = 58;
  const options = SETTINGS.map((s, i) => ({ value: s.id, label: `${i + 1}. ${s.label}` }));
  const clip = $props.id();

  let days = $state(0);
  let picked = $state('nuoc');

  const s = $derived(setting(picked));
  const now = $derived(stateAt(s, days));

  /** @param {number} share */
  const percent = (share) => `${formatNumber(Math.round(share * 100))}%`;

  /** @param {import('./engine.js').Setting} x */
  function describe(x) {
    const st = stateAt(x, days);
    const wire = x.wire ? `, dây ${x.wire} bị ăn mòn ${percent(st.wire)}` : '';
    return `${x.label}: đinh gỉ ${percent(st.rust)}${wire}`;
  }

  const note = $derived.by(() => {
    if (days === 0)
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Kéo thanh thời gian để xem các đinh sắt sau một số ngày. Chọn một ống để đọc giải thích.',
      };
    const head =
      s.wire === 'Zn'
        ? `Sau ${formatNumber(days)} ngày: đinh sắt không gỉ, dây kẽm bị ăn mòn ${percent(now.wire)}.`
        : `Sau ${formatNumber(days)} ngày: đinh gỉ ${percent(now.rust)}.`;
    return {
      tone: now.rust > 0.3 ? /** @type {const} */ ('warn') : /** @type {const} */ ('ok'),
      text: `${head} ${s.why}`,
    };
  });
</script>

<div class="space-y-3">
  <SliderField
    label="Thời gian"
    bind:value={days}
    min={0}
    max={10}
    format={(v) => `${formatNumber(v)} ngày`}
  />

  <svg
    viewBox="0 0 {SETTINGS.length * TUBE + 8} 190"
    class="w-full max-w-xl"
    role="img"
    aria-label="Sau {formatNumber(days)} ngày. {SETTINGS.map(describe).join('. ')}."
  >
    {#each SETTINGS as x, i (x.id)}
      {@const st = stateAt(x, days)}
      {@const left = 8 + i * TUBE}
      {@const cx = left + 22}
      <g opacity={x.id === picked ? 1 : 0.75}>
        <clipPath id="{clip}-{i}">
          <path d="M {left} 30 L {left} 150 A 22 22 0 0 0 {left + 44} 150 L {left + 44} 30 Z" />
        </clipPath>
        <g clip-path="url(#{clip}-{i})">
          {#if x.liquid}
            <rect
              x={left}
              y={x.id === 'khong-oxi' ? 62 : 56}
              width="44"
              height="130"
              fill={x.liquid}
            />
            {#if x.id === 'khong-oxi'}
              <rect x={left} y="54" width="44" height="8" fill="#fde047" />
            {/if}
            {#if st.rust > 0.2}
              <rect
                x={left}
                y="160"
                width="44"
                height="20"
                fill="#9a3412"
                opacity={Math.min(0.8, st.rust)}
              />
            {/if}
          {:else}
            <rect x={left + 8} y="150" width="28" height="22" fill="#e2e8f0" />
            <text x={cx} y="166" text-anchor="middle" font-size="7" fill="#475569">CaCl₂</text>
          {/if}
        </g>
        <path
          d="M {left} 22 L {left} 150 A 22 22 0 0 0 {left + 44} 150 L {left + 44} 22"
          fill="none"
          stroke={x.id === picked ? '#4f46e5' : '#64748b'}
          stroke-width={x.id === picked ? 3 : 2}
        />
        <!-- the nail -->
        <rect x={cx - 3} y="40" width="6" height="105" fill="#94a3b8" />
        <rect x={cx - 8} y="36" width="16" height="5" rx="1" fill="#64748b" />
        <path d="M {cx - 3} 145 L {cx} 155 L {cx + 3} 145 Z" fill="#94a3b8" />
        {#if st.rust > 0}
          <rect
            x={cx - 4}
            y="60"
            width="8"
            height="88"
            fill="#c2410c"
            opacity={Math.min(0.95, st.rust * 1.4)}
          />
          {#each [70, 95, 120, 140] as y, k (k)}
            {#if st.rust > k * 0.15}
              <circle cx={cx + (k % 2 ? 4 : -4)} cy={y} r={2 + st.rust * 3} fill="#9a3412" />
            {/if}
          {/each}
        {/if}
        {#if x.wire}
          {#each [80, 90, 100, 110, 120] as y (y)}
            <ellipse
              {cx}
              cy={y}
              rx="7"
              ry="3"
              fill="none"
              stroke={x.wire === 'Cu' ? '#b45309' : '#a1a1aa'}
              stroke-width={x.wire === 'Zn' ? Math.max(0.4, 2.5 * (1 - st.wire)) : 2.5}
            />
          {/each}
        {/if}
        <text x={cx} y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a"
          >{i + 1}</text
        >
        <text x={cx} y="186" text-anchor="middle" font-size="9" fill="#334155"
          >{percent(x.wire === 'Zn' ? st.wire : st.rust)}</text
        >
      </g>
    {/each}
  </svg>
  <p class="text-xs text-slate-500">
    Số dưới mỗi ống: phần đinh bị gỉ; riêng ống 6 là phần dây kẽm bị ăn mòn.
  </p>

  <SegmentedControl label="Xem giải thích cho ống" {options} bind:value={picked} />

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
