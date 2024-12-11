/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Time: O(amount * coins) | Space: O(amount)
function coinChange(coins, amount) {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i += 1) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // => 3
