<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import { AGENTS, CASES, agentFeedback, goodAgents, verdictOf } from './engine.js';

  /** @typedef {import('./engine.js').AgentId} AgentId */

  let index = $state(0);
  /** @type {AgentId[]} */
  let tried = $state([]);
  let firstTry = $state(0);

  const done = $derived(index >= CASES.length);
  const current = $derived(CASES[index]);
  const last = $derived(tried.at(-1) ?? null);
  const solved = $derived(last !== null && verdictOf(current, last) === 'good');

  /** @param {AgentId} agent */
  function choose(agent) {
    if (solved || tried.includes(agent)) return;
    if (tried.length === 0 && verdictOf(current, agent) === 'good') firstTry += 1;
    tried = [...tried, agent];
  }

  function next() {
    tried = [];
    index += 1;
  }

  function restart() {
    tried = [];
    index = 0;
    firstTry = 0;
  }

  /** @param {AgentId} agent */
  function agentClass(agent) {
    if (!tried.includes(agent)) return button.quiet;
    return verdictOf(current, agent) === 'good' ? button.primary : button.secondary;
  }

  const otherChoices = $derived(
    solved && last
      ? goodAgents(current)
          .filter((a) => a.id !== last)
          .map((a) => a.name)
          .join(', ')
      : '',
  );
</script>

<div class="space-y-3">
  {#if done}
    <p class="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-800" aria-live="polite">
      Em chọn đúng ngay từ lần đầu ở {firstTry}/{CASES.length} đám cháy. Nhớ rằng: không chắc chắn thì
      thoát ra và gọi 114.
    </p>
    <button type="button" class={button.secondary} onclick={restart}>Làm lại từ đầu</button>
  {:else}
    <p class="text-sm text-slate-600">Đám cháy {index + 1}/{CASES.length}</p>
    <div class="rounded-xl border border-slate-200 p-3">
      <p class="font-semibold text-slate-900">{current.fire}</p>
      <p class="text-sm text-slate-600">{current.fireClass}</p>
      <p class="mt-1 text-sm text-slate-700">
        Trước hết: <LiveRichText text={current.first} />
      </p>
    </div>

    <p class="font-semibold text-slate-800">Em dùng gì để dập lửa?</p>
    <div class="grid gap-2 sm:grid-cols-2">
      {#each AGENTS as agent (agent.id)}
        <button
          type="button"
          class={agentClass(agent.id)}
          disabled={solved || tried.includes(agent.id)}
          onclick={() => choose(agent.id)}
        >
          {agent.name}
        </button>
      {/each}
    </div>

    {#if last}
      <FeedbackNote
        tone={solved ? 'ok' : 'warn'}
        text={`${agentFeedback(current, last)}${otherChoices ? ` Cũng phù hợp: ${otherChoices}.` : ''}`}
      />
    {/if}
    {#if solved}
      <button type="button" class={button.secondary} onclick={next}>
        {index + 1 < CASES.length ? 'Đám cháy tiếp theo' : 'Xem kết quả'}
      </button>
    {/if}
  {/if}
</div>
