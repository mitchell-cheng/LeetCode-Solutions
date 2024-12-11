/**
 * @param {number} n
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function climbStairs(n) {
  if (n < 2) {
    return n;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 2; i < n; i += 1) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
