/**
 * @param {string} s
 * @return {string}
 */

// Time: O(n^2) | Space: O(1)
function longestPalindrome(s) {
  let start = 0;
  let maxLen = 0;

  const expandAroundCenter = (i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      const currLen = j - i + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
        start = i;
      }

      i -= 1;
      j += 1;
    }
  };

  for (let i = 0; i < s.length; i += 1) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.slice(start, start + maxLen);
}

console.log(longestPalindrome("babad")); // => "bab"
