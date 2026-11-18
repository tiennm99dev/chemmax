<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import { passFocus } from '#lib/core/kid/pass-focus.js';
  import { focusRing } from '#lib/core/ui.js';

  /**
   * A labelled whole-number stepper: − and + buttons around the value. The
   * buttons are real buttons, so Tab, Enter and Space work, and the value is
   * announced politely when it changes.
   * @type {{
   *   label: string;
   *   value: number;
   *   min: number;
   *   max: number;
   *   format?: (v: number) => string;
   *   onchange?: (v: number) => void;
   * }}
   */
  let { label, value = $bindable(), min, max, format = (v) => String(v), onchange } = $props();

  const id = $props.id();

  /** @type {HTMLButtonElement | undefined} */
  let down = $state();
  /** @type {HTMLButtonElement | undefined} */
  let up = $state();

  /** @param {number} delta */
  function bump(delta) {
    const next = Math.min(max, Math.max(min, value + delta));
    if (next === value) return;
    value = next;
    onchange?.(next);
    // A button that reaches its end is disabled, so focus moves to the other one.
    passFocus(delta < 0 ? down : up, delta < 0 ? up : down);
  }

  const btn = `inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 ${focusRing}`;
</script>

<div class="flex min-w-0 items-center gap-2" role="group" aria-labelledby="{id}-label">
  <span id="{id}-label" class="text-sm font-semibold text-slate-700">{label}</span>
  <button
    type="button"
    class={btn}
    bind:this={down}
    onclick={() => bump(-1)}
    disabled={value <= min}
    aria-label="Giảm {label}">−</button
  >
  <output class="w-10 text-center text-lg font-bold tabular-nums text-indigo-700" aria-live="polite"
    >{format(value)}</output
  >
  <button
    type="button"
    class={btn}
    bind:this={up}
    onclick={() => bump(1)}
    disabled={value >= max}
    aria-label="Tăng {label}">+</button
  >
</div>
