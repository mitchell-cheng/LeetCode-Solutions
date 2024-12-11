/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function singleNumber(nums) {
  let xor = 0;

  for (const num of nums) {
    xor ^= num;
  }

  return xor;
}
