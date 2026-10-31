<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    MAX_Z,
    RULE_TEXT,
    SUBSHELLS,
    configText,
    elementLabel,
    emptyState,
    groundState,
    nextPlacement,
    outerKind,
    place,
    shells,
    total,
    unpaired,
  } from './engine.js';

  let z = $state(8);
  let spin = $state(1);
  let filled = $state(emptyState());
  /** @type {import('./engine.js').OrbitalState[]} */
  let history = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Chọn chiều tự quay, rồi bấm vào một ô orbital để thêm electron.',
  });

  const placed = $derived(total(filled));
  const done = $derived(placed === z);
  const kind = $derived(outerKind(z));
  const SPINS = [
    { value: 1, label: '↑ hướng lên' },
    { value: -1, label: '↓ hướng xuống' },
  ];

  /** @param {number} sub @param {number} box @param {import('./engine.js').Spin} s */
  function add(sub, box, s) {
    const r = place(filled, z, sub, box, s);
    if (!r.ok) {
      note = { tone: 'warn', text: RULE_TEXT[r.rule] };
      return;
    }
    history = [...history, filled];
    filled = r.state;
    const n = total(filled);
    note =
      n === z
        ? { tone: 'ok', text: `Hoàn thành! Cấu hình electron: ${configText(filled)}.` }
        : {
            tone: 'info',
            text: `Đã thêm 1 electron vào phân lớp ${SUBSHELLS[sub].name} (${n}/${z}).`,
          };
  }

  function step() {
    const next = nextPlacement(filled, z);
    if (next) add(next.sub, next.box, next.spin);
  }

  function undo() {
    const prev = history.at(-1);
    if (!prev) return;
    filled = prev;
    history = history.slice(0, -1);
    note = { tone: 'info', text: `Đã bỏ electron vừa thêm (${total(filled)}/${z}).` };
  }

  function reset() {
    filled = emptyState();
    history = [];
    note = { tone: 'info', text: 'Đã xoá hết electron. Bắt đầu lại từ phân lớp 1s.' };
  }

  function fillAll() {
    history = [...history, filled];
    filled = groundState(z);
    note = { tone: 'ok', text: `Cấu hình electron: ${configText(filled)}.` };
  }

  /** @param {number} next */
  function changeZ(next) {
    z = next;
    reset();
    note = {
      tone: 'info',
      text: `Nguyên tử ${elementLabel(next)} có ${next} electron cần điền.`,
    };
  }

  /** @param {import('./engine.js').Spin[]} b */
  const arrows = (b) => b.map((s) => (s === 1 ? '↑' : '↓')).join('');
  /** @param {import('./engine.js').Spin[]} b */
  const spoken = (b) =>
    b.length === 0
      ? 'trống'
      : b.map((s) => (s === 1 ? 'một electron hướng lên' : 'một electron hướng xuống')).join(', ');
</script>

<div class="space-y-4">
  <div class="flex flex-wrap items-end gap-4">
    <Stepper label="Số hiệu nguyên tử Z" bind:value={z} min={1} max={MAX_Z} onchange={changeZ} />
    <p class="text-sm font-semibold text-slate-700">
      {elementLabel(z)}: <span class="tabular-nums">{placed}/{z}</span> electron
    </p>
  </div>

  <SegmentedControl label="Chiều tự quay của electron thêm vào" options={SPINS} bind:value={spin} />

  <div class="space-y-2 rounded-xl bg-slate-50 p-3" role="group" aria-label="Các ô orbital">
    <p class="text-xs text-slate-500">Mức năng lượng tăng dần từ trên xuống</p>
    {#each SUBSHELLS as s, i (s.name)}
      <div class="flex items-center gap-3">
        <span class="w-8 shrink-0 text-right font-semibold text-slate-700">{s.name}</span>
        <div class="flex">
          {#each filled[i] as b, j (j)}
            <button
              type="button"
              class="-ml-px flex h-11 w-11 items-center justify-center border border-slate-500 bg-white text-xl font-bold first:ml-0 hover:bg-indigo-50 {focusRing} {b.length ===
              2
                ? 'text-indigo-700'
                : 'text-rose-700'}"
              aria-label="Orbital {s.name} thứ {j + 1}: {spoken(b)}. Thêm electron."
              onclick={() => add(i, j, /** @type {import('./engine.js').Spin} */ (Number(spin)))}
            >
              {arrows(b)}
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={step} disabled={done}>
      Điền tiếp 1 electron
    </button>
    <button type="button" class={button.quiet} onclick={undo} disabled={history.length === 0}>
      Hoàn tác
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Xoá hết</button>
    <button type="button" class={button.secondary} onclick={fillAll} disabled={done}>
      Xem đáp án
    </button>
  </div>

  {#if done}
    <dl
      class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-950"
    >
      <dt>Cấu hình</dt>
      <dd class="font-semibold">{configText(filled)}</dd>
      <dt>Số electron mỗi lớp</dt>
      <dd>{shells(filled).join(', ')}</dd>
      <dt>Electron độc thân</dt>
      <dd>{unpaired(filled)}</dd>
      <dt>Lớp ngoài cùng</dt>
      <dd>{kind.outer} electron: thường là {kind.kind}</dd>
    </dl>
  {/if}
</div>
