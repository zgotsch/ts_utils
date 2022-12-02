/**
 * The "asymmetric" difference of two arrays. Given two arrays, x and y, return x - y and y - x.
 * Order is preserved.
 *
 * @param left The first array.
 * @param right The second array.
 * @returns A tuple `[left - right, right - left]`
 */
export function asymmetricDifference<T>(
  left: ReadonlyArray<T>,
  right: ReadonlyArray<T>,
): [T[], T[]] {
  const leftSet = new Set(left)
  const rightSet = new Set(right)
  const leftOnly = left.filter((x) => !rightSet.has(x))
  const rightOnly = right.filter((x) => !leftSet.has(x))
  return [leftOnly, rightOnly]
}

/**
 * Shallowly compare two arrays for equality using strict equality.
 */
export function arraysEqual<T>(
  a: ReadonlyArray<T>,
  b: ReadonlyArray<T>,
): boolean {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}
