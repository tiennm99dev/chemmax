<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { fmt } from '#lib/core/number-format.js';
  import {
    AMINO_ACIDS,
    MAX_CHAIN,
    aminoAcid,
    aminoMass,
    chainMass,
    peptideBonds,
  } from './engine.js';

  /** @type {string[]} */
  let chain = $state(['gly', 'ala']);
  let hydrolysed = $state(false);

  const bonds = $derived(peptideBonds(chain.length));
  const sum = $derived(chain.reduce((s, id) => s + aminoMass(id), 0));

  /** @param {string} id */
  function add(id) {
    if (chain.length >= MAX_CHAIN) return;
    hydrolysed = false;
    chain = [...chain, id];
  }

  function removeLast() {
    hydrolysed = false;
    chain = chain.slice(0, -1);
  }

  function clear() {
    hydrolysed = false;
    chain = [];
  }

  const names = $derived(chain.map((id) => aminoAcid(id).short).join('–'));
  const tone = $derived(hydrolysed ? 'ok' : 'info');
  const note = $derived.by(() => {
    if (chain.length === 0) return 'Bấm vào một amino acid để bắt đầu chuỗi.';
    if (chain.length === 1)
      return 'Mới có một phân tử amino acid. Thêm amino acid thứ hai: nhóm –COOH của phân tử này kết hợp với nhóm –NH₂ của phân tử kia, tách ra một phân tử nước.';
    if (hydrolysed)
      return `Thuỷ phân: ${bonds} phân tử nước cắt ${bonds} liên kết peptide, chuỗi tách lại thành ${chain.length} phân tử amino acid.`;
    return `Chuỗi ${names} có ${chain.length} amino acid nối bằng ${bonds} liên kết peptide –CO–NH–; khi tạo chuỗi đã tách ra ${bonds} phân tử H₂O. Protein thật có hàng trăm đến hàng nghìn mắt xích amino acid.`;
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Thêm amino acid vào chuỗi">
    {#each AMINO_ACIDS as a (a.id)}
      <button
        type="button"
        class={button.quiet}
        disabled={chain.length >= MAX_CHAIN}
        aria-label="Thêm {a.name} ({a.condensed})"
        onclick={() => add(a.id)}
      >
        <span class="inline-block size-4 rounded-full" style:background={a.color} aria-hidden="true"
        ></span>
        + {a.short}
      </button>
    {/each}
  </div>

  <div
    class="flex min-h-16 flex-wrap items-center gap-y-3 rounded-xl bg-slate-50 p-3"
    role="img"
    aria-label={chain.length === 0
      ? 'Chuỗi trống'
      : hydrolysed
        ? `Các amino acid rời nhau: ${names}`
        : `Chuỗi ${names}`}
  >
    {#each chain as id, i (i)}
      {@const a = aminoAcid(id)}
      {#if i > 0}
        {#if hydrolysed}
          <span class="mx-1 text-xs text-slate-500" aria-hidden="true">+</span>
        {:else}
          <span
            class="bond flex flex-col items-center text-[0.6rem] text-rose-700"
            aria-hidden="true"
          >
            <span>–CO–NH–</span>
            <span class="h-1 w-10 rounded bg-rose-400"></span>
          </span>
        {/if}
      {/if}
      <span
        class="bead inline-flex size-11 items-center justify-center rounded-full text-xs font-bold text-white shadow"
        style:background={a.color}
        aria-hidden="true">{a.short}</span
      >
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      disabled={chain.length < 2 || hydrolysed}
      onclick={() => (hydrolysed = true)}
    >
      Thuỷ phân (acid, đun nóng)
    </button>
    <button type="button" class={button.quiet} disabled={chain.length === 0} onclick={removeLast}>
      Bỏ hạt cuối
    </button>
    <button type="button" class={button.quiet} disabled={chain.length === 0} onclick={clear}>
      Xoá chuỗi
    </button>
  </div>

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4" aria-live="polite">
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-slate-500">Amino acid</dt>
      <dd class="text-lg font-bold">{chain.length}</dd>
    </div>
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-slate-500">Liên kết peptide</dt>
      <dd class="text-lg font-bold">{hydrolysed ? 0 : bonds}</dd>
    </div>
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-slate-500">H₂O {hydrolysed ? 'đã thêm vào' : 'đã tách ra'}</dt>
      <dd class="text-lg font-bold">{bonds}</dd>
    </div>
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-slate-500">Phân tử khối chuỗi</dt>
      <dd class="text-lg font-bold">
        {chain.length < 2 || hydrolysed ? '–' : `${fmt(chainMass(chain))} amu`}
      </dd>
    </div>
  </dl>
  {#if chain.length >= 2 && !hydrolysed}
    <p class="text-sm text-slate-600">
      Phân tử khối = tổng các amino acid − 18 × số phân tử nước = {fmt(sum)} − 18 × {bonds} = {fmt(
        chainMass(chain),
      )} amu.
    </p>
  {/if}

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .bead,
  .bond {
    animation: pop 0.35s ease-out both;
  }
  @keyframes pop {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bead,
    .bond {
      animation: none;
    }
  }
</style>
