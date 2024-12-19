/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
var missingNumber = function(nums) {
  let expectedSum = 0;
  const n = nums.length;

  for (let i = 0; i <= n; i += 1) {
    expectedSum += i;
  }

  let actualSum = 0;
  for (const num of nums) {
    actualSum += num;
  }

  return expectedSum - actualSum;
};