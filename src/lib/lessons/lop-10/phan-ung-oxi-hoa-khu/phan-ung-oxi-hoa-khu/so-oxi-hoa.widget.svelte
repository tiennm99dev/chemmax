<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { MINUS } from '#lib/core/number-format.js';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { OX_CASES, onText, oxParts, oxSum, oxSumTex, solveOx } from '../_shared/redox.js';

  let at = $state(0);
  let x = $state(0);
  /** Cases already counted, so going round again does not count them twice. */
  let counted = $state(/** @type {string[]} */ ([]));

  const c = $derived(OX_CASES[at]);
  const info = $derived(oxParts(c));
  const sum = $derived(oxSum(c, x));
  const right = $derived(x === solveOx(c));
  const plus = $derived(info.parts.reduce((t, p) => t + Math.max(0, p.count * (p.on ?? x)), 0));
  const minus = $derived(info.parts.reduce((t, p) => t + Math.max(0, -p.count * (p.on ?? x)), 0));
  const scale = $derived(Math.max(plus, minus, 1));
  const isIon = $derived(info.charge !== 0);
  const isElement = $derived(info.parts.length === 1 && info.parts[0].on === null && !isIon);

  const message = $derived.by(() => {
    const goal = isIon ? `điện tích ion, ${onText(info.charge)}` : '0';
    if (right) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: isElement
          ? `Đúng: trong đơn chất, số oxi hoá của nguyên tử bằng 0.`
          : `Đúng: số oxi hoá của ${c.target} là ${onText(x)}, tổng bằng ${goal}.`,
      };
    }
    return {
      tone: /** @type {const} */ ('info'),
      text: `Tổng đang là ${onText(sum)}, còn cần bằng ${goal}. Chỉnh số oxi hoá của ${c.target}.`,
    };
  });

  function count() {
    if (right && !counted.includes(c.formula)) counted = [...counted, c.formula];
  }

  /** @param {number} delta */
  function move(delta) {
    count();
    at = (at + delta + OX_CASES.length) % OX_CASES.length;
    x = 0;
  }
</script>

<div class="space-y-4">
  <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
    <p class="text-sm text-indigo-800">Chất {at + 1}/{OX_CASES.length}</p>
    <p class="text-2xl font-bold text-indigo-950"><ChemFormula formula={c.formula} /></p>
    <ul class="mt-2 flex flex-wrap gap-2 text-sm">
      {#each info.parts as p (p.el)}
        <li
          class="rounded-lg px-3 py-1 font-semibold {p.on === null
            ? 'bg-amber-100 text-amber-900'
            : 'bg-white text-slate-700'}"
        >
          {p.count} nguyên tử {p.el}: {onText(p.on ?? x)}{p.on === null ? ' (cần tìm)' : ''}
        </li>
      {/each}
    </ul>
  </div>

  <Stepper
    label="Số oxi hoá của {c.target}"
    bind:value={x}
    min={-4}
    max={8}
    format={onText}
    onchange={count}
  />

  <p class="overflow-x-auto py-1">
    <LiveRichText text={`$${oxSumTex(c, x)} = ${sum}$`} />
  </p>

  <div class="space-y-1 text-sm" aria-hidden="true">
    <div class="flex items-center gap-2">
      <span class="w-20 shrink-0 font-semibold text-rose-800">Phần dương</span>
      <div class="h-4 min-w-0 flex-1 rounded-full bg-slate-100">
        <div
          class="h-4 rounded-full bg-rose-400 transition-[width] motion-reduce:transition-none"
          style:width="{(plus / scale) * 100}%"
        ></div>
      </div>
      <span class="w-8 shrink-0 text-right tabular-nums">+{plus}</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="w-20 shrink-0 font-semibold text-sky-800">Phần âm</span>
      <div class="h-4 min-w-0 flex-1 rounded-full bg-slate-100">
        <div
          class="h-4 rounded-full bg-sky-400 transition-[width] motion-reduce:transition-none"
          style:width="{(minus / scale) * 100}%"
        ></div>
      </div>
      <span class="w-8 shrink-0 text-right tabular-nums">{minus > 0 ? MINUS : ''}{minus}</span>
    </div>
  </div>

  <FeedbackNote tone={message.tone} text={message.text} />

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.secondary} onclick={() => move(-1)}>Chất trước</button>
    <button type="button" class={button.primary} onclick={() => move(1)}>Chất tiếp theo</button>
    <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
      Đã tính đúng {counted.length}/{OX_CASES.length} chất.
    </p>
  </div>
</div>
