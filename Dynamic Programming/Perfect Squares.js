/**
 * @param {number} n
 * @return {number}
 */

// Time: O(n^2) | Space: O(n)
var numSquares = function(n) {
  const dp = Array.from({ length: n + 1 }, () => Infinity);
  dp[0] = 0;

  const maxSquareRoot = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= maxSquareRoot; i += 1) {
    for (let j = i * i; j <= n; j += 1) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }

  return dp[n];
};

console.log(numSquares(12)); // => 3
