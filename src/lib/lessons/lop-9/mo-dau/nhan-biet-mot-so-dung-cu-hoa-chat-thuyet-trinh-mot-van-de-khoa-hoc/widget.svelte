<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ToolIcon from './tool-icon.svelte';
  import {
    CHEMICALS,
    CHEM_BINS,
    REPORT_PARTS,
    TOOLS,
    TOOL_GROUPS,
    TOPICS,
    firstTryScore,
    judgeNextPart,
    judgeTool,
    roundOptions,
    toolById,
    toolOrder,
  } from './engine.js';

  const MODES = [
    { value: 'dung-cu', label: 'Nhận biết dụng cụ' },
    { value: 'hoa-chat', label: 'Phân loại hoá chất' },
    { value: 'dan-y', label: 'Dàn ý thuyết trình' },
  ];
  let mode = $state('dung-cu');

  // Picture game: name the tool on the picture.
  let seed = $state(1);
  const order = $derived(toolOrder(seed));
  let index = $state(0);
  /** @type {Record<string, string>} */
  let firstPicks = $state({});
  /** @type {Record<string, string>} */
  let lastPick = $state({});
  const toolId = $derived(order[index]);
  const tool = $derived(toolById(toolId));
  const options = $derived(roundOptions(toolId, seed * 101 + index));
  const picked = $derived(lastPick[toolId]);
  const verdict = $derived(picked ? judgeTool(toolId, picked) : null);
  const solved = $derived(verdict?.ok === true);
  const score = $derived(firstTryScore(firstPicks));
  const named = $derived(TOOLS.filter((t) => lastPick[t.id] === t.id).length);

  /** @param {string} id */
  function guess(id) {
    if (solved) return;
    if (firstPicks[toolId] === undefined) firstPicks = { ...firstPicks, [toolId]: id };
    lastPick = { ...lastPick, [toolId]: id };
  }

  function nextTool() {
    index = (index + 1) % order.length;
  }

  function newRound() {
    seed += 1;
    index = 0;
    firstPicks = {};
    lastPick = {};
  }

  // Chemicals: sort the deck into the groups of the book.
  const deck = shuffled(CHEMICALS, 9);

  // Outline: build the report parts in order for a sample topic.
  let topicId = $state(TOPICS[0].id);
  const topic = $derived(TOPICS.find((t) => t.id === topicId) ?? TOPICS[0]);
  /** @type {string[]} */
  let built = $state([]);
  let outlineNote = $state(/** @type {{ ok: boolean, text: string } | null} */ (null));
  const pool = shuffled(REPORT_PARTS, 7);
  const outlineDone = $derived(built.length === REPORT_PARTS.length);

  /** @param {string} id */
  function place(id) {
    if (built.includes(id)) return;
    const v = judgeNextPart(built, id);
    outlineNote = v;
    if (v.ok) built = [...built, id];
  }

  function resetOutline() {
    built = [];
    outlineNote = null;
  }

  const tileClass = `flex min-h-11 items-center justify-center rounded-xl border px-3 py-2 text-center text-sm ${focusRing}`;
</script>

<div class="space-y-4">
  <SegmentedControl label="Hoạt động" options={MODES} bind:value={mode} />

  {#if mode === 'dung-cu'}
    {#if tool}
      <div class="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4">
        <p class="text-sm text-slate-500">
          Hình {index + 1}/{order.length} · {TOOL_GROUPS[tool.group]}
        </p>
        <div role="img" aria-label="Hình dụng cụ số {index + 1} cần gọi tên">
          <ToolIcon id={tool.id} size={120} />
        </div>
        <p class="font-semibold text-slate-900">Đây là dụng cụ nào?</p>
      </div>
      <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Các tên để chọn">
        {#each options as id (id)}
          {@const isPick = picked === id}
          <button
            type="button"
            class="{tileClass} {isPick
              ? verdict?.ok
                ? 'border-emerald-600 bg-emerald-50 font-semibold text-emerald-900'
                : 'border-rose-600 bg-rose-50 text-rose-900'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}"
            aria-pressed={isPick}
            disabled={solved && !isPick}
            onclick={() => guess(id)}>{toolById(id)?.name}</button
          >
        {/each}
      </div>
      <FeedbackNote
        tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
        text={verdict ? verdict.text : 'Bấm vào tên đúng của dụng cụ trong hình.'}
      />
      {#if solved}
        <p class="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-900">
          <span class="font-semibold">Lưu ý an toàn:</span>
          {tool.careful}
        </p>
      {/if}
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-sm font-semibold tabular-nums text-slate-700">
          Đúng ngay lần đầu: {score}/{TOOLS.length} · Đã gọi tên: {named}/{TOOLS.length}
        </span>
        <button type="button" class={solved ? button.primary : button.quiet} onclick={nextTool}
          >Hình tiếp</button
        >
        <button type="button" class={button.quiet} onclick={newRound}>Lượt mới</button>
      </div>
    {/if}
  {:else if mode === 'hoa-chat'}
    <p class="text-sm text-slate-600">
      Xếp mỗi hoá chất cơ bản của phòng thí nghiệm vào đúng nhóm. Sau mỗi lần đặt, đọc lời giải
      thích để biết thêm cách bảo quản hoá chất đó.
    </p>
    <CardSorter cards={deck} bins={CHEM_BINS} label="Phân loại hoá chất" hintOnWrong />
  {:else}
    <SegmentedControl
      label="Vấn đề khoa học"
      options={TOPICS.map((t) => ({ value: t.id, label: t.title }))}
      bind:value={topicId}
    />
    <p class="text-sm text-slate-600">
      Bấm các phần của bài báo cáo theo đúng thứ tự từ trên xuống để lập dàn ý thuyết trình.
    </p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Các phần chưa xếp">
      {#each pool as p (p.id)}
        {#if !built.includes(p.id)}
          <button
            type="button"
            class="{tileClass} border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
            onclick={() => place(p.id)}>{p.name}</button
          >
        {/if}
      {/each}
      {#if outlineDone}
        <span class="text-sm font-semibold text-emerald-800">Đã xếp đủ 8 phần.</span>
      {/if}
    </div>
    <FeedbackNote
      tone={outlineNote ? (outlineNote.ok ? 'ok' : 'warn') : 'info'}
      text={outlineNote
        ? outlineNote.text
        : 'Phần đầu tiên của bài báo cáo là gì? Bấm vào phần đó.'}
    />
    <ol class="space-y-2" aria-label="Dàn ý bài thuyết trình">
      {#each built as id, i (id)}
        {@const p = REPORT_PARTS.find((x) => x.id === id)}
        {#if p}
          <li class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm">
            <p class="font-semibold text-emerald-900">{i + 1}. {p.name}</p>
            <p class="text-slate-600">{p.what}</p>
            <p class="mt-1 text-slate-800">
              <span class="font-semibold">Ví dụ:</span>
              {topic.parts[p.id]}
            </p>
          </li>
        {/if}
      {/each}
    </ol>
    <button type="button" class={button.quiet} onclick={resetOutline}>Xếp lại</button>
  {/if}
</div>
