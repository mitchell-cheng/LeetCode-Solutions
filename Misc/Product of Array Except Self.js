/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time: O(n) | Space: O(n)
function productExceptSelf(nums) {
  let prefix = 1;
  let postfix = 1;
  const result = Array.from({ length: nums.length }, () => 1);

  for (let i = 0; i < nums.length; i += 1) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}
