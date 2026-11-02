<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import { EQUATIONS, checkUnknown, nuclideName, nuclideTex, readWhole } from './engine.js';

  let at = $state(0);
  let aText = $state('');
  let zText = $state('');
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let solved = $state(false);
  /** @type {HTMLInputElement | undefined} */
  let first = $state();

  const eq = $derived(EQUATIONS[at]);
  const a = $derived(readWhole(aText));
  const z = $derived(readWhole(zText));
  const unknown = $derived(`{}^{${a ?? 'A'}}_{${z ?? 'Z'}}\\mathrm{X}`);

  /** @param {import('./engine.js').Nuclide[]} list */
  const side = (list) => list.map(nuclideTex).join(' + ');
  const equation = $derived(
    `$${side(eq.left)} \\rightarrow ${side(eq.right)} + ${solved ? nuclideTex(eq.answer) : unknown}$`,
  );

  function check() {
    if (a === null || z === null) {
      verdict = { ok: false, text: 'Hãy nhập cả số khối $A$ và số điện tích $Z$ là số nguyên.' };
      return;
    }
    const r = checkUnknown(eq, a, z);
    if (r.ok) {
      solved = true;
      verdict = {
        ok: true,
        text: `Đúng. Hai vế đều có tổng số khối $${r.sumA}$ và tổng số điện tích $${r.sumZ}$; X là ${nuclideName(a, z)}.`,
      };
      return;
    }
    const wrong = [
      a !== r.needA && `tổng số khối hai vế chưa bằng nhau (vế trái là $${r.sumA}$)`,
      z !== r.needZ && `tổng số điện tích hai vế chưa bằng nhau (vế trái là $${r.sumZ}$)`,
    ].filter(Boolean);
    verdict = { ok: false, text: `Chưa đúng: ${wrong.join('; ')}.` };
  }

  async function next() {
    at = (at + 1) % EQUATIONS.length;
    aText = '';
    zText = '';
    verdict = null;
    solved = false;
    await tick();
    first?.focus();
  }
</script>

<div class="space-y-3">
  <p class="text-sm font-semibold text-slate-700">{at + 1}/{EQUATIONS.length}. {eq.title}</p>
  <p class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center text-lg">
    <LiveRichText text={equation} />
  </p>
  <div class="grid grid-cols-2 gap-3">
    <label class="block">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Số khối A của X</span>
      <input
        bind:this={first}
        class={textInput}
        inputmode="numeric"
        bind:value={aText}
        disabled={solved}
        oninput={() => (verdict = null)}
      />
    </label>
    <label class="block">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Số điện tích Z của X</span>
      <input
        class={textInput}
        bind:value={zText}
        disabled={solved}
        oninput={() => (verdict = null)}
      />
    </label>
  </div>
  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {/if}
  <div class="flex flex-wrap gap-2">
    {#if solved}
      <button type="button" class={button.primary} onclick={next}>Phương trình tiếp theo</button>
    {:else}
      <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    {/if}
  </div>
</div>
