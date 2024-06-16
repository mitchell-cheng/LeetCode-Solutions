/**
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const result = new Array(nums.length).fill(1);
  let [prefix, postfix] = [1, 1];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};