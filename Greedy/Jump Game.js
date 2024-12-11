/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time: O(n) | Space: O(1)
function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (maxReach < i) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
