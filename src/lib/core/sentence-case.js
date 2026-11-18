// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Puts a name or phrase into the middle of a sentence: the first letter is
 * lowered (`Thiên địch` → `thiên địch`), unless the text starts with an
 * abbreviation or a formula of two capitals (`DNA tái tổ hợp`, `CO₂`), which
 * keeps its case.
 * @param {string} text
 */
export function lowerFirst(text) {
  if (/^\p{Lu}\p{Lu}/u.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}
