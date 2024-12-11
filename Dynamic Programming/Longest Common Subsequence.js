/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Time: O(m * n) | Space: O(m * n)
function longestCommonSubsequence(text1, text2) {
  const dp = Array.from({ length: text1.length + 1 }, () => {
    return Array.from({ length: text2.length + 1 }, () => 0);
  });

  for (let i = 1; i <= text1.length; i += 1) {
    for (let j = 1; j <= text2.length; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}

console.log(longestCommonSubsequence("abcde", "ace")); // => 3
