<script module>
  export const title = 'Cân bằng phương trình';
</script>

<script>
  import EquationBalancer from './equation-balancer.svelte';

  let equation = $state('KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O');
  /** @type {number[]} */
  let last = $state([]);
</script>

<EquationBalancer bind:equation editable onbalanced={(c) => (last = c)} />
<p class="text-sm text-slate-600 tabular-nums">
  equation = {equation} · onbalanced = [{last.join(', ')}]
</p>
<EquationBalancer equation="Fe^3+ + OH^- -> Fe(OH)3" solver={false} label="Phương trình ion" />
