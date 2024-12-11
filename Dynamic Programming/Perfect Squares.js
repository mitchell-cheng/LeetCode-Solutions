/**
 * @param {number} n
 * @return {number}
 */

// Time: O(n^2) | Space: O(n)
function numSquares(n) {
  const dp = Array.from({ length: n + 1 }, () => Infinity);
  dp[0] = 0;

  const squares = [];
  for (let i = 1; i * i <= n; i += 1) {
    squares.push(i * i);
  }

  for (let i = 1; i <= n; i += 1) {
    for (const square of squares) {
      if (i < square) {
        break;
      }
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
}

console.log(numSquares(12)); // => 3
