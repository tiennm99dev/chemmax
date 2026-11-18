<!-- Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again. -->
<script>
  import { button } from '#lib/core/ui.js';
  import { passFocus } from '#lib/core/kid/pass-focus.js';

  /**
   * A big − and + pair for one place of a number, with 48 px touch targets.
   * The value itself is shown by the widget.
   * @type {{
   *   name: string;
   *   value: number;
   *   min?: number;
   *   max?: number;
   *   onchange: (value: number) => void;
   * }}
   */
  let { name, value, min = 0, max = 9, onchange } = $props();

  /** @type {HTMLButtonElement | undefined} */
  let down = $state();
  /** @type {HTMLButtonElement | undefined} */
  let up = $state();

  /** @param {number} delta */
  function bump(delta) {
    onchange(value + delta);
    // A button that reaches its end is disabled, so focus moves to the other one.
    passFocus(delta < 0 ? down : up, delta < 0 ? up : down);
  }
</script>

<div class="flex items-center justify-center gap-2">
  <button
    type="button"
    class="min-h-12 min-w-12 text-2xl {button.quiet} px-0"
    aria-label="Bớt 1 {name}"
    bind:this={down}
    disabled={value <= min}
    onclick={() => bump(-1)}>−</button
  >
  <button
    type="button"
    class="min-h-12 min-w-12 text-2xl {button.quiet} px-0"
    aria-label="Thêm 1 {name}"
    bind:this={up}
    disabled={value >= max}
    onclick={() => bump(1)}>+</button
  >
</div>
