<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { readNumber } from '#lib/core/decimal.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { numTex } from '#lib/core/number-format.js';
  import { button, textInput } from '#lib/core/ui.js';
  import IntervalPlot from '../_shared/interval-plot.svelte';
  import { allTasks, judge, solutionText } from './engine.js';

  const TASKS = allTasks();

  let index = $state(0);
  let from = $state(0);
  let to = $state(1);
  let typed = $state('');
  let tries = $state(0);
  /** @type {'todo' | 'right' | 'shown'} */
  let outcome = $state('todo');
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let reply = $state(null);
  /** @type {HTMLInputElement | undefined} */
  let input = $state();

  const task = $derived(TASKS[index]);
  const graph = $derived(task.graph);
  const prompt = $derived.by(() => {
    const [t1] = graph.points[task.from];
    const [t2] = graph.points[task.to];
    return `Phản ứng $${graph.equation}$. Đồ thị cho biết $${graph.symbol}$ của $${graph.species}$ theo thời gian. Tính tốc độ trung bình của phản ứng từ $${numTex(t1)}$ ${graph.tUnit} đến $${numTex(t2)}$ ${graph.tUnit}, theo ${graph.unit}.`;
  });
  const placed = $derived(from === task.from && to === task.to);
  const settled = $derived(outcome !== 'todo');

  function check() {
    const verdict = judge(task, readNumber(typed));
    if (verdict === 'invalid') {
      reply = { tone: 'warn', text: 'Hãy nhập một số, ví dụ 0,05.' };
      return;
    }
    if (verdict === 'right') {
      outcome = 'right';
      reply = { tone: 'ok', text: `Đúng. ${solutionText(task)}` };
      return;
    }
    tries += 1;
    if (tries >= 2) {
      outcome = 'shown';
      reply = { tone: 'info', text: `Xem lại lời giải. ${solutionText(task)}` };
      return;
    }
    const nudges = {
      negative:
        'Tốc độ phản ứng luôn dương. Với chất đầu, dấu trừ trong công thức làm kết quả thành số dương.',
      coefficient: `Em đã đọc đúng đồ thị. Hãy chia thêm cho hệ số $${graph.coefficient}$ của $${graph.species}$ trong phương trình.`,
      wrong: 'Chưa đúng. Đường nét đứt chỉ giá trị cần đọc trên hai trục; đọc lại rồi tính.',
    };
    reply = { tone: 'warn', text: nudges[verdict] };
  }

  async function next() {
    index = (index + 1) % TASKS.length;
    from = 0;
    to = 1;
    typed = '';
    tries = 0;
    outcome = 'todo';
    reply = null;
    await tick();
    input?.focus();
  }
</script>

<div class="space-y-3">
  <p><LiveRichText text={prompt} /></p>
  {#key graph.id}
    <IntervalPlot
      points={graph.points}
      bind:from
      bind:to
      guides={tries > 0 ? [task.from, task.to] : []}
      tMax={graph.tMax}
      tStep={graph.tStep}
      yMax={graph.yMax}
      yStep={graph.yStep}
      yLabelEvery={graph.yLabelEvery}
      tName={graph.tName}
      yName={graph.yName}
      timeUnit={graph.tUnit}
      label="Đồ thị theo thời gian, kéo hai chốt để chọn khoảng cần tính"
    />
  {/key}
  <p
    class="text-sm font-semibold {placed ? 'text-emerald-700' : 'text-slate-700'}"
    aria-live="polite"
  >
    {placed
      ? 'Hai chốt đã đúng khoảng cần tính. Đọc giá trị trên trục rồi tính.'
      : 'Bước 1: kéo hai chốt về đầu và cuối khoảng thời gian cần tính.'}
  </p>
  <form
    class="flex flex-wrap items-end gap-2"
    onsubmit={(e) => {
      e.preventDefault();
      if (!settled) check();
    }}
  >
    <label class="min-w-40 flex-1 text-sm font-semibold text-slate-700">
      Tốc độ trung bình ({graph.unit})
      <input
        bind:this={input}
        bind:value={typed}
        class="mt-1 {textInput}"
        inputmode="decimal"
        autocomplete="off"
        disabled={settled}
      />
    </label>
    <button type="submit" class={button.primary} disabled={settled}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={next}>Câu khác</button>
  </form>
  {#if reply}
    <FeedbackNote tone={reply.tone} text={reply.text} />
  {/if}
</div>
