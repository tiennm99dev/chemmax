<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script module>
  export const title = 'Thước đo góc hai thang chia';
</script>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { along } from './angle-math.js';
  import Protractor from './protractor.svelte';
  import { KIND_NAME, kindOf, rayDirection } from './protractor.js';

  const O = { x: 160, y: 170 };
  let side = $state(/** @type {import('./protractor.js').Side} */ ('phai'));
  let m = $state(55);
  const ray = $derived(along(O, 150, rayDirection(m, side)));
  const base = $derived(along(O, 150, side === 'phai' ? 0 : 180));
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Cạnh OA nằm bên"
    bind:value={side}
    options={[
      { value: 'phai', label: 'Bên phải' },
      { value: 'trai', label: 'Bên trái' },
    ]}
  />
  <svg viewBox="0 0 320 190" class="mx-auto block w-full max-w-md" role="img" aria-label="Góc {m}°">
    <Protractor o={O} r={120} {side} />
    <line x1={O.x} y1={O.y} x2={base.x} y2={base.y} stroke="#4F46E5" stroke-width="3" />
    <line x1={O.x} y1={O.y} x2={ray.x} y2={ray.y} stroke="#0F766E" stroke-width="3" />
  </svg>
  <label class="block text-center text-lg font-semibold">
    {m}° — {KIND_NAME[kindOf(m)]}
    <input class="block w-full" type="range" min="5" max="180" step="5" bind:value={m} />
  </label>
</div>
