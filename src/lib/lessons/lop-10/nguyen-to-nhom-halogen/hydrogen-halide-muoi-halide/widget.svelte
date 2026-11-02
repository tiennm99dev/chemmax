<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '#lib/domain/test-tube.svelte';
  import { HALIDES, judgeTube, makeTubes } from './engine.js';

  const FULL = 3;
  const CLEAR = '#e0f2fe';

  let seed = $state(5);
  /** @type {Record<string, number>} letter of a tube → drops of AgNO3 added */
  let drops = $state({});
  /** @type {Record<string, string>} letter of a tube → the ion named rightly */
  let named = $state({});
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let reply = $state({
    tone: 'info',
    text: 'Nhỏ dung dịch $\\mathrm{AgNO_3}$ vào từng ống rồi quan sát.',
  });
  /** @type {HTMLButtonElement[]} */
  const dropButtons = $state([]);

  const tubes = $derived(makeTubes(seed));
  const solved = $derived(tubes.every((t) => named[t.letter]));

  /** @param {{ letter: string, halide: import('./engine.js').Halide }} tube */
  function drip(tube) {
    const count = (drops[tube.letter] ?? 0) + 1;
    drops = { ...drops, [tube.letter]: count };
    reply = {
      tone: 'info',
      text:
        count === 1
          ? `Ống ${tube.letter}: ${tube.halide.seen}.`
          : `Ống ${tube.letter}: nhỏ thêm vẫn ${tube.halide.seen}.`,
    };
  }

  /**
   * @param {{ letter: string, halide: import('./engine.js').Halide }} tube
   * @param {string} id
   */
  function name(tube, id) {
    if (named[tube.letter]) return;
    const verdict = judgeTube(tube.halide, id);
    reply = { tone: verdict.right ? 'ok' : 'warn', text: `Ống ${tube.letter}. ${verdict.text}` };
    if (verdict.right) named = { ...named, [tube.letter]: id };
  }

  async function again() {
    seed += 1;
    drops = {};
    named = {};
    reply = { tone: 'info', text: 'Đã đổi mẫu. Nhỏ $\\mathrm{AgNO_3}$ vào từng ống rồi quan sát.' };
    await tick();
    dropButtons[0]?.focus();
  }

  /**
   * @param {{ letter: string, halide: import('./engine.js').Halide }} tube
   * @param {number} count
   */
  const tubeLabel = (tube, count) =>
    `Ống ${tube.letter}: ${count === 0 ? 'dung dịch không màu, chưa nhỏ AgNO₃' : tube.halide.seen}`;
</script>

<div class="space-y-4">
  <ul class="grid grid-cols-4 gap-2 text-center">
    {#each tubes as tube, i (tube.letter)}
      {@const count = drops[tube.letter] ?? 0}
      <li class="space-y-1">
        <p class="font-bold">Ống {tube.letter}</p>
        <TestTube
          liquid={CLEAR}
          precipitate={tube.halide.color}
          amount={count / FULL}
          drip={count}
          label={tubeLabel(tube, count)}
        />
        <button
          bind:this={dropButtons[i]}
          type="button"
          class="{button.secondary} w-full !px-1 text-sm"
          aria-label="Nhỏ AgNO₃ vào ống {tube.letter}"
          onclick={() => drip(tube)}>Nhỏ</button
        >
      </li>
    {/each}
  </ul>

  <FeedbackNote tone={reply.tone} text={reply.text} />

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">Mỗi ống chứa ion nào?</p>
    {#each tubes as tube (tube.letter)}
      {@const tried = (drops[tube.letter] ?? 0) > 0}
      <div
        class="flex flex-wrap items-center gap-1"
        role="group"
        aria-label="Ống {tube.letter} chứa ion"
      >
        <span class="w-14 text-sm font-semibold">Ống {tube.letter}</span>
        {#each HALIDES as h (h.id)}
          <button
            type="button"
            class="{named[tube.letter] === h.id ? button.primary : button.quiet} !px-3"
            disabled={!tried}
            aria-pressed={named[tube.letter] === h.id}
            onclick={() => name(tube, h.id)}><ChemFormula formula={h.ion} /></button
          >
        {/each}
      </div>
    {/each}
  </div>

  {#if solved}
    <div class="space-y-2 rounded-xl bg-emerald-50 p-3">
      <p class="text-sm font-semibold text-emerald-800">
        Em đã nhận biết đủ bốn ion. Các phương trình tạo kết tủa:
      </p>
      <ul class="space-y-1">
        {#each HALIDES as h (h.id)}
          {#if h.equation}
            <li><EquationLine text={h.equation} /></li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}

  <button type="button" class={button.quiet} onclick={again}>Đổi mẫu</button>
</div>
