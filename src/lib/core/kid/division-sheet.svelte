<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  /**
   * A division set out in columns as the book prints it, from `sheetRows` in
   * `division-steps.js`. A digit just brought down flies from the dividend to
   * its new line; with reduced motion it simply appears. `compact` narrows
   * the columns for a long dividend or a two-digit divisor.
   * @type {{
   *   rows: import('./division-steps.js').Row[];
   *   divisor: number;
   *   quotient: string;
   *   label: string;
   *   compact?: boolean;
   * }}
   */
  let { rows, divisor, quotient, label, compact = false } = $props();

  const cell = $derived(
    `relative flex h-11 ${compact ? 'w-8' : 'w-9'} items-center justify-center`,
  );
</script>

<div
  class="inline-flex rounded-2xl border-4 border-slate-300 bg-white p-3 text-3xl font-bold tabular-nums"
  role="img"
  aria-label={label}
>
  <div class="border-r-4 border-slate-700 pr-2">
    {#each rows as row, r (r)}
      <div class="flex {row.line ? 'border-b-4 border-slate-400' : ''}">
        {#each row.cells as digit, c (c)}
          <span class="{cell} {row.active?.includes(c) ? 'rounded-lg bg-amber-200' : ''}">
            {#if row.fly === c}
              <span class="fly-down" style="--lines: {r}">{digit}</span>
            {:else}
              {digit}
            {/if}
          </span>
        {/each}
      </div>
    {/each}
  </div>
  <div class="min-w-20">
    <div class="flex h-11 items-center justify-center border-b-4 border-slate-700 px-2">
      {divisor}
    </div>
    <div class="flex h-11 items-center justify-center px-2 text-indigo-700">{quotient}</div>
  </div>
</div>

<style>
  .fly-down {
    display: inline-block;
  }

  @media (prefers-reduced-motion: no-preference) {
    .fly-down {
      animation: fly-down 600ms ease-in-out both;
    }
  }

  @keyframes fly-down {
    from {
      color: #be123c;
      transform: translateY(calc(var(--lines) * -2.75rem));
    }
    to {
      transform: translateY(0);
    }
  }
</style>
