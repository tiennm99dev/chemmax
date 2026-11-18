// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Folds Vietnamese text for diacritic-insensitive search: lower case, tone
 * marks and other diacritics dropped, đ → d, runs of spaces collapsed.
 * "Số hữu tỉ" and "so huu ti" fold to the same string.
 * @param {string} text
 */
export function fold(text) {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}
