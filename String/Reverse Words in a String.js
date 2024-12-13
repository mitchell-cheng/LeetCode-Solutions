/**
 * @param {string} s
 * @return {string}
 */

// Time: O(n) | Space: O(n)
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(" ");  
};