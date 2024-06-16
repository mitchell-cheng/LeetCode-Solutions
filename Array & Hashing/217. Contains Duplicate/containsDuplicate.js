/**
 * Time O(1) | Space O(n)
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {
  const numSet = new Set(nums);
  
  return numSet.size !== nums.length;
};