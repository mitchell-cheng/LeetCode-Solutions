/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
var removeDuplicates = function(nums) {
  let left = 0;
  for (let right = 1; right < nums.length; right += 1) {
    if (nums[left] !== nums[right]) {
      left += 1;
      nums[left] = nums[right];
    }
  }  

  return left + 1;
};