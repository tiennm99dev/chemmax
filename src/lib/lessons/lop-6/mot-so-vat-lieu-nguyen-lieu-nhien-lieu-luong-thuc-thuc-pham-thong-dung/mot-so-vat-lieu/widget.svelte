<script>
  import { button, card, focusRing } from '#lib/core/ui.js';
  import { MATERIALS, THINGS, material, property, suitable, suits, verdict } from './engine.js';

  let thingId = $state(THINGS[0].id);
  /** @type {string | null} */
  let chosen = $state(null);
  /** @type {Record<string, string>} first right material per object */
  let solved = $state({});
  let message = $state('Chọn một đồ vật, đọc yêu cầu của nó, rồi chọn vật liệu để làm.');

  const current = $derived(THINGS.find((t) => t.id === thingId) ?? THINGS[0]);
  const needed = $derived(
    Object.entries(current.needs).map(([pid, need]) => ({ p: property(pid), need })),
  );
  const done = $derived(Object.keys(solved).length);

  /** @param {string} id */
  function pickThing(id) {
    thingId = id;
    chosen = null;
    const t = THINGS.find((x) => x.id === id);
    if (t) message = `${t.label}: ${t.why} Chọn vật liệu.`;
  }

  /** @param {string} id */
  function pickMaterial(id) {
    chosen = id;
    message = verdict(thingId, id);
    if (suits(thingId, id) && solved[thingId] === undefined) solved = { ...solved, [thingId]: id };
  }

  /** @param {'yes' | 'no' | 'some'} v */
  function mark(v) {
    return v === 'yes' ? 'Có' : v === 'no' ? 'Không' : 'Một số loại';
  }
</script>

<div class="space-y-4">
  <fieldset class="min-w-0">
    <legend class="mb-2 text-sm font-semibold text-slate-700">
      Đồ vật cần làm (đã chọn đúng {done}/{THINGS.length})
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each THINGS as t (t.id)}
        <button
          type="button"
          aria-pressed={thingId === t.id}
          class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm font-medium transition {focusRing} {thingId ===
          t.id
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          onclick={() => pickThing(t.id)}
        >
          {solved[t.id] ? '✓ ' : ''}{t.label}
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="{card} p-3">
    <p class="font-semibold text-slate-800">{current.label} cần vật liệu:</p>
    <ul class="mt-1 list-disc pl-5 text-sm text-slate-700">
      {#each needed as { p, need } (p.id)}
        <li>{need === 'yes' ? p.yes : p.no}</li>
      {/each}
    </ul>
  </div>

  <fieldset class="min-w-0">
    <legend class="mb-2 text-sm font-semibold text-slate-700">Chọn vật liệu</legend>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {#each MATERIALS as m (m.id)}
        {@const right = chosen === m.id && suits(thingId, m.id)}
        {@const wrong = chosen === m.id && !suits(thingId, m.id)}
        <button
          type="button"
          aria-pressed={chosen === m.id}
          class="min-h-11 rounded-lg border-2 px-3 py-2 font-semibold transition {focusRing} {right
            ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
            : wrong
              ? 'border-rose-500 bg-rose-50 text-rose-800'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          onclick={() => pickMaterial(m.id)}
        >
          {m.label}
        </button>
      {/each}
    </div>
  </fieldset>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  {#if chosen}
    <p class="text-sm text-slate-600">
      <span class="font-semibold">{material(chosen).label}:</span>
      {material(chosen).note}
    </p>
  {/if}

  <div class="overflow-x-auto">
    <table class="w-full min-w-[22rem] text-xs sm:text-sm">
      <caption class="mb-1 text-left text-sm font-semibold text-slate-700">
        So sánh vật liệu theo yêu cầu của {current.label.toLowerCase()}
      </caption>
      <thead>
        <tr class="text-left text-slate-600">
          <th scope="col" class="py-1 pr-2">Tính chất</th>
          {#each MATERIALS as m (m.id)}
            <th scope="col" class="px-1 py-1">{m.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each needed as { p, need } (p.id)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="py-1 pr-2 text-left font-medium">
              {p.label} <span class="text-slate-500">(cần: {need === 'yes' ? 'có' : 'không'})</span>
            </th>
            {#each MATERIALS as m (m.id)}
              {@const ok = m.values[p.id] === need}
              <td class="px-1 py-1 {ok ? 'text-emerald-700' : 'text-rose-700'}">
                {mark(m.values[p.id])}
              </td>
            {/each}
          </tr>
        {/each}
        <tr class="border-t-2 border-slate-300 font-semibold">
          <th scope="row" class="py-1 pr-2 text-left">Phù hợp?</th>
          {#each MATERIALS as m (m.id)}
            <td class="px-1 py-1">
              {#if chosen === null && solved[thingId] === undefined}
                ?
              {:else}
                {suitable(thingId).includes(m.id) ? 'Có' : 'Không'}
              {/if}
            </td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>

  {#if done === THINGS.length}
    <p class="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
      Em đã chọn đúng vật liệu cho cả {THINGS.length} đồ vật. Mỗi đồ vật cần những tính chất riêng, nên
      ta chọn vật liệu theo tính chất; một chiếc nồi có thể cần hai vật liệu khác nhau cho thân và quai.
    </p>
  {/if}
  <button
    type="button"
    class={button.quiet}
    onclick={() => {
      solved = {};
      chosen = null;
      message = 'Đã làm lại từ đầu. Chọn một đồ vật.';
    }}
    disabled={done === 0}
  >
    Làm lại
  </button>
</div>
