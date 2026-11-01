<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import MoleculeViewer from '#lib/domain/molecule-viewer.svelte';
  import { molecule } from '#lib/domain/molecule.js';
  import { sigmaPi } from '../_shared/bonds.js';
  import { COUNT_MOLECULES } from './engine.js';

  let id = $state('c2h4');
  let sigma = $state(0);
  let pi = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);

  const mol = $derived(/** @type {import('#lib/domain/molecule.js').Molecule} */ (molecule(id)));
  const answer = $derived(sigmaPi(mol));
  const options = COUNT_MOLECULES.map((m) => ({
    value: m,
    label: prettyFormula(
      /** @type {import('#lib/domain/molecule.js').Molecule} */ (molecule(m)).formula,
    ),
  }));

  function reset() {
    sigma = 0;
    pi = 0;
    verdict = null;
  }

  function check() {
    const ok = sigma === answer.sigma && pi === answer.pi;
    verdict = {
      ok,
      text: ok
        ? `Đúng! Mỗi liên kết có một liên kết σ; mỗi cặp electron chung thêm vào là một liên kết π.`
        : sigma !== answer.sigma
          ? 'Số liên kết σ chưa đúng: đếm số que nối giữa các cặp nguyên tử, dù đơn, đôi hay ba, mỗi cặp nguyên tử chỉ có một liên kết σ.'
          : 'Số liên kết π chưa đúng: liên kết đôi có 1 liên kết π, liên kết ba có 2 liên kết π.',
    };
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Chọn phân tử" {options} bind:value={id} onchange={reset} />
  <MoleculeViewer molecule={mol} rotatable={false} details={false} />
  <div class="flex flex-wrap items-end gap-4">
    <Stepper label="Số liên kết σ" bind:value={sigma} min={0} max={10} />
    <Stepper label="Số liên kết π" bind:value={pi} min={0} max={4} />
    <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
  </div>
  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {/if}
</div>
