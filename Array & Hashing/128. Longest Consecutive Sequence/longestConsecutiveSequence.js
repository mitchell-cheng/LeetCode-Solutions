/**
 * Time: O(N) | Space: O(N)
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  const hashset = new Set(nums);
  let longest = 0;

  for (const element of hashset) {
    if (!hashset.has(element-1)) {
      let length = 1;
      while (hashset.has(element+length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }
    
  return longest;
};