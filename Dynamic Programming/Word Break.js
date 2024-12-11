/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Time: O(n^2 * m) | Space: O(n)
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array.from({ length: s.length + 1 }, () => false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // => true
