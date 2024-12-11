/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Time: O(m * n) | Space: O(n)
function uniquePaths(m, n) {
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}

console.log(uniquePaths(3, 7)); // => 28
