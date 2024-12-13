/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time: O(n) | Space: O(1)
var isSubsequence = function(s, t) {
  let left = 0;
  let right = 0;

  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left += 1;
    } 
    right += 1;
  }

  return left === s.length;
};