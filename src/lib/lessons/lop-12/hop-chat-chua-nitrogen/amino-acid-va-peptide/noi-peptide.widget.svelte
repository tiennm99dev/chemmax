<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    AMINO_ACIDS,
    M_WATER,
    amino,
    biuret,
    hydrolysisText,
    peptideBonds,
    peptideFormula,
    peptideKind,
    peptideMass,
    peptideName,
  } from '../_shared/amino.js';

  /** @typedef {import('../_shared/amino.js').AminoId} AminoId */

  const MAX = 6;
  const OFFERED = AMINO_ACIDS.filter((a) => a.id !== 'lys');

  let chain = $state(/** @type {AminoId[]} */ (['gly', 'ala']));
  let hydrolysed = $state(false);

  /** @param {AminoId} id */
  function add(id) {
    if (chain.length >= MAX) return;
    chain = [...chain, id];
    hydrolysed = false;
  }

  function dropLast() {
    chain = chain.slice(0, -1);
    hydrolysed = false;
  }

  function clear() {
    chain = [];
    hydrolysed = false;
  }

  const n = $derived(chain.length);
  const bonds = $derived(peptideBonds(chain));
  const mass = $derived(peptideMass(chain));
  const sum = $derived(chain.reduce((s, id) => s + amino(id).molar, 0));

  const counts = $derived(hydrolysisText(chain));

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (n === 0)
        return { tone: 'info', text: 'Bấm vào một amino acid để bắt đầu chuỗi từ đầu N.' };
      if (n === 1) {
        return {
          tone: 'info',
          text: `Mới có một gốc ${amino(chain[0]).name}, chưa có liên kết peptide. Thêm amino acid thứ hai: nhóm $\\mathrm{{-}COOH}$ của gốc trước kết hợp với nhóm $\\mathrm{{-}NH_2}$ của gốc sau, tách ra một phân tử nước.`,
        };
      }
      if (hydrolysed) {
        return {
          tone: 'ok',
          text: `Thuỷ phân hoàn toàn ${peptideName(chain)} cần ${bonds} phân tử nước, thu được ${counts}. Khối lượng bảo toàn: $${mass} + ${bonds} \\cdot ${M_WATER} = ${sum}$.`,
        };
      }
      return {
        tone: biuret(chain) ? 'ok' : 'info',
        text: `${peptideName(chain)} là ${peptideKind(n)}: ${n} gốc α-amino acid, ${bonds} liên kết peptide, $M = ${sum} - ${bonds} \\cdot ${M_WATER} = ${mass}$ g/mol. ${biuret(chain) ? 'Có từ hai liên kết peptide trở lên: có phản ứng màu biuret (màu tím).' : 'Chỉ có một liên kết peptide: không có phản ứng màu biuret.'}`,
      };
    },
  );
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Thêm amino acid vào cuối chuỗi">
    {#each OFFERED as a (a.id)}
      <button
        type="button"
        class={button.secondary}
        onclick={() => add(a.id)}
        disabled={n >= MAX}
        aria-label="Thêm {a.name} ({a.symbol}) vào đầu C">+ {a.symbol}</button
      >
    {/each}
  </div>

  <div
    class="flex min-h-16 flex-wrap items-center gap-y-2 rounded-xl bg-slate-50 p-3"
    role="img"
    aria-label={n === 0
      ? 'Chuỗi trống'
      : `Chuỗi ${peptideName(chain)}${hydrolysed ? ' đã thuỷ phân' : ''}`}
  >
    {#if n > 0}
      <span class="mr-1 text-xs font-semibold text-slate-500">H₂N–</span>
    {/if}
    {#each chain as id, i (i)}
      {#if i > 0}
        <span
          class="mx-1 rounded px-1 text-xs font-bold {hydrolysed
            ? 'text-slate-400 line-through'
            : 'bg-amber-100 text-amber-800'}">–CO–NH–</span
        >
      {/if}
      <span
        class="rounded-lg px-2 py-1 text-sm font-bold text-white"
        style="background: {amino(id).color}">{amino(id).symbol}</span
      >
    {/each}
    {#if n > 0}
      <span class="ml-1 text-xs font-semibold text-slate-500">–COOH</span>
    {/if}
  </div>

  {#if n > 0}
    <p class="text-sm text-slate-700">
      Công thức phân tử: <Tex math={`\\mathrm{${peptideFormula(chain)}}`} />; phân tử khối {mass}.
    </p>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      onclick={() => (hydrolysed = true)}
      disabled={n < 2 || hydrolysed}>Thuỷ phân hoàn toàn</button
    >
    <button type="button" class={button.quiet} onclick={dropLast} disabled={n === 0}
      >Bỏ gốc cuối</button
    >
    <button type="button" class={button.quiet} onclick={clear} disabled={n === 0}>Làm lại</button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
