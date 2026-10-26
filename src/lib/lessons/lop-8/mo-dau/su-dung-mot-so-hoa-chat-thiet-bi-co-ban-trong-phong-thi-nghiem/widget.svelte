<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import LabIcon from './lab-icon.svelte';
  import {
    GROUPS,
    ITEMS,
    TASKS,
    firstTryScore,
    itemById,
    judgeTask,
    shelfGroups,
  } from './engine.js';

  const MODES = [
    { value: 'dung-cu', label: 'Kệ dụng cụ' },
    { value: 'thiet-bi-dien', label: 'Kệ thiết bị điện' },
    { value: 'thu-thach', label: 'Thử thách' },
  ];
  let mode = $state('dung-cu');

  // Shelves: tap an item to read its name, use and the right handling.
  /** @type {Record<string, string>} */
  let selected = $state({ 'dung-cu': 'ong-nghiem', 'thiet-bi-dien': 'pin' });
  /** @type {Record<string, boolean>} */
  let seen = $state({ 'ong-nghiem': true, pin: true });
  const shelf = $derived(mode === 'thiet-bi-dien' ? 'thiet-bi-dien' : 'dung-cu');
  const groups = $derived(shelfGroups(shelf));
  const item = $derived(itemById(selected[shelf]));
  const shelfSize = $derived(ITEMS.filter((it) => it.shelf === shelf).length);
  const seenOnShelf = $derived(ITEMS.filter((it) => it.shelf === shelf && seen[it.id]).length);

  /** @param {string} id */
  function open(id) {
    selected = { ...selected, [shelf]: id };
    seen = { ...seen, [id]: true };
  }

  // Challenge: pick the one item each task needs.
  let taskIndex = $state(0);
  /** @type {Record<string, string>} */
  let firstPicks = $state({});
  /** @type {Record<string, string>} */
  let lastPick = $state({});
  const task = $derived(TASKS[taskIndex]);
  const picked = $derived(lastPick[task.id]);
  const verdict = $derived(picked ? judgeTask(task, picked) : null);
  const solved = $derived(verdict?.ok === true);
  const score = $derived(firstTryScore(firstPicks));
  const done = $derived(TASKS.filter((t) => lastPick[t.id] === t.answer).length);

  /** @param {string} id */
  function pick(id) {
    if (solved) return;
    if (firstPicks[task.id] === undefined) firstPicks = { ...firstPicks, [task.id]: id };
    lastPick = { ...lastPick, [task.id]: id };
  }

  function nextTask() {
    taskIndex = (taskIndex + 1) % TASKS.length;
  }

  function restart() {
    firstPicks = {};
    lastPick = {};
    taskIndex = 0;
  }

  const tileClass = `flex min-h-11 flex-col items-center gap-1 rounded-xl border p-2 text-center text-xs leading-tight ${focusRing}`;
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} />

  {#if mode !== 'thu-thach'}
    <div class="space-y-3">
      {#each groups as g (g.group)}
        <div>
          <h3 class="mb-1 text-sm font-semibold text-slate-600">{g.label}</h3>
          <div class="grid grid-cols-3 gap-2 sm:grid-cols-5" role="group" aria-label={g.label}>
            {#each g.items as it (it.id)}
              {@const on = selected[shelf] === it.id}
              <button
                type="button"
                class="{tileClass} {on
                  ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-900'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}"
                aria-pressed={on}
                onclick={() => open(it.id)}
              >
                <LabIcon id={it.id} size={40} />
                <span>{it.name}</span>
                {#if seen[it.id] && !on}<span class="sr-only">(đã xem)</span>{/if}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    {#if item}
      <div class="rounded-xl border border-slate-200 bg-white p-4" aria-live="polite">
        <div class="flex items-center gap-3">
          <LabIcon id={item.id} size={56} />
          <div>
            <p class="text-lg font-bold text-slate-900">{item.name}</p>
            <p class="text-sm text-slate-500">{GROUPS[item.group]}</p>
          </div>
        </div>
        <dl class="mt-3 space-y-2 text-sm">
          <div>
            <dt class="font-semibold text-slate-700">Công dụng</dt>
            <dd class="text-slate-700">{item.use}</dd>
          </div>
          <div>
            <dt class="font-semibold text-emerald-800">Thao tác đúng</dt>
            <dd class="text-slate-700">{item.howTo}</dd>
          </div>
          <div>
            <dt class="font-semibold text-rose-800">Lưu ý an toàn</dt>
            <dd class="text-slate-700">{item.careful}</dd>
          </div>
        </dl>
      </div>
    {/if}
    <p class="text-sm font-semibold tabular-nums text-slate-700">
      Đã xem {seenOnShelf}/{shelfSize} trên kệ này
    </p>
  {:else}
    <div class="rounded-xl border border-slate-200 bg-white p-4">
      <p class="text-sm text-slate-500">Nhiệm vụ {taskIndex + 1}/{TASKS.length}</p>
      <p class="mt-1 font-semibold text-slate-900">{task.task}</p>
      <p class="mt-1 text-sm text-slate-600">Chọn dụng cụ hoặc thiết bị phù hợp nhất trên kệ.</p>
    </div>

    <div
      class="grid grid-cols-3 gap-2 sm:grid-cols-6"
      role="group"
      aria-label="Kệ dụng cụ và thiết bị"
    >
      {#each ITEMS as it (it.id)}
        {@const isPick = picked === it.id}
        <button
          type="button"
          class="{tileClass} {isPick
            ? verdict?.ok
              ? 'border-emerald-600 bg-emerald-50 font-semibold text-emerald-900'
              : 'border-rose-600 bg-rose-50 text-rose-900'
            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}"
          aria-pressed={isPick}
          disabled={solved && !isPick}
          onclick={() => pick(it.id)}
        >
          <LabIcon id={it.id} size={32} />
          <span>{it.name}</span>
        </button>
      {/each}
    </div>

    <FeedbackNote
      tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
      text={verdict ? verdict.text : 'Bấm vào một dụng cụ hoặc thiết bị để chọn.'}
    />
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm font-semibold tabular-nums text-slate-700">
        Đúng ngay lần đầu: {score}/{TASKS.length} · Hoàn thành: {done}/{TASKS.length}
      </span>
      <button type="button" class={solved ? button.primary : button.quiet} onclick={nextTask}
        >Nhiệm vụ tiếp</button
      >
      <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
    </div>
  {/if}
</div>
