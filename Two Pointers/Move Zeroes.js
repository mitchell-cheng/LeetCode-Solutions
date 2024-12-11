/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time: O(n) | Space: O(1)
function moveZeroes(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
  }

  return nums;
}
