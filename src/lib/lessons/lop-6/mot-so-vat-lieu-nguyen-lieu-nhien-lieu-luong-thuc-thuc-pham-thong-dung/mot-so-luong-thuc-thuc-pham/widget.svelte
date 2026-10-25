<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { sectorPath } from '#lib/core/visuals/svg-math.js';
  import { CAPACITY, FOODS, GROUPS, canAdd, counts, food, judgePlate } from './engine.js';

  /** @type {string[]} */
  let plate = $state([]);
  /** @type {string | null} */
  let checked = $state(null);
  let message = $state(
    'Chạm vào thực phẩm để đặt một phần lên đĩa. Chạm vào phần trên đĩa để bỏ ra.',
  );

  const n = $derived(counts(plate));
  const result = $derived(judgePlate(plate));
  const color = Object.fromEntries(GROUPS.map((g) => [g.id, g.color]));

  // portions on the plate, sorted by group so the plate reads as sectors
  const order = GROUPS.map((g) => g.id);
  const sorted = $derived(
    plate
      .map((id, i) => ({ id, i }))
      .sort((a, b) => order.indexOf(food(a.id).group) - order.indexOf(food(b.id).group)),
  );

  /** @param {string} id */
  function add(id) {
    if (!canAdd(plate)) {
      message = `Đĩa đã đầy ${CAPACITY} phần. Bỏ bớt một phần trước khi thêm.`;
      return;
    }
    plate = [...plate, id];
    checked = null;
    const f = food(id);
    message = `Đã thêm ${f.label.toLowerCase()}. ${f.also}`;
  }

  /** @param {number} i */
  function remove(i) {
    const f = food(plate[i]);
    plate = plate.filter((_, k) => k !== i);
    checked = null;
    message = `Đã bỏ ${f.label.toLowerCase()} ra khỏi đĩa.`;
  }

  function check() {
    checked = result.messages.join(' ');
    message = checked;
  }

  /** @param {number} k */
  function sector(k) {
    const step = 360 / CAPACITY;
    return sectorPath(100, 100, 82, k * step, (k + 1) * step);
  }
</script>

<div class="space-y-4">
  <div class="grid gap-4 sm:grid-cols-2">
    <div>
      <svg
        viewBox="0 0 200 200"
        class="mx-auto block w-full max-w-64"
        role="img"
        aria-label="Đĩa ăn có {plate.length} trên {CAPACITY} phần: {GROUPS.map(
          (g) => `${n[g.id]} phần ${g.label.toLowerCase()}`,
        ).join(', ')}"
      >
        <circle cx="100" cy="100" r="96" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" />
        {#each Array(CAPACITY) as _, k (k)}
          {@const item = sorted[k]}
          <path
            d={sector(k)}
            fill={item ? color[food(item.id).group] : '#ffffff'}
            stroke="#e2e8f0"
            stroke-width="2"
            opacity={item ? 0.85 : 1}
          />
        {/each}
        <circle cx="100" cy="100" r="26" fill="#ffffff" stroke="#e2e8f0" />
        <text x="100" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">
          {plate.length}/{CAPACITY}
        </text>
      </svg>
      <ul class="mt-2 flex flex-wrap gap-2" aria-label="Các phần trên đĩa">
        {#each sorted as item (item.i)}
          <li>
            <button
              type="button"
              class="min-h-11 rounded-full border px-3 py-1 text-sm font-medium {focusRing}"
              style="border-color: {color[food(item.id).group]}"
              aria-label="Bỏ {food(item.id).label} ra khỏi đĩa"
              onclick={() => remove(item.i)}
            >
              {food(item.id).label} ✕
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="space-y-3">
      {#each GROUPS as g (g.id)}
        <fieldset class="min-w-0">
          <legend class="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span class="inline-block h-3 w-3 rounded-full" style="background: {g.color}"></span>
            {g.label}: {n[g.id]} phần
          </legend>
          <div class="flex flex-wrap gap-2">
            {#each FOODS.filter((f) => f.group === g.id) as f (f.id)}
              <button
                type="button"
                class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 {focusRing}"
                aria-label="Thêm {f.label} vào đĩa"
                onclick={() => add(f.id)}
              >
                + {f.label}
              </button>
            {/each}
          </div>
        </fieldset>
      {/each}
    </div>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={check} disabled={plate.length === 0}>
      Kiểm tra đĩa ăn
    </button>
    <button
      type="button"
      class={button.quiet}
      disabled={plate.length === 0}
      onclick={() => {
        plate = [];
        checked = null;
        message = 'Đĩa đã trống. Chọn lại thực phẩm.';
      }}
    >
      Làm lại
    </button>
  </div>

  <p
    class="rounded-xl px-4 py-3 text-sm {checked !== null && result.ok
      ? 'bg-emerald-50 text-emerald-900'
      : 'bg-slate-100 text-slate-800'}"
    aria-live="polite"
  >
    {message}
  </p>
</div>
