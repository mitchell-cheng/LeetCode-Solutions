/**
 * Time: O(s) | Space: O(m)
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let pre = strs[0];
  
  for(const word of strs) {           
    for(let i = pre.length - 1; i >= 0; i--) {
      if(pre[i] !== word[i]) {
        pre = pre.slice(0, i);
      }
    }
  }
  
  return pre;
};