/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function maxSubArray(nums) {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    currSum = Math.max(nums[i], nums[i] + currSum);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}
