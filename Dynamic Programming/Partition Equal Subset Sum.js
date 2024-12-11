/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) {
    return false;
  }

  const target = totalSum / 2;
  const dp = Array.from({ length: target + 1 }, () => false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = target; j >= num; j -= 1) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
}

console.log(canPartition([1, 5, 11, 5]));
// => true
