/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time: O(n) | Space: O(n)
const containsDuplicate = function(nums) {
  return nums.length !== (new Set(nums).size);
};