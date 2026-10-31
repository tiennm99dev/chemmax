<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { ISLANDS, KINDS, MAP, MINERALS, OUTLINE, project } from './engine.js';

  /** @typedef {keyof typeof KINDS} Kind */

  let kind = $state(/** @type {'all' | Kind} */ ('all'));
  let chosen = $state('than');

  const shown = $derived(MINERALS.filter((m) => kind === 'all' || m.kind === kind));
  const deposit = $derived(MINERALS.find((m) => m.id === chosen) ?? MINERALS[0]);
  const outline = OUTLINE.map(([lon, lat]) => {
    const p = project(lon, lat);
    return `${p.x},${p.y}`;
  }).join(' ');
  const islandDots = ISLANDS.map((isl) => {
    const c = project(isl.lon, isl.lat);
    return {
      name: isl.name,
      c,
      dots: [
        [0, 0],
        [6, 3],
        [-5, 5],
        [3, -6],
        [9, -2],
      ].map(([dx, dy]) => ({ x: c.x + dx, y: c.y + dy })),
    };
  });

  /** @param {string | number} value */
  function chooseKind(value) {
    kind = /** @type {'all' | Kind} */ (value);
    const first = MINERALS.find((m) => kind === 'all' || m.kind === kind);
    if (first && !(kind === 'all' || deposit.kind === kind)) chosen = first.id;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại khoáng sản"
    options={[
      { value: 'all', label: 'Tất cả' },
      ...Object.entries(KINDS).map(([value, k]) => ({ value, label: k.label })),
    ]}
    value={kind}
    onchange={chooseKind}
  />

  <div class="grid gap-4 sm:grid-cols-[minmax(0,18rem)_1fr]">
    <svg
      viewBox="0 0 {MAP.width} {MAP.height}"
      class="mx-auto block w-full max-w-[18rem] select-none"
      role="img"
      aria-label="Sơ đồ một số mỏ khoáng sản ở Việt Nam. Đang chọn: {deposit.name} ở {deposit.place}."
    >
      <rect width={MAP.width} height={MAP.height} fill="#e0f2fe" rx="10" />
      <polygon points={outline} fill="#fefce8" stroke="#a16207" stroke-width="1.2" />
      {#each islandDots as isl (isl.name)}
        {#each isl.dots as d, i (i)}
          <circle cx={d.x} cy={d.y} r="1.6" fill="#a16207" />
        {/each}
        <text x={isl.c.x + 22} y={isl.c.y + 18} text-anchor="end" font-size="8" fill="#334155"
          >{isl.name}</text
        >
      {/each}
      <text x="200" y="232" font-size="10" fill="#0369a1" font-style="italic">Biển Đông</text>
      {#each shown as m (m.id)}
        {@const p = project(m.lon, m.lat)}
        {@const on = m.id === chosen}
        <!-- A pointer shortcut for the deposit buttons beside the map, which keyboard and screen reader users reach. -->
        <g aria-hidden="true" class="cursor-pointer" onclick={() => (chosen = m.id)}>
          <circle cx={p.x} cy={p.y} r="9" fill="transparent" />
          <circle
            cx={p.x}
            cy={p.y}
            r={on ? 6.5 : 4.5}
            fill={KINDS[m.kind].colour}
            stroke={on ? '#4f46e5' : '#fff'}
            stroke-width={on ? 3 : 1.5}
          />
        </g>
      {/each}
    </svg>

    <div class="space-y-3">
      <ul class="flex flex-wrap gap-2" aria-label="Các mỏ khoáng sản">
        {#each shown as m (m.id)}
          <li>
            <button
              type="button"
              class="flex min-h-11 items-center gap-2 rounded-lg border px-3 py-1 text-sm {m.id ===
              chosen
                ? 'border-indigo-500 bg-indigo-50 font-semibold'
                : 'border-slate-200 bg-white'} {focusRing}"
              aria-pressed={m.id === chosen}
              onclick={() => (chosen = m.id)}
            >
              <span class="h-3 w-3 shrink-0 rounded-full" style:background={KINDS[m.kind].colour}
              ></span>
              {m.name} ({m.place.split(' (')[0].split(',')[0]})
            </button>
          </li>
        {/each}
      </ul>

      <div class="rounded-xl border border-slate-200 bg-white p-4 text-sm" aria-live="polite">
        <p class="text-base font-bold text-slate-900">{deposit.name}</p>
        <p class="text-slate-600">{KINDS[deposit.kind].label}</p>
        <dl class="mt-2 space-y-1">
          <div>
            <dt class="inline font-semibold">Nơi có:</dt>
            <dd class="inline">{deposit.place}</dd>
          </div>
          <div>
            <dt class="inline font-semibold">Thành phần chính:</dt>
            <dd class="inline">{deposit.main}</dd>
          </div>
          <div>
            <dt class="inline font-semibold">Dùng để:</dt>
            <dd class="inline">{deposit.use}</dd>
          </div>
        </dl>
      </div>
      <p class="text-xs text-slate-500">Sơ đồ chỉ để xác định vùng, không theo tỉ lệ.</p>
    </div>
  </div>
</div>
