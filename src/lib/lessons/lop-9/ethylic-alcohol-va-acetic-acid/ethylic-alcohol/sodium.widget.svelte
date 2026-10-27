<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { atomColor } from '#lib/domain/molecule.js';
  import { button } from '#lib/core/ui.js';
  import { ETHANOL_ATOMS, ETHANOL_BONDS, sodiumProducts, trySodium } from './engine.js';

  /** @typedef {import('./engine.js').DrawnAtom} DrawnAtom */

  const ROWS = [55, 165];
  let replaced = $state([false, false]);
  let tone = $state(/** @type {'ok' | 'warn' | 'info'} */ ('info'));
  let note = $state(
    'Mỗi mẩu sodium (Na) thay thế một nguyên tử H trong phân tử ethylic alcohol. Hãy chọn nguyên tử H mà Na thay thế ở từng phân tử.',
  );

  const done = $derived(replaced.filter(Boolean).length);
  const products = $derived(sodiumProducts(done));

  const POS = Object.fromEntries(ETHANOL_ATOMS.map((a) => [a.id, a]));
  const NAMES = /** @type {Record<string, string>} */ ({
    c1: 'carbon thứ nhất',
    c2: 'carbon thứ hai',
    o: 'oxygen',
  });

  /** @param {DrawnAtom} atom */
  function describe(atom) {
    if (atom.el !== 'H') return `Nguyên tử ${NAMES[atom.id]}`;
    return `Nguyên tử H liên kết với ${NAMES[/** @type {string} */ (atom.on)]}`;
  }

  /**
   * @param {number} row
   * @param {DrawnAtom} atom
   */
  function pick(row, atom) {
    if (replaced[row]) return;
    const result = trySodium(atom.id);
    if (result === 'replaced') {
      replaced[row] = true;
      const n = replaced.filter(Boolean).length;
      tone = 'ok';
      note =
        n === 2
          ? 'Đúng! Hai nguyên tử H của hai nhóm –OH kết hợp thành một phân tử H₂ bay lên; còn lại hai phân tử C₂H₅ONa (sodium ethylate).'
          : 'Đúng! Na thay thế nguyên tử H của nhóm –OH, tạo C₂H₅ONa. Nguyên tử H được giải phóng; hãy làm tiếp với phân tử còn lại.';
    } else if (result === 'c-h') {
      tone = 'warn';
      note =
        'Nguyên tử H này liên kết với carbon. Na không thay thế được các nguyên tử H liên kết với C; hãy tìm nguyên tử H của nhóm –OH.';
    } else {
      tone = 'warn';
      note = 'Hãy chọn một nguyên tử hydrogen (quả cầu nhỏ màu trắng).';
    }
  }

  /**
   * @param {KeyboardEvent} e
   * @param {number} row
   * @param {DrawnAtom} atom
   */
  function key(e, row, atom) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(row, atom);
    }
  }

  function reset() {
    replaced = [false, false];
    tone = 'info';
    note =
      'Mỗi mẩu sodium (Na) thay thế một nguyên tử H trong phân tử ethylic alcohol. Hãy chọn nguyên tử H mà Na thay thế ở từng phân tử.';
  }

  /** @param {string} el */
  const radius = (el) => (el === 'H' ? 10 : 15);
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 330 230"
    class="mx-auto block h-auto w-full max-w-md select-none"
    role="group"
    aria-label="Hai phân tử ethylic alcohol CH₃–CH₂–OH và sodium"
  >
    {#each ROWS as y, row (row)}
      <g transform="translate(20 {y})">
        {#each ETHANOL_BONDS as [a, b] (`${a}-${b}`)}
          {@const p = POS[a]}
          {@const q = POS[b]}
          {#if !(replaced[row] && b === 'h6')}
            <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#64748b" stroke-width="4" />
          {/if}
        {/each}
        {#if replaced[row]}
          <line
            x1="180"
            y1="0"
            x2="232"
            y2="0"
            stroke="#a855f7"
            stroke-width="4"
            stroke-dasharray="5 4"
          />
          <circle cx="240" cy="0" r="17" fill="#c084fc" stroke="#6b21a8" stroke-width="1.5" />
          <text x="240" y="5" font-size="13" font-weight="700" fill="#3b0764" text-anchor="middle"
            >Na</text
          >
        {/if}
        {#each ETHANOL_ATOMS as atom (atom.id)}
          {#if !(replaced[row] && atom.id === 'h6')}
            <g
              role="button"
              tabindex="0"
              class="drag-handle cursor-pointer"
              aria-label="{describe(atom)}, phân tử {row + 1}"
              aria-disabled={replaced[row]}
              onclick={() => pick(row, atom)}
              onkeydown={(e) => key(e, row, atom)}
            >
              <circle cx={atom.x} cy={atom.y} r="21" fill="transparent" class="drag-hit" />
              <circle
                class="drag-knob"
                cx={atom.x}
                cy={atom.y}
                r={radius(atom.el)}
                fill={atomColor(atom.el)}
                stroke="#334155"
                stroke-width="1.5"
              />
              <text
                x={atom.x}
                y={atom.y + 4}
                font-size="11"
                font-weight="700"
                fill={atom.el === 'H' ? '#0f172a' : '#fff'}
                text-anchor="middle"
                pointer-events="none">{atom.el}</text
              >
            </g>
          {/if}
        {/each}
      </g>
    {/each}

    <!-- freed hydrogen atoms pair up into H2 -->
    {#if done === 1}
      <circle cx="300" cy="110" r="9" fill="#f8fafc" stroke="#334155" class="rise" />
      <text x="300" y="114" font-size="10" text-anchor="middle" fill="#0f172a">H</text>
    {:else if done === 2}
      <g class="rise">
        <circle cx="292" cy="110" r="9" fill="#f8fafc" stroke="#334155" />
        <circle cx="308" cy="110" r="9" fill="#f8fafc" stroke="#334155" />
        <text x="300" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a"
          >H₂↑</text
        >
      </g>
    {/if}
  </svg>

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.quiet} onclick={reset} disabled={done === 0}>Làm lại</button
    >
    <p class="text-sm text-slate-700">
      Đã tạo: {products.ethylate} C₂H₅ONa, {products.h2} H₂
    </p>
  </div>

  {#if done === 2}
    <div class="rounded-xl bg-slate-50 p-3 text-lg">
      <EquationLine text="2C2H5OH + 2Na → 2C2H5ONa + H2↑" />
    </div>
  {/if}

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .rise {
    animation: rise 1.2s ease-out both;
  }
  @keyframes rise {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .rise {
      animation: none;
    }
  }
</style>
