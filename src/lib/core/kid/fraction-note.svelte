<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';

  /**
   * The big live sentence under a fraction widget, like the kid note but
   * with inline `$...$` TeX, so a fraction shows stacked. Green and starred
   * once the child got there, amber after a slip, grey otherwise.
   * @type {{ tone: 'ok' | 'warn' | 'info', text: string }}
   */
  let { tone, text } = $props();
</script>

<p
  class="rounded-2xl px-4 py-3 text-xl leading-relaxed font-semibold {tone === 'ok'
    ? 'bg-emerald-100 text-emerald-900'
    : tone === 'warn'
      ? 'bg-amber-100 text-amber-900'
      : 'bg-slate-100 text-slate-800'}"
  aria-live="polite"
>
  {#if tone === 'ok'}<span aria-hidden="true">⭐ </span>{/if}<LiveRichText {text} />
</p>
