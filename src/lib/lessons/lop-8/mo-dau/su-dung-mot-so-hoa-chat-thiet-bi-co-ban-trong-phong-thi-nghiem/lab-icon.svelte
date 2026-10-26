<script>
  /**
   * A small line drawing of one item on the lab shelf, keyed by the item id
   * of engine.js. Decorative: the button around it carries the name.
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
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {#if id === 'lo-hoa-chat'}
    <rect x="17" y="6" width="14" height="6" rx="1" fill="#64748b" />
    <path d="M18 12h12v4l4 4v22H14V20l4-4z" fill="#fde68a" />
    <rect x="17" y="25" width="14" height="10" fill="#fff" />
    <path d="M19 29h10M19 32h6" />
  {:else if id === 'ong-nghiem'}
    <path d="M19 5v32a5 5 0 0 0 10 0V5" fill={glass} />
    <path d="M19 26v11a5 5 0 0 0 10 0V26z" fill={liquid} stroke="none" />
    <path d="M19 5v32a5 5 0 0 0 10 0V5M17 5h14" />
  {:else if id === 'gia-ong-nghiem'}
    <path d="M6 20h36M6 30h36M8 20v22M40 20v22M5 42h38" stroke-width="2.2" />
    <path d="M14 10v24a3 3 0 0 0 6 0V10M28 10v24a3 3 0 0 0 6 0V10" fill={glass} />
  {:else if id === 'coc-thuy-tinh'}
    <path d="M11 8h26l-2 34H13z" fill={glass} />
    <path d="M12 24h24l-1 18H13z" fill={liquid} stroke="none" />
    <path d="M11 8h26l-2 34H13zM9 8h3M35 14h-4M35 20h-4M35 26h-4" />
  {:else if id === 'binh-non'}
    <path d="M20 6h8v13l11 21a2 2 0 0 1-2 3H11a2 2 0 0 1-2-3l11-21z" fill={glass} />
    <path d="M14 30h20l5 10a2 2 0 0 1-2 3H11a2 2 0 0 1-2-3z" fill={liquid} stroke="none" />
    <path d="M20 6h8v13l11 21a2 2 0 0 1-2 3H11a2 2 0 0 1-2-3l11-21zM18 6h12" />
  {:else if id === 'thia'}
    <ellipse cx="14" cy="34" rx="7" ry="5" fill="#cbd5e1" transform="rotate(-40 14 34)" />
    <path d="M19 29L40 8" stroke-width="3" />
    <circle cx="14" cy="34" r="1.6" fill="#fff" stroke="none" />
  {:else if id === 'panh'}
    <path d="M38 6L12 40M42 10L14 42" stroke-width="2.4" />
    <path d="M38 6l4 4" stroke-width="2.4" />
    <rect x="8" y="38" width="7" height="5" rx="1" fill="#b45309" stroke="none" />
  {:else if id === 'ong-hut'}
    <ellipse cx="24" cy="10" rx="6" ry="7" fill="#f87171" />
    <path d="M21 16h6v6l-1.5 20h-3L21 22z" fill={glass} />
    <circle cx="24" cy="45" r="1.6" fill={liquid} stroke="none" />
  {:else if id === 'ong-dong'}
    <path d="M18 4h12v34H18z" fill={glass} />
    <path d="M18 18h12v20H18z" fill={liquid} stroke="none" />
    <path d="M18 4h12v34H18zM12 38h24v4H12zM18 10h4M18 14h3M18 18h4M18 22h3M18 26h4M18 30h3" />
  {:else if id === 'pheu-loc'}
    <path d="M8 8h32L27 24v18h-6V24z" fill={glass} />
    <path d="M13 10h22l-10 11h-2z" fill="#fff" stroke="#94a3b8" />
    <path d="M8 8h32L27 24v18h-6V24z" />
  {:else if id === 'dua-thuy-tinh'}
    <path d="M12 42L38 6" stroke-width="3.5" stroke="#94a3b8" />
    <path d="M12 42L38 6" stroke-width="1" />
  {:else if id === 'kep-ong-nghiem'}
    <path d="M6 30h22M6 34h22" stroke-width="3" stroke="#b45309" />
    <path d="M28 26c6 0 8 4 8 6s-2 6-8 6" stroke-width="2.4" />
    <path d="M36 8v30a3 3 0 0 0 6 0V8" fill={glass} />
  {:else if id === 'den-con'}
    <path d="M24 6c-5 7-5 11 0 14 5-3 5-7 0-14z" fill="#fb923c" stroke="#ea580c" />
    <path d="M22 20h4v6h-4z" fill="#e2e8f0" />
    <path d="M16 26h16l6 16H10z" fill={glass} />
    <path d="M13 34h22l3 8H10z" fill="#fecaca" stroke="none" />
    <path d="M16 26h16l6 16H10z" />
  {:else if id === 'pin'}
    <rect x="12" y="12" width="24" height="30" rx="3" fill="#fde047" />
    <rect x="20" y="7" width="8" height="5" rx="1" fill="#94a3b8" />
    <path d="M18 22h6M21 19v6M18 34h6" stroke-width="2" />
    <text x="31" y="32" font-size="7" fill={line} stroke="none" text-anchor="middle">1,5V</text>
  {:else if id === 'bien-ap-nguon'}
    <rect x="5" y="10" width="38" height="28" rx="3" fill="#e2e8f0" />
    <circle cx="16" cy="22" r="5" fill="#fff" />
    <path d="M16 22l3-3" />
    <circle cx="30" cy="31" r="2.5" fill="#ef4444" />
    <circle cx="38" cy="31" r="2.5" fill="#111827" />
    <text x="34" y="21" font-size="7" fill={line} stroke="none" text-anchor="middle">~ =</text>
  {:else if id === 'ampe-ke' || id === 'von-ke'}
    <rect x="6" y="8" width="36" height="32" rx="4" fill="#f8fafc" />
    <path d="M12 28a12 12 0 0 1 24 0" />
    <path d="M24 28l7-9" stroke="#dc2626" />
    <text
      x="24"
      y="37"
      font-size="9"
      font-weight="bold"
      fill={line}
      stroke="none"
      text-anchor="middle">{id === 'ampe-ke' ? 'A' : 'V'}</text
    >
  {:else if id === 'joulemeter'}
    <rect x="5" y="8" width="38" height="32" rx="4" fill="#e2e8f0" />
    <rect x="10" y="13" width="28" height="11" rx="1" fill="#0f172a" />
    <text x="24" y="22" font-size="8" fill="#4ade80" stroke="none" text-anchor="middle">12,5</text>
    <circle cx="14" cy="32" r="2.5" fill="#ef4444" />
    <circle cx="34" cy="32" r="2.5" fill="#111827" />
  {:else if id === 'bien-tro'}
    <rect x="8" y="22" width="32" height="10" rx="2" fill="#fcd34d" />
    <path
      d="M10 22v10M14 22v10M18 22v10M22 22v10M26 22v10M30 22v10M34 22v10M38 22v10"
      stroke-width="1"
    />
    <path d="M6 14h36M26 14v8" stroke-width="2.2" />
    <rect x="23" y="11" width="6" height="6" fill="#64748b" />
  {:else if id === 'led'}
    <path d="M16 24a8 8 0 0 1 16 0v6H16z" fill="#fca5a5" />
    <path d="M14 30h20M20 30v14M28 30v10" />
    <path d="M10 12l-4-4M38 12l4-4M24 9V4" stroke="#ef4444" />
  {:else if id === 'bong-den'}
    <circle cx="24" cy="18" r="11" fill="#fef9c3" />
    <path d="M20 22l2-6 2 5 2-5 2 6" stroke-width="1.2" />
    <path d="M18 28h12v6H18z" fill="#94a3b8" />
    <rect x="13" y="34" width="22" height="8" rx="2" fill="#1e293b" />
  {:else if id === 'cong-tac'}
    <rect x="6" y="30" width="36" height="10" rx="2" fill="#e2e8f0" />
    <circle cx="13" cy="30" r="2.5" fill="#fff" />
    <circle cx="35" cy="30" r="2.5" fill="#fff" />
    <path d="M13 30L32 18" stroke-width="2.4" />
  {:else if id === 'cau-chi'}
    <rect x="8" y="18" width="32" height="12" rx="6" fill={glass} />
    <rect x="4" y="18" width="7" height="12" rx="1" fill="#94a3b8" />
    <rect x="37" y="18" width="7" height="12" rx="1" fill="#94a3b8" />
    <path d="M11 24c4-3 6 3 9 0s6 3 9 0 6 3 8 0" stroke-width="1.2" />
  {:else if id === 'day-noi'}
    <path d="M8 36c6-20 26 4 32-22" stroke="#dc2626" stroke-width="2.6" />
    <path d="M10 42c8-14 20 0 30-12" stroke="#1f2937" stroke-width="2.6" />
    <rect x="5" y="34" width="5" height="6" rx="1" fill="#dc2626" stroke="none" />
    <rect x="38" y="10" width="5" height="6" rx="1" fill="#dc2626" stroke="none" />
  {/if}
</svg>
