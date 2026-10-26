<script>
  import EquationBalancer from '#lib/domain/equation-balancer.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { GAME, judge } from './engine.js';

  let index = $state(0);
  /** @type {boolean[]} */
  let solved = $state(GAME.map(() => false));
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Dùng nút − / + để chọn hệ số đặt trước mỗi công thức. Không được sửa chỉ số trong công thức.',
  });

  const done = $derived(solved.filter(Boolean).length);

  /** @param {number[]} coefficients */
  function onbalanced(coefficients) {
    const verdict = judge(GAME[index], coefficients);
    if (verdict === 'dung') {
      solved[index] = true;
      note = { tone: 'ok', text: `Đúng! Hệ số tối giản: ${coefficients.join(' : ')}.` };
    } else if (verdict === 'chua-toi-gian') {
      note = {
        tone: 'warn',
        text: 'Hai vế đã bằng nhau nhưng các hệ số còn cùng chia hết cho một số. Hãy rút gọn về hệ số nhỏ nhất.',
      };
    }
  }

  /** @param {number} delta */
  function go(delta) {
    index = (index + delta + GAME.length) % GAME.length;
    note = { tone: 'info', text: `Phương trình ${index + 1}/${GAME.length}.` };
  }
</script>

<div class="space-y-3">
  <p class="text-sm font-semibold text-slate-700" aria-live="polite">
    Phương trình {index + 1}/{GAME.length} · Đã cân bằng đúng {done}/{GAME.length}
  </p>
  {#key index}
    <EquationBalancer
      equation={GAME[index]}
      solver={false}
      max={12}
      label="Cân bằng phương trình {index + 1}"
      {onbalanced}
    />
  {/key}
  <FeedbackNote tone={note.tone} text={note.text} />
  <div class="flex flex-wrap justify-center gap-2">
    <button type="button" class={button.quiet} onclick={() => go(-1)}>← Phương trình trước</button>
    <button type="button" class={button.primary} onclick={() => go(1)}>Phương trình sau →</button>
  </div>
</div>
