<script>
  /**
   * A line drawing of one tool of engine.js, keyed by its id. Decorative:
   * the picture game names the tool only after the learner has answered.
   * @type {{ id: string, size?: number }}
   */
  let { id, size = 48 } = $props();

  const glass = '#e0f2fe';
  const liquid = '#7dd3fc';
  const line = '#334155';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 48 48"
  aria-hidden="true"
  fill="none"
  stroke={line}
  stroke-width="1.6"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {#if id === 'nguon-laser'}
    <rect x="3" y="18" width="18" height="12" rx="2" fill="#475569" />
    <circle cx="8" cy="24" r="1.6" fill="#22c55e" stroke="none" />
    <path d="M21 21l24-5M21 24h24M21 27l24 5" stroke="#ef4444" stroke-width="1.4" />
  {:else if id === 'ban-ban-tru'}
    <path d="M6 30h36a18 18 0 0 1-36 0z" transform="translate(0 -6)" fill={glass} />
    <path d="M6 24h36" />
    <path d="M24 6v12" stroke="#ef4444" />
  {:else if id === 'bang-chia-do'}
    <circle cx="24" cy="24" r="20" fill="#fff" />
    <path d="M4 24h40M24 4v40" stroke="#94a3b8" />
    <path
      d="M24 4v3M38.1 9.9l-2.1 2.1M44 24h-3M38.1 38.1l-2.1-2.1M24 44v-3M9.9 38.1l2.1-2.1M4 24h3M9.9 9.9l2.1 2.1"
    />
    <text x="31" y="20" font-size="6" fill={line} stroke="none">30°</text>
  {:else if id === 'thau-kinh-hoi-tu'}
    <path d="M24 4c7 6 7 34 0 40c-7-6-7-34 0-40z" fill={glass} />
    <path d="M4 24h40" stroke="#94a3b8" stroke-dasharray="3 2" />
  {:else if id === 'thau-kinh-phan-ki'}
    <path d="M17 4h14c-5 8-5 32 0 40H17c5-8 5-32 0-40z" fill={glass} />
    <path d="M4 24h40" stroke="#94a3b8" stroke-dasharray="3 2" />
  {:else if id === 'gia-quang-hoc'}
    <rect x="3" y="34" width="42" height="5" rx="1" fill="#cbd5e1" />
    <path d="M6 34v-4M42 34v-4" />
    <circle cx="9" cy="22" r="4" fill="#fef08a" />
    <path d="M9 26v8M22 26v8M34 30v4" />
    <path d="M22 12c3 3 3 11 0 14c-3-3-3-11 0-14z" fill={glass} />
    <rect x="32" y="12" width="5" height="18" fill="#f1f5f9" />
  {:else if id === 'dien-ke'}
    <rect x="5" y="8" width="38" height="32" rx="4" fill="#f8fafc" />
    <path d="M11 28a13 13 0 0 1 26 0" />
    <path d="M24 15v3M13 22l2 1.5M35 22l-2 1.5" />
    <path d="M24 30l-4-10" stroke="#dc2626" />
    <text x="24" y="38" font-size="7" fill={line} stroke="none" text-anchor="middle">G</text>
  {:else if id === 'dong-ho-da-nang'}
    <rect x="11" y="3" width="26" height="42" rx="4" fill="#facc15" />
    <rect x="15" y="7" width="18" height="9" rx="1" fill="#1e293b" />
    <text x="24" y="14" font-size="6" fill="#4ade80" stroke="none" text-anchor="middle">1,52</text>
    <circle cx="24" cy="27" r="6" fill="#334155" />
    <path d="M24 27l3-4" stroke="#fff" />
    <circle cx="17" cy="40" r="1.8" fill="#111827" />
    <circle cx="24" cy="40" r="1.8" fill="#ef4444" />
    <circle cx="31" cy="40" r="1.8" fill="#ef4444" />
  {:else if id === 'cuon-day-led'}
    <rect x="6" y="18" width="24" height="16" rx="3" fill="#fde68a" />
    <path d="M10 18v16M14 18v16M18 18v16M22 18v16M26 18v16" stroke="#b45309" />
    <path d="M30 22h6M30 30h6M36 22v8" />
    <circle cx="40" cy="20" r="3" fill="#f87171" />
    <circle cx="40" cy="32" r="3" fill="#86efac" />
    <path d="M36 22h1M36 30h1" />
  {:else if id === 'nam-cham'}
    <rect x="4" y="18" width="20" height="12" fill="#ef4444" />
    <rect x="24" y="18" width="20" height="12" fill="#3b82f6" />
    <text x="14" y="27" font-size="8" fill="#fff" stroke="none" text-anchor="middle">N</text>
    <text x="34" y="27" font-size="8" fill="#fff" stroke="none" text-anchor="middle">S</text>
  {:else if id === 'binh-cau'}
    <path d="M21 4h6v14a13 13 0 1 1-6 0z" fill={glass} />
    <path d="M13 34h22a12 12 0 0 1-22 0z" fill={liquid} stroke="none" />
    <path d="M21 4h6v14a13 13 0 1 1-6 0zM19 4h10" />
  {:else if id === 'pheu-chiet'}
    <path d="M22 3h4v4l10 16-10 6h-4l-10-6 10-16z" fill={glass} />
    <path d="M14 21h20l2 2-10 6h-4l-10-6z" fill="#fde68a" stroke="none" />
    <path d="M12 23l10 6h4l10-6" fill={liquid} stroke="none" />
    <path d="M22 3h4v4l10 16-10 6h-4l-10-6 10-16z" />
    <path d="M24 29v15M19 33h10" stroke-width="2" />
  {:else if id === 'luoi-tan-nhiet'}
    <rect x="4" y="16" width="40" height="16" rx="1" fill="#e2e8f0" />
    <path
      d="M4 20h40M4 24h40M4 28h40M10 16v16M16 16v16M22 16v16M28 16v16M34 16v16M40 16v16"
      stroke="#64748b"
      stroke-width="0.9"
    />
    <circle cx="24" cy="24" r="6" fill="#f8fafc" stroke="#94a3b8" />
  {:else if id === 'gia-thi-nghiem'}
    <rect x="4" y="40" width="26" height="5" rx="1" fill="#475569" />
    <path d="M10 40V4" stroke-width="2.6" />
    <path d="M10 14h18M10 28h14" stroke-width="2" />
    <path d="M28 10v8M24 24v8" stroke-width="2" />
    <path d="M30 6v18a3 3 0 0 0 6 0V6" fill={glass} />
  {:else if id === 'ong-dong'}
    <path d="M18 4h12v34H18z" fill={glass} />
    <path d="M18 18h12v20H18z" fill={liquid} stroke="none" />
    <path d="M18 4h12v34H18zM12 38h24v4H12zM18 10h4M18 14h3M18 18h4M18 22h3M18 26h4M18 30h3" />
  {:else if id === 'kinh-hien-vi'}
    <rect x="10" y="40" width="26" height="5" rx="1" fill="#475569" />
    <path d="M30 40c4-8 4-20-2-28" stroke-width="3" />
    <path d="M14 6l10 4-6 14-10-4z" fill="#cbd5e1" />
    <path d="M16 28h18" stroke-width="2.4" />
    <path d="M13 24l-2 4" stroke-width="2" />
  {:else if id === 'tieu-ban'}
    <rect x="3" y="17" width="42" height="14" rx="1" fill={glass} />
    <rect x="5" y="19" width="10" height="10" fill="#fff" />
    <circle cx="30" cy="24" r="5" fill="#f9a8d4" stroke="#db2777" />
    <path d="M28 22l3 4M31 22l-2 4" stroke="#831843" stroke-width="1.2" />
  {/if}
</svg>
