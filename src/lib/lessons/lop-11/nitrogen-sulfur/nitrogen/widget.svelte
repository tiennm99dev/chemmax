<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import SvgFormula from '../_shared/svg-formula.svelte';
  import { NODES, STEPS, node, oxText, progressText, trend } from './engine.js';

  const CHOICES = /** @type {const} */ ([
    { id: 'tang', label: 'Tăng' },
    { id: 'giam', label: 'Giảm' },
    { id: 'khong-doi', label: 'Không đổi' },
  ]);

  const markerId = $props.id();
  let activeId = $state(1);
  let solved = $state(/** @type {number[]} */ ([]));
  let tried = $state(/** @type {string | null} */ (null));

  const active = $derived(STEPS.find((s) => s.id === activeId) ?? STEPS[0]);
  const isSolved = $derived(solved.includes(activeId));
  const from = $derived(node(active.from));
  const to = $derived(node(active.to));

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (isSolved) {
        return {
          tone: 'ok',
          text: `Số oxi hoá của N đi từ ${oxText(from.ox)} đến ${oxText(to.ox)}. ${progressText(solved.length)}`,
        };
      }
      if (tried) {
        return {
          tone: 'warn',
          text: `Chưa đúng. Tính số oxi hoá của N trong ${from.title} và trong ${to.title} rồi so sánh.`,
        };
      }
      return {
        tone: 'info',
        text: `Từ ${from.title} sang ${to.title}, số oxi hoá của N thay đổi thế nào? ${progressText(solved.length)}`,
      };
    },
  );

  /** @param {number} id */
  function open(id) {
    activeId = id;
    tried = null;
  }

  /** @param {string} choice */
  function answer(choice) {
    if (choice === trend(active)) {
      solved = [...solved, activeId];
      tried = null;
    } else {
      tried = choice;
    }
  }

  function reset() {
    activeId = 1;
    solved = [];
    tried = null;
  }

  /**
   * @param {KeyboardEvent} event
   * @param {number} id
   */
  function onKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open(id);
    }
  }
</script>

<div class="grid gap-4 md:grid-cols-2">
  <svg
    viewBox="0 0 360 330"
    class="mx-auto block w-full max-w-md"
    role="group"
    aria-label="Sơ đồ chu trình nitrogen. Mỗi mũi tên đánh số là một nút bấm."
  >
    <defs>
      <marker
        id={markerId}
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
      </marker>
    </defs>

    {#each STEPS as s (s.id)}
      <line
        x1={s.path[0]}
        y1={s.path[1]}
        x2={s.path[2]}
        y2={s.path[3]}
        stroke={s.id === activeId ? '#4f46e5' : '#94a3b8'}
        stroke-width={s.id === activeId ? 3 : 2}
        marker-end="url(#{markerId})"
      />
    {/each}

    {#each NODES as n (n.id)}
      <rect
        x={n.x - 50}
        y={n.y - 22}
        width="100"
        height="44"
        rx="10"
        fill={n.id === active.from || n.id === active.to ? '#e0e7ff' : '#f8fafc'}
        stroke="#475569"
      />
      {#if n.formula}
        <SvgFormula formula={n.formula} x={n.x} y={n.y - 2} size={15} />
      {:else}
        <text
          x={n.x}
          y={n.y - 2}
          text-anchor="middle"
          font-size="15"
          font-weight="700"
          fill="#1e293b">{n.title}</text
        >
      {/if}
      <text x={n.x} y={n.y + 15} text-anchor="middle" font-size="12" fill="#475569">{n.sub}</text>
    {/each}

    {#each STEPS as s (s.id)}
      {@const cx = (s.path[0] + s.path[2]) / 2}
      {@const cy = (s.path[1] + s.path[3]) / 2}
      {@const done = solved.includes(s.id)}
      <g
        role="button"
        tabindex="0"
        class="badge cursor-pointer"
        aria-label="Mũi tên {s.id}: {s.name}{done ? ', đã xong' : ''}"
        aria-pressed={s.id === activeId}
        onclick={() => open(s.id)}
        onkeydown={(e) => onKey(e, s.id)}
      >
        <circle {cx} {cy} r="22" fill="transparent" />
        <circle
          class="knob"
          {cx}
          {cy}
          r="13"
          fill={s.id === activeId ? '#4f46e5' : done ? '#059669' : '#fff'}
          stroke={done || s.id === activeId ? 'none' : '#475569'}
        />
        <text
          x={cx}
          y={cy + 5}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill={done || s.id === activeId ? '#fff' : '#1e293b'}>{s.id}</text
        >
      </g>
    {/each}
  </svg>

  <div class="space-y-3">
    <h3 class="text-lg font-bold">{active.id}. {active.name}</h3>

    {#if isSolved}
      <p class="text-sm">
        <span class="font-semibold">Tác nhân:</span>
        <LiveRichText text={active.agent} />
      </p>
      {#if active.equation}
        <p class="overflow-x-auto rounded-lg bg-slate-50 p-3 text-lg">
          <EquationLine text={active.equation} />
        </p>
      {/if}
      <p class="text-sm">{active.text}</p>
    {:else}
      <div class="flex flex-wrap gap-2" role="group" aria-label="Số oxi hoá của N thay đổi thế nào">
        {#each CHOICES as c (c.id)}
          <button type="button" class={button.secondary} onclick={() => answer(c.id)}
            >{c.label}</button
          >
        {/each}
      </div>
    {/if}

    <FeedbackNote tone={note.tone} text={note.text} />
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
</div>

<style>
  .badge:focus-visible {
    outline: none;
  }
  .badge:focus-visible .knob {
    stroke: #4f46e5;
    stroke-width: 3;
  }
</style>
