/**
 * @param {string} s
 * @return {number}
 */

// Time: O(n) | Space: O(n)
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right += 1) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, set.size);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // => 3
