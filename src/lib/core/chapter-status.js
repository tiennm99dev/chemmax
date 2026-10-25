// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Badge status of a chapter from how many of its lessons are live: `live` only
 * when every lesson is written, `partial` when some are, `stub` when none are.
 * @param {number} live
 * @param {number} total
 * @returns {'live' | 'partial' | 'stub'}
 */
export function chapterStatus(live, total) {
  if (live <= 0) return 'stub';
  return live >= total ? 'live' : 'partial';
}
