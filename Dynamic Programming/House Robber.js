/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function rob(nums) {
  let prev = 0;
  let curr = 0;

  for (const num of nums) {
    const temp = curr;
    curr = Math.max(curr, prev + nums[i]);
    prev = temp;
  }

  return curr;
}

console.log(rob([1, 2, 3, 1])); // => 4
