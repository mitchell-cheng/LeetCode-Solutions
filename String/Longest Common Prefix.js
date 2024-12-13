/**
 * @param {string[]} strs
 * @return {string}
 */

// Time: O(n) | Space: O(1)
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for (const str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return prefix;
      }  
    }
  }

  return prefix;
};