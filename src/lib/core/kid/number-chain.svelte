<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  /**
   * A chain of calculations along arrows: the start number, then each sign and
   * number with the box it leads to. The boxes show "?" until `settled`.
   * @type {{
   *   start: number;
   *   steps: ReadonlyArray<import('./number-chain.js').ChainStep>;
   *   settled: boolean;
   * }}
   */
  let { start, steps, settled } = $props();
</script>

<div
  class="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-amber-50 p-3 text-2xl font-bold tabular-nums"
  role="img"
  aria-label="Bắt đầu từ {start}, rồi {steps.map((s) => `${s.word} ${s.n}`).join(', rồi ')}."
>
  <span class="rounded-xl border-4 border-indigo-400 bg-white px-3 py-1">{start}</span>
  {#each steps as s, i (i)}
    <span class="text-lg text-slate-600">{s.sign} {s.n} →</span>
    <span class="rounded-xl border-4 border-dashed border-indigo-400 bg-white px-3 py-1"
      >{settled ? s.value : '?'}</span
    >
  {/each}
</div>
