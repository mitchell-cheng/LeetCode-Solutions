/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let currSum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right += 1) {
    currSum += nums[right];

    while (currSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currSum -= nums[left];
      left += 1;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};