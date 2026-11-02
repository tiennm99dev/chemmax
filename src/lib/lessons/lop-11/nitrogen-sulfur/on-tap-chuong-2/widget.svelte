<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import SvgFormula from '../_shared/svg-formula.svelte';
  import { MAPS, blanksFor, clueText, edgesAt, nodeOf, optionsFor, whyWrong } from './engine.js';

  const CHOICES = [
    { value: 'n', label: 'Nitrogen' },
    { value: 's', label: 'Sulfur' },
  ];

  const markerId = $props.id();
  let mapId = $state(/** @type {'n' | 's'} */ ('n'));
  let seed = $state(1);
  const map = $derived(MAPS[mapId]);
  const blanks = $derived(blanksFor(map, seed));
  let filled = $state(/** @type {string[]} */ ([]));
  let selected = $state(/** @type {string | null} */ (null));
  let tried = $state(/** @type {string | null} */ (null));
  /** @type {HTMLElement | undefined} */
  let board = $state();

  const open = $derived(blanks.filter((id) => !filled.includes(id)));
  const finished = $derived(open.length === 0);
  const activeId = $derived(selected ?? open[0] ?? null);
  const active = $derived(activeId ? nodeOf(map, activeId) : null);
  const activeOpen = $derived(activeId !== null && open.includes(activeId));
  const edges = $derived(activeId ? edgesAt(map, activeId) : []);
  const options = $derived(active && activeOpen ? optionsFor(active, seed) : []);

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (finished) {
        return {
          tone: 'ok',
          text: `Em đã điền đủ sơ đồ ${map.name}. Bấm từng chất để đọc phương trình, rồi đổi ô trống hoặc sang sơ đồ còn lại.`,
        };
      }
      if (tried && active && activeOpen) {
        return { tone: 'warn', text: `Chưa đúng. ${whyWrong(active, tried)}` };
      }
      if (active && activeOpen) {
        return {
          tone: 'info',
          text: `Đọc các mũi tên nối với ô trống để tìm chất chứa ${map.name}. Đã điền ${filled.length}/${blanks.length} ô.`,
        };
      }
      return {
        tone: 'info',
        text: `Đã điền ${filled.length}/${blanks.length} ô. Bấm một ô dấu hỏi để điền tiếp.`,
      };
    },
  );

  /** @param {string} id */
  async function focusNode(id) {
    await tick();
    /** @type {SVGGElement | null | undefined} */ (
      board?.querySelector(`[data-node="${id}"]`)
    )?.focus();
  }

  /** @param {string} id */
  function choose(id) {
    selected = id;
    tried = null;
  }

  /** @param {string} formula */
  function answer(formula) {
    if (!active) return;
    if (formula !== active.formula) {
      tried = formula;
      return;
    }
    const doneId = active.id;
    filled = [...filled, doneId];
    tried = null;
    const next = open.find((id) => id !== doneId);
    selected = next ?? doneId;
    focusNode(selected);
  }

  function clear() {
    filled = [];
    selected = null;
    tried = null;
  }

  function changeBlanks() {
    seed += 1;
    clear();
  }

  /**
   * @param {KeyboardEvent} event
   * @param {string} id
   */
  function onKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      choose(id);
    }
  }
</script>

