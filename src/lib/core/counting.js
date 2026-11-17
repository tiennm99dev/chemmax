// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Counting numbers the book's way, for combinatorics and probability lessons:
 * n!, the arrangements $A_n^k$, the combinations $C_n^k$ and the rows of
 * Pascal's triangle. Exact for the sizes lessons use (results below 2^53).
 */

/**
 * n! = 1 · 2 · … · n, with 0! = 1.
 * @param {number} n
 */
export function factorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

/**
 * $A_n^k = n(n − 1)…(n − k + 1)$, the ordered picks of k out of n; 0 when k
 * is out of range.
 * @param {number} n
 * @param {number} k
 */
export function arrangeCount(n, k) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r *= n - i;
  return r;
}

/**
 * $C_n^k$, the k-element subsets of an n-element set; 0 when k is out of
 * range. Multiplies step by step, so no large factorial is formed.
 * @param {number} n
 * @param {number} k
 */
export function choose(n, k) {
  if (k < 0 || k > n) return 0;
  const m = Math.min(k, n - k);
  let out = 1;
  for (let i = 1; i <= m; i++) out = (out * (n - m + i)) / i;
  return Math.round(out);
}

/**
 * Row n of Pascal's triangle: $C_n^0, C_n^1, …, C_n^n$.
 * @param {number} n
 */
export function pascalRow(n) {
  return Array.from({ length: n + 1 }, (_, k) => choose(n, k));
}
