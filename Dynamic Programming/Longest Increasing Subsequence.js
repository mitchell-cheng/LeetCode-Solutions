/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n^2) | Space: O(n)
function lengthOfLIS(nums) {
  const dp = Array.from({ length: nums.length }, () => 1);

  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // => 4