<div class="space-y-4" bind:this={board}>
  <SegmentedControl
    label="Sơ đồ chuyển hoá"
    options={CHOICES}
    bind:value={mapId}
    onchange={clear}
  />

  <div class="grid gap-4 md:grid-cols-2">
    <svg
      viewBox="0 0 376 356"
      class="mx-auto block w-full max-w-md"
      role="group"
      aria-label="Sơ đồ chuyển hoá của {map.name}. Mỗi chất là một nút bấm; các mũi tên được đọc ở khung bên cạnh."
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

      {#each map.edges as e (`${e.from}-${e.to}`)}
        {@const lit = e.from === activeId || e.to === activeId}
        <line
          x1={e.path[0]}
          y1={e.path[1]}
          x2={e.path[2]}
          y2={e.path[3]}
          stroke={lit ? '#4f46e5' : '#94a3b8'}
          stroke-width={lit ? 2.5 : 1.5}
          marker-end="url(#{markerId})"
        />
        <text
          x={e.at[0]}
          y={e.at[1]}
          text-anchor={e.anchor}
          font-size="12"
          fill={lit ? '#3730a3' : '#475569'}
          aria-hidden="true"
        >
          {#each e.label as line, i (i)}<tspan x={e.at[0]} dy={i === 0 ? 0 : 14}>{line}</tspan
            >{/each}
        </text>
      {/each}

      {#each map.nodes as n (n.id)}
        {@const hidden = open.includes(n.id)}
        {@const wasBlank = blanks.includes(n.id)}
        <g
          role="button"
          tabindex="0"
          class="node cursor-pointer"
          data-node={n.id}
          aria-label={hidden
            ? 'Ô trống, chưa điền'
            : `${prettyFormula(n.formula)}, số oxi hoá của ${map.name === 'nitrogen' ? 'N' : 'S'} là ${n.ox}`}
          aria-pressed={n.id === activeId}
          onclick={() => choose(n.id)}
          onkeydown={(e) => onKey(e, n.id)}
        >
          <rect
            class="knob"
            x={n.x - 46}
            y={n.y - 22}
            width="92"
            height="44"
            rx="10"
            fill={hidden ? '#fffbeb' : wasBlank ? '#ecfdf5' : '#f8fafc'}
            stroke={n.id === activeId ? '#4f46e5' : hidden ? '#d97706' : '#475569'}
            stroke-width={n.id === activeId ? 2.5 : 1.5}
            stroke-dasharray={hidden ? '5 3' : undefined}
          />
          {#if hidden}
            <text
              x={n.x}
              y={n.y + 6}
              text-anchor="middle"
              font-size="18"
              font-weight="700"
              fill="#b45309">?</text
            >
          {:else}
            <SvgFormula formula={n.formula} x={n.x} y={n.y - 3} size={n.id === 'oleum' ? 12 : 14} />
            <text x={n.x} y={n.y + 15} text-anchor="middle" font-size="11" fill="#475569"
              >{map.name === 'nitrogen' ? 'N' : 'S'}: {n.ox}</text
            >
          {/if}
        </g>
      {/each}
    </svg>

    <div class="space-y-3">
      {#if active}
        <h3 class="text-lg font-bold">
          {#if activeOpen}
            Ô trống là chất nào?
          {:else}
            <ChemFormula formula={active.formula} />
          {/if}
        </h3>

        <ul class="space-y-1 text-sm">
          {#each edges as e (`${e.from}-${e.to}`)}
            {#if !open.includes(e.from) && !open.includes(e.to)}
              <li class="overflow-x-auto rounded-lg bg-slate-50 p-2">
                {#if e.equation}
                  <EquationLine text={e.equation} />
                {:else if e.tex}
                  <LiveRichText text={e.tex} />
                {/if}
              </li>
            {:else}
              <li class="rounded-lg bg-slate-50 p-2">{clueText(map, e, open)}</li>
            {/if}
          {/each}
        </ul>

        {#if activeOpen}
          <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn chất cho ô trống">
            {#each options as formula (formula)}
              <button
                type="button"
                class={tried === formula ? button.quiet : button.secondary}
                onclick={() => answer(formula)}
              >
                <ChemFormula {formula} />
              </button>
            {/each}
          </div>
        {/if}
      {/if}

      <FeedbackNote tone={note.tone} text={note.text} />
      <button type="button" class={button.quiet} onclick={changeBlanks}>Đổi ô trống</button>
    </div>
  </div>
</div>

<style>
  .node:focus-visible {
    outline: none;
  }
  .node:focus-visible .knob {
    stroke: #4f46e5;
    stroke-width: 3;
  }
</style>
