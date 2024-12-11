/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// Time: O(m * n) | Space: O(m * n)
function minDistance(word1, word2) {
  const dp = Array.from({ length: word1.length + 1 }, () => {
    return Array.from({ length: word2.length + 1 }, () => 0);
  });

  for (let i = 0; i <= word1.length; i += 1) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= word2.length; j += 1) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i += 1) {
    for (let j = 1; j <= word2.length; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[word1.length][word2.length];
}

console.log(minDistance("horse", "ros"));
// =>  3
