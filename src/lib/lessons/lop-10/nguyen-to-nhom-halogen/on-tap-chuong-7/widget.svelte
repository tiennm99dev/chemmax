<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { CHAINS, isRight } from './engine.js';

  const CHOICES = CHAINS.map((c) => ({ value: c.id, label: c.title }));

  let chainId = $state(CHAINS[0].id);
  let at = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let reply = $state({ tone: 'info', text: 'Chọn chất đúng cho ô đang sáng.' });
  /** @type {HTMLElement | undefined} */
  let answers = $state();

  const chain = $derived(CHAINS.find((c) => c.id === chainId) ?? CHAINS[0]);
  const done = $derived(at >= chain.steps.length);
  const step = $derived(done ? null : chain.steps[at]);

  /** @param {string} formula */
  const spoken = (formula) => prettyFormula(formula);

  /**
   * A reagent note with the formulas in it subscripted.
   * @param {string} text
   */
  const prettyReagent = (text) =>
    text.replace(/\b(?:[A-Z][a-z]?\d*){2,}\b|\b[A-Z][a-z]?\d\b/g, (formula) =>
      prettyFormula(formula),
    );

  /** @param {string} choice */
  async function answer(choice) {
    if (!step) return;
    if (!isRight(step, choice)) {
      reply = { tone: 'warn', text: `Chưa đúng. ${step.hint}` };
      return;
    }
    reply = { tone: 'ok', text: `Đúng: ${spoken(choice)}.` };
    at += 1;
    await tick();
    answers?.querySelector('button')?.focus();
  }

  async function next() {
    open(CHAINS[(CHAINS.indexOf(chain) + 1) % CHAINS.length].id);
    await tick();
    answers?.querySelector('button')?.focus();
  }

  /** @param {string} id */
  function open(id) {
    chainId = id;
    at = 0;
    reply = { tone: 'info', text: 'Chọn chất đúng cho ô đang sáng.' };
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Sơ đồ chuyển hoá"
    options={CHOICES}
    value={chainId}
    onchange={(choice) => open(String(choice))}
  />

  <ol class="flex flex-wrap items-center gap-x-1 gap-y-3" aria-label="Sơ đồ {chain.title}">
    <li class="rounded-lg border-2 border-slate-400 bg-white px-3 py-2 font-semibold">
      <ChemFormula formula={chain.start} />
    </li>
    {#each chain.steps as s, i (i)}
      <li class="flex items-center gap-1">
        <span class="flex flex-col items-center px-1 text-center text-xs text-slate-600">
          <span class="max-w-28">{prettyReagent(s.reagent)}</span>
          <span aria-hidden="true" class="text-lg leading-none">→</span>
        </span>
        <span
          class="rounded-lg border-2 px-3 py-2 font-semibold {i < at
            ? 'border-emerald-500 bg-emerald-50'
            : i === at
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-dashed border-slate-300 bg-white text-slate-400'}"
        >
          {#if i < at}<ChemFormula formula={s.product} />{:else}<span
              aria-label={i === at ? 'ô cần điền' : 'ô chưa điền'}>?</span
            >{/if}
        </span>
      </li>
    {/each}
  </ol>

  <div
    bind:this={answers}
    class="flex flex-wrap gap-2"
    role="group"
    aria-label="Chọn chất cho ô đang sáng"
  >
    {#if step}
      {#each step.options as option (option)}
        <button type="button" class={button.secondary} onclick={() => answer(option)}>
          <ChemFormula formula={option} />
        </button>
      {/each}
    {:else}
      <button type="button" class={button.primary} onclick={next}>Sơ đồ tiếp theo</button>
    {/if}
  </div>

  <FeedbackNote tone={reply.tone} text={reply.text} />

  {#if at > 0}
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-1 text-sm font-semibold text-slate-700">Phương trình đã tìm được</p>
      <ol class="space-y-1">
        {#each chain.steps.slice(0, at) as s, i (i)}
          <li><EquationLine text={s.equation} /></li>
        {/each}
      </ol>
    </div>
  {/if}
</div>
